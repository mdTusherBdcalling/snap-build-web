-- Create a table for contact form submissions
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'responded'))
);

-- Enable Row Level Security
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public contact form)
CREATE POLICY "Anyone can submit contact messages" 
ON public.contact_messages 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow reading (for dashboard - we'll make this public for now)
CREATE POLICY "Anyone can view contact messages" 
ON public.contact_messages 
FOR SELECT 
USING (true);

-- Create policy to allow updating status
CREATE POLICY "Anyone can update message status" 
ON public.contact_messages 
FOR UPDATE 
USING (true);

-- Create index for better performance
CREATE INDEX idx_contact_messages_created_at ON public.contact_messages(created_at DESC);
CREATE INDEX idx_contact_messages_status ON public.contact_messages(status);