import { Button } from "@/components/ui/button";

const BlueSection = () => {
  return (
    <section className="bg-blue-section py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            We're Trusted Globally
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Over 5 years, we've helped businesses across the globe achieve their goals 
            with our proven methodologies and innovative solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">99%</div>
              <div className="text-white/80">Success Rate</div>
            </div>
          </div>
          
          <Button variant="secondary" size="lg" className="px-8 py-4">
            See Our Track Record
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlueSection;