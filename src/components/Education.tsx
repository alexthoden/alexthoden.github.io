import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Data Analytics",
      institution: "Georgia Institute of Technology",
      period: "Expected May 2026",
      details: [
        "Focus: Advanced analytics, machine learning, and statistical modeling",
        "Relevant Coursework: Data visualization, predictive modeling, computational statistics",
        "Applied learning through real-world data science projects",
      ],
      logo: "GT",
      color: "highlight",
    },
    {
      degree: "Bachelor of Science in Materials Science & Engineering",
      institution: "Virginia Tech",
      period: "Graduated May 2022",
      details: [
        "Minor in Green Engineering",
        "Strong foundation in computational methods and engineering principles",
        "Developed skills in data analysis and materials characterization",
      ],
      logo: "VT",
      color: "accent",
    },
  ];

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-highlight rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">Academic foundation in engineering and data science</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="bg-card rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 animate-scale-in border border-border group hover:border-accent/50"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                {/* University logo/badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-20 h-20 rounded-xl bg-${edu.color}/10 flex items-center justify-center text-2xl font-bold text-${edu.color} group-hover:scale-110 transition-transform duration-300`}>
                    {edu.logo}
                  </div>
                  <div className={`p-2 rounded-lg bg-${edu.color}/10`}>
                    <GraduationCap className={`w-6 h-6 text-${edu.color}`} />
                  </div>
                </div>

                {/* Degree info */}
                <h3 className="text-xl font-bold text-card-foreground mb-2 leading-tight">
                  {edu.degree}
                </h3>
                <p className={`text-${edu.color} font-semibold mb-1`}>{edu.institution}</p>
                <p className="text-sm text-muted-foreground mb-6">{edu.period}</p>

                {/* Details */}
                <div className="space-y-3">
                  {edu.details.map((detail, detailIdx) => (
                    <div key={detailIdx} className="flex items-start gap-2">
                      <Award className={`w-4 h-4 text-${edu.color} mt-0.5 flex-shrink-0`} />
                      <p className="text-sm text-card-foreground">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
