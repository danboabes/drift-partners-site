// Logo studies for DRIFT Partners

const Marks = {};

// Common: monospace label under each mark
function MarkPlate({ label, sub, dark, children, w = 360, h = 240 }) {
  const bg = dark ? "#14110d" : "#f4f1ea";
  const ink = dark ? "#f4f1ea" : "#14110d";
  const mute = dark ? "#888076" : "#6b6358";
  return (
    <div style={{
      width: w, height: h, background: bg, color: ink,
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      padding: 24, position: "relative", border: dark ? "1px solid #2a2520" : "1px solid #ddd6c8"
    }}>
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
        {children}
      </div>
      <div style={{
        position: "absolute", bottom: 12, left: 16, right: 16,
        display: "flex", justifyContent: "space-between",
        fontFamily: "JetBrains Mono, monospace", fontSize: 9, letterSpacing: "0.14em",
        textTransform: "uppercase", color: mute
      }}>
        <span>{label}</span>
        <span>{sub}</span>
      </div>
    </div>
  );
}

// 01 — Wordmark with the "I" tipped slightly off-axis (drift in the letterform itself)
Marks.WordmarkTipped = function ({ scale = 1, color = "#14110d", accent = "#7a2e1f" }) {
  return (
    <svg viewBox="0 0 520 120" width={520 * scale} height={120 * scale} fill={color}>
      <g fontFamily="Source Serif 4, serif" fontWeight="300" fontSize="120" letterSpacing="-2">
        <text x="0" y="98">D</text>
        <text x="92" y="98">R</text>
        {/* I tipped */}
        <g transform="translate(184 10) rotate(8 14 50)">
          <text x="0" y="88">I</text>
        </g>
        <text x="220" y="98">F</text>
        <text x="298" y="98">T</text>
      </g>
      {/* tiny accent dot to mark the drift */}
      <circle cx="200" cy="14" r="3.5" fill={accent} />
    </svg>
  );
};

// 02 — Wordmark + horizontal rule that drifts at the end
Marks.WordmarkRule = function ({ color = "#14110d", accent = "#7a2e1f" }) {
  return (
    <svg viewBox="0 0 520 160" width="440" height="auto">
      <text x="0" y="100" fontFamily="Source Serif 4, serif" fontWeight="300" fontSize="120" letterSpacing="-2" fill={color}>DRIFT</text>
      <line x1="0" y1="130" x2="380" y2="130" stroke={color} strokeWidth="1" />
      <line x1="380" y1="130" x2="500" y2="142" stroke={accent} strokeWidth="1" />
      <text x="0" y="156" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2.5" fill={color} opacity="0.7">PARTNERS</text>
    </svg>
  );
};

// 03 — Monogram: D containing a small misaligned arrow
Marks.Monogram = function ({ color = "#14110d", accent = "#7a2e1f" }) {
  return (
    <svg viewBox="0 0 200 200" width="160" height="160" fill="none">
      <rect x="20" y="20" width="160" height="160" stroke={color} strokeWidth="1.5" />
      <text x="100" y="138" textAnchor="middle" fontFamily="Source Serif 4, serif" fontWeight="300" fontSize="160" letterSpacing="-4" fill={color}>D</text>
      {/* drift indicator: tiny rotated arrow over the counter */}
      <g transform="translate(108 102) rotate(18)">
        <line x1="-22" y1="0" x2="22" y2="0" stroke={accent} strokeWidth="1.4" />
        <polyline points="16,-4 22,0 16,4" stroke={accent} strokeWidth="1.4" fill="none" />
      </g>
    </svg>
  );
};

