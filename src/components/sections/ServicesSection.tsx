import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function ServicesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary mb-6">
            How We Help Your Business Thrive
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our comprehensive approach ensures you have everything needed to build, implement, and maintain successful business systems.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-2xl text-primary">
                Business Systems Design
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Custom organizational systems tailored to your specific needs, from workflow optimization to process documentation that actually gets used.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-2xl text-primary">
                Strategic Planning & Implementation
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Clear roadmaps and actionable strategies that move your organization forward, with implementation support to ensure success.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-2xl text-primary">
                Ongoing Support & Optimization
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Continuous guidance to refine your systems, adapt to changes, and maintain the momentum you've built.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Team working together on business solutions"
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
        
        <div className="text-center">
          <Button asChild className="btn-primary">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}