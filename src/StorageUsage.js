import React, { useState } from "react";

const storageLinks = [
  { name: "Hot Storage", url: "#" },
  { name: "Cool Storage", url: "#" },
  { name: "Archive Storage", url: "#" },
];

function StorageUsage() {
  const [hotUsage, setHotUsage] = useState(10);
  const [coldStarted, setColdStarted] = useState(false);
  const [daysElapsed, setDaysElapsed] = useState(0);

  const handleMouseMove = () => {
    setHotUsage((prev) => (prev < 100 ? prev + 1 : 10));
    setDaysElapsed((prev) => {
      const next = prev + 1;
      if (next >= 30) setColdStarted(true);
      return next;
    });
  };

  return (
    <div
      style={{
        fontFamily: "Segoe UI, Arial, sans-serif",
        background: "#f4fafd",
        minHeight: "100vh",
        padding: 40,
      }}
      onMouseMove={handleMouseMove}
      onClick={handleMouseMove}
    >
      {/* Azure-like menu */}
      <nav
        style={{
          background: "#0078d4",
          color: "#fff",
          padding: "12px 24px",
          borderRadius: 6,
          marginBottom: 32,
          fontWeight: 600,
          fontSize: 18,
          letterSpacing: 1,
        }}
      >
        Azure Storage Account
      </nav>

      {/* Storage flow */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {storageLinks.map((storage, idx) => (
          <React.Fragment key={storage.name}>
            <a
              href={storage.url}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textDecoration: "none",
                color: "#0078d4",
                background: "#fff",
                border: "1px solid #e1e4e8",
                borderRadius: 8,
                padding: "24px 32px",
                minWidth: 120,
                boxShadow: "0 2px 8px #0001",
                fontWeight: 500,
                fontSize: 16,
                transition: "box-shadow 0.2s",
              }}
            >
              {storage.name === "Hot Storage" && (
                <span
                  style={{
                    fontSize: 13,
                    color: "#333",
                    marginBottom: 8,
                  }}
                >
                  {hotUsage}% full
                </span>
              )}
              {storage.name === "Cool Storage" && (
                <span
                  style={{
                    fontSize: 13,
                    color: "#333",
                    marginBottom: 8,
                  }}
                >
                  {coldStarted
                    ? "Tracking started"
                    : `Will start after ${30 - daysElapsed} days`}
                </span>
              )}
              {storage.name}
            </a>
            {idx < storageLinks.length - 1 && (
              <span
                style={{
                  display: "inline-block",
                  width: 60,
                  height: 24,
                  background: "#0078d4", // <-- fixed here
                  margin: "0 12px",
                  position: "relative",
                  borderRadius: 2,
                  top: 0,
                }}
              >
                {/* Arrowhead */}
                <span
                  style={{
                    position: "absolute",
                    right: -18,
                    top: 2,
                    width: 0,
                    height: 0,
                    borderTop: "10px solid transparent",
                    borderBottom: "10px solid transparent",
                    borderLeft: "20px solid #0078d4",
                    filter: "drop-shadow(0 0 2px #ff9800)",
                  }}
                />
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
      <div
        style={{
          marginTop: 32,
          fontSize: 13,
          color: "#888",
          textAlign: "center",
        }}
      >
        Move or click your cursor to simulate usage and days passing.
      </div>
    </div>
  );
}

export default StorageUsage;