import { useState } from "react";

const BuildingIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ display:"block",flexShrink:0 }}>
    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);
const HQIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ display:"block",flexShrink:0 }}>
    <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
  </svg>
);
const PinIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ display:"block",flexShrink:0,color:"rgba(100,116,139,0.7)" }}>
    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

function LocationCard({ icon, name, label, address, accentColor = "#22d3ee" }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position:"relative",borderRadius:"14px",padding:"clamp(1rem,1.8vw,1.4rem)",overflow:"hidden",
        background:hovered?"rgba(10,18,36,0.92)":"rgba(8,14,28,0.75)",
        backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",
        border:hovered?`1px solid ${accentColor}50`:"1px solid rgba(255,255,255,0.07)",
        boxShadow:hovered?`0 8px 36px ${accentColor}15,0 2px 8px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.04)`:"0 2px 12px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.02)",
        transform:hovered?"translateY(-3px)":"translateY(0)",
        transition:"all 0.38s cubic-bezier(0.34,1.2,0.64,1)",cursor:"default",
        minWidth:"260px",maxWidth:"320px",width:"100%",boxSizing:"border-box",
      }}
    >
      <div style={{ position:"absolute",top:0,left:0,right:0,height:"1px",background:`linear-gradient(90deg,transparent,${accentColor}80,transparent)`,opacity:hovered?1:0,transition:"opacity 0.4s ease" }} />
      <div style={{ position:"absolute",top:"-30px",right:"-30px",width:"120px",height:"120px",borderRadius:"50%",background:`radial-gradient(circle,${accentColor}15 0%,transparent 70%)`,transform:hovered?"scale(1.5)":"scale(1)",transition:"transform 0.6s ease",pointerEvents:"none" }} />

      <div style={{ display:"flex",alignItems:"center",gap:"10px",marginBottom:"0.85rem",paddingBottom:"0.85rem",borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ width:"34px",height:"34px",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,backgroundColor:"rgba(8,47,73,0.5)",border:hovered?`1px solid ${accentColor}45`:"1px solid rgba(6,182,212,0.2)",color:accentColor,boxShadow:hovered?`0 0 12px ${accentColor}35`:"none",transition:"all 0.3s ease",boxSizing:"border-box" }}>{icon}</div>
        <div style={{ flex:1,minWidth:0 }}>
          <p style={{ fontFamily:"'Barlow',sans-serif",fontWeight:700,fontSize:"clamp(0.85rem,1.2vw,0.95rem)",lineHeight:1.2,letterSpacing:"-0.01em",color:hovered?"#f0fdff":"#e2e8f0",margin:0,marginBottom:"3px",transition:"color 0.3s" }}>{name}</p>
          <p style={{ fontFamily:"'Barlow Condensed',sans-serif",fontWeight:500,fontSize:"0.58rem",letterSpacing:"0.2em",color:accentColor,opacity:0.8,margin:0,textTransform:"uppercase" }}>{label}</p>
        </div>
      </div>

      <div style={{ display:"flex",alignItems:"flex-start",gap:"8px" }}>
        <div style={{ marginTop:"1px",flexShrink:0 }}><PinIcon /></div>
        <p style={{ fontFamily:"'Lora',serif",fontWeight:300,fontSize:"clamp(0.75rem,1.1vw,0.82rem)",lineHeight:1.7,color:"rgba(148,163,184,0.8)",margin:0,whiteSpace:"pre-line" }}>{address}</p>
      </div>
    </div>
  );
}

function PulsePin({ color = "#22d3ee", size = 10, delay = 0 }) {
  return (
    <div style={{ position:"relative",width:`${size}px`,height:`${size}px`,display:"flex",alignItems:"center",justifyContent:"center" }}>
      <div style={{ position:"absolute",width:`${size*3}px`,height:`${size*3}px`,borderRadius:"50%",border:`1.5px solid ${color}`,animation:`pinRing 2.5s cubic-bezier(0.215,0.61,0.355,1) ${delay}s infinite`,opacity:0.6,top:"50%",left:"50%",transform:"translate(-50%,-50%)" }} />
      <div style={{ position:"absolute",width:`${size*2}px`,height:`${size*2}px`,borderRadius:"50%",border:`1px solid ${color}`,animation:`pinRing 2.5s cubic-bezier(0.215,0.61,0.355,1) ${delay+0.4}s infinite`,opacity:0.3,top:"50%",left:"50%",transform:"translate(-50%,-50%)" }} />
      <div style={{ width:`${size}px`,height:`${size}px`,borderRadius:"50%",backgroundColor:color,boxShadow:`0 0 8px ${color},0 0 16px ${color}60`,animation:`pinDot 2s ease-in-out ${delay}s infinite`,position:"relative",zIndex:2 }} />
    </div>
  );
}

