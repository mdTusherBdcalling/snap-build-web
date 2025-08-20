import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Calendar, User, Building2, MessageSquare } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  company: string | null;
  message: string;
  status: 'unread' | 'read' | 'responded';
  created_at: string;
}

const Dashboard = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'unread' | 'read' | 'responded'>('all');
  const { toast } = useToast();

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMessages((data || []) as ContactMessage[]);
    } catch (error) {
      console.error('Error fetching messages:', error);
      toast({
        title: "Error loading messages",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateMessageStatus = async (id: string, status: 'read' | 'responded') => {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({ status })
        .eq('id', id);

      if (error) throw error;

      setMessages(prev => 
        prev.map(msg => 
          msg.id === id ? { ...msg, status } : msg
        )
      );

      toast({
        title: "Status updated",
        description: `Message marked as ${status}.`,
      });
    } catch (error) {
      console.error('Error updating status:', error);
      toast({
        title: "Error updating status",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  const filteredMessages = messages.filter(msg => 
    filter === 'all' || msg.status === filter
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'unread': return 'bg-red-100 text-red-800';
      case 'read': return 'bg-yellow-100 text-yellow-800';
      case 'responded': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const stats = {
    total: messages.length,
    unread: messages.filter(m => m.status === 'unread').length,
    read: messages.filter(m => m.status === 'read').length,
    responded: messages.filter(m => m.status === 'responded').length,
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Dashboard
            </h1>
            <p className="text-lg text-muted-foreground">
              Manage your contact form submissions
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <MessageSquare className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground">Total Messages</p>
                    <p className="text-2xl font-bold">{stats.total}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Mail className="h-8 w-8 text-red-500" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground">Unread</p>
                    <p className="text-2xl font-bold">{stats.unread}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Calendar className="h-8 w-8 text-yellow-500" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground">Read</p>
                    <p className="text-2xl font-bold">{stats.read}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <MessageSquare className="h-8 w-8 text-green-500" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground">Responded</p>
                    <p className="text-2xl font-bold">{stats.responded}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Messages */}
          <Card>
            <CardHeader>
              <CardTitle>Messages</CardTitle>
              <Tabs value={filter} onValueChange={(value) => setFilter(value as any)}>
                <TabsList>
                  <TabsTrigger value="all">All ({stats.total})</TabsTrigger>
                  <TabsTrigger value="unread">Unread ({stats.unread})</TabsTrigger>
                  <TabsTrigger value="read">Read ({stats.read})</TabsTrigger>
                  <TabsTrigger value="responded">Responded ({stats.responded})</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredMessages.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    No messages found.
                  </div>
                ) : (
                  filteredMessages.map((msg) => (
                    <Card key={msg.id} className="border">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start space-x-4">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <User className="h-4 w-4 text-muted-foreground" />
                                <span className="font-semibold">{msg.name}</span>
                                <Badge className={getStatusColor(msg.status)}>
                                  {msg.status}
                                </Badge>
                              </div>
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                                <div className="flex items-center space-x-1">
                                  <Mail className="h-4 w-4" />
                                  <span>{msg.email}</span>
                                </div>
                                {msg.company && (
                                  <div className="flex items-center space-x-1">
                                    <Building2 className="h-4 w-4" />
                                    <span>{msg.company}</span>
                                  </div>
                                )}
                                <div className="flex items-center space-x-1">
                                  <Calendar className="h-4 w-4" />
                                  <span>{new Date(msg.created_at).toLocaleDateString()}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            {msg.status === 'unread' && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateMessageStatus(msg.id, 'read')}
                              >
                                Mark as Read
                              </Button>
                            )}
                            {msg.status !== 'responded' && (
                              <Button
                                size="sm"
                                onClick={() => updateMessageStatus(msg.id, 'responded')}
                              >
                                Mark as Responded
                              </Button>
                            )}
                          </div>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-4">
                          <p className="text-sm whitespace-pre-wrap">{msg.message}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;