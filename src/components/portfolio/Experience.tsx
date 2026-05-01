import { motion } from "framer-motion";
import { MapPin, CheckCircle2 } from "lucide-react";
import { Section } from "./Section";
import { experience } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>Where I've <span className="text-gradient">shipped</span>.</>}
    >
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--neon-blue)] via-[var(--neon-purple)] to-transparent" />

        <div className="space-y-8">
          {experience.map((e, i) => (
            <motion.div
              key={e.role + i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-12 sm:pl-16"
            >
              {/* Dot */}
              <div className="absolute left-2 sm:left-4 top-6 h-5 w-5 rounded-full bg-gradient-primary shadow-glow-blue ring-4 ring-background" />

              <div className="rounded-2xl glass p-6 sm:p-8 shadow-card hover:shadow-glow-blue transition-shadow">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-display text-xl font-semibold">{e.role}</h3>
                      {e.current && (
                        <span className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-green-500/20 text-green-400 border border-green-500/30 animate-pulse">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-[var(--neon-cyan)] mt-0.5">{e.company}</div>
                  </div>
                  <div className="text-right text-xs font-mono text-muted-foreground">
                    <div>{e.duration}</div>
                    <div className="flex items-center gap-1 mt-1 justify-end">
                      <MapPin size={11} /> {e.location}
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-5">
                  {e.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={15} className="text-[var(--neon-cyan)] shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {e.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-white/5 border border-border px-2 py-0.5 text-[11px] font-mono text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
