import React, { useEffect, useRef } from "react";
import "./AnimatedBackground.css";

function AnimatedBackground() {
  const cursorGlowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.left = e.clientX + "px";
        cursorGlowRef.current.style.top = e.clientY + "px";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="animated-bg">
      {/* Cursor Following Glow */}
      <div ref={cursorGlowRef} className="cursor-glow"></div>

      {/* Floating Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
      <div className="orb orb-4"></div>

      {/* Morphing Blob */}
      <div className="blob-container">
        <div className="blob"></div>
      </div>

      {/* Animated Grid */}
      <div className="animated-grid">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="grid-cell"
            style={{
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Lines */}
      <svg
        className="animated-lines"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0)" />
            <stop offset="50%" stopColor="rgba(99, 102, 241, 0.8)" />
            <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
          </linearGradient>
          <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(139, 92, 246, 0)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.6)" />
            <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
          </linearGradient>
        </defs>
        <path className="line line-1" d="M0,400 Q300,100 600,400 T1200,400" />
        <path className="line line-2" d="M0,450 Q300,150 600,450 T1200,450" />
        <path className="line line-3" d="M0,500 Q300,200 600,500 T1200,500" />
        {/* Shooting stars */}
        <circle className="shooting-star star-1" r="2" />
        <circle className="shooting-star star-2" r="1.5" />
        <circle className="shooting-star star-3" r="2.5" />
      </svg>

      {/* Floating Particles */}
      <div className="particles">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`particle ${i % 3 === 0 ? "particle-glow" : ""}`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 20}s`,
            }}
          />
        ))}
      </div>

      {/* Noise Overlay */}
      <div className="noise-overlay"></div>
    </div>
  );
}

export default AnimatedBackground;
