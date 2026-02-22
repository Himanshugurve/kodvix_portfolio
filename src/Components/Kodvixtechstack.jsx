import { useState } from "react";

/* ── ICON COMPONENTS (fixed 24×24 render size) ── */
const ReactIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#22d3ee", display: "block", flexShrink: 0 }}>
    <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.468a23.357 23.357 0 0 0-1.364-3.578l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.139s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046z"/>
  </svg>
);
const NextIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white" style={{ display: "block", flexShrink: 0 }}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 16.5l-5-7h-1.5v7h-1.5v-9h2.5l5 7h1.5v-7h1.5v9h-2.5z"/>
  </svg>
);
const NodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#4ade80", display: "block", flexShrink: 0 }}>
    <path d="M12 1.85c-.27 0-.55.07-.78.2L3.78 6.35C3.3 6.6 3 7.1 3 7.65v8.69c0 .56.3 1.06.78 1.33l7.44 4.3c.23.13.5.2.78.2s.55-.07.78-.2l7.44-4.3c.48-.27.78-.77.78-1.33V7.65c0-.55-.3-1.06-.78-1.31L12.78 2.05c-.23-.13-.5-.2-.78-.2zM12 4.09l6.5 3.76v7.5L12 19.1l-6.5-3.76v-7.5L12 4.1z"/>
  </svg>
);
const LaravelIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#f87171", display: "block", flexShrink: 0 }}>
    <path d="M23.642 5.43a.364.364 0 0 1 .014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 0 1-.188.326L9.93 23.949a.316.316 0 0 1-.066.027.29.29 0 0 1-.066.009.316.316 0 0 1-.09-.018.156.156 0 0 1-.066-.018L.577 18.986a.378.378 0 0 1-.188-.326V2.813a.378.378 0 0 1 .188-.326L9.79.015a.379.379 0 0 1 .378 0l4.32 2.491L18.81.014a.378.378 0 0 1 .378 0zm-.756 5.15v-4.46l-1.811 1.045-2.512 1.45v4.456zm-4.701 8.049v-4.458l-2.476 1.395-7.066 4.02v4.5zM1.14 3.218v15.24l9.354 5.402v-4.5l-4.899-2.76-.014-.025V8.685zm9.355-2.49L1.14 2.813 9.495 7.38l9.354-5.4zM14.49 9.97l-4.995-2.885L5.5 9.97v5.768l4.995 2.886 4.995-2.886z"/>
  </svg>
);
const MongoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#4ade80", display: "block", flexShrink: 0 }}>
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-14 4 6-4 8-4 8-4z"/>
  </svg>
);
const DBIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#60a5fa", display: "block", flexShrink: 0 }}>
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M3 5v14c0 1.657 4.03 3 9 3s9-1.343 9-3V5"/>
    <path d="M3 12c0 1.657 4.03 3 9 3s9-1.343 9-3"/>
  </svg>
);
const EIcon = () => (
  <div style={{ width:"24px",height:"24px",display:"flex",alignItems:"center",justifyContent:"center",border:"1.5px solid rgba(148,163,184,0.5)",borderRadius:"4px",flexShrink:0 }}>
    <span style={{ fontFamily:"'Martian Mono',monospace",fontSize:"9px",fontWeight:400,color:"#94a3b8",lineHeight:1 }}>EX</span>
  </div>
);

const rows = [
  {
    num:"01", label:"Frontend", sub:"CLIENT_LAYER", color:"#22d3ee",
    techs:[
      { icon:<ReactIcon/>, name:"React.js",  desc:"Component Architecture", color:"#22d3ee" },
      { icon:<NextIcon/>,  name:"Next.js",   desc:"SSR & Optimization",     color:"#ffffff" },
    ],
    specs:[{ label:"Performance", pct:90 },{ label:"Interactivity", pct:95 }],
  },
  {
    num:"02", label:"Backend", sub:"SERVER_LAYER", color:"#4ade80",
    techs:[
      { icon:<NodeIcon/>,    name:"Node.js",  desc:"Event-Driven Runtime",  color:"#4ade80" },
      { icon:<EIcon/>,       name:"Express",  desc:"API Framework",          color:"#94a3b8" },
      { icon:<LaravelIcon/>, name:"Laravel",  desc:"Enterprise Stability",   color:"#f87171" },
    ],
    specs:[{ label:"Throughput", pct:85 },{ label:"Scalability", pct:92 }],
  },
  {
    num:"03", label:"Database", sub:"DATA_LAYER", color:"#60a5fa",
    techs:[
      { icon:<MongoIcon/>, name:"MongoDB",    desc:"NoSQL Documents",       color:"#4ade80" },
      { icon:<DBIcon/>,    name:"MySQL / PG", desc:"Relational Integrity",   color:"#60a5fa" },
    ],
    specs:[{ label:"Availability", pct:99 },{ label:"Security", pct:95 }],
  },
];

