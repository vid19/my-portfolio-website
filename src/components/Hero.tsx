import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { useEffect, useMemo, useState } from "react";

const greetingsArray = [
  "Hi",
  "Hola",
  "Bonjour",
  "Ciao",
  "こんにちは",
  "안녕하세요",
  "नमस्ते",
  "مرحبا",
  "Привет",
  "வணக்கம்",
];

const useTypewriter = (words: string[], typingSpeed = 80, pause = 1200) => {
  const [display, setDisplay] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: number;
    const current = words[wordIndex % words.length];

    if (!isDeleting) {
      // typing
      const next = current.slice(0, display.length + 1);
      setDisplay(next);
      timeout = window.setTimeout(() => {}, typingSpeed);
      if (next === current) {
        timeout = window.setTimeout(() => setIsDeleting(true), pause);
      } else {
        timeout = window.setTimeout(() => {}, typingSpeed);
      }
    } else {
      // deleting
      const next = current.slice(0, display.length - 1);
      setDisplay(next);
      if (next === "") {
        setIsDeleting(false);
        setWordIndex((i) => i + 1);
        timeout = window.setTimeout(() => {}, typingSpeed);
      } else {
        timeout = window.setTimeout(() => {}, typingSpeed / 2);
      }
    }

    return () => window.clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [display, isDeleting, wordIndex, words, typingSpeed, pause]);

  return display;
};

const Hero = () => {
  const greetings = useMemo(() => greetingsArray, []);
  const typed = useTypewriter(greetings, 80, 1200);
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Resume URL: prefer VITE_RESUME_URL, fall back to public/resume.pdf
  const resumeUrl = (import.meta as any).env?.VITE_RESUME_URL || "/resume.pdf";
  const isExternalResume = /^https?:\/\//i.test(resumeUrl);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-subtle" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 z-10 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            <span className="mr-2">{typed}</span>
            <span className="animate-pulse inline-block">|</span>
            <span className="block">I'm Vidyarth Venkateswaran</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto px-2">
            I'm a Software Engineer & ML enthusiast.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-xl mx-auto px-2">
            I have over 2 years of experience as a Full Stack Web Developer,
            building enterprise mobility platforms, along with research
            experience applying data-driven models to underwater imaging and
            automotive diagnostics.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-10 md:mb-12 px-4">
            <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 w-full sm:w-auto">
              <a
                href={resumeUrl}
                {...(isExternalResume ? { target: "_blank", rel: "noopener noreferrer" } : { download: true })}
              >
                Download my resume <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-full sm:w-auto"
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 sm:gap-8 justify-center">
            <a
              href="https://github.com/vid19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6 sm:h-7 sm:w-7" />
            </a>
            <a
              href="https://linkedin.com/in/vidyarthv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6 sm:h-7 sm:w-7" />
            </a>
            <a
              href="mailto:your.vv2466@nyu.edu"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6 sm:h-7 sm:w-7" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Hire Me floating CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={scrollToContact}
          className="bg-gradient-primary text-white px-4 py-2 rounded-full shadow-glow hover:scale-105 transition-transform"
        >
          Hire Me
        </button>
      </div>
    </section>
  );
};

export default Hero;
