import Image from "next/image";
import { about, profile } from "@/data/site";
import Row, { RowSpace } from "@/components/Row";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";

export default function AboutSection() {
  return (
    <Stagger as="section" id="about" className="section">
      <Row>
        <StaggerItem as="p" className="section-label">about</StaggerItem>
      </Row>

      <RowSpace small />

      <Row>
        <StaggerItem as="p" className="pull">
          <span className="pull-line">{about.pull[0]}</span>
          <em>{about.pull[1]}</em>
        </StaggerItem>
      </Row>

      <RowSpace />

      <Row>
        <StaggerItem className={profile.photo ? "about-grid" : "about-grid about-grid-solo"}>
          {profile.photo ? (
            <div className="about-photo">
              <Image src={profile.photo} alt={profile.name} width={130} height={130} />
            </div>
          ) : null}
          <div className="prose">
            {about.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </StaggerItem>
      </Row>
    </Stagger>
  );
}
