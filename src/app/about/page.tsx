"use client";

import { useEffect, useRef, useState } from "react";
import { Eye, Target as Mission, Award, Users, TrendingUp, Shield, Zap, Rocket, Building2, CheckCircle, Ruler, Layers, Box, Monitor, Calendar, ArrowRight } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import Timeline from "@/components/Timeline";
import Image from "next/image";
import Snowfall from "react-snowfall";
import ServiceCard from "@/components/ServiceCard";

const values = [
  { title: "Precision Engineering", desc: "Every model we build is clash-detected to sub-millimeter accuracy.", icon: Zap },
  { title: "Collaborative Spirit", desc: "We work as an extension of your own team, ensuring seamless communication.", icon: Users },
  { title: "Forward Thinking", desc: "Always exploring the latest in AI, XR, and generative design for AEC.", icon: Rocket },
  { title: "Global Reach", desc: "Headquartered in West Palm Beach, serving projects worldwide.", icon: Building2 },
];

const achievements = [
  { number: "250+", label: "Projects Delivered", icon: Award },
  { number: "15+", label: "Years Excellence", icon: TrendingUp },
  { number: "120+", label: "Expert Team", icon: Users },
  { number: "99.5%", label: "Client Satisfaction", icon: Shield },
];

const events = [
  { title: "Construction Tech Summit 2024", date: "March 15, 2024", location: "Miami, FL", image: "/about/team.jpg" },
  { title: "BIM Innovation Conference", date: "April 22, 2024", location: "Orlando, FL", image: "/about/team.jpg" },
  { title: "Digital Construction Expo", date: "May 10, 2024", location: "Tampa, FL", image: "/about/team.jpg" },
  { title: "VDC Workshop Series", date: "June 5, 2024", location: "West Palm Beach, FL", image: "/about/team.jpg" },
  { title: "Smart Building Forum", date: "July 18, 2024", location: "Jacksonville, FL", image: "/about/team.jpg" },
  { title: "AEC Technology Showcase", date: "August 12, 2024", location: "Fort Lauderdale, FL", image: "/about/team.jpg" },
];

const services = [
  {
    title: "BIM (MEPF)",
    description: "Comprehensive 3D Building Information Modeling for Mechanical, Electrical, Plumbing, and Fire Protection (MEPF) systems. We deliver clash-free, coordinated models to streamline your entire construction process.",
    image: "/BIM(MEPF).png",
  },
  {
    title: "Prefabrication",
    description: "Detailed modeling and accurate spool drawings designed to optimize off-site manufacturing, reduce waste, and accelerate on-site installation.",
    image: "/Prefabrication.png",
  },
  {
    title: "Estimation",
    description: "Precise material take-offs and cost estimates to help you bid competitively, plan budgets accurately, and control project finances.",
    image: "/Estimation.png",
  },
  {
    title: "Renderings",
    description: "High-quality, photorealistic 3D visualizations that bring your designs to life, helping stakeholders easily conceptualize the final build.",
    image: "/Renderings.png",
  },
  {
    title: "Submittals Review",
    description: "Thorough evaluation of shop drawings, equipment data, and material specifications to ensure strict compliance with project standards and design intent.",
    image: "/Submittals Review.png",
  },
  {
    title: "Project Management",
    description: "End-to-end project oversight, including schedule coordination, resource allocation, and workflow optimization to ensure on-time delivery.",
    image: "/Project Management.png",
  },
  {
    title: "Drone Video",
    description: "High-resolution aerial videography for accurate site surveys, real-time construction progress tracking, and compelling marketing material.",
    image: "/Drone Video.png",
  },
];

