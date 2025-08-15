import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Code, Database, Cloud, BarChart3, Settings } from "lucide-react";

const Services = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: <Briefcase className="h-12 w-12 text-primary" />,
      title: "Business Consulting",
      description: "Strategic guidance to optimize your business processes and drive growth.",
      features: ["Process Optimization", "Strategic Planning", "Market Analysis"]
    },
    {
      icon: <Code className="h-12 w-12 text-primary" />,
      title: "Custom Development",
      description: "Tailored software solutions built to meet your specific business requirements.",
      features: ["Web Applications", "Mobile Apps", "API Integration"]
    },
    {
      icon: <Database className="h-12 w-12 text-primary" />,
      title: "Data Management",
      description: "Comprehensive data solutions to help you make informed business decisions.",
      features: ["Data Migration", "Database Design", "Analytics Setup"]
    },
    {
      icon: <Cloud className="h-12 w-12 text-primary" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure to support your growing business needs.",
      features: ["Cloud Migration", "Infrastructure Setup", "DevOps Services"]
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-primary" />,
      title: "Business Intelligence",
      description: "Transform your data into actionable insights for better decision making.",
      features: ["Reporting Dashboards", "Data Visualization", "Predictive Analytics"]
    },
    {
      icon: <Settings className="h-12 w-12 text-primary" />,
      title: "System Integration",
      description: "Seamlessly connect your existing systems for improved efficiency.",
      features: ["API Development", "Legacy System Updates", "Workflow Automation"]
    }
  ];

  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            We Are Good At
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            Our expertise spans across multiple domains, enabling us to provide 
            comprehensive solutions for all your business technology needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow h-full">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center flex-1 flex flex-col">
                <p className="text-text-light mb-6 flex-1">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-text-light">
                      • {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full group hover-glow"
                  onClick={scrollToContact}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="px-8 py-4 hover-glow"
            onClick={scrollToContact}
          >
            View All Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;