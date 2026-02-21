import { useEffect, useRef, useState } from "react";
import kodvixLogo from "../assets/kodvix-logo (1).png";

export default function KodVixCover() {
  const canvasRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const particleCount = 90;
    const connectionDistance = 160;
    const particleSpeed = 0.3;

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * (canvas.width / window.devicePixelRatio);
        this.y = Math.random() * (canvas.height / window.devicePixelRatio);
        this.vx = (Math.random() - 0.5) * particleSpeed;
        this.vy = (Math.random() - 0.5) * particleSpeed;
        this.size = Math.random() * 1.5 + 0.5;
        this.pulse = Math.random() * Math.PI * 2;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += 0.02;
        const w = canvas.width / window.devicePixelRatio;
        const h = canvas.height / window.devicePixelRatio;
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
      }
      draw() {
        const alpha = 0.25 + Math.sin(this.pulse) * 0.12;
        ctx.fillStyle = `rgba(34,211,238,${alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles = Array.from({ length: particleCount }, () => new Particle());

    const animate = () => {
      const w = canvas.width / window.devicePixelRatio;
      const h = canvas.height / window.devicePixelRatio;
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.09;
            ctx.strokeStyle = `rgba(34,211,238,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      backgroundColor: "#050810",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    }}>
      <style>{`
        /*
        ╔══════════════════════════════════════════════════════╗
        ║           KODVIX TYPOGRAPHY SYSTEM                   ║
        ╠══════════════════════════════════════════════════════╣
        ║  DISPLAY (Brand)   → Outfit 800                      ║
        ║    Geometric, ultra-sharp, zero-compromise modern.   ║
        ║    -0.03em tracking at large size = premium density. ║
        ║                                                      ║
        ║  WORDMARK SUB-LABEL → Outfit 200                     ║
        ║    Ultra-light with +0.45em tracking = luxury air.   ║
        ║    Maximum contrast against the bold headline.       ║
        ║                                                      ║
        ║  TAGLINE / EDITORIAL → Cormorant Garamond 300 italic ║
        ║    High-contrast serif after geometric sans =        ║
        ║    sophistication, editorial trust, brand maturity.  ║
        ║                                                      ║
        ║  LABELS / MONO     → DM Mono 300–400                ║
        ║    Technical precision. Clean optical spacing.       ║
        ║    All-caps + wide tracking → system badge feel.     ║
        ╚══════════════════════════════════════════════════════╝
        */

        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Mono:wght@300;400;500&family=Outfit:wght@200;300;400;600;700;800&display=swap');

        /* Pixel-perfect rendering on all platforms */
        *, *::before, *::after {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes glowPulse {
          0%,100% {
            opacity: 0.7;
            box-shadow: 0 0 8px rgba(34,211,238,0.8), 0 0 22px rgba(34,211,238,0.3);
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 16px rgba(34,211,238,1), 0 0 40px rgba(34,211,238,0.5);
          }
        }
        @keyframes gridFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes bounce {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(6px); }
        }
        @keyframes blink {
          0%,100% { opacity: 1; }
          50%      { opacity: 0; }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes shimmerText {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }

        .fade-up-1 { animation: fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.15s both; }
        .fade-up-2 { animation: fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.35s both; }
        .fade-up-3 { animation: fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.55s both; }
        .fade-up-4 { animation: fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.72s both; }
        .fade-up-5 { animation: fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.88s both; }

        .neon-line  { animation: glowPulse 3.5s ease-in-out infinite; }
        .bounce-arr { animation: bounce   2s   ease-in-out infinite; }
        .cur-blink  { animation: blink    1s   step-end infinite; }
        .hex-ring   { animation: rotate   22s  linear   infinite; }

        .grid-overlay {
          background-image:
            linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridFade 2.5s ease 0.2s both;
        }

        /* Hover shimmer on the brand wordmark */
        .brand-wrap:hover .brand-word {
          background: linear-gradient(
            90deg,
            #22d3ee 0%, #a5f3fc 25%, #ffffff 45%,
            #22d3ee 55%, #a5f3fc 75%, #ffffff 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmerText 2.8s linear infinite;
        }

        .tag-pill { transition: border-color 0.35s, background 0.35s; }
        .tag-pill:hover {
          border-color: rgba(34,211,238,0.45);
          background: rgba(8,47,73,0.28);
        }

        .cta-link { transition: opacity 0.3s; }
        .cta-link:hover .cta-label {
          opacity: 1 !important;
          letter-spacing: 0.3em !important;
          transition: all 0.4s ease;
        }
      `}</style>

      {/* Canvas */}
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.42, zIndex: 0 }} />

      {/* Grid */}
      <div className="grid-overlay" style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }} />

      {/* Center glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: "min(700px, 90vw)", height: "min(700px, 90vh)",
        background: "radial-gradient(ellipse, rgba(6,182,212,0.07) 0%, transparent 68%)",
        pointerEvents: "none", zIndex: 1,
      }} />

      {/* Vignette */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at center, transparent 25%, rgba(5,8,16,0.88) 100%)",
        pointerEvents: "none", zIndex: 2,
      }} />

      {/* Blueprint corners */}
      {[
        { top:"1.5rem", left:"1.5rem",  borderTop:"1px solid rgba(6,182,212,0.4)", borderLeft:"1px solid rgba(6,182,212,0.4)"  },
        { top:"1.5rem", right:"1.5rem", borderTop:"1px solid rgba(6,182,212,0.4)", borderRight:"1px solid rgba(6,182,212,0.4)" },
        { bottom:"1.5rem", left:"1.5rem",  borderBottom:"1px solid rgba(6,182,212,0.4)", borderLeft:"1px solid rgba(6,182,212,0.4)"  },
        { bottom:"1.5rem", right:"1.5rem", borderBottom:"1px solid rgba(6,182,212,0.4)", borderRight:"1px solid rgba(6,182,212,0.4)" },
      ].map((s, i) => <div key={i} style={{ position:"absolute", width:"20px", height:"20px", zIndex:5, ...s }} />)}

      {/* Top status bar */}
      <div style={{ position:"absolute", top:"1.5rem", left:"50%", transform:"translateX(-50%)", display:"flex", alignItems:"center", gap:"8px", zIndex:5 }}>
        <div style={{ width:"6px", height:"6px", borderRadius:"50%", backgroundColor:"#22d3ee", boxShadow:"0 0 8px #22d3ee", animation:"blink 2.2s step-end infinite" }} />
        <span style={{ fontFamily:"'DM Mono', monospace", fontWeight:300, fontSize:"0.56rem", letterSpacing:"0.24em", color:"rgba(34,211,238,0.42)", textTransform:"uppercase" }}>
          SYS_ONLINE // v2.6.0
        </span>
      </div>

      {/* Bottom labels */}
      <span style={{ position:"absolute", bottom:"1.5rem", left:"1.5rem", zIndex:5, fontFamily:"'DM Mono', monospace", fontWeight:300, fontSize:"0.5rem", letterSpacing:"0.22em", color:"rgba(75,85,99,0.5)", textTransform:"uppercase" }}>
        EST. 2026
      </span>
      <span style={{ position:"absolute", bottom:"1.5rem", right:"1.5rem", zIndex:5, fontFamily:"'DM Mono', monospace", fontWeight:300, fontSize:"0.5rem", letterSpacing:"0.22em", color:"rgba(75,85,99,0.5)", textTransform:"uppercase" }}>
        KODVIX.IO
      </span>

      {/* ══ MAIN CONTENT ══ */}
      <div style={{
        position: "relative", zIndex: 10,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center",
        width: "100%", maxWidth: "860px",
        padding: "0 clamp(1.5rem, 5vw, 4rem)",
      }}>

        {/* Logo mark */}
        <div className="fade-up-1" style={{ marginBottom:"clamp(1.75rem, 3.5vw, 2.75rem)", position:"relative", display:"inline-flex", alignItems:"center", justifyContent:"center" }}>
          <svg className="hex-ring" style={{ position:"absolute", width:"calc(100% + 38px)", height:"calc(100% + 38px)", opacity:0.22 }} viewBox="0 0 80 80">
            <polygon points="40,4 73,22 73,58 40,76 7,58 7,22" fill="none" stroke="#22d3ee" strokeWidth="0.8" strokeDasharray="4 3" />
          </svg>
          <div style={{
            width:"clamp(52px, 6.5vw, 76px)", height:"clamp(52px, 6.5vw, 76px)",
            display:"flex", alignItems:"center", justifyContent:"center",
            border:"1.5px solid rgba(6,182,212,0.5)", borderRadius:"16px",
            backgroundColor:"rgba(172, 182, 205, 0.75)",
            boxShadow:"0 0 28px rgba(6,182,212,0.22), inset 0 0 16px rgba(6,182,212,0.04)",
            backdropFilter:"blur(12px)",
          }}>
            <img 
              src={kodvixLogo} 
              alt="KodVix" 
              style={{ 
                width:"clamp(42px, 5.5vw, 64px)", 
                height:"auto", 
                objectFit:"contain"
              }} 
            />
          </div>
        </div>

        {/* ── HEADING
            Font: Outfit 800 — geometric grotesque, zero personality clutter.
            At display size (-0.03em tracking), letters sit dense and confident.
            "Kod" inherits cyan brand accent; "Vix" holds pure white.
            Two-tone split = instant visual brand fingerprint.
        ── */}
        <h1 className="fade-up-2 brand-wrap" style={{ margin:0, marginBottom:"clamp(0.5rem, 1vw, 0.85rem)", cursor:"default" }}>
          <span
            className="brand-word"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(3rem, 8vw, 5.8rem)",
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              display: "block",
              color: "#ffffff",
              textShadow: "0 0 60px rgba(6,182,212,0.28), 0 2px 0 rgba(0,0,0,0.5)",
              transition: "all 0.3s ease",
              userSelect: "none",
            }}
          >
            <span style={{ color: "#22d3ee" }}>Kod</span>Vix
          </span>

          {/* Sub-wordmark: Outfit 200, wide tracking — maximum contrast via weight */}
          <span style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 200,
            fontSize: "clamp(0.65rem, 1.6vw, 1.1rem)",
            letterSpacing: "0.5em",
            color: "rgba(255,255,255,0.22)",
            display: "block",
            marginTop: "clamp(0.4rem, 0.8vw, 0.65rem)",
            textTransform: "uppercase",
            paddingLeft: "0.5em", /* compensate for letter-spacing on last char */
          }}>
            Technologies
          </span>
        </h1>

        {/* ── NEON LINE ── */}
        <div
          className="neon-line fade-up-2"
          style={{
            width: "clamp(36px, 5.5vw, 68px)",
            height: "2px",
            borderRadius: "2px",
            backgroundColor: "#22d3ee",
            margin: "0 auto",
            marginBottom: "clamp(1rem, 2vw, 1.6rem)",
          }}
        />

        {/* ── SUB-HEADING
            Font: Cormorant Garamond 300 Italic — high-contrast serif.
            After Outfit's geometric rigidity, the serif feels editorial + elevated.
            Italic at 300 weight creates softness without weakness.
            This is the "voice" of the brand; Outfit is the "face".
        ── */}
        <h2
          className="fade-up-3"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: "clamp(1.15rem, 2.6vw, 1.75rem)",
            letterSpacing: "0.03em",
            lineHeight: 1.3,
            color: "rgba(226,232,240,0.6)",
            margin: "0 auto",
            marginBottom: "clamp(1.25rem, 2.5vw, 2rem)",
            maxWidth: "440px",
          }}
        >
          Transforming Ideas into Digital Reality
        </h2>

        {/* ── TAG PILL
            Font: DM Mono 400 — technical, readable, precise.
            All-caps + 0.16em tracking = system capability badge.
            Smaller than body copy by design (0.62rem) so it reads as metadata.
        ── */}
        <div
          className="tag-pill fade-up-4"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "clamp(7px, 1vw, 11px) clamp(18px, 2.8vw, 28px)",
            borderRadius: "999px",
            border: "1px solid rgba(6,182,212,0.2)",
            backgroundColor: "rgba(6,47,73,0.1)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            marginBottom: "clamp(1.75rem, 3.5vw, 2.75rem)",
            cursor: "default",
          }}
        >
          <div style={{ width:"5px", height:"5px", borderRadius:"50%", backgroundColor:"#22d3ee", flexShrink:0, boxShadow:"0 0 7px #22d3ee" }} />
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontWeight: 400,
            fontSize: "clamp(0.5rem, 0.82vw, 0.62rem)",
            letterSpacing: "0.16em",
            color: "#67e8f9",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}>
            Engineering Scalable Digital Solutions
          </span>
          <span className="cur-blink" style={{ fontFamily:"'DM Mono', monospace", fontWeight:300, fontSize:"clamp(0.5rem, 0.82vw, 0.62rem)", color:"#22d3ee", marginLeft:"-2px" }}>
            _
          </span>
        </div>

        {/* ── SCROLL CTA
            Font: DM Mono 300 — whisper weight, ultra-wide tracking (0.28em).
            It should feel ambient, not demanding. Functional, not decorative.
            Opacity 0.42 keeps it subordinate to the headline hierarchy.
        ── */}
        <a
          href="#about"
          className="cta-link fade-up-5"
          style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"10px", textDecoration:"none" }}
        >
          <span
            className="cta-label"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontWeight: 300,
              fontSize: "clamp(0.46rem, 0.68vw, 0.56rem)",
              letterSpacing: "0.28em",
              color: "rgba(34,211,238,0.42)",
              textTransform: "uppercase",
              transition: "all 0.4s ease",
              paddingLeft: "0.28em", /* compensate last-char tracking */
            }}
          >
            Scroll to Explore
          </span>
          <svg
            className="bounce-arr"
            style={{ width:"clamp(11px, 1.3vw, 14px)", height:"clamp(11px, 1.3vw, 14px)", color:"rgba(34,211,238,0.5)" }}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
          </svg>
        </a>

      </div>
    </div>
  );
}