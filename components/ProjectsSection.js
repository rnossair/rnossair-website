import Image from "next/image";
import { projects } from "@/data/site";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="shell">
        <p className="section-tag">projects</p>
        <div style={{ display: "grid", gap: "3rem" }}>
          {projects.map((project) => (
            <article
              key={project.slug}
              className="hairline project-card"
              style={{
                borderRadius: "6px",
                overflow: "hidden",
                display: "grid",
                gridTemplateColumns: "22rem 1fr",
              }}
            >
              <div
                style={{
                  background: "var(--navy-raised)",
                  position: "relative",
                  aspectRatio: "9 / 7",
                  borderRight: "1px solid var(--moss-dim)",
                }}
                className="project-thumb"
              >
                {project.screenshot ? (
                  <Image
                    src={project.screenshot}
                    alt={`${project.name} screenshot`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <div
                    className="mono"
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "grid",
                      placeItems: "center",
                      color: "var(--moss-dim)",
                      fontSize: "0.72rem",
                      letterSpacing: "0.04em",
                    }}
                  >
                    screenshot pending
                  </div>
                )}
              </div>

              <div style={{ padding: "1.75rem" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: "1rem",
                    flexWrap: "wrap",
                    marginBottom: "0.75rem",
                  }}
                >
                  <h3 className="mono" style={{ margin: 0, fontSize: "1.25rem", fontWeight: 500 }}>
                    {project.name}
                  </h3>
                  <span
                    className="mono commit-range"
                    style={{ fontSize: "0.75rem", color: "var(--moss-text)" }}
                  >
                    {project.commits.first.sha} → {project.commits.latest.sha}
                  </span>
                </div>

                <p style={{ margin: "0 0 1.1rem", color: "var(--muted)", maxWidth: "48ch" }}>
                  {project.description}
                </p>

                <div
                  className="mono"
                  style={{
                    display: "flex",
                    gap: "0.6rem",
                    flexWrap: "wrap",
                    marginBottom: "1.25rem",
                    fontSize: "0.75rem",
                  }}
                >
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        border: "1px solid var(--moss-dim)",
                        borderRadius: "999px",
                        padding: "0.25rem 0.7rem",
                        color: "var(--muted)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "1.5rem" }} className="mono">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline"
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--salmon)",
                      textDecorationColor: "var(--salmon)",
                    }}
                  >
                    live →
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline"
                    style={{ fontSize: "0.9rem" }}
                  >
                    source →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 720px) {
          .project-card {
            grid-template-columns: 1fr !important;
          }
          .project-thumb {
            aspect-ratio: 16 / 9 !important;
            border-right: none !important;
            border-bottom: 1px solid var(--moss-dim);
          }
        }
        @media (max-width: 400px) {
          .commit-range {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
