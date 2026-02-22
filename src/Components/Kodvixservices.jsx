import { useState, useRef, useEffect } from "react";

const services = [
  {
    id: "01", title: "Application Development", tagline: "Build. Scale. Ship.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
      </svg>
    ),
    features: [
      { label: "Custom Software", desc: "Tailored solutions designed to address specific business challenges and operational needs." },
      { label: "Web Applications", desc: "Responsive and scalable web platforms built using modern technologies and frameworks." },
      { label: "Mobile Apps", desc: "Native and cross-platform applications for iOS and Android environments." },
    ],
    accent: "#22d3ee", extra: null,
  },
  {
    id: "02", title: "Cloud & Infrastructure", tagline: "Deploy. Manage. Grow.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
        <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
      </svg>
    ),
    features: [
      { label: "Cloud Solutions", desc: "End-to-end cloud migration, deployment, and infrastructure management for scalable operations." },
      { label: "Database Management", desc: "Optimized database architecture, performance tuning, and secure data maintenance." },
    ],
    accent: "#38bdf8", extra: null,
  },
  {
    id: "03", title: "Security & Compliance", tagline: "Protect. Monitor. Fortify.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    features: [
      { label: "Cybersecurity", desc: "Comprehensive security assessments, implementation strategies, and continuous monitoring to safeguard digital assets." },
    ],
    accent: "#67e8f9", extra: "status",
  },
  {
    id: "04", title: "Consulting & Support", tagline: "Advise. Align. Accelerate.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    features: [
      { label: "IT Consulting", desc: "Strategic technology advisory services to align IT initiatives with business objectives." },
      { label: "Support & Maintenance", desc: "Reliable technical support and proactive system maintenance for uninterrupted operations." },
    ],
    accent: "#22d3ee", extra: null,
  },
];

