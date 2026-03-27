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
  Instagram
} from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

const FloatingShapes = dynamic(() => import("@/components/FloatingShapes"), {
  ssr: false,
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "BIM Modeling",
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
    <div className="pt-24 md:pt-28 min-h-screen bg-[#F8FAF8] pb-12 md:pb-16">
      <div className="absolute inset-0 z-0 opacity-20 h-[600px]">
        <FloatingShapes />
      </div>

      <section className="relative z-10 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12 md:mb-16">
            <span className="inline-block text-xs font-bold text-[#146321] tracking-[0.18em] uppercase mb-4">
              Get in Touch
            </span>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 font-[family-name:var(--font-heading)]"
              style={{ lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              Let&apos;s Build Something <br />
              <span className="text-[#146321]">Great Together</span>
            </h1>
            <p className="text-base md:text-lg text-[#475569]" style={{ lineHeight: 1.75, maxWidth: "560px" }}>
              Ready to transform your next project with cutting-edge construction
              technology? We&apos;re here to help you innovate.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 xl:gap-16">
          <div className="lg:col-span-5 space-y-8 md:space-y-10">
               <div className="space-y-6 md:space-y-8">
                  <div className="flex gap-5 items-start group">
                     <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-[#146321] group-hover:scale-110 transition-transform duration-500 shrink-0">
                        <MapPin size={22} />
                     </div>
                     <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-1.5">Our Office</h4>
                        <p className="text-[#1E293B] font-medium leading-relaxed text-sm md:text-base">
                          West Palm Beach Headquarters<br />
                          1200 Lakeview Avenue, Suite 400<br />
                          West Palm Beach, FL 33401
                        </p>
                     </div>
                  </div>

                  <div className="flex gap-5 items-start group">
                     <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-[#146321] group-hover:scale-110 transition-transform duration-500 shrink-0">
                        <Phone size={22} />
                     </div>
                     <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-1.5">Call Us</h4>
                        <p className="text-[#1E293B] font-medium text-sm md:text-base">+1 (561) 555-0123</p>
                        <p className="text-xs md:text-sm text-[#475569]">Mon - Fri, 8am - 6pm EST</p>
                     </div>
                  </div>

                  <div className="flex gap-5 items-start group">
                     <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-[#146321] group-hover:scale-110 transition-transform duration-500 shrink-0">
                        <Mail size={22} />
                     </div>
                     <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-1.5">Email</h4>
                        <p className="text-[#1E293B] font-medium underline text-sm md:text-base">projects@wpcs.com</p>
                        <p className="text-xs md:text-sm text-[#475569]">Typically response within 2 hours</p>
                     </div>
                  </div>
               </div>

               <div className="pt-6 border-t border-[rgba(20,99,33,0.1)]">
                 <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-4">Social Networks</h4>
                 <div className="flex gap-3">
                    {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                      <a key={i} href="#" className="w-11 h-11 rounded-full glass flex items-center justify-center text-[#1E293B] hover:bg-[#146321] hover:text-white transition-all duration-300">
                        <Icon size={18} />
                      </a>
                    ))}
                 </div>
               </div>

               <div className="hidden lg:block glass rounded-2xl md:rounded-3xl h-[240px] w-full relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#146321]/10 to-[#D4AF37]/5" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center opacity-40 group-hover:opacity-60 transition-opacity">
                     <Building size={70} className="mx-auto mb-3 text-[#146321]" />
                     <p className="text-xs uppercase tracking-[0.2em] font-bold">Interactive Location Map</p>
                  </div>
               </div>
            </div>

            <div className="lg:col-span-7">
               <div className="glass bg-white p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-[32px] shadow-2xl relative">
                  <div className="absolute top-0 right-0 p-6 opacity-5">
                    <Send size={120} />
                  </div>

                  <form onSubmit={handleSubmit} className="relative z-10 space-y-7">
                     <div className="grid sm:grid-cols-2 gap-7">
                        <div className="float-label-group">
                          <input type="text" name="name" id="name" placeholder=" " required value={formData.name} onChange={handleChange} />
                          <label htmlFor="name">Full Name</label>
                        </div>
                        <div className="float-label-group">
                          <input type="email" name="email" id="email" placeholder=" " required value={formData.email} onChange={handleChange} />
                          <label htmlFor="email">Email Address</label>
                        </div>
                     </div>

                     <div className="grid sm:grid-cols-2 gap-7">
                        <div className="float-label-group">
                          <input type="text" name="company" id="company" placeholder=" " value={formData.company} onChange={handleChange} />
                          <label htmlFor="company">Company Name</label>
                        </div>
                        <div className="float-label-group">
                           <select id="service" name="service" value={formData.service} onChange={handleChange} className="appearance-none">
                              <option value="BIM Modeling">BIM Modeling</option>
                              <option value="VDC Coordination">VDC Coordination</option>
                              <option value="Quantity Take-Off">Quantity Take-Off</option>
                              <option value="Prefabrication">Prefabrication</option>
                              <option value="3D Rendering">3D Rendering</option>
                              <option value="Administrative">Other Inquiry</option>
                           </select>
                           <label htmlFor="service">Interest Area</label>
                           <ChevronDown className="absolute right-0 top-4 pointer-events-none text-[#475569]" size={16} />
                        </div>
                     </div>

                     <div className="float-label-group">
                        <textarea id="message" name="message" rows={4} placeholder=" " required value={formData.message} onChange={handleChange} />
                        <label htmlFor="message">Your Message</label>
                     </div>

                     <div className="space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#475569]">Attachments (Optional)</h4>
                        <div className="dropzone border-2 border-dashed border-[rgba(20,99,33,0.1)] rounded-xl p-6 flex flex-col items-center justify-center gap-2 hover:border-[#146321] hover:bg-white/50 transition-all cursor-pointer group">
                           <div className="w-11 h-11 rounded-xl bg-[rgba(20,99,33,0.05)] flex items-center justify-center text-[#146321] group-hover:scale-110 transition-transform">
                              <UploadCloud size={22} />
                           </div>
                           <p className="text-sm font-semibold">Drop project specs here or <span className="text-[#146321]">browse</span></p>
                           <p className="text-[10px] text-[#94a3b8] uppercase tracking-wide">PDF, ZIP, DOCX (Max 25MB)</p>
                        </div>
                     </div>

                     <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full relative py-4 bg-[#146321] text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#0A3B12] transition-colors disabled:opacity-70 group shadow-lg"
                        >
                          {isSubmitting ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : (
                            <>
                              Send Inquiry
                              <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </>
                          )}
                        </button>
                        <p className="text-center text-[10px] text-[#94a3b8] mt-3 uppercase tracking-widest">
                          Secure end-to-end encryption for all inquiries
                        </p>
                     </div>
                  </form>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
