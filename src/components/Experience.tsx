import { Briefcase, TrendingUp, Users, Zap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Associate Engineer (Modeling and Analytics)",
      company: "Peraton",
      period: "Sept 2024 – Present",
      description: "Leading data-driven solutions and cross-functional teams to optimize system performance and strategic decision-making.",
      achievements: [
        "Designed and deployed simulation tool for 'what-if' analysis of data flows, enabling faster risk assessments",
        "Forecasted scaling requirements using probabilistic modeling, improving strategic decision-making accuracy",
        "Led cross-functional team to increase delivery frequency and scope, boosting efficiency and project impact",
        "Built automated ETL pipelines and data connections, streamlining customer access to insights",
      ],
      icon: TrendingUp,
    },
    {
      title: "Associate Systems Engineer",
      company: "Peraton",
      period: "Aug 2022 – Sept 2024",
      description: "Developed and maintained cross-domain AI/ML infrastructure and automated workflows across secure networks.",
      achievements: [
        "Developed and maintained cross-domain GitLab pipelines to support AI/ML workflows across secure networks",
        "Supported transition of AI/ML platform into production environments, ensuring scalability and compliance",
        "Established Maven Engineering Review Board, improving quality and consistency of deliverables",
        "Automated workflows with enterprise tools, reducing manual overhead and increasing operational efficiency",
        "Produced Model-Based Systems Engineering (MBSE) artifacts, aligning technical architecture with deliverables",
      ],
      icon: Briefcase,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-highlight rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">Building expertise through hands-on projects and research</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-highlight to-success" />

            <div className="space-y-12">
              {experiences.map((exp, idx) => {
                const Icon = exp.icon;
                return (
                  <div
                    key={idx}
                    className={`relative flex flex-col md:flex-row gap-8 animate-fade-in-up ${
                      idx % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                    style={{ animationDelay: `${idx * 0.2}s` }}
                  >
                    {/* Timeline node */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background z-10" />

                    {/* Content card */}
                    <div className={`flex-1 ${idx % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"} ml-16 md:ml-0`}>
                      <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-border">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-3 rounded-lg bg-accent/10">
                            <Icon className="w-6 h-6 text-accent" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-card-foreground">{exp.title}</h3>
                            <p className="text-accent font-semibold">{exp.company}</p>
                            <p className="text-sm text-muted-foreground">{exp.period}</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIdx) => (
                            <li key={achIdx} className="flex items-start gap-2 text-sm text-card-foreground">
                              <span className="text-accent mt-1">▸</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
