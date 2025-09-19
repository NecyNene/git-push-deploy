import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function CTASection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl leading-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl opacity-90 leading-relaxed">
            Stop struggling with disorganized systems and start building the foundation your business needs to thrive. Let's work together to create structure, implement systems, and provide ongoing support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" className="btn-secondary border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/contact">Start Your Transformation</Link>
            </Button>
            <Button asChild variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}