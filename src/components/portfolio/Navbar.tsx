import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4">
          <nav
            className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-300 ${
              scrolled ? "glass-strong shadow-card" : ""
            }`}
          >
            <a href="#hero" className="flex items-center gap-2 group">
              <div className="relative h-8 w-8 rounded-lg bg-gradient-aurora shadow-glow-blue flex items-center justify-center font-display font-bold text-sm">
                TR
              </div>
              <span className="font-display font-semibold tracking-tight hidden sm:inline">
                Tashfeen<span className="text-gradient">.</span>
              </span>
            </a>

            <ul className="hidden md:flex items-center gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow-blue hover:scale-[1.03] transition-transform"
            >
              Let's talk
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden rounded-lg p-2 hover:bg-white/5"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full overflow-hidden">
          <div
            className="h-full bg-gradient-aurora transition-[width] duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-20 inset-x-4 z-40 glass-strong rounded-2xl p-4 md:hidden shadow-elevated"
          >
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-sm hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
