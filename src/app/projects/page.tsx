"use client";

import { useState, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ArrowUpRight, Search, Filter } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(Flip);
}

const portfolioCategories = ["All", "Commercial", "Residential", "Hospitality", "Industrial"];

const projects = [
  {
    id: 1,
    title: "Aloft Hotel",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1541976535096-2855219bc942?auto=format&fit=crop&q=80&w=800",
    description: "Full BIM/VDC coordination for a luxury hotel in downtown West Palm Beach.",
    year: "2023",
  },
  {
    id: 2,
    title: "Selene Oceanfront",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    description: "High-precision architecture modeling for prestigious oceanfront residences.",
    year: "2024",
  },
  {
    id: 3,
    title: "North Logistics Hub",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    description: "MEP coordination and warehouse prefabrication strategy.",
    year: "2022",
  },
  {
    id: 4,
    title: "Emerald Office Plaza",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    description: "Award-winning commercial glass structure with advanced HVAC integration.",
    year: "2023",
  },
  {
    id: 5,
    title: "The Breezeway Suites",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1445013166144-803279147d33?auto=format&fit=crop&q=80&w=800",
    description: "Complete 4D simulation and construction phasing for quick delivery.",
    year: "2023",
  },
  {
    id: 6,
    title: "Azure Residences",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&q=80&w=800",
    description: "Architectural visualization and photorealistic 3D rendering for pre-sales.",
    year: "2024",
  },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const projectsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!projectsRef.current) return;
    const state = Flip.getState(".project-card");
    Flip.from(state, {
      duration: 0.6,
      scale: true,
      ease: "power2.inOut",
      stagger: 0.05,
      absolute: true,
      onEnter: (elements) => gsap.fromTo(elements, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.6 }),
      onLeave: (elements) => gsap.to(elements, { opacity: 0, scale: 0, duration: 0.6 }),
    });
  }, [filter]);

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-[#F8FAF8]" style={{ paddingTop: 'clamp(140px, 18vh, 180px)', paddingBottom: 'clamp(80px, 10vh, 120px)' }}>
      <section style={{ paddingLeft: 'clamp(40px, 8vw, 120px)', paddingRight: 'clamp(40px, 8vw, 120px)', marginBottom: 'clamp(80px, 12vh, 120px)' }}>
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8" style={{ marginBottom: 'clamp(56px, 9vh, 80px)' }}>
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-bold text-[#146321] tracking-[0.18em] uppercase mb-4">
                Our Portfolio
              </span>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 font-[family-name:var(--font-heading)]"
                style={{ lineHeight: 1.1, letterSpacing: "-0.02em" }}
              >
                Featured <span className="text-[#146321]">Projects</span>
              </h1>
              <p className="text-base md:text-lg text-[#475569]" style={{ lineHeight: 1.75, maxWidth: "560px" }}>
                Discover how we leverage technology to solve complex construction
                challenges across various sectors.
              </p>
            </div>

            <div className="flex items-center gap-3 bg-white/60 border border-[rgba(20,99,33,0.1)] rounded-xl p-2 h-fit w-full md:w-auto">
               <div className="p-2 text-[#146321]">
                 <Search size={18} />
               </div>
               <input
                 type="text"
                 placeholder="Search projects..."
                 className="bg-transparent border-none outline-none text-sm font-medium w-full md:w-44 pr-3"
               />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3" style={{ marginBottom: 'clamp(48px, 7vh, 64px)' }}>
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold tracking-tight transition-all duration-300 ${
                  filter === cat
                    ? "bg-[#146321] text-white shadow-lg"
                    : "glass text-[#475569] hover:bg-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div
            ref={projectsRef}
            className="grid sm:grid-cols-2 lg:grid-cols-3"
            style={{ gap: 'clamp(28px, 3.5vw, 40px)' }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                data-flip-id={`project-${project.id}`}
                className={`project-card group relative h-[380px] md:h-[440px] rounded-2xl md:rounded-3xl overflow-hidden glass ${
                  filter !== "All" && project.category !== filter ? "hidden" : "block"
                }`}
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A3B12] via-transparent to-transparent opacity-80" />
                </div>

                <div className="absolute inset-0 z-10 p-6 md:p-8 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                   <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-[#D4AF37] text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                        {project.category}
                      </span>
                      <span className="text-white/60 text-xs font-semibold">{project.year}</span>
                   </div>
                   <h3 className="text-2xl md:text-3xl font-bold !text-white mb-2 font-[family-name:var(--font-heading)]">{project.title}</h3>
                   <p className="text-white/70 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-500">
                     {project.description}
                   </p>
                   <div className="flex items-center gap-2 text-[#D4AF37] font-bold text-sm">
                      View Detail <ArrowUpRight size={16} />
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingLeft: 'clamp(40px, 8vw, 120px)', paddingRight: 'clamp(40px, 8vw, 120px)' }}>
         <div className="glass rounded-2xl md:rounded-3xl relative overflow-hidden text-center" style={{ padding: 'clamp(56px, 9vw, 96px) clamp(40px, 6vw, 72px)' }}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#146321] opacity-5 rounded-full blur-3xl" />
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4 text-[#1E293B]"
              style={{ lineHeight: 1.15 }}
            >
              Have a Vision?
            </h2>
            <p className="text-[#475569] text-sm md:text-base max-w-xl mx-auto mb-8">We have the technology and expertise to bring it to life. Partner with WPCS for your next landmark project.</p>
            <MagneticButton href="/contact">Inquire About a Project</MagneticButton>
         </div>
      </section>
    </div>
  );
}
