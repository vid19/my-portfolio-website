import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";

type Role = {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  technologies: string[];
  publication: { label: string; href: string } | null;
};

const VISIBLE_BULLETS = 2;

const industry: Role[] = [
  {
    title: "AI Software Intern – Automation Engineering Software",
    company: "Siemens Research and Pre-Development (RPD)",
    period: "Jun 2026 – Aug 2026",
    location: "Princeton, NJ",
    bullets: [
      "Developed AI agent components for an industrial process automation research platform in Python with asyncio, coordinating asynchronous control and inference workloads without blocking real-time operations.",
      "Applied AI safety and guardrail patterns to model-generated recommendations in a safety-critical operational technology environment.",
      "Integrated services across a Zenoh publish/subscribe message bus and a WinCC OA SCADA runtime, implementing bindings against the MTP / IEC 63280 modular automation standards.",
      "Containerized a multi-service research stack with Docker Compose, producing a reproducible environment that shortened onboarding for new engineers.",
      "Built a Python service that resolves part identifiers into STEP files across supplier catalogs, and extended it with Siemens NX automation via NXOpen to qualify parts into assembly-ready components, projected to eliminate 5 engineering hours monthly.",
    ],
    technologies: ["Python", "asyncio", "Zenoh", "WinCC OA", "Docker", "NXOpen"],
    publication: null,
  },
  {
    title: "Software Developer – Full Stack",
    company: "Toyota Connected",
    period: "Jul 2023 – Aug 2025",
    location: "Chennai / Bengaluru, India",
    bullets: [
      "Delivered 10+ production full-stack features using React, Java and Go for the DriveLink and Fleetlink B2B mobility platforms, enabling safety-critical vehicle workflows and large-scale fleet operations supporting Toyota Connected North America.",
      "Led end-to-end development of the Fleet platform, building scalable REST APIs and responsive React interfaces and integrating AWS Cognito for secure authentication, sustaining 119 ms median latency under production traffic.",
      "Implemented Spring Boot microservices for safety features in the 24th-generation Data Communication Module rollout across Toyota and Lexus vehicles, integrating MQTT-based vehicle-to-cloud telemetry flows.",
      "Automated CI/CD pipelines with Jenkins, Docker and Datadog, cutting release overhead and standardizing deployment across services.",
      "Directed a 5-member team at Toyota's Global AI Hackathon to prototype a vehicle damage estimation tool, reaching 97% accuracy with Detectron2 and building a RAG-powered module for cost analysis and diagnostic reporting.",
    ],
    technologies: [
      "Spring Boot", "Go", "React", "Docker", "AWS", "MongoDB", "Datadog", "Jenkins",
    ],
    publication: null,
  },
];

const research: Role[] = [
  {
    title: "Course Assistant – CS-GY 6063 Graduate Software Engineering",
    company: "NYU Tandon School of Engineering",
    period: "Sep 2026 – Present",
    location: "New York, NY",
    bullets: [
      "Serve as section leader and grader for a graduate software engineering course, holding weekly office hours and resolving student questions on design, testing, and team workflows.",
      "Review student pull requests across a shared course GitHub organization, giving code-level feedback on architecture, testing, and engineering practice.",
      "Built Python and GitHub CLI automation for repository provisioning and grading audits, cutting manual course administration overhead.",
    ],
    technologies: ["Python", "GitHub CLI", "Git", "Code Review"],
    publication: null,
  },
  {
    title: "Research Assistant (Volunteer)",
    company: "NYU mLab, under Dr. Danny Huang",
    period: "Apr 2026 – Jun 2026",
    location: "New York, NY",
    bullets: [
      "Built a 945-app evaluation dataset for AI safety research on AI companion apps, combining a classifier, field extractor, rule-based inference, and manual override pipeline.",
      "Developed a Playwright-based automation harness to systematically interact with and evaluate AI companion platforms.",
    ],
    technologies: ["Python", "Playwright", "Data Pipelines", "AI Safety"],
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

const groups = [
  { label: "Industry", roles: industry },
  { label: "Research & Teaching", roles: research },
];

const TimelineItem = ({ role }: { role: Role }) => {
  const [expanded, setExpanded] = useState(false);
  const current = role.period.endsWith("Present");
  const hidden = role.bullets.length - VISIBLE_BULLETS;
  const bullets = expanded ? role.bullets : role.bullets.slice(0, VISIBLE_BULLETS);

  return (
    <li className="relative pl-6 sm:pl-8">
      {/* Dot on the timeline rail */}
      <span className="absolute -left-[5px] top-2 flex h-2.5 w-2.5">
        {current && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
        )}
        <span
          className={`relative inline-flex h-2.5 w-2.5 rounded-full ring-4 ring-background ${
            current ? "bg-primary" : "bg-primary/50"
          }`}
        />
      </span>

      <div
        className={
          current
            ? "-mt-3 rounded-md border border-primary/30 bg-primary/5 p-4 sm:p-5 shadow-glow"
            : ""
        }
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h4 className="text-base sm:text-lg font-semibold leading-snug">
            {role.title}
          </h4>
          {current && (
            <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-sm bg-primary text-primary-foreground">
              Current
            </span>
          )}
        </div>

        <p className="mt-1 text-sm leading-relaxed">
          <span className="text-primary font-medium">{role.company}</span>
          <span className="text-muted-foreground">
            {" "}· {role.period} · {role.location}
          </span>
        </p>

        <ul className="mt-3 space-y-2">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
              <span className="text-primary mt-1.5 flex-shrink-0 text-xs">▸</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {hidden > 0 && (
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
            className="mt-2 ml-5 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
          >
            {expanded ? "Show less" : `Show ${hidden} more`}
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        )}

        {role.publication && (
          <a
            href={role.publication.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex w-fit items-center gap-1.5 text-xs text-primary hover:underline font-mono"
          >
            <ExternalLink className="h-3 w-3" />
            {role.publication.label}
          </a>
        )}

        <div className="mt-3 flex flex-wrap gap-1.5">
          {role.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-0.5 text-xs bg-primary/10 text-primary border border-primary/15 rounded-sm font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 sm:py-28 px-4 sm:px-6 bg-card/40 border-y border-border/60"
    >
      <div className="container mx-auto max-w-4xl">
        <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-center">
          Where I've Been
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-14 text-center tracking-tight">
          Work Experience
        </h2>

        <div className="space-y-14">
          {groups.map((group) => (
            <div key={group.label}>
              <h3 className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-6">
                {group.label}
              </h3>
              <ol className="relative ml-1 border-l border-border space-y-10">
                {group.roles.map((role) => (
                  <TimelineItem key={role.title} role={role} />
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
