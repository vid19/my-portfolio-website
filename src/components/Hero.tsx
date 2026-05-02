import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { useEffect, useMemo, useRef, useState } from "react";

const RESUME_URL =
  "https://drive.google.com/file/d/15uFVC570lvOUqCcqgMMNHoKGCjEQuNrX/view?usp=drive_link";

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
    const current = words[wordIndex % words.length];
    let timeout: number;
    if (!isDeleting) {
      if (display.length < current.length) {
        timeout = window.setTimeout(
          () => setDisplay(current.slice(0, display.length + 1)),
          typingSpeed,
        );
      } else {
        timeout = window.setTimeout(() => setIsDeleting(true), pause);
      }
    } else {
      if (display.length > 0) {
        timeout = window.setTimeout(
          () => setDisplay(current.slice(0, display.length - 1)),
          typingSpeed / 2,
        );
      } else {
        setIsDeleting(false);
        setWordIndex((i) => i + 1);
      }
    }
    return () => window.clearTimeout(timeout);
  }, [display, isDeleting, wordIndex, words, typingSpeed, pause]);

  return display;
};

// ─── Brooklyn Bridge ──────────────────────────────────────────────────────────
// ViewBox 1440 × 300  |  deck y=242  |  water y=250+  |  tower tops y=55
// Left tower cx=400   |  Right tower cx=1040

const T = "hsl(168,90%,45%)"; // teal
const TB = "hsl(168,90%,72%)"; // bright teal (Spider-Man)
const BG = "hsl(220,20%,4%)"; // site background
const CX_L = 400;
const CX_R = 1040;
const TW = 26; // tower half-width
const TT = 55; // tower top y
const DY = 242; // deck y

// Main cable: left shore → left tower → slight sag → right tower → right shore
const CABLE = `M 0,175 C 155,168 305,57 ${CX_L},${TT} C 508,65 932,65 ${CX_R},${TT} C 1135,57 1285,168 1440,175`;

// Diagonal stay cables [deck_x] fanning from each tower top
const STAYS_LL = [62, 144, 226, 308, 370];
const STAYS_LR = [442, 500, 558, 616, 672];
const STAYS_RL = [768, 824, 882, 940, 998];
const STAYS_RR = [1068, 1130, 1194, 1260, 1322, 1384];

// Vertical hanger cables: [x, cable_y] — parabolic sag, max 15px at midpoint
const HANGERS: [number, number][] = [
  [432, 61],
  [464, 63],
  [496, 65],
  [528, 68],
  [560, 69],
  [592, 71],
  [624, 72],
  [656, 73],
  [688, 73],
  [720, 70],
  [752, 73],
  [784, 73],
  [816, 72],
  [848, 71],
  [880, 69],
  [912, 68],
  [944, 65],
  [976, 63],
  [1008, 61],
];

// Stars in upper sky (above tower tops at y=55)
const STARS = [
  { x: 48, y: 14, r: 0.9, d: 0.2, dur: 2.9 },
  { x: 160, y: 26, r: 0.7, d: 1.0, dur: 3.5 },
  { x: 248, y: 10, r: 1.0, d: 0.5, dur: 2.3 },
  { x: 540, y: 22, r: 0.8, d: 1.8, dur: 4.0 },
  { x: 660, y: 32, r: 0.9, d: 0.7, dur: 2.7 },
  { x: 785, y: 12, r: 0.7, d: 2.2, dur: 3.1 },
  { x: 1150, y: 20, r: 0.9, d: 0.4, dur: 2.6 },
  { x: 1270, y: 35, r: 0.8, d: 1.4, dur: 3.8 },
  { x: 1385, y: 16, r: 1.0, d: 0.8, dur: 2.4 },
  { x: 200, y: 40, r: 0.7, d: 2.6, dur: 3.3 },
  { x: 1210, y: 42, r: 0.8, d: 1.2, dur: 4.2 },
  { x: 610, y: 8, r: 0.9, d: 0.3, dur: 2.8 },
];

