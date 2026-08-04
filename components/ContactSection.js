import { profile } from "@/data/site";
import Row, { RowSpace } from "@/components/Row";

const links = [
  { label: "email", href: `mailto:${profile.email}`, value: profile.email },
  { label: "github", href: profile.github, value: "github.com/rnossair" },
  {
    label: "linkedin",
    href: profile.linkedin,
    value: "linkedin.com/in/rayane-nossair",
  },
  { label: "resume", href: profile.resume, value: "download pdf", internal: true },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section">
      <Row>
        <p className="section-label">contact</p>
      </Row>

      <RowSpace small />

      <Row>
        <h2 className="section-heading">
          Open to software engineering internships and collaborations.
        </h2>
      </Row>

      <RowSpace />

      <Row>
        <dl className="contact-list">
          {links.map((l) => (
            <div key={l.label} className="contact-item">
              <dt className="contact-key">{l.label}</dt>
              <dd className="contact-val">
                <a
                  href={l.href}
                  className="link"
                  target={l.internal ? undefined : "_blank"}
                  rel={l.internal ? undefined : "noreferrer"}
                >
                  {l.value}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </Row>
    </section>
  );
}
