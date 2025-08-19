import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Our Services</h1>
          <p className="text-lg text-muted-foreground mb-12">
            We offer a comprehensive range of IT services to help your business thrive in the digital age.
          </p>
          
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-lg border">
              <h2 className="text-2xl font-semibold mb-4">IT Consulting</h2>
              <p className="text-muted-foreground mb-4">
                Strategic IT consulting to align technology with your business objectives. Our experts help you 
                make informed decisions about technology investments and digital strategies.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Technology strategy development</li>
                <li>Digital transformation planning</li>
                <li>IT infrastructure assessment</li>
                <li>Cost optimization recommendations</li>
              </ul>
            </div>
            
            <div className="bg-card p-8 rounded-lg border">
              <h2 className="text-2xl font-semibold mb-4">Managed IT Services</h2>
              <p className="text-muted-foreground mb-4">
                24/7 monitoring and management of your IT infrastructure. Focus on your core business while 
                we take care of your technology needs.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Network monitoring and maintenance</li>
                <li>Server management</li>
                <li>Help desk support</li>
                <li>Security management</li>
              </ul>
            </div>
            
            <div className="bg-card p-8 rounded-lg border">
              <h2 className="text-2xl font-semibold mb-4">Software Development</h2>
              <p className="text-muted-foreground mb-4">
                Custom software solutions designed to meet your specific business requirements. From web 
                applications to mobile apps, we deliver quality software solutions.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Web application development</li>
                <li>Mobile app development</li>
                <li>Enterprise software solutions</li>
                <li>API development and integration</li>
              </ul>
            </div>
            
            <div className="bg-card p-8 rounded-lg border">
              <h2 className="text-2xl font-semibold mb-4">Cloud Migration</h2>
              <p className="text-muted-foreground mb-4">
                Seamless migration to cloud platforms with minimal downtime and maximum security. We handle 
                the entire migration process from planning to execution.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Cloud readiness assessment</li>
                <li>Migration planning and execution</li>
                <li>Data migration services</li>
                <li>Post-migration support</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;