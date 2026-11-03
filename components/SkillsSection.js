import { skills } from "@/data/site";
import Row, { RowSpace } from "@/components/Row";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";

const groups = [
  { key: "languages", label: "languages" },
  { key: "frameworks", label: "frameworks" },
  { key: "tools", label: "tools" },
  { key: "ai", label: "ai / ml" },
];

export default function SkillsSection() {
  return (
    <Stagger as="section" id="skills" className="section">
      <Row>
        <StaggerItem as="p" className="section-label">toolkit</StaggerItem>
      </Row>

      <RowSpace small />

      <Row>
        <div className="skills-grid">
          {groups.map((g) => (
            <StaggerItem key={g.key}>
              <h3 className="skills-label">{g.label}</h3>
              <ul className="skills-list">
                {skills[g.key].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </div>
      </Row>
    </Stagger>
  );
}
