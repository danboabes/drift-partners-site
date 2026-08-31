// Section components for DRIFT Partners site

const { useState, useEffect, useRef } = React;

// Lightweight wrapper around gtag — safe if GA fails to load (adblock, etc.)
function track(eventName, params) {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", eventName, params || {});
    }
  } catch (e) { /* no-op */ }
}

// ---------- Nav ----------
function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <nav className="nav">
      <div className="shell nav-inner">
        <a href="#" className="nav-brand" style={{ textDecoration: "none" }} onClick={close}>
          <img src="drift-light.svg" alt="DRIFT Partners, a practice of Emic Lab" className="nav-logo nav-logo-full" />
          <img src="drift-light-clean.svg" alt="DRIFT Partners" className="nav-logo nav-logo-clean" />
        </a>
        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span aria-hidden="true">{open ? "✕" : "☰"}</span>
        </button>
        <div className={`nav-links${open ? " is-open" : ""}`}>
          <a href="#mechanisms" className="always-show" onClick={close}>Approach</a>
          <a href="#vignettes" className="always-show" onClick={close}>Cases</a>
          <a href="#about" className="always-show" onClick={close}>About</a>
          <a href="/field-notes/" className="always-show" onClick={close}>Field notes</a>
          <a href="#contact" className="nav-cta always-show" onClick={close}>Contact</a>
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
        <div className="hero-meta hero-meta-stacked">
          <span><span className="dot"></span>DRIFT PARTNERS · A PRACTICE OF EMIC LAB</span>
          <span>EST. 2006 · WARSAW</span>
          <span>WORK DELIVERED ACROSS NORTH AMERICA, EUROPE, INDIA, AND THE GULF COUNTRIES</span>
        </div>
        <div className="hero-grid">
          <h1 className="hero-headline serif-display">
            Activity is not <em>alignment.</em>
          </h1>
          <div className="hero-side">
            <span className="label" style={{ fontSize: 20, fontWeight: 500, fontStyle: "normal", color: "var(--ink-mute)" }}>On the quiet loss of direction at the system level</span>
            <p>
              <span className="lede" style={{ fontStyle: "normal" }}>Programmes rarely fail because of incompetence.</span>{" "}
              They fail when competent work pulls in different directions. Work continues.
              Effort increases. Decisions are made. And still, things don't move forward.
              Leaders feel it. Their people feel it. But the system has grown opaque to the
              people accountable for it.
            </p>
            <p>
              We restore direction in programmes that have lost it.
            </p>
            <p style={{ marginTop: "1em" }}>
              We compare reported progress with operating reality. We name the mechanisms
              breaking alignment. We help leadership make decisions that hold in execution.
            </p>
            <p style={{ marginTop: 22 }}>
              <a href="#contact"
                onClick={() => track("cta_click", { cta_id: "hero_60_min", location: "hero" })}
                style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 20,
                fontWeight: 600,
                letterSpacing: "0.04em",
                color: "var(--accent)",
                textDecoration: "none",
                fontStyle: "normal",
                borderBottom: "1px solid var(--accent)",
                paddingBottom: 2,
                textTransform: "uppercase"
              }}>Start with a 60-minute conversation &nbsp;→</a>
            </p>
            <p style={{ marginTop: 14, fontSize: 20, lineHeight: 1.55, color: "var(--accent)" }}>
              What you share stays in the room. We lead the conversation. Bring the programme
              that no longer reads clearly. You will leave with a working view of whether this
              is likely to be drift, and whether we are the right people to help.
            </p>
            <p style={{
              marginTop: 0,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 20,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              fontStyle: "normal",
              color: "var(--ink-mute)"
            }}>
              <a href="/field-notes/"
                onClick={() => track("cta_click", { cta_id: "read_the_writing", location: "hero" })}
                style={{ color: "var(--ink-mute)", textDecoration: "none", borderBottom: "1px solid var(--rule)", paddingBottom: 2, whiteSpace: "nowrap" }}>Read the writing &nbsp;&rarr;</a>
              <span style={{ color: "var(--ink-quiet)", padding: "0 14px" }}>&middot;</span>
              <a href="https://www.linkedin.com/in/anna-chodynicka" target="_blank" rel="noopener"
                onClick={() => track("outbound_click", { link_id: "linkedin_profile", location: "hero" })}
                style={{ color: "var(--ink-mute)", textDecoration: "none", borderBottom: "1px solid var(--rule)", paddingBottom: 2, whiteSpace: "nowrap" }}>Follow on LinkedIn &nbsp;&rarr;</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Recognition band ----------
