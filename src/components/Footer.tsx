import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Branding */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Alex Thoden</h3>
              <p className="text-primary-foreground/70">
                Data Scientist specializing in materials science and machine learning.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("skills")}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("experience")}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    Experience
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    Projects
                  </button>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="mailto:alexhokietho@gmail.com"
                  className="p-3 rounded-lg bg-primary-foreground/10 hover:bg-accent/20 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/alexthoden"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-primary-foreground/10 hover:bg-accent/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/alexthoden"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-primary-foreground/10 hover:bg-accent/20 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
            <p>© {currentYear} Alex Thoden. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
