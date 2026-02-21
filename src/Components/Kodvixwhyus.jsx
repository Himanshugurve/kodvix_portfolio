import { useState } from "react";

const CrosshairsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" style={{ display:"block",flexShrink:0 }}>
    <circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/><circle cx="12" cy="12" r="9"/>
  </svg>
);
const LayersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ display:"block",flexShrink:0 }}>
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
);
const HandshakeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ display:"block",flexShrink:0 }}>
    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
  </svg>
);
const HeadsetIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ display:"block",flexShrink:0 }}>
    <path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>
  </svg>
);
const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ display:"block",flexShrink:0 }}>
    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
);

const features = [
  { num:"01", icon:<CrosshairsIcon/>, title:"Strategic Precision", desc:"We combine technical expertise with deep market insight to ensure every line of code serves a clear business purpose.", accent:"#22d3ee" },
  { num:"02", icon:<LayersIcon/>, title:"Scalable Architecture", desc:"Every solution is architected to grow seamlessly as your business expands, preventing future technical debt.", accent:"#38bdf8" },
  { num:"03", icon:<HandshakeIcon/>, title:"Client-Centric Execution", desc:"A proven track record of enterprise-level execution with transparent communication and agile delivery protocols.", accent:"#67e8f9" },
  { num:"04", icon:<HeadsetIcon/>, title:"24/7 Availability", desc:"Round-the-clock support and real-time monitoring to ensure your digital assets are always protected and operational.", accent:"#22d3ee" },
];

function FeatureCard({ num, icon, title, desc, accent }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ position:"relative",borderRadius:"14px",padding:"clamp(1.1rem,2vw,1.75rem)",display:"flex",flexDirection:"column",overflow:"hidden",background:hovered?"rgba(10,18,36,0.85)":"rgba(8,14,28,0.55)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",border:hovered?`1px solid ${accent}55`:"1px solid rgba(255,255,255,0.06)",boxShadow:hovered?`0 8px 36px ${accent}12,0 2px 8px rgba(0,0,0,0.4),inset 0 1px 0 rgba(255,255,255,0.03)`:"0 2px 10px rgba(0,0,0,0.3),inset 0 1px 0 rgba(255,255,255,0.02)",transform:hovered?"translateY(-4px)":"translateY(0)",transition:"all 0.38s cubic-bezier(0.34,1.2,0.64,1)",cursor:"default",height:"100%",boxSizing:"border-box" }}>
      <div style={{ position:"absolute",top:0,left:0,right:0,height:"1px",background:`linear-gradient(90deg,transparent,${accent}80,transparent)`,opacity:hovered?1:0,transition:"opacity 0.4s ease" }} />
      <div style={{ position:"absolute",top:"-50px",right:"-50px",width:"160px",height:"160px",borderRadius:"50%",background:`radial-gradient(circle,${accent}20 0%,transparent 70%)`,transform:hovered?"scale(1.5)":"scale(1)",transition:"transform 0.6s ease",pointerEvents:"none" }} />

      <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1rem" }}>
        <div style={{ width:"44px",height:"44px",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,backgroundColor:hovered?`${accent}12`:"rgba(20,30,50,0.6)",border:hovered?`1px solid ${accent}50`:"1px solid rgba(51,65,85,0.4)",color:hovered?accent:"rgba(34,211,238,0.7)",boxShadow:hovered?`0 0 18px ${accent}40`:`0 0 10px ${accent}15`,transition:"all 0.35s ease",boxSizing:"border-box" }}>{icon}</div>
        <span style={{ fontFamily:"'Martian Mono',monospace",fontSize:"0.5rem",letterSpacing:"0.22em",color:"rgba(100,116,139,0.45)",fontWeight:300 }}>{num}</span>
      </div>

      <h3 style={{ fontFamily:"'Barlow',sans-serif",fontWeight:700,fontSize:"clamp(0.92rem,1.4vw,1.1rem)",lineHeight:1.2,letterSpacing:"-0.01em",color:hovered?"#f0fdff":"#e2e8f0",margin:0,marginBottom:"0.55rem",transition:"color 0.3s" }}>{title}</h3>
      <div style={{ width:"100%",height:"1px",background:`linear-gradient(90deg,${accent}40 0%,transparent 80%)`,marginBottom:"0.7rem",opacity:hovered?1:0.35,transition:"opacity 0.3s" }} />
      <p style={{ fontFamily:"'Lora',serif",fontWeight:300,fontSize:"clamp(0.78rem,1.2vw,0.9rem)",lineHeight:1.72,color:hovered?"rgba(203,213,225,0.9)":"rgba(100,116,139,0.85)",margin:0,transition:"color 0.3s" }}>{desc}</p>
    </div>
  );
}

