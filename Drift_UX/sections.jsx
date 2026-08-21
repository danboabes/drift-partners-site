// Section components for DRIFT Partners site

const { useState, useEffect, useRef } = React;

// ---------- Nav ----------
function Nav() {
  return (
    <nav className="nav">
      <div className="shell nav-inner">
        <a href="#" className="nav-brand" style={{ textDecoration: "none" }}>
          <svg viewBox="0 0 520 160" width="150" height="auto" style={{ display: "block" }}>
            <text x="0" y="100" fontFamily="'Source Serif 4', serif" fontWeight="300" fontSize="120" letterSpacing="-2" fill="var(--ink)">DRIFT</text>
            <line x1="0" y1="130" x2="380" y2="130" stroke="var(--ink)" strokeWidth="1" />
            <line x1="380" y1="130" x2="500" y2="142" stroke="var(--accent)" strokeWidth="1" />
            <text x="0" y="156" fontFamily="'JetBrains Mono', monospace" fontSize="14" letterSpacing="3.5" fill="var(--ink)" opacity="0.75">PARTNERS</text>
          </svg>
        </a>
        <div className="nav-links">
          <a href="#drift">The drift</a>
          <a href="#mechanisms">Mechanisms</a>
          <a href="#approach">Approach</a>
          <a href="#engagements">Engagements</a>
          <a href="#vignettes">Vignettes</a>
          <a href="#about" className="always-show">About</a>
          <a href="#contact" className="nav-cta always-show">Contact</a>
        </div>
      </div>
    </nav>
  );
}

// ---------- Hero ----------
function Hero() {
  return (
    <section className="hero">
      <div className="shell">
        <div className="hero-meta">
          <span><span className="dot"></span>DRIFT PARTNERS · A PRACTICE OF EMIC LAB</span>
          <span>EST. 2018 · WARSAW &amp; BERLIN</span>
        </div>
        <div className="hero-grid">
          <h1 className="hero-headline serif-display">
            Activity is not <em>alignment.</em>
          </h1>
          <div className="hero-side">
            <span className="label">— On the quiet loss of direction at the system level</span>
            <p>
              <span className="lede">Programmes rarely fail because people stop working.</span>{" "}
              They fail when they stop moving in the same direction. Work continues. Effort
              increases. Decisions are made. And still — things don't move forward. You feel it.
              Your people feel it. But you cannot fully see it.
            </p>
            <p>
              We restore direction in cross-border programmes that have lost it.
            </p>
          </div>
        </div>
      </div>
      <div className="drift-glyph">
        <Diagram.DriftGlyph size={140} />
      </div>
    </section>
  );
}

// ---------- Drift definition ----------
function DriftDefinition() {
  return (
    <section className="band deep" id="drift">
      <div className="shell">
        <div className="section-head">
          <div className="ord">§ 01 — A definition</div>
          <h2>What we mean when we say <em>drift</em>.</h2>
        </div>

        <div className="def-row">
          <div className="def-card">
            <div className="term">drift &nbsp;·&nbsp; ˈdrɪft</div>
            <p className="definition">
              <em>A loss of direction at the system level</em> — where a group of people who
              individually understand their work, work hard at it, and want to do it well,
              nonetheless produce a collective output that diverges from where the programme
              leadership intends it to go.
            </p>
            <p className="footnote">
              Not poor performance. Not bad strategy. Not a culture problem. The gap between the
              programme as observed and the programme as reported.
            </p>
          </div>
          <div>
            <p className="prose">
              By the time symptoms reach the steering committee, the underlying drift is{" "}
              <span className="pull">six to twelve months ahead of the diagnosis.</span> Reporting
              is truthful in form but misleading in substance. Every metric is correctly
              calculated, every dashboard correctly populated — and the picture that emerges
              from them, taken together, is wrong.
            </p>
            <p className="prose" style={{ marginTop: "1.1em" }}>
              In cross-border programmes, every signal passes through one more filter before it
              arrives. We call that filter <em>cultural mishearing</em>.
            </p>
          </div>
        </div>

        <div className="rule" style={{ margin: "72px 0 32px" }}></div>
        <div style={{ marginBottom: 18 }}>
          <span className="marg">FIG. 01 — A FIELD UNDER DRIFT (LIVE)</span>
        </div>
        <Diagram.DriftField height={360} />
      </div>
    </section>
  );
}

