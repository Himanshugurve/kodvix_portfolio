import { useState } from "react";

const EnvelopeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ display:"block",flexShrink:0 }}>
    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ display:"block",flexShrink:0 }}>
    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);
const GlobeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ display:"block",flexShrink:0 }}>
    <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display:"block",flexShrink:0 }}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
const ChevronIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display:"block",flexShrink:0 }}>
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const contacts = [
  { icon: <EnvelopeIcon />, label: "Email Us", value: "connect@kodvix.com", href: "mailto:connect@kodvix.com" },
  { icon: <PhoneIcon />, label: "Call Us", value: "+91  9755979148", href: "tel:+919755979148" },
  { icon: <GlobeIcon />, label: "Visit Website", value: "www.kodvix.com", href: "https://kodvix.com" },
];

function ContactRow({ icon, label, value, href }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={href} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ display:"flex",alignItems:"center",gap:"14px",textDecoration:"none",cursor:"pointer",padding:"10px 12px",borderRadius:"10px",background:hovered?"rgba(34,211,238,0.05)":"transparent",border:hovered?"1px solid rgba(34,211,238,0.2)":"1px solid transparent",transition:"all 0.3s ease",marginLeft:"-12px",marginRight:"-12px" }}>
      <div style={{ width:"38px",height:"38px",borderRadius:"9px",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,backgroundColor:hovered?"rgba(34,211,238,0.12)":"rgba(20,30,50,0.7)",border:hovered?"1px solid rgba(34,211,238,0.45)":"1px solid rgba(34,211,238,0.18)",color:"#22d3ee",boxShadow:hovered?"0 0 14px rgba(34,211,238,0.3)":"none",transition:"all 0.3s ease",boxSizing:"border-box" }}>{icon}</div>
      <div style={{ flex:1,minWidth:0 }}>
        <p style={{ fontFamily:"'Martian Mono',monospace",fontSize:"0.48rem",letterSpacing:"0.2em",color:"rgba(100,116,139,0.6)",margin:0,marginBottom:"3px",textTransform:"uppercase",fontWeight:300 }}>{label}</p>
        <p style={{ fontFamily:"'Barlow',sans-serif",fontWeight:600,fontSize:"clamp(0.85rem,1.2vw,0.95rem)",lineHeight:1.2,color:hovered?"#22d3ee":"#e2e8f0",margin:0,transition:"color 0.3s",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis" }}>{value}</p>
      </div>
      <div style={{ color:hovered?"#22d3ee":"rgba(100,116,139,0.3)",transform:hovered?"translateX(3px)":"translateX(0)",transition:"all 0.3s ease",flexShrink:0 }}><ChevronIcon /></div>
    </a>
  );
}

function CtaButton({ children, primary, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={onClick}
      style={{ display:"flex",alignItems:"center",gap:"8px",padding:"clamp(10px,1.5vw,13px) clamp(18px,2.5vw,26px)",borderRadius:"8px",fontFamily:"'Barlow',sans-serif",fontWeight:700,fontSize:"clamp(0.8rem,1.1vw,0.9rem)",letterSpacing:"0.02em",cursor:"pointer",border:"none",outline:"none",transition:"all 0.3s ease",...(primary?{backgroundColor:hovered?"#22d3ee":"#06b6d4",color:"#050810",boxShadow:hovered?"0 0 24px rgba(34,211,238,0.4)":"0 0 12px rgba(6,182,212,0.2)"}:{backgroundColor:"transparent",color:hovered?"#ffffff":"rgba(203,213,225,0.8)",border:`1px solid ${hovered?"rgba(255,255,255,0.4)":"rgba(71,85,105,0.6)"}`}) }}>
      {children}
      {primary && <div style={{ transform:hovered?"translateX(3px)":"translateX(0)",transition:"transform 0.3s ease" }}><ArrowIcon /></div>}
    </button>
  );
}

