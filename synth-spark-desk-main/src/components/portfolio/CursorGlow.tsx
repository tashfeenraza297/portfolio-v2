import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[1] h-[420px] w-[420px] rounded-full transition-opacity duration-300"
      style={{
        left: pos.x - 210,
        top: pos.y - 210,
        opacity: visible ? 1 : 0,
        background:
          "radial-gradient(circle, oklch(0.72 0.20 240 / 0.10) 0%, transparent 60%)",
        filter: "blur(20px)",
      }}
    />
  );
}