// ---------- Cultural mishearing ----------
function Mishearing() {
  return (
    <section className="band">
      <div className="shell">
        <div className="section-head">
          <div className="ord">§ 02 — The cultural layer</div>
          <h2>The same sentence, two <em>different</em> decoders.</h2>
        </div>
        <div className="def-row">
          <div>
            <p className="prose">
              Most programmes that drift hard span at least two cultures. Engineering in one
              country, delivery in another. Headquarters in one, operations in another. A vendor
              on a third continent.
            </p>
            <p className="prose" style={{ marginTop: "1em" }}>
              <span className="pull">Each side listens with its own cultural ear.</span>{" "}
              The same sentence, spoken once, lands as two different sentences in two heads.
              No one is lying. Both sides leave the call thinking they understood. Both sides
              are wrong, in equal measure. The mishearing is symmetrical.
            </p>
            <p className="prose" style={{ marginTop: "1em" }}>
              A consultant with no ear for this layer will list mechanisms accurately and then
              be unable to explain why the programme leadership cannot agree on which mechanisms
              are actually in play.
            </p>
          </div>
          <div>
            <span className="marg">FIG. 02 — CULTURAL MISHEARING</span>
            <div style={{ marginTop: 16, border: "1px solid var(--rule)", padding: 24, background: "var(--paper)" }}>
              <Diagram.MishearingDiagram />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Mechanisms ----------
function Mechanisms() {
  const items = [
    {
      n: "01",
      Icon: Diagram.MechMarks.Technical,
      title: "Technical blind spots",
      body: "An integration signed off but operationally incomplete. A workaround quietly imposed on every downstream task."
    },
    {
      n: "02",
      Icon: Diagram.MechMarks.Capability,
      title: "Capability gaps",
      body: "A senior contributor operating at the limit of their experience. The people around them have learned to compensate."
    },
    {
      n: "03",
      Icon: Diagram.MechMarks.Decision,
      title: "Decision breakdowns",
      body: "Questions settled by whichever forum discusses them last. Or by neither. Decisions reopened on Thursday."
    },
    {
      n: "04",
      Icon: Diagram.MechMarks.Structural,
      title: "Structural contradictions",
      body: "Two functions measured in opposing directions. The programme has decided, implicitly, to wait and see which one wins."
    },
    {
      n: "05",
      Icon: Diagram.MechMarks.Information,
      title: "Information distortion",
      body: "Status truthful in form but misleading in substance. Escalations absorbed by middle layers because escalating costs more."
    }
  ];
  return (
    <section className="band tight" id="mechanisms" style={{ paddingTop: 80, paddingBottom: 110 }}>
      <div className="shell">
        <div className="section-head">
          <div className="ord">§ 03 — Five families of mechanism</div>
          <h2>Drift is fixed by removing <em>mechanisms</em>, not symptoms.</h2>
        </div>
        <p className="prose" style={{ marginBottom: 48 }}>
          A mechanism is not a person, a team, or a process. It is a pattern in the system that,
          when removed, would cause the symptoms to recede. Most programmes under drift have
          three or four operating simultaneously, amplifying one another.
        </p>
        <div className="mechanism-grid">
          {items.map(it => (
            <div className="mech" key={it.n}>
              <div className="num">{it.n}</div>
              <div className="icon"><it.Icon /></div>
              <h4>{it.title}</h4>
              <p>{it.body}</p>
            </div>
          ))}
        </div>
        <p className="marg" style={{ marginTop: 24, color: "var(--ink-mute)" }}>
          IN CROSS-BORDER PROGRAMMES, EACH OF THE FIVE IS REFRACTED THROUGH CULTURAL MISHEARING.
        </p>
      </div>
    </section>
  );
}

// ---------- The wrong responses ----------
function WrongResponses() {
  const wrongs = [
    { what: "Find the difficult person", why: "There usually is one. They are removed. Nothing changes." },
    { what: "Add a forum", why: "A new cadence, a new dashboard. Added and ignored." },
    { what: "Run an offsite", why: "Trust is rebuilt. It does not survive the first week back at the keyboard." },
    { what: "Bring in a new programme manager", why: "They spend six weeks trying to see a system that resists being seen." }
  ];
  return (
    <section className="band dark">
      <div className="shell">
        <div className="section-head">
          <div className="ord">§ 04 — The wrong responses</div>
          <h2>The symptoms get cured. The drift continues.</h2>
        </div>
        <p className="prose" style={{ maxWidth: "60ch", marginBottom: 56 }}>
          Programmes that drift hard are not programmes that have failed to act. They are
          programmes that have already cured several symptoms and are still drifting. Each of
          these responses treats drift as a problem of effort, structure, personality, or
          capability. It is none of these. <span className="pull">It is a problem of visibility.</span>
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", background: "#2a2520", border: "1px solid #2a2520" }}>
          {wrongs.map((w, i) => (
            <div key={i} style={{ background: "var(--ink)", padding: "32px 28px", display: "flex", flexDirection: "column", gap: 12 }}>
              <span className="mono" style={{ color: "#888076" }}>×&nbsp;&nbsp;{String(i + 1).padStart(2, "0")}</span>
              <div style={{ fontFamily: "Source Serif 4, serif", fontSize: 24, fontWeight: 300, letterSpacing: "-0.01em", color: "var(--paper)" }}>{w.what}</div>
              <p style={{ fontSize: 15, color: "#b8b1a4", lineHeight: 1.55 }}>{w.why}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Approach (4 steps) ----------
function Approach() {
  const steps = [
    {
      ord: "01",
      title: "Make the system visible",
      body: "We look at what is actually happening — not what is reported. We create conditions where people tell us what they actually see.",
      Diagram: Diagram.StepDiagram.Visible
    },
    {
      ord: "02",
      title: "Identify what breaks alignment",
      body: "We isolate the mechanisms — not the symptoms. We evidence each one on both sides of the cultural layer, and refuse the temptation to act on every one.",
      Diagram: Diagram.StepDiagram.Identify
    },
    {
      ord: "03",
      title: "Restore direction through decisions",
      body: "Five to nine decisions, made by people in a room with the authority to make them. Each with a single owner, an observable success signal, an observable failure signal.",
      Diagram: Diagram.StepDiagram.Restore
    },
    {
      ord: "04",
      title: "Anchor it in the system",
      body: "Quarterly review of whether each prior decision held, replaced, or drifted. Light re-sampling of the signals. Early intervention on new mechanisms.",
      Diagram: Diagram.StepDiagram.Anchor
    }
  ];
  return (
    <section className="band" id="approach">
      <div className="shell">
        <div className="section-head">
          <div className="ord">§ 05 — How we work</div>
          <h2>Four things, in this order. Each <em>harder</em> than the next.</h2>
        </div>
        <div className="method">
          {steps.map(s => (
            <div className="step" key={s.ord}>
              <div className="ord-large">{s.ord}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <div className="step-diagram">
                <s.Diagram />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Vignettes ----------
function Vignettes() {
  const cases = [
    {
      industry: "Industrial / Power",
      shape: "Engineering DE · Delivery PL · Vendor IN",
      duration: "14 weeks",
      title: "A turbine programme amber for three steerings running.",
      body: [
        "Decisions made on Monday were quietly reopened on Thursday. The German engineering lead and the Polish delivery lead each believed the other had agreed to a sequencing change. Neither had. The integration was signed off, operationally incomplete, and the workaround had become invisible.",
        "Three mechanisms operating simultaneously: a technical blind spot at the protocol layer, a structural contradiction between throughput and quality metrics, and cultural mishearing on what 'agreed' meant in two registers."
      ],
      outcome: "Six decisions held. Programme moved to green at the next steering. We were out in seventeen weeks."
    },
    {
      industry: "Post-merger Integration",
      shape: "Acquirer US · Target NL · Operations Asia-Pacific",
      duration: "22 weeks",
      title: "A merged operations function that had not yet decided what it was.",
      body: [
        "Eighteen months after legal close, two operating models were running in parallel under one P&L. The CIO believed integration was 70% complete. The directors below her believed it had not started. Both were truthful — they were measuring different things.",
        "The work was to surface the contradictions the executive committee had been implicitly deferring, and to translate them into seven decisions the operating committee could actually carry."
      ],
      outcome: "First clean quarterly close on a single operating model. The CIO stopped being surprised by her own programme."
    },
    {
      industry: "Distributed Engineering",
      shape: "R&D FR · Build CZ · Field Ops MX",
      duration: "9 weeks (diagnostic)",
      title: "A platform programme where escalations stopped reaching the top.",
      body: [
        "Middle management, on three continents, was absorbing escalations because escalating cost more than absorbing. The programme director was operating on a six-month-old picture of her own programme. The dashboards were correct. The picture was wrong.",
        "Diagnostic only. We did not run the restoration. We made the system visible, named the mechanisms, and handed the work back. That is sometimes the engagement."
      ],
      outcome: "Leadership ran the restoration internally with the diagnosis in hand. Programme returned to schedule in two quarters."
    }
  ];
  return (
    <section className="band deep" id="vignettes">
      <div className="shell">
        <div className="section-head">
          <div className="ord">§ 06 — Composite vignettes</div>
          <h2>What the work has looked like.</h2>
        </div>
        <p className="prose" style={{ marginBottom: 32 }}>
          We do not publish case studies that name clients. The following are composite — drawn
          from real engagements, structurally accurate, identifying detail removed.
        </p>
        <div>
          {cases.map((c, i) => (
            <div className="vignette" key={i}>
              <div className="vmeta">
                <span className="industry">{c.industry}</span>
                <span>{c.shape}</span>
                <span>Engagement · {c.duration}</span>
              </div>
              <div className="v-body">
                <h3>{c.title}</h3>
                {c.body.map((p, j) => <p key={j}>{p}</p>)}
                <div className="outcome">
                  <span className="label">Outcome</span>
                  <p>{c.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Engagements ----------
function Engagements() {
  const items = [
    {
      kind: "Tier 01",
      title: "Diagnostic",
      duration: "8–12 weeks",
      body: "We make the programme visible. We name the mechanisms. We hand the work back. Sometimes this is the entire engagement.",
      bullets: ["Senior, embedded posture", "Both sides of the cultural layer", "Written diagnosis the leadership recognises"]
    },
    {
      kind: "Tier 02",
      title: "Restoration",
      duration: "16–24 weeks",
      body: "Diagnostic plus the work of restoring direction. Decisions made. Contradictions removed. Transferred to the teams through workshops and mentoring.",
      bullets: ["5–9 decisions with single owners", "Workshops with executing teams", "Direction lives in the people, not the deck"]
    },
    {
      kind: "Tier 03",
      title: "Anchor",
      duration: "Quarterly · ongoing",
      body: "Light-touch quarterly review. Did the decisions hold? Have new mechanisms appeared? When three reviews show no drift, we propose closing.",
      bullets: ["One day per quarter, on site", "Re-sampling of signals", "We do not bill for ceremony"]
    }
  ];
  return (
    <section className="band" id="engagements">
      <div className="shell">
        <div className="section-head">
          <div className="ord">§ 07 — Three kinds of engagement</div>
          <h2>Defined posture. Defined deliverable. <em>Defined exit.</em></h2>
        </div>
        <div className="engagements">
          {items.map(e => (
            <div className="eng" key={e.kind}>
              <span className="ekind">{e.kind}</span>
              <h4>{e.title}</h4>
              <span className="duration">{e.duration}</span>
              <p>{e.body}</p>
              <ul>
                {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Self-qualifier ----------
function Qualifier() {
  return (
    <section className="band tight">
      <div className="shell">
        <div className="section-head">
          <div className="ord">§ 08 — Whether this is for you</div>
          <h2>We are explicit about the work we will <em>not</em> take on.</h2>
        </div>
        <div className="qualifier">
          <div className="for">
            <h3>This work is for you if</h3>
            <ul>
              <li>You run a cross-border programme — distributed engineering, transitions, post-merger integration, multi-site operations.</li>
              <li>You are programme leadership, a COO, a CTO, or the executive accountable for delivery.</li>
              <li>You have lost real visibility into how your programme actually operates — and you can feel it.</li>
              <li>You are willing to grant the access necessary to make it visible.</li>
              <li>You want to know what is actually happening, even if it is uncomfortable.</li>
            </ul>
          </div>
          <div className="notfor">
            <h3>This work is not for you if</h3>
            <ul>
              <li>You are looking for a change-management programme or a transformation office.</li>
              <li>You want a deck, a RACI chart, or a new operating model on slides.</li>
              <li>You want a long-running engagement that grows over time. Ours shrink.</li>
              <li>You want certainty before the work is done. We sell visibility, not certainty.</li>
              <li>You are not yet willing to look at what has been avoided.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- About / partners ----------
function About() {
  return (
    <section className="band deep" id="about">
      <div className="shell">
        <div className="section-head">
          <div className="ord">§ 09 — The practice</div>
          <h2>A small team. We will <em>stay</em> small.</h2>
        </div>
        <p className="prose" style={{ marginBottom: 56 }}>
          DRIFT Partners is the practice of Emic Lab. Same partners. Evolving the work. The
          success indicator is not how long we stay — it is how cleanly we leave.
        </p>
        <div className="partners-row">
          <div className="partner">
            <h3>Anna Chodynicka</h3>
            <div className="role">Partner</div>
            <p>
              Twenty years inside cross-border programmes — engineering, delivery, integrations.
              Reads the cultural layer in the room before she reads the artefacts.
            </p>
            <p>
              Works with leadership in the embedded posture. The person who tells the steering
              committee what its own programme is doing.
            </p>
          </div>
          <div className="partner">
            <h3>Dr Joanna Więckowska</h3>
            <div className="role">Partner</div>
            <p>
              A scholar of how organisations distort their own signals. Builds the methodology
              by which we sample, evidence, and rank the mechanisms producing drift.
            </p>
            <p>
              Designs the small set of decisions a programme can actually carry. Refuses the
              decisions it cannot.
            </p>
          </div>
        </div>
        <div className="rule" style={{ margin: "72px 0 36px" }}></div>
        <span className="marg">SELECTED CLIENTS — DRIFT PARTNERS / EMIC LAB</span>
        <div className="clients" style={{ marginTop: 24 }}>
          {["Capgemini", "GE Vernova", "GE HealthCare", "GE Aerospace", "UBS", "Carlsberg", "Hapag-Lloyd", "Equinix", "Dentons", "Sabre", "Valeo", "Ecolab"].map(c => (
            <div key={c}>{c}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Contact / sign-off ----------
function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <section className="band dark" id="contact">
      <div className="shell">
        <div className="section-head">
          <div className="ord">§ 10 — A note about your programme</div>
          <h2>If something here described <em>your</em> programme, write to us.</h2>
        </div>
        <div className="signoff">
          <div className="letter">
            <p>
              We do not promise easy. We do not sell certainty. We sell visibility — and the work
              that follows from it.
            </p>
            <p>
              If you write, tell us the shape of the programme, where the cultural layer sits,
              and what you have already tried. <em>One paragraph is enough.</em> We reply
              personally, within two working days.
            </p>
            <p>
              <em>— Anna &amp; Joanna</em>
            </p>
          </div>
          <div>
            <div className="contact-card">
              <div className="label">Direct</div>
              <a href="mailto:amc@emic.pl" className="email">amc@emic.pl</a>
              <div className="meta">
                <div className="row"><span className="k">Phone</span><span>+48 663 057 223</span></div>
                <div className="row"><span className="k">Practice</span><span>emiclab.com</span></div>
                <div className="row"><span className="k">Based</span><span>Warsaw &amp; Berlin</span></div>
              </div>

              {!sent ? (
                <form className="note-form" onSubmit={submit}>
                  <div className="label">Or — a short note</div>
                  <div className="field"><span>Name</span><input required placeholder="Who you are" /></div>
                  <div className="field"><span>Programme</span><input required placeholder="What it is, where it sits" /></div>
                  <div className="field"><span>The shape</span><textarea required rows={3} placeholder="One paragraph. The geography, what's drifting, what you've tried."></textarea></div>
                  <button className="submit" type="submit">Send the note &nbsp;→</button>
                </form>
              ) : (
                <div className="note-form">
                  <div className="label">Received</div>
                  <p className="sent">Thank you. One of us will reply personally within two working days.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Footer ----------
function Foot() {
  return (
    <footer className="foot">
      <div className="shell" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 24, width: "100%" }}>
        <span>DRIFT Partners · A practice of Emic Lab S.C.</span>
        <span>© 2018–2026 · Same partners. Evolving the work.</span>
        <span>amc@emic.pl · +48 663 057 223</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Hero, DriftDefinition, Mishearing, Mechanisms, WrongResponses, Approach, Vignettes, Engagements, Qualifier, About, Contact, Foot });
