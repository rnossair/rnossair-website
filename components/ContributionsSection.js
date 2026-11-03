import { contributions } from "@/data/site";
import Row, { RowSpace } from "@/components/Row";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";

const MONTHS = [
  "jan", "feb", "mar", "apr", "may", "jun",
  "jul", "aug", "sep", "oct", "nov", "dec",
];

function formatDate(iso) {
  const [year, month] = iso.split("-");
  return `${MONTHS[parseInt(month, 10) - 1]} ${year}`;
}

// Newest first, regardless of data order.
const ordered = [...contributions].sort((a, b) => b.opened.localeCompare(a.opened));

export default function ContributionsSection() {
  return (
    <Stagger as="section" id="contributions" className="section">
      <Row>
        <StaggerItem as="p" className="section-label">
          contributions <span className="wip-tag">under construction</span>
        </StaggerItem>
      </Row>

      <RowSpace small />

      <Row>
        <StaggerItem as="p" className="wip-note">
          Open-source work outside class is in progress. The pull requests below are
          coursework, made against course practice repositories.
        </StaggerItem>
      </Row>

      <RowSpace small />

      <ul className="pr-list">
        {ordered.map((pr) => (
          <Row as="li" key={pr.url}>
            <StaggerItem>
              <p className="pr-meta">
                {pr.repo} · {pr.status} · {formatDate(pr.opened)}
                {pr.coursework ? <span className="pr-tag">coursework</span> : null}
              </p>
              <a href={pr.url} className="link pr-title" target="_blank" rel="noreferrer">
                {pr.title}
              </a>
            </StaggerItem>
          </Row>
        ))}
      </ul>
    </Stagger>
  );
}
