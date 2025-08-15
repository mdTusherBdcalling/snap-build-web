import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Zap, Shield, Globe, TrendingUp } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Proven Solutions",
      description: "Battle-tested solutions that deliver results for businesses like yours."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Expert Team",
      description: "Work with industry experts who understand your unique challenges."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Fast Implementation",
      description: "Get up and running quickly with our streamlined deployment process."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Enterprise Security",
      description: "Bank-level security protocols to protect your sensitive business data."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Reach",
      description: "Scale your operations worldwide with our international infrastructure."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Growth Focused",
      description: "Solutions designed to grow with your business and adapt to your needs."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and services your business needs 
            to thrive in today's competitive marketplace.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  {feature.icon}
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-text-light">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;