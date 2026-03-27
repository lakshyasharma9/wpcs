"use client";

import { useEffect, useRef } from "react";
import {
  Building2,
  Cpu,
  Layers,
  Box,
  Monitor,
  Cog,
  Ruler,
  Compass,
} from "lucide-react";

const techItems = [
  { name: "AutoCAD", Icon: Compass },
  { name: "Revit", Icon: Building2 },
  { name: "Navisworks", Icon: Layers },
  { name: "BIM 360", Icon: Box },
  { name: "Tekla", Icon: Cog },
  { name: "SketchUp", Icon: Monitor },
  { name: "Bluebeam", Icon: Ruler },
  { name: "Procore", Icon: Cpu },
];

export default function InfiniteMarquee() {
  const items = [...techItems, ...techItems, ...techItems, ...techItems];
  const sectionRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      const fill = fillRef.current;
      if (!section || !fill) return;

      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;
      const exitProgress = Math.max(0, Math.min(1, -rect.top / rect.height));

      if (exitProgress > 0) {
        fill.style.left = `${exitProgress * 100}%`;
        fill.style.width = `${(1 - exitProgress) * 100}%`;
      } else {
        fill.style.left = "0%";
        // 0% when section bottom hits viewport bottom, 100% when section top hits viewport top
        const progress = Math.max(0, Math.min(1, (windowH - rect.top) / (windowH + rect.height)));
        fill.style.width = `${Math.min(progress * 3, 1) * 100}%`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="overflow-hidden py-10 border-y border-[rgba(20,99,33,0.1)]"
      style={{ position: "relative", background: "#D4AF37" }}
    >
      {/* Scroll-driven gold fill */}
      <div
        ref={fillRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "0%",
          backgroundColor: "rgba(10, 59, 18, 0.95)",
          transition: "width 0.1s linear",
          zIndex: 0,
        }}
      />

      <div className="marquee-track flex items-center gap-16 w-max" style={{ position: "relative", zIndex: 1 }}>
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 text-white hover:text-white transition-colors duration-500 group shrink-0"
          >
            <item.Icon
              size={28}
              className="opacity-40 group-hover:opacity-100 transition-opacity duration-500"
            />
            <span className="text-lg font-semibold tracking-wide whitespace-nowrap font-[family-name:var(--font-heading)]">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