// 04 — Stack: editorial lockup (the way the site presents itself)
Marks.LockupStack = function ({ color = "#14110d", accent = "#7a2e1f" }) {
  return (
    <svg viewBox="0 0 360 200" width="320" height="auto">
      <text x="0" y="86" fontFamily="Source Serif 4, serif" fontWeight="300" fontSize="100" letterSpacing="-2" fill={color}>DRIFT</text>
      <line x1="0" y1="110" x2="320" y2="110" stroke={color} strokeWidth="0.8" />
      <text x="0" y="138" fontFamily="JetBrains Mono, monospace" fontSize="14" letterSpacing="3" fill={color}>PARTNERS</text>
      <g transform="translate(232 130)">
        <circle cx="0" cy="0" r="3" fill={accent} />
        <text x="10" y="4" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1.6" fill={color} opacity="0.65">EST. 2018</text>
      </g>
    </svg>
  );
};

// 05 — Pure mark: 5 horizontal lines, last one off-axis
Marks.FiveLines = function ({ color = "#14110d", accent = "#7a2e1f" }) {
  return (
    <svg viewBox="0 0 200 200" width="160" height="160" fill="none">
      {[40, 64, 88, 112].map((y, i) => (
        <g key={i}>
          <line x1="40" y1={y} x2="140" y2={y} stroke={color} strokeWidth="1.4" />
          <polyline points={`132,${y - 4} 140,${y} 132,${y + 4}`} stroke={color} strokeWidth="1.4" />
        </g>
      ))}
      {/* drifted */}
      <g transform="translate(90 152) rotate(14)">
        <line x1="-50" y1="0" x2="50" y2="0" stroke={accent} strokeWidth="1.4" />
        <polyline points="42,-4 50,0 42,4" stroke={accent} strokeWidth="1.4" />
      </g>
    </svg>
  );
};

// 06 — Wordmark with descending arrows replacing the dot of nothing — actually use as horizontal lockup
Marks.HorizontalLockup = function ({ color = "#14110d", accent = "#7a2e1f" }) {
  return (
    <svg viewBox="0 0 700 100" width="560" height="auto">
      <text x="0" y="78" fontFamily="Source Serif 4, serif" fontWeight="300" fontSize="92" letterSpacing="-1.5" fill={color}>DRIFT</text>
      <line x1="324" y1="48" x2="384" y2="48" stroke={color} strokeWidth="0.8" />
      <text x="396" y="56" fontFamily="JetBrains Mono, monospace" fontSize="14" letterSpacing="3" fill={color}>PARTNERS</text>
      <circle cx="378" cy="48" r="2.5" fill={accent} />
    </svg>
  );
};

// 07 — Tag style: brackets framing
Marks.Bracketed = function ({ color = "#14110d", accent = "#7a2e1f" }) {
  return (
    <svg viewBox="0 0 480 140" width="380" height="auto">
      <g stroke={color} strokeWidth="1" fill="none">
        <polyline points="6,12 6,128 22,128" />
        <polyline points="474,12 474,128 458,128" />
        <polyline points="6,12 22,12" />
        <polyline points="474,12 458,12" />
      </g>
      <text x="240" y="92" textAnchor="middle" fontFamily="Source Serif 4, serif" fontWeight="300" fontSize="84" letterSpacing="-1.2" fill={color}>DRIFT</text>
      <text x="240" y="118" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="3.5" fill={color} opacity="0.7">PARTNERS</text>
      <circle cx="166" cy="86" r="2.5" fill={accent} />
    </svg>
  );
};

// 08 — Pure logotype, italic — voice of the essay
Marks.ItalicWordmark = function ({ color = "#14110d", accent = "#7a2e1f" }) {
  return (
    <svg viewBox="0 0 520 140" width="440" height="auto">
      <text x="0" y="100" fontFamily="Source Serif 4, serif" fontStyle="italic" fontWeight="300" fontSize="120" letterSpacing="-1" fill={color}>Drift.</text>
      <text x="0" y="128" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="3" fill={color} opacity="0.7">A PRACTICE OF EMIC LAB</text>
    </svg>
  );
};

