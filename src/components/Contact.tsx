import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Download } from "lucide-react";
import ResumePDF from "@/assets/Resume.pdf";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-highlight rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">
              Let's discuss how data science can drive your next breakthrough
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact form */}
            <div className="bg-card rounded-2xl p-8 shadow-md border border-border animate-fade-in-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[150px]"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact info and links */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-card rounded-2xl p-8 shadow-md border border-border">
                <h3 className="text-xl font-bold text-card-foreground mb-6">Connect With Me</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:alexhokietho@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-accent/10 transition-colors group"
                  >
                    <Mail className="w-5 h-5 text-accent" />
                    <span className="text-card-foreground group-hover:text-accent transition-colors">
                      alexhokietho@gmail.com
                    </span>
                  </a>
                  <a
                    href="https://linkedin.com/in/alexthoden"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-accent/10 transition-colors group"
                  >
                    <Linkedin className="w-5 h-5 text-accent" />
                    <span className="text-card-foreground group-hover:text-accent transition-colors">
                      linkedin.com/in/alexthoden
                    </span>
                  </a>
                  <a
                    href="https://github.com/alexthoden"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-accent/10 transition-colors group"
                  >
                    <Github className="w-5 h-5 text-accent" />
                    <span className="text-card-foreground group-hover:text-accent transition-colors">
                      github.com/alexthoden
                    </span>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-highlight/10 rounded-2xl p-8 border border-accent/20">
                <h3 className="text-xl font-bold text-foreground mb-4">Download Resume</h3>
                <p className="text-muted-foreground mb-6">
                  Get a comprehensive overview of my experience, skills, and education.
                </p>
                {/* Use an anchor with the `download` attribute so the file is downloaded when clicked */}
                <a
                  href={ResumePDF}
                  download
                  className="inline-block w-full"
                  aria-label="Download Resume PDF"
                >
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF Resume
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
