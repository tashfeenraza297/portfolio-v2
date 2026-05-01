import { motion } from "framer-motion";
import { Bot, Brain, Cog, Eye, Zap, Briefcase, GraduationCap } from "lucide-react";
import { Section } from "./Section";
import { highlights, personal } from "@/lib/portfolio-data";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Eye, Bot, Zap, Cog,
};

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>Engineering intelligence,<br /><span className="text-gradient">end to end.</span></>}
      subtitle={personal.summary}
    >
      <div className="grid lg:grid-cols-5 gap-6">
        {/* Bio card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 relative rounded-2xl glass-strong p-8 shadow-card glow-ring overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-[var(--neon-purple)] opacity-20 blur-3xl" />
          <div className="relative space-y-6">
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-gradient-primary p-2.5 shadow-glow-blue">
                <Briefcase size={18} className="text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Currently</div>
                <div className="font-semibold mt-0.5">AI Engineer</div>
                <div className="text-sm text-muted-foreground">Neuronix Technology</div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="flex items-start gap-3">
              <div className="rounded-xl glass p-2.5">
                <GraduationCap size={18} className="text-[var(--neon-cyan)]" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Education</div>
                <div className="font-semibold mt-0.5">BS Artificial Intelligence</div>
                <div className="text-sm text-muted-foreground">NUML · 2021–2025</div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <p className="text-sm text-muted-foreground leading-relaxed">
              I care about shipping AI that actually works in production — measurable, observable, and useful. From concept to deployment, I focus on the messy details others skip.
            </p>
          </div>
        </motion.div>

        {/* Highlights grid */}
        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
          {highlights.map((h, i) => {
            const Icon = iconMap[h.icon] ?? Brain;
            return (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl glass p-6 shadow-card hover:shadow-glow-blue transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-aurora opacity-0 group-hover:opacity-[0.06] transition-opacity" />
                <div className="relative">
                  <div className="inline-flex rounded-xl bg-gradient-primary p-2.5 shadow-glow-blue mb-4">
                    <Icon size={18} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-lg">{h.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{h.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
