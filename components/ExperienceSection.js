import { experience } from "@/data/site";
import Row, { RowSpace } from "@/components/Row";

const MONTHS = [
  "jan", "feb", "mar", "apr", "may", "jun",
  "jul", "aug", "sep", "oct", "nov", "dec",
];

function formatDate(iso) {
  if (!iso) return "present";
  const [year, month] = iso.split("-");
  return `${MONTHS[parseInt(month, 10) - 1]} ${year}`;
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <Row>
        <p className="section-label">experience</p>
      </Row>

      <RowSpace small />

      {/* Each role is its own numbered line, so the gutter stays a sequence */}
      <ol className="job-list">
        {experience.map((job) => (
          <Row as="li" key={`${job.role}-${job.org}`}>
            <p className="job-dates">
              {formatDate(job.start)} → {formatDate(job.end)}
            </p>
            <h3 className="job-role">{job.role}</h3>
            <p className="job-meta">
              {job.org} · {job.location}
            </p>
            <ul className="job-bullets">
              {job.bullets.map((b) => (
                <li key={b.slice(0, 24)}>{b}</li>
              ))}
            </ul>
          </Row>
        ))}
      </ol>
    </section>
  );
}
