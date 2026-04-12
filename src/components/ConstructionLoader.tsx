"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const ICONS = [
  <svg key="hammer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="58" height="58">
    <path d="M15 12l-8.5 8.5a2.12 2.12 0 0 1-3-3L12 9"/>
    <path d="M17.64 15L22 10.64"/>
    <path d="M20.91 11.7l-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"/>
  </svg>,
  <svg key="wrench" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="58" height="58">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>,
];

// Tetris grid
const COLS = 6;
const ROWS = 4;
const BLOCK = 14;
const GAP = 3;
const COL_ORDER = [2, 4, 0, 5, 1, 3];

// Progress arc
const R = 80;
const CIRC = 2 * Math.PI * R;

function ProgressRing({ progress }: { progress: number }) {
  return (
    <svg width="220" height="220" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      <circle cx="110" cy="110" r={R} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="2"/>
      <circle
        cx="110" cy="110" r={R} fill="none"
        stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round"
        strokeDasharray={CIRC}
        strokeDashoffset={CIRC * (1 - progress)}
        transform="rotate(-90 110 110)"
        style={{ transition: "stroke-dashoffset 0.5s ease" }}
      />
    </svg>
  );
}

export default function ConstructionLoader() {
  const overlayRef  = useRef<HTMLDivElement>(null);
  const tetrisRef   = useRef<HTMLDivElement>(null);
  const iconRef     = useRef<HTMLDivElement>(null);
  const rippleRef   = useRef<HTMLDivElement>(null);

  const [phase, setPhase]       = useState<"tetris" | "icons">("tetris");
  const [currentIcon, setCurrentIcon] = useState(0);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible]   = useState(true);

  // tetris drop
  useEffect(() => {
    if (phase !== "tetris") return;

    const blocks = Array.from(
      tetrisRef.current?.querySelectorAll<HTMLElement>(".t-block") ?? []
    );

    gsap.set(blocks, { y: -100, opacity: 0 });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(blocks, {
          opacity: 0, y: 18, scale: 0.6,
          stagger: { amount: 0.28, from: "random" },
          duration: 0.28, ease: "power2.in",
          onComplete: () => setPhase("icons"),
        });
      },
    });

    COL_ORDER.forEach((col, order) => {
      const colBlocks = blocks.filter((_, idx) => idx % COLS === col);
      tl.to(colBlocks, { y: 0, opacity: 1, duration: 0.26, ease: "bounce.out", stagger: 0.04 }, order * 0.09);
    });

    tl.to({}, { duration: 0.25 });
  }, [phase]);

  // icon cycle after tetris
  useEffect(() => {
    if (phase !== "icons") return;

    const icon   = iconRef.current;
    const ripple = rippleRef.current;
    if (!icon || !ripple) return;

    let idx = 0;
    const total = ICONS.length;

    function dropIn(cb: () => void) {
      gsap.set(icon, { y: -55, opacity: 0, scaleY: 0.5, transformOrigin: "50% 0%" });
      gsap.set(ripple, { scale: 0, opacity: 0 });

      gsap.timeline({ onComplete: cb })
        .to(icon, { y: 0, opacity: 1, scaleY: 1, duration: 0.3, ease: "power3.out" })
        .to(icon, { scaleY: 1.1, y: 3, duration: 0.08, ease: "power1.out" })
        .to(icon, { scaleY: 1, y: 0, duration: 0.16, ease: "elastic.out(1.3, 0.5)" })
        .to(ripple, { scale: 1.6, opacity: 0.45, duration: 0.14, ease: "power2.out" }, "-=0.16")
        .to(ripple, { scale: 2.6, opacity: 0, duration: 0.2, ease: "power2.out" }, "-=0.06");
    }

    function meltOut(cb: () => void) {
      gsap.timeline({ onComplete: cb })
        .to(icon, { scaleY: 1.25, y: 5, duration: 0.1, ease: "power1.in" })
        .to(icon, { scaleY: 0.15, y: 50, opacity: 0, duration: 0.2, ease: "power3.in" });
    }

    function cycle() {
      setCurrentIcon(idx);
      setProgress((idx + 1) / total);

      dropIn(() => {
        gsap.delayedCall(0.45, () => {
          meltOut(() => {
            idx++;
            if (idx < total) {
              cycle();
            } else {
              gsap.to(overlayRef.current, {
                yPercent: -100, duration: 0.75, ease: "power3.inOut",
                onComplete: () => setVisible(false),
              });
            }
          });
        });
      });
    }

    gsap.delayedCall(0.1, cycle);
  }, [phase]);

  if (!visible) return null;

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        backgroundColor: "#0A3B12",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
    >
      {/* tetris */}
      {phase === "tetris" && (
        <div
          ref={tetrisRef}
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${COLS}, ${BLOCK}px)`,
            gridTemplateRows: `repeat(${ROWS}, ${BLOCK}px)`,
            gap: `${GAP}px`,
          }}
        >
          {Array.from({ length: COLS * ROWS }).map((_, i) => (
            <div
              key={i}
              className="t-block"
              style={{
                width: BLOCK, height: BLOCK,
                borderRadius: "3px",
                backgroundColor:
                  i % 3 === 0 ? "rgba(212,175,55,0.8)"
                  : i % 3 === 1 ? "rgba(255,255,255,0.6)"
                  : "rgba(20,99,33,0.85)",
                boxShadow: "0 2px 5px rgba(0,0,0,0.35)",
              }}
            />
          ))}
        </div>
      )}

      {/* icons */}
      {phase === "icons" && (
        <div style={{ position: "relative", width: 220, height: 220 }}>
          <ProgressRing progress={progress} />

          <div style={{
            position: "absolute", left: "50%", top: "50%",
            transform: "translate(-50%, -50%)",
            width: 80, height: 80,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>

            <div ref={rippleRef} style={{
              position: "absolute",
              width: 72, height: 72,
              borderRadius: "50%",
              border: "2px solid rgba(212,175,55,0.55)",
              pointerEvents: "none",
            }}/>

            <div ref={iconRef} style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              transformOrigin: "50% 50%",
            }}>
              {ICONS[currentIcon]}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