function QRCode() {
  return (
    <div style={{ position:"relative",width:"72px",height:"72px",flexShrink:0 }}>
      <div style={{ width:"100%",height:"100%",backgroundColor:"#ffffff",borderRadius:"8px",padding:"6px",boxSizing:"border-box",boxShadow:"0 0 16px rgba(34,211,238,0.2)",overflow:"hidden",position:"relative" }}>
        <svg width="60" height="60" viewBox="0 0 100 100" style={{ display:"block" }}>
          <rect fill="white" width="100" height="100"/>
          <rect fill="#050810" x="10" y="10" width="28" height="28" rx="2"/><rect fill="white" x="15" y="15" width="18" height="18" rx="1"/><rect fill="#050810" x="19" y="19" width="10" height="10" rx="1"/>
          <rect fill="#050810" x="62" y="10" width="28" height="28" rx="2"/><rect fill="white" x="67" y="15" width="18" height="18" rx="1"/><rect fill="#050810" x="71" y="19" width="10" height="10" rx="1"/>
          <rect fill="#050810" x="10" y="62" width="28" height="28" rx="2"/><rect fill="white" x="15" y="67" width="18" height="18" rx="1"/><rect fill="#050810" x="19" y="71" width="10" height="10" rx="1"/>
          {[[50,10],[60,10],[50,20],[60,20],[70,20],[80,20],[50,30],[70,30],[10,50],[20,50],[30,50],[10,60],[30,60],[10,70],[20,70],[10,80],[50,50],[60,50],[70,50],[80,50],[50,60],[80,60],[50,70],[60,70],[80,70],[60,80],[70,80],[80,80]].map(([x,y],i)=>(
            <rect key={i} fill="#050810" x={x} y={y} width="8" height="8" rx="1"/>
          ))}
        </svg>
        <div style={{ position:"absolute",left:"6px",right:"6px",height:"1.5px",backgroundColor:"#22d3ee",boxShadow:"0 0 6px #22d3ee",animation:"qrScan 2.5s ease-in-out infinite" }} />
      </div>
    </div>
  );
}

