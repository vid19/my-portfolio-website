import { GithubIcon } from "@/components/icons";

const projects = [
  {
    num: "01",
    title: "Personal Knowledge RAG Platform",
    period: "Mar – Apr 2026",
    description:
      "Built an end-to-end pipeline supporting 2 ingestion channels (URL + upload) and 3 file formats (PDF/TXT/MD). Implemented a resilient LLM stack with 3 generation modes (OpenAI, Hugging Face, local fallback) and 2 retrieval backends (FAISS embeddings, BM25 lexical), with runtime failure fallbacks.",
    tags: ["Python", "Streamlit", "LangGraph", "FAISS"],
    github: "https://github.com/vid19/PersonalDocRAG",
  },
  {
    num: "02",
    title: "MiniDB – SQLite-like Database Engine",
    period: "Mar – Apr 2026",
    description:
      "Built a local database engine supporting 6 commands: CREATE TABLE, INSERT, SELECT, BEGIN, COMMIT and ROLLBACK, with interactive CLI meta-commands. Implemented a B+ tree index with internal node split propagation for efficient key lookups and ordered scans. CI via GitHub Actions on every push and PR.",
    tags: ["C++", "CMake", "GitHub Actions"],
    github: "https://github.com/vid19/miniDB",
  },
  {
    num: "03",
    title: "Big Apple Cinemas",
    period: "Jan – Feb 2026",
    description:
      "Engineered a full-stack movie ticketing platform with modular architecture, CI/CD, and 3 deployable runtime services (API, worker, scheduler). Implemented concurrency-safe booking with transactional row locks, 8-minute seat holds, 30-second expiry sweeps, and secure idempotent checkout/webhook and QR scan flows.",
    tags: ["FastAPI", "React", "PostgreSQL", "Redis", "Celery"],
    github: "https://github.com/vid19/BigAppleCinemas",
  },
  {
    num: "04",
    title: "Cloud Console Automation Agent",
    period: "Sep – Dec 2025",
    description:
      "Built an LLM-powered browser automation system that executes Google Cloud Console workflows from plain-English instructions, using Gemini 2.5 Flash for task planning and cutting manual GCP task time by 60%+. Orchestrated a real-time multi-task engine with Django Channels and Electron, using persistent Chrome sessions, WebSocket sync, and pause/resume controls for concurrent task execution.",
    tags: ["Django Channels", "Electron", "Vertex AI", "Gemini", "WebSockets"],
    github: null,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 sm:py-28 px-4 sm:px-6 bg-card/40 border-y border-border/60"
    >
      <div className="container mx-auto max-w-5xl">
        <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-center">
          What I've Built
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-14 text-center tracking-tight">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => {
            const featured = index === 0;
            return (
              <div
                key={project.num}
                className={`border rounded-md hover:border-primary/30 transition-all duration-300 hover:shadow-glow group flex flex-col md:last:col-span-2 lg:last:col-span-1 ${
                  featured
                    ? "md:col-span-2 lg:col-span-3 p-6 sm:p-8 bg-gradient-to-br from-primary/10 via-card/60 to-card/60 border-primary/25"
                    : "p-6 bg-card/50 border-border"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-primary/50 tracking-wider">
                    {featured ? `${project.num} · Featured` : project.num}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground/60">
                    {project.period}
                  </span>
                </div>

                <h3
                  className={`font-semibold mb-2 group-hover:text-primary transition-colors leading-snug ${
                    featured ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`text-sm text-muted-foreground leading-relaxed mb-4 flex-1 ${
                    featured ? "sm:text-base max-w-3xl" : ""
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-xs bg-secondary text-muted-foreground border border-border rounded-sm font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0 ml-2"
                      aria-label="View on GitHub"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
