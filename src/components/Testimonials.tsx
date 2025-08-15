import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "Working with this team has transformed our business operations. Their on-demand solutions helped us scale efficiently and stay competitive in our market.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Operations Director, Global Solutions",
      content: "The expertise and professionalism exceeded our expectations. They delivered exactly what we needed, on time and within budget.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, InnovateNow",
      content: "Exceptional service and support. Their team understood our unique challenges and provided tailored solutions that drove real results.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say 
            about their experience working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-text-light mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-text-light">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;