import {
  Code2,
  Database,
  Palette,
  Rocket,
  Brain,
  Cloud,
  TestTube,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    icon: Code2,
    title: "Frontend Dev",
    description: "React, Redux-Saga, JavaScript, TypeScript, Responsive Design",
  },
  {
    icon: Database,
    title: "Backend Dev",
    description: "Spring Boot, Go (Gin), Python, Java, RESTful APIs",
  },
  {
    icon: Brain,
    title: "ML & AI",
    description:
      "PyTorch, TensorFlow, Detectron2, Scikit-Learn, Computer Vision",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "AWS (EC2, Lambda, S3), Docker, Kubernetes, Jenkins, CI/CD",
  },
  {
    icon: Database,
    title: "Databases & Messaging",
    description: "MySQL, MongoDB, PostgreSQL, RabbitMQ, Kafka",
  },
  {
    icon: TestTube,
    title: "Testing & Monitoring",
    description: "Postman, JUnit, DataDog, Performance Tuning, API Testing",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:scale-105"
            >
              <CardContent className="pt-6 pb-6">
                <div className="mb-3 sm:mb-4 inline-block p-2.5 sm:p-3 bg-gradient-primary rounded-lg">
                  <skill.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
