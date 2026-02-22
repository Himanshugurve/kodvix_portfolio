import { useState } from "react";

const projects = [
  {
    num: "01", initial: "M", name: "MensWorld BD", tag: "eCommerce", year: "2024",
    stack: ["React", "Node.js", "Stripe"],
    desc: "A premier fashion eCommerce destination engineered for high-volume traffic with a seamless, intuitive checkout experience and real-time inventory management.",
    accent: "#22d3ee", metric: { val: "3.2×", label: "Conversion Lift" },
  },
  {
    num: "02", initial: "U", name: "Ubuntu Interior", tag: "Architecture", year: "2024",
    stack: ["Next.js", "CMS", "Three.js"],
    desc: "Sophisticated digital presence for an interior design firm. Visual storytelling at scale with a custom CMS to showcase evolving portfolios elegantly.",
    accent: "#38bdf8", metric: { val: "99", label: "PageSpeed Score" },
  },
  {
    num: "03", initial: "E", name: "Enterprise ERP", tag: "SaaS / B2B", year: "2023",
    stack: ["Laravel", "MySQL", "Vue"],
    desc: "Robust enterprise resource planning system streamlining operations, automating workflows, and delivering real-time analytics dashboards.",
    accent: "#67e8f9", metric: { val: "40%", label: "Ops Efficiency" },
  },
  {
    num: "04", initial: "V", name: "Vendor Portal", tag: "Logistics", year: "2023",
    stack: ["Node.js", "MongoDB", "Redis"],
    desc: "Secure, scalable B2B portal for seamless vendor management, order processing, and real-time inventory tracking across distributed warehouse networks.",
    accent: "#22d3ee", metric: { val: "12K+", label: "Daily Transactions" },
  },
];

function StackChip({ label, accent }) {
  return (
    <span style={{
      fontFamily: "'Martian Mono', monospace", fontSize: "0.55rem", fontWeight: 400,
      letterSpacing: "0.12em", textTransform: "uppercase", color: accent,
      padding: "4px 9px", border: `1px solid ${accent}30`, borderRadius: "4px",
      background: `${accent}08`, whiteSpace: "nowrap", lineHeight: 1,
      display: "inline-flex", alignItems: "center",
    }}>{label}</span>
  );
}

