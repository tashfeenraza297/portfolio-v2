import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl px-4">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-14 max-w-2xl"
          >
            {eyebrow && (
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-mono uppercase tracking-widest text-[var(--neon-cyan)] mb-4">
                <span className="h-1 w-1 rounded-full bg-[var(--neon-cyan)]" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-base sm:text-lg text-muted-foreground">{subtitle}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