function Recognition() {
  return (
    <section className="band tight" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="shell">
        <div style={{ maxWidth: "70ch" }}>
          <p className="marg" style={{ color: "var(--ink-mute)" }}>
            WHEN LEADERSHIP CALLS US
          </p>
          <p className="prose" style={{ marginTop: 20, fontStyle: "italic", color: "var(--accent)" }}>
            We are usually called when:
          </p>
          <ul className="prose" style={{ marginTop: "0.8em", paddingLeft: 0, listStyle: "none" }}>
            <li style={{ marginTop: "0.55em" }}>•&nbsp;&nbsp;The programme is officially on track, but leadership no longer trusts the picture.</li>
            <li style={{ marginTop: "0.55em" }}>•&nbsp;&nbsp;Decisions are made, then reopened in execution.</li>
            <li style={{ marginTop: "0.55em" }}>•&nbsp;&nbsp;Escalations stop travelling.</li>
            <li style={{ marginTop: "0.55em" }}>•&nbsp;&nbsp;Headquarters and local teams agree in words, but act on different meanings.</li>
            <li style={{ marginTop: "0.55em" }}>•&nbsp;&nbsp;Governance has increased activity, not direction.</li>
            <li style={{ marginTop: "0.55em" }}>•&nbsp;&nbsp;Capable people are working harder, while frustration rises and movement slows.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

// ---------- Observable form ----------
function Observable() {
  return (
    <section className="band" id="observable">
      <div className="shell">
        <div className="section-head">
          <div className="ord">01 · Drift, in observable form</div>
          <h2>Drift is what happens when competent people, working hard, produce a <em>collective result</em> nobody intended.</h2>
        </div>
        <div style={{ maxWidth: "62ch" }}>
          <p className="prose" style={{ fontWeight: 500, color: "var(--ink)" }}>
            You may be seeing drift if:
          </p>
          <ul className="prose" style={{ marginTop: "0.8em", paddingLeft: 0, listStyle: "none" }}>
            <li style={{ marginTop: "0.5em" }}>•&nbsp;&nbsp;Decisions are made in steering and reopened in execution.</li>
            <li style={{ marginTop: "0.5em" }}>•&nbsp;&nbsp;Reporting is correct, but the picture it creates feels wrong.</li>
            <li style={{ marginTop: "0.5em" }}>•&nbsp;&nbsp;Escalations stopped reaching the top, but the risk did not disappear.</li>
            <li style={{ marginTop: "0.5em" }}>•&nbsp;&nbsp;Different functions are optimising against each other.</li>
            <li style={{ marginTop: "0.5em" }}>•&nbsp;&nbsp;A new cadence, forum or programme manager improved activity but not direction.</li>
          </ul>
        </div>
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
          <div className="ord">03 · The translation layer</div>
          <h2>Same words. <em>Different</em> operating meaning.</h2>
        </div>
        <div style={{ maxWidth: "62ch" }}>
          <p className="prose">
            The programme is on track. Everyone agrees. Three weeks earlier, leadership had
            started to suspect it was not. The dashboards were still green.
          </p>
          <p className="prose" style={{ marginTop: "1em" }}>
            Then came the town hall. Excellence. Accountability. Customer-first. The words were
            clear at the top. They did not land clearly in the system. Some became behaviours
            leadership never intended.
          </p>
          <p className="prose" style={{ marginTop: "1em" }}>
            <span className="pull">This is the translation layer. Sometimes it appears as culture. Sometimes as leadership behaviour. It is always operational.</span>{" "}
            No one has to be lying for direction to distort.
          </p>
          <p className="prose" style={{ marginTop: "1em" }}>
            Multinational programmes often share the words, not the meaning. Drift usually sits
            below the visible structure: in decisions that do not hold, contradictions people
            have learned to work around, and signals that stop travelling because telling the
            truth has become too expensive.
          </p>
          <p className="prose" style={{ marginTop: "1em" }}>
            Changing the structure does not restore direction if the same human system keeps
            translating it back.
          </p>
          <p className="prose" style={{ marginTop: "1em" }}>
            The work is slow because the distortion is real. It is what restores direction.
          </p>
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
      title: "Operational blind spots",
      body: "One team hands its work to another, and the sign-off says the job is done. The team that took it over quietly rebuilds half of it, and no status report has a line for that."
    },
    {
      n: "02",
      Icon: Diagram.MechMarks.Capability,
      title: "Role overload",
      body: "One senior person holds the programme together by doing work that their role was never built for. Everyone has learned to plan around them, so the risk stays invisible."
    },
    {
      n: "03",
      Icon: Diagram.MechMarks.Decision,
      title: "Decision breakdowns",
      body: "A decision is made in Monday's steering meeting. By Thursday another forum has quietly reopened it, and each site follows its own version."
    },
    {
      n: "04",
      Icon: Diagram.MechMarks.Structural,
      title: "Structural contradictions",
      body: "One function is paid to move fast, another is paid to be safe. The programme has decided, implicitly, to wait and see which one wins."
    },
    {
      n: "05",
      Icon: Diagram.MechMarks.Information,
      title: "Information distortion",
      body: "Every line of the status report is true, and the report is still wrong. Bad news gets softer at each level, because carrying it upward has a price."
    }
  ];
  return (
    <section className="band tight" id="mechanisms" style={{ paddingTop: 80, paddingBottom: 110 }}>
      <div className="shell">
        <div className="section-head">
          <div className="ord">02 · Five families of mechanism</div>
          <h2>Drift is fixed by removing <em>mechanisms</em>, not symptoms.</h2>
        </div>
        <p className="prose">
          Drift is not poor performance. Not bad strategy. Not a culture problem. It is the gap
          between the programme as observed and the programme as reported, and it is fixed by
          removing <em>mechanisms</em>, not symptoms.
        </p>
        <p className="prose" style={{ marginTop: "1.1em" }}>
          A mechanism is not a person, a team, or a process. It is a pattern in the system that,
          when removed, would cause the symptoms to recede. Most programmes under drift have
          three or four operating simultaneously, amplifying one another.
        </p>
        <p className="prose" style={{ marginTop: "1.4em", marginBottom: 48, fontStyle: "italic", color: "var(--accent)" }}>
          Below, each family with one example of how it shows up. In a live programme each takes
          many forms. We identify which are operating in yours, and we act on the ones that
          move the system.
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
          IN MULTINATIONAL PROGRAMMES, EACH OF THE FIVE IS REFRACTED THROUGH CULTURAL MISHEARING.
        </p>
      </div>
    </section>
  );
}

// ---------- Common responses ----------
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
          <div className="ord">04 · Common responses</div>
          <h2>The symptoms get cured. The drift continues.</h2>
        </div>
        <p className="prose" style={{ maxWidth: "60ch", marginBottom: 24 }}>
          Programmes that drift hard are not programmes that have failed to act. They are
          programmes that have already cured several symptoms and are still drifting. Each of
          these responses treats drift as a problem of effort, structure, personality, or
          capability. It is none of these. <span className="pull">It is a problem of visibility.</span>
        </p>
        <p style={{ maxWidth: "60ch", marginBottom: 48, fontStyle: "italic", fontSize: 22, lineHeight: 1.5, color: "#d99a85" }}>
          These responses are not wrong. They are insufficient. They treat what the organisation
          can tolerate seeing.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", background: "#2a2520", border: "1px solid #2a2520" }}>
          {wrongs.map((w, i) => (
            <div key={i} style={{ background: "var(--ink)", padding: "32px 28px", display: "flex", flexDirection: "column", gap: 12 }}>
              <span className="mono" style={{ color: "#888076" }}>×&nbsp;&nbsp;{String(i + 1).padStart(2, "0")}</span>
              <div style={{ fontFamily: "Source Serif 4, serif", fontSize: 28, fontWeight: 300, letterSpacing: "-0.01em", color: "var(--paper)" }}>{w.what}</div>
              <p style={{ fontSize: 20, color: "#b8b1a4", lineHeight: 1.55 }}>{w.why}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid #2a2520", maxWidth: "68ch" }}>
          <p style={{ fontFamily: "'Source Serif 4', serif", fontSize: 26, lineHeight: 1.5, color: "var(--paper)", fontWeight: 300 }}>
            By the time symptoms reach the steering committee, the underlying drift is six to
            twelve months ahead of the diagnosis. By the time the steering committee asks the
            question that turns out to matter, the programme is already a year behind.
          </p>
        </div>
      </div>
    </section>
  );
}

// ---------- Vignettes ----------
function Vignettes() {
  const cases = [
    {
      industry: "Distributed engineering (diagnostic)",
      shape: "France (R&D) · Czech Republic (Build) · Mexico (Field Operations)",
      title: "A platform programme where escalations stopped reaching the top.",
      body: [
        "Middle management, on three continents, was absorbing escalations because escalating cost more than absorbing. The programme director was operating on a six-month-old picture of her own programme. The dashboards were correct. The picture was wrong.",
        "Diagnostic only. We did not run the restoration. We made the system visible, named the mechanisms, and handed the work back. That is sometimes the engagement."
      ],
      outcome: "Leadership ran the restoration internally with the diagnosis in hand. Programme returned to schedule.",
      role: "Our role: showed leadership why escalations were not reaching the top, named the mechanism, and handed the work back."
    },
    {
      industry: "Services · Multi-site",
      shape: "Germany · Poland · United States",
      title: "A programme where the values had outrun their translation.",
      body: [
        "Equality. Agency. Ownership. Sound values. But where the local culture had no concept for one or more of them, the words landed empty. Ownership came back as property; agency as nothing at all. The leaders who used them were heard as evasive. Nobody on the team had been working from those values. Nobody had ever been able to. People worked from a sense of craft and from fear, but not toward what the company was asking for.",
        "The senior leaders sent the team to our sessions and mentoring (\"go and learn, it will be better\") and did not come themselves. The direction never landed, because the people setting it never came into the room where it was translated."
      ],
      outcome: "Tension at the team level dropped. Individual work improved. The programme itself did not regain direction.",
      role: "Our role: showed leadership where the values landed, and where direction was being lost."
    },
    {
      industry: "Industrial · Post-merger",
      shape: "United Kingdom · Denmark · India",
      title: "An integration that changed on paper first.",
      body: [
        "The integration plan had been approved. The new structure was clear. Leadership alignment was visible.",
        "But the operating system had not integrated.",
        "Old decision rights stayed alive. New leaders inherited forums without authority. Headquarters heard delay as resistance. Local teams heard integration as loss of control.",
        "The visible diagnosis pointed to change adoption: more communication, more alignment sessions, another explanation of the structure.",
        "The drift sat lower.",
        "People were not rejecting the integration. They were protecting the parts of the old system that still carried risk, trust and informal authority.",
        "The structure had changed. The work had not."
      ],
      outcome: "Leadership stopped treating the issue as adoption. Direction returned when authority, risk and decision rights were made explicit in execution.",
      role: "Our role: made clear who held authority, who carried risk, and who made which decisions, so the integration could move."
    }
  ];
  return (
    <section className="band deep" id="vignettes">
      <div className="shell">
        <div className="section-head">
          <div className="ord">05 · Cases</div>
          <h2>What the work has looked like.</h2>
        </div>
        <p className="prose" style={{ marginBottom: 32 }}>
          Our work is usually confidential. The cases below are drawn from real engagements:
          identifying details removed, operating structures preserved.
        </p>
        <div>
          {cases.map((c, i) => (
            <div className="vignette" key={i}>
              <div className="vmeta" style={{ flexDirection: "column", alignItems: "flex-start", gap: 4 }}>
                <span className="industry">{c.industry}</span>
                <span>{c.shape}</span>
              </div>
              <div className="v-body">
                <h3>{c.title}</h3>
                <div className="outcome" style={{ marginTop: 16, paddingTop: 0, paddingBottom: 14, marginBottom: 14, borderTop: "none", borderBottom: "none" }}>
                  <span className="label">Outcome</span>
                  <p>{c.outcome}</p>
                </div>
                <p style={{ marginBottom: 22, paddingBottom: 18, borderBottom: "1px dashed var(--rule)", fontStyle: "italic", fontSize: 20, lineHeight: 1.5, color: "var(--accent)" }}>
                  {c.role}
                </p>
                {c.body.map((p, j) => <p key={j}>{p}</p>)}
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
      sub: "Make visible. Identify what breaks alignment.",
      duration: "2 to 4 weeks from the first interview",
      body: "We make the programme visible. We name the mechanisms. We hand the work back. Sometimes this is the entire engagement.",
      bullets: ["Senior, working from inside", "Both sides of the translation layer", "Written diagnosis, and a session where we take you through it"],
      leaveWith: "You leave with: the mechanisms named, the evidence leadership can recognise, and a clear decision: stop here, restore direction internally, or bring us in further."
    },
    {
      kind: "Tier 02",
      title: "Restoration",
      sub: "Restore direction through key decisions.",
      duration: "Up to 4 months",
      body: "Diagnostic plus the work of restoring direction. Decisions made. Contradictions removed. Handed to the teams in sessions with the people who carry the work.",
      bullets: ["Key decisions with single owners", "Sessions with the executing teams", "Direction lives in the people, not the deck"],
      leaveWith: "You leave with: key decisions stop reopening. Contradictions removed. Ownership transferred to the executing teams."
    },
    {
      kind: "Tier 03",
      title: "Anchor Review",
      sub: "Hold direction over time.",
      duration: "Every quarter after that",
      body: "A focused review every quarter. Are the decisions still holding? Has new drift appeared? We close the engagement the moment the answer to both is \"we are stable now.\"",
      bullets: ["Quarterly cadence, remote or on-site as needed.", "Re-checks only on the signals that mattered in the diagnostic."],
      leaveWith: "You leave with: quarterly evidence that direction is holding, or the early signal that something is moving again before it becomes a bigger problem."
    }
  ];
  return (
    <section className="band" id="engagements">
      <div className="shell">
        <div className="section-head">
          <div className="ord">06 · The work, in three formats</div>
          <h2>Clear role. Clear output. <em>Clear exit.</em></h2>
        </div>
        <p className="prose" style={{ marginTop: -8, marginBottom: 40, fontStyle: "italic", fontSize: 26, color: "var(--accent)" }}>
          We are not paid for activity. We are paid to restore direction.
        </p>
        <div className="engagements">
          {items.map(e => (
            <div className="eng" key={e.kind}>
              <span className="ekind">{e.kind}</span>
              <h4>{e.title}</h4>
              <p style={{ fontFamily: "'Source Serif 4', serif", fontStyle: "italic", fontSize: 20, lineHeight: 1.45, color: "var(--accent)", margin: "4px 0 8px" }}>
                {e.sub}
              </p>
              <span className="duration">{e.duration}</span>
              <p>{e.body}</p>
              <ul>
                {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <p style={{ marginTop: 18, paddingTop: 14, borderTop: "1px dashed var(--rule)", fontFamily: "'Source Serif 4', serif", fontStyle: "italic", fontSize: 20, lineHeight: 1.5, color: "var(--accent)" }}>
                {e.leaveWith}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Ways to begin ----------
function WaysToBegin() {
  const cards = [
    {
      kind: "1:1",
      sub: "An outside view for one decision-maker.",
      body: "You are carrying a programme, a business, or a strategy that is starting to drift, and no one inside can say it straight. Whether the blind spot sits in the system you are inside or the market you are moving in, we name what is hard to see from inside. Then we say what to do next: what to decide, what to change, who to talk to, and what not to spend energy on. Not coaching. Not personal development.",
      bullets: [
        "For a leader, founder, or business owner",
        "Strategic, commercial, and confidential",
        "With a clear end"
      ],
      leaveWith: "You leave with: the problem named, the next move clarified, and a sharper view of what needs to change now."
    }
  ];
  return (
    <section className="band tight">
      <div className="shell">
        <div className="section-head">
          <div className="ord">Ways to begin</div>
          <h2>Simpler ways to <em>start</em>.</h2>
        </div>
        <p className="prose" style={{ marginTop: -8, marginBottom: 40, fontStyle: "italic", fontSize: 26, color: "var(--accent)", maxWidth: "70ch" }}>
          The full engagement above is the core work. A 1:1 is the simpler way to start.
          Sessions are part of the work itself: they are how a Restoration hands direction
          to the teams.
        </p>
        <div className="engagements" style={{ gridTemplateColumns: "minmax(0, 720px)" }}>
          {cards.map(c => (
            <div className="eng" key={c.kind}>
              <span className="ekind">{c.kind}</span>
              <h4>{c.sub}</h4>
              <p>{c.body}</p>
              <ul>
                {c.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <p style={{ marginTop: 18, paddingTop: 14, borderTop: "1px dashed var(--rule)", fontFamily: "'Source Serif 4', serif", fontStyle: "italic", fontSize: 20, lineHeight: 1.5, color: "var(--accent)" }}>
                {c.leaveWith}
              </p>
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
          <div className="ord">07 · Whether this is for you</div>
          <h2>We are explicit about the work we will <em>not</em> take on.</h2>
        </div>
        <div className="qualifier">
          <div className="for">
            <h3>This work is for you if</h3>
            <ul>
              <li>You run a complex programme, multinational or domestic, including distributed engineering, transitions, post-merger integration, and multi-site operations.</li>
              <li>You are programme leadership, a COO, a CTO, or the executive accountable for delivery.</li>
              <li>You have lost real visibility into how your programme actually operates, and you can feel it.</li>
              <li>You are willing to grant the access necessary to make it visible.</li>
              <li>You want to know what is actually happening, even if it is uncomfortable.</li>
            </ul>
          </div>
          <div className="notfor">
            <h3>This work is not for you if</h3>
            <ul>
              <li>You are looking for a change-management programme or a transformation office. We restore direction, then exit.</li>
              <li>You want a deck, a playbook, or a new operating model that stays on slides. We hand back decisions, not documents.</li>
              <li>You want a long-running engagement that grows over time. Ours shrink.</li>
              <li>You want certainty before the work is done. We sell visibility, not certainty.</li>
              <li>You are not ready to hear what is not being said. We will make it visible.</li>
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
          <div className="ord">08 · The practice</div>
          <h2>A small team. We will <em>stay</em> small.</h2>
        </div>
        <p className="prose" style={{ marginBottom: 56, maxWidth: "none" }}>
          DRIFT Partners is the team you knew as Emic Lab. Same partners, evolved focus. The
          success indicator is not how long we stay; it is how cleanly we leave.
        </p>
        <div className="partners-row">
          <div className="partner">
            <h3>Anna Chodynicka</h3>
            <div className="role">Partner</div>
            <p>
              Twenty years inside multinational programmes: engineering, delivery, integrations.
              Reads where formal alignment has separated from operating reality. Works with
              leadership from inside the programme.
            </p>
          </div>
          <div className="partner">
            <h3>Dr Joanna Więckowska</h3>
            <div className="role">Partner</div>
            <p>
              Twenty years inside multinational programmes: leadership rooms, senior-level
              decisions. Reads how organisations distort their own signals. Builds the
              methodology by which we sample, evidence, and rank the mechanisms producing drift.
              Designs the small set of decisions a programme can actually carry. Refuses the
              decisions it cannot.
            </p>
          </div>
          <div className="partner">
            <h3>Dan Boabeș</h3>
            <div className="role">Partner</div>
            <p>
              Two decades building multinational ventures in mobility, payments, and AI, across
              Romania, Switzerland, the Gulf, and Mongolia. Scales companies by turning emerging
              technologies into working businesses. Reads complex programmes from inside the
              room because he still runs them.
            </p>
          </div>
        </div>
        <div className="rule" style={{ margin: "72px 0 24px" }}></div>
        <span className="marg">SELECTED CLIENTS · DRIFT PARTNERS / EMIC LAB</span>
        <p style={{ marginTop: 8, fontFamily: "'Source Serif 4', serif", fontStyle: "italic", fontSize: 20, lineHeight: 1.5, color: "var(--accent)" }}>
          Work delivered across North America, Europe, India, and the Gulf countries.
        </p>
        <div className="clients" style={{ marginTop: 24 }}>
          {["GE", "Splunk", "Capgemini", "Tata Consultancy Services", "Ecolab", "Honeywell", "Heineken", "Hapag-Lloyd", "Carlsberg", "Roche/Genentech", "Bayer", "Akamai", "Equinix", "Circle K", "Sabre", "Alstom"].map(c => (
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
    track("form_submit", { form_id: "contact_short_note" });
    setSent(true);
  };
  return (
    <section className="band dark" id="contact">
      <div className="shell">
        <div className="section-head">
          <div className="ord">09 · A note about your programme</div>
          <h2>If something here described <em>your</em> programme, write to us.</h2>
        </div>
        <div className="signoff">
          <div className="letter">
            <p>
              We do not promise easy. We do not sell certainty. We sell visibility, and the work
              that follows from it.
            </p>
            <p style={{ marginTop: "1.4em" }} className="talk-first">
              <strong style={{ display: "inline-block" }}>Talk first, if you prefer.</strong>{" "}
              <span style={{ whiteSpace: "nowrap" }}>Anna Chodynicka</span>{" · "}
              <a href="tel:+48663057223"
                onClick={() => track("phone_click", { location: "contact_letter" })}
                style={{ color: "inherit", textDecoration: "none", borderBottom: "1px solid currentColor", whiteSpace: "nowrap" }}>+48&nbsp;663&nbsp;057&nbsp;223</a>{" · "}
              <a href="mailto:amc@emic.pl"
                onClick={() => track("email_click", { location: "contact_letter" })}
                style={{ color: "inherit", textDecoration: "none", borderBottom: "1px solid currentColor", whiteSpace: "nowrap" }}>amc@emic.pl</a>
            </p>
            <p style={{ marginTop: "1em" }}>
              <strong>Or drop us a line. We will contact you.</strong>
            </p>
            <p style={{ marginTop: "1.4em" }}>
              <em>Anna, Joanna &amp; Dan</em>
            </p>
          </div>
          <div>
            <div className="contact-card">
              <div className="label">Direct</div>
              <a href="mailto:amc@emic.pl"
                onClick={() => track("email_click", { location: "contact_card" })}
                className="email">amc@emic.pl</a>
              <div className="meta">
                <div className="row"><span className="k">Phone</span><span>+48 663 057 223</span></div>
                <div className="row"><span className="k">Practice</span><span>emiclab.com</span></div>
                <div className="row"><span className="k">Based</span><span>Warsaw</span></div>
                <div className="row"><span className="k">LinkedIn</span><span>
                  <a href="https://www.linkedin.com/in/anna-chodynicka" target="_blank" rel="noopener" className="li-link"
                    onClick={() => track("outbound_click", { link_id: "linkedin_profile", location: "contact_card" })}><svg className="li-mark" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>anna-chodynicka</a>
                </span></div>
              </div>

              {!sent ? (
                <form className="note-form" onSubmit={submit}>
                  <div className="label">A short note</div>
                  <div className="field"><span>Name</span><input required placeholder="" /></div>
                  <div className="field"><span>Email or phone</span><input required placeholder="" /></div>
                  <div className="field"><span>Message (optional)</span><textarea rows={3} placeholder="Anything you want us to know."></textarea></div>
                  <button className="submit" type="submit">Drop us a line &nbsp;→</button>
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
        <span>© 2006–2026 DRIFT Partners (Emic Lab S.C.). All rights reserved.</span>
        <span>
          <a href="https://www.linkedin.com/in/anna-chodynicka" target="_blank" rel="noopener" className="li-link"
            onClick={() => track("outbound_click", { link_id: "linkedin_profile", location: "footer" })}><svg className="li-mark" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>LinkedIn</a>
          {" · "}amc@emic.pl · +48 663 057 223
        </span>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Hero, Recognition, Observable, Mishearing, Mechanisms, WrongResponses, Vignettes, Engagements, WaysToBegin, Qualifier, About, Contact, Foot });
