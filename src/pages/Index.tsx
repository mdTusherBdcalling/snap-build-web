import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BlueSection from "@/components/BlueSection";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import RecentProjects from "@/components/RecentProjects";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <BlueSection />
      <Services />
      <TechStack />
      <RecentProjects />
      <Testimonials />
      <ContactForm />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
