"use client";

import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  href?: string;
}

export default function ServiceCard({
  title,
  description,
  image,
  href = "/services",
}: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [hovered, setHovered] = useState(false);

  const onMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    );
  };

  const onMouseLeave = () => {
    setTransform("");
    setHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={() => setHovered(true)}
      className="rounded-2xl"
      style={{
        transform,
        transition: transform ? "none" : "transform 0.5s ease",
        transformStyle: "preserve-3d",
        border: hovered ? "2px solid rgba(20,99,33,0.8)" : "2px solid rgba(20,99,33,0.3)",
        overflow: "hidden",
        position: "relative",
        minHeight: "320px",
        cursor: "pointer",
      }}
    >
      {/* Background Image */}
      {image && (
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
          loading="lazy"
          className="object-cover"
          style={{
            transition: "filter 0.4s ease, transform 0.4s ease",
            filter: hovered ? "brightness(0.35) blur(2px)" : "brightness(1.2)",
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
        />
      )}

      {/* Always visible: heading at bottom */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "28px",
          background: hovered
            ? "transparent"
            : "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
          transition: "background 0.4s ease",
        }}
      >
        <h3
          style={{
            fontSize: "clamp(1.1rem, 1.5vw, 1.3rem)",
            lineHeight: 1.25,
            margin: 0,
            color: "#ffffff",
            fontWeight: 700,
            opacity: hovered ? 0 : 1,
            transform: hovered ? "translateY(8px)" : "translateY(0)",
            textShadow: "0 2px 12px rgba(0,0,0,1)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          {title}
        </h3>
      </div>

      {/* Hover overlay: description + button */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "28px",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      >
        <h3
          style={{ fontSize: "clamp(1.1rem, 1.5vw, 1.3rem)", lineHeight: 1.25, marginBottom: "12px", color: "#ffffff", fontWeight: 700 }}
        >
          {title}
        </h3>
        <p
          style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "rgba(255,255,255,0.85)", marginBottom: "24px" }}
        >
          {description}
        </p>
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-bold uppercase tracking-wider hover:gap-4 transition-all duration-300"
        >
          Explore Service <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
