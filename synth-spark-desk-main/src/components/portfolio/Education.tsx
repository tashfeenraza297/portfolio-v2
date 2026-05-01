import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { Section } from "./Section";
import { education } from "@/lib/portfolio-data";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education & Certifications"
      title={<>Always <span className="text-gradient">learning</span>.</>}
    >
      <div className="grid md:grid-cols-2 gap-5">
        {education.map((e, i) => {
          const Icon = e.type === "education" ? GraduationCap : Award;
          return (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl glass p-6 shadow-card hover:shadow-glow-blue transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-gradient-primary p-2.5 shadow-glow-blue shrink-0">
                  <Icon size={18} className="text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--neon-cyan)]">
                    {e.type === "education" ? "Degree" : "Certification"} · {e.duration}
                  </div>
                  <h3 className="font-display font-semibold mt-1">{e.title}</h3>
                  <div className="text-sm text-muted-foreground">{e.org}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