const BrooklynBridge = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (ref.current)
        ref.current.style.transform = `translateY(${-window.scrollY * 0.06}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="absolute bottom-0 inset-x-0 pointer-events-none animate-fade-in [animation-fill-mode:backwards] z-0"
      style={{ animationDelay: "1.3s" }}
    >
      <svg
        viewBox="0 0 1440 300"
        preserveAspectRatio="xMidYMax meet"
        className="w-full block"
        style={{
          height: "clamp(140px, 22vw, 9999px)",
          filter: "drop-shadow(0 0 16px hsl(168 90% 45% / 0.28))",
        }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="towerGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(168,48%,22%)" />
            <stop offset="100%" stopColor="hsl(168,28%,11%)" />
          </linearGradient>
          <linearGradient id="bbWaterGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={T} stopOpacity="0.22" />
            <stop offset="100%" stopColor={T} stopOpacity="0.01" />
          </linearGradient>
        </defs>

        {/* ── Stars ── */}
        {STARS.map((s, i) => (
          <circle key={`s${i}`} cx={s.x} cy={s.y} r={s.r} fill="white">
            <animate
              attributeName="opacity"
              values="0.7;0.1;0.8;0.15;0.7"
              dur={`${s.dur}s`}
              begin={`${s.d}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {STAYS_LL.map((dx, i) => (
          <line
            key={`sll${i}`}
            x1={CX_L}
            y1={TT}
            x2={dx}
            y2={DY}
            stroke={T}
            strokeWidth="0.65"
            strokeOpacity="0.30"
          />
        ))}
        {STAYS_LR.map((dx, i) => (
          <line
            key={`slr${i}`}
            x1={CX_L}
            y1={TT}
            x2={dx}
            y2={DY}
            stroke={T}
            strokeWidth="0.65"
            strokeOpacity="0.30"
          />
        ))}
        {STAYS_RL.map((dx, i) => (
          <line
            key={`srl${i}`}
            x1={CX_R}
            y1={TT}
            x2={dx}
            y2={DY}
            stroke={T}
            strokeWidth="0.65"
            strokeOpacity="0.30"
          />
        ))}
        {STAYS_RR.map((dx, i) => (
          <line
            key={`srr${i}`}
            x1={CX_R}
            y1={TT}
            x2={dx}
            y2={DY}
            stroke={T}
            strokeWidth="0.65"
            strokeOpacity="0.30"
          />
        ))}

        <path
          d={CABLE}
          fill="none"
          stroke={T}
          strokeWidth="2.2"
          strokeOpacity="0.78"
        />
        <path
          d={CABLE}
          fill="none"
          stroke={T}
          strokeWidth="2.2"
          strokeOpacity="0.55"
          transform="translate(0,6)"
        />

        {HANGERS.map(([x, cy], i) => (
          <line
            key={`h${i}`}
            x1={x}
            y1={cy}
            x2={x}
            y2={DY}
            stroke={T}
            strokeWidth="0.7"
            strokeOpacity="0.30"
          />
        ))}

        <rect
          x={CX_L - TW}
          y={TT}
          width={TW * 2}
          height={DY - TT + 22}
          fill="url(#towerGrad)"
        />

        <rect
          x={CX_L - 28}
          y={TT - 7}
          width={56}
          height={9}
          fill="hsl(168,44%,21%)"
        />
        <rect
          x={CX_L - 21}
          y={TT - 16}
          width={42}
          height={11}
          fill="hsl(168,44%,23%)"
        />
        <rect
          x={CX_L - 7}
          y={TT - 26}
          width={14}
          height={12}
          fill="hsl(168,44%,26%)"
        />

        <polygon
          points={`${CX_L - 10},150 ${CX_L - 10},120 ${CX_L},102 ${CX_L + 10},120 ${CX_L + 10},150`}
          fill={BG}
          opacity="0.93"
        />
        <polygon
          points={`${CX_L - 13},${DY} ${CX_L - 13},212 ${CX_L},188 ${CX_L + 13},212 ${CX_L + 13},${DY}`}
          fill={BG}
          opacity="0.93"
        />

        <rect
          x={CX_L - TW}
          y={TT}
          width={TW * 2}
          height={DY - TT + 22}
          fill="none"
          stroke={T}
          strokeWidth="0.9"
          strokeOpacity="0.38"
        />

        <rect
          x={CX_R - TW}
          y={TT}
          width={TW * 2}
          height={DY - TT + 22}
          fill="url(#towerGrad)"
        />
        <rect
          x={CX_R - 28}
          y={TT - 7}
          width={56}
          height={9}
          fill="hsl(168,44%,21%)"
        />
        <rect
          x={CX_R - 21}
          y={TT - 16}
          width={42}
          height={11}
          fill="hsl(168,44%,23%)"
        />
        <rect
          x={CX_R - 7}
          y={TT - 26}
          width={14}
          height={12}
          fill="hsl(168,44%,26%)"
        />
        <polygon
          points={`${CX_R - 10},150 ${CX_R - 10},120 ${CX_R},102 ${CX_R + 10},120 ${CX_R + 10},150`}
          fill={BG}
          opacity="0.93"
        />
        <polygon
          points={`${CX_R - 13},${DY} ${CX_R - 13},212 ${CX_R},188 ${CX_R + 13},212 ${CX_R + 13},${DY}`}
          fill={BG}
          opacity="0.93"
        />
        <rect
          x={CX_R - TW}
          y={TT}
          width={TW * 2}
          height={DY - TT + 22}
          fill="none"
          stroke={T}
          strokeWidth="0.9"
          strokeOpacity="0.38"
        />

        <rect
          x="0"
          y={DY - 3}
          width="1440"
          height="9"
          fill="hsl(168,32%,15%)"
        />
        <line
          x1="0"
          y1={DY - 3}
          x2="1440"
          y2={DY - 3}
          stroke={T}
          strokeWidth="1.2"
          strokeOpacity="0.55"
        />

        <circle
          cx={CX_R}
          cy={TT - 14}
          r="20"
          fill="none"
          stroke={TB}
          strokeWidth="0.6"
        >
          <animate
            attributeName="r"
            values="16;24;16"
            dur="3.2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.18;0.04;0.18"
            dur="3.2s"
            repeatCount="indefinite"
          />
        </circle>

        <g fill={TB} stroke={TB}>
          <path
            d={`M ${CX_R + 17},${TT - 28} Q ${CX_R + 90},${TT - 46} ${CX_R + 190},${TT - 56}`}
            fill="none"
            strokeWidth="0.9"
            strokeLinecap="round"
          >
            <animate
              attributeName="opacity"
              values="0.72;0.35;0.72"
              dur="2.6s"
              repeatCount="indefinite"
            />
          </path>

          <circle cx={CX_R} cy={TT - 27} r="5.5" strokeWidth="0" />
          <polygon
            points={`${CX_R - 5},${TT - 21} ${CX_R - 6},${TT - 11} ${CX_R + 6},${TT - 11} ${CX_R + 5},${TT - 21}`}
            strokeWidth="0"
            opacity="0.88"
          />
          <path
            d={`M ${CX_R + 3},${TT - 19} L ${CX_R + 12},${TT - 27} L ${CX_R + 17},${TT - 28}`}
            fill="none"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d={`M ${CX_R - 3},${TT - 19} L ${CX_R - 10},${TT - 15}`}
            fill="none"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          <path
            d={`M ${CX_R - 4},${TT - 11} L ${CX_R - 9},${TT - 5} L ${CX_R - 6},${TT}`}
            fill="none"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d={`M ${CX_R + 4},${TT - 11} L ${CX_R + 9},${TT - 5} L ${CX_R + 6},${TT}`}
            fill="none"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        <line
          x1="0"
          y1={DY + 8}
          x2="1440"
          y2={DY + 8}
          stroke={T}
          strokeWidth="1.5"
        >
          <animate
            attributeName="stroke-opacity"
            values="0.38;0.14;0.38"
            dur="3.4s"
            repeatCount="indefinite"
          />
        </line>
        <rect
          x="0"
          y={DY + 9}
          width="1440"
          height={300 - DY - 9}
          fill="url(#bbWaterGrad)"
        />
        <line
          x1="80"
          y1={DY + 20}
          x2="410"
          y2={DY + 20}
          stroke={T}
          strokeWidth="1"
        >
          <animate
            attributeName="stroke-opacity"
            values="0.12;0.04;0.12"
            dur="3.5s"
            repeatCount="indefinite"
          />
        </line>
        <line
          x1="320"
          y1={DY + 32}
          x2="700"
          y2={DY + 32}
          stroke={T}
          strokeWidth="1"
        >
          <animate
            attributeName="stroke-opacity"
            values="0.09;0.03;0.09"
            dur="4.3s"
            begin="0.9s"
            repeatCount="indefinite"
          />
        </line>
        <line
          x1="720"
          y1={DY + 20}
          x2="1100"
          y2={DY + 20}
          stroke={T}
          strokeWidth="1"
        >
          <animate
            attributeName="stroke-opacity"
            values="0.11;0.04;0.11"
            dur="3.8s"
            begin="1.1s"
            repeatCount="indefinite"
          />
        </line>
        <line
          x1="980"
          y1={DY + 34}
          x2="1380"
          y2={DY + 34}
          stroke={T}
          strokeWidth="1"
        >
          <animate
            attributeName="stroke-opacity"
            values="0.08;0.02;0.08"
            dur="5.2s"
            begin="1.6s"
            repeatCount="indefinite"
          />
        </line>
      </svg>
    </div>
  );
};

