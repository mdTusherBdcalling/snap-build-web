import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Solutions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Our Solutions</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              We provide comprehensive IT solutions tailored to meet the unique needs of small and mid-sized enterprises. 
              Our expert team delivers cutting-edge technology solutions that drive business growth and efficiency.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-semibold mb-4">Cloud Solutions</h2>
                <p className="text-muted-foreground">
                  Migrate your business to the cloud with our secure, scalable, and cost-effective cloud solutions. 
                  We help you leverage the power of cloud computing to streamline operations.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-semibold mb-4">Digital Transformation</h2>
                <p className="text-muted-foreground">
                  Transform your business processes with our digital transformation services. We help you adopt 
                  modern technologies to improve efficiency and competitiveness.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-semibold mb-4">Cybersecurity</h2>
                <p className="text-muted-foreground">
                  Protect your business with our comprehensive cybersecurity solutions. We provide advanced 
                  threat protection, security monitoring, and compliance management.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-semibold mb-4">Data Analytics</h2>
                <p className="text-muted-foreground">
                  Unlock the power of your data with our advanced analytics solutions. Make data-driven 
                  decisions that drive business growth and competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;