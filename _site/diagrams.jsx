// Diagrams — restrained, geometric. No icons. Pure type + lines.
// All exposed on window for cross-script access.

const Diagram = {};

// --- Drift glyph: 7 arrows, gradually misaligning ---
Diagram.DriftGlyph = function ({ size = 140, color = "var(--ink)", accent = "var(--accent)" }) {
  const arrows = Array.from({ length: 7 }, (_, i) => {
    const t = i / 6;
    const angle = t * t * 32; // accelerating drift
    return { y: 18 + i * 16, angle };
  });
  return (
    <svg width={size} height={size} viewBox="0 0 140 140" fill="none" stroke={color}>
      <g strokeWidth="0.8">
        {arrows.map((a, i) => (
          <g key={i} transform={`rotate(${a.angle} 70 ${a.y})`} stroke={i === arrows.length - 1 ? accent : color}>
            <line x1="20" y1={a.y} x2="118" y2={a.y} />
            <polyline points={`110,${a.y - 4} 118,${a.y} 110,${a.y + 4}`} />
          </g>
        ))}
      </g>
    </svg>
  );
};

// --- Drift field: live, drift increasing as it scrolls into view ---
Diagram.DriftField = function ({ height = 360 }) {
  const [t, setT] = React.useState(0);
  const ref = React.useRef(null);
  React.useEffect(() => {
    let raf;
    let phase = 0;
    const tick = () => {
      phase += 0.018; // was 0.004 — ~4.5x faster so the wobble is visible
      setT(phase);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const cols = 28;
  const rows = 14;
  const w = 1000;
  const h = 480;
  const cellW = w / cols;
  const cellH = h / rows;

  const arrows = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = cellW * c + cellW / 2;
      const y = cellH * r + cellH / 2;
      // drift grows left-to-right
      const driftAmt = (c / cols) ** 1.6;
      // Add a small *time-based* baseline (0.04 * t) so even left-side arrows shimmer slightly,
      // and bump the noise amplitude so right-side arrows visibly wobble.
      const noise = Math.sin(c * 0.6 + r * 0.9 + t * 1.2) * 0.7 + Math.cos(r * 0.7 - t) * 0.5;
      const baselineWobble = Math.sin(c * 0.3 + r * 0.4 + t) * 0.04;
      const angle = driftAmt * 70 * (0.4 + noise) + baselineWobble * 18;
      const dim = 1 - driftAmt * 0.45;
      arrows.push({ x, y, angle, dim, key: `${r}-${c}`, drifted: driftAmt > 0.55 });
    }
  }

  return (
    <svg ref={ref} viewBox={`0 0 ${w} ${h}`} className="field-anim" preserveAspectRatio="none" style={{ height }}>
      <defs>
        <linearGradient id="fieldFade" x1="0" x2="1">
          <stop offset="0" stopColor="var(--ink)" stopOpacity="0.85" />
          <stop offset="1" stopColor="var(--accent)" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      {arrows.map(a => (
        <g key={a.key} transform={`translate(${a.x} ${a.y}) rotate(${a.angle})`}>
          <line x1="-10" y1="0" x2="10" y2="0"
            stroke={a.drifted ? "var(--accent)" : "var(--ink)"}
            strokeWidth="0.8"
            opacity={a.dim} />
          <polyline points="6,-3 10,0 6,3"
            stroke={a.drifted ? "var(--accent)" : "var(--ink)"}
            strokeWidth="0.8"
            fill="none"
            opacity={a.dim} />
        </g>
      ))}
      {/* Reference vector */}
      <g transform="translate(20 240)">
        <line x1="0" y1="0" x2="60" y2="0" stroke="var(--ink)" strokeWidth="1.4" />
        <text x="0" y="-12" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="var(--ink-mute)" letterSpacing="1.2">INTENT</text>
      </g>
      <g transform={`translate(940 ${240 + Math.sin(t) * 20}) rotate(${42 + Math.sin(t * 0.7) * 8})`}>
        <line x1="-30" y1="0" x2="30" y2="0" stroke="var(--accent)" strokeWidth="1.4" />
        <text x="-30" y="-12" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="var(--accent)" letterSpacing="1.2">OUTCOME</text>
      </g>
    </svg>
  );
};

// --- Cultural mishearing: same sentence, two decoders ---
Diagram.MishearingDiagram = function () {
  return (
    <svg viewBox="0 0 800 320" className="field-anim">
      <defs>
        <marker id="arrA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto">
          <path d="M0,0 L10,5 L0,10" fill="none" stroke="var(--ink)" strokeWidth="1" />
        </marker>
      </defs>

      {/* Sender */}
      <g transform="translate(60 140)">
        <circle cx="0" cy="0" r="38" fill="none" stroke="var(--ink)" strokeWidth="1" />
        <text textAnchor="middle" y="-50" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="var(--ink-mute)" letterSpacing="1.2">SENDER · WARSAW</text>
        <text textAnchor="middle" y="6" fontFamily="Source Serif 4, serif" fontStyle="italic" fontSize="14" fill="var(--ink)">said</text>
      </g>

      {/* The sentence */}
      <g transform="translate(160 140)">
        <rect x="0" y="-26" width="380" height="52" fill="var(--paper-deep)" stroke="var(--ink)" strokeWidth="0.5" />
        <text x="190" y="6" textAnchor="middle" fontFamily="Source Serif 4, serif" fontStyle="italic" fontSize="18" fill="var(--ink)">"I will adjust accordingly."</text>
      </g>

      {/* Receivers */}
      <g transform="translate(660 80)">
        <text textAnchor="middle" y="-46" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="var(--ink-mute)" letterSpacing="1.2">RECEIVER A · MUNICH</text>
        <rect x="-90" y="-30" width="180" height="60" fill="none" stroke="var(--ink)" strokeWidth="0.5" />
        <text textAnchor="middle" y="-4" fontFamily="Source Serif 4, serif" fontSize="13" fill="var(--ink)">heard:</text>
        <text textAnchor="middle" y="16" fontFamily="Source Serif 4, serif" fontStyle="italic" fontSize="14" fill="var(--accent)">"agreed, will do."</text>
      </g>
      <g transform="translate(660 240)">
        <text textAnchor="middle" y="-46" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="var(--ink-mute)" letterSpacing="1.2">RECEIVER B · BANGALORE</text>
        <rect x="-90" y="-30" width="180" height="60" fill="none" stroke="var(--ink)" strokeWidth="0.5" />
        <text textAnchor="middle" y="-4" fontFamily="Source Serif 4, serif" fontSize="13" fill="var(--ink)">heard:</text>
        <text textAnchor="middle" y="16" fontFamily="Source Serif 4, serif" fontStyle="italic" fontSize="14" fill="var(--accent)">"will think about it."</text>
      </g>

      {/* Connecting lines */}
      <path d="M 540 140 C 580 140, 590 90, 570 80" fill="none" stroke="var(--ink)" strokeWidth="0.8" markerEnd="url(#arrA)" />
      <path d="M 540 140 C 580 140, 590 230, 570 240" fill="none" stroke="var(--ink)" strokeWidth="0.8" markerEnd="url(#arrA)" />
      <path d="M 98 140 L 158 140" stroke="var(--ink)" strokeWidth="0.8" markerEnd="url(#arrA)" />

      {/* Caption */}
      <text x="400" y="305" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="var(--ink-mute)" letterSpacing="1.5">
        ONE SENTENCE. TWO DECODERS. NO ONE LIED.
      </text>
    </svg>
  );
};

// --- The five mechanism marks ---
Diagram.MechMarks = {
  Technical: () => (
    <svg viewBox="0 0 56 56" width="56" height="56" fill="none" stroke="var(--ink)" strokeWidth="1">
      <rect x="6" y="14" width="44" height="28" />
      <line x1="6" y1="22" x2="50" y2="22" />
      <circle cx="12" cy="18" r="1.2" fill="var(--ink)" />
      <line x1="14" y1="32" x2="42" y2="32" stroke="var(--accent)" strokeDasharray="2 3" />
    </svg>
  ),
  Capability: () => (
    <svg viewBox="0 0 56 56" width="56" height="56" fill="none" stroke="var(--ink)" strokeWidth="1">
      <line x1="6" y1="42" x2="50" y2="42" />
      <line x1="12" y1="42" x2="12" y2="20" />
      <line x1="22" y1="42" x2="22" y2="14" />
      <line x1="32" y1="42" x2="32" y2="26" stroke="var(--accent)" />
      <line x1="42" y1="42" x2="42" y2="10" />
      <line x1="28" y1="20" x2="36" y2="32" stroke="var(--accent)" strokeWidth="0.8" />
    </svg>
  ),
  Decision: () => (
    <svg viewBox="0 0 56 56" width="56" height="56" fill="none" stroke="var(--ink)" strokeWidth="1">
      <circle cx="28" cy="14" r="4" />
      <line x1="28" y1="18" x2="14" y2="32" />
      <line x1="28" y1="18" x2="42" y2="32" />
      <circle cx="14" cy="36" r="3" />
      <circle cx="42" cy="36" r="3" />
      <line x1="14" y1="39" x2="14" y2="46" stroke="var(--accent)" strokeDasharray="2 2" />
      <line x1="42" y1="39" x2="42" y2="46" stroke="var(--accent)" strokeDasharray="2 2" />
    </svg>
  ),
  Structural: () => (
    <svg viewBox="0 0 56 56" width="56" height="56" fill="none" stroke="var(--ink)" strokeWidth="1">
      <line x1="6" y1="28" x2="22" y2="28" />
      <polyline points="18,24 22,28 18,32" />
      <line x1="50" y1="28" x2="34" y2="28" stroke="var(--accent)" />
      <polyline points="38,24 34,28 38,32" stroke="var(--accent)" />
      <line x1="28" y1="14" x2="28" y2="42" strokeDasharray="2 2" />
    </svg>
  ),
  Information: () => (
    <svg viewBox="0 0 56 56" width="56" height="56" fill="none" stroke="var(--ink)" strokeWidth="1">
      <rect x="8" y="10" width="40" height="6" />
      <rect x="12" y="22" width="32" height="6" stroke="var(--ink-mute)" />
      <rect x="16" y="34" width="24" height="6" stroke="var(--ink-mute)" />
      <rect x="20" y="46" width="16" height="4" stroke="var(--accent)" />
    </svg>
  ),
};

// --- Method step diagrams ---
Diagram.StepDiagram = {
  Visible: () => (
    <svg viewBox="0 0 200 80" className="field-anim" fill="none" stroke="var(--ink)">
      <circle cx="40" cy="40" r="22" strokeWidth="0.8" />
      <circle cx="40" cy="40" r="6" fill="var(--accent)" stroke="none" />
      <line x1="62" y1="40" x2="180" y2="40" strokeWidth="0.8" />
      <line x1="170" y1="36" x2="180" y2="40" strokeWidth="0.8" />
      <line x1="170" y1="44" x2="180" y2="40" strokeWidth="0.8" />
      <text x="100" y="30" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="var(--ink-mute)" letterSpacing="1.4">OBSERVE</text>
    </svg>
  ),
  Identify: () => (
    <svg viewBox="0 0 200 80" className="field-anim" fill="none" stroke="var(--ink)">
      <circle cx="36" cy="20" r="6" />
      <circle cx="80" cy="20" r="6" />
      <circle cx="124" cy="20" r="6" stroke="var(--accent)" />
      <circle cx="36" cy="60" r="6" />
      <circle cx="80" cy="60" r="6" stroke="var(--accent)" />
      <line x1="36" y1="26" x2="36" y2="54" strokeDasharray="2 2" />
      <line x1="80" y1="26" x2="80" y2="54" strokeDasharray="2 2" stroke="var(--accent)" />
      <line x1="124" y1="26" x2="124" y2="54" strokeDasharray="2 2" />
      <circle cx="124" cy="60" r="6" />
      <text x="156" y="46" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="var(--accent)" letterSpacing="1.4">×2</text>
    </svg>
  ),
  Restore: () => (
    <svg viewBox="0 0 200 80" className="field-anim" fill="none" stroke="var(--ink)">
      <line x1="20" y1="58" x2="180" y2="58" strokeWidth="0.8" />
      <g>
        {[30, 60, 90, 120, 150, 180].map((x, i) => (
          <g key={i}>
            <line x1={x} y1="58" x2={x} y2="22" stroke={i === 5 ? "var(--accent)" : "var(--ink)"} />
            <polyline points={`${x - 3},26 ${x},22 ${x + 3},26`} stroke={i === 5 ? "var(--accent)" : "var(--ink)"} fill="none" />
          </g>
        ))}
      </g>
      <text x="20" y="14" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="var(--ink-mute)" letterSpacing="1.4">5–9 DECISIONS</text>
    </svg>
  ),
  Anchor: () => (
    <svg viewBox="0 0 200 80" className="field-anim" fill="none" stroke="var(--ink)">
      <line x1="20" y1="40" x2="180" y2="40" strokeWidth="0.8" />
      {[20, 60, 100, 140, 180].map((x, i) => (
        <g key={i}>
          <line x1={x} y1="34" x2={x} y2="46" />
          <text x={x} y="62" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="var(--ink-mute)">Q{i + 1}</text>
          <circle cx={x} cy="40" r="2.5" fill={i === 4 ? "var(--accent)" : "var(--ink)"} />
        </g>
      ))}
      <text x="100" y="20" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="var(--ink-mute)" letterSpacing="1.4">QUARTERLY</text>
    </svg>
  ),
};

window.Diagram = Diagram;
