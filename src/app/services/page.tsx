"use client";

import dynamic from "next/dynamic";
import { 
  Ruler, 
  Building2, 
  Layers, 
  Box, 
  Monitor, 
  Calendar,
  Layers as VDC,
  Hammer,
  Clock,
  Layout,
  Fullscreen,
  Workflow,
  CheckCircle2
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

const FloatingShapes = dynamic(() => import("@/components/FloatingShapes"), {
  ssr: false,
});

const allServices = [
  {
    title: "Quantity Take-Off (QTO)",
    description: "Highly accurate 5D cost estimation and quantity extraction directly from BIM models. We provide detailed material breakdowns and cost analysis to ensure your project stays on budget.",
    icon: <Ruler size={32} />,
    features: ["Digital measurement", "Material tracking", "Cost validation", "Bid support"]
  },
  {
    title: "BIM Modeling (LOD 100-500)",
    description: "Multi-disciplinary Building Information Modeling that captures every architectural, structural, and MEP detail. Our models serve as the single source of truth for the entire project life cycle.",
    icon: <Building2 size={32} />,
    features: ["Architectural BIM", "Structural BIM", "MEPFS modeling", "As-built models"]
  },
  {
    title: "VDC Coordination",
    description: "Virtual Design & Construction workflows that integrate all project stakeholders. We manage clash detection and resolution processes to eliminate site issues before they happen.",
    icon: <VDC size={32} />,
    features: ["Clash detection", "Resolution management", "Trade coordination", "BIM execution planning"]
  },
  {
    title: "Digital Prefabrication",
    description: "Translating design models into precise shop drawings and fabrication-ready outputs. We optimize components for off-site manufacturing to accelerate field installation.",
    icon: <Box size={32} />,
    features: ["Shop drawings", "SPOOL drawings", "Modular design", "CNC integration"]
  },
  {
    title: "Photorealistic Rendering",
    description: "Immersive 3D visualizations that communicate design intent with stunning clarity. From high-end interior stills to dynamic architectural walkthroughs.",
    icon: <Monitor size={32} />,
    features: ["Interior/Exterior renders", "VR/AR experiences", "Fly-through animations", "Marketing assets"]
  },
  {
    title: "4D Construction Scheduling",
    description: "Integrating the project schedule with the 3D model to visualize the construction sequence over time. Identify logistical bottlenecks and optimize site phasing.",
    icon: <Calendar size={32} />,
    features: ["Sequence simulation", "Logistics planning", "Resource leveling", "Visual progress tracking"]
  },
  {
    title: "MEP Coordination",
    description: "Specialized coordination of mechanical, electrical, and plumbing systems to ensure spatial efficiency and maintenance accessibility in complex building cores.",
    icon: <Hammer size={32} />,
    features: ["Pipe/Duct routing", "Electrical containment", "Plant room layouts", "Service access checks"]
  },
  {
    title: "Point Cloud to BIM",
    description: "Converting high-density laser scan data into accurate intelligent BIM models for renovation, retrofit, and heritage restoration projects.",
    icon: <Fullscreen size={32} />,
    features: ["Laser scan processing", "Scan-to-BIM modeling", "Existing condition audits", "Deformation analysis"]
  },
  {
    title: "BIM Management",
    description: "Strategic consulting for firms looking to implement or optimize their BIM workflows. We provide standards development, training, and project-specific BIM management.",
    icon: <Layout size={32} />,
    features: ["ISO 19650 compliance", "Custom workflows", "Software training", "Audit services"]
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-24 md:pt-28 min-h-screen bg-[#F8FAF8]">
      <div className="absolute inset-0 z-0 opacity-30">
        <FloatingShapes />
      </div>

      <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16 md:mb-24">
            <span className="inline-block text-xs font-bold text-[#146321] tracking-[0.18em] uppercase mb-4">
              Our Capabilities
            </span>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 font-[family-name:var(--font-heading)]"
              style={{ lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              Leading <span className="text-[#146321]">Services</span>
            </h1>
            <p className="text-base md:text-lg text-[#475569]" style={{ lineHeight: 1.75, maxWidth: "580px" }}>
              We provide a comprehensive range of construction technology services
              designed to maximize efficiency, reduce costs, and ensure the highest levels of
              project quality.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {allServices.map((service, i) => (
              <div key={i} className="group relative">
                <div className="glass rounded-2xl md:rounded-3xl p-7 md:p-9 h-full flex flex-col transition-all duration-500 hover:shadow-[0_40px_80px_rgba(20,99,33,0.12)] border-b-4 border-transparent hover:border-[#146321]">
                   <div className="w-14 h-14 rounded-2xl bg-[rgba(20,99,33,0.1)] flex items-center justify-center text-[#146321] mb-6 group-hover:scale-110 transition-transform duration-500">
                     {service.icon}
                   </div>
                   <h3 className="text-xl md:text-2xl font-bold mb-3 font-[family-name:var(--font-heading)]">{service.title}</h3>
                   <p className="text-[#475569] text-sm leading-relaxed mb-6 flex-grow">
                     {service.description}
                   </p>
                   <div className="space-y-2.5 pt-5 border-t border-[rgba(20,99,33,0.1)]">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#1E293B]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                          {feature}
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] mb-3"
              style={{ lineHeight: 1.15 }}
            >
              How We Work
            </h2>
            <p className="text-[#475569] text-sm md:text-base">A streamlined process from initial consultation to final delivery.</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
             {[
               { icon: <Fullscreen className="text-[#146321]" />, title: "Discovery", desc: "Understanding project goals and technical requirements." },
               { icon: <Workflow className="text-[#146321]" />, title: "Strategy", desc: "Developing a custom BIM Execution Plan (BEP)." },
               { icon: <Building2 className="text-[#146321]" />, title: "Execution", desc: "High-precision modeling and rigorous coordination." },
               { icon: <CheckCircle2 className="text-[#146321]" />, title: "Delivery", desc: "Final quality checks and seamless data handover." }
             ].map((step, i) => (
               <div key={i} className="glass p-6 md:p-8 rounded-2xl md:rounded-3xl text-center flex flex-col items-center group hover:bg-[#146321]/5 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[rgba(20,99,33,0.05)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                     {step.icon}
                  </div>
                  <h4 className="font-bold text-base md:text-lg mb-2">{step.title}</h4>
                  <p className="text-xs md:text-sm text-[#475569] leading-relaxed">{step.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