function MobileCard({ num, initial, name, tag, year, stack, desc, accent, metric }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      className="pf-mobile-card"
      style={{
        position: "relative", borderRadius: "14px", padding: "1.25rem",
        overflow: "hidden", boxSizing: "border-box",
        background: hov ? "rgba(10,18,36,0.95)" : "rgba(8,14,28,0.7)",
        border: hov ? `1px solid ${accent}50` : "1px solid rgba(255,255,255,0.07)",
        transition: "all 0.35s ease",
        transform: hov ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hov ? `0 8px 30px ${accent}15` : "none",
      }}
    >
      <div style={{ position:"absolute",top:0,left:0,right:0,height:"1px",background:`linear-gradient(90deg,transparent,${accent}70,transparent)`,opacity:hov?1:0,transition:"opacity 0.4s" }} />

      {/* Header */}
      <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"0.75rem" }}>
        <div style={{
          width:"38px", height:"38px", borderRadius:"9px", flexShrink:0,
          display:"flex", alignItems:"center", justifyContent:"center",
          border: hov?`1px solid ${accent}65`:"1px solid rgba(255,255,255,0.1)",
          background: hov?`${accent}14`:"rgba(255,255,255,0.04)",
          boxSizing:"border-box", transition:"all 0.3s",
        }}>
          <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:"1.05rem", lineHeight:1, color:hov?accent:"rgba(255,255,255,0.65)", transition:"color 0.3s" }}>{initial}</span>
        </div>
        <div style={{ flex:1, minWidth:0 }}>
          <div style={{ display:"flex", alignItems:"center", gap:"6px", marginBottom:"3px" }}>
            <span style={{ fontFamily:"'Martian Mono',monospace", fontWeight:300, fontSize:"0.45rem", letterSpacing:"0.2em", color:hov?accent:"rgba(100,116,139,0.4)", transition:"color 0.3s" }}>{num}</span>
            <span style={{ fontFamily:"'Martian Mono',monospace", fontWeight:300, fontSize:"0.42rem", letterSpacing:"0.14em", color:"rgba(100,116,139,0.3)" }}>{year}</span>
          </div>
          <h3 style={{ fontFamily:"'Barlow',sans-serif", fontWeight:700, fontSize:"1rem", lineHeight:1.15, letterSpacing:"-0.01em", color:hov?"#f0fdff":"#e2e8f0", margin:0, transition:"color 0.3s" }}>{name}</h3>
        </div>
        <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:500, fontSize:"0.55rem", letterSpacing:"0.16em", textTransform:"uppercase", color:accent, border:`1px solid ${accent}35`, background:`${accent}0d`, padding:"3px 9px", borderRadius:"999px", flexShrink:0, display:"inline-flex", alignItems:"center" }}>{tag}</span>
      </div>

      <div style={{ height:"1px", background:`linear-gradient(90deg,${accent}40,transparent)`, marginBottom:"0.75rem", opacity:hov?1:0.3, transition:"opacity 0.3s" }} />

      <p style={{ fontFamily:"'Lora',serif", fontWeight:300, fontSize:"0.84rem", lineHeight:1.72, color:hov?"rgba(203,213,225,0.85)":"rgba(100,116,139,0.8)", margin:"0 0 0.75rem 0", transition:"color 0.3s" }}>{desc}</p>

      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"8px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"5px", flexWrap:"wrap" }}>
          {stack.map((s,i) => <StackChip key={i} label={s} accent={accent} />)}
        </div>
        <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:"2px" }}>
          <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:800, fontSize:"1.4rem", lineHeight:1, color:accent, textShadow:`0 0 14px ${accent}55` }}>{metric.val}</span>
          <span style={{ fontFamily:"'Martian Mono',monospace", fontWeight:300, fontSize:"0.42rem", letterSpacing:"0.14em", textTransform:"uppercase", color:"rgba(100,116,139,0.5)" }}>{metric.label}</span>
        </div>
      </div>
    </div>
  );
}

