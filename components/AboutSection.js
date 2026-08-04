import Image from "next/image";
import { about, profile } from "@/data/site";
import Row, { RowSpace } from "@/components/Row";

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <Row>
        <p className="section-label">about</p>
      </Row>

      <RowSpace small />

      <Row>
        <p className="pull">
          <span className="pull-line">{about.pull[0]}</span>
          <em>{about.pull[1]}</em>
        </p>
      </Row>

      <RowSpace />

      <Row>
        <div className="about-grid">
          <div className="about-photo">
            <Image src={profile.photo} alt={profile.name} width={130} height={130} />
          </div>
          <div className="prose">
            {about.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </Row>
    </section>
  );
}