function WorldMap() {
  return (
    <svg viewBox="0 0 1000 500" style={{ width:"100%",height:"100%",display:"block" }} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="arcGrad" gradientUnits="userSpaceOnUse" x1="185" y1="210" x2="680" y2="190">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.1"/><stop offset="40%" stopColor="#22d3ee" stopOpacity="0.9"/><stop offset="60%" stopColor="#22d3ee" stopOpacity="0.9"/><stop offset="100%" stopColor="#22d3ee" stopOpacity="0.1"/>
        </linearGradient>
        <filter id="glow"><feGaussianBlur stdDeviation="2" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <radialGradient id="dotGlowL" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3"/><stop offset="100%" stopColor="#22d3ee" stopOpacity="0"/></radialGradient>
        <radialGradient id="dotGlowR" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3"/><stop offset="100%" stopColor="#38bdf8" stopOpacity="0"/></radialGradient>
      </defs>
      <path d="M60,60 L170,50 L200,80 L210,130 L190,180 L220,220 L200,270 L170,300 L140,280 L100,220 L70,180 L50,130 Z" fill="#1e293b" stroke="#334155" strokeWidth="0.8" opacity="0.9"/>
      <path d="M160,310 L200,290 L230,320 L240,380 L220,440 L190,460 L160,430 L140,380 L140,340 Z" fill="#1e293b" stroke="#334155" strokeWidth="0.8" opacity="0.9"/>
      <path d="M430,60 L510,55 L530,90 L520,130 L490,140 L460,120 L430,110 Z" fill="#1e293b" stroke="#334155" strokeWidth="0.8" opacity="0.9"/>
      <path d="M440,160 L510,150 L540,200 L550,290 L520,360 L480,380 L440,340 L420,260 L430,200 Z" fill="#1e293b" stroke="#334155" strokeWidth="0.8" opacity="0.9"/>
      <path d="M540,50 L820,40 L870,100 L880,180 L820,230 L750,220 L680,240 L620,200 L570,160 L540,120 Z" fill="#1e293b" stroke="#334155" strokeWidth="0.8" opacity="0.9"/>
      <path d="M660,200 L700,200 L720,250 L690,280 L660,250 Z" fill="#1e293b" stroke="#334155" strokeWidth="0.8" opacity="0.9"/>
      <path d="M750,220 L820,210 L840,260 L800,280 L760,260 Z" fill="#1e293b" stroke="#334155" strokeWidth="0.8" opacity="0.9"/>
      <path d="M780,310 L880,300 L920,350 L900,410 L840,430 L790,400 L770,360 Z" fill="#1e293b" stroke="#334155" strokeWidth="0.8" opacity="0.9"/>
      <path d="M185,185 Q430,60 680,220" stroke="url(#arcGrad)" strokeWidth="1.5" strokeLinecap="round" filter="url(#glow)" style={{ strokeDasharray:800,strokeDashoffset:800,animation:"dashDraw 2.5s ease-out 0.8s forwards" }}/>
      <circle r="4" fill="#22d3ee" filter="url(#glow)" style={{ animation:"moveArc 3s ease-in-out 1.2s infinite" }}>
        <animateMotion dur="3s" begin="1.2s" repeatCount="indefinite" path="M185,185 Q430,60 680,220"/>
      </circle>
      <circle cx="185" cy="185" r="30" fill="url(#dotGlowL)"/>
      <circle cx="680" cy="220" r="30" fill="url(#dotGlowR)"/>
    </svg>
  );
}

