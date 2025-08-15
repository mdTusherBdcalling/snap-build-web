import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-hero-bg py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            On-Demand
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-text-dark mb-8">
            for Small and Mid-Sized Enterprises
          </h2>
          <p className="text-xl text-text-light mb-12 max-w-3xl mx-auto">
            Transform your business operations with our comprehensive suite of on-demand solutions 
            designed specifically for growing enterprises. Scale efficiently and stay competitive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4">
              Get Started Today
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;