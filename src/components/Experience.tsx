import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Software Development Engineer 1",
    company: "Toyota Connected India",
    period: "Jul 2023 - Aug 2025",
    description:
      "Engineered full-stack modules for Toyota's Safety and Fleet B2B mobility platforms, delivering 10+ production-grade features. Redesigned and migrated legacy OPS monitoring dashboard from Vue.js to React, improving maintainability and performance while standardizing the frontend technology stack across the platform.",
    technologies: ["Spring Boot", "Go", "React", "Docker", "AWS", "MongoDB"],
  },
  {
    title: "Research Intern",
    company: "National Institute of Ocean Technology",
    period: "Jul 2022 - Sep 2022",
    description:
      "Developed lightweight computer vision algorithms for underwater imaging, enabling real-time navigation in low-light and turbid environments. Built Python-based PyQt GUI integrating turbidity estimation and ROI-based edge detection for research demonstrations.",
    technologies: ["Python", "OpenCV"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="border-border bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl sm:text-2xl mb-1 sm:mb-2 flex items-start gap-2 sm:gap-3">
                        <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1 flex-shrink-0" />
                        <span>{exp.title}</span>
                      </CardTitle>
                      <CardDescription className="text-base sm:text-lg font-medium text-accent-cyan">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <span className="text-sm sm:text-base text-muted-foreground whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-primary/10 text-primary border border-primary/20 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