function WideCard() {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ position:"relative",borderRadius:"14px",padding:"clamp(1.1rem,2vw,1.75rem)",display:"flex",alignItems:"center",overflow:"hidden",background:hovered?"rgba(10,18,36,0.85)":"rgba(8,14,28,0.55)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",border:hovered?"1px solid rgba(34,211,238,0.45)":"1px solid rgba(255,255,255,0.06)",boxShadow:hovered?"0 8px 36px rgba(6,182,212,0.12),0 2px 8px rgba(0,0,0,0.4)":"0 2px 10px rgba(0,0,0,0.3)",transform:hovered?"translateY(-4px)":"translateY(0)",transition:"all 0.38s cubic-bezier(0.34,1.2,0.64,1)",cursor:"default",flexWrap:"wrap",gap:"clamp(0.85rem,2.5vw,2rem)",boxSizing:"border-box" }}>
      <div style={{ position:"absolute",top:0,left:0,right:0,height:"1px",background:"linear-gradient(90deg,transparent,rgba(34,211,238,0.7),transparent)",opacity:hovered?1:0,transition:"opacity 0.4s ease" }} />
      <div style={{ position:"absolute",left:"-4rem",top:"50%",transform:"translateY(-50%)",width:"300px",height:"300px",borderRadius:"50%",background:"radial-gradient(circle,rgba(6,182,212,0.06) 0%,transparent 70%)",pointerEvents:"none" }} />

      <div style={{ width:"48px",height:"48px",borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,backgroundColor:hovered?"rgba(34,211,238,0.1)":"rgba(20,30,50,0.6)",border:hovered?"1px solid rgba(34,211,238,0.5)":"1px solid rgba(51,65,85,0.4)",color:"#22d3ee",boxShadow:hovered?"0 0 20px rgba(34,211,238,0.35)":"0 0 10px rgba(34,211,238,0.12)",transition:"all 0.35s ease",boxSizing:"border-box" }}><ClockIcon /></div>

      <div style={{ flex:1,minWidth:"160px",paddingRight:"clamp(0.75rem,2.5vw,2rem)",borderRight:"1px solid rgba(51,65,85,0.4)" }}>
        <h3 style={{ fontFamily:"'Barlow',sans-serif",fontWeight:700,fontSize:"clamp(0.95rem,1.6vw,1.2rem)",lineHeight:1.2,letterSpacing:"-0.01em",color:hovered?"#f0fdff":"#e2e8f0",margin:0,marginBottom:"0.4rem",transition:"color 0.3s" }}>On-Time Delivery</h3>
        <p style={{ fontFamily:"'Lora',serif",fontWeight:300,fontSize:"clamp(0.78rem,1.2vw,0.9rem)",lineHeight:1.7,color:hovered?"rgba(203,213,225,0.9)":"rgba(100,116,139,0.85)",margin:0,transition:"color 0.3s" }}>
          Rigorous project management protocols ensure we meet deadlines without compromising quality or performance.
        </p>
      </div>

      <div style={{ display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"4px",flexShrink:0,minWidth:"72px",opacity:hovered?1:0.75,transition:"opacity 0.3s" }}>
        <span style={{ fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,fontSize:"clamp(1.6rem,3vw,2.5rem)",lineHeight:1,color:"#22d3ee",textShadow:"0 0 20px rgba(34,211,238,0.5)" }}>100%</span>
        <div style={{ width:"100%",height:"1px",background:"linear-gradient(90deg,transparent,rgba(34,211,238,0.4),transparent)",margin:"4px 0" }} />
        <span style={{ fontFamily:"'Martian Mono',monospace",fontSize:"0.46rem",letterSpacing:"0.2em",color:"rgba(100,116,139,0.55)",textTransform:"uppercase",fontWeight:300 }}>Commitment</span>
      </div>
    </div>
  );
}

