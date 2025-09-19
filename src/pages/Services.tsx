export default function Services() {
  return (
    <main>
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-primary mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive business solutions designed to help you build structure, implement systems, and receive ongoing support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-lg border">
              <h3 className="font-heading font-semibold text-xl text-primary mb-4">
                Business Systems Setup
              </h3>
              <p className="text-muted-foreground">
                Streamline your operations with customized systems that improve efficiency and organization.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-lg border">
              <h3 className="font-heading font-semibold text-xl text-primary mb-4">
                Strategic Planning
              </h3>
              <p className="text-muted-foreground">
                Develop clear roadmaps and actionable strategies to achieve your business goals.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-lg border">
              <h3 className="font-heading font-semibold text-xl text-primary mb-4">
                Ongoing Support
              </h3>
              <p className="text-muted-foreground">
                Continuous guidance and assistance to ensure your systems work effectively long-term.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}