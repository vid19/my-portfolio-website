import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Cloud Console Automation Agent",
    description:
      "Designing a system that executes simple-english cloud console tasks end-to-end with role-based access, audit logs, and reproducibility for task execution, evidence generation, and review.",
    tags: ["Django", "Cloud Automation", "React", "Browser-Use"],
  },
  {
    title: "Autocare AI - Vehicle Damage Detection",
    description:
      "Led a 5-member team to prototype an AI-powered vehicle damage estimation tool at Toyota's global hackathon, achieving 97% detection accuracy using segmentation algorithms and RAG for automated cost reporting and diagnostic trouble codes.",
    tags: ["Detectron2", "Amazon Bedrock", "React"],
  },
  {
    title: "Early Diabetic Retinopathy Detection",
    description:
      "Automated imaging pipeline for early diabetic retinopathy diagnosis using custom adaptive CNN with transfer learning (ResNet-50, Xception v3), achieving 98.67% accuracy.",
    tags: ["TensorFlow", "ResNet-50", "IBM Cloudant", "Twilio"],
  },
  {
    title: "Intelligent NPCs in Games",
    description:
      "Deep-Q Learning + RRT* hybrid model for adaptive NPC pathfinding and memory-driven behavior. Implemented dynamic 'Nemesis system' for NPCs to respond to player strategies, demonstrated in Shadow of War game.",
    tags: ["Deep Q-Learning", "RRT*", "Reinforcement Learning"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
            >
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2.5 sm:px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-primary hover:shadow-glow w-full sm:w-auto"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
