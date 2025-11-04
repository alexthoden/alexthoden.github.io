import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Seating Chart Optimization Algorithm",
      description: "Built a simulated annealing and genetic algorithm solution to optimize seating arrangements for large events. Integrated interactive features for user-defined constraints.",
      tools: ["Python", "React", "TypeScript", "Tailwind CSS"],
      github: "#",
      demo: "#",
      category: "Optimization & ML",
    },
    {
      title: "Wedding Website with RSVP Dashboard",
      description: "Designed and deployed a full-stack web app with native RSVP functionality and real-time attendance visualization. Features an intuitive user interface and responsive design.",
      tools: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/alexthoden/wedding-website",
      demo: "http://thoden-woodward-wedding.s3-website.us-east-2.amazonaws.com/",
      category: "Full-Stack Development",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-highlight rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">A showcase of data science and engineering solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 animate-scale-in border border-border group hover:border-accent/50 hover:-translate-y-1"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, toolIdx) => (
                    <span
                      key={toolIdx}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-border">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-accent/30 bg-secondary text-card-foreground hover:bg-secondary/90 hover:border-accent"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.demo && project.demo !== "#" && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 bg-accent hover:bg-accent/80 text-accent-foreground border-none"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
