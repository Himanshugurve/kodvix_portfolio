import { useState } from "react";

const projects = [
  {
    initial: "M", initialBg: "bg-white", initialText: "text-black",
    name: "MensWorld BD", tag: "eCommerce",
    desc: "A premier fashion eCommerce destination. We engineered a high-performance platform designed to handle high-volume traffic with a seamless, intuitive user checkout experience.",
  },
  {
    initial: "U", initialBg: "bg-orange-100", initialText: "text-orange-800",
    name: "Ubuntu Interior", tag: "Architecture",
    desc: "Sophisticated digital architecture for an interior design firm. The project focused on visual storytelling and a custom content management system to showcase portfolios elegantly.",
  },
  {
    initial: "E", initialBg: "bg-blue-100", initialText: "text-blue-900",
    name: "Enterprise ERP", tag: "SaaS / B2B",
    desc: "A robust enterprise resource planning system designed to streamline internal operations, automate complex workflow processes, and provide real-time analytics.",
  },
  {
    initial: "V", initialBg: "bg-emerald-100", initialText: "text-emerald-900",
    name: "Vendor Portal", tag: "Logistics",
    desc: "A secure, scalable B2B portal facilitating seamless vendor management, order processing, and real-time inventory tracking across multiple warehouses.",
  },
];

function GlassCard({ initial, initialBg, initialText, name, tag, desc }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="rounded-xl p-8 flex flex-col justify-between cursor-default relative overflow-hidden"
      style={{
        background: hovered ? "rgba(15,23,42,0.6)" : "rgba(15,23,42,0.4)",
        backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
        border: hovered ? "1px solid rgba(34,211,238,0.5)" : "1px solid rgba(34,211,238,0.1)",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered ? "0 10px 40px -10px rgba(6,182,212,0.15)" : "none",
        transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div>
        {/* Card Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-3">
            {/* Initial badge */}
            <div
              className={`w-10 h-10 rounded flex items-center justify-center font-bold text-xl ${initialBg} ${initialText}`}
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}
            >
              {initial}
            </div>
            {/* Project name */}
            <h3
              className="font-bold text-xl"
              style={{
                fontFamily: "'Barlow', sans-serif", fontWeight: 700,
                letterSpacing: "-0.01em",
                color: hovered ? "#ecfeff" : "#ffffff", transition: "color 0.3s",
              }}
            >
              {name}
            </h3>
          </div>
          {/* Tag pill */}
          <span
            className="px-3 py-1 rounded-full text-xs"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 500,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#22d3ee", border: "1px solid rgba(6,182,212,0.3)",
              backgroundColor: "rgba(8,47,73,0.3)",
            }}
          >
            {tag}
          </span>
        </div>

        {/* Animated underline */}
        <div className="mb-4" style={{
          height: "1px", backgroundColor: "#22d3ee", opacity: 0.5,
          width: hovered ? "100%" : "0%", transition: "width 0.4s ease",
        }} />

        {/* Description */}
        <p style={{
          fontFamily: "'Lora', serif", fontWeight: 300,
          fontSize: "clamp(0.82rem, 1.2vw, 0.9rem)", lineHeight: 1.72,
          color: "rgba(148,163,184,0.85)",
        }}>
          {desc}
        </p>
      </div>

      {/* CTA */}
      <div
        className="mt-4 flex items-center gap-2"
        style={{
          fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600,
          fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase",
          color: hovered ? "#22d3ee" : "#6b7280", transition: "color 0.3s",
        }}
      >
        <span>VIEW CASE STUDY</span>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          style={{ transform: hovered ? "translateX(4px)" : "translateX(0)", transition: "transform 0.3s" }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  );
}

export default function KodVixPortfolio() {
  return (
    <div id="portfolio" className="relative flex flex-col overflow-hidden text-white"
      style={{ minHeight: "100vh", backgroundColor: "#080c14", padding: "3rem" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@300;400;500;600;700&family=Lora:ital,wght@0,300;0,400;1,300;1,400&family=Martian+Mono:wght@300;400;500&display=swap');
      `}</style>

      {/* BG glows */}
      <div className="absolute rounded-full pointer-events-none" style={{ width:"600px",height:"600px",backgroundColor:"rgba(8,145,178,0.08)",filter:"blur(80px)",top:"-200px",right:"-100px",zIndex:0 }} />
      <div className="absolute rounded-full pointer-events-none" style={{ width:"500px",height:"500px",backgroundColor:"rgba(30,58,138,0.08)",filter:"blur(80px)",bottom:"-100px",left:"-100px",zIndex:0 }} />

      {/* Header */}
      <div className="relative mb-8 flex flex-col justify-center" style={{ zIndex: 10, height: "12%" }}>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8" style={{ height: "2px", backgroundColor: "#22d3ee", boxShadow: "0 0 8px rgba(34,211,238,0.8)" }} />
          <p style={{ fontFamily: "'Martian Mono', monospace", fontSize: "0.58rem", fontWeight: 400, color: "#22d3ee", letterSpacing: "0.26em", textTransform: "uppercase", margin: 0 }}>
            Projects
          </p>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <h2 style={{
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
              fontSize: "2.5rem", lineHeight: 0.98, letterSpacing: "-0.01em",
              textTransform: "uppercase", color: "#ffffff", margin: 0, marginBottom: "0.6rem",
            }}>
              Completed{" "}
              <span style={{ color: "#22d3ee", textShadow: "0 0 15px rgba(6,182,212,0.4)" }}>Deployments</span>
            </h2>
            <p style={{
              fontFamily: "'Lora', serif", fontWeight: 300, fontStyle: "italic",
              fontSize: "1.05rem", letterSpacing: "0.01em", lineHeight: 1.55,
              color: "rgba(148,163,184,0.72)", margin: 0,
            }}>
              Success stories engineered for scale and performance.
            </p>
          </div>

          {/* Nav dots */}
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#22d3ee", boxShadow: "0 0 4px #22d3ee" }} />
            <div className="w-2 h-2 rounded-full bg-slate-700" />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="relative grid grid-cols-2 gap-6 flex-1" style={{ zIndex: 10, height: "78%" }}>
        {projects.map((project, i) => <GlassCard key={i} {...project} />)}
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 right-10 flex items-center gap-4" style={{ zIndex: 10 }}>
        <span style={{ fontFamily: "'Martian Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.12em", color: "rgba(6,182,212,0.45)", fontWeight: 300 }}>04</span>
        <div className="w-8" style={{ height: "1px", backgroundColor: "#1f2937" }} />
        <span style={{ fontFamily: "'Martian Mono', monospace", fontSize: "0.48rem", letterSpacing: "0.2em", color: "rgba(75,85,99,0.55)", textTransform: "uppercase", fontWeight: 300 }}>PORTFOLIO</span>
      </div>
    </div>
  );
}