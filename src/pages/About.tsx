import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">About Us</h1>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-muted-foreground mb-6">
              We are a leading IT solutions provider dedicated to helping small and mid-sized enterprises 
              harness the power of technology to drive business growth and innovation.
            </p>
            
            <p className="text-muted-foreground mb-8">
              Founded with a vision to democratize enterprise-level technology solutions, we have been serving 
              businesses across various industries for over a decade. Our team of experienced professionals 
              combines technical expertise with business acumen to deliver solutions that not only meet current 
              needs but also prepare businesses for future challenges.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-muted-foreground">
                  To empower businesses with innovative technology solutions that drive efficiency, 
                  productivity, and sustainable growth while ensuring the highest standards of security and reliability.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p className="text-muted-foreground">
                  To be the trusted technology partner for businesses worldwide, enabling them to thrive 
                  in the digital age through cutting-edge solutions and exceptional service.
                </p>
              </div>
            </div>
            
            <h2 className="text-3xl font-semibold mb-6">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <p className="text-muted-foreground">Years of Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Satisfied Clients</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Support Available</p>
              </div>
            </div>
            
            <h2 className="text-3xl font-semibold mb-6">Our Values</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold mb-2">Innovation</h3>
                  <p className="text-muted-foreground">We continuously explore new technologies and methodologies to provide cutting-edge solutions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold mb-2">Reliability</h3>
                  <p className="text-muted-foreground">We deliver consistent, dependable solutions that our clients can trust.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold mb-2">Excellence</h3>
                  <p className="text-muted-foreground">We strive for excellence in everything we do, from initial consultation to ongoing support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;