function TechChip({ icon, name, desc, color, hovered }) {
  return (
    <div style={{ display:"flex",alignItems:"center",gap:"10px",padding:"9px 12px",borderRadius:"10px",border:`1px solid ${hovered?color+"40":"rgba(255,255,255,0.04)"}`,background:hovered?`${color}08`:"rgba(255,255,255,0.02)",transition:"all 0.3s ease",flexShrink:0 }}>
      <div style={{ width:"34px",height:"34px",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0,0,0,0.3)",border:`1px solid ${color}25`,flexShrink:0,filter:hovered?`drop-shadow(0 0 6px ${color}60)`:"none",transition:"filter 0.3s ease" }}>
        {icon}
      </div>
      <div style={{ display:"flex",flexDirection:"column",gap:"2px",minWidth:0 }}>
        <span style={{ fontFamily:"'Barlow',sans-serif",fontWeight:700,fontSize:"clamp(0.8rem,1.2vw,0.95rem)",lineHeight:1.1,color:hovered?"#f0fdff":"#e2e8f0",whiteSpace:"nowrap",transition:"color 0.3s" }}>{name}</span>
        <span style={{ fontFamily:"'Barlow Condensed',sans-serif",fontWeight:400,fontSize:"0.58rem",letterSpacing:"0.14em",color:"rgba(100,116,139,0.75)",whiteSpace:"nowrap",textTransform:"uppercase" }}>{desc}</span>
      </div>
    </div>
  );
}

function SpecBar({ label, pct, color }) {
  return (
    <div style={{ display:"flex",flexDirection:"column",gap:"4px" }}>
      <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center" }}>
        <span style={{ fontFamily:"'Martian Mono',monospace",fontSize:"0.46rem",letterSpacing:"0.16em",color:"rgba(100,116,139,0.65)",textTransform:"uppercase" }}>{label}</span>
        <span style={{ fontFamily:"'Martian Mono',monospace",fontSize:"0.46rem",color:color,letterSpacing:"0.05em" }}>{pct}%</span>
      </div>
      <div style={{ width:"100%",height:"3px",borderRadius:"3px",backgroundColor:"rgba(30,41,59,0.8)",overflow:"hidden" }}>
        <div style={{ height:"100%",width:`${pct}%`,borderRadius:"3px",background:`linear-gradient(90deg,${color}80,${color})`,boxShadow:`0 0 6px ${color}60`,transition:"width 0.8s ease" }} />
      </div>
    </div>
  );
}

function TechRow({ num, label, sub, color, techs, specs }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="tech-row"
      style={{ display:"flex",alignItems:"stretch",borderRadius:"14px",overflow:"hidden",border:hovered?`1px solid ${color}55`:"1px solid rgba(255,255,255,0.06)",background:hovered?"rgba(10,18,36,0.85)":"rgba(8,14,28,0.6)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",boxShadow:hovered?`0 8px 32px ${color}15,0 2px 8px rgba(0,0,0,0.4)`:"0 2px 10px rgba(0,0,0,0.3)",transform:hovered?"translateX(4px)":"translateX(0)",transition:"all 0.38s cubic-bezier(0.34,1.2,0.64,1)",cursor:"default",minHeight:"88px" }}
    >
      {/* Left label */}
      <div style={{ width:"clamp(80px,12vw,140px)",flexShrink:0,display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",padding:"0 1.1rem 0 0.9rem",position:"relative",borderRight:"1px solid rgba(255,255,255,0.05)",background:"rgba(0,0,0,0.2)" }}>
        <div style={{ position:"absolute",right:"-5px",top:"50%",transform:"translateY(-50%)",width:"9px",height:"9px",borderRadius:"50%",backgroundColor:color,boxShadow:hovered?`0 0 12px ${color},0 0 4px ${color}`:`0 0 6px ${color}80`,transition:"box-shadow 0.3s",zIndex:2 }} />
        <span style={{ fontFamily:"'Martian Mono',monospace",fontSize:"0.48rem",letterSpacing:"0.22em",color:color,opacity:0.65,marginBottom:"4px",fontWeight:300 }}>{num}</span>
        <span style={{ fontFamily:"'Barlow Condensed',sans-serif",fontWeight:700,fontSize:"clamp(0.82rem,1.4vw,1.1rem)",color:"#ffffff",lineHeight:1.1,textTransform:"uppercase",letterSpacing:"0.04em" }}>{label}</span>
        <span style={{ fontFamily:"'Martian Mono',monospace",fontSize:"0.4rem",letterSpacing:"0.18em",color:"rgba(100,116,139,0.55)",marginTop:"3px",textTransform:"uppercase",fontWeight:300 }}>{sub}</span>
      </div>

      {/* Center chips */}
      <div style={{ flex:1,display:"flex",alignItems:"center",gap:"clamp(5px,1.5vw,12px)",padding:"0.75rem clamp(0.6rem,2vw,1.25rem)",flexWrap:"wrap",minWidth:0 }}>
        {techs.map((t,i) => <TechChip key={i} {...t} hovered={hovered} />)}
      </div>

      {/* Right spec panel — hidden on mobile */}
      <div className="ts-spec-panel" style={{ width:"clamp(120px,18vw,200px)",flexShrink:0,display:"flex",flexDirection:"column",justifyContent:"center",gap:"9px",padding:"0.75rem 1.1rem",borderLeft:"1px solid rgba(255,255,255,0.04)",background:"rgba(0,0,0,0.15)" }}>
        {specs.map((s,i) => <SpecBar key={i} {...s} color={color} />)}
      </div>
    </div>
  );
}

export default function KodVixTechStack() {
  return (
    <div className="ts-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@300;400;500;600;700&family=Lora:ital,wght@0,300;0,400;1,300;1,400&family=Martian+Mono:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        @keyframes fadeUp      { from{opacity:0;transform:translateY(18px);}to{opacity:1;transform:translateY(0);} }
        @keyframes lineExpand  { from{width:0;opacity:0;}to{width:2rem;opacity:1;} }
        @keyframes marqueePulse{ 0%,100%{opacity:0.4;}50%{opacity:0.8;} }

        /* ── ROOT ──
           position:relative keeps it in normal doc flow.
           No negative margins. Clear padding-top ensures heading
           never clips under a fixed navbar or the previous section.
        */
        .ts-root {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background-color: #050810;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          color: #ffffff;
          padding: 5rem 4rem 3rem;
        }

        /* ── HEADER ── */
        .ts-header {
          position: relative;
          z-index: 10;
          margin-bottom: clamp(1.75rem, 3.5vw, 2.75rem);
        }

        /* ── TIMELINE + ROWS WRAPPER ── */
        .ts-body {
          position: relative;
          z-index: 10;
          display: flex;
          gap: clamp(0.6rem, 1.5vw, 1rem);
          flex: 1;
        }

        /* Vertical timeline line */
        .ts-timeline {
          width: 1px;
          background: linear-gradient(180deg, rgba(34,211,238,0.4) 0%, rgba(96,165,250,0.2) 60%, transparent 100%);
          flex-shrink: 0;
          border-radius: 1px;
          align-self: stretch;
          margin: 0.5rem 0;
        }

        /* Rows column */
        .ts-rows {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: clamp(0.75rem, 1.5vw, 1.1rem);
        }

        /* ── FOOTER ── */
        .ts-footer {
          position: relative;
          z-index: 10;
          margin-top: clamp(1.5rem, 3vw, 2.5rem);
          padding-top: clamp(1rem, 2vw, 1.5rem);
          border-top: 1px solid rgba(30,41,59,0.5);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        /* ── ANIMATIONS ── */
        .ts-label  { animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.05s both; }
        .ts-h2     { animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.18s both; }
        .ts-sub    { animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.28s both; }
        .ts-row-0  { animation: fadeUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.38s both; }
        .ts-row-1  { animation: fadeUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.5s  both; }
        .ts-row-2  { animation: fadeUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.62s both; }
        .ts-ftr    { animation: fadeUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.74s both; }

        /* ── TABLET (768–1023px) ── */
        @media (max-width: 1023px) {
          .ts-root { padding: 4rem 2rem 2.5rem; }
        }

        /* ── MOBILE (≤640px) ── */
        @media (max-width: 640px) {
          .ts-root {
            padding: 6.5rem 1rem 2rem;
          }
          .ts-header { margin-bottom: 1.25rem; }
          /* Hide spec bars — saves horizontal space on mobile */
          .ts-spec-panel { display: none !important; }
          /* Hide timeline line — too narrow to be useful */
          .ts-timeline   { display: none; }
          /* Make each row slightly more compact */
          .tech-row      { min-height: 72px !important; }
          /* Footer centered on mobile */
          .ts-footer     { justify-content: center; }
        }

        /* ── VERY SMALL (≤374px) ── */
        @media (max-width: 374px) {
          .ts-root { padding: 4rem 0.75rem 1.5rem; }
        }
      `}</style>

      {/* BG blobs */}
      <div style={{ position:"absolute",top:"-8%",left:"20%",width:"480px",height:"480px",borderRadius:"50%",background:"radial-gradient(circle,rgba(6,182,212,0.07) 0%,transparent 70%)",filter:"blur(60px)",pointerEvents:"none",zIndex:0 }} />
      <div style={{ position:"absolute",bottom:"-10%",right:"5%",width:"380px",height:"380px",borderRadius:"50%",background:"radial-gradient(circle,rgba(96,165,250,0.06) 0%,transparent 70%)",filter:"blur(70px)",pointerEvents:"none",zIndex:0 }} />
      <div style={{ position:"absolute",inset:0,pointerEvents:"none",zIndex:0,backgroundImage:"linear-gradient(rgba(34,211,238,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(34,211,238,0.025) 1px,transparent 1px)",backgroundSize:"55px 55px" }} />

      {/* Blueprint corners */}
      {[
        { top:"1.25rem",left:"1.25rem",  borderTop:"1.5px solid rgba(6,182,212,0.35)",  borderLeft:"1.5px solid rgba(6,182,212,0.35)"   },
        { top:"1.25rem",right:"1.25rem", borderTop:"1.5px solid rgba(6,182,212,0.35)",  borderRight:"1.5px solid rgba(6,182,212,0.35)"  },
        { bottom:"1.25rem",left:"1.25rem",borderBottom:"1.5px solid rgba(6,182,212,0.35)",borderLeft:"1.5px solid rgba(6,182,212,0.35)" },
        { bottom:"1.25rem",right:"1.25rem",borderBottom:"1.5px solid rgba(6,182,212,0.35)",borderRight:"1.5px solid rgba(6,182,212,0.35)"},
      ].map((s,i) => (
        <div key={i} style={{ position:"absolute",width:"18px",height:"18px",zIndex:5,...s }} />
      ))}

      {/* ── HEADER ── */}
      <div className="ts-header">
        <div className="ts-label" style={{ display:"flex",alignItems:"center",gap:"12px",marginBottom:"clamp(0.6rem,1.2vw,0.9rem)" }}>
          <div style={{ width:"2rem",height:"2px",borderRadius:"2px",backgroundColor:"#22d3ee",boxShadow:"0 0 8px rgba(34,211,238,0.8)",animation:"lineExpand 0.7s ease 0.05s both" }} />
          <span style={{ fontFamily:"'Martian Mono',monospace",fontSize:"0.58rem",letterSpacing:"0.26em",color:"#22d3ee",textTransform:"uppercase",fontWeight:400 }}>Architecture</span>
        </div>

        <div style={{ display:"flex",alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap",gap:"1rem" }}>
          <div>
            <h2
              className="ts-h2"
              style={{ fontFamily:"'Barlow Condensed',sans-serif",fontWeight:700,textTransform:"uppercase",fontSize:"clamp(1.7rem,5.5vw,4rem)",lineHeight:1.0,letterSpacing:"-0.01em",color:"#ffffff",margin:0,marginBottom:"0.55rem" }}
            >
              The Technology{" "}
              <span style={{ color:"#22d3ee",textShadow:"0 0 24px rgba(6,182,212,0.45),0 0 60px rgba(6,182,212,0.2)" }}>Engine</span>
            </h2>
            <div className="ts-sub" style={{ display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap" }}>
              <span style={{ fontFamily:"'Martian Mono',monospace",fontSize:"0.5rem",letterSpacing:"0.18em",color:"rgba(100,116,139,0.55)",fontWeight:300 }}>SYS_CONFIG_V3.2</span>
              <span style={{ color:"rgba(34,211,238,0.3)",fontSize:"0.6rem" }}>//</span>
              <span style={{ fontFamily:"'Martian Mono',monospace",fontSize:"0.5rem",letterSpacing:"0.18em",color:"rgba(100,116,139,0.55)",fontWeight:300 }}>OPTIMIZED_FOR_SCALE</span>
            </div>
          </div>

          <div className="ts-sub" style={{ display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"999px",border:"1px solid rgba(34,211,238,0.15)",backgroundColor:"rgba(8,47,73,0.15)",backdropFilter:"blur(8px)",flexShrink:0 }}>
            <div style={{ width:"6px",height:"6px",borderRadius:"50%",backgroundColor:"#22d3ee",boxShadow:"0 0 6px #22d3ee" }} />
            <span style={{ fontFamily:"'Barlow Condensed',sans-serif",fontSize:"0.68rem",fontWeight:500,letterSpacing:"0.18em",color:"#67e8f9",textTransform:"uppercase" }}>
              {rows.reduce((a,r) => a + r.techs.length, 0)} Technologies · 3 Layers
            </span>
          </div>
        </div>
      </div>

      {/* ── TIMELINE + ROWS ── */}
      <div className="ts-body">
        <div className="ts-timeline" />
        <div className="ts-rows">
          {rows.map((row,i) => (
            <div key={i} className={`ts-row-${i}`}>
              <TechRow {...row} />
            </div>
          ))}
        </div>
      </div>

      {/* ── FOOTER ── */}
      <div className="ts-footer ts-ftr">
        <div style={{ display:"flex",alignItems:"flex-start",gap:"10px",flex:1,minWidth:"180px" }}>
          <div style={{ width:"6px",height:"6px",borderRadius:"50%",backgroundColor:"#22d3ee",boxShadow:"0 0 6px #22d3ee",marginTop:"5px",flexShrink:0,animation:"marqueePulse 2.5s ease-in-out infinite" }} />
          <p style={{ margin:0,lineHeight:1.65 }}>
            <span style={{ fontFamily:"'Barlow Condensed',sans-serif",fontWeight:600,fontSize:"0.6rem",letterSpacing:"0.2em",color:"rgba(34,211,238,0.5)",marginRight:"8px",textTransform:"uppercase" }}>PHILOSOPHY ›</span>
            <span style={{ fontFamily:"'Lora',serif",fontStyle:"italic",fontWeight:300,fontSize:"clamp(0.72rem,1.1vw,0.88rem)",color:"rgba(148,163,184,0.72)" }}>Built on Clean Architecture, SEO-first development, and Cloud Scalability.</span>
          </p>
        </div>
        <div style={{ display:"flex",alignItems:"center",gap:"10px",flexShrink:0 }}>
          <span style={{ fontFamily:"'Martian Mono',monospace",fontSize:"0.55rem",color:"rgba(6,182,212,0.45)",letterSpacing:"0.12em",fontWeight:300 }}>06</span>
          <div style={{ width:"36px",height:"1px",backgroundColor:"rgba(31,41,55,0.8)" }} />
          <span style={{ fontFamily:"'Martian Mono',monospace",fontSize:"0.48rem",letterSpacing:"0.22em",color:"rgba(75,85,99,0.55)",textTransform:"uppercase",fontWeight:300 }}>Tech_Stack</span>
        </div>
      </div>
    </div>
  );
}