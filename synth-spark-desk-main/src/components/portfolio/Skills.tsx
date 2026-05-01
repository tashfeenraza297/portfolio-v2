import { motion } from "framer-motion";
import { Bot, Brain, Code2, Database, Plug, Workflow } from "lucide-react";
import { Section } from "./Section";
import { skillCategories } from "@/lib/portfolio-data";

const icons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Bot, Brain, Code2, Plug, Workflow, Database,
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>The full <span className="text-gradient">AI stack</span>.</>}
      subtitle="From experimenting with new models to shipping reliable systems — these are the tools I reach for."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((cat, i) => {
          const Icon = icons[cat.icon] ?? Brain;
          return (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl glass p-6 shadow-card hover:shadow-glow-purple transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="rounded-xl bg-gradient-primary p-2 shadow-glow-blue">
                  <Icon size={16} className="text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold">{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-[var(--neon-blue)] transition-colors cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
