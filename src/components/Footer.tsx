import { Button } from "./ui/button";
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background-tertiary border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Frankline</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Full-stack developer passionate about creating innovative web
              solutions that combine beautiful design with powerful
              functionality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(link.href)}
                  className="justify-start text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Get In Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📧 oyoofrankline@gmail.com</p>
              <p>📱 +254 757 323 317</p>
              <p>📍 Nairobi, Kenya</p>
              <p className="mt-4">
                Available for freelance projects and full-time opportunities.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Frankline. All rights reserved.
          </p>

          <Button
            variant="glass"
            size="sm"
            onClick={scrollToTop}
            className="flex items-center gap-2"
          >
            <ArrowUp size={16} />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
