
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
    period: "In Progress",
    description:
      "Designing a system that executes plain-English cloud console tasks end-to-end with role-based access, audit logs, and reproducibility for task execution, evidence generation, and review.",
    tags: ["Django", "React", "Browser-Use", "Cloud Automation"],
    github: null,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-secondary/10 to-transparent"
    >
      <div className="container mx-auto max-w-5xl">
        <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-center">
          What I've Built
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-14 text-center tracking-tight">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div
              key={project.num}
              className="bg-card/50 border border-border rounded-md p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-glow group flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-primary/50 tracking-wider">
                  {project.num}
                </span>
                <span className="text-xs font-mono text-muted-foreground/60">
                  {project.period}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-primary transition-colors leading-snug">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
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
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
