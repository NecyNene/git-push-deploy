export default function AboutSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary mb-6">
            Structure. Systems. Support.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We help small businesses and community organizations build the foundation they need to run smoothly and grow with confidence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-secondary-foreground">S</span>
            </div>
            <h3 className="font-heading font-semibold text-xl text-primary">
              Structure
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Build solid organizational foundations that support sustainable growth and clear decision-making processes.
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-secondary-foreground">S</span>
            </div>
            <h3 className="font-heading font-semibold text-xl text-primary">
              Systems
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Implement efficient workflows and processes that streamline operations and reduce manual work.
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-secondary-foreground">S</span>
            </div>
            <h3 className="font-heading font-semibold text-xl text-primary">
              Support
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Receive ongoing guidance and assistance to ensure your systems continue to work effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}