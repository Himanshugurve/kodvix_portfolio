export default function KodVixAbout() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#050810",
        display: "flex",
        overflow: "hidden",
      }}
    >
      <style>{`
        /*
        ╔══════════════════════════════════════════════════════╗
        ║           KODVIX ABOUT — TYPOGRAPHY SYSTEM           ║
        ╠══════════════════════════════════════════════════════╣
        ║  SECTION LABEL     → DM Mono 400, 0.24em tracking   ║
        ║  DISPLAY HEADING   → Outfit 800, -0.02em tracking    ║
        ║    "Are" → Cormorant Garamond 400 italic (contrast)  ║
        ║  BODY PARAGRAPH    → Cormorant Garamond 300, 1.75lh  ║
        ║    Inline strong   → Outfit 600 (brand name)         ║
        ║  APPROACH LABEL    → DM Mono 500, 0.2em tracking     ║
        ║  APPROACH BODY     → Cormorant Garamond 300          ║
        ║  STAT VALUES       → Outfit 800, display numbers     ║
        ║  STAT LABELS       → DM Mono 300, 0.16em tracking    ║
        ║  QUOTE TEXT        → Cormorant Garamond 300 italic   ║
        ║    "engines"       → Outfit 600, non-italic emphasis  ║
        ║  FLOATING TAG      → Outfit 700 / DM Mono 300        ║
        ║  SYSTEM LABELS     → DM Mono 300-400                 ║
        ╚══════════════════════════════════════════════════════╝
        */

        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Mono:wght@300;400;500&family=Outfit:wght@200;300;400;600;700;800&display=swap');

        *, *::before, *::after {
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fillBar {
          from { height: 0%; }
          to   { height: 33%; }
        }
        @keyframes pulseGlow {
          0%,100% { box-shadow: 0 0 8px rgba(34,211,238,0.5); }
          50%      { box-shadow: 0 0 18px rgba(34,211,238,0.9), 0 0 32px rgba(34,211,238,0.3); }
        }
        @keyframes scanMove {
          0%   { transform: translateY(-100%); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateY(400%); opacity: 0; }
        }
        @keyframes borderGlow {
          0%,100% { border-color: rgba(34,211,238,0.12); }
          50%      { border-color: rgba(34,211,238,0.32); }
        }
        @keyframes float {
          0%,100% { transform: translate(-50%,-50%) translateY(0); }
          50%      { transform: translate(-50%,-50%) translateY(-8px); }
        }
        @keyframes lineExpand {
          from { width: 0; opacity: 0; }
          to   { width: 2.5rem; opacity: 1; }
        }
        @keyframes blink {
          0%,100% { opacity: 1; }
          50%      { opacity: 0; }
        }

        .about-fade-1 { animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s  both; }
        .about-fade-2 { animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.25s both; }
        .about-fade-3 { animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.4s  both; }
        .about-fade-4 { animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.55s both; }
        .about-fade-5 { animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.7s  both; }

        .quote-card {
          animation: borderGlow 4.5s ease-in-out infinite;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .quote-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 44px rgba(6,182,212,0.18) !important;
        }
        .stat-item { transition: transform 0.25s ease; cursor: default; }
        .stat-item:hover { transform: translateY(-2px); }
        .approach-block { transition: border-color 0.3s, background 0.3s; }
        .approach-block:hover {
          border-color: rgba(34,211,238,0.28) !important;
          background: rgba(8,47,73,0.18) !important;
        }
        .img-scan { animation: scanMove 5s ease-in-out infinite; }
        .cursor-blink { animation: blink 1s step-end infinite; }

        /* ── LAYOUT WRAPPER ── */
        .about-wrapper {
          display: flex;
          flex-direction: row;
          width: 100%;
          min-height: 100vh;
        }

        /* ── VISUAL PANEL ── */
        .about-visual {
          position: relative;
          width: 42%;
          flex-shrink: 0;
          border-right: 1px solid rgba(22,78,99,0.3);
          overflow: hidden;
        }

        /* ── CONTENT PANEL ── */
        .about-content {
          position: relative;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: clamp(2rem,4vw,5rem) clamp(1.5rem,5vw,4.5rem);
          background-color: #050810;
          overflow: hidden;
        }

        /* ── STATS ROW ── */
        .stats-row {
          display: flex;
          gap: clamp(1.25rem,3vw,2.5rem);
          flex-wrap: wrap;
          margin-bottom: clamp(1.5rem,3vw,2.5rem);
        }

        /* ── MOBILE: stack vertically, image on top ── */
        @media (max-width: 767px) {
          .about-wrapper {
            flex-direction: column;
            min-height: auto;
          }

          .about-visual {
            width: 100%;
            height: 140px;
            border-right: none;
            border-bottom: 1px solid rgba(22,78,99,0.3);
            flex-shrink: 0;
          }

          /* Shrink the floating identity tag on mobile */
          .floating-tag {
            padding: 8px 14px !important;
            min-width: 110px !important;
            gap: 5px !important;
          }
          .floating-tag-name {
            font-size: 0.8rem !important;
          }
          .floating-tag-desc {
            font-size: 0.4rem !important;
          }

          /* Shrink blueprint corners */
          .blueprint-corner {
            width: 14px !important;
            height: 14px !important;
          }

          .about-content {
            padding: 1.75rem 1.25rem;
            justify-content: flex-start;
          }

          .stats-row {
            gap: 1rem;
          }

          /* Tighter approach block on mobile */
          .approach-block {
            padding: 12px 14px !important;
          }

          /* Smaller quote card padding */
          .quote-card {
            padding: 1rem 1.25rem !important;
          }

          /* Hide page number on very small screens */
          .page-number {
            display: none;
          }
        }

        /* ── TABLET ── */
        @media (min-width: 768px) and (max-width: 1023px) {
          .about-visual { width: 38%; }
          .about-content { padding: 2.5rem 2rem; }
        }
      `}</style>

      <div className="about-wrapper">

        {/* ── LEFT / TOP VISUAL PANEL ── */}
        <div className="about-visual">
          <img
            alt="Digital Brain Neural Network"
            src="https://page.gensparksite.com/slides_images/a26947ec5f6f9985f2f76d9ecb608a24.webp"
            style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", opacity:0.85 }}
          />
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg, rgba(5,8,16,0.55) 0%, rgba(15,23,42,0.3) 100%)" }} />
          <div className="img-scan" style={{ position:"absolute", left:0, right:0, height:"3px", background:"linear-gradient(90deg, transparent, rgba(34,211,238,0.6), transparent)", pointerEvents:"none", zIndex:3, top:"20%" }} />
          <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)", backgroundSize:"40px 40px", zIndex:2 }} />

          {/* Blueprint corners */}
          {[
            { top:"1.25rem",    left:"1.25rem",  borderTop:"1.5px solid rgba(6,182,212,0.5)",    borderLeft:"1.5px solid rgba(6,182,212,0.5)"  },
            { top:"1.25rem",    right:"1.25rem", borderTop:"1.5px solid rgba(6,182,212,0.5)",    borderRight:"1.5px solid rgba(6,182,212,0.5)" },
            { bottom:"1.25rem", left:"1.25rem",  borderBottom:"1.5px solid rgba(6,182,212,0.5)", borderLeft:"1.5px solid rgba(6,182,212,0.5)"  },
            { bottom:"1.25rem", right:"1.25rem", borderBottom:"1.5px solid rgba(6,182,212,0.5)", borderRight:"1.5px solid rgba(6,182,212,0.5)" },
          ].map((s,i) => (
            <div key={i} className="blueprint-corner" style={{ position:"absolute", width:"20px", height:"20px", zIndex:4, ...s }} />
          ))}

          {/* System label — DM Mono 300/400 */}
          <div style={{ position:"absolute", bottom:"1rem", left:"1.25rem", zIndex:4, display:"flex", flexDirection:"column", gap:"4px" }}>
            <span style={{ fontFamily:"'DM Mono', monospace", fontWeight:400, fontSize:"0.48rem", letterSpacing:"0.22em", color:"rgba(34,211,238,0.65)", textTransform:"uppercase" }}>
              NEURAL_NET_V2.0
            </span>
            <div style={{ display:"flex", alignItems:"center", gap:"6px" }}>
              <div style={{ width:"5px", height:"5px", borderRadius:"50%", backgroundColor:"#22d3ee", animation:"pulseGlow 2.5s ease-in-out infinite", flexShrink:0 }} />
              <span style={{ fontFamily:"'DM Mono', monospace", fontWeight:300, fontSize:"0.43rem", letterSpacing:"0.2em", color:"rgba(34,211,238,0.38)", textTransform:"uppercase" }}>
                PROCESSING_NODES<span className="cursor-blink">_</span>
              </span>
            </div>
          </div>

          {/* Floating identity tag */}
          <div
            className="floating-tag"
            style={{
              position:"absolute", top:"50%", left:"50%",
              zIndex:4,
              padding:"clamp(10px,1.5vw,14px) clamp(16px,2vw,22px)",
              border:"1px solid rgba(34,211,238,0.22)", borderRadius:"10px",
              background:"rgba(5,8,16,0.65)", backdropFilter:"blur(14px)",
              animation:"float 4s ease-in-out infinite",
              display:"flex", flexDirection:"column", alignItems:"center", gap:"7px",
              minWidth:"138px",
            }}
          >
            <span
              className="floating-tag-name"
              style={{ fontFamily:"'Outfit', sans-serif", fontWeight:700, fontSize:"clamp(0.9rem,1.5vw,1.1rem)", color:"#22d3ee", letterSpacing:"0.04em" }}
            >
              KodVix
            </span>
            <div style={{ width:"100%", height:"1px", background:"linear-gradient(90deg, transparent, rgba(34,211,238,0.45), transparent)" }} />
            <span
              className="floating-tag-desc"
              style={{ fontFamily:"'DM Mono', monospace", fontWeight:300, fontSize:"0.47rem", letterSpacing:"0.18em", color:"rgba(103,232,249,0.62)", textTransform:"uppercase" }}
            >
              Digital Powerhouse
            </span>
          </div>
        </div>

        {/* ── RIGHT / BOTTOM CONTENT PANEL ── */}
        <div className="about-content">
          <div style={{ position:"absolute", top:"-5rem", right:"-5rem", width:"28rem", height:"28rem", borderRadius:"50%", background:"radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)", pointerEvents:"none" }} />
          <div style={{ position:"absolute", bottom:"-8rem", left:"-4rem", width:"32rem", height:"32rem", borderRadius:"50%", background:"radial-gradient(circle, rgba(30,58,138,0.05) 0%, transparent 70%)", pointerEvents:"none" }} />
          <div style={{ position:"absolute", inset:0, pointerEvents:"none", backgroundImage:"linear-gradient(rgba(34,211,238,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.025) 1px, transparent 1px)", backgroundSize:"50px 50px" }} />

          <div style={{ position:"relative", zIndex:10, maxWidth:"52rem", width:"100%" }}>

            {/* ── SECTION LABEL — DM Mono 400 ── */}
            <div className="about-fade-1" style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"clamp(0.6rem,1.8vw,1.35rem)" }}>
              <div style={{ width:"2.5rem", height:"2px", backgroundColor:"#22d3ee", boxShadow:"0 0 8px rgba(34,211,238,0.8)", borderRadius:"2px", animation:"lineExpand 0.8s ease 0.1s both" }} />
              <span style={{
                fontFamily: "'DM Mono', monospace",
                fontWeight: 400,
                fontSize: "clamp(0.48rem,0.78vw,0.62rem)",
                letterSpacing: "0.24em",
                color: "#22d3ee",
                textTransform: "uppercase",
              }}>
                The Narrative
              </span>
            </div>

            {/* ── DISPLAY HEADING ── */}
            <h2
              className="about-fade-2"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.7rem,5.5vw,4rem)",
                lineHeight: 0.98,
                letterSpacing: "-0.02em",
                color: "#ffffff",
                margin: 0,
                marginBottom: "clamp(0.75rem,2vw,1.5rem)",
              }}
            >
              Who We{" "}
              <span style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                fontStyle: "italic",
                color: "#22d3ee",
                textShadow: "0 0 24px rgba(6,182,212,0.45), 0 0 50px rgba(6,182,212,0.2)",
                letterSpacing: "0.01em",
              }}>
                Are
              </span>
            </h2>

            {/* Neon divider */}
            <div
              className="about-fade-2"
              style={{ width:"clamp(2rem,5vw,4rem)", height:"2px", borderRadius:"2px", backgroundColor:"#22d3ee", boxShadow:"0 0 10px rgba(34,211,238,0.9), 0 0 24px rgba(34,211,238,0.4)", marginBottom:"clamp(0.9rem,2.5vw,2rem)" }}
            />

            {/* ── BODY TEXT ── */}
            <p
              className="about-fade-3"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(0.95rem,1.9vw,1.4rem)",
                lineHeight: 1.75,
                color: "rgba(226,232,240,0.75)",
                margin: 0,
                marginBottom: "clamp(1rem,3vw,2.5rem)",
              }}
            >
              <strong style={{ fontFamily:"'Outfit', sans-serif", fontWeight:600, color:"#ffffff", fontStyle:"normal", letterSpacing:"-0.01em" }}>
                KodVix Technologies
              </strong>{" "}
              is a full-service digital powerhouse specializing in high-performance web ecosystems — where{" "}
              <em style={{ fontStyle:"italic", color:"#67e8f9", fontWeight:300 }}>
                technical precision meets modern digital strategy
              </em>.
            </p>

            {/* ── APPROACH BLOCK ── */}
            <div
              className="approach-block about-fade-3"
              style={{ display:"flex", gap:"clamp(10px,2vw,20px)", alignItems:"flex-start", padding:"clamp(12px,2vw,20px) clamp(14px,2.5vw,24px)", border:"1px solid rgba(6,182,212,0.13)", borderRadius:"12px", backgroundColor:"rgba(8,47,73,0.08)", marginBottom:"clamp(1rem,3vw,2.5rem)", cursor:"default" }}
            >
              <div style={{ position:"relative", width:"3px", flexShrink:0, borderRadius:"3px", backgroundColor:"rgba(22,78,99,0.35)", alignSelf:"stretch", minHeight:"52px", overflow:"hidden" }}>
                <div style={{ position:"absolute", top:0, left:0, width:"100%", height:"33%", backgroundColor:"#22d3ee", boxShadow:"0 0 8px rgba(34,211,238,0.8)", borderRadius:"3px", animation:"fillBar 1.2s ease 0.5s both" }} />
              </div>
              <div>
                <p style={{ fontFamily:"'DM Mono', monospace", fontWeight:500, fontSize:"clamp(0.48rem,0.78vw,0.62rem)", letterSpacing:"0.2em", color:"#67e8f9", textTransform:"uppercase", margin:0, marginBottom:"8px" }}>
                  Our Approach
                </p>
                <p style={{ fontFamily:"'Cormorant Garamond', serif", fontWeight:300, fontSize:"clamp(0.85rem,1.45vw,1.1rem)", lineHeight:1.7, color:"rgba(148,163,184,0.88)", margin:0 }}>
                  From empowering B2B infrastructure to crafting captivating B2C eCommerce experiences, we bridge the gap between technical precision and cutting-edge digital innovation.
                </p>
              </div>
            </div>

            {/* ── STATS ── */}
            <div className="stats-row about-fade-4">
              {[
                { value:"50+",  label:"Projects Delivered"  },
                { value:"3+",   label:"Years Experience"    },
                { value:"100%", label:"Client Satisfaction" },
              ].map((stat,i) => (
                <div key={i} className="stat-item" style={{ display:"flex", flexDirection:"column", gap:"4px", minWidth:"64px" }}>
                  <span style={{ fontFamily:"'Outfit', sans-serif", fontWeight:800, fontSize:"clamp(1.3rem,3.2vw,2.1rem)", lineHeight:1, letterSpacing:"-0.02em", color:"#22d3ee", textShadow:"0 0 22px rgba(34,211,238,0.38)" }}>
                    {stat.value}
                  </span>
                  <span style={{ fontFamily:"'DM Mono', monospace", fontWeight:300, fontSize:"clamp(0.43rem,0.7vw,0.57rem)", letterSpacing:"0.16em", color:"rgba(100,116,139,0.68)", textTransform:"uppercase" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* ── QUOTE CARD ── */}
            <div
              className="quote-card about-fade-5"
              style={{ position:"relative", overflow:"hidden", borderRadius:"14px", padding:"clamp(0.9rem,2.5vw,2rem) clamp(1.1rem,3vw,2.25rem)", background:"rgba(12,20,38,0.5)", backdropFilter:"blur(14px)", WebkitBackdropFilter:"blur(14px)", border:"1px solid rgba(34,211,238,0.12)", boxShadow:"0 4px 28px rgba(6,182,212,0.08), inset 0 1px 0 rgba(255,255,255,0.03)" }}
            >
              <div style={{ position:"absolute", top:0, left:0, width:"3px", height:"100%", background:"linear-gradient(180deg, #22d3ee, rgba(34,211,238,0.15))", boxShadow:"0 0 12px rgba(34,211,238,0.55)" }} />
              <div style={{ position:"absolute", top:"0.85rem", right:"1rem" }}>
                <svg style={{ width:"clamp(20px,3vw,36px)", height:"clamp(20px,3vw,36px)", color:"rgba(6,182,212,0.15)", display:"block" }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p style={{ fontFamily:"'Cormorant Garamond', serif", fontStyle:"italic", fontWeight:300, fontSize:"clamp(0.95rem,1.7vw,1.3rem)", lineHeight:1.6, color:"rgba(226,232,240,0.88)", margin:0, paddingRight:"clamp(1.5rem,4vw,3.5rem)", position:"relative", zIndex:1 }}>
                "We don't just build software — we build the{" "}
                <strong style={{ fontFamily:"'Outfit', sans-serif", fontWeight:600, fontStyle:"normal", color:"#67e8f9", letterSpacing:"-0.01em" }}>engines</strong>
                {" "}of business innovation."
              </p>
            </div>
          </div>

          {/* Page number */}
          <div className="page-number" style={{ position:"absolute", bottom:"1.5rem", right:"1.75rem", display:"flex", alignItems:"center", gap:"12px", zIndex:10 }}>
            <span style={{ fontFamily:"'DM Mono', monospace", fontWeight:300, fontSize:"0.57rem", color:"rgba(6,182,212,0.42)", letterSpacing:"0.12em" }}>02</span>
            <div style={{ width:"40px", height:"1px", backgroundColor:"rgba(31,41,55,0.7)" }} />
            <span style={{ fontFamily:"'DM Mono', monospace", fontWeight:300, fontSize:"0.51rem", letterSpacing:"0.2em", color:"rgba(75,85,99,0.48)", textTransform:"uppercase" }}>Identity</span>
          </div>
        </div>

      </div>
    </div>
  );
}