import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Github, Linkedin, Mail, Send, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { personal } from "@/lib/portfolio-data";

const socials = [
  { name: "Email", icon: Mail, href: personal.socials.email, label: personal.email },
  { name: "GitHub", icon: Github, href: personal.socials.github, label: "github.com/tashfeenraza297" },
  { name: "LinkedIn", icon: Linkedin, href: personal.socials.linkedin, label: "linkedin.com/in/tashfeen-raza-2a8b35253" },
  { name: "Fiverr", icon: ExternalLink, href: personal.socials.fiverr, label: "fiverr.com/tashfeen348" },
];

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's build something <span className="text-gradient">intelligent</span>.</>}
      subtitle="Have a project, role, or idea in mind? Drop a message — I usually reply within a day."
    >
      <div className="grid lg:grid-cols-5 gap-6">
        {/* Form */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 rounded-2xl glass-strong p-6 sm:p-8 shadow-elevated space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" id="name">
              <input
                id="name"
                required
                placeholder="Your name"
                className="w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-[var(--neon-blue)] focus:bg-white/10 transition-colors"
              />
            </Field>
            <Field label="Email" id="email">
              <input
                id="email"
                type="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-[var(--neon-blue)] focus:bg-white/10 transition-colors"
              />
            </Field>
          </div>
          <Field label="Message" id="msg">
            <textarea
              id="msg"
              required
              rows={5}
              placeholder="Tell me about the project, timeline, and goals…"
              className="w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-[var(--neon-blue)] focus:bg-white/10 transition-colors resize-none"
            />
          </Field>

          <button
            type="submit"
            disabled={sent}
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-blue hover:scale-[1.02] transition-transform disabled:opacity-70"
          >
            {sent ? (
              <>
                <Check size={16} /> Sent!
              </>
            ) : (
              <>
                <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
                Send Message
              </>
            )}
          </button>
        </motion.form>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-2 space-y-3"
        >
          <button
            onClick={copy}
            className="w-full group rounded-2xl glass p-5 shadow-card hover:shadow-glow-blue transition-all text-left"
          >
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--neon-cyan)] mb-1">
              Email · click to copy
            </div>
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-sm sm:text-base truncate">{personal.email}</span>
              <span className="shrink-0 rounded-lg glass p-2 group-hover:bg-white/10 transition-colors">
                {copied ? (
                  <Check size={14} className="text-[var(--neon-cyan)]" />
                ) : (
                  <Copy size={14} />
                )}
              </span>
            </div>
          </button>

          {socials.slice(1).map((s, i) => (
            <motion.a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className="group flex items-center gap-3 rounded-2xl glass p-4 shadow-card hover:shadow-glow-purple transition-all"
            >
              <div className="rounded-xl bg-gradient-primary p-2.5 shadow-glow-blue">
                <s.icon size={16} className="text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold">{s.name}</div>
                <div className="text-xs text-muted-foreground truncate font-mono">{s.label}</div>
              </div>
              <ExternalLink size={14} className="text-muted-foreground group-hover:text-foreground transition-colors" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}
