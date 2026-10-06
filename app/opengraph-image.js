import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteMeta } from "./lib/siteMeta";

export const alt = `${siteMeta.legalName} — ${siteMeta.promise}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const LIME = "#9ED93A";
const INK = "#0E1A14";


export default async function OpengraphImage() {
  const [oswaldBold, oswaldSemi, interMedium, interSemi, logoPng] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/Oswald-Bold.ttf")),
    readFile(join(process.cwd(), "assets/fonts/Oswald-SemiBold.ttf")),
    readFile(join(process.cwd(), "assets/fonts/Inter-Medium.ttf")),
    readFile(join(process.cwd(), "assets/fonts/Inter-SemiBold.ttf")),
    readFile(join(process.cwd(), "public/logo.png")),
  ]);
  const logo = `data:image/png;base64,${logoPng.toString("base64")}`;

  const dot = (
    <div style={{ width: 5, height: 5, borderRadius: 999, background: "rgba(255,255,255,0.45)" }} />
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: INK,
          fontFamily: "Inter",
          color: "white",
        }}
      >
        {/* Brand gradient, as in the home hero */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            display: "flex",
            backgroundImage: "linear-gradient(105deg, #0E2814 0%, #1F5F2A 48%, #143E1B 78%, #0E1A14 100%)",
          }}
        />

        {/* Grid lines */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            display: "flex",
            opacity: 0.07,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Lime glow behind the shield */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -140,
            width: 760,
            height: 760,
            display: "flex",
            backgroundImage: "radial-gradient(circle, rgba(158,217,58,0.28) 0%, rgba(158,217,58,0) 62%)",
          }}
        />

        {/* Top accent bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 8, display: "flex", background: LIME }} />

        {/* Content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "64px 72px 52px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexDirection: "column", maxWidth: 820 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  fontSize: 18,
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: LIME,
                }}
              >
                <div style={{ width: 10, height: 10, borderRadius: 999, background: LIME }} />
                {`${siteMeta.nscdcCategory} Licensed · NSCDC Approved`}
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 26,
                  fontFamily: "Oswald",
                  fontWeight: 700,
                  fontSize: 80,
                  lineHeight: 0.98,
                  letterSpacing: "-0.01em",
                  textTransform: "uppercase",
                }}
              >
                <div style={{ display: "flex", gap: 22 }}>
                  <span>We Secure</span>
                  <span style={{ color: LIME }}>Quietly.</span>
                </div>
                <span>We Protect Effectively.</span>
              </div>

              <div
                style={{
                  display: "flex",
                  marginTop: 28,
                  fontSize: 26,
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                {siteMeta.positioning}
              </div>
            </div>

            {/* Shield in a glass card */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 210,
                height: 250,
                borderRadius: 28,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.22)",
                boxShadow: "0 30px 60px rgba(0,0,0,0.35)",
              }}
            >
              <img src={logo} width={152} height={190} style={{ objectFit: "contain" }} />
            </div>
          </div>

          {/* Footer strip */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 26,
              borderTop: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div
                style={{
                  display: "flex",
                  fontFamily: "Oswald",
                  fontWeight: 600,
                  fontSize: 26,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                {siteMeta.legalName}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  fontSize: 15,
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                <span>{siteMeta.rc}</span>
                {dot}
                <span>{siteMeta.nscdc}</span>
                {dot}
                <span>{`${siteMeta.address.city}, ${siteMeta.address.country}`}</span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 24px",
                borderRadius: 999,
                background: LIME,
                color: INK,
                fontSize: 19,
                fontWeight: 600,
                letterSpacing: "0.06em",
              }}
            >
              {siteMeta.domain}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Oswald", data: oswaldBold, weight: 700, style: "normal" },
        { name: "Oswald", data: oswaldSemi, weight: 600, style: "normal" },
        { name: "Inter", data: interMedium, weight: 500, style: "normal" },
        { name: "Inter", data: interSemi, weight: 600, style: "normal" },
      ],
    }
  );
}
