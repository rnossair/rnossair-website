import Image from "next/image";
import { projects } from "@/data/site";
import Row, { RowSpace } from "@/components/Row";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";
import Reveal from "@/components/motion/Reveal";

const MONTHS = [
  "jan", "feb", "mar", "apr", "may", "jun",
  "jul", "aug", "sep", "oct", "nov", "dec",
];

function formatCommitDate(iso) {
  const [year, month] = iso.split("-");
  return `${MONTHS[parseInt(month, 10) - 1]} ${year}`;
}

// Newest first commit first, regardless of how the data file lists them.
const orderedProjects = [...projects].sort((a, b) =>
  b.commits.first.date.localeCompare(a.commits.first.date)
);

export default function ProjectsSection() {
  return (
    <Stagger as="section" id="projects" className="section">
      <Row>
        <StaggerItem as="p" className="section-label">projects</StaggerItem>
      </Row>

      <RowSpace small />

      {/* One numbered line holding a sideways strip: two cards per view on
          desktop, scrolling once there are more */}
      <Row>
        <ul className="proj-strip">
          {orderedProjects.map((project) => (
            <StaggerItem as="li" key={project.slug} className="proj-card">
              <Reveal effect="wipe" className="proj-shot">
                {project.screenshot ? (
                  <Image
                    src={project.screenshot}
                    alt={`${project.name} interface`}
                    fill
                    sizes="(max-width: 640px) 85vw, 460px"
                  />
                ) : (
                  // No capture: keep the 16:9 box so cards stay aligned
                  <div className="proj-shot-empty">
                    <span>{project.repo.replace("https://github.com/", "")}</span>
                    <span className="proj-shot-empty-note">
                      {project.live ? "no capture yet" : "source only"}
                    </span>
                  </div>
                )}
              </Reveal>

              <h3 className="proj-name">{project.name}</h3>
              <p className="proj-desc">{project.description}</p>

              <p className="proj-stack">
                {project.stack.map((tech, i) => (
                  <span key={tech}>
                    {i > 0 ? <span className="proj-stack-sep">/</span> : null}
                    {tech}
                  </span>
                ))}
              </p>

              {/* The commit range as a measured span, not a corner label */}
              <div className="ruler">
                <div className="ruler-shas">
                  <span>{project.commits.first.sha}</span>
                  <Reveal as="span" effect="draw" className="ruler-span" aria-hidden="true" />
                  <span>{project.commits.latest.sha}</span>
                </div>
                <div className="ruler-dates">
                  <span>{formatCommitDate(project.commits.first.date)}</span>
                  <span>{formatCommitDate(project.commits.latest.date)}</span>
                </div>
              </div>

              <div className="proj-links">
                {project.live ? (
                  <a
                    href={project.live}
                    className="link proj-link-live"
                    target="_blank"
                    rel="noreferrer"
                  >
                    visit site →
                  </a>
                ) : null}
                <a href={project.repo} className="link" target="_blank" rel="noreferrer">
                  read source →
                </a>
              </div>
            </StaggerItem>
          ))}
        </ul>
      </Row>
    </Stagger>
  );
}
