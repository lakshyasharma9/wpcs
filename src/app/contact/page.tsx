"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  UploadCloud,
  ChevronDown,
  Building,
  CheckCircle,
  Linkedin,
  Twitter,
  Instagram,
  Youtube
} from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

const FloatingShapes = dynamic(() => import("@/components/FloatingShapes"), {
  ssr: false,
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: [] as string[],
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleService = (serviceName: string) => {
    const currentServices = formData.service as string[];
    if (currentServices.includes(serviceName)) {
      setFormData({ ...formData, service: currentServices.filter(s => s !== serviceName) });
    } else {
      setFormData({ ...formData, service: [...currentServices, serviceName] });
    }
  };

  const services = [
    "BIM (MEPF)",
    "Prefabrication",
    "Estimation",
    "Renderings",
    "Submittals Review",
    "Project Management",
    "Drone Video"
  ];

  if (submitted) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center px-6">
        <div className="glass p-12 rounded-3xl max-w-xl w-full text-center">
           <div className="w-20 h-20 rounded-full bg-[#146321] text-white flex items-center justify-center mx-auto mb-8 shadow-xl">
             <CheckCircle size={40} />
           </div>
           <h2 className="text-4xl font-bold font-[family-name:var(--font-heading)] mb-4 text-[#1E293B]">Message Received!</h2>
           <p className="text-[#475569] mb-10">Thanks for reaching out. Our technical team will review your inquiry and get back to you within 24 hours.</p>
           <MagneticButton href="/" variant="outline">Back to Home</MagneticButton>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAF8]" style={{ paddingTop: 'clamp(200px, 15vh, 160px)', paddingBottom: 'clamp(80px, 12vh, 120px)' }}>
      <div className="absolute inset-0 z-0 opacity-20 h-[600px]">
        
      </div>

      <section className="relative z-10">
        <div className="section-container">
          <div className="grid lg:grid-cols-12" style={{ gap: 'clamp(48px, 8vw, 100px)', marginBottom: 'clamp(60px, 10vh, 100px)' }}>
            {/* Left Side - Heading + Contact Info */}
            <div className="lg:col-span-5">
              <div className="max-w-2xl" style={{ marginBottom: 'clamp(48px, 8vh, 80px)' }}>
                <span className="inline-block text-xs font-bold text-[#146321] tracking-[0.18em] uppercase" style={{ marginBottom: 'clamp(20px, 3vh, 28px)' }}>
                  Get in Touch
                </span>
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-[family-name:var(--font-heading)]"
                  style={{ lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 'clamp(24px, 4vh, 36px)' }}
                >
                  Let&apos;s Build Something <br />
                  <span className="text-[#146321]">Great Together</span>
                </h1>
                <p className="text-base md:text-lg text-[#475569]" style={{ lineHeight: 1.75, maxWidth: "560px" }}>
                  Ready to transform your next project with cutting-edge construction
                  technology? We&apos;re here to help you innovate.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(36px, 5vh, 56px)' }}>
                  <div className="flex gap-6 items-start group">
                     <div className="w-16 h-16 rounded-xl glass flex items-center justify-center text-[#146321] group-hover:scale-110 transition-transform duration-500 shrink-0">
                        <MapPin size={26} />
                     </div>
                     <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]" style={{ marginBottom: '12px' }}>Our Office</h4>
                        <p className="text-[#1E293B] font-medium leading-relaxed text-sm md:text-base">
                          West Palm Beach Headquarters<br />
                          1200 Lakeview Avenue, Suite 400<br />
                          West Palm Beach, FL 33401
                        </p>
                     </div>
                  </div>

                  <div className="flex gap-6 items-start group">
                     <div className="w-16 h-16 rounded-xl glass flex items-center justify-center text-[#146321] group-hover:scale-110 transition-transform duration-500 shrink-0">
                        <Phone size={26} />
                     </div>
                     <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]" style={{ marginBottom: '12px' }}>Call Us</h4>
                        <p className="text-[#1E293B] font-medium text-sm md:text-base" style={{ marginBottom: '6px' }}>+1 (561) 555-0123</p>
                        <p className="text-xs md:text-sm text-[#475569]">Mon - Fri, 8am - 6pm EST</p>
                     </div>
                  </div>

                  <div className="flex gap-6 items-start group">
                     <div className="w-16 h-16 rounded-xl glass flex items-center justify-center text-[#146321] group-hover:scale-110 transition-transform duration-500 shrink-0">
                        <Mail size={26} />
                     </div>
                     <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]" style={{ marginBottom: '12px' }}>Email</h4>
                        <p className="text-[#1E293B] font-medium underline text-sm md:text-base" style={{ marginBottom: '6px' }}>projects@wpcs.com</p>
                        <p className="text-xs md:text-sm text-[#475569]">Typically response within 2 hours</p>
                     </div>
                  </div>
               </div>

               <div style={{ paddingTop: 'clamp(36px, 6vh, 56px)', borderTop: '1px solid rgba(20,99,33,0.1)', marginTop: 'clamp(36px, 6vh, 56px)' }}>
                 <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]" style={{ marginBottom: '20px' }}>Social Networks</h4>
                 <div className="flex gap-4">
                    <a href="https://www.linkedin.com/company/89331237/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full flex items-center justify-center text-[#1E293B] bg-white/70 backdrop-blur-sm border border-[rgba(20,99,33,0.2)] hover:!bg-[#146321] hover:!text-white transition-all duration-300 hover:scale-110">
                      <Linkedin size={22} />
                    </a>
                    <a href="#" className="w-14 h-14 rounded-full flex items-center justify-center text-[#1E293B] bg-white/70 backdrop-blur-sm border border-[rgba(20,99,33,0.2)] hover:!bg-[#146321] hover:!text-white transition-all duration-300 hover:scale-110">
                      <Twitter size={22} />
                    </a>
                    <a href="#" className="w-14 h-14 rounded-full flex items-center justify-center text-[#1E293B] bg-white/70 backdrop-blur-sm border border-[rgba(20,99,33,0.2)] hover:!bg-[#146321] hover:!text-white transition-all duration-300 hover:scale-110">
                      <Instagram size={22} />
                    </a>
                    <a href="https://www.youtube.com/@WestPalmConsultants" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full flex items-center justify-center text-[#1E293B] bg-white/70 backdrop-blur-sm border border-[rgba(20,99,33,0.2)] hover:!bg-[#146321] hover:!text-white transition-all duration-300 hover:scale-110">
                      <Youtube size={22} />
                    </a>
                 </div>
               </div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:col-span-7">
               <div className="glass bg-white rounded-2xl md:rounded-[32px] shadow-2xl relative" style={{ padding: 'clamp(32px, 5vw, 56px)' }}>
                  <div className="absolute top-0 right-0 p-6 opacity-5">
                    <Send size={120} />
                  </div>

                  <form onSubmit={handleSubmit} className="relative z-10" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(28px, 4vh, 40px)' }}>
                     <div className="grid sm:grid-cols-2" style={{ gap: 'clamp(24px, 3vw, 36px)' }}>
                        <div className="float-label-group">
                          <input type="text" name="name" id="name" placeholder=" " required value={formData.name} onChange={handleChange} />
                          <label htmlFor="name">Full Name</label>
                        </div>
                        <div className="float-label-group">
                          <input type="email" name="email" id="email" placeholder=" " required value={formData.email} onChange={handleChange} />
                          <label htmlFor="email">Email Address</label>
                        </div>
                     </div>

                     <div className="grid sm:grid-cols-2" style={{ gap: 'clamp(24px, 3vw, 36px)' }}>
                        <div className="float-label-group">
                          <input type="text" name="company" id="company" placeholder=" " value={formData.company} onChange={handleChange} />
                          <label htmlFor="company">Company Name</label>
                        </div>
                        <div className="float-label-group relative">
                          <div 
                            className="w-full cursor-pointer"
                            onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                          >
                            <input 
                              type="text" 
                              id="service" 
                              placeholder=" " 
                              value={(formData.service as string[]).join(', ')}
                              readOnly
                              className="cursor-pointer"
                            />
                            <label htmlFor="service">Services</label>
                          </div>
                          {isServiceDropdownOpen && (
                            <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-[#146321]/20 rounded-xl shadow-xl z-50 max-h-64 overflow-y-auto">
                              {services.map((service, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center gap-3 px-4 py-3 hover:bg-[#146321]/5 cursor-pointer transition-colors"
                                  onClick={() => toggleService(service)}
                                >
                                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                                    (formData.service as string[]).includes(service) 
                                      ? 'bg-[#146321] border-[#146321]' 
                                      : 'border-[#146321]/30'
                                  }`}>
                                    {(formData.service as string[]).includes(service) && (
                                      <CheckCircle size={14} className="text-white" strokeWidth={3} />
                                    )}
                                  </div>
                                  <span className="text-sm font-medium text-[#1E293B]">{service}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                     </div>

                     <div className="float-label-group">
                        <textarea id="message" name="message" rows={5} placeholder=" " required value={formData.message} onChange={handleChange} />
                        <label htmlFor="message">Your Message</label>
                     </div>

                     <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#475569]">Attachments (Optional)</h4>
                        <div className="dropzone border-2 border-dashed border-[rgba(20,99,33,0.1)] rounded-xl flex flex-col items-center justify-center hover:border-[#146321] hover:bg-white/50 transition-all cursor-pointer group" style={{ padding: 'clamp(24px, 4vh, 36px)', gap: '12px' }}>
                           <div className="w-14 h-14 rounded-xl bg-[rgba(20,99,33,0.05)] flex items-center justify-center text-[#146321] group-hover:scale-110 transition-transform">
                              <UploadCloud size={26} />
                           </div>
                           <p className="text-sm font-semibold">Drop project specs here or <span className="text-[#146321]">browse</span></p>
                           <p className="text-[10px] text-[#94a3b8] uppercase tracking-wide">PDF, ZIP, DOCX (Max 25MB)</p>
                        </div>
                     </div>

                     <div style={{ paddingTop: 'clamp(12px, 2vh, 20px)' }}>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full relative bg-[#146321] text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#0A3B12] transition-colors disabled:opacity-70 group shadow-lg text-base"
                          style={{ padding: 'clamp(16px, 2.5vh, 22px) 24px' }}
                        >
                          {isSubmitting ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : (
                            <>
                              Send Inquiry
                              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </>
                          )}
                        </button>
                        <p className="text-center text-[10px] text-[#94a3b8] uppercase tracking-widest" style={{ marginTop: '16px' }}>
                          Secure end-to-end encryption for all inquiries
                        </p>
                     </div>
                  </form>
               </div>
            </div>
          </div>

          {/* Full Width Map Section */}
          <div className="glass rounded-2xl md:rounded-3xl w-full relative overflow-hidden" style={{ height: 'clamp(400px, 50vh, 600px)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.123456789!2d75.78728137351014!3d26.91246193074616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzQ0LjkiTiA3NcKwNDcnMTQuMiJF!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
