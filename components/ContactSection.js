import { profile } from "@/data/site";

const links = [
  { label: "email", href: `mailto:${profile.email}`, value: profile.email },
  { label: "github", href: profile.github, value: "github.com/rnossair" },
  { label: "linkedin", href: profile.linkedin, value: "linkedin.com/in/rayane-nossair" },
  { label: "resume", href: profile.resume, value: "download pdf" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="shell">
        <p className="section-tag">contact</p>
        <h2 className="section-heading" style={{ marginBottom: "2rem" }}>
          Open to software engineering internships and collaborations.
        </h2>
        <dl
          style={{
            margin: 0,
            display: "grid",
            gap: "0.9rem",
          }}
        >
          {links.map((l) => (
            <div
              key={l.label}
              style={{
                display: "flex",
                gap: "1.5rem",
                alignItems: "baseline",
                borderBottom: "1px solid var(--moss-dim)",
                paddingBottom: "0.9rem",
              }}
            >
              <dt className="mono" style={{ width: "6rem", color: "var(--moss)", fontSize: "0.85rem" }}>
                {l.label}
              </dt>
              <dd style={{ margin: 0 }}>
                <a
                  href={l.href}
                  target={l.label === "resume" ? undefined : "_blank"}
                  rel="noreferrer"
                  className="link-underline"
                >
                  {l.value}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
