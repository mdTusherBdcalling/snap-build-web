import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Cloud, Smartphone, Globe, Shield } from "lucide-react";

const TechStack = () => {
  const technologies = [
    {
      category: "Frontend",
      icon: <Code className="h-8 w-8 text-primary" />,
      techs: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"],
      description: "Modern frontend frameworks for stunning user experiences"
    },
    {
      category: "Backend",
      icon: <Database className="h-8 w-8 text-primary" />,
      techs: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"],
      description: "Scalable backend solutions for robust applications"
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud className="h-8 w-8 text-primary" />,
      techs: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
      description: "Cloud-native infrastructure for maximum reliability"
    },
    {
      category: "Mobile",
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      techs: ["React Native", "Flutter", "iOS", "Android", "PWA"],
      description: "Cross-platform mobile solutions"
    },
    {
      category: "Web Technologies",
      icon: <Globe className="h-8 w-8 text-primary" />,
      techs: ["GraphQL", "REST APIs", "WebSockets", "Microservices"],
      description: "Modern web architecture and APIs"
    },
    {
      category: "Security",
      icon: <Shield className="h-8 w-8 text-primary" />,
      techs: ["OAuth", "JWT", "SSL/TLS", "Encryption", "GDPR"],
      description: "Enterprise-grade security implementations"
    }
  ];

  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Our Tech Stack
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build scalable, secure, and 
            high-performance solutions for your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card 
              key={index} 
              className="tech-card border-border hover-glow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  {tech.icon}
                  <h3 className="text-xl font-semibold text-primary">{tech.category}</h3>
                </div>
                <p className="text-text-light mb-4">{tech.description}</p>
                <div className="flex flex-wrap gap-2">
                  {tech.techs.map((techName, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {techName}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;