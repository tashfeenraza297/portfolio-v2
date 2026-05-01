import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin, Sparkles } from "lucide-react";
import { personal } from "@/lib/portfolio-data";

function useTypewriter(words: string[], speed = 80, pause = 1500) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          const next = word.slice(0, text.length + 1);
          setText(next);
          if (next === word) setTimeout(() => setDel(true), pause);
        } else {
          const next = word.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDel(false);
            setI((p) => p + 1);
          }
        }
      },
      del ? speed / 2 : speed
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(personal.roles);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute inset-0 grid-bg" />

      {/* Aurora blobs with parallax */}
      <motion.div
        animate={{ x: mouse.x * 30, y: mouse.y * 30 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute top-1/4 -left-20 h-72 w-72 rounded-full bg-[var(--neon-blue)] opacity-20 blur-3xl"
      />
      <motion.div
        animate={{ x: -mouse.x * 40, y: -mouse.y * 40 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute bottom-1/4 -right-20 h-80 w-80 rounded-full bg-[var(--neon-purple)] opacity-20 blur-3xl"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-[var(--neon-cyan)] opacity-10 blur-3xl animate-aurora" />

      <div className="relative mx-auto max-w-5xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground mb-8"
        >
          <Sparkles size={12} className="text-[var(--neon-cyan)]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-cyan)] animate-pulse" />
          Available for new projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95]"
        >
          {personal.name.split(" ")[0]}
          <br />
          <span className="text-gradient">{personal.name.split(" ")[1]}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 flex items-center justify-center gap-2 text-base sm:text-xl md:text-2xl text-muted-foreground font-mono"
        >
          <span className="text-[var(--neon-cyan)]">&gt;</span>
          <span className="text-foreground">{typed}</span>
          <span className="inline-block h-5 sm:h-6 w-[2px] bg-[var(--neon-cyan)] animate-blink" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground"
        >
          {personal.title} <span className="text-foreground/70">·</span> {personal.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted-foreground"
        >
          <MapPin size={14} /> {personal.location}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-blue hover:scale-[1.03] transition-transform"
          >
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            <Mail size={16} /> Contact Me
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            <Download size={16} /> Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-muted-foreground"
      >
        <span className="font-mono uppercase tracking-widest">Scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-[var(--neon-cyan)] to-transparent" />
      </motion.div>
    </section>
  );
}
