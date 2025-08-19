import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Users } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform Modernization",
      description: "Complete digital transformation of a traditional retail business, implementing a modern e-commerce platform with advanced analytics and inventory management.",
      client: "RetailCorp Inc.",
      duration: "6 months",
      team: "8 developers",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Redis"],
      status: "Completed",
      results: "300% increase in online sales, 50% reduction in inventory costs"
    },
    {
      id: 2,
      title: "Healthcare Management System",
      description: "Development of a comprehensive healthcare management system for a mid-sized medical practice, including patient records, appointment scheduling, and billing integration.",
      client: "MedCenter Group",
      duration: "8 months",
      team: "6 developers",
      technologies: ["Angular", "Java", "Spring Boot", "MySQL", "Docker"],
      status: "Completed",
      results: "40% improvement in patient processing time, 99.9% uptime"
    },
    {
      id: 3,
      title: "Financial Analytics Dashboard",
      description: "Real-time financial analytics and reporting dashboard for a growing fintech company, providing insights into customer behavior and market trends.",
      client: "FinTech Solutions",
      duration: "4 months",
      team: "5 developers",
      technologies: ["Vue.js", "Python", "Django", "MongoDB", "Elasticsearch"],
      status: "Completed",
      results: "Real-time data processing, 60% faster report generation"
    },
    {
      id: 4,
      title: "Manufacturing IoT Solution",
      description: "IoT-based monitoring and automation system for a manufacturing company, enabling predictive maintenance and operational efficiency improvements.",
      client: "ManufactureTech Ltd.",
      duration: "10 months",
      team: "12 developers",
      technologies: ["React", "Python", "IoT Sensors", "Azure", "Machine Learning"],
      status: "In Progress",
      results: "Expected 25% reduction in downtime, 15% cost savings"
    },
    {
      id: 5,
      title: "Educational Platform Migration",
      description: "Cloud migration and modernization of an educational platform serving over 50,000 students, ensuring scalability and improved performance.",
      client: "EduTech Academy",
      duration: "5 months",
      team: "7 developers",
      technologies: ["React", "Node.js", "Kubernetes", "Google Cloud", "MongoDB"],
      status: "Completed",
      results: "99.95% uptime, 3x faster load times, 50% cost reduction"
    },
    {
      id: 6,
      title: "Supply Chain Optimization",
      description: "AI-powered supply chain optimization system for a logistics company, providing real-time tracking and predictive analytics for better decision making.",
      client: "LogiFlow Systems",
      duration: "7 months",
      team: "9 developers",
      technologies: ["Angular", "Python", "TensorFlow", "PostgreSQL", "Redis"],
      status: "In Progress",
      results: "Expected 20% improvement in delivery times"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Our Projects</h1>
            <p className="text-lg text-muted-foreground">
              Explore our successful project implementations and see how we've helped businesses 
              achieve their digital transformation goals.
            </p>
          </div>
          
          <div className="grid gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <ExternalLink size={16} className="text-primary" />
                      <div>
                        <p className="text-sm font-medium">Client</p>
                        <p className="text-sm text-muted-foreground">{project.client}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} className="text-primary" />
                      <div>
                        <p className="text-sm font-medium">Duration</p>
                        <p className="text-sm text-muted-foreground">{project.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users size={16} className="text-primary" />
                      <div>
                        <p className="text-sm font-medium">Team Size</p>
                        <p className="text-sm text-muted-foreground">{project.team}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">Key Results</p>
                      <p className="text-sm text-muted-foreground">{project.results}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Technologies Used</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Interested in working with us on your next project?
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;