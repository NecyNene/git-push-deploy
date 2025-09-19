export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real results from businesses that chose to invest in structure, systems, and support.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-xl shadow-lg border">
            <p className="text-muted-foreground leading-relaxed mb-6">
              "Upsavvy Solutions transformed how we operate. The systems they implemented saved us hours every week and gave us clarity on our processes."
            </p>
            <div className="font-heading font-semibold text-primary">
              Sarah M.
            </div>
            <div className="text-sm text-muted-foreground">
              Small Business Owner
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-xl shadow-lg border">
            <p className="text-muted-foreground leading-relaxed mb-6">
              "The strategic planning session was a game-changer. We finally have a clear roadmap and the support to execute on our goals."
            </p>
            <div className="font-heading font-semibold text-primary">
              Michael R.
            </div>
            <div className="text-sm text-muted-foreground">
              Community Organization Director
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-xl shadow-lg border">
            <p className="text-muted-foreground leading-relaxed mb-6">
              "Working with Upsavvy gave us the structure we desperately needed. Our team is more organized and productive than ever."
            </p>
            <div className="font-heading font-semibold text-primary">
              Jennifer L.
            </div>
            <div className="text-sm text-muted-foreground">
              Nonprofit Founder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}