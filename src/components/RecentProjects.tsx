import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Users } from "lucide-react";

const RecentProjects = () => {
  const projects = [
    {
      title: "E-Commerce Platform Modernization",
      client: "TechRetail Inc.",
      description: "Complete digital transformation of legacy e-commerce system with modern React frontend and microservices architecture.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "AWS", "PostgreSQL"],
      timeline: "6 months",
      team: "8 developers",
      results: ["300% performance improvement", "50% reduction in load times", "99.9% uptime"],
      status: "Completed"
    },
    {
      title: "Financial Dashboard & Analytics",
      client: "FinanceFlow Solutions",
      description: "Real-time financial analytics dashboard with advanced reporting and data visualization capabilities.",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "Python", "Docker", "MongoDB"],
      timeline: "4 months",
      team: "6 developers",
      results: ["Real-time data processing", "Custom analytics engine", "Mobile-responsive design"],
      status: "Completed"
    },
    {
      title: "Healthcare Management System",
      client: "MedCare Hospital Group",
      description: "Comprehensive patient management system with appointment scheduling, medical records, and telemedicine features.",
      image: "/placeholder.svg",
      technologies: ["React Native", "Node.js", "PostgreSQL", "Redis"],
      timeline: "8 months",
      team: "12 developers",
      results: ["HIPAA compliant", "50% faster patient processing", "Integrated telemedicine"],
      status: "In Progress"
    },
    {
      title: "Supply Chain Optimization",
      client: "LogiFlow International",
      description: "AI-powered supply chain management platform with predictive analytics and automated inventory management.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "Python", "TensorFlow", "AWS"],
      timeline: "5 months",
      team: "10 developers",
      results: ["30% cost reduction", "AI-powered forecasting", "Real-time tracking"],
      status: "Completed"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Our Recent Projects
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations with 
            innovative technology solutions and expert implementation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="border-border hover-glow animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
                <p className="text-sm text-accent-foreground mb-3 font-medium">{project.client}</p>
                <p className="text-text-light mb-4">{project.description}</p>
                
                <div className="flex items-center space-x-6 mb-4 text-sm text-text-light">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{project.timeline}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{project.team}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-2">Key Results:</h4>
                  <ul className="text-sm text-text-light space-y-1">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex items-center space-x-1">
                    <ExternalLink className="h-4 w-4" />
                    <span>View Project</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="px-8 py-4">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;