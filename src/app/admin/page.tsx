"use client";

import { useState } from "react";
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Settings, 
  Bell, 
  Search, 
  LogOut,
  TrendingUp,
  MessageSquare,
  Briefcase,
  AlertCircle,
  MoreVertical,
  CheckCircle2,
  Clock
} from "lucide-react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("Inquiries");

  const inquiries = [
    { id: "Q-9482", name: "John Smith", company: "Elite Builders", service: "BIM Modeling", status: "Pending", date: "Mar 18, 2026" },
    { id: "Q-9483", name: "Sarah Chen", company: "Skyline Arch", service: "VDC Coordination", status: "In Review", date: "Mar 19, 2026" },
    { id: "Q-9484", name: "Michael Ross", company: "Pearson Specter", service: "Quantity Take-Off", status: "Approved", date: "Mar 20, 2026" },
    { id: "Q-9485", name: "Emma Wilson", company: "Green Dev Co", service: "3D Rendering", status: "Pending", date: "Mar 20, 2026" },
  ];

  return (
    <div className="flex h-screen bg-[#F1F5F1] overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0A3B12] text-white flex flex-col pt-8">
        <div className="px-8 mb-10 flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-[#146321] flex items-center justify-center font-bold">W</div>
          <span className="font-bold tracking-tight">WPCS Admin</span>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {[
            { name: "Dashboard", Icon: LayoutDashboard },
            { name: "Inquiries", Icon: MessageSquare },
            { name: "Projects", Icon: Briefcase },
            { name: "Clients", Icon: Users },
            { name: "Reports", Icon: FileText },
            { name: "Settings", Icon: Settings },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.name 
                  ? "bg-[#146321] text-white shadow-lg" 
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <item.Icon size={18} />
              <span className="text-sm font-semibold">{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-white/10">
          <button className="flex items-center gap-3 text-white/40 hover:text-white transition-colors text-sm font-semibold">
            <LogOut size={18} /> Exit Dashboard
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-[rgba(20,99,33,0.1)] px-8 py-4 flex items-center justify-between">
           <div className="flex items-center gap-4 bg-[#F1F5F1] px-4 py-2 rounded-xl w-96">
              <Search size={18} className="text-[#94a3b8]" />
              <input type="text" placeholder="Search data..." className="bg-transparent border-none outline-none text-xs w-full" />
           </div>

           <div className="flex items-center gap-6">
              <button className="relative p-2 text-[#475569] hover:bg-[#F1F5F1] rounded-lg transition-colors">
                 <Bell size={20} />
                 <span className="absolute top-2 right-2 w-2 h-2 bg-[#D4AF37] rounded-full border-2 border-white" />
              </button>
              <div className="flex items-center gap-3 border-l border-[rgba(20,99,33,0.1)] pl-6">
                 <div className="text-right">
                    <p className="text-xs font-bold text-[#1E293B]">Admin User</p>
                    <p className="text-[10px] text-[#94a3b8]">Project Director</p>
                 </div>
                 <div className="w-10 h-10 rounded-full bg-[#146321] border-2 border-white shadow-sm flex items-center justify-center text-white font-bold">
                    AD
                 </div>
              </div>
           </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8">
           {/* Top Stats */}
           <div className="grid md:grid-cols-4 gap-6">
              {[
                { label: "New Inquiries", value: "12", change: "+14%", Icon: MessageSquare, color: "text-[#146321]" },
                { label: "Active Projects", value: "48", change: "+6%", Icon: Briefcase, color: "text-[#146321]" },
                { label: "Rev Gain", value: "$2.4M", change: "+22%", Icon: TrendingUp, color: "text-[#D4AF37]" },
                { label: "Critical Alerts", value: "3", change: "-2", Icon: AlertCircle, color: "text-[#ef4444]" }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-[rgba(20,99,33,0.05)]">
                   <div className="flex justify-between items-start mb-4">
                      <div className={`p-3 rounded-2xl bg-[rgba(20,99,33,0.05)] ${stat.color}`}>
                        <stat.Icon size={20} />
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${stat.change.includes('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {stat.change}
                      </span>
                   </div>
                   <h3 className="text-2xl font-bold text-[#1E293B] mb-1">{stat.value}</h3>
                   <span className="text-xs text-[#94a3b8] font-medium tracking-wide uppercase">{stat.label}</span>
                </div>
              ))}
           </div>

           {/* Data Table Container */}
           <div className="bg-white rounded-[32px] shadow-sm border border-[rgba(20,99,33,0.05)] overflow-hidden">
              <div className="px-8 py-6 border-b border-[rgba(20,99,33,0.05)] flex items-center justify-between">
                 <h3 className="text-xl font-bold text-[#1E293B]">Project Inquiries</h3>
                 <button className="text-[10px] font-bold text-[#146321] uppercase tracking-widest px-4 py-2 bg-[rgba(20,99,33,0.05)] rounded-full hover:bg-[rgba(20,99,33,0.1)] transition-colors">
                    Export Report
                 </button>
              </div>
              
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead>
                       <tr className="bg-[#F8FAF8] border-b border-[rgba(20,99,33,0.05)]">
                          <th className="px-8 py-4 text-[10px] font-bold text-[#94a3b8] uppercase tracking-[0.15em]">ID</th>
                          <th className="px-8 py-4 text-[10px] font-bold text-[#94a3b8] uppercase tracking-[0.15em]">Contact</th>
                          <th className="px-8 py-4 text-[10px] font-bold text-[#94a3b8] uppercase tracking-[0.15em]">Service</th>
                          <th className="px-8 py-4 text-[10px] font-bold text-[#94a3b8] uppercase tracking-[0.15em]">Status</th>
                          <th className="px-8 py-4 text-[10px] font-bold text-[#94a3b8] uppercase tracking-[0.15em]">Date</th>
                          <th className="px-8 py-4 text-[10px] font-bold text-[#94a3b8] uppercase tracking-[0.15em]"></th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-[rgba(20,99,33,0.05)]">
                       {inquiries.map((row) => (
                          <tr key={row.id} className="hover:bg-[#F8FAF8] transition-colors">
                             <td className="px-8 py-5 text-sm font-bold text-[#146321]">{row.id}</td>
                             <td className="px-8 py-5">
                                <p className="text-sm font-bold text-[#1E293B]">{row.name}</p>
                                <p className="text-[10px] text-[#94a3b8]">{row.company}</p>
                             </td>
                             <td className="px-8 py-5">
                                <span className="text-xs font-semibold text-[#475569] px-3 py-1 bg-[#F1F5F1] rounded-lg">
                                   {row.service}
                                </span>
                             </td>
                             <td className="px-8 py-5">
                                <div className="flex items-center gap-2">
                                   {row.status === "Approved" ? (
                                     <CheckCircle2 size={14} className="text-green-600" />
                                   ) : row.status === "In Review" ? (
                                     <Clock size={14} className="text-blue-500" />
                                   ) : (
                                     <div className="w-3.5 h-3.5 rounded-full border-2 border-yellow-500" />
                                   )}
                                   <span className={`text-xs font-bold ${
                                      row.status === "Approved" ? "text-green-700" :
                                      row.status === "In Review" ? "text-blue-700" : "text-yellow-700"
                                   }`}>{row.status}</span>
                                </div>
                             </td>
                             <td className="px-8 py-5 text-xs text-[#475569]">{row.date}</td>
                             <td className="px-8 py-5 text-right">
                                <button className="p-2 text-[#94a3b8] hover:text-[#1E293B] hover:bg-[rgba(20,99,33,0.05)] rounded-lg">
                                   <MoreVertical size={16} />
                                </button>
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
              <div className="px-8 py-6 bg-[#F8FAF8] border-t border-[rgba(20,99,33,0.05)]">
                 <p className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-widest">
                    Showing 4 of 1,248 inquiries • <span className="text-[#146321] cursor-pointer hover:underline">View All Records</span>
                 </p>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
}
