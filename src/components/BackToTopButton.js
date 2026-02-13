import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`back-to-top-btn${visible ? " show" : ""}`}
      onClick={handleClick}
      aria-label="Back to top"
      style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <svg
        className="back-to-top-arrow"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", margin: "auto" }}
      >
        <path
          d="M11 16V6M11 6l-5 5M11 6l5 5"
          stroke="url(#arrowGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="arrowGradient" x1="0" y1="0" x2="22" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#818cf8" />
            <stop offset="0.5" stopColor="#6366f1" />
            <stop offset="1" stopColor="#4f46e5" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
};

export default BackToTopButton;
