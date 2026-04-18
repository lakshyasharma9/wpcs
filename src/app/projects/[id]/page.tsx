"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "@/components/MagneticButton";
import ImageScrollStack from "@/components/ImageScrollStack";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projectsData = [
  {
    id: 1,
    title: "Aventana",
    image: "/projects/aventana.jpeg",
    images: [
      "/projects/Aventana/AVT 02.jpeg",
      "/projects/Aventana/AVT 01.jpeg",
      "/projects/Aventana/AVT 03.jpeg",
      "/projects/Aventana/AVT 04.jpeg",
      "/projects/Aventana/AVT 05.jpeg"
    ],
    address: "19640 Harriet Tubman Highway, Miami 33180",
    type: "Multifamily residential development",
    shortDescription: "Aventana is a planned 16-story multifamily residential tower located in the Ojus area of Miami, strategically positioned near the Brightline Aventura station to support transit-oriented development.",
    fullDescription: "The project is designed to deliver exactly 334 residential units, including 34 units dedicated to workforce housing, within a total building area of 354,238 square feet on a 2.62-acre site. To support the complex integration of these modern urban development trends, West Palm Consultants provided comprehensive Building Information Modeling (BIM) and Virtual Design and Construction (VDC) coordination services. While responsible for managing overall multi-trade coordination, performing rigorous clash detection, and facilitating weekly meetings to keep all trades aligned, West Palm Consultants also has the scope of plumbing 3D modeling. Clash detection was prioritized to resolve conflicts between the building services and structural elements, particularly within the 4-level structured parking garage and the expansive fifth-floor amenity deck.",
    details: {
      "Building Height": "16 stories",
      "Total Residential Units": "334 Units",
      "Parking": "426 spaces (4 floor Parking)",
      "Unit Mix": "34 workforce housing units",
      "Owner / Developer": "Ram Realty Services & Pinnacle Communities",
      "General Contractor": "Kaufman Lynn",
      "Shell Contractor": "KD Construction",
      "Architect": "Baker Barrios Architects",
    },
  },
  {
    id: 2,
    title: "Caretta",
    image: "/projects/caretta.jpg",
    images: [
      "/projects/Caretta/CJB-001.jpg",
      "/projects/Caretta/CJB-002.jpg",
      "/projects/Caretta/CJB-006.jpg",
      "/projects/Caretta/CJB-007.jpg",
      "/projects/Caretta/CJB-008.jpg",
      "/projects/Caretta/CJB-009.jpg",
      "/projects/Caretta/CJB-010.jpg",
      "/projects/Caretta/CJB-011.jpg",
      "/projects/Caretta/CJB-012.jpg",
      "/projects/Caretta/CJB-013.jpg",
      "/projects/Caretta/Footing-01.jpg",
      "/projects/Caretta/Caretta Snap (1).jpg",
      "/projects/Caretta/Caretta Snap (2).jpg",
      "/projects/Caretta/Caretta Snap (3).jpg"
    ],
    address: "1011 U.S. Highway 1, Juno Beach, FL",
    type: "Luxury condo + mixed-use",
    shortDescription: "The Caretta Project is a boutique luxury condominium and mixed-use development designed to bring high-end living and curated commercial space to Juno Beach.",
    fullDescription: "To execute this complex vision, the project utilizes comprehensive Building Information Modeling (BIM) coordination across architectural, structural, and all MEP disciplines. A critical component of the BIM scope for Caretta involves Plumbing, HVAC 3D modeling and the agile management of significant owner-driven design changes introduced mid-project.",
    details: {
      "Building Height": "5 stories",
      "Total Residential Units": "95 units",
      "Parking": "Structured parking",
      "Unit Mix": "2-4 BR, 1,820–5,000+ sq. ft.",
      "Owner / Developer": "JDL Development",
      "General Contractor": "Hedrick Brothers Construction",
    },
  },
  {
    id: 3,
    title: "Selene Oceanfront Residences",
    image: "/projects/selene.jpg",
    images: ["/projects/selene.jpg", "/projects/selene.jpg"],
    address: "151 N Seabreeze Blvd, Fort Lauderdale",
    type: "Luxury oceanfront condominium",
    shortDescription: "Selene is Kolter Urban's flagship Fort Lauderdale beachfront project, designed as twin luxury towers with 194 residences, resort amenities, and panoramic views.",
    fullDescription: "The scope for West Palm includes comprehensive Plumbing 3D modeling along with coordination across all building services to ensure a clash-free and constructible design. We are responsible for preparing detailed sleeve layouts and high-quality shop drawings to support accurate execution on site.",
    details: {
      "Building Height": "26 stories",
      "Total Residential Units": "194 units",
      "Parking": "122 spaces",
      "Unit Mix": "2-4 BR, 1,372–5,183 sq. ft.",
      "Developer": "Kolter Urban",
      "General Contractor": "Coastal Construction",
      "Architect": "Kobi Karp",
    },
  },
  {
    id: 4,
    title: "FB Wynwood",
    image: "/projects/fb-wynwood.jpg",
    images: ["/projects/fb-wynwood.jpg", "/projects/fb-wynwood.jpg"],
    address: "Downtown Miami, FL",
    type: "Luxury condo + mixed-use",
    shortDescription: "FB Wynwood (The Wynhouse) is a Fisher Brothers-led, Suffolk-built, 8-story mixed-use project delivering 308 rental units, retail, and public paseo space.",
    fullDescription: "Our scope includes detailed HVAC 3D modeling along with coordination with all building services to ensure a fully integrated and clash-free design.",
    details: {
      "Building Height": "8 stories",
      "Total Residential Units": "308 units",
      "Parking": "122 spaces",
      "Unit Mix": "Studios, 1 & 2 BRs",
      "Developer": "Fisher Brothers",
      "General Contractor": "Suffolk Construction",
    },
  },
  {
    id: 5,
    title: "Azure Residences",
    image: "/projects/azure.png",
    images: ["/projects/azure.png", "/projects/azure.png"],
    address: "1401 1st Street South, Jacksonville Beach, FL",
    type: "Luxury condominiums",
    shortDescription: "Azure Residences at Jacksonville Beach is a boutique 9-story oceanfront condominium by The Related Group, offering 26 ultra-luxury residences with wellness technology, curated art, and panoramic Atlantic views.",
    fullDescription: "For this project, West Palm Consultants is responsible for upgrading the design models of Plumbing & HVAC received from the design team to ensure full constructability.",
    details: {
      "Building Height": "9 stories",
      "Total Residential Units": "26 units",
      "Parking": "On-site garage",
      "Unit Mix": "2-5 BR, 2,400–6,500 sq. ft.",
      "Developer": "The Related Group",
      "General Contractor": "Craft Construction",
      "Architect": "Arquitectonica",
    },
  },
  {
    id: 6,
    title: "Tower 350",
    image: "/projects/tower-350.jpg",
    images: ["/projects/tower-350.jpg", "/projects/tower-350.jpg"],
    address: "West Palm Beach",
    type: "Multifamily residential development",
    shortDescription: "Tower 350 is a residential development located in West Palm Beach, developed by Hyperion Development Group with Kast Construction serving as the general contractor.",
    fullDescription: "The project involves comprehensive coordination across all MEPF systems, as well as structural, architectural, and civil disciplines.",
    details: {
      "Building Height": "23 stories",
      "Total Residential Units": "457 units",
      "Parking": "628 spaces (6 floors)",
      "Unit Mix": "Studio, 1-3 BRs",
      "Owner / Developer": "Hyperion Development Group",
      "General Contractor": "Kast Construction",
      "Plumbing Contractor": "Wright Brothers",
    },
  },
  {
    id: 7,
    title: "PGA Station",
    image: "/projects/pga.jpg",
    images: ["/projects/pga.jpg", "/projects/pga.jpg"],
    address: "West Palm Beach",
    type: "Multifamily residential development",
    shortDescription: "PGA Station is a multifamily residential development located in West Palm Beach, Florida, featuring a mid-rise building configuration organized around a central courtyard.",
    fullDescription: "The design integrates residential units with a structured parking garage and shared amenity spaces, including a pool deck and outdoor recreational areas.",
    details: {
      "Building Height": "8 stories",
      "Total Residential Units": "396 Units",
      "Parking": "Multi-level structured garage",
      "Unit Mix": "Studio, 1 & 2 BRs",
      "Owner / Developer": "The Richman Group",
      "General Contractor": "Kast Construction",
      "Contractor": "Wright Brothers (HVAC/Plumb)",
    },
  },
  {
    id: 8,
    title: "Aviara East Pompano",
    image: "/projects/aviara.jpg",
    images: ["/projects/aviara.jpg", "/projects/aviara.jpg"],
    address: "Pompano Beach",
    type: "Multifamily residential development",
    shortDescription: "Aviara East Pompano comprises a Residential Tower and a Mixed Use building with multi-level parking solutions in Pompano Beach.",
    fullDescription: "Our scope includes detailed Plumbing and HVAC 3D modeling, along with coordination across all building services.",
    details: {
      "Building Height": "8 stories (Res) / 6 stories (Mixed)",
      "Total Residential Units": "228 Units",
      "Parking": "Structured and surface",
      "Unit Mix": "Studio, 1 & 2 BRs",
      "Owner / Developer": "MAG Development",
      "Contractor": "Wright Brothers",
    },
  },
  {
    id: 9,
    title: "42 Pine",
    image: "/projects/42-pine.jpg",
    images: ["/projects/42-pine.jpg", "/projects/42-pine.jpg"],
    address: "340 West 42nd Street, Miami Beach, FL",
    type: "Residential Condominium",
    shortDescription: "Development of a luxury residential condominium featuring ~50 units with modern amenities, parking, and premium finishes.",
    fullDescription: "While White Collar Plumbing is responsible for plumbing execution, the scope for West Palm Consultants includes the development of a fully coordinated plumbing BIM model.",
    details: {
      "Building Height": "8 Floors",
      "Total Residential Units": "50 units",
      "Parking": "Valet + 1 space/unit",
      "Unit Mix": "1-3 BR + Penthouses",
      "Developer": "Boymelgreen",
      "General Contractor": "Jacob Companies",
      "Architect": "Arquitectonica",
    },
  },
  {
    id: 10,
    title: "Davie Town Hall",
    image: "/projects/davie-town-hall.jpeg",
    images: ["/projects/davie-town-hall.jpeg", "/projects/davie-town-hall.jpeg"],
    address: "6591 Orange Drive, Davie, FL 33314",
    type: "Municipal / Government Building",
    shortDescription: "Development of a new 4-story municipal Town Hall building (~80,000+ sq ft) including administrative offices and public facilities.",
    fullDescription: "Scope includes site work, parking, infrastructure upgrades, and full design-build construction delivery.",
    details: {
      "Building Height": "4 Floors",
      "Total Area": "~80,000+ sq ft",
      "Parking": "Surface parking lot",
      "Developer": "Town of Davie",
      "Architect": "Song + Associates",
      "General Contractor": "Kaufman Lynn Construction",
      "Civil Consultant": "WGI Engineering Firm",
    },
  },
];