// 09 — Field mark: the live drift field, frozen, as a small circular badge
Marks.FieldBadge = function ({ color = "#14110d", accent = "#7a2e1f", size = 160 }) {
  const lines = [];
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 6; c++) {
      const x = 30 + c * 22;
      const y = 30 + r * 22;
      const drift = (c / 5) ** 1.4;
      const angle = drift * 60;
      lines.push({ x, y, angle, key: `${r}-${c}`, drifted: drift > 0.6 });
    }
  }
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} fill="none">
      <circle cx="100" cy="100" r="92" stroke={color} strokeWidth="1" />
      {lines.map(l => (
        <g key={l.key} transform={`translate(${l.x} ${l.y}) rotate(${l.angle})`}>
          <line x1="-6" y1="0" x2="6" y2="0" stroke={l.drifted ? accent : color} strokeWidth="0.7" />
        </g>
      ))}
      <text x="100" y="184" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" letterSpacing="2.5" fill={color}>DRIFT · PARTNERS</text>
    </svg>
  );
};

// 10 — Vector (the simplest possible): two arrows, one straight one drifted
Marks.TwoArrows = function ({ color = "#14110d", accent = "#7a2e1f" }) {
  return (
    <svg viewBox="0 0 240 160" width="200" height="auto" fill="none">
      <g stroke={color} strokeWidth="1.4">
        <line x1="20" y1="60" x2="220" y2="60" />
        <polyline points="210,54 220,60 210,66" />
      </g>
      <g stroke={accent} strokeWidth="1.4" transform="translate(0 0) rotate(11 120 100)">
        <line x1="20" y1="100" x2="220" y2="100" />
        <polyline points="210,94 220,100 210,106" />
      </g>
      <text x="20" y="140" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2.5" fill={color}>DRIFT · PARTNERS</text>
    </svg>
  );
};

// Application: card mockup
function BusinessCard() {
  return (
    <div style={{
      width: 420, height: 260,
      background: "#f4f1ea", border: "1px solid #ddd6c8",
      padding: 28, display: "flex", flexDirection: "column", justifyContent: "space-between",
      boxShadow: "0 1px 0 #c9c2b3, 0 24px 40px -20px rgba(20,17,13,0.18)"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <Marks.LockupStack />
        <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#6b6358" }}>WAW · BER</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "1px solid #c9c2b3", paddingTop: 16 }}>
        <div>
          <div style={{ fontFamily: "Source Serif 4, serif", fontSize: 18, fontWeight: 400 }}>Anna Chodynicka</div>
          <div style={{ fontFamily: "Source Serif 4, serif", fontStyle: "italic", fontSize: 14, color: "#7a2e1f" }}>Partner</div>
        </div>
        <div style={{ textAlign: "right", fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "#2a2520", lineHeight: 1.7 }}>
          <div>amc@emic.pl</div>
          <div>+48 663 057 223</div>
        </div>
      </div>
    </div>
  );
}

// Letterhead corner
function Letterhead() {
  return (
    <div style={{
      width: 460, height: 280,
      background: "#fafaf7", border: "1px solid #ddd6c8",
      padding: "32px 36px", boxShadow: "0 24px 40px -20px rgba(20,17,13,0.15)"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <Marks.HorizontalLockup />
      </div>
      <div style={{ marginTop: 36, fontFamily: "Source Serif 4, serif", fontSize: 13, color: "#2a2520", lineHeight: 1.55, maxWidth: 360 }}>
        <p style={{ marginBottom: 10 }}>Dear M——,</p>
        <p style={{ color: "#6b6358" }}>Following our call last Tuesday, I am writing to confirm the shape of the diagnostic engagement we discussed for the cross-border …</p>
      </div>
    </div>
  );
}

// Favicon study
function Favicon({ children, label }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
      <div style={{ width: 64, height: 64, background: "#14110d", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 8 }}>
        {children}
      </div>
      <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#6b6358" }}>{label}</div>
    </div>
  );
}

window.LogoMarks = Marks;
window.LogoApplications = { BusinessCard, Letterhead, Favicon, MarkPlate };
