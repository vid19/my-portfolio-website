import { Mail, MapPin } from "lucide-react";
import { Github, Linkedin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "vv2466@nyu.edu",
    href: "mailto:vv2466@nyu.edu",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "United States",
    href: null as string | null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    value: "vid19",
    href: "https://github.com/vid19",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "vidyarthv",
    href: "https://linkedin.com/in/vidyarthv",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="container mx-auto max-w-3xl">
        <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-center">
          Get In Touch
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center tracking-tight">
          Let's Work Together
        </h2>
        <p className="text-center text-sm sm:text-base text-muted-foreground mb-12 max-w-md mx-auto leading-relaxed">
          Open to new opportunities, collaborations, or just a good
          conversation about tech.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          {contactInfo.map((info, index) => {
            const inner = (
              <>
                <div className="p-2.5 bg-primary/10 rounded-sm group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <info.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                    {info.label}
                  </p>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">
                    {info.value}
                  </p>
                </div>
              </>
            );

            return info.href ? (
              <a
                key={index}
                href={info.href}
                className="bg-card/50 border border-border rounded-md p-4 hover:border-primary/30 transition-all duration-300 hover:shadow-glow group flex items-center gap-4"
              >
                {inner}
              </a>
            ) : (
              <div
                key={index}
                className="bg-card/50 border border-border rounded-md p-4 group flex items-center gap-4"
              >
                {inner}
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card/50 border border-border rounded-md p-4 hover:border-primary/30 transition-all duration-300 hover:shadow-glow group flex items-center gap-4"
            >
              <div className="p-2.5 bg-primary/10 rounded-sm group-hover:bg-primary/20 transition-colors flex-shrink-0">
                <link.icon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                  {link.label}
                </p>
                <p className="text-sm font-medium group-hover:text-primary transition-colors">
                  /{link.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
