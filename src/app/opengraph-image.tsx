import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0e2e1f 0%, #081d14 60%, #1c5138 100%)",
          color: "#fffdf9",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 80% 10%, rgba(203,153,40,0.35), transparent 55%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: "50%",
            border: "2px solid #dfb03d",
            marginBottom: 32,
            fontSize: 40,
            color: "#dfb03d",
          }}
        >
          TF
        </div>
        <div style={{ fontSize: 68, fontWeight: 700, letterSpacing: -1 }}>{siteConfig.name}</div>
        <div
          style={{
            marginTop: 18,
            fontSize: 30,
            color: "#dfb03d",
            fontStyle: "italic",
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