// ─── Hero ───────────────────────────────────────────────────────────────────────
const Hero = () => {
  const greetings = useMemo(() => greetingsArray, []);
  const typed = useTypewriter(greetings, 80, 1200);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-subtle" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      {/* Ambient glows + floating shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/4 rounded-full blur-[150px]" />
        <div
          className="absolute top-[18%] left-[7%] w-14 h-14 border border-primary/15 animate-float hidden sm:block"
          style={{ animationDelay: "0s", animationDuration: "9s" }}
        />
        <div
          className="absolute top-[32%] right-[9%] w-8 h-8 border border-primary/10 rotate-45 animate-float hidden sm:block"
          style={{ animationDelay: "2.5s", animationDuration: "11s" }}
        />
        <div
          className="absolute bottom-[30%] left-[13%] w-20 h-20 border border-primary/8 animate-float hidden sm:block"
          style={{ animationDelay: "1.2s", animationDuration: "13s" }}
        />
        <div
          className="absolute top-[58%] right-[18%] w-6 h-6 border border-primary/12 rotate-12 animate-float hidden md:block"
          style={{ animationDelay: "3.5s", animationDuration: "8s" }}
        />
        <div
          className="absolute top-[45%] left-[3%] w-4 h-16 border border-primary/8 animate-float hidden lg:block"
          style={{ animationDelay: "0.8s", animationDuration: "10s" }}
        />
      </div>

      {/* Content */}
      <div
        className="container mx-auto px-4 sm:px-6 z-10 text-center max-w-5xl"
        style={{ paddingBottom: "clamp(80px, 22vw, 9999px)" }}
      >
        {/* Typewriter greeting */}
        <div className="mb-5 h-7 flex items-center justify-center">
          <span
            className="text-primary text-base font-medium tracking-[0.2em] uppercase animate-fade-in [animation-fill-mode:backwards]"
            style={{ animationDelay: "0.05s" }}
          >
            {typed}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        {/* Name */}
        <h1 className="font-bold tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-0">
          <span className="block overflow-hidden py-1">
            <span
              className="inline-block animate-text-reveal"
              style={{ animationDelay: "0.15s" }}
            >
              I'm{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Vidyarth
              </span>
            </span>
          </span>
          <span className="block overflow-hidden py-1">
            <span
              className="inline-block animate-text-reveal"
              style={{ animationDelay: "0.32s" }}
            >
              Venkateswaran
            </span>
          </span>
        </h1>

        {/* Accent line */}
        <div
          className="h-px w-28 mx-auto mt-3 mb-5 origin-left animate-draw-x [animation-fill-mode:backwards] bg-gradient-primary"
          style={{ animationDelay: "0.55s" }}
        />

        {/* Role */}
        <p
          className="text-xs sm:text-sm text-muted-foreground mb-3 font-semibold tracking-[0.25em] uppercase animate-fade-in [animation-fill-mode:backwards]"
          style={{ animationDelay: "0.68s" }}
        >
          Software Engineer &nbsp;·&nbsp; Full Stack &nbsp;·&nbsp; ML
        </p>

        {/* Description */}
        <p
          className="text-sm sm:text-base text-muted-foreground mb-10 max-w-lg mx-auto leading-relaxed animate-fade-in [animation-fill-mode:backwards]"
          style={{ animationDelay: "0.82s" }}
        >
          2+ years building enterprise mobility platforms at Toyota. Currently
          studying CS at NYU. Passionate about clean systems and applied ML.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-3 justify-center mb-10 px-4 animate-fade-in [animation-fill-mode:backwards]"
          style={{ animationDelay: "0.96s" }}
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 font-semibold text-primary-foreground"
          >
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              Resume <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToContact}
            className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Get in Touch
          </Button>
        </div>

        {/* Social links */}
        <div
          className="flex gap-8 justify-center animate-fade-in [animation-fill-mode:backwards]"
          style={{ animationDelay: "1.1s" }}
        >
          <a
            href="https://github.com/vid19"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/vidyarthv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="mailto:vv2466@nyu.edu"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        {/* Location badge */}
        <div
          className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground/45 animate-fade-in [animation-fill-mode:backwards]"
          style={{ animationDelay: "1.25s" }}
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse" />
          <span className="font-mono tracking-wider">New York, NY · NYU</span>
        </div>
      </div>

      <BrooklynBridge />
    </section>
  );
};

export default Hero;