function BentoCard({ id, title, tagline, icon, features, accent, extra }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onTouchStart={() => setHov(true)}
      onTouchEnd={() => setTimeout(() => setHov(false), 800)}
      style={{
        position: "relative", borderRadius: "16px",
        padding: "clamp(1rem,2vw,1.6rem)",
        display: "flex", flexDirection: "column", overflow: "hidden",
        background: hov ? "rgba(12,22,44,0.82)" : "rgba(10,16,32,0.6)",
        backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
        border: hov ? "1px solid rgba(34,211,238,0.45)" : "1px solid rgba(34,211,238,0.1)",
        boxShadow: hov
          ? "0 8px 40px rgba(6,182,212,0.12),0 2px 8px rgba(0,0,0,0.4),inset 0 1px 0 rgba(255,255,255,0.03)"
          : "0 2px 12px rgba(0,0,0,0.3),inset 0 1px 0 rgba(255,255,255,0.02)",
        transform: hov ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.38s cubic-bezier(0.34,1.56,0.64,1)",
        cursor: "default", width: "100%", height: "100%", boxSizing: "border-box",
      }}
    >
      {/* Shimmer */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: `linear-gradient(90deg,transparent,${accent}80,transparent)`, opacity: hov ? 1 : 0, transition: "opacity 0.4s" }} />
      {/* Corner glow */}
      <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "180px", height: "180px", borderRadius: "50%", background: `radial-gradient(circle,${accent}28 0%,transparent 70%)`, transform: hov ? "scale(1.4)" : "scale(1)", transition: "transform 0.6s", pointerEvents: "none" }} />

      {/* Header row */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "10px", marginBottom: "0.8rem" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <span style={{ fontFamily: "'Martian Mono',monospace", fontSize: "0.48rem", letterSpacing: "0.24em", color: accent, opacity: 0.55, display: "block", marginBottom: "4px", fontWeight: 400 }}>{id}</span>
          <h3 style={{ fontFamily: "'Barlow',sans-serif", fontWeight: 700, fontSize: "clamp(0.85rem,1.4vw,1.05rem)", lineHeight: 1.2, letterSpacing: "-0.01em", color: hov ? "#f0fdff" : "#dde6f0", margin: 0, marginBottom: "3px", transition: "color 0.3s" }}>{title}</h3>
          <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 400, fontSize: "0.56rem", letterSpacing: "0.18em", color: "rgba(100,116,139,0.58)", textTransform: "uppercase" }}>{tagline}</span>
        </div>
        {/* Icon */}
        <div style={{ width: "38px", height: "38px", flexShrink: 0, borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(8,47,73,0.5)", border: hov ? `1px solid ${accent}99` : "1px solid rgba(6,182,212,0.2)", color: accent, filter: hov ? `drop-shadow(0 0 8px ${accent}80)` : "none", transition: "all 0.35s", boxSizing: "border-box" }}>
          {icon}
        </div>
      </div>

      {/* Divider */}
      <div style={{ width: "100%", height: "1px", background: `linear-gradient(90deg,${accent}40,transparent)`, marginBottom: "0.8rem", opacity: hov ? 1 : 0.4, transition: "opacity 0.3s" }} />

      {/* Features */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem", flex: 1 }}>
        {features.map((f, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "9px" }}>
            <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: accent, boxShadow: `0 0 5px ${accent}`, flexShrink: 0, marginTop: "6px" }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.16em", color: "rgba(203,213,225,0.9)", textTransform: "uppercase", display: "block", marginBottom: "2px" }}>{f.label}</span>
              <span style={{ fontFamily: "'Lora',serif", fontWeight: 300, fontSize: "clamp(0.72rem,1.1vw,0.84rem)", lineHeight: 1.65, color: "rgba(100,116,139,0.82)", display: "block", letterSpacing: "0.01em" }}>{f.desc}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Status */}
      {extra === "status" && (
        <div style={{ marginTop: "1rem", padding: "8px 12px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "rgba(8,47,73,0.3)", border: "1px solid rgba(6,182,212,0.12)" }}>
          <span style={{ fontFamily: "'Martian Mono',monospace", fontSize: "0.44rem", letterSpacing: "0.18em", color: "rgba(34,211,238,0.55)", textTransform: "uppercase", fontWeight: 400 }}>System_Status</span>
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

/* ── Mobile Horizontal Auto-Scroll Carousel ── */
function MobileCarousel() {
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const pauseTimerRef = useRef(null);

  // card width + gap (in px) — computed once after mount
  const CARD_W = 280;
  const GAP = 14;
  const STEP = CARD_W + GAP;
  const TOTAL_CARDS = services.length;
  // We render cards × 3 for seamless looping
  const COPIES = 3;
  const LOOP_WIDTH = TOTAL_CARDS * STEP;

  // Speed: px per frame (~60fps) → about 40px/s
  const SPEED = 0.55;

  const startAnim = () => {
    if (animRef.current) return;
    const tick = () => {
      if (!pausedRef.current) {
        posRef.current += SPEED;
        // Reset when we've scrolled one full set
        if (posRef.current >= LOOP_WIDTH) {
          posRef.current -= LOOP_WIDTH;
        }
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
        }
      }
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
  };

  const stopAnim = () => {
    if (animRef.current) {
      cancelAnimationFrame(animRef.current);
      animRef.current = null;
    }
  };

  useEffect(() => {
    startAnim();
    return () => stopAnim();
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(pauseTimerRef.current);
    pausedRef.current = true;
  };

  const handleMouseLeave = () => {
    // Resume after a brief pause so it feels intentional
    pauseTimerRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, 400);
  };

  const handleTouchStart = () => {
    clearTimeout(pauseTimerRef.current);
    pausedRef.current = true;
  };

  const handleTouchEnd = () => {
    pauseTimerRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, 2000);
  };

  // Duplicate cards for seamless loop
  const allCards = [...services, ...services, ...services];

  return (
    <div
      style={{ overflow: "hidden", width: "100%", position: "relative" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Fade edges */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "32px", background: "linear-gradient(90deg,#050810,transparent)", zIndex: 10, pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "32px", background: "linear-gradient(270deg,#050810,transparent)", zIndex: 10, pointerEvents: "none" }} />

      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: `${GAP}px`,
          willChange: "transform",
          // No CSS transition — JS drives it smoothly
        }}
      >
        {allCards.map((s, i) => (
          <div
            key={i}
            style={{
              width: `${CARD_W}px`,
              flexShrink: 0,
              // Give each card a proportional height based on content
              minHeight: "260px",
              display: "flex",
            }}
          >
            <BentoCard {...s} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Dot Indicators for mobile ── */
function DotIndicators({ activeIndex, total }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "1rem" }}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          style={{
            width: i === activeIndex ? "18px" : "6px",
            height: "6px",
            borderRadius: "3px",
            backgroundColor: i === activeIndex ? "#22d3ee" : "rgba(34,211,238,0.2)",
            boxShadow: i === activeIndex ? "0 0 6px rgba(34,211,238,0.6)" : "none",
            transition: "all 0.4s ease",
          }}
        />
      ))}
    </div>
  );
}

export default function KodVixServices() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 599);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="svc-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@300;400;500;600;700&family=Lora:ital,wght@0,300;0,400;1,300;1,400&family=Martian+Mono:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        @keyframes fadeUp     { from{opacity:0;transform:translateY(18px);}to{opacity:1;transform:translateY(0);} }
        @keyframes statusPulse{ 0%,100%{box-shadow:0 0 4px #22d3ee;}50%{box-shadow:0 0 12px #22d3ee,0 0 20px rgba(34,211,238,0.4);} }
        @keyframes lineExpand { from{width:0;opacity:0;}to{width:2rem;opacity:1;} }
        @keyframes gridFade   { from{opacity:0;}to{opacity:1;} }

        .svc-root {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background-color: #050810;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          padding: 4.5rem 4rem 3rem;
        }

        .svc-header  { position:relative;z-index:10;margin-bottom:2.75rem; }

        .svc-hrow {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .svc-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 16px;
          border: 1px solid rgba(34,211,238,0.15);
          border-radius: 999px;
          background: rgba(8,47,73,0.15);
          backdrop-filter: blur(8px);
          flex-shrink: 0;
        }

        .svc-grid {
          position: relative;
          z-index: 10;
          flex: 1;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(0.75rem,1.5vw,1.25rem);
          align-items: stretch;
        }

        .svc-footer {
          position: relative;
          z-index: 10;
          margin-top: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .svc-tags {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        /* Mobile carousel wrapper */
        .svc-carousel-wrap {
          position: relative;
          z-index: 10;
          flex: 1;
        }

        .svc-label { animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.05s both; }
        .svc-h2    { animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.18s both; }
        .svc-sub   { animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.28s both; }
        .svc-bdg   { animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.36s both; }
        .svc-c0    { animation: fadeUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.42s both; }
        .svc-c1    { animation: fadeUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.54s both; }
        .svc-c2    { animation: fadeUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.66s both; }
        .svc-c3    { animation: fadeUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.78s both; }
        .svc-ftx   { animation: fadeUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.88s both; }

        @media (max-width: 1023px) {
          .svc-root   { padding: 3.5rem 2rem 2.5rem; }
          .svc-header { margin-bottom: 2rem; }
          .svc-grid   { grid-template-columns: repeat(2, 1fr); }
          .svc-footer { margin-top: 1.75rem; }
        }

        @media (max-width: 599px) {
          .svc-root {
            padding: 2.5rem 0 2rem;
            min-height: fit-content;
          }
          .svc-header  { margin-bottom: 1.25rem; padding: 0 1rem; }
          .svc-hrow {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.85rem;
          }
          .svc-badge { align-self: flex-start; }
          .svc-footer {
            margin-top: 1.25rem;
            justify-content: center;
            padding: 0 1rem;
          }
          .svc-tags { display: none; }
          .bp-corner { width: 14px !important; height: 14px !important; }
          .svc-label { padding: 0 1rem; }
        }

        @media (max-width: 374px) {
          .svc-root { padding: 2rem 0 1.5rem; }
        }
      `}</style>

      {/* BG blobs */}
      <div style={{ position: "absolute", top: "-10%", left: "15%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle,rgba(6,182,212,0.07) 0%,transparent 70%)", filter: "blur(60px)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "-10%", right: "10%", width: "420px", height: "420px", borderRadius: "50%", background: "radial-gradient(circle,rgba(30,58,138,0.08) 0%,transparent 70%)", filter: "blur(70px)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, backgroundImage: "linear-gradient(rgba(34,211,238,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(34,211,238,0.025) 1px,transparent 1px)", backgroundSize: "55px 55px", animation: "gridFade 2s ease both" }} />

      {/* Blueprint corners */}
      {[
        { top: "1.25rem", left: "1.25rem", borderTop: "1.5px solid rgba(6,182,212,0.35)", borderLeft: "1.5px solid rgba(6,182,212,0.35)" },
        { top: "1.25rem", right: "1.25rem", borderTop: "1.5px solid rgba(6,182,212,0.35)", borderRight: "1.5px solid rgba(6,182,212,0.35)" },
        { bottom: "1.25rem", left: "1.25rem", borderBottom: "1.5px solid rgba(6,182,212,0.35)", borderLeft: "1.5px solid rgba(6,182,212,0.35)" },
        { bottom: "1.25rem", right: "1.25rem", borderBottom: "1.5px solid rgba(6,182,212,0.35)", borderRight: "1.5px solid rgba(6,182,212,0.35)" },
      ].map((s, i) => (
        <div key={i} className="bp-corner" style={{ position: "absolute", width: "18px", height: "18px", zIndex: 5, ...s }} />
      ))}

      {/* ── HEADER ── */}
      <div className="svc-header">
        <div className="svc-label" style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "0.9rem" }}>
          <div style={{ width: "2rem", height: "2px", borderRadius: "2px", backgroundColor: "#22d3ee", boxShadow: "0 0 8px rgba(34,211,238,0.8)", animation: "lineExpand 0.7s ease 0.05s both" }} />
          <span style={{ fontFamily: "'Martian Mono',monospace", fontSize: "0.58rem", letterSpacing: "0.26em", color: "#22d3ee", textTransform: "uppercase", fontWeight: 400 }}>Services</span>
        </div>

        <div className="svc-hrow">
          <div>
            <h2
              className="svc-h2"
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.6rem,5vw,3.8rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.01em",
                color: "#ffffff",
                margin: 0,
                marginBottom: "0.55rem",
                textTransform: "uppercase",
              }}
            >
              Integrated Service{" "}
              <span style={{ color: "#22d3ee", textShadow: "0 0 24px rgba(6,182,212,0.45),0 0 60px rgba(6,182,212,0.2)" }}>
                Ecosystem
              </span>
            </h2>
            <p
              className="svc-sub"
              style={{
                fontFamily: "'Lora',serif",
                fontWeight: 300,
                fontStyle: "italic",
                fontSize: "clamp(0.78rem,1.35vw,1.02rem)",
                letterSpacing: "0.015em",
                color: "rgba(148,163,184,0.72)",
                margin: 0,
                lineHeight: 1.55,
              }}
            >
              End-to-end solutions tailored for the modern digital enterprise.
            </p>
          </div>

          <div className="svc-badge svc-bdg">
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#22d3ee", boxShadow: "0 0 6px #22d3ee" }} />
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.18em", color: "#67e8f9", textTransform: "uppercase" }}>
              {services.length} Core Capabilities
            </span>
          </div>
        </div>
      </div>

      {/* ── CARDS: Mobile = Carousel, Desktop = Grid ── */}
      {isMobile ? (
        <div className="svc-carousel-wrap svc-c0">
          <MobileCarousel />
          {/* Scroll hint text */}
          <p style={{ textAlign: "center", fontFamily: "'Martian Mono',monospace", fontSize: "0.44rem", letterSpacing: "0.2em", color: "rgba(34,211,238,0.3)", marginTop: "0.9rem", textTransform: "uppercase" }}>
            ← Auto-scrolling · Hover to pause →
          </p>
        </div>
      ) : (
        <div className="svc-grid">
          {services.map((s, i) => (
            <div key={i} className={`svc-c${i}`} style={{ display: "flex" }}>
              <BentoCard {...s} />
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="svc-footer svc-ftx">
        <div className="svc-tags">
          {["Full-Stack", "Cloud-Native", "AI-Ready", "Enterprise-Grade"].map((tag, i) => (
            <span key={i} style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 500, fontSize: "0.6rem", letterSpacing: "0.18em", color: "rgba(34,211,238,0.4)", textTransform: "uppercase", padding: "4px 12px", border: "1px solid rgba(34,211,238,0.1)", borderRadius: "999px" }}>{tag}</span>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontFamily: "'Martian Mono',monospace", fontSize: "0.58rem", color: "rgba(6,182,212,0.45)", letterSpacing: "0.12em", fontWeight: 300 }}>03</span>
          <div style={{ width: "36px", height: "1px", backgroundColor: "rgba(31,41,55,0.8)" }} />
          <span style={{ fontFamily: "'Martian Mono',monospace", fontSize: "0.5rem", letterSpacing: "0.22em", color: "rgba(75,85,99,0.55)", textTransform: "uppercase", fontWeight: 300 }}>Services</span>
        </div>
      </div>
    </div>
  );
}