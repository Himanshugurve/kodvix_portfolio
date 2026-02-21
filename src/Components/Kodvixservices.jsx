import { useState } from "react";

const services = [
  {
    id: "01",
    title: "Application Development",
    tagline: "Build. Scale. Ship.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    features: [
      { label: "Custom Software", desc: "Tailored solutions designed to address specific business challenges and operational needs." },
      { label: "Web Applications", desc: "Responsive and scalable web platforms built using modern technologies and frameworks." },
      { label: "Mobile Apps", desc: "Native and cross-platform applications for iOS and Android environments." },
    ],
    accent: "#22d3ee",
    extra: null,
  },
  {
    id: "02",
    title: "Cloud & Infrastructure",
    tagline: "Deploy. Manage. Grow.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
        <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    features: [
      { label: "Cloud Solutions", desc: "End-to-end cloud migration, deployment, and infrastructure management for scalable operations." },
      { label: "Database Management", desc: "Optimized database architecture, performance tuning, and secure data maintenance." },
    ],
    accent: "#38bdf8",
    extra: null,
  },
  {
    id: "03",
    title: "Security & Compliance",
    tagline: "Protect. Monitor. Fortify.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    features: [
      { label: "Cybersecurity", desc: "Comprehensive security assessments, implementation strategies, and continuous monitoring to safeguard digital assets." },
    ],
    accent: "#67e8f9",
    extra: "status",
  },
  {
    id: "04",
    title: "Consulting & Support",
    tagline: "Advise. Align. Accelerate.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    features: [
      { label: "IT Consulting", desc: "Strategic technology advisory services to align IT initiatives with business objectives." },
      { label: "Support & Maintenance", desc: "Reliable technical support and proactive system maintenance for uninterrupted operations." },
    ],
    accent: "#22d3ee",
    extra: null,
  },
];

