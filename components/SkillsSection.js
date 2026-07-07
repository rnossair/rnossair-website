import { skills } from "@/data/site";

const groups = [
  { key: "languages", label: "languages" },
  { key: "frameworks", label: "frameworks" },
  { key: "tools", label: "tools" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="shell">
        <p className="section-tag">skills</p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
          }}
          className="skills-grid"
        >
          {groups.map((g) => (
            <div key={g.key}>
              <p
                className="mono"
                style={{ fontSize: "0.8rem", color: "var(--moss)", margin: "0 0 0.9rem" }}
              >
                {g.label}
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: "0.5rem" }}>
                {skills[g.key].map((item) => (
                  <li key={item} style={{ color: "var(--muted)" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .skills-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
