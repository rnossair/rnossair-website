import { experience } from "@/data/site";

function formatDate(iso) {
  if (!iso) return "present";
  const [year, month] = iso.split("-");
  const names = [
    "jan", "feb", "mar", "apr", "may", "jun",
    "jul", "aug", "sep", "oct", "nov", "dec",
  ];
  return `${names[parseInt(month, 10) - 1]} ${year}`;
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="shell">
        <p className="section-tag">experience</p>
        <div style={{ position: "relative" }}>
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "0.3rem",
              top: "0.4rem",
              bottom: "0.4rem",
              width: "1px",
              background: "var(--moss-dim)",
            }}
          />
          <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "2.25rem" }}>
            {experience.map((job) => (
              <li key={job.role + job.org} style={{ position: "relative", paddingLeft: "2rem" }}>
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-0.02rem",
                    top: "0.45rem",
                    width: "0.6rem",
                    height: "0.6rem",
                    borderRadius: "999px",
                    background: "var(--moss)",
                    border: "2px solid var(--navy)",
                  }}
                />
                <div
                  className="mono"
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--moss-text)",
                    marginBottom: "0.4rem",
                  }}
                >
                  {formatDate(job.start)} → {formatDate(job.end)}
                </div>
                <h3
                  style={{
                    margin: "0 0 0.25rem",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                  }}
                >
                  {job.role} <span style={{ color: "var(--muted)", fontWeight: 400 }}>· {job.org}</span>
                </h3>
                <p style={{ margin: "0 0 0.75rem", color: "var(--muted)", fontSize: "0.92rem" }}>
                  {job.location}
                </p>
                <ul style={{ margin: 0, paddingLeft: "1.1rem", display: "grid", gap: "0.4rem" }}>
                  {job.bullets.map((b, i) => (
                    <li key={i} style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                      {b}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
