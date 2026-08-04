/**
 * The document primitive: a gutter cell and a body cell.
 * Line numbers come from a CSS counter, so they stay continuous across every
 * section without any component needing to know its own position.
 */
export default function Row({ as: Tag = "div", variant, mark, className = "", style, children }) {
  const variantClass = variant ? ` row-${variant}` : "";
  return (
    <Tag className={`row${variantClass}${className ? ` ${className}` : ""}`} style={style}>
      <div className="row-gutter" aria-hidden="true">
        <span className="row-gutter-mark">{mark}</span>
      </div>
      <div className="row-body">{children}</div>
    </Tag>
  );
}

/**
 * Vertical breathing room. Deliberately not a Row: spacers must not consume
 * line numbers, or the gutter stacks two or three numbers within a few pixels
 * and reads as a rendering glitch rather than a sequence.
 */
export function RowSpace({ small }) {
  return <div className={small ? "row-space-sm" : "row-space"} aria-hidden="true" />;
}
