import { ImageResponse } from "next/og";

import { profile } from "@/data/profile";

export const alt = "Nikhil Pathak Software Developer Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#0b0f19",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            gap: "18px",
          }}
        >
          <div
            style={{
              alignItems: "center",
              background: "#06b6d4",
              borderRadius: "24px",
              color: "#0b0f19",
              display: "flex",
              fontSize: "40px",
              fontWeight: 800,
              height: "88px",
              justifyContent: "center",
              width: "88px",
            }}
          >
            NP
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ color: "#cbd5e1", fontSize: "28px", fontWeight: 600 }}>
              Software Developer
            </div>
            <div style={{ color: "#67e8f9", fontSize: "24px", marginTop: "6px" }}>
              Java - Spring Boot - React
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "82px",
              fontWeight: 800,
              letterSpacing: "0",
              lineHeight: 1,
            }}
          >
            {profile.fullName}
          </div>
          <div
            style={{
              color: "#cbd5e1",
              fontSize: "34px",
              lineHeight: 1.35,
              marginTop: "28px",
              maxWidth: "980px",
            }}
          >
            {profile.tagline}
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid #2a3447",
            color: "#94a3b8",
            display: "flex",
            fontSize: "24px",
            justifyContent: "space-between",
            paddingTop: "28px",
          }}
        >
          <span>Backend Engineering</span>
          <span>Full Stack Development</span>
          <span>AI-powered Applications</span>
        </div>
      </div>
    ),
    size,
  );
}
