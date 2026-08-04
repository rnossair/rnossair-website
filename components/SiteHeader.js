import { profile } from "@/data/site";

const links = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export default function SiteHeader() {
  return (
    <header className="masthead">
      <div className="doc-w masthead-inner">
        <a href="#top" className="masthead-mark">
          rayane<span className="masthead-mark-dot">.</span>nossair
        </a>
        <nav className="masthead-nav" aria-label="Sections">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link">
              {l.label}
            </a>
          ))}
          <a href={profile.resume} className="link" target="_blank" rel="noreferrer">
            resume
          </a>
        </nav>
      </div>
    </header>
  );
}
