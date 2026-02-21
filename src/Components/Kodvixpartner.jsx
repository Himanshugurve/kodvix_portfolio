import { useState } from "react";
import kavlogo from "../assets/kaaavlogo.jpeg";

const HandshakeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ display:"block",flexShrink:0 }}>
    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const GlobeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ display:"block",flexShrink:0 }}>
    <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const ZapIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ display:"block",flexShrink:0 }}>
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

function GlassPanel({ icon, title, desc, num }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position:"relative",borderRadius:"16px",padding:"clamp(1.5rem,2.5vw,2rem)",
        display:"flex",flexDirection:"column",alignItems:"flex-start",overflow:"hidden",
        background: hovered ? "rgba(10,18,36,0.9)" : "rgba(8,14,28,0.6)",
        backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",
        border: hovered ? "1px solid rgba(34,211,238,0.45)" : "1px solid rgba(255,255,255,0.07)",
        boxShadow: hovered ? "0 8px 40px rgba(6,182,212,0.12),0 2px 8px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.04)" : "0 2px 12px rgba(0,0,0,0.4),inset 0 1px 0 rgba(255,255,255,0.02)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition:"all 0.38s cubic-bezier(0.34,1.2,0.64,1)",cursor:"default",flex:1,minWidth:0,
      }}
    >
      <div style={{ position:"absolute",top:0,left:0,right:0,height:"1px",background:"linear-gradient(90deg,transparent,rgba(34,211,238,0.7),transparent)",opacity:hovered?1:0,transition:"opacity 0.4s ease" }} />
      <div style={{ position:"absolute",top:"-40px",right:"-40px",width:"150px",height:"150px",borderRadius:"50%",background:"radial-gradient(circle,rgba(34,211,238,0.1) 0%,transparent 70%)",transform:hovered?"scale(1.6)":"scale(1)",transition:"transform 0.6s ease",pointerEvents:"none" }} />

      <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",marginBottom:"1.1rem" }}>
        <div style={{ width:"40px",height:"40px",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,backgroundColor:hovered?"rgba(34,211,238,0.12)":"rgba(20,30,50,0.7)",border:hovered?"1px solid rgba(34,211,238,0.5)":"1px solid rgba(51,65,85,0.5)",color:"#22d3ee",boxShadow:hovered?"0 0 16px rgba(34,211,238,0.35)":"0 0 8px rgba(34,211,238,0.1)",transition:"all 0.35s ease",boxSizing:"border-box" }}>{icon}</div>
        <span style={{ fontFamily:"'Martian Mono',monospace",fontSize:"0.5rem",letterSpacing:"0.2em",color:"rgba(100,116,139,0.4)",fontWeight:300 }}>{num}</span>
      </div>

      <h3 style={{ fontFamily:"'Barlow',sans-serif",fontWeight:700,fontSize:"clamp(1rem,1.6vw,1.2rem)",lineHeight:1.2,letterSpacing:"-0.01em",color:hovered?"#f0fdff":"#e2e8f0",margin:0,marginBottom:"0.5rem",transition:"color 0.3s" }}>{title}</h3>
      <div style={{ width:"100%",height:"1px",background:"linear-gradient(90deg,rgba(34,211,238,0.4) 0%,transparent 80%)",marginBottom:"0.75rem",opacity:hovered?1:0.3,transition:"opacity 0.3s" }} />
      <p style={{ fontFamily:"'Lora',serif",fontWeight:300,fontSize:"clamp(0.82rem,1.2vw,0.92rem)",lineHeight:1.72,color:hovered?"rgba(203,213,225,0.9)":"rgba(100,116,139,0.85)",margin:0,transition:"color 0.3s" }}>{desc}</p>
    </div>
  );
}

