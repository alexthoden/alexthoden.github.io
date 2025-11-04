const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image side */}
          <div className="order-2 md:order-1 animate-fade-in">
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-highlight/20 overflow-hidden shadow-lg">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-6xl font-bold text-primary-foreground shadow-lg">
                      AT
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-highlight rounded-full opacity-20 blur-2xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent rounded-full opacity-20 blur-2xl" />
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 md:order-2 space-y-6 animate-fade-in-up">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">About Me</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-accent to-highlight rounded-full" />
            </div>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a Senior Associate Systems Engineer at{" "}
                <span className="text-foreground font-semibold">Peraton</span>, where I design simulation tools, build automated ETL pipelines, and forecast scaling requirements using probabilistic modeling. With over 3 years of experience in data engineering and analytics, I specialize in turning complex data into strategic insights.
              </p>
              
              <p>
                My technical foundation began at{" "}
                <span className="text-foreground font-semibold">Virginia Tech</span> with a Bachelor's in Materials Science & Engineering, and I'm currently pursuing my Master's in Data Analytics at{" "}
                <span className="text-foreground font-semibold">Georgia Institute of Technology</span> (expected May 2026). I hold a{" "}
                <span className="text-foreground font-semibold">Top Secret/SCI Clearance</span>.
              </p>
              
              <p>
                I thrive at solving challenging problems with the combination of engineering and data science—whether that's developing ML workflows across secure networks, building interactive web applications, or optimizing processes through statistical modeling. My approach combines rigorous analysis with practical execution, ensuring solutions that are both technically sound and operationally valuable.
              </p>

              <p className="text-foreground font-medium pt-2">
                Outside of work, I enjoy building full-stack projects, exploring optimization algorithms, and staying current with advancements in machine learning and data visualization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
