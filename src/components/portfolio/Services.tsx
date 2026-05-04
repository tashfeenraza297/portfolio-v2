import { motion } from "framer-motion";
import { Bot, Brain, Eye, Workflow } from "lucide-react";
import { Section } from "./Section";
import { services } from "@/lib/portfolio-data";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Workflow, Bot, Eye, Brain,
};

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title={<>What I <span className="text-gradient">Build For You</span></>}
      subtitle="Real solutions to real business problems built with the right AI for the job."
    >
      <div className="grid sm:grid-cols-2 gap-6">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon] ?? Bot;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl glass-strong p-7 shadow-card glow-ring overflow-hidden group"
            >
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[var(--neon-blue)] opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative space-y-4">
                <div className="rounded-xl bg-gradient-primary p-2.5 shadow-glow-blue w-fit">
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                <div className="pt-1">
                  <span className="text-xs font-medium text-[var(--neon-blue)] bg-[var(--neon-blue)]/10 px-3 py-1 rounded-full">
                    Best for: {service.bestFor}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
