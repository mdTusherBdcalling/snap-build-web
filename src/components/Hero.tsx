import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-hero-bg py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-hero-bg to-section-bg"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
            On-Demand Solutions
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-text-dark mb-8 animate-slide-up">
            for Small and Mid-Sized Enterprises
          </h2>
          <p className="text-xl text-text-light mb-12 max-w-3xl mx-auto animate-fade-in">
            Transform your business operations with our comprehensive suite of on-demand solutions 
            designed specifically for growing enterprises. Scale efficiently and stay competitive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" className="px-8 py-4 hover-lift shadow-elegant">
              Get Started Today
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 hover-lift">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating elements for visual appeal */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/3 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-primary/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default Hero;