function HubOrb() {
  return (
    <div style={{ position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:"clamp(150px,18vw,200px)",height:"clamp(150px,18vw,200px)" }}>
      <div style={{ position:"absolute",inset:"-20px",borderRadius:"50%",border:"1px dashed rgba(34,211,238,0.15)",animation:"spinSlow 30s linear infinite reverse" }}>
        <div style={{ position:"absolute",top:"-4px",left:"50%",transform:"translateX(-50%)",width:"8px",height:"8px",borderRadius:"50%",backgroundColor:"#22d3ee",boxShadow:"0 0 8px #22d3ee,0 0 16px rgba(34,211,238,0.4)" }} />
      </div>
      <div style={{ position:"absolute",inset:"-6px",borderRadius:"50%",border:"1px solid rgba(34,211,238,0.2)",animation:"spinSlow 20s linear infinite" }}>
        <div style={{ position:"absolute",bottom:"-4px",left:"50%",transform:"translateX(-50%)",width:"6px",height:"6px",borderRadius:"50%",backgroundColor:"rgba(34,211,238,0.6)",boxShadow:"0 0 6px rgba(34,211,238,0.5)" }} />
      </div>
      <div style={{ position:"relative",width:"100%",height:"100%",borderRadius:"50%",background:"radial-gradient(circle at 35% 35%,rgba(34,211,238,0.15) 0%,rgba(6,182,212,0.05) 50%,transparent 100%)",border:"1px solid rgba(34,211,238,0.35)",boxShadow:"0 0 40px rgba(6,182,212,0.15),inset 0 0 30px rgba(6,182,212,0.05)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"4px",zIndex:2 }}>
        <img src={kavlogo} alt="KodVix" style={{ width:"clamp(3.5rem,6vw,5rem)",height:"auto",objectFit:"contain",filter:"drop-shadow(0 0 20px rgba(255,255,255,0.4)) drop-shadow(0 0 40px rgba(34,211,238,0.2))" }} />
        <div style={{ width:"60%",height:"1px",background:"linear-gradient(90deg,transparent,rgba(34,211,238,0.5),transparent)" }} />
        <span style={{ fontFamily:"'Martian Mono',monospace",fontSize:"0.48rem",letterSpacing:"0.3em",color:"#22d3ee",opacity:0.75,fontWeight:300 }}>GLOBAL</span>
      </div>
    </div>
  );
}

function Connector({ vertical = false }) {
  return (
    <div style={{ position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,...(vertical?{width:"1px",height:"clamp(24px,3vw,40px)",flexDirection:"column"}:{height:"1px",width:"clamp(24px,4vw,56px)",flexDirection:"row"}) }}>
      <div style={{ ...(vertical?{width:"1px",height:"100%",background:"linear-gradient(180deg,rgba(34,211,238,0.5),rgba(34,211,238,0.1))"}:{height:"1px",width:"100%",background:"linear-gradient(90deg,rgba(34,211,238,0.5),rgba(34,211,238,0.1))"}) }} />
    </div>
  );
}

export default function KodVixPartner() {
  return (
    <div style={{ position:"relative",width:"100%",minHeight:"100vh",backgroundColor:"#050810",display:"flex",flexDirection:"column",padding:"clamp(2rem,5vw,4rem) clamp(1.5rem,5vw,4rem)",boxSizing:"border-box",overflow:"hidden",color:"#ffffff" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@300;400;500;600;700&family=Lora:ital,wght@0,300;0,400;1,300;1,400&family=Martian+Mono:wght@300;400;500&display=swap');
        @keyframes fadeUp { from{opacity:0;transform:translateY(18px);}to{opacity:1;transform:translateY(0);} }
        @keyframes lineExpand { from{width:0;opacity:0;}to{width:3rem;opacity:1;} }
        @keyframes spinSlow { from{transform:rotate(0deg);}to{transform:rotate(360deg);} }
        @keyframes orbPulse { 0%,100%{box-shadow:0 0 40px rgba(6,182,212,0.15),inset 0 0 30px rgba(6,182,212,0.05);}50%{box-shadow:0 0 60px rgba(6,182,212,0.25),inset 0 0 40px rgba(6,182,212,0.08);} }
        @keyframes dotBlink { 0%,100%{opacity:1;}50%{opacity:0;} }
        @keyframes crossRotate { 0%,100%{opacity:0.04;}50%{opacity:0.08;} }
        .p-label{animation:fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.05s both;}
        .p-h2{animation:fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.18s both;}
        .p-hub{animation:fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s both;}
        .p-panel-0{animation:fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.42s both;}
        .p-panel-1{animation:fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.55s both;}
        .p-footer{animation:fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.65s both;}
        .hub-core{animation:orbPulse 4s ease-in-out infinite;}
        .cross-h,.cross-v{animation:crossRotate 6s ease-in-out infinite;}
        @media(max-width:767px){.partner-hub-row{flex-direction:column!important;align-items:center!important;}.partner-connector-h{display:none!important;}.partner-connector-v{display:flex!important;}.partner-panels{flex-direction:column!important;}}
        @media(min-width:768px){.partner-connector-v{display:none!important;}}
      `}</style>

      {/* Background */}
      <div style={{ position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"70vw",height:"70vw",maxWidth:"700px",maxHeight:"700px",borderRadius:"50%",background:"radial-gradient(ellipse,rgba(6,182,212,0.04) 0%,transparent 70%)",pointerEvents:"none",zIndex:0 }} />
      {[{size:"clamp(200px,28vw,340px)",border:"1px dashed rgba(34,211,238,0.08)"},{size:"clamp(320px,44vw,520px)",border:"1px dashed rgba(34,211,238,0.06)"},{size:"clamp(450px,62vw,740px)",border:"1px solid rgba(34,211,238,0.04)"}].map((r,i)=><div key={i} style={{ position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:r.size,height:r.size,borderRadius:"50%",border:r.border,pointerEvents:"none",zIndex:1 }} />)}
      <div className="cross-v" style={{ position:"absolute",top:0,bottom:0,left:"50%",transform:"translateX(-50%)",width:"1px",background:"linear-gradient(180deg,transparent,rgba(34,211,238,0.08) 30%,rgba(34,211,238,0.08) 70%,transparent)",pointerEvents:"none",zIndex:1 }} />
      <div className="cross-h" style={{ position:"absolute",left:0,right:0,top:"50%",transform:"translateY(-50%)",height:"1px",background:"linear-gradient(90deg,transparent,rgba(34,211,238,0.08) 30%,rgba(34,211,238,0.08) 70%,transparent)",pointerEvents:"none",zIndex:1 }} />
      <div style={{ position:"absolute",inset:0,pointerEvents:"none",zIndex:0,backgroundImage:"linear-gradient(rgba(34,211,238,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(34,211,238,0.02) 1px,transparent 1px)",backgroundSize:"55px 55px" }} />
      {[{top:"1.25rem",left:"1.25rem",borderTop:"1.5px solid rgba(6,182,212,0.35)",borderLeft:"1.5px solid rgba(6,182,212,0.35)"},{top:"1.25rem",right:"1.25rem",borderTop:"1.5px solid rgba(6,182,212,0.35)",borderRight:"1.5px solid rgba(6,182,212,0.35)"},{bottom:"1.25rem",left:"1.25rem",borderBottom:"1.5px solid rgba(6,182,212,0.35)",borderLeft:"1.5px solid rgba(6,182,212,0.35)"},{bottom:"1.25rem",right:"1.25rem",borderBottom:"1.5px solid rgba(6,182,212,0.35)",borderRight:"1.5px solid rgba(6,182,212,0.35)"}].map((s,i)=><div key={i} style={{ position:"absolute",width:"18px",height:"18px",zIndex:5,...s }} />)}

      {/* Header */}
      <div style={{ position:"relative",zIndex:10,marginBottom:"clamp(2rem,4vw,3.5rem)",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center" }}>
        <div className="p-label" style={{ display:"flex",alignItems:"center",gap:"14px",marginBottom:"clamp(0.6rem,1.2vw,1rem)" }}>
          <div style={{ width:"3rem",height:"2px",borderRadius:"2px",backgroundColor:"#22d3ee",boxShadow:"0 0 8px rgba(34,211,238,0.8)",animation:"lineExpand 0.7s ease 0.05s both" }} />
          <span style={{ fontFamily:"'Martian Mono',monospace",fontSize:"0.58rem",letterSpacing:"0.26em",color:"#22d3ee",textTransform:"uppercase",fontWeight:400 }}>Partnership</span>
          <div style={{ width:"3rem",height:"2px",borderRadius:"2px",backgroundColor:"#22d3ee",boxShadow:"0 0 8px rgba(34,211,238,0.8)",animation:"lineExpand 0.7s ease 0.05s both" }} />
        </div>
        <h2 className="p-h2" style={{ fontFamily:"'Barlow Condensed',sans-serif",fontWeight:700,textTransform:"uppercase",fontSize:"clamp(2rem,5.5vw,4rem)",lineHeight:0.98,letterSpacing:"-0.01em",color:"#ffffff",margin:0,marginBottom:"0.5rem" }}>
          Strategic{" "}
          <span style={{ color:"#22d3ee",textShadow:"0 0 24px rgba(6,182,212,0.45),0 0 60px rgba(6,182,212,0.2)" }}>Alliances</span>
        </h2>
        <p className="p-h2" style={{ fontFamily:"'Lora',serif",fontWeight:300,fontStyle:"italic",fontSize:"clamp(0.875rem,1.4vw,1.05rem)",letterSpacing:"0.015em",color:"rgba(148,163,184,0.65)",margin:0 }}>
          Amplifying impact through world-class partnerships.
        </p>
      </div>

      {/* Hub layout */}
      <div className="partner-hub-row p-hub" style={{ position:"relative",zIndex:10,display:"flex",alignItems:"center",justifyContent:"center",gap:"clamp(1rem,3vw,2.5rem)",flex:1,flexWrap:"nowrap" }}>
        <div className="p-panel-0" style={{ flex:1,maxWidth:"340px",display:"flex" }}>
          <GlassPanel num="01" icon={<HandshakeIcon />} title="The Collaboration" desc="Proudly partnered with KAAV to deliver future-ready digital products. Together, we combine our technical strengths to push the boundaries of what's possible." />
        </div>
        <div className="partner-connector-h"><Connector vertical={false} /></div>
        <div style={{ display:"flex",flexDirection:"column",alignItems:"center",gap:"clamp(12px,2vw,20px)",flexShrink:0 }}>
          <HubOrb />
          <div style={{ display:"flex",alignItems:"center",gap:"8px",padding:"6px 14px",borderRadius:"999px",border:"1px solid rgba(34,211,238,0.2)",background:"rgba(8,47,73,0.2)",backdropFilter:"blur(8px)" }}>
            <div style={{ width:"5px",height:"5px",borderRadius:"50%",backgroundColor:"#22d3ee",boxShadow:"0 0 5px #22d3ee",animation:"dotBlink 2s step-end infinite" }} />
            <span style={{ fontFamily:"'Barlow Condensed',sans-serif",fontWeight:500,fontSize:"0.65rem",letterSpacing:"0.18em",color:"#67e8f9",textTransform:"uppercase" }}>KodVix × KAAV</span>
            <ZapIcon />
          </div>
        </div>
        <div className="partner-connector-v" style={{ display:"none" }}><Connector vertical /></div>
        <div className="partner-connector-h"><Connector vertical={false} /></div>
        <div className="p-panel-1" style={{ flex:1,maxWidth:"340px",display:"flex" }}>
          <GlassPanel num="02" icon={<GlobeIcon />} title="Market Position" desc="This partnership allows us to serve diverse industries with enhanced technical depth and global reach, ensuring access to cutting-edge resources and talent." />
        </div>
      </div>

      {/* Stats */}
      <div className="p-footer" style={{ position:"relative",zIndex:10,marginTop:"clamp(1.75rem,3.5vw,3rem)",display:"flex",alignItems:"center",justifyContent:"center",gap:"clamp(1.5rem,5vw,4rem)",flexWrap:"wrap" }}>
        {[{value:"2",label:"Industry Verticals"},{value:"∞",label:"Combined Potential"},{value:"1",label:"Unified Vision"}].map((s,i)=>(
          <div key={i} style={{ display:"flex",flexDirection:"column",alignItems:"center",gap:"4px" }}>
            <span style={{ fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,fontSize:"clamp(1.5rem,3vw,2.25rem)",lineHeight:1,color:"#22d3ee",textShadow:"0 0 16px rgba(34,211,238,0.4)" }}>{s.value}</span>
            <span style={{ fontFamily:"'Martian Mono',monospace",fontSize:"0.48rem",letterSpacing:"0.16em",color:"rgba(100,116,139,0.55)",textTransform:"uppercase",fontWeight:300 }}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-footer" style={{ position:"relative",zIndex:10,marginTop:"clamp(1.25rem,2.5vw,2rem)",paddingTop:"clamp(1rem,1.5vw,1.25rem)",borderTop:"1px solid rgba(30,41,59,0.5)",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"1rem" }}>
        <div style={{ display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap" }}>
          {["Strategic","Global Reach","Innovation","Co-Creation"].map((tag,i)=>(
            <span key={i} style={{ fontFamily:"'Barlow Condensed',sans-serif",fontWeight:500,fontSize:"0.6rem",letterSpacing:"0.18em",color:"rgba(34,211,238,0.4)",textTransform:"uppercase",padding:"4px 12px",border:"1px solid rgba(34,211,238,0.1)",borderRadius:"999px" }}>{tag}</span>
          ))}
        </div>
        <div style={{ display:"flex",alignItems:"center",gap:"10px",flexShrink:0 }}>
          <span style={{ fontFamily:"'Martian Mono',monospace",fontSize:"0.55rem",color:"rgba(6,182,212,0.45)",letterSpacing:"0.12em",fontWeight:300 }}>08</span>
          <div style={{ width:"36px",height:"1px",backgroundColor:"rgba(31,41,55,0.8)" }} />
          <span style={{ fontFamily:"'Martian Mono',monospace",fontSize:"0.48rem",letterSpacing:"0.22em",color:"rgba(75,85,99,0.55)",textTransform:"uppercase",fontWeight:300 }}>Strategic_Partner</span>
        </div>
      </div>
    </div>
  );
}