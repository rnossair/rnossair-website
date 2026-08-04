import { skills } from "@/data/site";
import Row, { RowSpace } from "@/components/Row";

const groups = [
  { key: "languages", label: "languages" },
  { key: "frameworks", label: "frameworks" },
  { key: "tools", label: "tools" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <Row>
        <p className="section-label">toolkit</p>
      </Row>

      <RowSpace small />

      <Row>
        <div className="skills-grid">
          {groups.map((g) => (
            <div key={g.key}>
              <h3 className="skills-label">{g.label}</h3>
              <ul className="skills-list">
                {skills[g.key].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Row>
    </section>
  );
}