function DesktopRow({ num, initial, name, tag, year, stack, desc, accent, metric, isTablet }) {
  const [hov, setHov] = useState(false);
  const cols = isTablet ? "58px 1fr 120px" : "72px 1fr 145px";
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        position:"relative", display:"grid", gridTemplateColumns:cols,
        borderBottom:"1px solid rgba(255,255,255,0.055)",
        overflow:"hidden", alignItems:"stretch", cursor:"default",
      }}
    >
      <div style={{ position:"absolute",inset:0, background:`linear-gradient(90deg,${accent}07 0%,transparent 65%)`, opacity:hov?1:0, transition:"opacity 0.4s", pointerEvents:"none" }} />
      <div style={{ width:"3px", position:"absolute", left:0,top:0,bottom:0, background:accent, boxShadow:`0 0 12px ${accent}`, transform:hov?"scaleY(1)":"scaleY(0)", transformOrigin:"top", transition:"transform 0.4s cubic-bezier(0.34,1.56,0.64,1)" }} />

      {/* Col 1 */}
      <div style={{ display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center", padding: isTablet?"1.4rem 0 1.4rem 1rem":"1.75rem 0 1.75rem 1.5rem", gap:"8px" }}>
        <span style={{ fontFamily:"'Martian Mono',monospace",fontWeight:300,fontSize:"0.46rem",letterSpacing:"0.22em",color:hov?accent:"rgba(100,116,139,0.4)",transition:"color 0.3s",display:"block" }}>{num}</span>
        <div style={{ width:isTablet?"34px":"38px",height:isTablet?"34px":"38px",borderRadius:"9px",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,border:hov?`1px solid ${accent}65`:"1px solid rgba(255,255,255,0.1)",background:hov?`${accent}14`:"rgba(255,255,255,0.04)",transition:"all 0.3s",boxSizing:"border-box" }}>
          <span style={{ fontFamily:"'Barlow Condensed',sans-serif",fontWeight:700,fontSize:"1.05rem",lineHeight:1,color:hov?accent:"rgba(255,255,255,0.65)",transition:"color 0.3s",display:"block" }}>{initial}</span>
        </div>
      </div>

      {/* Col 2 */}
      <div style={{ padding:isTablet?"1.4rem 1.2rem":"1.75rem 1.5rem",display:"flex",flexDirection:"column",justifyContent:"center",gap:"8px",minWidth:0 }}>
        <div style={{ display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap" }}>
          <h3 style={{ fontFamily:"'Barlow',sans-serif",fontWeight:700,fontSize:isTablet?"0.95rem":"clamp(0.95rem,1.5vw,1.15rem)",lineHeight:1.1,letterSpacing:"-0.01em",color:hov?"#f0fdff":"#e2e8f0",margin:0,transition:"color 0.3s" }}>{name}</h3>
          <span style={{ fontFamily:"'Barlow Condensed',sans-serif",fontWeight:500,fontSize:"0.57rem",letterSpacing:"0.18em",textTransform:"uppercase",color:accent,border:`1px solid ${accent}35`,background:`${accent}0d`,padding:"3px 9px",borderRadius:"999px",lineHeight:"1.4",display:"inline-flex",alignItems:"center",flexShrink:0 }}>{tag}</span>
          <span style={{ fontFamily:"'Martian Mono',monospace",fontWeight:300,fontSize:"0.42rem",letterSpacing:"0.14em",color:"rgba(100,116,139,0.38)",flexShrink:0 }}>{year}</span>
        </div>
        <p style={{ fontFamily:"'Lora',serif",fontWeight:300,fontSize:isTablet?"0.8rem":"clamp(0.78rem,1.1vw,0.86rem)",lineHeight:1.72,color:hov?"rgba(203,213,225,0.85)":"rgba(100,116,139,0.8)",margin:0,transition:"color 0.3s",maxWidth:"520px" }}>{desc}</p>
        <div style={{ display:"flex",alignItems:"center",gap:"5px",flexWrap:"wrap" }}>
          {stack.map((s,i) => <StackChip key={i} label={s} accent={accent} />)}
        </div>
      </div>

      {/* Col 3 */}
      <div style={{ display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",padding:isTablet?"1.4rem 1.25rem 1.4rem 0.5rem":"1.75rem 1.75rem 1.75rem 0.75rem",gap:"12px",flexShrink:0,borderLeft:"1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"3px",opacity:hov?1:0.45,transition:"opacity 0.3s" }}>
          <span style={{ fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,fontSize:isTablet?"1.2rem":"clamp(1.35rem,2.2vw,1.8rem)",lineHeight:1,color:accent,textShadow:`0 0 18px ${accent}55` }}>{metric.val}</span>
          <span style={{ fontFamily:"'Martian Mono',monospace",fontWeight:300,fontSize:"0.4rem",letterSpacing:"0.15em",textTransform:"uppercase",color:"rgba(100,116,139,0.5)",textAlign:"right" }}>{metric.label}</span>
        </div>
        <div style={{ display:"flex",alignItems:"center",gap:"5px",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:600,fontSize:"0.55rem",letterSpacing:"0.2em",textTransform:"uppercase",color:hov?accent:"rgba(100,116,139,0.3)",transition:"color 0.3s" }}>
          <span style={{ whiteSpace:"nowrap" }}>Case Study</span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display:"block",flexShrink:0,transform:hov?"translateX(3px)":"translateX(0)",transition:"transform 0.3s" }}>
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function KodVixPortfolio() {
  return (
    <div className="pf-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@300;400;500;600;700;800&family=Lora:ital,wght@0,300;0,400;1,300;1,400&family=Martian+Mono:wght@300;400;500&display=swap');

        @keyframes fadeUp { from{opacity:0;transform:translateY(18px);}to{opacity:1;transform:translateY(0);} }
        @keyframes lineExpand { from{width:0;opacity:0;}to{width:2rem;opacity:1;} }
        @keyframes dotBlink { 0%,100%{opacity:1;}50%{opacity:0;} }

        /* ── Root layout ── */
        .pf-root {
          position: relative; width: 100%; min-height: 100vh;
          background-color: #050810; color: #fff;
          display: flex; flex-direction: column;
          box-sizing: border-box; overflow: hidden;
          /* Generous padding so header is never clipped by prev section */
          padding: 6rem 4rem 9rem;
        }
        @media (max-width: 1023px) { .pf-root { padding: 5rem 2rem 2.5rem; } }
        @media (max-width: 599px)  { 
          .pf-root { 
            padding: 21rem 1rem 2rem; 
          } 
        }

        /* ── Header spacing ── */
        .pf-header { position:relative; z-index:10; margin-bottom: 2.5rem; }
        @media (max-width:1023px) { .pf-header { margin-bottom: 2rem; } }
        @media (max-width:599px)  { .pf-header { margin-bottom: 1.5rem; } }

        /* ── Heading row ── */
        .pf-heading-row { display:flex; align-items:flex-end; justify-content:space-between; flex-wrap:wrap; gap:1.25rem; }
        @media (max-width:599px)  { .pf-heading-row { flex-direction:column; align-items:flex-start; gap:1rem; } }

        /* ── Stats panel ── */
        .pf-stats { display:flex; align-items:center; gap:2rem; padding:12px 22px; border-radius:12px; border:1px solid rgba(34,211,238,0.12); background:rgba(8,14,28,0.55); backdrop-filter:blur(12px); flex-shrink:0; }
        @media (max-width:1023px) { .pf-stats { gap:1.25rem; padding:10px 16px; } }
        @media (max-width:599px)  { .pf-stats { gap:1.25rem; padding:10px 16px; align-self:flex-start; } }

        /* ── Col header row (tablet/desktop) ── */
        .pf-col-header { position:relative;z-index:10;display:grid;grid-template-columns:72px 1fr 145px;border-top:1px solid rgba(255,255,255,0.07);padding-top:7px;padding-bottom:3px; }
        @media (max-width:1023px) { .pf-col-header { grid-template-columns:58px 1fr 120px; } }
        @media (max-width:599px)  { .pf-col-header { display:none; } }

        /* ── Rows vs cards ── */
        .pf-rows { position:relative;z-index:10;flex:1;display:flex;flex-direction:column; }
        .pf-card-grid { display:none; }
        @media (max-width:599px) {
          .pf-rows { display:none; }
          .pf-card-grid { display:flex; flex-direction:column; gap:0.875rem; position:relative; z-index:10; flex:1; }
        }

        /* ── Tablet row overrides ── */
        .pf-row-tablet { display:none; }
        @media (min-width:600px) and (max-width:1023px) {
          .pf-row-tablet { display:block; }
          .pf-row-desktop { display:none; }
        }
        @media (min-width:1024px) {
          .pf-row-desktop { display:block; }
          .pf-row-tablet { display:none; }
        }

        /* ── Footer ── */
        .pf-footer { position:relative;z-index:10;margin-top:2rem;padding-top:1.25rem;border-top:1px solid rgba(30,41,59,0.5);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem; }
        @media (max-width:1023px) { .pf-footer { margin-top:1.5rem; } }
        @media (max-width:599px)  { .pf-footer { justify-content:center; margin-top:1.25rem; } }

        .pf-footer-tags { display:flex;align-items:center;gap:8px;flex-wrap:wrap; }
        @media (max-width:599px) { .pf-footer-tags { display:none; } }

        /* ── Animations ── */
        .pf-label  { animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.05s both; }
        .pf-h2     { animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s both; }
        .pf-sub    { animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.25s both; }
        .pf-stpan  { animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.32s both; }
        .pf-div    { animation: fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.36s both; }
        .pf-r0 { animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.42s both; }
        .pf-r1 { animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.52s both; }
        .pf-r2 { animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.62s both; }
        .pf-r3 { animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.72s both; }
        .pf-ftx { animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.80s both; }

        .pf-mobile-card { transition: all 0.35s ease; }
      `}</style>

      {/* BG blobs */}
      <div style={{ position:"absolute",top:"-12%",right:"-6%",width:"520px",height:"520px",borderRadius:"50%",background:"radial-gradient(circle,rgba(8,145,178,0.07) 0%,transparent 70%)",filter:"blur(80px)",pointerEvents:"none",zIndex:0 }} />
      <div style={{ position:"absolute",bottom:"-10%",left:"-6%",width:"440px",height:"440px",borderRadius:"50%",background:"radial-gradient(circle,rgba(30,58,138,0.07) 0%,transparent 70%)",filter:"blur(80px)",pointerEvents:"none",zIndex:0 }} />
      <div style={{ position:"absolute",inset:0,pointerEvents:"none",zIndex:0,backgroundImage:"linear-gradient(rgba(34,211,238,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(34,211,238,0.022) 1px,transparent 1px)",backgroundSize:"55px 55px" }} />

      {/* Blueprint corners */}
      {[
        { top:"1.25rem",left:"1.25rem",borderTop:"1.5px solid rgba(6,182,212,0.35)",borderLeft:"1.5px solid rgba(6,182,212,0.35)" },
        { top:"1.25rem",right:"1.25rem",borderTop:"1.5px solid rgba(6,182,212,0.35)",borderRight:"1.5px solid rgba(6,182,212,0.35)" },
        { bottom:"1.25rem",left:"1.25rem",borderBottom:"1.5px solid rgba(6,182,212,0.35)",borderLeft:"1.5px solid rgba(6,182,212,0.35)" },
        { bottom:"1.25rem",right:"1.25rem",borderBottom:"1.5px solid rgba(6,182,212,0.35)",borderRight:"1.5px solid rgba(6,182,212,0.35)" },
      ].map((s,i) => <div key={i} style={{ position:"absolute",width:"18px",height:"18px",zIndex:5,...s }} />)}

      {/* ── HEADER ── */}
      <div className="pf-header">
        <div className="pf-label" style={{ display:"flex",alignItems:"center",gap:"10px",marginBottom:"0.9rem" }}>
          <div style={{ width:"2rem",height:"2px",borderRadius:"2px",backgroundColor:"#22d3ee",boxShadow:"0 0 8px rgba(34,211,238,0.8)",animation:"lineExpand 0.7s ease 0.05s both" }} />
          <span style={{ fontFamily:"'Martian Mono',monospace",fontSize:"0.56rem",letterSpacing:"0.24em",color:"#22d3ee",textTransform:"uppercase",fontWeight:400 }}>Projects</span>
        </div>

        <div className="pf-heading-row">
          <div>
            <h2 className="pf-h2" style={{ fontFamily:"'Barlow Condensed',sans-serif",fontWeight:700,textTransform:"uppercase",fontSize:"clamp(1.8rem,5vw,3.8rem)",lineHeight:1.02,letterSpacing:"-0.01em",color:"#ffffff",margin:0,marginBottom:"0.55rem" }}>
              Completed{" "}
              <span style={{ color:"#22d3ee",textShadow:"0 0 24px rgba(6,182,212,0.45),0 0 60px rgba(6,182,212,0.2)" }}>Deployments</span>
            </h2>
            <p className="pf-sub" style={{ fontFamily:"'Lora',serif",fontWeight:300,fontStyle:"italic",fontSize:"clamp(0.85rem,1.4vw,1.02rem)",letterSpacing:"0.015em",color:"rgba(148,163,184,0.72)",margin:0,lineHeight:1.55 }}>
              Success stories engineered for scale and performance.
            </p>
          </div>
          <div className="pf-stpan pf-stats">
            {[{val:"4",label:"Projects"},{val:"100%",label:"Delivered"},{val:"2+",label:"Years"}].map((s,i) => (
              <div key={i} style={{ display:"flex",flexDirection:"column",alignItems:"center",gap:"3px" }}>
                <span style={{ fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,fontSize:"clamp(1rem,2vw,1.5rem)",lineHeight:1,color:"#22d3ee",textShadow:"0 0 14px rgba(34,211,238,0.4)" }}>{s.val}</span>
                <span style={{ fontFamily:"'Martian Mono',monospace",fontWeight:300,fontSize:"0.4rem",letterSpacing:"0.16em",color:"rgba(100,116,139,0.5)",textTransform:"uppercase" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Column header — tablet + desktop only */}
      <div className="pf-col-header pf-div">
        <div />
        <div style={{ paddingLeft:"1.25rem" }}>
          <span style={{ fontFamily:"'Martian Mono',monospace",fontSize:"0.38rem",letterSpacing:"0.2em",color:"rgba(100,116,139,0.35)",textTransform:"uppercase",fontWeight:300 }}>Project / Description</span>
        </div>
        <div style={{ paddingRight:"1.75rem",display:"flex",justifyContent:"flex-end" }}>
          <span style={{ fontFamily:"'Martian Mono',monospace",fontSize:"0.38rem",letterSpacing:"0.2em",color:"rgba(100,116,139,0.35)",textTransform:"uppercase",fontWeight:300 }}>Metric</span>
        </div>
      </div>

      {/* Desktop rows */}
      <div className="pf-rows">
        {projects.map((p,i) => (
          <div key={i} className={`pf-r${i}`}>
            <span className="pf-row-desktop"><DesktopRow {...p} isTablet={false} /></span>
            <span className="pf-row-tablet"><DesktopRow {...p} isTablet={true} /></span>
          </div>
        ))}
      </div>

      {/* Mobile cards */}
      <div className="pf-card-grid">
        {projects.map((p,i) => (
          <div key={i} className={`pf-r${i}`}><MobileCard {...p} /></div>
        ))}
      </div>

      {/* Footer */}
      <div className="pf-footer pf-ftx">
        <div className="pf-footer-tags">
          {["Full-Stack","Enterprise","Performance-First","Scalable"].map((tag,i) => (
            <span key={i} style={{ fontFamily:"'Barlow Condensed',sans-serif",fontWeight:500,fontSize:"0.6rem",letterSpacing:"0.18em",color:"rgba(34,211,238,0.4)",textTransform:"uppercase",padding:"4px 12px",border:"1px solid rgba(34,211,238,0.1)",borderRadius:"999px" }}>{tag}</span>
          ))}
        </div>
        <div style={{ display:"flex",alignItems:"center",gap:"16px" }}>
          <div style={{ display:"flex",alignItems:"center",gap:"7px" }}>
            <div style={{ width:"6px",height:"6px",borderRadius:"50%",backgroundColor:"#22d3ee",boxShadow:"0 0 6px #22d3ee",animation:"dotBlink 2s step-end infinite" }} />
            <span style={{ fontFamily:"'Martian Mono',monospace",fontSize:"0.44rem",letterSpacing:"0.16em",color:"rgba(34,211,238,0.5)",textTransform:"uppercase",fontWeight:300 }}>Live Portfolio</span>
          </div>
          <div style={{ display:"flex",alignItems:"center",gap:"10px" }}>
            <span style={{ fontFamily:"'Martian Mono',monospace",fontSize:"0.55rem",color:"rgba(6,182,212,0.45)",letterSpacing:"0.12em",fontWeight:300 }}>04</span>
            <div style={{ width:"36px",height:"1px",backgroundColor:"rgba(31,41,55,0.8)" }} />
            <span style={{ fontFamily:"'Martian Mono',monospace",fontSize:"0.48rem",letterSpacing:"0.22em",color:"rgba(75,85,99,0.55)",textTransform:"uppercase",fontWeight:300 }}>Portfolio</span>
          </div>
        </div>
      </div>
    </div>
  );
}