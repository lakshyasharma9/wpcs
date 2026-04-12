"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "@/components/MagneticButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projectsData = [
  {
    id: 1,
    title: "Aventana",
    image: "/projects/aventana.jpeg",
    images: ["/projects/aventana.jpeg", "/projects/aventana.jpeg"],
    address: "19640 Harriet Tubman Highway, Miami 33180",
    type: "Multifamily residential development",
    shortDescription: "Aventana is a planned 16-story multifamily residential tower located in the Ojus area of Miami, strategically positioned near the Brightline Aventura station to support transit-oriented development.",
    fullDescription: "The project is designed to deliver exactly 334 residential units, including 34 units dedicated to workforce housing, within a total building area of 354,238 square feet on a 2.62-acre site. To support the complex integration of these modern urban development trends, West Palm Consultants provided comprehensive Building Information Modeling (BIM) and Virtual Design and Construction (VDC) coordination services. While responsible for managing overall multi-trade coordination, performing rigorous clash detection, and facilitating weekly meetings to keep all trades aligned, West Palm Consultants also has the scope of plumbing 3D modeling. Clash detection was prioritized to resolve conflicts between the building services and structural elements, particularly within the 4-level structured parking garage and the expansive fifth-floor amenity deck, which features complex routing requirements for spaces like the swimming pool, fitness center, co-working spaces, and dining areas. This coordinated approach guarantees proper system routing, minimizes field conflicts during construction, and ensures the efficient delivery of this transit-oriented project.",
    details: {
      "Building Height": "16 stories",
      "Total Residential Units": "334 Units",
      "Parking": "426 spaces (4 floor Parking)",
      "Unit Mix": "34 workforce housing units",
      "Owner / Developer": "Ram Realty Services & Pinnacle Communities",
      "General Contractor": "Kaufman Lynn",
      "Shell Contractor": "KD Construction",
      "Architect": "Baker Barrios Architects"
    }
  },
  {
    id: 2,
    title: "Caretta",
    image: "/projects/caretta.jpg",
    images: ["/projects/caretta.jpg", "/projects/caretta.jpg"],
    address: "1011 U.S. Highway 1, Juno Beach, FL",
    type: "Luxury condo + mixed-use",
    shortDescription: "The Caretta Project is a boutique luxury condominium and mixed-use development designed to bring high-end living and curated commercial space to Juno Beach.",
    fullDescription: "To execute this complex vision, the project utilizes comprehensive Building Information Modeling (BIM) coordination across architectural, structural, and all MEP disciplines. A critical component of the BIM scope for Caretta involves Plumbing, HVAC 3D modeling and the agile management of significant owner-driven design changes introduced mid-project. The coordination team is responsible for rapidly adapting the 3D models to these shifting requirements, performing ongoing clash detection, and dynamically rerouting building services to ensure new design elements are integrated seamlessly without causing delays to field execution.",
    details: {
      "Building Height": "5 stories",
      "Total Residential Units": "95 units",
      "Parking": "Structured parking",
      "Unit Mix": "2-4 BR, 1,820–5,000+ sq. ft.",
      "Owner / Developer": "JDL Development",
      "General Contractor": "Hedrick Brothers Construction"
    }
  },
  {
    id: 3,
    title: "Selene Oceanfront Residences",
    image: "/projects/selene.jpg",
    images: ["/projects/selene.jpg", "/projects/selene.jpg"],
    address: "151 N Seabreeze Blvd, Fort Lauderdale",
    type: "Luxury oceanfront condominium",
    shortDescription: "Selene is Kolter Urban’s flagship Fort Lauderdale beachfront project, designed as twin luxury towers with 194 residences, resort amenities, and panoramic views.",
    fullDescription: "The scope for West Palm includes comprehensive Plumbing 3D modeling along with coordination across all building services to ensure a clash-free and constructible design. We are responsible for preparing detailed sleeve layouts and high-quality shop drawings to support accurate execution on site. Our team actively participates in weekly coordination meetings to align with all stakeholders and ensure smooth project progress. Additionally, we deliver precise as-built drawings reflecting the final installed conditions.",
    details: {
      "Building Height": "26 stories",
      "Total Residential Units": "194 units",
      "Parking": "122 spaces",
      "Unit Mix": "2-4 BR, 1,372–5,183 sq. ft.",
      "Developer": "Kolter Urban",
      "General Contractor": "Coastal Construction",
      "Architect": "Kobi Karp"
    }
  },
  {
    id: 4,
    title: "FB Wynwood",
    image: "/projects/fb-wynwood.jpg",
    images: ["/projects/fb-wynwood.jpg", "/projects/fb-wynwood.jpg"],
    address: "Downtown Miami, FL",
    type: "Luxury condo + mixed-use",
    shortDescription: "FB Wynwood (The Wynhouse) is a Fisher Brothers-led, Suffolk-built, 8-story mixed-use project delivering 308 rental units, retail, and public paseo space.",
    fullDescription: "Our scope includes detailed HVAC 3D modeling along with coordination with all building services to ensure a fully integrated and clash-free design. We have developed comprehensive unit plans, piping layouts, and reflected ceiling plans (RCPs) to support accurate installation and execution on site. Our deliverables also include precise sleeve layouts for both wall and floor penetrations, along with coordinated louver openings to meet ventilation requirements. Special attention has been given to heavy equipment installations, including DOAS units on the roof, ensuring proper placement, access, and coordination with structural and architectural elements. Additionally, we have provided well-planned layouts for condensing units (CUs) and their supporting stands on the roof to ensure stability, serviceability, and compliance with project requirements.",
    details: {
      "Building Height": "8 stories",
      "Total Residential Units": "308 units",
      "Parking": "122 spaces",
      "Unit Mix": "Studios, 1 & 2 BRs",
      "Developer": "Fisher Brothers",
      "General Contractor": "Suffolk Construction"
    }
  },
  {
    id: 5,
    title: "Azure Residences",
    image: "/projects/azure.png",
    images: ["/projects/azure.png", "/projects/azure.png"],
    address: "1401 1st Street South, Jacksonville Beach, FL",
    type: "Luxury condominiums",
    shortDescription: "Azure Residences at Jacksonville Beach is a boutique 9-story oceanfront condominium by The Related Group, offering 26 ultra-luxury residences with wellness technology, curated art, and panoramic Atlantic views.",
    fullDescription: "For this project, West Palm Consultants is responsible for upgrading the design models of Plumbing & HVAC received from the design team to ensure full constructability. The scope of work also includes comprehensive multi-trade coordination, participating in weekly coordination meetings with the General Contractor (GC), and managing the preparation of RFIs (Requests for Information) across all trades. We are also responsible for preparing detailed sleeve layouts and high-quality shop drawings to support accurate execution on site. We also delivered precise as-built drawings reflecting the final installed conditions.",
    details: {
      "Building Height": "9 stories",
      "Total Residential Units": "26 units",
      "Parking": "On-site garage",
      "Unit Mix": "2-5 BR, 2,400–6,500 sq. ft.",
      "Developer": "The Related Group",
      "General Contractor": "Craft Construction",
      "Architect": "Arquitectonica"
    }
  },
  {
    id: 6,
    title: "Tower 350",
    image: "/projects/tower-350.jpg",
    images: ["/projects/tower-350.jpg", "/projects/tower-350.jpg"],
    address: "West Palm Beach",
    type: "Multifamily residential development",
    shortDescription: "Tower 350 is a residential development located in West Palm Beach, developed by Hyperion Development Group with Kast Construction serving as the general contractor.",
    fullDescription: "The project involves comprehensive coordination across all MEPF systems, as well as structural, architectural, and civil disciplines. While Wright Brothers is responsible for plumbing execution, the scope for West Palm Consultants includes the development of a fully coordinated plumbing BIM model. This encompasses the detailed modelling of plumbing systems covering underground sanitary and storm networks, overhead sanitary, water supply, condensate and pan drains, gas piping, irrigation systems, and storm/overflow drainage integrated with mechanical, electrical, civil, structural, and architectural models. The overarching BIM process is aimed at ensuring accurate system routing across all trades, facilitating seamless interdisciplinary coordination, and producing construction-ready models with sleeve and shop drawings to support efficient installation and minimize conflicts during field execution.",
    details: {
      "Building Height": "23 stories",
      "Total Residential Units": "457 units",
      "Parking": "628 spaces (6 floors)",
      "Unit Mix": "Studio, 1-3 BRs",
      "Owner / Developer": "Hyperion Development Group",
      "General Contractor": "Kast Construction",
      "Plumbing Contractor": "Wright Brothers"
    }
  },
  {
    id: 7,
    title: "PGA Station",
    image: "/projects/pga.jpg",
    images: ["/projects/pga.jpg", "/projects/pga.jpg"],
    address: "West Palm Beach",
    type: "Multifamily residential development",
    shortDescription: "PGA Station is a multifamily residential development located in West Palm Beach, Florida, featuring a mid-rise building configuration organized around a central courtyard.",
    fullDescription: "The design integrates residential units with a structured parking garage and shared amenity spaces, including a pool deck and outdoor recreational areas. The architectural layout reflects contemporary urban housing trends, emphasizing efficient unit planning, accessibility, and community-focused open spaces. Our scope includes Plumbing and HVAC 3D modeling, along with coordination across all building services to ensure a clash-free and constructible design. We prepare detailed sleeve layouts for wall and floor penetrations, along with high-quality shop drawings to support smooth and accurate on-site execution. We have participated in weekly coordination meetings and submitted accurate as-built drawings reflecting final site conditions.",
    details: {
      "Building Height": "8 stories",
      "Total Residential Units": "396 Units",
      "Parking": "Multi-level structured garage",
      "Unit Mix": "Studio, 1 & 2 BRs",
      "Owner / Developer": "The Richman Group",
      "General Contractor": "Kast Construction",
      "Contractor": "Wright Brothers (HVAC/Plumb)"
    }
  },
  {
    id: 8,
    title: "Aviara East Pompano",
    image: "/projects/aviara.jpg",
    images: ["/projects/aviara.jpg", "/projects/aviara.jpg"],
    address: "Pompano Beach",
    type: "Multifamily residential development",
    shortDescription: "Aviara East Pompano comprises a Residential Tower and a Mixed Use building with multi-level parking solutions in Pompano Beach.",
    fullDescription: "Our scope includes detailed Plumbing and HVAC 3D modeling, along with coordination across all building services to ensure a fully integrated, clash-free, and constructible design. We work closely with architectural, structural, and MEP disciplines to streamline routing and optimize system layouts. This process is focused on identifying and resolving clashes between building services and structural components such as beams, columns, and stud rails, as well as conflicts with architectural elements including ceiling spaces. The coordinated model ensures proper system integration and supports efficient routing of all building services. We prepare coordinated sleeve layouts for both wall and floor penetrations, ensuring accuracy and alignment with all services. In addition, we develop clear and precise shop drawings that support efficient on-site execution and help minimize installation conflicts.",
    details: {
      "Building Height": "8 stories (Res) / 6 stories (Mixed)",
      "Total Residential Units": "228 Units",
      "Parking": "Structured and surface",
      "Unit Mix": "Studio, 1 & 2 BRs",
      "Owner / Developer": "MAG Development",
      "Contractor": "Wright Brothers"
    }
  },
  {
    id: 9,
    title: "42 Pine",
    image: "/projects/42-pine.jpg",
    images: ["/projects/42-pine.jpg", "/projects/42-pine.jpg"],
    address: "340 West 42nd Street, Miami Beach, FL",
    type: "Residential Condominium",
    shortDescription: "Development of a luxury residential condominium featuring ~50 units with modern amenities, parking, and premium finishes.",
    fullDescription: "While White Collar Plumbing is responsible for plumbing execution, the scope for West Palm Consultants includes the development of a fully coordinated plumbing BIM model. The overarching BIM process is aimed at ensuring accurate system routing across all trades, facilitating seamless interdisciplinary coordination, and producing construction-ready models with sleeve and shop drawings to support efficient installation and minimize conflicts during field execution.",
    details: {
      "Building Height": "8 Floors",
      "Total Residential Units": "50 units",
      "Parking": "Valet + 1 space/unit",
      "Unit Mix": "1-3 BR + Penthouses",
      "Developer": "Boymelgreen",
      "General Contractor": "Jacob Companies",
      "Architect": "Arquitectonica"
    }
  },
  {
    id: 10,
    title: "Davie Town Hall",
    image: "/projects/davie-town-hall.jpeg",
    images: ["/projects/davie-town-hall.jpeg", "/projects/davie-town-hall.jpeg"],
    address: "6591 Orange Drive, Davie, FL 33314",
    type: "Municipal / Government Building",
    shortDescription: "Development of a new 4-story municipal Town Hall building (~80,000+ sq ft) including administrative offices and public facilities.",
    fullDescription: "Scope includes site work, parking, infrastructure upgrades, and full design-build construction delivery. West Palm Consultants partnered to deliver rigorous multi-trade coordination across MEP disciplines, ensuring accuracy in all routing installations, minimizing conflicts with structural elements, and preparing accurate shop drawings.",
    details: {
      "Building Height": "4 Floors",
      "Total Area": "~80,000+ sq ft",
      "Parking": "Surface parking lot",
      "Developer": "Town of Davie",
      "Architect": "Song + Associates",
      "General Contractor": "Kaufman Lynn Construction",
      "Civil Consultant": "WGI Engineering Firm"
    }
  }
];

