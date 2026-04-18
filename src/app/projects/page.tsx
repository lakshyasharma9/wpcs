"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

const projects = [
  {
    id: 1,
    title: "Aventana",
    image: "/projects/aventana.jpeg",
    address: "19640 Harriet Tubman Highway, Miami 33180",
    type: "Multifamily residential development",
  },
  {
    id: 2,
    title: "Caretta",
    image: "/projects/caretta.jpg",
    address: "1011 U.S. Highway 1, Juno Beach, FL",
    type: "Luxury condo + mixed-use",
  },
  {
    id: 3,
    title: "Selene Oceanfront Residences",
    image: "/projects/selene.jpg",
    address: "151 N Seabreeze Blvd, Fort Lauderdale",
    type: "Luxury oceanfront condominium",
  },
  {
    id: 4,
    title: "FB Wynwood",
    image: "/projects/fb-wynwood.jpg",
    address: "Downtown Miami, FL",
    type: "Luxury condo + mixed-use",
  },
  {
    id: 5,
    title: "Azure Residences",
    image: "/projects/azure.png",
    address: "1401 1st Street South, Jacksonville Beach, FL",
    type: "Luxury condominiums",
  },
  {
    id: 6,
    title: "Tower 350",
    image: "/projects/tower-350.jpg",
    address: "West Palm Beach",
    type: "Multifamily residential development",
  },
  {
    id: 7,
    title: "PGA Station",
    image: "/projects/pga.jpg",
    address: "West Palm Beach",
    type: "Multifamily residential development",
  },
  {
    id: 8,
    title: "Aviara East Pompano",
    image: "/projects/aviara.jpg",
    address: "Pompano Beach",
    type: "Multifamily residential development",
  },
  {
    id: 9,
    title: "42 Pine",
    image: "/projects/42-pine.jpg",
    address: "340 West 42nd Street, Miami Beach, FL",
    type: "Residential Condominium",
  },
  {
    id: 10,
    title: "Davie Town Hall",
    image: "/projects/davie-town-hall.jpeg",
    address: "6591 Orange Drive, Davie, FL 33314",
    type: "Municipal / Government Building",
  },
];

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#F8FAF8]" style={{ paddingTop: 'clamp(140px, 18vh, 180px)', paddingBottom: 'clamp(80px, 10vh, 120px)' }}>
      <section style={{ paddingLeft: 'clamp(40px, 8vw, 120px)', paddingRight: 'clamp(40px, 8vw, 120px)', marginBottom: 'clamp(80px, 12vh, 120px)' }}>
        <div>
          <div className="max-w-7xl" style={{ marginBottom: 'clamp(56px, 9vh, 80px)' }}>
            <span className="inline-block text-xs font-bold text-[#146321] tracking-[0.18em] uppercase mb-4">
              [ Work ]
            </span>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-[family-name:var(--font-heading)]"
              style={{ lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              Building Excellence Through <span className="text-[#146321]">Every Project</span>
            </h1>
          </div>

          <div
            className="grid md:grid-cols-2"
            style={{ gap: 'clamp(32px, 4vw, 48px)' }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer bg-white"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.05)';
                }}
              >
                {/* Image Section with Hover Effect */}
                <div 
                  style={{ padding: '12px', position: 'relative' }}
                  onClick={() => router.push(`/projects/${project.id}`)}
                >
                  <div className="relative w-full h-[380px] md:h-[420px] overflow-hidden" style={{ borderRadius: '8px' }}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      loading="lazy"
                      className="object-cover transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:blur-[2px]"
                      style={project.id === 2 ? { objectPosition: 'center', transform: 'scale(1.3)' } : {}}
                    />
                    
                    {/* Overlay Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                      <MagneticButton
                        onClick={() => router.push(`/projects/${project.id}`)}
                        variant="gold"
                      >
                        <span>View</span>
                        <ArrowUpRight size={18} style={{ marginLeft: '8px' }} />
                      </MagneticButton>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div style={{ padding: '16px' }}>
                  {/* Project Title */}
                  <h3 
                    className="font-bold font-[family-name:var(--font-heading)]"
                    style={{
                      fontSize: 'clamp(24px, 3vw, 28px)',
                      fontWeight: '700',
                      color: '#146321',
                      marginBottom: '16px',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Project Address */}
                  <div style={{ marginBottom: '16px' }}>
                    <p 
                      className="font-bold uppercase"
                      style={{
                        fontSize: '12px',
                        color: '#94A3B8',
                        letterSpacing: '0.05em',
                        marginBottom: '8px'
                      }}
                    >
                      Project Address
                    </p>
                    <p 
                      className="font-medium"
                      style={{
                        fontSize: '14px',
                        color: '#1E293B',
                        lineHeight: '1.6'
                      }}
                    >
                      {project.address}
                    </p>
                  </div>

                  {/* Project Type */}
                  <div>
                    <p 
                      className="font-bold uppercase"
                      style={{
                        fontSize: '12px',
                        color: '#94A3B8',
                        letterSpacing: '0.05em',
                        marginBottom: '8px'
                      }}
                    >
                      Project Type
                    </p>
                    <p 
                      className="font-medium"
                      style={{
                        fontSize: '14px',
                        color: '#1E293B',
                        lineHeight: '1.6'
                      }}
                    >
                      {project.type}
                    </p>
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