export default function KodVixGlobal() {
  return (
    <div style={{ position:"relative",width:"100%",minHeight:"100vh",backgroundColor:"#050810",display:"flex",flexDirection:"column",padding:"clamp(2rem,5vw,4rem) clamp(1.5rem,5vw,4rem)",boxSizing:"border-box",overflow:"hidden",color:"#ffffff" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@300;400;500;600;700&family=Lora:ital,wght@0,300;0,400;1,300;1,400&family=Martian+Mono:wght@300;400;500&display=swap');
        @keyframes fadeUp{from{opacity:0;transform:translateY(18px);}to{opacity:1;transform:translateY(0);}}
        @keyframes lineExpand{from{width:0;opacity:0;}to{width:2rem;opacity:1;}}
        @keyframes pinRing{0%{transform:translate(-50%,-50%) scale(0.3);opacity:0.7;}80%,100%{transform:translate(-50%,-50%) scale(1);opacity:0;}}
        @keyframes pinDot{0%,100%{transform:scale(0.85);}50%{transform:scale(1.1);}}
        @keyframes dashDraw{to{stroke-dashoffset:0;}}
        @keyframes dotBlink{0%,100%{opacity:1;}50%{opacity:0;}}
        @keyframes mapFade{from{opacity:0;}to{opacity:1;}}
        .gl-label{animation:fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.05s both;}
        .gl-h2{animation:fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.18s both;}
        .gl-sub{animation:fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.28s both;}
        .gl-map{animation:mapFade 1.2s ease 0.4s both;}
        .gl-card-0{animation:fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s both;}
        .gl-card-1{animation:fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.65s both;}
        .gl-stats{animation:fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.78s both;}
        .gl-footer{animation:fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.88s both;}
        @media(max-width:767px){.gl-map-pins{flex-direction:column!important;align-items:center!important;}.gl-card-row{flex-direction:column!important;align-items:center!important;}}
      `}</style>

      <div style={{ position:"absolute",top:"30%",left:"20%",width:"500px",height:"300px",borderRadius:"50%",background:"radial-gradient(ellipse,rgba(6,182,212,0.05) 0%,transparent 70%)",filter:"blur(60px)",pointerEvents:"none",zIndex:0 }} />
      <div style={{ position:"absolute",bottom:"10%",right:"15%",width:"350px",height:"350px",borderRadius:"50%",background:"radial-gradient(circle,rgba(56,189,248,0.04) 0%,transparent 70%)",filter:"blur(50px)",pointerEvents:"none",zIndex:0 }} />
      <div style={{ position:"absolute",inset:0,pointerEvents:"none",zIndex:0,backgroundImage:"linear-gradient(rgba(34,211,238,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(34,211,238,0.025) 1px,transparent 1px)",backgroundSize:"55px 55px" }} />
      {[{top:"1.25rem",left:"1.25rem",borderTop:"1.5px solid rgba(6,182,212,0.35)",borderLeft:"1.5px solid rgba(6,182,212,0.35)"},{top:"1.25rem",right:"1.25rem",borderTop:"1.5px solid rgba(6,182,212,0.35)",borderRight:"1.5px solid rgba(6,182,212,0.35)"},{bottom:"1.25rem",left:"1.25rem",borderBottom:"1.5px solid rgba(6,182,212,0.35)",borderLeft:"1.5px solid rgba(6,182,212,0.35)"},{bottom:"1.25rem",right:"1.25rem",borderBottom:"1.5px solid rgba(6,182,212,0.35)",borderRight:"1.5px solid rgba(6,182,212,0.35)"}].map((s,i)=><div key={i} style={{ position:"absolute",width:"18px",height:"18px",zIndex:5,...s }} />)}

      {/* Header */}
      <div style={{ position:"relative",zIndex:10,marginBottom:"clamp(1.5rem,3vw,2.5rem)", marginTop: "5rem" }}>
        <div className="gl-label" style={{ display:"flex",alignItems:"center",gap:"12px",marginBottom:"clamp(0.5rem,1vw,0.8rem)" }}>
          <div style={{ width:"2rem",height:"2px",borderRadius:"2px",backgroundColor:"#22d3ee",boxShadow:"0 0 8px rgba(34,211,238,0.8)",animation:"lineExpand 0.7s ease 0.05s both" }} />
          <span style={{ fontFamily:"'Martian Mono',monospace",fontSize:"0.58rem",letterSpacing:"0.26em",color:"#22d3ee",textTransform:"uppercase",fontWeight:400 }}>Global Presence</span>
        </div>
        <div style={{ display:"flex",alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap",gap:"1rem" }}>
          <div>
            <h2 className="gl-h2" style={{ fontFamily:"'Barlow Condensed',sans-serif",fontWeight:700,textTransform:"uppercase",fontSize:"clamp(2rem,5.5vw,4rem)",lineHeight:0.98,letterSpacing:"-0.01em",color:"#ffffff",margin:0,marginBottom:"0.5rem" }}>
              Our{" "}
              <span style={{ color:"#22d3ee",textShadow:"0 0 24px rgba(6,182,212,0.45),0 0 60px rgba(6,182,212,0.2)" }}>Footprint</span>
            </h2>
            <p className="gl-sub" style={{ fontFamily:"'Lora',serif",fontStyle:"italic",fontWeight:300,fontSize:"clamp(0.875rem,1.4vw,1.05rem)",letterSpacing:"0.015em",color:"rgba(148,163,184,0.7)",margin:0 }}>
              Strategically positioned to bridge markets across the globe.
            </p>
          </div>
          <div className="gl-sub" style={{ display:"flex",alignItems:"center",gap:"8px",padding:"7px 14px",borderRadius:"999px",border:"1px solid rgba(34,211,238,0.15)",background:"rgba(8,47,73,0.15)",backdropFilter:"blur(8px)",flexShrink:0 }}>
            <div style={{ width:"6px",height:"6px",borderRadius:"50%",backgroundColor:"#22d3ee",boxShadow:"0 0 6px #22d3ee",animation:"dotBlink 2s step-end infinite" }} />
            <span style={{ fontFamily:"'Barlow Condensed',sans-serif",fontWeight:500,fontSize:"0.68rem",letterSpacing:"0.18em",color:"#67e8f9",textTransform:"uppercase" }}>2 Active Locations</span>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="gl-map" style={{ position:"relative",zIndex:10,flex:1,minHeight:"clamp(200px,30vw,340px)",maxHeight:"380px" }}>
        <div style={{ position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center" }}>
          <div style={{ width:"min(90%,900px)",opacity:0.65 }}><WorldMap /></div>
        </div>
        <div style={{ position:"absolute",left:"calc(18% + clamp(0px,2vw,20px))",top:"37%",transform:"translate(-50%,-50%)",zIndex:10,display:"flex",alignItems:"center",justifyContent:"center" }}>
          <PulsePin color="#22d3ee" size={10} delay={0} />
        </div>
        <div style={{ position:"absolute",left:"68%",top:"44%",transform:"translate(-50%,-50%)",zIndex:10,display:"flex",alignItems:"center",justifyContent:"center" }}>
          <PulsePin color="#38bdf8" size={10} delay={0.6} />
        </div>
      </div>

      {/* Cards */}
      <div className="gl-card-row" style={{ position:"relative",zIndex:10,display:"flex",alignItems:"stretch",justifyContent:"space-between",gap:"clamp(0.75rem,2vw,1.5rem)",marginTop:"clamp(1.25rem,2.5vw,2rem)",flexWrap:"wrap" }}>
        <div className="gl-card-0" style={{ flex:1,minWidth:"240px",maxWidth:"360px",display:"flex" }}>
          <LocationCard icon={<BuildingIcon />} name="KAAV (Partner)" label="US Operations" address={"6452 Chaumont Crest\nMississauga, ON L5N 2M8, Canada"} accentColor="#22d3ee"/>
        </div>
        <div style={{ display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"8px",flexShrink:0,padding:"0 clamp(0.5rem,2vw,1.5rem)" }}>
          <div style={{ width:"1px",flex:1,background:"linear-gradient(180deg,transparent,rgba(34,211,238,0.3),transparent)" }} />
          <div style={{ width:"36px",height:"36px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid rgba(34,211,238,0.3)",background:"rgba(8,47,73,0.2)",flexShrink:0 }}>
            <span style={{ fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,fontSize:"0.9rem",color:"#22d3ee" }}>×</span>
          </div>
          <div style={{ width:"1px",flex:1,background:"linear-gradient(180deg,rgba(34,211,238,0.3),transparent)" }} />
        </div>
        <div className="gl-card-1" style={{ flex:1,minWidth:"240px",maxWidth:"360px",display:"flex" }}>
          <LocationCard icon={<HQIcon />} name="KodVix HQ" label="India Operations" address={"405, Trade House, 14 South Tukoganj,\nManorama Ganj, Indore, MP 452001"} accentColor="#38bdf8"/>
        </div>
      </div>

      {/* Footer */}
      <div className="gl-footer" style={{ position:"relative",zIndex:10,marginTop:"clamp(1.25rem,2.5vw,2rem)",paddingTop:"clamp(0.85rem,1.5vw,1.25rem)",borderTop:"1px solid rgba(30,41,59,0.5)",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"1rem" }}>
        <div style={{ display:"flex",alignItems:"center",gap:"clamp(1.25rem,3vw,2.5rem)",flexWrap:"wrap" }}>
          {[{val:"2",label:"Global Hubs"},{val:"24/7",label:"Operations"},{val:"2",label:"Continents"}].map((s,i)=>(
            <div key={i} style={{ display:"flex",flexDirection:"column",gap:"3px" }}>
              <span style={{ fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,fontSize:"clamp(1.2rem,2.5vw,1.8rem)",lineHeight:1,color:"#22d3ee",textShadow:"0 0 16px rgba(34,211,238,0.4)" }}>{s.val}</span>
              <span style={{ fontFamily:"'Martian Mono',monospace",fontSize:"0.48rem",letterSpacing:"0.16em",color:"rgba(100,116,139,0.55)",textTransform:"uppercase",fontWeight:300 }}>{s.label}</span>
            </div>
          ))}
        </div>
        <div style={{ display:"flex",alignItems:"center",gap:"10px",flexShrink:0 }}>
          <span style={{ fontFamily:"'Martian Mono',monospace",fontSize:"0.55rem",color:"rgba(6,182,212,0.45)",letterSpacing:"0.12em",fontWeight:300 }}>10</span>
          <div style={{ width:"36px",height:"1px",backgroundColor:"rgba(31,41,55,0.8)" }} />
          <span style={{ fontFamily:"'Martian Mono',monospace",fontSize:"0.48rem",letterSpacing:"0.22em",color:"rgba(75,85,99,0.55)",textTransform:"uppercase",fontWeight:300 }}>Global_Presence</span>
        </div>
      </div>
    </div>
  );
}