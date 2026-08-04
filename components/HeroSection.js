import { profile, trajectory } from "@/data/site";
import Row, { RowSpace } from "@/components/Row";

export default function HeroSection() {
  const { from, to, path, removed, added } = trajectory;

  // Stagger index runs continuously through the diff so the load reads as one
  // sequence: the old lines strike out, then the new ones arrive.
  let step = 0;

  return (
    <section id="top" className="section section-first">
      <Row className="stage" style={{ "--i": step++ }}>
        <h1 className="hero-name">{profile.name}</h1>
      </Row>

      <RowSpace />

      <Row className="stage" style={{ "--i": step++ }}>
        <p className="hero-hunk">
          <span className="hero-hunk-at">@@</span> -{from},{removed.length} +{to},
          {added.length} <span className="hero-hunk-at">@@</span> {path}
        </p>
      </Row>

      <RowSpace small />

      {removed.map((line) => (
        <Row
          key={line}
          variant="del"
          mark="-"
          className="stage stage-strike"
          style={{ "--i": step++ }}
        >
          <p className="diff-line">{line}</p>
        </Row>
      ))}

      {added.map((line) => (
        <Row key={line} variant="add" mark="+" className="stage" style={{ "--i": step++ }}>
          <p className="diff-line">{line}</p>
        </Row>
      ))}

      <RowSpace />

      <Row className="stage" style={{ "--i": step++ }}>
        <div className="hero-links">
          <a href={`mailto:${profile.email}`} className="link">
            {profile.email}
          </a>
          <a href={profile.github} className="link" target="_blank" rel="noreferrer">
            github
          </a>
          <a href={profile.linkedin} className="link" target="_blank" rel="noreferrer">
            linkedin
          </a>
        </div>
      </Row>
    </section>
  );
}
