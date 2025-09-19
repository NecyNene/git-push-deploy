import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <main>
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h1 className="font-heading font-bold text-4xl sm:text-5xl text-primary mb-6">
                  Let's Work Together
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Ready to build structure, implement systems, and get the support your business needs? Let's start the conversation.
                </p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                    Get in Touch
                  </h3>
                  <p className="text-muted-foreground">
                    Email us at <span className="text-secondary">hello@upsavvysolutions.com</span> or fill out the form to get started.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                    What to Expect
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">1.</span>
                      <span>Free initial consultation to understand your needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">2.</span>
                      <span>Customized proposal tailored to your business</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">3.</span>
                      <span>Implementation support every step of the way</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-lg border">
              <h2 className="font-heading font-semibold text-2xl text-primary mb-6">
                Send us a message
              </h2>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <Input id="firstName" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <Input id="lastName" required />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input id="email" type="email" required />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company/Organization
                  </label>
                  <Input id="company" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Tell us about your needs *
                  </label>
                  <Textarea id="message" rows={5} required />
                </div>
                
                <Button type="submit" className="btn-primary w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}