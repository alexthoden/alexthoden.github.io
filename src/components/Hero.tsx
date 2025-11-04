import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-accent/80" />
      </div>

      {/* Animated particles overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-highlight rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-success rounded-full animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-accent/50 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Alex Thoden
          </h1>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary-foreground/90">
              Senior Associate Engineer & Data Analyst
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium">
              Bridging Engineering & Data-Driven Insights
            </p>
          </div>
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto">
            3+ years delivering data engineering, analytics, and ML solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg px-8 py-6"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-6 text-primary-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
