import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground section-padding" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="font-heading font-bold text-2xl" data-testid="footer-logo">
              Upsavvy Solutions
            </div>
            <p className="opacity-90 leading-relaxed" data-testid="footer-tagline">
              Structure. Systems. Support. Helping your business run smoothly and grow with confidence.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg" data-testid="footer-quicklinks-title">
              Quick Links
            </h3>
            <div className="space-y-2">
              <Link href="/" className="block opacity-90 hover:opacity-100 transition-opacity" data-testid="footer-link-home">
                Home
              </Link>
              <Link href="/services" className="block opacity-90 hover:opacity-100 transition-opacity" data-testid="footer-link-services">
                Services
              </Link>
              <Link href="/about" className="block opacity-90 hover:opacity-100 transition-opacity" data-testid="footer-link-about">
                About
              </Link>
              <Link href="/contact" className="block opacity-90 hover:opacity-100 transition-opacity" data-testid="footer-link-contact">
                Contact
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg" data-testid="footer-contact-title">
              Get In Touch
            </h3>
            <div className="space-y-2">
              <p className="opacity-90" data-testid="footer-contact-email">
                hello@upsavvysolutions.com
              </p>
              <p className="opacity-90" data-testid="footer-contact-phone">
                Ready to transform your business?
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 text-center">
          <p className="opacity-75" data-testid="footer-copyright">
            © 2024 Upsavvy Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}