function BentoCard({ id, title, tagline, icon, features, accent, extra }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "16px",
        padding: "clamp(1.25rem, 2vw, 1.75rem)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: hovered ? "rgba(12,22,44,0.75)" : "rgba(10,16,32,0.55)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: hovered ? "1px solid rgba(34,211,238,0.45)" : "1px solid rgba(34,211,238,0.1)",
        boxShadow: hovered
          ? "0 8px 40px rgba(6,182,212,0.12), 0 2px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03)"
          : "0 2px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.02)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.38s cubic-bezier(0.34,1.56,0.64,1)",
        cursor: "default",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Top shimmer */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: `linear-gradient(90deg, transparent 0%, ${accent}80 50%, transparent 100%)`,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s ease",
      }} />

      {/* Corner glow */}
      <div style={{
        position: "absolute", top: "-60px", right: "-60px",
        width: "180px", height: "180px", borderRadius: "50%",
        background: `radial-gradient(circle, ${accent}28 0%, transparent 70%)`,
        transform: hovered ? "scale(1.4)" : "scale(1)",
        transition: "transform 0.6s ease",
        pointerEvents: "none",
      }} />

      {/* ── HEADER ROW ── */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", marginBottom: "1rem" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Service number — refined mono label */}
          <span style={{
            fontFamily: "'Martian Mono', 'IBM Plex Mono', monospace",
            fontSize: "0.52rem",
            letterSpacing: "0.25em",
            color: accent,
            opacity: 0.55,
            display: "block",
            marginBottom: "6px",
            fontWeight: 400,
          }}>
            {id}
          </span>

          {/* Title — sharp editorial display */}
          <h3 style={{
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(0.92rem, 1.45vw, 1.08rem)",
            lineHeight: 1.18,
            letterSpacing: "-0.01em",
            color: hovered ? "#f0fdff" : "#dde6f0",
            margin: 0,
            marginBottom: "5px",
            transition: "color 0.3s",
          }}>
            {title}
          </h3>

          {/* Tagline — fine-weight uppercase tracking */}
          <span style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 400,
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            color: "rgba(100,116,139,0.6)",
            textTransform: "uppercase",
          }}>
            {tagline}
          </span>
        </div>

        {/* Icon */}
        <div style={{
          width: "44px", height: "44px", flexShrink: 0,
          borderRadius: "10px",
          display: "flex", alignItems: "center", justifyContent: "center",
          backgroundColor: "rgba(8,47,73,0.5)",
          border: hovered ? `1px solid ${accent}99` : "1px solid rgba(6,182,212,0.2)",
          color: accent,
          filter: hovered ? `drop-shadow(0 0 8px ${accent}80)` : "none",
          transition: "all 0.35s ease",
          boxSizing: "border-box",
        }}>
          {icon}
        </div>
      </div>

      {/* Divider */}
      <div style={{
        width: "100%", height: "1px",
        background: `linear-gradient(90deg, ${accent}40 0%, transparent 100%)`,
        marginBottom: "1rem",
        opacity: hovered ? 1 : 0.4,
        transition: "opacity 0.3s",
      }} />

      {/* ── FEATURES ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", flex: 1 }}>
        {features.map((f, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
            <div style={{
              width: "5px", height: "5px", borderRadius: "50%",
              backgroundColor: accent, boxShadow: `0 0 5px ${accent}`,
              flexShrink: 0, marginTop: "6px",
            }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              {/* Feature label — tight condensed caps */}
              <span style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "0.66rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                color: "rgba(203,213,225,0.9)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "4px",
              }}>
                {f.label}
              </span>

              {/* Feature description — elegant light serif */}
              <span style={{
                fontFamily: "'Lora', serif",
                fontWeight: 300,
                fontStyle: "normal",
                fontSize: "clamp(0.76rem, 1.1vw, 0.84rem)",
                lineHeight: 1.7,
                color: "rgba(100,116,139,0.82)",
                display: "block",
                letterSpacing: "0.01em",
              }}>
                {f.desc}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ── STATUS EXTRA ── */}
      {extra === "status" && (
        <div style={{
          marginTop: "1.25rem",
          padding: "9px 14px",
          borderRadius: "8px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          backgroundColor: "rgba(8,47,73,0.3)",
          border: "1px solid rgba(6,182,212,0.12)",
        }}>
          <span style={{
            fontFamily: "'Martian Mono', 'IBM Plex Mono', monospace",
            fontSize: "0.48rem",
            letterSpacing: "0.2em",
            color: "rgba(34,211,238,0.55)",
            textTransform: "uppercase",
            fontWeight: 400,
          }}>
            System_Status
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#22d3ee", boxShadow: "0 0 6px #22d3ee", animation: "statusPulse 2s ease-in-out infinite" }} />
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "rgba(6,182,212,0.25)" }} />
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "rgba(6,182,212,0.25)" }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default function KodVixServices() {
  return (
    <div style={{
      position: "relative",
      width: "100%",
      minHeight: "100vh",
      backgroundColor: "#050810",
      display: "flex",
      flexDirection: "column",
      padding: "clamp(2rem, 5vw, 4rem) clamp(1.5rem, 5vw, 4rem)",
      boxSizing: "border-box",
      overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@300;400;500;600;700&family=Lora:ital,wght@0,300;0,400;1,300;1,400&family=Martian+Mono:wght@300;400;500&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes statusPulse {
          0%, 100% { box-shadow: 0 0 4px #22d3ee; }
          50% { box-shadow: 0 0 12px #22d3ee, 0 0 20px rgba(34,211,238,0.4); }
        }
        @keyframes lineExpand {
          from { width: 0; opacity: 0; }
          to { width: 2rem; opacity: 1; }
        }
        @keyframes gridFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .svc-label  { animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.05s both; }
        .svc-h2     { animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.18s both; }
        .svc-sub    { animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s  both; }
        .svc-badge  { animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.38s both; }
        .svc-card-0 { animation: fadeUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.42s both; }
        .svc-card-1 { animation: fadeUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.54s both; }
        .svc-card-2 { animation: fadeUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.66s both; }
        .svc-card-3 { animation: fadeUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.78s both; }
        .svc-footer { animation: fadeUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.9s both; }

        .svc-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(0.75rem, 1.5vw, 1.25rem);
          align-items: stretch;
        }
        @media (max-width: 1199px) {
          .svc-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 599px) {
          .svc-grid { grid-template-columns: 1fr; }
          .svc-header-row { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>

      {/* Background blobs */}
      <div style={{ position: "absolute", top: "-10%", left: "15%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "-10%", right: "10%", width: "420px", height: "420px", borderRadius: "50%", background: "radial-gradient(circle, rgba(30,58,138,0.08) 0%, transparent 70%)", filter: "blur(70px)", pointerEvents: "none", zIndex: 0 }} />

      {/* Faint grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage: "linear-gradient(rgba(34,211,238,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.025) 1px, transparent 1px)",
        backgroundSize: "55px 55px",
        animation: "gridFade 2s ease both",
      }} />

      {/* ── HEADER ── */}
      <div style={{ position: "relative", zIndex: 10, marginBottom: "clamp(1.75rem, 3.5vw, 2.75rem)" }}>

        {/* Label row */}
        <div className="svc-label" style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "clamp(0.6rem, 1.2vw, 1rem)" }}>
          <div style={{ width: "2rem", height: "2px", borderRadius: "2px", backgroundColor: "#22d3ee", boxShadow: "0 0 8px rgba(34,211,238,0.8)", animation: "lineExpand 0.7s ease 0.05s both" }} />
          <span style={{
            fontFamily: "'Martian Mono', 'IBM Plex Mono', monospace",
            fontSize: "0.58rem",
            letterSpacing: "0.26em",
            color: "#22d3ee",
            textTransform: "uppercase",
            fontWeight: 400,
          }}>
            Services
          </span>
        </div>

        {/* Heading row */}
        <div className="svc-header-row" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            {/* Main headline — wide condensed display weight */}
            <h2 className="svc-h2" style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5.5vw, 4rem)",
              lineHeight: 0.98,
              letterSpacing: "-0.01em",
              color: "#ffffff",
              margin: 0,
              marginBottom: "0.65rem",
              textTransform: "uppercase",
            }}>
              Integrated Service{" "}
              <span style={{ color: "#22d3ee", textShadow: "0 0 24px rgba(6,182,212,0.45), 0 0 60px rgba(6,182,212,0.2)" }}>
                Ecosystem
              </span>
            </h2>

            {/* Subheading — elegant light roman Lora */}
            <p className="svc-sub" style={{
              fontFamily: "'Lora', serif",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(0.875rem, 1.35vw, 1.05rem)",
              letterSpacing: "0.015em",
              color: "rgba(148,163,184,0.72)",
              margin: 0,
              lineHeight: 1.55,
            }}>
              End-to-end solutions tailored for the modern digital enterprise.
            </p>
          </div>

          {/* Badge */}
          <div className="svc-badge" style={{
            display: "flex", alignItems: "center", gap: "10px",
            padding: "8px 16px",
            border: "1px solid rgba(34,211,238,0.15)", borderRadius: "999px",
            backgroundColor: "rgba(8,47,73,0.15)", backdropFilter: "blur(8px)",
            flexShrink: 0,
          }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#22d3ee", boxShadow: "0 0 6px #22d3ee" }} />
            <span style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              color: "#67e8f9",
              textTransform: "uppercase",
            }}>
              {services.length} Core Capabilities
            </span>
          </div>
        </div>
      </div>

      {/* ── CARDS ── */}
      <div className="svc-grid" style={{ position: "relative", zIndex: 10, flex: 1 }}>
        {services.map((s, i) => (
          <div key={i} className={`svc-card-${i}`} style={{ display: "flex" }}>
            <BentoCard {...s} />
          </div>
        ))}
      </div>

      {/* ── FOOTER ── */}
      <div className="svc-footer" style={{
        position: "relative", zIndex: 10,
        marginTop: "clamp(1.5rem, 3vw, 2.5rem)",
        display: "flex", alignItems: "center",
        justifyContent: "space-between", flexWrap: "wrap", gap: "1rem",
      }}>
        {/* Tags */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
          {["Full-Stack", "Cloud-Native", "AI-Ready", "Enterprise-Grade"].map((tag, i) => (
            <span key={i} style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 500,
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              color: "rgba(34,211,238,0.4)",
              textTransform: "uppercase",
              padding: "4px 12px",
              border: "1px solid rgba(34,211,238,0.1)",
              borderRadius: "999px",
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Page indicator */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{
            fontFamily: "'Martian Mono', 'IBM Plex Mono', monospace",
            fontSize: "0.58rem",
            color: "rgba(6,182,212,0.45)",
            letterSpacing: "0.12em",
            fontWeight: 300,
          }}>03</span>
          <div style={{ width: "36px", height: "1px", backgroundColor: "rgba(31,41,55,0.8)" }} />
          <span style={{
            fontFamily: "'Martian Mono', 'IBM Plex Mono', monospace",
            fontSize: "0.5rem",
            letterSpacing: "0.22em",
            color: "rgba(75,85,99,0.55)",
            textTransform: "uppercase",
            fontWeight: 300,
          }}>Services</span>
        </div>
      </div>
    </div>
  );
}