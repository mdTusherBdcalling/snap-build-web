import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BlueSection from "@/components/BlueSection";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = "TechSolutions - Professional Web & Mobile App Development Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Leading web development company offering custom web applications, mobile apps, and digital solutions. Transform your business with our expert development services.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Leading web development company offering custom web applications, mobile apps, and digital solutions. Transform your business with our expert development services.';
      document.head.appendChild(meta);
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "TechSolutions",
      "description": "Professional web and mobile app development services",
      "url": window.location.origin,
      "logo": `${window.location.origin}/favicon.ico`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-0123",
        "contactType": "customer service",
        "email": "info@techsolutions.com"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Tech Street",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "postalCode": "94105",
        "addressCountry": "US"
      },
      "sameAs": [
        "https://twitter.com/techsolutions",
        "https://linkedin.com/company/techsolutions"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup structured data on unmount
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <BlueSection />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
