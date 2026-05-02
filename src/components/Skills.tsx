import { Code2, Globe, Brain, Cloud, MessageSquare, Wrench } from "lucide-react";

const skillGroups = [
  {
    icon: Code2,
    title: "Languages",
    tags: [
      "Python", "Go", "Java", "C++", "C#", "JavaScript (React.js)",
      "Swift", "HTML/CSS", "SQL", "MQL",
    ],
  },
  {
    icon: Globe,
    title: "Web Frameworks",
    tags: ["Django", "Spring Boot", "Gin", "React", "Redux-Saga", "D3.js"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    tags: [
      "AWS (EC2, Lambda, S3, Cognito)", "GCP", "Azure",
      "Docker", "Kubernetes", "Datadog",
    ],
  },
  {
    icon: Brain,
    title: "ML / NLP",
    tags: [
      "Pandas", "NumPy", "Scikit-Learn", "PyTorch",
      "LangChain", "LangGraph", "RAG",
    ],
  },
  {
    icon: MessageSquare,
    title: "Messaging & Methods",
    tags: ["RabbitMQ", "Kafka", "Agile", "Kanban"],
  },
  {
    icon: Wrench,
    title: "Tools & OS",
    tags: [
      "Git", "Figma", "Jira", "Confluence", "VSCode",
      "Intellij", "Unix", "Linux",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-center">
          What I Work With
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-14 text-center tracking-tight">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="bg-card/50 border border-border rounded-md p-5 hover:border-primary/30 transition-all duration-300 hover:shadow-glow group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-sm group-hover:bg-primary/20 transition-colors">
                  <group.icon className="h-4 w-4 text-primary" />
                </div>
                <h3 className="text-sm font-semibold tracking-wide">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-xs bg-secondary text-muted-foreground border border-border rounded-sm font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
