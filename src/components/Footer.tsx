import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from "lucide-react";

const Footer = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="gradient-bg text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">TechSolutions Pro</h3>
            <p className="text-white/80 mb-6">
              Empowering businesses with innovative on-demand solutions for sustainable growth and success. 
              Your trusted partner in digital transformation.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2 text-white/80">
                <Mail className="h-4 w-4" />
                <span>hello@techsolutions.com</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <MapPin className="h-4 w-4" />
                <span>123 Business Ave, NY 10001</span>
              </div>
            </div>
            <Button 
              variant="secondary" 
              onClick={scrollToContact}
              className="hover-glow"
            >
              Contact Us
            </Button>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li><button onClick={scrollToServices} className="hover:text-white transition-colors text-left">Custom Development</button></li>
              <li><button onClick={scrollToServices} className="hover:text-white transition-colors text-left">Cloud Solutions</button></li>
              <li><button onClick={scrollToServices} className="hover:text-white transition-colors text-left">Mobile Apps</button></li>
              <li><button onClick={scrollToServices} className="hover:text-white transition-colors text-left">Data Management</button></li>
              <li><button onClick={scrollToServices} className="hover:text-white transition-colors text-left">Cybersecurity</button></li>
              <li><button onClick={scrollToServices} className="hover:text-white transition-colors text-left">Digital Transformation</button></li>
            </ul>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#news" className="hover:text-white transition-colors">News</a></li>
              <li><a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#partners" className="hover:text-white transition-colors">Partners</a></li>
            </ul>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-white/80 mb-6">
              <li><a href="#help" className="hover:text-white transition-colors">Help Center</a></li>
              <li><button onClick={scrollToContact} className="hover:text-white transition-colors text-left">Contact Support</button></li>
              <li><a href="#docs" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#community" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#status" className="hover:text-white transition-colors">System Status</a></li>
            </ul>
            
            <div>
              <h5 className="font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors hover-glow">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors hover-glow">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors hover-glow">
                  <Github className="h-4 w-4" />
                </a>
                <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors hover-glow">
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="flex flex-col md:flex-row justify-between items-center text-white/60">
            <p>&copy; 2024 TechSolutions Pro. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#cookies" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;