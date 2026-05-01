import { Github, Linkedin, Mail, ExternalLink, Heart } from "lucide-react";
import { personal } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="relative border-t border-border py-10 mt-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--neon-blue)] to-transparent opacity-50" />
      <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Built with</span>
          <Heart size={14} className="text-[var(--neon-pink)] fill-[var(--neon-pink)]" />
          <span>for AI & Machine Learning</span>
        </div>

        <div className="flex items-center gap-1">
          {[
            { icon: Mail, href: personal.socials.email },
            { icon: Github, href: personal.socials.github },
            { icon: Linkedin, href: personal.socials.linkedin },
            { icon: ExternalLink, href: personal.socials.fiverr },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>

        <div className="text-xs font-mono text-muted-foreground">
          © {new Date().getFullYear()} {personal.name}
        </div>
      </div>
    </footer>
  );
}
