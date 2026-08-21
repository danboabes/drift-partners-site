// Tweaks for DRIFT site
const { useState: useStateT, useEffect: useEffectT } = React;

function DriftTweaks() {
  const [t, setTweak] = useTweaks(/*EDITMODE-BEGIN*/{
    "palette": "warm",
    "type_pair": "serif_serif",
    "motion": true,
    "density": "regular",
    "hero_variant": "two_col"
  }/*EDITMODE-END*/);

  // Apply palette
  useEffectT(() => {
    const root = document.documentElement;
    const p = t.palette;
    if (p === "warm") {
      root.style.setProperty("--paper", "#f4f1ea");
      root.style.setProperty("--paper-deep", "#ece8df");
      root.style.setProperty("--ink", "#14110d");
      root.style.setProperty("--ink-soft", "#2a2520");
      root.style.setProperty("--ink-mute", "#6b6358");
      root.style.setProperty("--rule", "#c9c2b3");
      root.style.setProperty("--rule-soft", "#ddd6c8");
      root.style.setProperty("--accent", "#7a2e1f");
    } else if (p === "cool") {
      root.style.setProperty("--paper", "#eceae3");
      root.style.setProperty("--paper-deep", "#e0ddd3");
      root.style.setProperty("--ink", "#0f1620");
      root.style.setProperty("--ink-soft", "#1f2a36");
      root.style.setProperty("--ink-mute", "#5e6b7a");
      root.style.setProperty("--rule", "#bcc2cc");
      root.style.setProperty("--rule-soft", "#d4d8df");
      root.style.setProperty("--accent", "#2e4d6e");
    } else if (p === "ink") {
      root.style.setProperty("--paper", "#fafaf7");
      root.style.setProperty("--paper-deep", "#f1efe9");
      root.style.setProperty("--ink", "#0a0a0a");
      root.style.setProperty("--ink-soft", "#1a1a1a");
      root.style.setProperty("--ink-mute", "#666");
      root.style.setProperty("--rule", "#d0d0cc");
      root.style.setProperty("--rule-soft", "#e3e1dc");
      root.style.setProperty("--accent", "#0a0a0a");
    } else if (p === "olive") {
      root.style.setProperty("--paper", "#ebe9dc");
      root.style.setProperty("--paper-deep", "#dfdcc9");
      root.style.setProperty("--ink", "#1c1d12");
      root.style.setProperty("--ink-soft", "#2c2e1f");
      root.style.setProperty("--ink-mute", "#6a6a52");
      root.style.setProperty("--rule", "#c1bfa6");
      root.style.setProperty("--rule-soft", "#d6d3bb");
      root.style.setProperty("--accent", "#5a6a2c");
    }
  }, [t.palette]);

  // Apply type
  useEffectT(() => {
    const body = document.body;
    if (t.type_pair === "serif_serif") {
      body.style.fontFamily = "'Source Serif 4','Source Serif Pro',Georgia,serif";
      document.documentElement.style.setProperty("--display-font", "'Source Serif 4',serif");
    } else if (t.type_pair === "sans_serif") {
      body.style.fontFamily = "'Inter','Helvetica Neue',sans-serif";
      document.documentElement.style.setProperty("--display-font", "'Source Serif 4',serif");
      document.querySelectorAll(".serif-display, h1, h2, h3, h4").forEach(el => {
        el.style.fontFamily = "'Source Serif 4',serif";
      });
    } else if (t.type_pair === "all_sans") {
      body.style.fontFamily = "'Inter','Helvetica Neue',sans-serif";
      document.querySelectorAll(".serif-display, h1, h2, h3, h4, .hero-headline, .bigpull, .definition").forEach(el => {
        el.style.fontFamily = "'Inter','Helvetica Neue',sans-serif";
        el.style.letterSpacing = "-0.025em";
      });
    } else if (t.type_pair === "serif_sans") {
      body.style.fontFamily = "'Inter','Helvetica Neue',sans-serif";
      document.querySelectorAll(".serif-display, h1, h2, h3, h4, .hero-headline").forEach(el => {
        el.style.fontFamily = "'Source Serif 4',serif";
      });
    }
  }, [t.type_pair]);

  // density
  useEffectT(() => {
    const root = document.documentElement;
    if (t.density === "loose") root.style.fontSize = "19px";
    else if (t.density === "regular") root.style.fontSize = "18px";
    else if (t.density === "tight") root.style.fontSize = "17px";
  }, [t.density]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Palette">
        <TweakRadio
          value={t.palette}
          options={[
            { value: "warm", label: "Warm" },
            { value: "cool", label: "Cool" },
            { value: "ink", label: "Ink" },
            { value: "olive", label: "Olive" }
          ]}
          onChange={v => setTweak("palette", v)}
        />
      </TweakSection>
      <TweakSection title="Typography">
        <TweakRadio
          value={t.type_pair}
          options={[
            { value: "serif_serif", label: "All serif" },
            { value: "serif_sans", label: "Serif / Sans" },
            { value: "sans_serif", label: "Sans / Serif" },
            { value: "all_sans", label: "All sans" }
          ]}
          onChange={v => setTweak("type_pair", v)}
        />
      </TweakSection>
      <TweakSection title="Density">
        <TweakRadio
          value={t.density}
          options={[
            { value: "tight", label: "Tight" },
            { value: "regular", label: "Regular" },
            { value: "loose", label: "Loose" }
          ]}
          onChange={v => setTweak("density", v)}
        />
      </TweakSection>
      <TweakSection title="Motion">
        <TweakToggle
          value={t.motion}
          onChange={v => {
            setTweak("motion", v);
            document.documentElement.dataset.motion = v ? "on" : "off";
          }}
          label="Live drift field"
        />
      </TweakSection>
    </TweaksPanel>
  );
}

window.DriftTweaks = DriftTweaks;
