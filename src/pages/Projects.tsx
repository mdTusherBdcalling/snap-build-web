import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Users } from "lucide-react";
import realEstateApp from "@/assets/real-estate-app.jpg";
import foodDeliveryApp from "@/assets/food-delivery-app.jpg";
import restaurantApp from "@/assets/restaurant-app.jpg";
import ticketApp from "@/assets/ticket-app.jpg";
import serviceProviderApp from "@/assets/service-provider-app.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "PropertyHub - Real Estate Platform",
      description: "Comprehensive real estate platform with advanced property search, virtual tours, mortgage calculators, and agent management system. Features include map integration, property comparison, and automated valuation models.",
      client: "PropertyHub Inc.",
      duration: "8 months",
      team: "10 developers",
      technologies: ["React Native", "Node.js", "PostgreSQL", "AWS", "Google Maps API", "Stripe"],
      status: "Completed",
      results: "500+ properties listed, 10,000+ active users, 40% faster property searches",
      image: realEstateApp
    },
    {
      id: 2,
      title: "QuickBite - Food Delivery App",
      description: "On-demand food delivery platform connecting customers with local restaurants. Features real-time order tracking, multiple payment options, restaurant management dashboard, and delivery driver app.",
      client: "QuickBite Solutions",
      duration: "6 months",
      team: "12 developers",
      technologies: ["Flutter", "Firebase", "Node.js", "MongoDB", "Socket.io", "PayPal API"],
      status: "Completed",
      results: "200+ partner restaurants, 25,000+ orders delivered, 4.8/5 user rating",
      image: foodDeliveryApp
    },
    {
      id: 3,
      title: "RestaurantPro - Management System",
      description: "Complete restaurant management solution with table reservations, menu management, inventory tracking, staff scheduling, and analytics dashboard. Includes POS integration and customer loyalty program.",
      client: "RestaurantPro Chain",
      duration: "7 months",
      team: "8 developers",
      technologies: ["React", "Express.js", "MySQL", "Redis", "Chart.js", "Square API"],
      status: "Completed",
      results: "30% increase in table turnover, 50% reduction in inventory waste, automated reporting",
      image: restaurantApp
    },
    {
      id: 4,
      title: "EventTicket - Booking Platform",
      description: "Comprehensive ticket booking platform for concerts, sports events, and entertainment shows. Features dynamic pricing, seat selection, digital ticket delivery, and event organizer dashboard.",
      client: "EventTicket Corp",
      duration: "9 months",
      team: "11 developers",
      technologies: ["Vue.js", "Python", "Django", "PostgreSQL", "Celery", "Razorpay"],
      status: "Completed",
      results: "1M+ tickets sold, 500+ events hosted, 99.9% uptime during peak sales",
      image: ticketApp
    },
    {
      id: 5,
      title: "ServiceConnect - Home Services App",
      description: "Marketplace app connecting homeowners with verified service providers for cleaning, plumbing, electrical work, and maintenance. Features provider verification, booking system, and secure payments.",
      client: "ServiceConnect Ltd",
      duration: "10 months",
      team: "14 developers",
      technologies: ["React Native", "Node.js", "MongoDB", "AWS", "Twilio", "Stripe"],
      status: "In Progress",
      results: "1,500+ verified providers, 50,000+ services completed, 4.7/5 average rating",
      image: serviceProviderApp
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
              <Card key={project.id} className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-auto">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
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
                  </div>
                </div>
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