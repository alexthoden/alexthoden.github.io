import { Code2, Database, TrendingUp, Terminal, Brain, BarChart3 } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming & Data Science",
      skills: ["Python","Polars", "scikit-learn", "networkx", "R", "ggplot", "SQL", "Dash", "Flask", "Shiny", "Tableau" ],
      color: "accent",
    },
    {
      icon: TrendingUp,
      title: "Machine Learning & Analytics",
      skills: ["Model Development", "Model Validation", "Model Deployment", "A/B Testing", "Statistical Modeling", "Data Visualization"],
      color: "highlight",
    },
    {
      icon: Database,
      title: "Engineering & Systems",
      skills: ["GitLab", "AWS", "MBSE Tools", "DOORS", "Cameo", "Jira", "Confluence"],
      color: "success",
    },
    {
      icon: Brain,
      title: "Web & App Development",
      skills: ["Javascript", "React", "TypeScript", "CSS", "Tailwind CSS"],
      color: "accent",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-highlight rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">A comprehensive toolkit for data-driven innovation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, idx) => {
              const Icon = category.icon;
              const colorMap: Record<string, string> = {
                accent: "accent",
                highlight: "highlight",
                success: "success",
              };
              const categoryColor = colorMap[category.color];
              
              return (
                <div
                  key={idx}
                  className="group bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 animate-scale-in border border-border hover:border-accent/50 relative overflow-hidden"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 rounded-xl bg-${categoryColor}/10 group-hover:bg-${categoryColor}/20 transition-colors duration-300`}>
                        <Icon className={`w-7 h-7 text-${categoryColor} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      <h3 className="text-xl font-bold text-card-foreground">{category.title}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIdx) => (
                        <span
                          key={skillIdx}
                          className="px-4 py-2 bg-muted/50 hover:bg-accent/10 rounded-lg text-sm font-medium text-card-foreground transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default border border-border/50 hover:border-accent/30"
                          style={{ animationDelay: `${(idx * 0.1) + (skillIdx * 0.05)}s` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