// Reusable component to animate numbers
const AnimatedNumber = ({ value }: { value: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!nodeRef.current) return;
    const match = value.match(/(\d+)(.*)/);
    
    if (match) {
      const [, numStr, restStr] = match;
      const finalNum = parseInt(numStr, 10);

      const obj = { val: 0 };
      gsap.to(obj, {
        val: finalNum,
        duration: 2.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: nodeRef.current,
          start: "top 90%",
        },
        onUpdate: () => {
          if (nodeRef.current) {
            nodeRef.current.innerText = Math.round(obj.val) + restStr;
          }
        }
      });
    } else {
      // If it doesn't start with a number, just animate opacity or leave as is
      gsap.fromTo(nodeRef.current, 
        { opacity: 0 },
        { opacity: 1, duration: 1, scrollTrigger: { trigger: nodeRef.current, start: "top 90%" } }
      );
    }
  }, [value]);

  return <span ref={nodeRef}>{value}</span>;
};

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = parseInt(params.id as string);
  const project = projectsData.find((p) => p.id === projectId);
  const relatedProjects = projectsData.filter((p) => p.id !== projectId).slice(0, 3);

  const heroImageRef = useRef<HTMLImageElement>(null);
  const contentBox = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;
    
    // parallax
    if (heroImageRef.current) gsap.to(heroImageRef.current, { yPercent: 30, ease: "none", scrollTrigger: { trigger: heroImageRef.current.parentElement, start: "top top", end: "bottom top", scrub: true }});

    const heroElements = contentBox.current?.querySelectorAll(".hero-anim");
    if (heroElements) gsap.fromTo(heroElements, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.2 });

    // TODO: maybe refactor these selectors, a bit heavy
    const revealElements = mainRef.current?.querySelectorAll(".reveal-up");
    revealElements?.forEach((el) => gsap.fromTo(el, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%" } }));

    const detailItems = mainRef.current?.querySelectorAll(".detail-item");
    if (detailItems?.length) gsap.fromTo(detailItems, { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: detailItems[0], start: "top 85%" }});

    const galleryItems = mainRef.current?.querySelectorAll(".gallery-img");
    const relatedCards = mainRef.current?.querySelectorAll(".related-card");
    
    if (galleryItems?.length) gsap.fromTo(galleryItems, { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", scrollTrigger: { trigger: galleryItems[0].parentElement, start: "top 85%" }});
    if (relatedCards?.length) gsap.fromTo(relatedCards, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: relatedCards[0].parentElement, start: "top 85%" }});
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#F8FAF8] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#146321] mb-4">Project Not Found</h1>
          <button onClick={() => router.push("/projects")} className="text-[#146321] font-semibold hover:underline flex items-center gap-2 mx-auto">
            <ArrowLeft size={20} /> Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const detailsArray = Object.entries(project.details || {});
  const topDetails = detailsArray.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#F8FAF8]" ref={mainRef}>
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[100vh] min-h-[700px] overflow-hidden flex items-end pb-24 md:pb-32">
        <div className="absolute inset-0 z-0 bg-black">
          <Image
            ref={heroImageRef}
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-70"
            style={{ transformOrigin: "center top" }}
            priority
          />
          {/* Gradient Overlays for Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-black/60 to-transparent" />
        </div>

        {/* Back Button */}
        <div className="absolute top-32 left-8 md:top-40 md:left-12 lg:left-16 z-20 xl:left-24">
          <button
            onClick={() => router.push("/projects")}
            className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-semibold tracking-wide uppercase group transition-all"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
          </button>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full px-8 md:px-12 lg:px-16 xl:px-24" ref={contentBox}>
          <div className="max-w-4xl lg:max-w-5xl">
            <span className="hero-anim block text-xs md:text-sm font-bold text-white/90 tracking-[0.2em] uppercase mb-4">
              {project.type}
            </span>
            <h1 
              className="hero-anim text-5xl md:text-7xl lg:text-8xl font-extrabold font-[family-name:var(--font-heading)] text-white tracking-tight mb-8 !text-white"
              style={{ lineHeight: 1.05 }}
            >
              {project.title}
            </h1>

            {/* Quick Stats Grid */}
            {topDetails.length > 0 && (
              <div className="hero-anim grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-white/20 pt-8 mt-12">
                {topDetails.map(([label, val], idx) => (
                  <div key={idx}>
                    <p className="text-white/80 text-[10px] md:text-sm font-bold uppercase tracking-widest mb-2">
                      {label}
                    </p>
                    <p className="text-white text-xl md:text-2xl font-medium font-[family-name:var(--font-heading)]">
                      <AnimatedNumber value={val} />
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="py-24 md:py-32 bg-[#F8FAF8] px-8 md:px-12 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-5/12 reveal-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-[#1E293B] mb-6">
              Project Overview
            </h2>
            <div className="w-16 h-1 bg-[#146321] rounded" />
          </div>
          <div className="lg:w-7/12 reveal-up">
            <p className="text-[#475569] text-xl md:text-2xl leading-relaxed font-medium mb-8">
              {project.shortDescription}
            </p>
            {project.fullDescription && (
              <p className="text-[#475569] text-base md:text-lg leading-loose">
                {project.fullDescription}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* 3. Detailed Specifications */}
      {detailsArray.length > 0 && (
        <section className="py-24 bg-white px-6 md:px-12 lg:px-16 xl:px-24 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.02)] relative z-10 -mt-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 md:mb-16 reveal-up">
              <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-[#1E293B]">
                Specifications
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-10 md:gap-y-12 gap-x-8">
              {detailsArray.map(([label, val], idx) => (
                <div key={idx} className="detail-item border-l-[3px] border-[#146321] pl-5 py-1">
                  <dt className="text-[#475569] text-xs font-bold uppercase tracking-wider mb-2">
                    {label}
                  </dt>
                  <dd className="text-[#1E293B] text-lg font-semibold font-[family-name:var(--font-heading)]">
                    {val}
                  </dd>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Image Gallery */}
      {project.images && project.images.length > 0 && (
        <section className="py-24 bg-[#F8FAF8] px-6 md:px-12 lg:px-16 xl:px-24 border-t border-[#E2E8F0]/50 -mt-8 pt-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {project.images.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`gallery-img relative w-full h-[50vh] min-h-[400px] overflow-hidden rounded-2xl ${
                    idx % 3 === 0 && idx !== 0 ? "md:col-span-2" : ""
                  }`}
                >
                  <Image 
                    src={img} 
                    alt={`${project.title} Gallery ${idx + 1}`} 
                    fill 
                    className="object-cover transition-transform duration-[1.5s] ease-out hover:scale-105" 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-24 md:py-32 bg-white px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 reveal-up">
              <div>
                <span className="inline-block text-xs font-bold text-[#146321] tracking-[0.18em] uppercase mb-4">
                  [ Explore More ]
                </span>
                <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-[#1E293B]">
                  Related Projects
                </h2>
              </div>
              <MagneticButton href="/projects" variant="default">View All Works</MagneticButton>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProjects.map((rp, idx) => (
                <div 
                  key={rp.id} 
                  className="related-card group cursor-pointer bg-[#F8FAF8] rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(20,99,33,0.08)] flex flex-col border border-[#E2E8F0]/60"
                  onClick={() => {
                    router.push(`/projects/${rp.id}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <div className="relative w-full h-[320px] overflow-hidden">
                    <Image 
                      src={rp.image} 
                      alt={rp.title} 
                      fill 
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <MagneticButton variant="gold" className="pointer-events-none">
                        <span>View Project</span><ArrowUpRight size={18} className="ml-2"/>
                      </MagneticButton>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-heading)] text-[#146321] mb-3">
                      {rp.title}
                    </h3>
                    <p className="text-[#475569] text-sm mb-4 line-clamp-2">
                      {rp.address}
                    </p>
                    <p className="text-xs font-bold text-[#475569] uppercase tracking-wider mt-auto">
                      {rp.type}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Footer CTA */}
      <section className="pb-24 bg-white px-8 md:px-12 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto reveal-up">
          <div className="glass rounded-3xl relative overflow-hidden text-center py-20 px-8 border border-gray-100 bg-[#F8FAF8]">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#146321] opacity-[0.04] rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#D4AF37] opacity-[0.04] rounded-full blur-3xl pointer-events-none" />
            
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-6 text-[#1E293B] relative z-10">
              Have a Vision?
            </h2>
            <p className="text-[#475569] text-lg max-w-2xl mx-auto mb-10 relative z-10">
              We have the technology and expertise to bring it to life. Partner with WPCS for your next landmark project.
            </p>
            <div className="relative z-10 flex justify-center">
              <MagneticButton href="/contact">Inquire About a Project</MagneticButton>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
