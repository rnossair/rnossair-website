import { profile } from "@/data/site";

export default function HeroSection() {
  return (
    <section id="top" className="section reveal" style={{ paddingTop: "3.5rem" }}>
      <div className="shell">
        <p className="mono section-tag" style={{ marginBottom: "1rem" }}>
          rnossair.dev
        </p>
        <h1
          className="mono"
          style={{
            fontSize: "clamp(2.2rem, 6vw, 3.6rem)",
            lineHeight: 1.08,
            fontWeight: 500,
            margin: "0 0 1.5rem",
            maxWidth: "18ch",
          }}
        >
          {profile.name}
        </h1>
        <p
          style={{
            fontSize: "clamp(1.05rem, 2vw, 1.3rem)",
            maxWidth: "38ch",
            color: "var(--muted)",
            margin: "0 0 2rem",
            lineHeight: 1.5,
          }}
        >
          Full-stack builder moving into{" "}
          <span style={{ color: "var(--salmon)" }}>agentic AI systems</span>.
        </p>
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }} className="mono">
          <a href={profile.github} target="_blank" rel="noreferrer" className="link-underline">
            github
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link-underline">
            linkedin
          </a>
          <a href={`mailto:${profile.email}`} className="link-underline">
            {profile.email}
          </a>
        </div>
      </div>
    </section>
  );
}
