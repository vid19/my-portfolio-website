import { Code2, Globe, Brain, Cloud, MessageSquare, Wrench, Factory } from "lucide-react";

const skillGroups = [
  {
    icon: Code2,
    title: "Languages",
    tags: [
      "Python (asyncio)", "Go", "Java", "C++", "C#", "JavaScript (React.js)",
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
      "Docker", "Docker Compose", "Kubernetes", "Datadog", "GitHub Actions",
    ],
  },
  {
    icon: Brain,
    title: "ML / NLP",
    tags: [
      "Pandas", "NumPy", "Scikit-Learn", "PyTorch",
      "LangChain", "LangGraph", "RAG", "Ollama", "Detectron2", "OpenCV",
    ],
  },
  {
    icon: MessageSquare,
    title: "Messaging & Methods",
    tags: ["RabbitMQ", "Kafka", "Zenoh", "MQTT", "Agile", "Kanban"],
  },
  {
    icon: Factory,
    title: "Industrial Automation",
    tags: ["WinCC OA (SCADA)", "MTP / IEC 63280", "Siemens NX (NXOpen)"],
  },
  {
    icon: Wrench,
    title: "Tools & OS",
    tags: [
      "Git", "GitHub CLI", "Playwright", "Figma", "Jira", "Confluence",
      "VSCode", "Intellij", "Unix", "Linux",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-center">
          What I Work With
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-14 text-center tracking-tight">
          Skills & Expertise
        </h2>

        <dl className="bg-card/50 border border-border rounded-md divide-y divide-border">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="grid grid-cols-1 sm:grid-cols-[13rem_1fr] gap-1.5 sm:gap-6 px-4 sm:px-6 py-3.5 sm:py-4 hover:bg-primary/[0.03] transition-colors"
            >
              <dt className="flex items-center gap-2.5 text-sm font-semibold">
                <group.icon className="h-4 w-4 text-primary flex-shrink-0" />
                {group.title}
              </dt>
              <dd className="text-sm text-muted-foreground leading-relaxed">
                {group.tags.join(" · ")}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Skills;
