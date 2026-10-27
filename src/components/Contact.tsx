import { FileText, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "@/lib/links";

const links = [
  { icon: Mail, label: "Email", href: `mailto:${EMAIL}`, external: false },
  { icon: LinkedinIcon, label: "LinkedIn", href: LINKEDIN_URL, external: true },
  { icon: GithubIcon, label: "GitHub", href: GITHUB_URL, external: true },
  { icon: FileText, label: "Resume", href: RESUME_URL, external: true },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3">
          Get In Touch
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Let's Work Together
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed">
          Open to new opportunities, collaborations, or just a good
          conversation about tech.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-border bg-card/50 text-sm font-medium hover:border-primary/40 hover:text-primary hover:shadow-glow transition-all duration-300"
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${EMAIL}`}
          className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          {EMAIL}
        </a>
      </div>
    </section>
  );
};

export default Contact;
