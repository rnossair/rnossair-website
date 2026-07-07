import Image from "next/image";
import { about, profile } from "@/data/site";

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="shell">
        <p className="section-tag">about</p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "7rem 1fr",
            gap: "2rem",
            alignItems: "start",
          }}
          className="about-grid"
        >
          <div
            style={{
              width: "7rem",
              height: "7rem",
              borderRadius: "4px",
              overflow: "hidden",
              filter: "grayscale(0.15)",
            }}
          >
            <Image
              src={profile.photo}
              alt={profile.name}
              width={112}
              height={112}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div style={{ display: "grid", gap: "1.1rem", maxWidth: "62ch" }}>
            {about.body.map((p, i) => (
              <p key={i} style={{ margin: 0, color: "var(--muted)" }}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          .about-grid > div:first-child {
            width: 5rem !important;
            height: 5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
