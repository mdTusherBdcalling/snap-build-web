import { Button } from "@/components/ui/button";
import { Award, TrendingUp, Users, Globe } from "lucide-react";

const BlueSection = () => {
  const metrics = [
    {
      icon: <Users className="h-8 w-8 text-white" />,
      number: "500+",
      label: "Clients Served",
      description: "Happy customers worldwide"
    },
    {
      icon: <Globe className="h-8 w-8 text-white" />,
      number: "50+",
      label: "Countries",
      description: "Global presence and reach"
    },
    {
      icon: <Award className="h-8 w-8 text-white" />,
      number: "99%",
      label: "Success Rate",
      description: "Project completion excellence"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      number: "5x",
      label: "ROI Average",
      description: "Return on investment"
    }
  ];

  return (
    <section className="relative overflow-hidden gradient-bg py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              We're Trusted Globally
            </h2>
            <p className="text-xl text-white/90 mb-16 max-w-3xl mx-auto">
              Over 5 years, we've helped businesses across the globe achieve their goals 
              with our proven methodologies and innovative solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {metrics.map((metric, index) => (
              <div 
                key={index} 
                className="text-center animate-scale-in hover-glow p-6 rounded-lg bg-white/5 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  {metric.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2">{metric.number}</div>
                <div className="text-white/90 font-semibold mb-1">{metric.label}</div>
                <div className="text-sm text-white/70">{metric.description}</div>
              </div>
            ))}
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button 
              variant="secondary" 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold hover-glow"
            >
              See Our Track Record
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlueSection;