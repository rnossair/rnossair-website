import { profile, trajectory } from "@/data/site";
import Row, { RowSpace } from "@/components/Row";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";
import { strikeRow, strikeText } from "@/components/motion/tokens";

export default function HeroSection() {
  const { from, to, path, removed, added } = trajectory;

  // One sequence on load: the old lines arrive and strike out, then the new
  // ones arrive. Unlike other sections, the hero animates whole rows (gutter
  // mark and amber wash included), because each diff line landing is the moment.
  return (
    <Stagger as="section" trigger="mount" id="top" className="section section-first">
      <Row as={StaggerItem}>
        <h1 className="hero-name">{profile.name}</h1>
      </Row>

      <RowSpace />

      <Row as={StaggerItem}>
        <p className="hero-hunk">
          <span className="hero-hunk-at">@@</span> -{from},{removed.length} +{to},
          {added.length} <span className="hero-hunk-at">@@</span> {path}
        </p>
      </Row>

      <RowSpace small />

      {removed.map((line) => (
        <Row key={line} as={StaggerItem} variants={strikeRow} variant="del" mark="-">
          <StaggerItem as="p" variants={strikeText} className="diff-line">
            {line}
          </StaggerItem>
        </Row>
      ))}

      {added.map((line) => (
        <Row key={line} as={StaggerItem} variant="add" mark="+">
          <p className="diff-line">{line}</p>
        </Row>
      ))}

      <RowSpace />

      <Row as={StaggerItem}>
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
    </Stagger>
  );
}