const AnimatedNumber = ({ value }: { value: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!nodeRef.current) return;
    const match = value.match(/(\d+)(.*)/);
    if (match) {
      const [, numStr, rest] = match;
      const final = parseInt(numStr, 10);
      const obj = { val: 0 };
      gsap.to(obj, {
        val: final,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: { trigger: nodeRef.current, start: "top 90%" },
        onUpdate: () => {
          if (nodeRef.current) nodeRef.current.innerText = Math.round(obj.val) + rest;
        },
      });
    }
  }, [value]);
  return <span ref={nodeRef}>{value}</span>;
};

const CONTAINER = "w-full max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20";

// Shortened label map for the hero stats row
const SHORT_LABEL: Record<string, string> = {
  "Building Height": "Height",
  "Total Residential Units": "Units",
  "Total Area": "Area",
  "Parking": "Parking",
  "Unit Mix": "Unit Mix",
};

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = parseInt(params.id as string);
  const project = projectsData.find((p) => p.id === projectId);
  const relatedProjects = projectsData.filter((p) => p.id !== projectId);

  const heroRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLImageElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;

    // Parallax on hero image
    if (heroImgRef.current) {
      gsap.to(heroImgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    
    gsap.fromTo(
      ".hero-anim",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: "power3.out", delay: 0.3 }
    );

    
    mainRef.current?.querySelectorAll(".reveal-up").forEach((el) => {
      gsap.fromTo(
        el,
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } }
      );
    });

    // Spec cards stagger
    const specs = mainRef.current?.querySelectorAll(".spec-card");
    if (specs?.length) {
      gsap.fromTo(
        specs,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55, stagger: 0.07, ease: "power2.out", scrollTrigger: { trigger: specs[0], start: "top 88%" } }
      );
    }

    // Related cards
    const cards = mainRef.current?.querySelectorAll(".related-card");
    if (cards?.length) {
      gsap.fromTo(
        cards,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, stagger: 0.12, ease: "power3.out", scrollTrigger: { trigger: cards[0].parentElement, start: "top 88%" } }
      );
    }

    // Gallery stacked animation - fade in next images on scroll
    if (galleryRef.current && project.images && project.images.length > 1) {
      const container = galleryRef.current;
      const items = container.querySelectorAll(".gallery-stack-item");
      
      items.forEach((item, index) => {
        if (index === 0) return; // Skip first image
        
        const element = item as HTMLElement;
        
        // Calculate scroll position for each image
        const scrollStart = (index - 1) * window.innerHeight;
        const scrollEnd = index * window.innerHeight;
        
        gsap.fromTo(
          element,
          {
            opacity: 0,
            scale: 0.95,
            zIndex: 1
          },
          {
            opacity: 1,
            scale: 1,
            zIndex: 10,
            scrollTrigger: {
              trigger: container.parentElement,
              start: `top+=${scrollStart} top`,
              end: `top+=${scrollEnd} top`,
              scrub: 1,
              onEnter: () => {
                // Fade out previous image
                if (index > 0) {
                  const prevItem = items[index - 1] as HTMLElement;
                  gsap.to(prevItem, { opacity: 0, scale: 1.05, duration: 0.5 });
                }
              },
              onLeaveBack: () => {
                // Fade in previous image when scrolling back
                if (index > 0) {
                  const prevItem = items[index - 1] as HTMLElement;
                  gsap.to(prevItem, { opacity: 1, scale: 1, duration: 0.5 });
                }
              }
            }
          }
        );
      });
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F7F5]">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#146321] mb-4">Project not found</h1>
          <button onClick={() => router.push("/projects")} className="flex items-center gap-2 mx-auto text-[#146321] font-semibold hover:underline">
            <ArrowLeft size={18} /> Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const allDetails = Object.entries(project.details || {});
  const statsDetails = allDetails.slice(0, 4);
  const teamDetails = allDetails.slice(4);

  return (
    <div className="min-h-screen bg-[#F5F7F5]" ref={mainRef}>

      {/* HERO  */}
      <section
        ref={heroRef}
        className="relative w-full overflow-hidden"
        style={{ height: "100svh", minHeight: 650, maxHeight: 950 }}
      >
       
        <div className="absolute inset-0">
          <Image
            ref={heroImgRef}
            src={project.image}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover"
            style={{ transformOrigin: "center top" }}
            priority
          />
        </div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(8,24,10,0.95) 0%, rgba(8,24,10,0.65) 28%, rgba(8,24,10,0.20) 55%, transparent 100%)",
          }}
        />

        
        <div className="absolute top-0 left-0 right-0 z-20 pt-8 md:pt-10">
          <div className={CONTAINER}>
            <button
              onClick={() => router.push("/projects")}
              className="group flex items-center gap-2 text-white/55 hover:text-white transition-colors duration-300 text-[10px] font-bold tracking-[0.2em] uppercase"
            >
              <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Projects
            </button>
          </div>
        </div>

        <div
          className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
          style={{ paddingBottom: "clamp(40px, 6vh, 80px)" }}
        >
          <div className="pointer-events-auto" style={{ marginLeft: "clamp(40px, 5vw, 80px)" }}>

            {/* Project type */}
            <p
              className="hero-anim font-bold text-[#D4AF37] uppercase tracking-[0.28em]"
              style={{ fontSize: "10px", marginBottom: "clamp(18px, 2.5vh, 28px)" }}
            >
              [ {project.type} ]
            </p>

            {/* Title */}
            <h1
              className="hero-anim font-[family-name:var(--font-heading)]"
              style={{
                fontSize: "clamp(3.5rem, 8vw, 7rem)",
                lineHeight: 1.04,
                fontWeight: 400,
                letterSpacing: "-0.01em",
                marginBottom: "clamp(20px, 3vh, 32px)",
                color: "#ffffff",
              }}
            >
              {project.title}
            </h1>

            
            <div
              className="hero-anim"
              style={{ width: "clamp(120px, 20vw, 280px)", height: "1.5px", backgroundColor: "#D4AF37", marginBottom: "clamp(20px, 3vh, 32px)" }}
            />

            {/* Stats row — inline with yellow labels */}
            {statsDetails.length > 0 && (
              <div className="hero-anim flex flex-row flex-wrap items-center gap-x-8 md:gap-x-12 lg:gap-x-16 gap-y-4">
                {statsDetails.map(([label, val], i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span
                      className="text-[#D4AF37] font-bold uppercase tracking-[0.15em]"
                      style={{ fontSize: "9px" }}
                    >
                      {SHORT_LABEL[label] ?? label}:
                    </span>
                    <span
                      className="text-white font-medium"
                      style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.15rem)", letterSpacing: "0.01em" }}
                    >
                      <AnimatedNumber value={val} />
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/*  OVERVIEW  */}
      <section style={{ backgroundColor: "#F5F1E8" }}>
        <div style={{ paddingTop: "clamp(80px, 10vh, 120px)", paddingBottom: "clamp(80px, 10vh, 120px)", paddingLeft: "clamp(40px, 6vw, 100px)", paddingRight: "clamp(40px, 6vw, 100px)" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              <div className="lg:col-span-4 reveal-up">
                <p 
                  className="font-bold uppercase tracking-[0.25em] mb-6"
                  style={{ fontSize: "10px", color: "#D4AF37", letterSpacing: "0.25em" }}
                >
                  [ OVERVIEW ]
                </p>
                <h2
                  className="font-[family-name:var(--font-heading)] mb-8"
                  style={{ 
                    fontSize: "clamp(2.5rem, 4vw, 3.5rem)", 
                    lineHeight: 1.1,
                    fontWeight: 400,
                    color: "#1a1a1a",
                    letterSpacing: "-0.01em"
                  }}
                >
                  Project Overview
                </h2>
                <div style={{ width: "80px", height: "3px", backgroundColor: "#D4AF37" }} />
              </div>
              <div className="lg:col-span-8 reveal-up">
                <p 
                  className="font-semibold mb-6"
                  style={{ 
                    fontSize: "clamp(1.15rem, 2vw, 1.35rem)", 
                    lineHeight: 1.6,
                    color: "#1a1a1a",
                    fontWeight: 600
                  }}
                >
                  {project.shortDescription}
                </p>
                <div style={{ width: "80px", height: "3px", backgroundColor: "#D4AF37", marginBottom: "clamp(24px, 3vh, 32px)" }} />
                {project.fullDescription && (
                  <p 
                    style={{ 
                      fontSize: "clamp(1rem, 1.5vw, 1.1rem)", 
                      lineHeight: 1.8,
                      color: "#666666",
                      fontWeight: 400
                    }}
                  >
                    {project.fullDescription}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  SPECIFICATIONS  */}
      {allDetails.length > 0 && (
        <section style={{ backgroundColor: "#0d3d1a" }}>
          <div style={{ paddingTop: "clamp(100px, 12vh, 140px)", paddingBottom: "clamp(100px, 12vh, 140px)", paddingLeft: "clamp(40px, 6vw, 100px)", paddingRight: "clamp(40px, 6vw, 100px)" }}>
            <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
              
              {/* Header */}
              <div className="mb-20 reveal-up">
                <p 
                  className="font-bold uppercase mb-8"
                  style={{ fontSize: "10px", color: "#D4AF37", letterSpacing: "0.25em", marginBottom: "20px" }}
                >
                  [ PROJECT DETAILS ]
                </p>
                <h2
                  className="font-[family-name:var(--font-heading)]"
                  style={{ 
                    fontSize: "clamp(3rem, 5vw, 4.5rem)", 
                    lineHeight: 1.1,
                    fontWeight: 400,
                    color: "#ffffff",
                    fontStyle: "italic",
                    letterSpacing: "-0.01em",
                    marginBottom : "40px"
                  }}
                >
                  Specifications
                </h2>
              </div>

              {/* Stats Cards - 4 in a row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                {statsDetails.map(([label, val], i) => (
                  <div
                    key={i}
                    className="spec-card"
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      borderRadius: "12px",
                      padding: "clamp(32px, 5vh, 48px) clamp(28px, 4vw, 40px)"
                    }}
                  >
                    <dt 
                      className="font-bold uppercase"
                      style={{ 
                        fontSize: "10px", 
                        color: "#D4AF37", 
                        letterSpacing: "0.15em",
                        marginBottom: "clamp(16px, 2vh, 24px)"
                      }}
                    >
                      {label}
                    </dt>
                    <dd 
                      style={{ 
                        fontSize: "clamp(1.75rem, 3vw, 2.5rem)", 
                        lineHeight: 1.2,
                        color: "#ffffff",
                        fontWeight: 400
                      }}
                    >
                      <AnimatedNumber value={val} />
                    </dd>
                  </div>
                ))}
              </div>

              
              {teamDetails.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8" >
                  {teamDetails.map(([label, val], i) => (
                    <div
                      key={i}
                      className="spec-card"
                      style={{
                        backgroundColor: "transparent",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        borderRadius: "12px",
                        padding: "clamp(32px, 5vh, 48px) clamp(28px, 4vw, 40px)"
                      }}
                    >
                      <dt 
                        className="font-bold uppercase"
                        style={{ 
                          fontSize: "10px", 
                          color: "#D4AF37", 
                          letterSpacing: "0.15em",
                          marginBottom: "clamp(16px, 2vh, 24px)"
                        }}
                      >
                        {label}
                      </dt>
                      <dd 
                        style={{ 
                          fontSize: "clamp(1.15rem, 1.8vw, 1.5rem)", 
                          lineHeight: 1.4,
                          color: "#ffffff",
                          fontWeight: 400
                        }}
                      >
                        {val}
                      </dd>
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>
        </section>
      )}

      {/*  GALLERY  */}
      {project.images && project.images.length > 0 && (
        <section style={{ backgroundColor: "#F5F1E8" }}>
          <div style={{ paddingTop: "clamp(80px, 10vh, 120px)", paddingBottom: "clamp(80px, 10vh, 120px)", paddingLeft: "clamp(40px, 6vw, 100px)", paddingRight: "clamp(40px, 6vw, 100px)" }}>
            <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
              
              {/* Header */}
              <div className="mb-16 reveal-up">
                <p 
                  className="font-bold uppercase mb-6"
                  style={{ fontSize: "10px", color: "#D4AF37", letterSpacing: "0.25em" }}
                >
                  [ VISUAL ]
                </p>
                <h2
                  className="font-[family-name:var(--font-heading)]"
                  style={{ 
                    fontSize: "clamp(2.5rem, 4vw, 3.5rem)", 
                    lineHeight: 1.1,
                    fontWeight: 400,
                    color: "#1a1a1a",
                    letterSpacing: "-0.01em",
                    marginBottom: "clamp(20px, 3vh, 32px)"
                  }}
                >
                  Project Gallery
                </h2>
              </div>

              {/* Stacked Gallery with Scroll Animation */}
              <ImageScrollStack 
                images={project.images} 
                projectTitle={project.title}
                itemDistance={100}
                itemStackDistance={30}
                stackPosition="0%"
                scaleEndPosition="0%"
                baseScale={0.85}
                itemScale={0.03}
              />

            </div>
          </div>
        </section>
      )}

      {/*  RELATED PROJECTS  */}
      {relatedProjects.length > 0 && (
        <section style={{ backgroundColor: "#0d1f0d" }}>
          <div style={{ paddingTop: "clamp(80px, 10vh, 120px)", paddingBottom: 0, paddingLeft: "clamp(40px, 6vw, 100px)", paddingRight: "clamp(40px, 6vw, 100px)" }}>
            <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-16 reveal-up" style={{ marginBottom: "clamp(32px, 4vh, 64px)" }}>
                <div>
                  <p 
                    className="font-bold uppercase mb-6"
                    style={{ fontSize: "10px", color: "#D4AF37", letterSpacing: "0.25em" }}
                  >
                    [ RELATED WORKS ]
                  </p>
                  <h2
                    className="font-[family-name:var(--font-heading)]"
                    style={{ 
                      fontSize: "clamp(2.5rem, 4vw, 3.5rem)", 
                      lineHeight: 1.1,
                      fontWeight: 400,
                      color: "#ffffff",
                      letterSpacing: "-0.01em",
                      marginBottom: "clamp(50px, 3vh, 32px)"
                    }}
                  >
                    Related Projects
                  </h2>
                </div>
                <div className="sm:self-auto" style={{ marginTop: "-40px" }}>
                  <MagneticButton href="/projects" variant="gold">VIEW ALL WORKS</MagneticButton>
                </div>
              </div>
            </div>
          </div>
          
          {/* Continuous Scrolling Carousel */}
          <div className="relative" style={{ paddingBottom: "clamp(80px, 10vh, 120px)" }}>
            <div className="overflow-hidden">
              <div className="flex gap-6" style={{ width: 'max-content', animation: 'scroll-seamless 50s linear infinite' }}>
                {/* Triple the projects for seamless infinite loop */}
                {[...relatedProjects, ...relatedProjects, ...relatedProjects].map((rp, idx) => (
                  <article
                    key={`project-${idx}`}
                    className="related-card group cursor-pointer overflow-hidden transition-all duration-300 flex flex-col flex-shrink-0"
                    style={{
                      width: "380px",
                      backgroundColor: "transparent",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      borderRadius: "12px"
                    }}
                    onClick={() => { router.push(`/projects/${rp.id}`); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  >
                    <div className="relative w-full overflow-hidden" style={{ height: 280 }}>
                      <Image
                        src={rp.image}
                        alt={rp.title}
                        fill
                        sizes="380px"
                        loading="lazy"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.07]"
                      />
                      <span 
                        className="absolute top-4 left-4 text-white font-bold tracking-widest uppercase"
                        style={{
                          backgroundColor: "rgba(212, 175, 55, 0.9)",
                          fontSize: "9px",
                          padding: "6px 12px",
                          borderRadius: "4px"
                        }}
                      >
                        {rp.type}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-1 gap-3">
                      <h3 
                        className="font-bold font-[family-name:var(--font-heading)] group-hover:text-[#D4AF37] transition-colors duration-250 leading-snug"
                        style={{ fontSize: "1.35rem", color: "#ffffff" }}
                      >
                        {rp.title}
                      </h3>
                      <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                        {rp.address}
                      </p>
                      <div 
                        className="flex items-center gap-1 font-bold tracking-widest uppercase mt-2 group-hover:gap-2 transition-all duration-250"
                        style={{ color: "#D4AF37", fontSize: "10px" }}
                      >
                        VIEW PROJECT <ArrowUpRight size={15} />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* HAVE A VISION */}
      <section style={{ backgroundColor: "#F5F1E8" }}>
        <div style={{ paddingTop: "clamp(100px, 15vh, 160px)", paddingBottom: "clamp(100px, 15vh, 160px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center", paddingLeft: "clamp(24px, 5vw, 60px)", paddingRight: "clamp(24px, 5vw, 60px)" }}>
            <div className="reveal-up">
              {/* Label */}
              <p 
                className="font-bold uppercase mb-10"
                style={{ 
                  fontSize: "10px", 
                  color: "#D4AF37", 
                  letterSpacing: "0.3em",
                  marginBottom: "clamp(40px, 6vh, 60px)"
                }}
              >
                [ LET'S BUILD TOGETHER ]
              </p>
              
              {/* Heading */}
              <h2
                className="font-[family-name:var(--font-heading)] mb-12"
                style={{ 
                  fontSize: "clamp(3rem, 6vw, 5rem)", 
                  lineHeight: 1.1,
                  fontWeight: 400,
                  color: "#0d1f0d",
                  letterSpacing: "-0.01em",
                  marginBottom: "clamp(40px, 6vh, 60px)"
                }}
              >
                Have a Vision?
              </h2>
              
              {/* Description */}
              <p 
                style={{ 
                  fontSize: "clamp(1.1rem, 2vw, 1.35rem)", 
                  lineHeight: 1.7,
                  color: "#0d1f0d",
                  maxWidth: "900px",
                  margin: "0 auto",
                  marginBottom: "clamp(70px, 8vh, 80px)",
                  textAlign: "center"
                }}
              >
                Our team blends advanced construction technology with decade-spanning expertise to bring complex architectural visions to life. Let's discuss your next landmark.
              </p>
              
              {/* CTA Button */}
              <div className="flex justify-center">
                <MagneticButton 
                  href="/contact" 
                  variant="primary"
                  style={{
                    padding: "18px 48px",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase"
                  }}
                >
                  INQUIRE ABOUT A PROJECT
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}