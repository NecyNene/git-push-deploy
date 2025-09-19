export default function About() {
  return (
    <main>
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="font-heading font-bold text-4xl sm:text-5xl text-primary">
                About Upsavvy Solutions
              </h1>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe every business deserves to run smoothly and grow with confidence. Our mission is to provide small businesses and community organizations with the structure, systems, and support they need to thrive.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With years of experience in business operations and organizational development, we understand the unique challenges that smaller organizations face. We're here to help you overcome those obstacles and build a foundation for sustainable growth.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="font-heading font-semibold text-2xl text-primary">
                  Our Approach
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Structure: Building solid foundations for your operations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Systems: Implementing efficient processes and workflows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Support: Providing ongoing guidance and assistance</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Team collaboration and business growth"
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}