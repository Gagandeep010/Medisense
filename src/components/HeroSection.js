import React from "react";

const HeroSection = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", padding: "2rem", backgroundColor: "#f4f4f8", borderRadius: '15px' , marginRight: '1rem'}}>
      {/* Text Section */}
      <div style={{ flex: 1, marginRight: "2rem", textAlign: "left" }}>
        <h1 style={{ fontSize: "2.5rem", lineHeight: "1.2", color: "#333", marginBottom: "1rem" }}>
          A <span style={{ fontWeight: "bold", color: "#6A5ACD" }}>Great Place</span> <br />
          to Receive <span style={{ fontWeight: "bold", color: "#6A5ACD" }}>Care</span>
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#666" }}>
          Professional Medical Indemnity Insurance
        </p>
      </div>

      {/* Image Section */}
      <img
        src="/doc1.png"
        alt="Doctor"
        style={{
          maxWidth: "500px",
          borderRadius: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          // transform: "scaleX(-1)", // This flips the image horizontally
        }}
      />
    </div>
  );
};

export default HeroSection;