export default function KodVixContact() {
  return (
    <div style={{ position:"relative",width:"100%",minHeight:"100vh",backgroundColor:"#050810",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"clamp(2rem,5vw,4rem) clamp(1.5rem,5vw,4rem)",boxSizing:"border-box",overflow:"hidden",color:"#ffffff" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@300;400;500;600;700&family=Lora:ital,wght@0,300;0,400;1,300;1,400&family=Martian+Mono:wght@300;400;500&display=swap');
        @keyframes fadeUp{from{opacity:0;transform:translateY(18px);}to{opacity:1;transform:translateY(0);}}
        @keyframes lineExpand{from{width:0;opacity:0;}to{width:2rem;opacity:1;}}
        @keyframes qrScan{0%{top:6px;opacity:0;}10%{opacity:1;}90%{opacity:1;}100%{top:calc(100% - 8px);opacity:0;}}
        @keyframes dotBlink{0%,100%{opacity:1;}50%{opacity:0;}}
        @keyframes borderPulse{0%,100%{border-color:rgba(34,211,238,0.15);}50%{border-color:rgba(34,211,238,0.3);}}
        .ct-label{animation:fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.05s both;}
        .ct-card{animation:fadeUp 0.85s cubic-bezier(0.16,1,0.3,1) 0.15s both;}
        .main-card{animation:borderPulse 5s ease-in-out infinite;}
        @media(max-width:767px){.contact-card-inner{flex-direction:column!important;}.contact-right-panel{border-left:none!important;border-top:1px solid rgba(255,255,255,0.06)!important;max-width:100%!important;width:100%!important;}}
      `}</style>

      <div style={{ position:"absolute",top:"-15%",right:"-8%",width:"550px",height:"550px",borderRadius:"50%",background:"radial-gradient(circle,rgba(8,145,178,0.08) 0%,transparent 70%)",filter:"blur(80px)",pointerEvents:"none",zIndex:0 }} />
      <div style={{ position:"absolute",bottom:"-15%",left:"-8%",width:"500px",height:"500px",borderRadius:"50%",background:"radial-gradient(circle,rgba(30,58,138,0.07) 0%,transparent 70%)",filter:"blur(90px)",pointerEvents:"none",zIndex:0 }} />
      <div style={{ position:"absolute",inset:0,pointerEvents:"none",zIndex:0,backgroundImage:"linear-gradient(rgba(34,211,238,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(34,211,238,0.025) 1px,transparent 1px)",backgroundSize:"55px 55px" }} />
      {[{top:"1.25rem",left:"1.25rem",borderTop:"1.5px solid rgba(6,182,212,0.35)",borderLeft:"1.5px solid rgba(6,182,212,0.35)"},{top:"1.25rem",right:"1.25rem",borderTop:"1.5px solid rgba(6,182,212,0.35)",borderRight:"1.5px solid rgba(6,182,212,0.35)"},{bottom:"1.25rem",left:"1.25rem",borderBottom:"1.5px solid rgba(6,182,212,0.35)",borderLeft:"1.5px solid rgba(6,182,212,0.35)"},{bottom:"1.25rem",right:"1.25rem",borderBottom:"1.5px solid rgba(6,182,212,0.35)",borderRight:"1.5px solid rgba(6,182,212,0.35)"}].map((s,i)=><div key={i} style={{ position:"absolute",width:"18px",height:"18px",zIndex:5,...s }} />)}

      {/* Header label */}
      <div className="ct-label" style={{ position:"relative",zIndex:10,width:"100%",maxWidth:"900px",marginBottom:"clamp(1.25rem,2.5vw,2rem)",display:"flex",flexDirection:"column",alignItems:"flex-start" }}>
        <div style={{ display:"flex",alignItems:"center",gap:"12px",marginBottom:"0.5rem" }}>
          <div style={{ width:"2rem",height:"2px",borderRadius:"2px",backgroundColor:"#22d3ee",boxShadow:"0 0 8px rgba(34,211,238,0.8)",animation:"lineExpand 0.7s ease 0.05s both" }} />
          <span style={{ fontFamily:"'Martian Mono',monospace",fontSize:"0.58rem",letterSpacing:"0.26em",color:"#22d3ee",textTransform:"uppercase",fontWeight:400 }}>Contact</span>
        </div>
      </div>

      {/* Main card */}
      <div className="main-card ct-card" style={{ position:"relative",zIndex:10,width:"100%",maxWidth:"900px",borderRadius:"20px",overflow:"hidden",border:"1px solid rgba(34,211,238,0.15)",boxShadow:"0 0 60px rgba(6,182,212,0.08),0 4px 24px rgba(0,0,0,0.5)",background:"rgba(8,14,28,0.7)",backdropFilter:"blur(24px)",WebkitBackdropFilter:"blur(24px)" }}>
        <div style={{ position:"absolute",top:0,left:0,right:0,height:"1px",background:"linear-gradient(90deg,transparent 0%,rgba(34,211,238,0.6) 40%,rgba(34,211,238,0.6) 60%,transparent 100%)" }} />
        <div className="contact-card-inner" style={{ display:"flex",alignItems:"stretch" }}>

          {/* Left CTA */}
          <div style={{ flex:1,padding:"clamp(2rem,4vw,3rem)",display:"flex",flexDirection:"column",justifyContent:"space-between",gap:"clamp(1.5rem,3vw,2.5rem)",position:"relative" }}>
            <div style={{ position:"absolute",top:"-3rem",left:"-3rem",width:"250px",height:"250px",borderRadius:"50%",background:"radial-gradient(circle,rgba(6,182,212,0.07) 0%,transparent 70%)",pointerEvents:"none" }} />
            <div>
              <div style={{ display:"flex",alignItems:"center",gap:"10px",marginBottom:"clamp(0.75rem,1.5vw,1.25rem)" }}>
                <div style={{ width:"5px",height:"5px",borderRadius:"50%",backgroundColor:"#22d3ee",boxShadow:"0 0 6px #22d3ee",animation:"dotBlink 2s step-end infinite" }} />
                <span style={{ fontFamily:"'Barlow Condensed',sans-serif",fontWeight:600,fontSize:"0.65rem",letterSpacing:"0.22em",color:"#22d3ee",textTransform:"uppercase" }}>Start Now</span>
              </div>
              <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif",fontWeight:700,textTransform:"uppercase",fontSize:"clamp(1.8rem,4vw,3rem)",lineHeight:0.98,letterSpacing:"-0.01em",color:"#ffffff",margin:0,marginBottom:"clamp(0.75rem,1.5vw,1.1rem)" }}>
                Let's Build the<br/>
                <span style={{ color:"#22d3ee",textShadow:"0 0 24px rgba(34,211,238,0.45),0 0 60px rgba(34,211,238,0.2)" }}>Future Together.</span>
              </h2>
              <p style={{ fontFamily:"'Lora',serif",fontWeight:300,fontSize:"clamp(0.875rem,1.4vw,1rem)",lineHeight:1.72,color:"rgba(148,163,184,0.8)",margin:0,maxWidth:"380px" }}>
                Ready to transform your digital landscape? Partner with KodVix to engineer scalable solutions tailored for your enterprise growth.
              </p>
            </div>
            <div style={{ display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap" }}>
              
              
            </div>
            <div style={{ display:"flex",alignItems:"center",gap:"10px",padding:"10px 14px",borderRadius:"8px",border:"1px solid rgba(34,211,238,0.1)",background:"rgba(8,47,73,0.12)",alignSelf:"flex-start" }}>
              <div style={{ width:"4px",height:"4px",borderRadius:"50%",backgroundColor:"#22d3ee",boxShadow:"0 0 5px #22d3ee" }} />
              <span style={{ fontFamily:"'Martian Mono',monospace",fontSize:"0.48rem",letterSpacing:"0.16em",color:"rgba(103,232,249,0.7)",textTransform:"uppercase",fontWeight:300 }}>
                EST. 2026 · INDORE, INDIA · KODVIX TECHNOLOGIES
              </span>
            </div>
          </div>

          {/* Right contacts */}
          <div className="contact-right-panel" style={{ width:"clamp(260px,35%,340px)",flexShrink:0,padding:"clamp(2rem,4vw,3rem)",display:"flex",flexDirection:"column",justifyContent:"space-between",gap:"clamp(1.5rem,3vw,2rem)",borderLeft:"1px solid rgba(255,255,255,0.05)",background:"rgba(0,0,0,0.15)",position:"relative" }}>
            <div style={{ position:"absolute",top:"1rem",right:"1rem",width:"14px",height:"14px",borderTop:"1.5px solid rgba(34,211,238,0.3)",borderRight:"1.5px solid rgba(34,211,238,0.3)" }} />
            <div style={{ position:"absolute",bottom:"1rem",right:"1rem",width:"14px",height:"14px",borderBottom:"1.5px solid rgba(34,211,238,0.3)",borderRight:"1.5px solid rgba(34,211,238,0.3)" }} />
            <div>
              <p style={{ fontFamily:"'Barlow Condensed',sans-serif",fontWeight:500,fontSize:"0.62rem",letterSpacing:"0.22em",color:"rgba(100,116,139,0.5)",textTransform:"uppercase",margin:0,marginBottom:"clamp(0.85rem,1.5vw,1.25rem)" }}>Get in Touch</p>
              <div style={{ display:"flex",flexDirection:"column",gap:"4px" }}>
                {contacts.map((c,i) => <ContactRow key={i} {...c} />)}
              </div>
            </div>
            <div style={{ width:"100%",height:"1px",background:"linear-gradient(90deg,rgba(34,211,238,0.2),transparent)" }} />
            <div style={{ display:"flex",alignItems:"center",gap:"14px" }}>
              <QRCode />
              <div>
                <p style={{ fontFamily:"'Barlow',sans-serif",fontWeight:700,fontSize:"clamp(0.85rem,1.2vw,0.95rem)",letterSpacing:"-0.01em",color:"#e2e8f0",margin:0,marginBottom:"4px" }}>Quick Connect</p>
                <p style={{ fontFamily:"'Lora',serif",fontWeight:300,fontSize:"clamp(0.72rem,1vw,0.8rem)",lineHeight:1.65,color:"rgba(100,116,139,0.75)",margin:0 }}>
                  Scan to save contact<br/>or book a meeting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ position:"relative",zIndex:10,width:"100%",maxWidth:"900px",marginTop:"clamp(1.25rem,2.5vw,2rem)",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"1rem" }}>
        <div style={{ display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap" }}>
          {["Enterprise Ready","Agile Delivery","24/7 Support","Scalable"].map((tag,i)=>(
            <span key={i} style={{ fontFamily:"'Barlow Condensed',sans-serif",fontWeight:500,fontSize:"0.6rem",letterSpacing:"0.18em",color:"rgba(34,211,238,0.4)",textTransform:"uppercase",padding:"4px 12px",border:"1px solid rgba(34,211,238,0.1)",borderRadius:"999px" }}>{tag}</span>
          ))}
        </div>
        <div style={{ display:"flex",alignItems:"center",gap:"10px",flexShrink:0 }}>
          <span style={{ fontFamily:"'Martian Mono',monospace",fontSize:"0.55rem",color:"rgba(6,182,212,0.45)",letterSpacing:"0.12em",fontWeight:300 }}>11</span>
          <div style={{ width:"36px",height:"1px",backgroundColor:"rgba(31,41,55,0.8)" }} />
          <span style={{ fontFamily:"'Martian Mono',monospace",fontSize:"0.48rem",letterSpacing:"0.22em",color:"rgba(75,85,99,0.55)",textTransform:"uppercase",fontWeight:300 }}>Contact_Us</span>
        </div>
      </div>
    </div>
  );
}