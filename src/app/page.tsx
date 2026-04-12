"use client";

import { useEffect, useRef, useLayoutEffect } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "@/components/MagneticButton";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import ServiceCard from "@/components/ServiceCard";
import Crosshair from "@/components/Crosshair";
import { services } from "@/data/services";
import {
  ArrowDown,
  CheckCircle2,
  Award,
  Users,
  Briefcase,
} from "lucide-react";

const BuildingModel = dynamic(() => import("@/components/RealBuildingModel"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-[#146321] border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

const FloatingShapes = dynamic(() => import("@/components/FloatingShapes"), {
  ssr: false,
});

const stats = [
  { value: "100+", label: "Projects Completed", icon: <CheckCircle2 size={20} /> },
  { value: "4+", label: "Years Experience", icon: <Award size={20} /> },
  { value: "50+", label: "Team Members", icon: <Users size={20} /> },
  { value: "30+", label: "Active Clients", icon: <Briefcase size={20} /> },
];

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (lineRef.current && sectionRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      );

      circleRefs.current.forEach((circle, i) => {
        if (!circle) return;
        gsap.fromTo(
          circle,
          { backgroundColor: "white", borderColor: "rgba(20,99,33,0.3)", color: "rgba(20,99,33,0.4)" },
          {
            backgroundColor: "#146321",
            borderColor: "#146321",
            color: "white",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `top ${65 - i * 15}%`,
              end: `top ${50 - i * 15}%`,
              scrub: 0.8,
            },
          }
        );
      });
    }

    // Standard reveal animations for sections
    const reveals = gsap.utils.toArray(".reveal");
    reveals.forEach((reveal: any) => {
      gsap.fromTo(reveal,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: reveal,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div className="overflow-hidden">
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center bg-[#F8FAF8] overflow-hidden"
      >
        <Crosshair containerRef={heroRef} color="#146321" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAF8] via-[#F8FAF8] to-[rgba(20,99,33,0.05)]" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#146321] rounded-full opacity-[0.03] blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D4AF37] rounded-full opacity-[0.04] blur-3xl" />

        <div className="hero-container section-container relative z-10 w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          style={{ paddingTop: "clamp(110px, 22vw, 160px)", paddingBottom: "60px" }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="flex items-center gap-2" style={{ marginBottom: "16px", marginTop: "16px" }}>
              <div className="w-2 h-2 rounded-full bg-[#146321] animate-pulse flex-shrink-0" />
              <span className="text-xs font-semibold text-[#146321] tracking-[0.12em] uppercase leading-snug">
                Pioneer in Construction Technology
              </span>
            </div>

            <div>
              <h1
                className="font-extrabold font-[family-name:var(--font-heading)] text-[#1E293B]"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0 }}
              >
                Building the
                <br />
                <span className="text-[#146321]">Future</span> with
                <br />
                <span>Technology</span>
              </h1>
            </div>

            <p
              className="text-[#475569]"
              style={{ fontSize: "1.0625rem", lineHeight: 1.75, maxWidth: "580px", marginTop: "28px", marginBottom: 0 }}
            >
              We transform construction through cutting-edge BIM modeling, VDC
              coordination, and digital fabrication — delivering precision,
              efficiency, and innovation at every stage.
            </p>

            <div className="flex flex-wrap gap-4" style={{ marginTop: "32px", marginBottom: "48px" }}>
              <MagneticButton href="/contact">
                Start Your Project
              </MagneticButton>
              <MagneticButton href="/projects" variant="outline">
                View Our Work
              </MagneticButton>
            </div>

            {/* Stats bar */}
            <div style={{ borderTop: "1px solid rgba(20,99,33,0.1)", paddingTop: "24px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 8px" }}>
                {stats.map((stat, i) => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", gap: "3px", overflow: "hidden" }}>
                    <div className="flex items-center text-[#146321]" style={{ gap: "6px" }}>
                      <span style={{ flexShrink: 0, display: "flex" }}>{stat.icon}</span>
                      <span
                        className="font-bold font-[family-name:var(--font-heading)]"
                        style={{ fontSize: "clamp(1.1rem, 5.5vw, 1.875rem)", whiteSpace: "nowrap" }}
                      >
                        {stat.value}
                      </span>
                    </div>
                    <span style={{
                      fontWeight: 600, textTransform: "uppercase", color: "#475569",
                      fontSize: "clamp(0.55rem, 2.2vw, 0.7rem)",
                      letterSpacing: "0.03em", lineHeight: 1.3,
                      whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                    }}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative h-[400px] sm:h-[480px] lg:h-[560px]" style={{ width: "100%", maxWidth: "100%", margin: "0 auto" }}>
            <BuildingModel />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#146321] opacity-10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>

      </section>

      <section className="bg-white">
        <InfiniteMarquee />
      </section>

      <section className="relative bg-[#F8FAF8]" style={{ paddingTop: "80px", paddingBottom: "80px" }}>

        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center reveal" style={{ marginBottom: "64px" }}>
            <div>
              <span
                className="inline-block text-xs font-bold text-[#146321] tracking-[0.18em] uppercase"
                style={{ marginBottom: "16px", marginTop: "50px" }}
              >
                Our Expertise
              </span>
              <h3
                className="font-bold font-[family-name:var(--font-heading)] text-[#1E293B]"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "20px" }}
              >
                Comprehensive Construction Solutions
              </h3>
              <p
                className="text-[#475569]"
                style={{ fontSize: "1.0625rem", lineHeight: 1.75, marginBottom: "0" }}
              >
                We provide end-to-end digital construction services that bridge the
                gap between design and reality, ensuring every project is delivered
                with surgical precision.
              </p>
            </div>

            <div ref={sectionRef} style={{ display: "flex", flexDirection: "column", position: "relative" }}>
              <div style={{
                position: "absolute", left: "18px", top: "22px",
                width: "2px", bottom: "22px",
                background: "rgba(20,99,33,0.12)", borderRadius: "2px",
              }} />
              <div
                ref={lineRef}
                style={{
                  position: "absolute", left: "18px", top: "22px",
                  width: "2px", bottom: "22px",
                  background: "#146321", borderRadius: "2px",
                  transformOrigin: "top center", transform: "scaleY(0)",
                }}
              />

              {[
                { step: "01", title: "Discover & Plan", desc: "Analyze scope, site conditions, and goals to build a precise digital strategy." },
                { step: "02", title: "Model & Coordinate", desc: "BIM and VDC teams create clash-free 3D models, aligning all trades before ground breaks." },
                { step: "03", title: "Deliver & Support", desc: "Prefab drawings to 4D scheduling — on-time, on-budget, every time." },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "18px", paddingBottom: i < 2 ? "44px" : "0", position: "relative" }}>
                  <div
                    ref={el => { circleRefs.current[i] = el; }}
                    style={{
                      width: "38px", height: "38px", borderRadius: "50%",
                      background: "white", border: "2px solid rgba(20,99,33,0.3)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontWeight: 700, fontSize: "0.72rem", color: "rgba(20,99,33,0.4)",
                      flexShrink: 0, zIndex: 2, transition: "background 0.3s, border-color 0.3s, color 0.3s",
                    }}
                  >
                    {item.step}
                  </div>
                  <div style={{ paddingTop: "8px" }}>
                    <h4 style={{ fontWeight: 700, color: "#1E293B", fontSize: "0.9rem", marginBottom: "4px", margin: "0 0 4px" }}>
                      {item.title}
                    </h4>
                    <p style={{ color: "#475569", fontSize: "0.82rem", lineHeight: 1.6, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
            {services.map((service, i) => (
              <ServiceCard
                key={i}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white overflow-hidden" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[rgba(20,99,33,0.03)] to-transparent" />

        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span
                className="inline-block text-xs font-bold text-[#146321] tracking-[0.18em] uppercase"
                style={{ marginBottom: "16px" }}
              >
                Superior Advantage
              </span>
              <h2
                className="font-bold font-[family-name:var(--font-heading)] text-[#1E293B]"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "20px" }}
              >
                Why Industry Leaders <br />
                <span className="text-[#146321]">Choose WPCS</span>
              </h2>
              <p
                className="text-[#475569]"
                style={{ fontSize: "1.0625rem", lineHeight: 1.75, marginBottom: "32px" }}
              >
                We combine deep engineering expertise with cutting-edge
                technology to deliver results that exceed expectations.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  {
                    title: "Industry-Leading Accuracy",
                    desc: "98% clash detection rate in BIM coordination",
                  },
                  {
                    title: "Faster Project Delivery",
                    desc: "25% reduction in project timelines through prefabrication",
                  },
                  {
                    title: "Cost Optimization",
                    desc: "Reduce change orders by up to 35% with VDC",
                  },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div
                      className="rounded-full bg-[rgba(20,99,33,0.1)] flex items-center justify-center shrink-0"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <CheckCircle2 size={18} className="text-[#146321]" />
                    </div>
                    <div>
                      <h4
                        className="font-semibold text-[#1E293B]"
                        style={{ marginBottom: "4px", fontSize: "0.9375rem" }}
                      >
                        {item.title}
                      </h4>
                      <p className="text-[#475569]" style={{ fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="glass rounded-3xl relative overflow-hidden" style={{ padding: "32px" }}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#146321] opacity-10 rounded-full blur-2xl" />
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  {[
                    { label: "BIM Coordination", value: 98 },
                    { label: "Client Satisfaction", value: 99 },
                    { label: "On-Time Delivery", value: 95 },
                    { label: "Cost Accuracy", value: 97 },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between" style={{ marginBottom: "8px" }}>
                        <span className="font-medium text-[#1E293B]" style={{ fontSize: "0.875rem" }}>
                          {item.label}
                        </span>
                        <span className="font-bold text-[#146321]" style={{ fontSize: "0.875rem" }}>
                          {item.value}%
                        </span>
                      </div>
                      <div className="bg-[rgba(20,99,33,0.1)] rounded-full overflow-hidden" style={{ height: "8px" }}>
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#146321] to-[#1a7a2a] transition-all duration-1000"
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#0A3B12] overflow-hidden" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A3B12] to-[#146321] opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37] rounded-full opacity-5 blur-3xl" />

        <div className="section-container relative z-10" style={{ textAlign: "center" }}>
          <h2
            className="font-bold font-[family-name:var(--font-heading)] !text-white"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "20px" }}
          >
            Ready to Transform
            <br />
            Your Next Project?
          </h2>
          <p
            className="text-white/70"
            style={{ fontSize: "1.0625rem", lineHeight: 1.75, maxWidth: "640px", margin: "0 auto 32px" }}
          >
            Partner with West Palm Construction Solutions and experience the
            future of construction technology. Let&apos;s build something
            extraordinary together.
          </p>
          <div className="flex flex-wrap justify-center" style={{ gap: "16px" }}>
            <MagneticButton href="/contact">
              Get Started Today
            </MagneticButton>
            <MagneticButton href="/projects" variant="gold">
              Explore Projects
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
