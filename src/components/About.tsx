import profile from "@/assets/profile.jpeg";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Production Features" },
  { value: "3.8", label: "GPA @ NYU" },
  { value: "M.S.", label: "CS @ NYU" },
];

const education = [
  {
    school: "New York University",
    degree: "M.S. Computer Science",
    gpa: "GPA: 3.8 / 4.0",
    period: "Sep 2025 – May 2027 (Expected)",
    detail: "Algorithms · Machine Learning · Software Engineering · Internet Security & Privacy",
  },
  {
    school: "SSN College of Engineering, Anna University",
    degree: "B.E. Electronics & Communication Engineering",
    gpa: "GPA: 8.4 / 10",
    period: "Sep 2019 – May 2023",
    detail: "Chennai, India",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="animate-slide-up">
          <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-center">
            Who I Am
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center tracking-tight">
            About Me
          </h2>

          {/* Bio + photo */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center mb-12">
            <div className="md:col-span-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-lg blur-2xl opacity-15 scale-110" />
                <img
                  src={profile}
                  alt="Vidyarth Venkateswaran"
                  className="relative w-48 h-48 md:w-56 md:h-56 rounded-lg object-cover border border-primary/20 shadow-card"
                />
              </div>
            </div>

            <div className="md:col-span-3 space-y-4">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Graduate CS student at NYU with 2+ years of full-time industry
                experience building production-grade full stack and distributed
                cloud systems across mobility and connected vehicle platforms.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                At Toyota Connected I delivered features across DriveLink and
                Fleetlink B2B platforms, led a hackathon team to a 97%-accuracy
                AI damage detection tool, and automated CI/CD pipelines achieving
                ~98% uptime. I'm equally comfortable in Go microservices, React
                UIs, and PyTorch model pipelines.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="mb-10">
            <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Education
            </p>
            <div className="space-y-3">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="bg-card/60 border border-border rounded-md p-4 sm:p-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 hover:border-primary/30 transition-colors duration-300"
                >
                  <div>
                    <p className="text-sm font-semibold">{edu.school}</p>
                    <p className="text-xs text-primary mt-0.5">{edu.degree}</p>
                    <p className="text-xs text-muted-foreground mt-1">{edu.detail}</p>
                  </div>
                  <div className="sm:text-right flex-shrink-0">
                    <p className="text-xs font-mono text-muted-foreground">{edu.period}</p>
                    <p className="text-xs font-semibold text-primary/80 mt-0.5">{edu.gpa}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-card/60 border border-border rounded-md p-5 text-center hover:border-primary/40 transition-colors duration-300"
              >
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                  {s.value}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
