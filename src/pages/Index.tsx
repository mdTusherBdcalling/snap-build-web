import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BlueSection from "@/components/BlueSection";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <BlueSection />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
