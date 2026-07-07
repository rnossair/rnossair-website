import Link from "next/link";
import { profile } from "@/data/site";

const links = [
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export default function SiteHeader() {
  return (
    <header
      style={{
        borderBottom: "1px solid var(--moss-dim)",
        position: "sticky",
        top: 0,
        zIndex: 10,
        background: "rgba(17, 28, 34, 0.92)",
        backdropFilter: "blur(6px)",
      }}
    >
      <div
        className="shell"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.1rem 0",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <Link href="#top" className="mono" style={{ fontSize: "0.95rem", fontWeight: 500 }}>
          rayane<span style={{ color: "var(--moss)" }}>.</span>nossair
        </Link>
        <nav
          className="mono site-nav"
          style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem" }}
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link-underline">
              {l.label}
            </a>
          ))}
          <a href={profile.resume} className="link-underline" target="_blank" rel="noreferrer">
            resume
          </a>
        </nav>
      </div>
      <style>{`
        @media (max-width: 360px) {
          .site-nav {
            gap: 1rem !important;
            font-size: 0.78rem !important;
          }
        }
      `}</style>
    </header>
  );
}