export default function KodVixWhyUs() {
  return (
    <div className="why-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@300;400;500;600;700&family=Lora:ital,wght@0,300;0,400;1,300;1,400&family=Martian+Mono:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        @keyframes fadeUp    { from{opacity:0;transform:translateY(18px);}to{opacity:1;transform:translateY(0);} }
        @keyframes lineExpand{ from{width:0;opacity:0;}to{width:2rem;opacity:1;} }
        @keyframes dotPulse  { 0%,100%{box-shadow:0 0 4px #22d3ee;}50%{box-shadow:0 0 12px #22d3ee,0 0 24px rgba(34,211,238,0.3);} }

        /* ── ROOT ──
           KEY FIX: position:relative (not absolute), clear overflow,
           no negative margins. Sections stack naturally in document flow.
        */
        .why-root {
          position: relative;        /* normal flow — no overlap with siblings */
          width: 100%;
          min-height: 100vh;
          background-color: #050810;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          color: #ffffff;
          /* padding: top right/left bottom — generous top on all sizes */
          padding: 5rem 4rem 3rem;
        }

        /* ── HEADER ── */
        .why-header {
          position: relative;
          z-index: 10;              /* always above bg decorations */
          margin-bottom: clamp(1.75rem, 3.5vw, 2.75rem);
        }

        /* ── HEADING ROW ── */
        .why-hrow {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        /* ── GRID: 4-col desktop, 2-col tablet, 1-col mobile ── */
        .why-grid {
          position: relative;
          z-index: 10;
          flex: 1;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(0.75rem, 1.5vw, 1.1rem);
        }
        .why-wide-span { grid-column: 1 / -1; }

        /* ── FOOTER ── */
        .why-footer {
          position: relative;
          z-index: 10;
          margin-top: clamp(1.5rem, 3vw, 2.25rem);
          padding-top: clamp(1rem, 2vw, 1.25rem);
          border-top: 1px solid rgba(30,41,59,0.5);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .why-tags {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        /* ── ANIMATIONS ── */
        .why-label  { animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.05s both; }
        .why-h2     { animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s both; }
        .why-sub    { animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.25s both; }
        .why-card-0 { animation: fadeUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.35s both; }
        .why-card-1 { animation: fadeUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.46s both; }
        .why-card-2 { animation: fadeUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.57s both; }
        .why-card-3 { animation: fadeUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.68s both; }
        .why-wide   { animation: fadeUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.79s both; }
        .why-footer { animation: fadeUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.9s both; }

        /* ── TABLET (768–1023px) ── */
        @media (max-width: 1023px) {
          .why-root   { padding: 21rem 2rem 2.5rem; }
          .why-grid   { grid-template-columns: repeat(2, 1fr); }
        }

        /* ── MOBILE (≤599px) ── */
        @media (max-width: 599px) {
          .why-root {
            /* Extra top padding = clears any fixed nav (e.g. 64px) + breathing room */
            padding: 21rem 1rem 2rem;
          }
          .why-header { margin-bottom: 1.25rem; }
          .why-hrow   { flex-direction: column; align-items: flex-start; gap: 0.75rem; }
          .why-grid   { grid-template-columns: 1fr; gap: 0.85rem; }
          .why-tags   { display: none; }   /* hide decorative tags on mobile */
          .why-footer { justify-content: center; }
          /* Smaller blueprint corners */
          .bp-corner  { width: 14px !important; height: 14px !important; }
        }

        /* ── VERY SMALL (≤374px) ── */
        @media (max-width: 374px) {
          .why-root { padding: 4rem 0.75rem 1.5rem; }
        }
      `}</style>

      {/* BG decoration — pointer-events:none, z-index:0, purely visual */}
      <div style={{ position:"absolute",top:"-8%",right:"-5%",width:"500px",height:"500px",borderRadius:"50%",background:"radial-gradient(circle,rgba(8,145,178,0.08) 0%,transparent 70%)",filter:"blur(70px)",pointerEvents:"none",zIndex:0 }} />
      <div style={{ position:"absolute",bottom:"-10%",left:"-5%",width:"550px",height:"550px",borderRadius:"50%",background:"radial-gradient(circle,rgba(30,58,138,0.07) 0%,transparent 70%)",filter:"blur(80px)",pointerEvents:"none",zIndex:0 }} />
      <div style={{ position:"absolute",inset:0,pointerEvents:"none",zIndex:0,backgroundImage:"linear-gradient(rgba(34,211,238,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(34,211,238,0.025) 1px,transparent 1px)",backgroundSize:"55px 55px" }} />

      {/* Blueprint corners */}
      {[
        { top:"1.25rem",left:"1.25rem",   borderTop:"1.5px solid rgba(6,182,212,0.35)",  borderLeft:"1.5px solid rgba(6,182,212,0.35)"   },
        { top:"1.25rem",right:"1.25rem",  borderTop:"1.5px solid rgba(6,182,212,0.35)",  borderRight:"1.5px solid rgba(6,182,212,0.35)"  },
        { bottom:"1.25rem",left:"1.25rem",borderBottom:"1.5px solid rgba(6,182,212,0.35)",borderLeft:"1.5px solid rgba(6,182,212,0.35)"  },
        { bottom:"1.25rem",right:"1.25rem",borderBottom:"1.5px solid rgba(6,182,212,0.35)",borderRight:"1.5px solid rgba(6,182,212,0.35)"},
      ].map((s,i) => (
        <div key={i} className="bp-corner" style={{ position:"absolute",width:"18px",height:"18px",zIndex:5,...s }} />
      ))}

      {/* ── HEADER ── */}
      <div className="why-header">
        {/* Section label */}
        <div className="why-label" style={{ display:"flex",alignItems:"center",gap:"12px",marginBottom:"clamp(0.6rem,1.2vw,0.9rem)" }}>
          <div style={{ width:"2rem",height:"2px",borderRadius:"2px",backgroundColor:"#22d3ee",boxShadow:"0 0 8px rgba(34,211,238,0.8)",animation:"lineExpand 0.7s ease 0.05s both" }} />
          <span style={{ fontFamily:"'Martian Mono',monospace",fontSize:"0.58rem",letterSpacing:"0.26em",color:"#22d3ee",textTransform:"uppercase",fontWeight:400 }}>The Edge</span>
        </div>

        <div className="why-hrow">
          <div>
            <h2
              className="why-h2"
              style={{
                fontFamily:"'Barlow Condensed',sans-serif",
                fontWeight:700,
                textTransform:"uppercase",
                fontSize:"clamp(1.7rem,5.5vw,4rem)",
                lineHeight:1.0,
                letterSpacing:"-0.01em",
                color:"#ffffff",
                margin:0,
                marginBottom:"0.45rem",
              }}
            >
              Why Choose{" "}
              <span style={{ color:"#22d3ee",textShadow:"0 0 24px rgba(6,182,212,0.45),0 0 60px rgba(6,182,212,0.2)" }}>KodVix</span>
            </h2>
            <p
              className="why-sub"
              style={{ fontFamily:"'Lora',serif",fontStyle:"italic",fontWeight:300,fontSize:"clamp(0.82rem,1.4vw,1.1rem)",letterSpacing:"0.015em",color:"rgba(148,163,184,0.75)",margin:0 }}
            >
              Why industry leaders partner with us.
            </p>
          </div>

          <div className="why-sub" style={{ display:"flex",alignItems:"center",gap:"6px",opacity:0.5 }}>
            {[0,1,2].map(i => (
              <div key={i} style={{ width:"5px",height:"5px",borderRadius:"50%",backgroundColor:"#22d3ee",animation:i===0?"dotPulse 2.5s ease-in-out infinite":"none" }} />
            ))}
            <div style={{ width:"60px",height:"1px",backgroundColor:"rgba(34,211,238,0.25)",marginLeft:"4px" }} />
          </div>
        </div>
      </div>

      {/* ── GRID ── */}
      <div className="why-grid">
        {features.map((f,i) => (
          <div key={i} className={`why-card-${i}`} style={{ display:"flex" }}>
            <FeatureCard {...f} />
          </div>
        ))}
        <div className="why-wide-span why-wide">
          <WideCard />
        </div>
      </div>

      {/* ── FOOTER ── */}
      <div className="why-footer">
        <div className="why-tags">
          {["Precision","Scalability","24/7 Support","On-Time"].map((tag,i) => (
            <span key={i} style={{ fontFamily:"'Barlow Condensed',sans-serif",fontWeight:500,fontSize:"0.6rem",letterSpacing:"0.18em",color:"rgba(34,211,238,0.4)",textTransform:"uppercase",padding:"4px 12px",border:"1px solid rgba(34,211,238,0.1)",borderRadius:"999px" }}>{tag}</span>
          ))}
        </div>
        <div style={{ display:"flex",alignItems:"center",gap:"10px",flexShrink:0 }}>
          <span style={{ fontFamily:"'Martian Mono',monospace",fontSize:"0.55rem",color:"rgba(6,182,212,0.45)",letterSpacing:"0.12em",fontWeight:300 }}>07</span>
          <div style={{ width:"36px",height:"1px",backgroundColor:"rgba(31,41,55,0.8)" }} />
          <span style={{ fontFamily:"'Martian Mono',monospace",fontSize:"0.48rem",letterSpacing:"0.22em",color:"rgba(75,85,99,0.55)",textTransform:"uppercase",fontWeight:300 }}>Why_Us</span>
        </div>
      </div>
    </div>
  );
}