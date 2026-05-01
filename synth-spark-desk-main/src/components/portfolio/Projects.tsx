import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import { Section } from "./Section";
import { projects, projectFilters } from "@/lib/portfolio-data";

export function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title={<>Projects that <span className="text-gradient">ship</span>.</>}
      subtitle="A selection of recent AI systems I've designed, built, and deployed."
    >
      <div className="flex flex-wrap gap-2 mb-10">
        {projectFilters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              filter === f ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {filter === f && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-gradient-primary shadow-glow-blue"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative">{f}</span>
          </button>
        ))}
      </div>

      <LayoutGroup>
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl glass p-6 shadow-card hover:shadow-glow-purple transition-all duration-300 flex flex-col"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-aurora opacity-0 group-hover:opacity-[0.07] transition-opacity pointer-events-none" />

                <div className="relative flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="rounded-xl bg-gradient-primary p-2 shadow-glow-blue">
                      <Sparkles size={16} className="text-primary-foreground" />
                    </div>
                    <div className="flex gap-1.5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full glass px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--neon-cyan)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-semibold leading-tight">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>

                  <div className="mt-4 space-y-1.5">
                    {p.metrics.map((m) => (
                      <div key={m} className="flex items-center gap-2 text-xs">
                        <span className="h-1 w-1 rounded-full bg-[var(--neon-cyan)]" />
                        <span className="font-mono text-muted-foreground">{m}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-white/5 border border-border px-2 py-0.5 text-[11px] font-mono text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative mt-6 flex items-center gap-2 pt-5 border-t border-border">
                  <a
                    href={p.demo}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 hover:bg-white/10 px-3 py-1.5 text-xs font-medium transition-colors"
                  >
                    Live Demo <ArrowUpRight size={12} />
                  </a>
                  <a
                    href={p.code}
                    className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={12} /> Code
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </Section>
  );
}
