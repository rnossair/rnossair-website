export default function SiteFooter() {
  return (
    <footer style={{ borderTop: "1px solid var(--moss-dim)" }}>
      <div
        className="shell mono"
        style={{
          padding: "1.5rem 0",
          fontSize: "0.78rem",
          color: "var(--moss-dim)",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        <span>rayane nossair</span>
        <span>built with next.js</span>
      </div>
    </footer>
  );
}
