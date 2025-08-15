import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-hero-bg via-background to-section-bg py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 animate-fade-in">
            <CheckCircle className="h-4 w-4 mr-2" />
            Trusted by 500+ Companies Worldwide
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 animate-slide-up">
            On-Demand IT Solutions
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-text-dark mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            for Small and Mid-Sized Enterprises
          </h2>
          <p className="text-xl text-text-light mb-12 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
            Transform your business operations with our comprehensive suite of cutting-edge solutions. 
            From custom development to cloud infrastructure, we help growing enterprises scale efficiently 
            and stay competitive in today's digital landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold group hover-glow"
              onClick={scrollToContact}
            >
              Start Your Project
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold group"
            >
              <Play className="h-5 w-5 mr-2" />
              Watch Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-scale-in" style={{ animationDelay: "0.8s" }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-text-light">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-text-light">Expert Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-text-light">Projects Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;