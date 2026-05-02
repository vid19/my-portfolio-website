import { ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Software Developer – Full Stack",
    company: "Toyota Connected",
    period: "Jul 2023 – Aug 2025",
    location: "Chennai / Bengaluru, India",
    bullets: [
      "Delivered 10+ production-grade full-stack features for DriveLink and Fleetlink B2B mobility platforms, enabling safety-critical vehicle workflows and large-scale fleet operations supporting Toyota Connected North America.",
      "Led end-to-end development of the Fleet platform — built scalable REST APIs and responsive React UIs, integrated AWS Cognito for secure authentication, reducing API error rates to <4% with 119 ms latency under traffic.",
      "Implemented Spring Boot microservices for safety features in the 24th-Gen Data Communication Module rollout for Toyota/Lexus vehicles, integrating MQTT-based vehicle-to-cloud telemetry flows.",
      "Automated CI/CD pipelines using Jenkins, Docker, AWS and Datadog — achieving >95% deployment success rate and ~98% uptime.",
      "Directed a 5-member team at Toyota's Global AI hackathon to prototype a vehicle damage estimation tool, achieving 97% accuracy using Detectron2 and a RAG-powered module for cost analysis and diagnostic reporting.",
    ],
    technologies: [
      "Spring Boot", "Go", "React", "Docker", "AWS", "MongoDB", "Datadog", "Jenkins",
    ],
    publication: null,
  },
  {
    title: "Research Intern – Computer Vision",
    company: "National Institute of Ocean Technology (NIOT)",
    period: "Aug 2022 – Oct 2022",
    location: "Chennai, India",
    bullets: [
      "Designed and implemented an image enhancement pipeline using CLAHE, thresholding and color balancing, improving feature visibility in low-light and noisy environments for real-time analysis.",
      "Developed region-based feature correlation analysis and deployed a PyQt GUI tool to visualize live enhanced images and computed metrics.",
    ],
    technologies: ["Python", "OpenCV", "PyQt"],
    publication: {
      label: "IEEE Publication · INCOFT 2022",
      href: "https://ieeexplore.ieee.org/document/10094470",
    },
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-secondary/10 to-transparent"
    >
      <div className="container mx-auto max-w-4xl">
        <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-center">
          Where I've Been
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-14 text-center tracking-tight">
          Work Experience
        </h2>

        <div className="relative">
          <div className="absolute left-0 top-2 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative sm:pl-10 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute left-[-4.5px] top-2 w-2.5 h-2.5 rounded-full bg-primary border-2 border-background hidden sm:block" />

                <div className="bg-card/50 border border-border hover:border-primary/30 rounded-md p-5 sm:p-7 transition-all duration-300 hover:shadow-glow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-0.5">
                        {exp.title}
                      </h3>
                      <p className="text-primary text-sm font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right mt-1">
                      <span className="text-xs text-muted-foreground font-mono block">
                        {exp.period}
                      </span>
                      <span className="text-xs text-muted-foreground/60 font-mono">
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-4 mb-4 space-y-2">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
                        <span className="text-primary mt-1.5 flex-shrink-0 text-xs">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.publication && (
                    <a
                      href={exp.publication.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline mb-4 font-mono"
                    >
                      <ExternalLink className="h-3 w-3" />
                      {exp.publication.label}
                    </a>
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 text-xs bg-primary/10 text-primary border border-primary/15 rounded-sm font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
