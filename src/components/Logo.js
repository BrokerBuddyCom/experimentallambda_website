import React from "react";

function Logo({ size = "default", showText = true }) {
  const iconSize = size === "small" ? 32 : size === "large" ? 48 : 40;
  const fontSize = size === "small" ? 16 : size === "large" ? 24 : 20;

  return (
    <div
      className="logo-container"
      style={{ display: "flex", alignItems: "center", gap: "12px" }}
    >
      {/* Logo Icon */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo-icon"
      >
        {/* Gradient Background */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>
          <linearGradient
            id="lambdaGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e0e7ff" />
          </linearGradient>
        </defs>

        {/* Rounded Rectangle Background */}
        <rect
          x="0"
          y="0"
          width="48"
          height="48"
          rx="12"
          ry="12"
          fill="url(#logoGradient)"
        />

        {/* Lambda Symbol (λ) */}
        <text
          x="50%"
          y="54%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="url(#lambdaGradient)"
          fontSize="32"
          fontWeight="300"
          fontFamily="Georgia, serif"
        >
          λ
        </text>
      </svg>

      {/* Logo Text */}
      {showText && (
        <div
          className="logo-text"
          style={{ display: "flex", alignItems: "baseline" }}
        >
          <span
            style={{
              fontSize: `${fontSize}px`,
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
            className="logo-text-experimental"
          >
            Experimental
          </span>
          <span
            style={{
              fontSize: `${fontSize}px`,
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
            className="logo-text-lambda"
          >
            Lambda
          </span>
        </div>
      )}
    </div>
  );
}

export default Logo;