export default function AboutPage() {
  const revealRefs = useRef<HTMLDivElement[]>([]);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );
    revealRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F8FAF8]">

      {/* ══════════════════════════════════════════════════════════════════
          HERO SECTION - Full-Width Background with Overlay
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ marginTop: "80px" }}>
        {/* Full-Width Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/about/hero-bg.jpg"
            alt="West Palm Construction Solutions"
            fill
            priority
            className="object-cover"
            quality={100}
          />
          {/* Darker Overlay - Better Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/40" />
          {/* Bottom to Top Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="section-container relative z-10" style={{ paddingTop: "clamp(60px, 8vh, 100px)", paddingBottom: "clamp(80px, 10vh, 120px)" }}>
          <div className="max-w-6xl mx-auto text-center">
            
            {/* Main Heading */}
            <h1 ref={addToRefs} className="opacity-0 translate-y-10 transition-all duration-1000 font-bold font-[family-name:var(--font-heading)] mb-10 mx-auto" style={{ fontSize: "clamp(1.75rem, 4.5vw, 3rem)", lineHeight: 1.2, letterSpacing: "-0.02em", color: "#D4AF37", maxWidth: "900px" }}>
              Transforming Construction Through
              <br />
              <span className="text-[#F5F5F0]">Innovation & Precision</span>
            </h1>

            {/* Description */}
            <p ref={addToRefs} className="opacity-0 translate-y-10 transition-all duration-1000 delay-100 text-white/85 leading-relaxed mb-14 max-w-4xl mx-auto" style={{ fontSize: "clamp(0.9rem, 1.8vw, 1.125rem)", marginBottom: "clamp(30px, 4vh, 32px)" }}>
              Leading BIM and VDC solutions provider combining cutting-edge technology with precision engineering to revolutionize construction.
            </p>

            {/* Stats Row */}
            <div ref={addToRefs} className="opacity-0 translate-y-10 transition-all duration-1000 delay-300 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-12 max-w-5xl mx-auto" style={{marginBottom: "clamp(30px, 4vh, 32px)"}}>
              {[
                { value: "100+", label: "Projects Delivered" },
                { value: "4+", label: "Years of Excellence" },
                { value: "50+", label: "Expert Team" },
                { value: "98%", label: "Client Satisfaction" },
              ].map((stat, i) => (
                <div key={i} className="bg-black/40 backdrop-blur-md rounded-lg p-5 border border-white/20 hover:bg-black/50 transition-all duration-300 hover:scale-105 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-2 font-[family-name:var(--font-heading)]">{stat.value}</div>
                  <div className="text-white/90 text-xs font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div ref={addToRefs} className="opacity-0 translate-y-10 transition-all duration-1000 delay-400 flex flex-wrap justify-center gap-3" style={{marginBottom: "clamp(20px, 4vh, 32px)"}}>
              <MagneticButton href="/contact" variant="gold" className="!px-6 !py-3 !text-base">
                Start Your Project
              </MagneticButton>
              <MagneticButton href="/projects" className="!bg-white/10 !text-white border-2 !border-white/30 hover:!bg-white/20 !px-6 !py-3 !text-base">
                View Our Work
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          VISION & MISSION - Alternating Layout
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-white" style={{ paddingTop: "clamp(100px, 15vh, 160px)", paddingBottom: "clamp(90px, 15vh, 160px)"}}>
        <div className="section-container">
          
          {/* Vision Section - Image Left, Content Right */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center" style={{ marginBottom: "clamp(80px, 12vh, 120px)" }}>
            {/* Image */}
            <div ref={addToRefs} className="opacity-0 translate-x-10 transition-all duration-1000 relative rounded-3xl overflow-hidden shadow-2xl" style={{ height: "clamp(450px, 55vh, 650px)", marginBottom: "clamp(20px, 4vh, 32px)" }}>
              <Image
                src="/about/hero-building.jpg"
                alt="Our Vision"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div ref={addToRefs} className="opacity-0 translate-x-10 transition-all duration-1000 delay-200">
              <span className="inline-block text-xs font-[family-name:var(--font-heading)] font-bold text-[#D4AF37] tracking-wider uppercase mb-4" style={{fontSize: "20px"}}>
                Our Vision
              </span>
              
              <h2 className="font-bold font-[family-name:var(--font-heading)] text-[#1E293B] mb-5" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", lineHeight: 1.3, marginBottom: "clamp(20px, 4vh, 32px)" }}>
                Global Benchmark for Construction Excellence
              </h2>
              
              <p className="text-[#64748B] leading-relaxed mb-10" style={{ fontSize: "clamp(0.875rem, 1.5vw, 1rem)", marginBottom: "clamp(20px, 4vh, 32px)" }}>
                To be the global benchmark for construction excellence, where technology and human expertise converge to create sustainable, efficient, and iconic landmarks that stand the test of time.
              </p>

              {/* Key Points */}
              <div className="space-y-3.5">
                {[
                  "Technology & Human Expertise Convergence",
                  "Sustainable & Efficient Solutions",
                  "Iconic Landmarks That Last",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#146321]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={14} className="text-[#146321]" strokeWidth={2.5} />
                    </div>
                    <span className="text-[#1E293B] font-medium" style={{ fontSize: "clamp(0.875rem, 1.4vw, 0.95rem)" }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mission Section - Content Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
            {/* Content */}
            <div ref={addToRefs} className="opacity-0 translate-x-10 transition-all duration-1000 order-2 md:order-1">
              <span className="inline-block text-xs font-[family-name:var(--font-heading)] font-bold text-[#D4AF37] tracking-wider uppercase mb-4" style={{fontSize: "20px"}}>
                Our Mission
              </span>
              
              <h2 className="font-bold font-[family-name:var(--font-heading)] text-[#1E293B] mb-5" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", lineHeight: 1.3,marginBottom: "clamp(20px, 4vh, 32px)" }}>
                Empowering Builders with Precision Tools
              </h2>
              
              <p className="text-[#64748B] leading-relaxed mb-10" style={{ fontSize: "clamp(0.875rem, 1.5vw, 1rem)", marginBottom: "clamp(20px, 4vh, 32px)" }}>
                Empowering builders with high-precision digital tools and workflows that eliminate waste, reduce risks, and unlock new possibilities in prefabrication and advanced construction methodologies.
              </p>

              {/* Key Points */}
              <div className="space-y-3.5">
                {[
                  "High-Precision Digital Tools & Workflows",
                  "Eliminate Waste & Reduce Project Risks",
                  "Advanced Prefabrication Methodologies",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={14} className="text-[#D4AF37]" strokeWidth={2.5} />
                    </div>
                    <span className="text-[#1E293B] font-medium" style={{ fontSize: "clamp(0.875rem, 1.4vw, 0.95rem)" }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div ref={addToRefs} className="opacity-0 translate-x-10 transition-all duration-1000 delay-200 relative rounded-3xl overflow-hidden shadow-2xl order-1 md:order-2" style={{ height: "clamp(450px, 55vh, 650px)" }}>
              <Image
                src="/about/our-mission.png"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          EXPERTISE SHOWCASE
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#F8FAF8]" style={{ paddingTop: "clamp(10px, 15vh, 160px)", paddingBottom: "clamp(100px, 15vh, 160px)" }}>
        <div className="section-container">
          <div className="w-full flex flex-col items-center opacity-0 translate-y-10 transition-all duration-1000" ref={addToRefs} style={{ marginBottom: "clamp(60px, 10vh, 100px)" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#146321]/10 border border-[#146321]/20 mb-6" style={{marginBottom: "clamp(40px, 10vh, 10px)"}}>
              <Building2 size={16} className="text-[#146321]" />
              <span className="text-[#146321] text-sm font-semibold tracking-wide">OUR EXPERTISE</span>
            </div>
            <h2 className="font-bold font-[family-name:var(--font-heading)] text-[#1E293B] mb-6 text-center w-full" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", lineHeight: 1.1 }}>
              What We Do <span className="text-[#146321]">Best</span>
            </h2>
            <p className="text-[#475569] max-w-3xl leading-relaxed text-center px-4 w-full" style={{ fontSize: "clamp(1.125rem, 2.2vw, 1.375rem)" }}>
              Comprehensive digital construction solutions that bridge the gap between design and reality
            </p>
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

      {/* ══════════════════════════════════════════════════════════════════
          VALUES - Interactive Cards
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-white via-[#F8FAF8] to-white overflow-hidden" style={{ paddingTop: "clamp(100px, 15vh, 160px)", paddingBottom: "clamp(100px, 15vh, 160px)" }}>
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#146321]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#D4AF37]/5 to-transparent rounded-full blur-3xl" />
        
        <div className="section-container relative z-10">
          <div className="flex flex-col items-center opacity-0 translate-y-10 transition-all duration-1000" ref={addToRefs} style={{ marginBottom: "clamp(60px, 10vh, 100px)" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#146321]/10 border border-[#146321]/20" style={{ marginBottom: "clamp(16px, 3vh, 24px)" }}>
              <Zap size={16} className="text-[#146321]" />
              <span className="text-[#146321] text-sm font-semibold tracking-wide">CORE VALUES</span>
            </div>
            <h2 className="font-bold font-[family-name:var(--font-heading)] text-[#1E293B] text-center w-full" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", marginBottom: "clamp(20px, 4vh, 32px)", lineHeight: 1.1 }}>
              What Drives <span className="text-[#146321]">Us Forward</span>
            </h2>
            <p className="text-[#475569] max-w-2xl leading-relaxed text-center px-4 w-full" style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
              The principles that guide every project we undertake and every relationship we build
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <div
                  key={i}
                  ref={addToRefs}
                  className="opacity-0 translate-y-10 transition-all duration-700 group"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="relative bg-white rounded-3xl h-full border-2 border-[#146321]/10 hover:border-[#D4AF37] transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 overflow-hidden" style={{ padding: "clamp(32px, 5vw, 40px)" }}>
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#146321]/0 via-[#146321]/0 to-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      {/* Icon with Animated Background */}
                      <div className="relative w-20 h-20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#146321] to-[#1a7a2a] rounded-2xl group-hover:rotate-6 transition-transform duration-500"style={{marginBottom: "20px"}} />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] to-[#b8941f] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"style={{marginBottom: "20px"}} />
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Icon size={36} className="text-white group-hover:scale-110 transition-transform duration-500" strokeWidth={2.5}style={{marginBottom: "20px"}} />
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-[#1E293B] mb-4 group-hover:text-[#146321] transition-colors duration-300 font-[family-name:var(--font-heading)]" style={{marginBottom: "10px"}}>
                        {value.title}
                      </h3>
                      
                      <p className="text-[#475569] leading-relaxed text-sm group-hover:text-[#1E293B] transition-colors duration-300">
                        {value.desc}
                      </p>
                    </div>

                    {/* Decorative Corner Element */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#146321] via-[#D4AF37] to-[#146321] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          MEET OUR TEAM
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#146321]" style={{ paddingTop: "clamp(100px, 15vh, 160px)", paddingBottom: "clamp(100px, 15vh, 160px)" }}>
        <div className="section-container">
          <div className="flex flex-col items-center opacity-0 translate-y-10 transition-all duration-1000" ref={addToRefs} style={{ marginBottom: "clamp(60px, 10vh, 100px)" }}>
            <h2 className="font-bold font-[family-name:var(--font-heading)] text-white text-center w-full" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", marginBottom: "clamp(20px, 4vh, 32px)", lineHeight: 1.1 }}>
              <span className="text-white">Meet Our</span> <span className="text-[#D4AF37]">Team</span>
            </h2>
          </div>

          <div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-6xl mx-auto"
            onMouseEnter={() => setActiveCard(null)}
          >
            {[
              { name: "John West", role: "CEO & FOUNDER", image: "/about/team.jpg" },
              { name: "Sarah Palm", role: "HEAD OF BIM", image: "/about/team.jpg" },
              { name: "David Construction", role: "LEAD VDC STRATEGY", image: "/about/team.jpg" },
              { name: "Jessica Solutions", role: "CHIEF COORDINATION OFFICER", image: "/about/team.jpg" },
            ].map((member, i) => (
              <div
                key={i}
                ref={addToRefs}
                className="opacity-0 translate-y-10 transition-all duration-700"
                style={{ transitionDelay: `${i * 100}ms` }}
                onMouseEnter={() => setActiveCard(i)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div 
                  className="relative rounded-3xl overflow-hidden h-[380px] cursor-pointer transition-all duration-500"
                  style={{
                    transform: activeCard === i ? 'scale(1.08) translateY(-10px)' : activeCard !== null ? 'scale(0.95)' : 'scale(1)',
                    filter: activeCard !== null && activeCard !== i ? 'blur(4px)' : 'blur(0px)',
                    zIndex: activeCard === i ? 10 : 1,
                  }}
                >
                  <div className="absolute inset-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-all duration-500"
                      style={{
                        filter: activeCard === i ? 'grayscale(0%)' : 'grayscale(100%)',
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <h3 className="text-white font-bold text-lg mb-1 font-[family-name:var(--font-heading)]">
                      {member.name}
                    </h3>
                    <p className="text-[#D4AF37] text-xs font-semibold tracking-wider">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          TIMELINE
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#F8FAF8]" style={{ paddingTop: "clamp(80px, 12vh, 140px)", paddingBottom: "clamp(80px, 12vh, 140px)" }}>
        <div className="section-container">
          <div className="flex flex-col items-center opacity-0 translate-y-10 transition-all duration-1000" ref={addToRefs} style={{ marginBottom: "clamp(48px, 8vh, 80px)" }}>
            <span className="inline-block text-xs font-bold text-[#146321] tracking-[0.18em] uppercase mb-4">
              Our Journey
            </span>
            <h2 className="font-bold font-[family-name:var(--font-heading)] text-[#1E293B] text-center w-full" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "clamp(16px, 3vh, 24px)" }}>
              Pioneering the Digital <span className="text-[#146321]">Construction Era</span>
            </h2>
            <p className="text-[#475569] max-w-3xl text-center px-4 w-full" style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
              From a small BIM consultancy to a global leader in construction technology
            </p>
          </div>

          <Timeline />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          EVENTS - Continuous Carousel
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-white overflow-hidden" style={{ paddingTop: "clamp(80px, 12vh, 140px)", paddingBottom: "clamp(80px, 12vh, 140px)" }}>
        <div className="section-container">
          <div className="flex flex-col items-center opacity-0 translate-y-10 transition-all duration-1000" ref={addToRefs} style={{ marginBottom: "clamp(48px, 8vh, 80px)" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#146321]/10 border border-[#146321]/20 mb-4">
              <Calendar size={16} className="text-[#146321]" />
              <span className="text-[#146321] text-sm font-semibold tracking-wide">EVENTS & ACTIVITIES</span>
            </div>
            <h2 className="font-bold font-[family-name:var(--font-heading)] text-[#1E293B] text-center w-full" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "clamp(16px, 3vh, 24px)" }}>
              Our <span className="text-[#146321]">Events</span>
            </h2>
            <p className="text-[#475569] max-w-3xl text-center px-4 w-full" style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
              Join us at industry-leading events and conferences
            </p>
          </div>
        </div>

        {/* Continuous Scrolling Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll-left">
              {/* First set of events */}
              {events.map((event, i) => (
                <div
                  key={`event-1-${i}`}
                  className="flex-shrink-0 w-[350px] bg-white rounded-2xl overflow-hidden shadow-lg border border-[#146321]/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-[200px]">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#1E293B] mb-2 font-[family-name:var(--font-heading)]">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-[#475569] mb-2">
                      <Calendar size={14} className="text-[#146321]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#475569]">
                      <Building2 size={14} className="text-[#146321]" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {events.map((event, i) => (
                <div
                  key={`event-2-${i}`}
                  className="flex-shrink-0 w-[350px] bg-white rounded-2xl overflow-hidden shadow-lg border border-[#146321]/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-[200px]">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#1E293B] mb-2 font-[family-name:var(--font-heading)]">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-[#475569] mb-2">
                      <Calendar size={14} className="text-[#146321]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#475569]">
                      <Building2 size={14} className="text-[#146321]" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          CTA - Premium Call to Action
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-white overflow-hidden" style={{ paddingTop: "clamp(80px, 12vh, 140px)", paddingBottom: "clamp(80px, 12vh, 140px)" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAF8] to-white" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#146321]/5 rounded-full blur-3xl" />
        
        <div className="section-container relative z-10 flex justify-center">
          <div ref={addToRefs} className="opacity-0 translate-y-10 transition-all duration-1000 w-full max-w-4xl flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#146321]/10 border border-[#146321]/20" style={{ marginBottom: "clamp(20px, 4vh, 32px)" }}>
              <Rocket size={16} className="text-[#146321]" />
              <span className="text-[#146321] text-sm font-semibold">Let's Build Together</span>
            </div>
            
            <h2 className="font-bold font-[family-name:var(--font-heading)] text-[#1E293B] w-full" style={{ fontSize: "clamp(2rem, 6vw, 4rem)", marginBottom: "clamp(20px, 4vh, 32px)", lineHeight: 1.1 }}>
              Ready to Transform Your
              <br />
              <span className="text-[#146321]">Construction Project?</span>
            </h2>
            
            <p className="text-[#475569] max-w-2xl leading-relaxed px-4 w-full" style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", marginBottom: "clamp(32px, 5vh, 48px)" }}>
              Partner with us to bring precision, efficiency, and innovation to every stage of your construction journey.
            </p>

            <div className="flex flex-wrap justify-center gap-4 w-full">
              <MagneticButton href="/contact" variant="primary" className="!px-8 !py-4 !text-lg">
                Start Your Project
              </MagneticButton>
              <MagneticButton href="/services" variant="outline" className="!px-8 !py-4 !text-lg">
                Explore Services
              </MagneticButton>
            </div>

            {/* Trust Indicators */}
            <div style={{ marginTop: "clamp(48px, 8vh, 80px)", paddingTop: "clamp(32px, 5vh, 48px)" }} className="border-t border-[#146321]/10 w-full flex justify-center">
              <div className="grid grid-cols-3 gap-6 md:gap-8 lg:gap-10 w-full max-w-2xl">
                {[
                  { label: "Industry Excellence", value: "4+ Years" },
                  { label: "Success Rate", value: "98%" },
                  { label: "Projects Delivered", value: "100+" },
                ].map((item, i) => (
                  <div key={i} className="text-center flex flex-col items-center">
                    <div className="font-bold text-[#146321]" style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", marginBottom: "clamp(4px, 1vh, 8px)" }}>{item.value}</div>
                    <div className="text-[#475569]" style={{ fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)" }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
