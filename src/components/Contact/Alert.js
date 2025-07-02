import React from "react";

const Alert = ({ type, message, onClose }) => {
  // type: "success" or "error"

  const bgColor = type === "success" ? "rgba(72, 187, 120, 0.9)" : "rgba(220, 53, 69, 0.9)";
  const icon = type === "success" ? "✔️" : "❌";

  return (
    <div
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        padding: "15px 25px",
        backgroundColor: bgColor,
        color: "white",
        fontWeight: "600",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        minWidth: "250px",
      }}
    >
      <span style={{ fontSize: "1.3rem" }}>{icon}</span>
      <span style={{ flex: 1 }}>{message}</span>
      <button
        onClick={onClose}
        style={{
          background: "transparent",
          border: "none",
          color: "white",
          fontSize: "1.2rem",
          cursor: "pointer",
          fontWeight: "bold",
        }}
        aria-label="Close alert"
      >
        ×
      </button>
    </div>
  );
};

export default Alert;
