// Veridooh Onboarding — interactive lesson summaries
// Each lesson gets a separate "Interactive Summary" tab: a click-through widget
// tailored to its core concept, plus one optional non-blocking knowledge check.

function getInteractiveState(lessonId, defaults) {
  if (!state.interactiveState[lessonId]) {
    state.interactiveState[lessonId] = Object.assign({}, defaults);
  }
  return state.interactiveState[lessonId];
}

function renderCheckQuestion(lessonId, q) {
  const s = getInteractiveState(lessonId, {});
  const answered = s.checkAnswer != null;
  const isCorrect = s.checkAnswer === q.correct;
  return `
    <div class="check-question">
      <div class="cq-label">Quick check · optional</div>
      <h4>${q.question}</h4>
      <div class="check-options">
        ${q.options.map((opt, oi) => {
          let cls = '';
          if (answered && oi === s.checkAnswer) cls = oi === q.correct ? 'chosen-correct' : 'chosen-incorrect';
          return `<button class="check-option ${cls}" data-check-lesson="${lessonId}" data-check-option="${oi}" data-check-correct="${q.correct}">${opt}</button>`;
        }).join('')}
      </div>
      ${answered ? `<div class="check-feedback ${isCorrect ? 'correct' : 'incorrect'}">${isCorrect ? '✅ ' + (q.correctFeedback || 'Correct.') : '❌ ' + (q.incorrectFeedback || 'Not quite — take another look above.')}</div>` : ''}
    </div>
  `;
}

function renderInteractiveSummary(lessonId) {
  switch (lessonId) {
    case 'what-is-pdooh': return interactiveWhatIsPdooh();
    case 'where-veridooh-fits': return interactiveWhereVeridoohFits();
    case 'how-veridooh-works': return interactiveHowVeridoohWorks();
    case 'dsp-ssp-ecosystem': return interactiveDspSsp();
    case 'impression-classification': return interactiveClassifier();
    case 'daily-job': return interactiveDailyJob();
    case 'campaign-lifecycle': return interactiveLifecycle();
    case 'collaborate-stakeholders': return interactiveStakeholders();
    case 'case-studies': return interactiveCaseStudies();
    case 'se-daily-tasks': return interactiveSeDailyTasks();
    case 'se-campaign-review': return interactiveSeCampaignReview();
    case 'se-campaign-setup': return interactiveSeCampaignSetup();
    case 'se-fixes-reference': return interactiveSeFixesReference();
    case 'what-is-a-booking': return interactiveWhatIsABooking();
    case 'the-booking-lifecycle': return interactiveBookingLifecycle();
    case 'anatomy-of-a-booking-form': return interactiveAnatomyOfBkf();
    case 'how-creatives-get-allocated': return interactiveHowCreativesGetAllocated();
    case 'filling-a-booking-form': return interactiveFillingBkf();
    case 'mitype-full-reference': return interactiveMitypeDrill();
    case 'allocating-creatives-the-3-cases': return interactiveCreativeCases();
    case 'mistakes-to-avoid': return interactiveMistakesChecklist();
    case 'metabase-compliance-and-escalation': return interactiveComplianceScenarios();
    default: return '<p class="muted">No interactive summary for this lesson yet.</p>';
  }
}

// ---------- 1. What is pDOOH? — trace the ad's journey ----------

const TRACE_STEPS = [
  { icon: 'briefcase', label: 'Brand', detail: '<strong>Brand</strong> wants to advertise, and sets a budget and goal.' },
  { icon: 'monitor', label: 'DSP', detail: 'The <strong>DSP</strong> (the buyer\'s software) sets the rules — where, when, who, and how much to spend.' },
  { icon: 'gavel', label: 'Ad Exchange', detail: 'The <strong>Ad Exchange</strong> is the marketplace — available screens are auctioned off in real time, in milliseconds.' },
  { icon: 'store', label: 'SSP', detail: 'The <strong>SSP</strong> (the seller\'s software) is how screen owners sell their available slots into that auction.' },
  { icon: 'tv', label: 'Screen', detail: 'The <strong>Screen</strong> — the actual digital panel — plays the ad.' },
  { icon: 'shield-check', label: 'Veridooh', detail: '<strong>Veridooh</strong> independently captures what actually happened — separately from what anyone else reports.' }
];

function interactiveWhatIsPdooh() {
  const s = getInteractiveState('what-is-pdooh', { step: 0 });
  return `
    <div class="interactive-panel">
      <p class="interactive-hint">Click through each stop the ad makes on its way from a brand's budget to a screen.</p>
      <div class="tracer-row">
        ${TRACE_STEPS.map((step, i) => `
          <div class="tracer-node ${i === s.step ? 'active' : ''}" data-trace-step="${i}">
            <div class="tn-icon"><i data-lucide="${step.icon}" style="width:16px;height:16px"></i></div>
            ${step.label}
          </div>
        `).join('')}
      </div>
      <div class="card tracer-detail">${TRACE_STEPS[s.step].detail}</div>
      <div class="tracer-nav">
        <button class="btn btn-ghost" data-trace-nav="prev" ${s.step === 0 ? 'disabled' : ''}>${'←'} Back</button>
        <button class="btn btn-secondary" data-trace-nav="next" ${s.step === TRACE_STEPS.length - 1 ? 'disabled' : ''}>Next ${'→'}</button>
      </div>
      ${renderCheckQuestion('what-is-pdooh', {
        question: 'Which step is where the actual auction for ad space happens?',
        options: ['Brand', 'Ad Exchange', 'Screen'],
        correct: 1,
        correctFeedback: 'Right — the Ad Exchange is the real-time marketplace where the bidding happens.',
        incorrectFeedback: 'The auction happens at the Ad Exchange, between the DSP and SSP.'
      })}
    </div>
  `;
}

// ---------- 2. Where Veridooh Fits — self-reported vs. independently verified ----------

function interactiveWhereVeridoohFits() {
  const s = getInteractiveState('where-veridooh-fits', { verified: false });
  return `
    <div class="interactive-panel">
      <p class="interactive-hint">Flip the switch to see why independent verification changes the picture.</p>
      <div class="toggle-row">
        <span class="toggle-label">Self-reported</span>
        <div class="toggle-switch ${s.verified ? 'on' : ''}" data-toggle="veridooh-fits"><div class="knob"></div></div>
        <span class="toggle-label">Veridooh-verified</span>
      </div>
      <div class="compare-row">
        <div class="card compare-toggle-card ${s.verified ? 'dim' : ''}">
          <div class="ct-icon">🏪</div>
          <div class="compare-label">The media owner marks their own homework</div>
          <p>"Trust me, your ad played 1,000,000 times." No independent check — like a restaurant handing out its own health inspection certificate.</p>
        </div>
        <div class="card compare-toggle-card ${s.verified ? '' : 'dim'}">
          <div class="ct-icon">🛡️</div>
          <div class="compare-label">Veridooh independently verifies</div>
          <p>SmartCreative™ (digital) or a Programmatic URL (pDOOH) captures the play itself, completely separately from the media owner or DSP's own numbers.</p>
        </div>
      </div>
      ${renderCheckQuestion('where-veridooh-fits', {
        question: 'Which tracking method does Veridooh use for pDOOH campaigns specifically?',
        options: ['SmartCreative™', 'Programmatic URLs', 'A phone call to the media owner'],
        correct: 1,
        correctFeedback: 'Correct — SmartCreative wraps the creative for digital; programmatic URLs handle pDOOH.',
        incorrectFeedback: 'SmartCreative is for digital DOOH — pDOOH uses programmatic tracking URLs.'
      })}
    </div>
  `;
}

// ---------- 3. How Veridooh's Platform Works — clickable subsystems ----------

const SUBSYSTEMS = [
  { key: 'setup', label: '① Campaign Setup', icon: 'settings',
    detail: 'Produces the inputs everything else needs: tagged creatives, panels/devices, and bookings (which, for programmatic, also encode the targeting conditions).',
    digital: 'Booking comes from IO forms + material instructions, consolidated by the ops team.',
    programmatic: 'Booking comes from agency targeting specs, interpreted by engineers/SEs and injected via an API.' },
  { key: 'pipeline', label: '② Data Pipeline', icon: 'git-commit-horizontal',
    detail: 'Turns raw playback signals into pre-aggregated daily reports: Tracking Listener → Persistence → Device Linking → Report Builder.',
    digital: 'Panels send play + device signals directly to the Tracking Listener.',
    programmatic: 'SSPs fire the tracking URL, which lands on the same Tracking Listener.' },
  { key: 'dashboard', label: '③ API + Dashboard', icon: 'layout-dashboard',
    detail: 'A thin presentation layer: filter the daily report rows, then aggregate them — the same data also feeds exception reports and post-campaign reports.',
    digital: 'Reports show plays against a pre-negotiated panel list.',
    programmatic: 'Reports show plays against targeting conditions, with on/off-target breakdowns.' }
];

function interactiveHowVeridoohWorks() {
  const s = getInteractiveState('how-veridooh-works', { active: 'setup', mode: 'digital' });
  const active = SUBSYSTEMS.find(x => x.key === s.active);
  return `
    <div class="interactive-panel">
      <p class="interactive-hint">Click a subsystem to see what it does, then toggle Digital / Programmatic to see how each one differs.</p>
      <div class="tracer-row">
        ${SUBSYSTEMS.map(sub => `
          <div class="tracer-node ${sub.key === s.active ? 'active' : ''}" data-subsystem="${sub.key}">
            <div class="tn-icon"><i data-lucide="${sub.icon}" style="width:16px;height:16px"></i></div>
            ${sub.label}
          </div>
        `).join('')}
      </div>
      <div class="card tracer-detail">
        <p>${active.detail}</p>
        <div class="toggle-row" style="margin-top:12px;">
          <span class="toggle-label">Digital</span>
          <div class="toggle-switch ${s.mode === 'programmatic' ? 'on' : ''}" data-toggle="how-veridooh-mode"><div class="knob"></div></div>
          <span class="toggle-label">Programmatic</span>
        </div>
        <p style="margin-top:8px;"><strong>${s.mode === 'programmatic' ? 'Programmatic' : 'Digital'}:</strong> ${s.mode === 'programmatic' ? active.programmatic : active.digital}</p>
      </div>
      ${renderCheckQuestion('how-veridooh-works', {
        question: 'Which subsystem produces the "expectation" side of the expectation-vs-delivery comparison?',
        options: ['Campaign Setup', 'Data Pipeline', 'API + Dashboard'],
        correct: 0,
        correctFeedback: 'Right — Campaign Setup produces bookings/targeting, which is the expected side.',
        incorrectFeedback: 'That\'s Campaign Setup — it produces the bookings and targeting conditions that define what was expected.'
      })}
    </div>
  `;
}

// ---------- 4. DSP/SSP Ecosystem — flip cards ----------

const ECOSYSTEM_CARDS = [
  { front: 'DSP', sub: 'Demand-Side Platform', back: 'Buyer side. Media agencies use DSPs to set up campaigns, bid for screen time, and fire tracking signals.' },
  { front: 'DMP', sub: 'Data Management Platform', back: 'Sits alongside the DSP on the buy side — supplies the audience/behavioural data the DSP uses to decide who and where to target.' },
  { front: 'SSP', sub: 'Supply-Side Platform', back: 'Seller side. Lists available ad slots from media owners — acts as the auctioneer.' },
  { front: 'Media Owner', sub: 'Screen owner', back: 'Owns the physical digital screens. Connects to SSPs — Veridooh doesn\'t interface with them directly.' },
  { front: 'Veridooh', sub: 'Independent verifier', back: 'Sits outside the buy/sell relationship and independently verifies every impression.' }
];

const URL_MODES = {
  'non-universal': {
    label: 'Non-Universal',
    setup: 'Once per campaign',
    who: 'Veridooh generates a fresh URL; it must be loaded into that specific campaign/creative before go-live.',
    risk: 'Miss the step on a new campaign, and that campaign runs with zero tracking.',
    examples: 'Vistar, Hivestack, The Trade Desk, Nexxen, Yahoo, Hawk'
  },
  'universal-traditional': {
    label: 'Universal — Traditional',
    setup: 'Once per DSP, ever',
    who: 'SE sends a one-time template email telling the DSP tracking now applies to all campaigns going forward. The DSP has to implement it on their end.',
    risk: 'It\'s a manual, DSP-dependent step — no auto-notification exists yet, so there\'s a real "did the DSP actually action the email?" risk.',
    examples: 'Sage & Archer, Outmoove, Flowcity'
  },
  'universal-selfservice': {
    label: 'Universal — Self-service',
    setup: 'Once per DSP, ever',
    who: 'The agency/client enables tracking themselves, directly inside the DSP\'s own interface. No email hand-off at all.',
    risk: 'Lowest-friction option — but relies on the client actually flipping the switch on their end.',
    examples: 'Pladway'
  }
};

function interactiveDspSsp() {
  const s = getInteractiveState('dsp-ssp-ecosystem', { flipped: {}, urlMode: 'non-universal' });
  const m = URL_MODES[s.urlMode];
  return `
    <div class="interactive-panel">
      <p class="interactive-hint">Click each card to reveal what that player actually does.</p>
      <div class="flip-grid">
        ${ECOSYSTEM_CARDS.map((c, i) => `
          <div class="card flip-card ${s.flipped[i] ? 'flipped' : ''}" data-flip="${i}">
            <div class="fc-front">${c.front}</div>
            <div class="fc-sub">${c.sub}</div>
            <div class="fc-back">${c.back}</div>
          </div>
        `).join('')}
      </div>

      <p class="interactive-hint">Now the part that trips people up — click through the three tracking-URL setups to see how the effort actually differs.</p>
      <div class="tracer-row">
        ${Object.keys(URL_MODES).map(key => `
          <div class="tracer-node ${key === s.urlMode ? 'active' : ''}" data-urlmode="${key}">${URL_MODES[key].label}</div>
        `).join('')}
      </div>
      <div class="card tracer-detail">
        <p><strong>Setup frequency:</strong> ${m.setup}</p>
        <p><strong>How it's enabled:</strong> ${m.who}</p>
        <p><strong>Watch out for:</strong> ${m.risk}</p>
        <p style="margin-bottom:0;"><strong>Examples:</strong> ${m.examples}</p>
      </div>

      ${renderCheckQuestion('dsp-ssp-ecosystem', {
        question: 'What actually makes a tracking URL "Universal" rather than "Non-Universal"?',
        options: [
          'It uses a longer URL string',
          'Setup happens once per DSP and auto-applies to every future campaign, instead of once per campaign',
          'It only works for video creatives',
          'It\'s only available in Australia'
        ],
        correct: 1,
        correctFeedback: 'Exactly — the setup is one-time per DSP, not repeated per campaign.',
        incorrectFeedback: 'The defining feature is setup frequency: once per DSP (Universal) vs. once per campaign (Non-Universal).'
      })}
    </div>
  `;
}

// ---------- 5. Impression Classification — the classifier simulator ----------

function classify(answers) {
  if (answers.adt === false) return { key: 'invalid', title: 'Invalid ❌', sub: 'Played outside Active Display Time — treated as effectively fraudulent. Holds the SSP / media owner accountable.' };
  if (answers.excluded === true) return { key: 'valid-bad', title: 'Exclusion Violation 🚫', sub: 'The most serious classification — takes precedence over everything else. Holds the DSP accountable.' };
  if (answers.targeted === false) return { key: 'valid-bad', title: 'Off-target ⚠️', sub: 'Valid, but fails one or more target conditions. Holds the DSP accountable.' };
  return { key: 'valid-good', title: 'On-target ✅', sub: 'Valid, and satisfies all target conditions — exactly what the campaign wants.' };
}

function interactiveClassifier() {
  const s = getInteractiveState('impression-classification', { adt: null, excluded: null, targeted: null });
  let result = null;
  if (s.adt === false) result = classify(s);
  else if (s.adt === true && s.excluded === true) result = classify(s);
  else if (s.adt === true && s.excluded === false && s.targeted !== null) result = classify(s);

  const showExcludedQ = s.adt === true;
  const showTargetedQ = s.adt === true && s.excluded === false;

  return `
    <div class="interactive-panel">
      <p class="interactive-hint">Walk a single play through Veridooh's classification logic yourself.</p>
      <div class="card classifier-box">
        <div class="classifier-q">
          <div class="cq-title">1. Did the play happen within the panel's Active Display Time (ADT)?</div>
          <div class="classifier-btns">
            <button class="cbtn ${s.adt === true ? 'yes-chosen' : ''}" data-classify="adt" data-value="true">Yes</button>
            <button class="cbtn ${s.adt === false ? 'no-chosen' : ''}" data-classify="adt" data-value="false">No</button>
          </div>
        </div>
        ${showExcludedQ ? `
          <div class="classifier-q">
            <div class="cq-title">2. Did it play somewhere explicitly excluded by the client?</div>
            <div class="classifier-btns">
              <button class="cbtn ${s.excluded === true ? 'yes-chosen' : ''}" data-classify="excluded" data-value="true">Yes</button>
              <button class="cbtn ${s.excluded === false ? 'no-chosen' : ''}" data-classify="excluded" data-value="false">No</button>
            </div>
          </div>
        ` : ''}
        ${showTargetedQ ? `
          <div class="classifier-q">
            <div class="cq-title">3. Did it meet all the target conditions (time, panel, creative)?</div>
            <div class="classifier-btns">
              <button class="cbtn ${s.targeted === true ? 'yes-chosen' : ''}" data-classify="targeted" data-value="true">Yes</button>
              <button class="cbtn ${s.targeted === false ? 'no-chosen' : ''}" data-classify="targeted" data-value="false">No</button>
            </div>
          </div>
        ` : ''}
        ${result ? `
          <div class="classifier-result ${result.key}">
            ${result.title}
            <div class="cr-sub">${result.sub}</div>
          </div>
          <div class="classifier-reset"><button class="btn btn-ghost" data-classify-reset="1">Try another combination</button></div>
        ` : ''}
      </div>
      ${renderCheckQuestion('impression-classification', {
        question: 'Which classification takes precedence over all others when a play qualifies for more than one?',
        options: ['On-target', 'Off-target', 'Exclusion violation'],
        correct: 2,
        correctFeedback: 'Right — exclusion violation is the most serious and always takes precedence.',
        incorrectFeedback: 'Exclusion violation outranks the others — it\'s checked first among valid plays.'
      })}
    </div>
  `;
}

// ---------- 6. Your Daily Job — escalate or note it? ----------

const DAILY_SCENARIOS = [
  { plays: '8,200', expected: '9,000', sot: '74%', panel: 'All reporting', escalate: false,
    explain: 'Underdelivery is ~9% (under the 10% threshold) and Share of Time is above 70% — worth noting, but not an immediate escalation.' },
  { plays: '6,100', expected: '9,000', sot: '58%', panel: '2 panels down', escalate: true,
    explain: 'Underdelivery is ~32% and Share of Time is well below 70%, with panels down — flag this immediately.' },
  { plays: '9,050', expected: '9,000', sot: '96%', panel: 'All reporting', escalate: false,
    explain: 'Right on pace. All-clear — log it and move on.' }
];

function interactiveDailyJob() {
  const s = getInteractiveState('daily-job', { scenario: 0, answer: null });
  const sc = DAILY_SCENARIOS[s.scenario];
  const answered = s.answer != null;
  const correct = answered && s.answer === sc.escalate;
  return `
    <div class="interactive-panel">
      <p class="interactive-hint">Here's a live delivery snapshot. Would you escalate it right now, or just note it and move on?</p>
      <div class="card scenario-card">
        <div class="scenario-metrics">
          <div class="scenario-metric"><div class="sm-val">${sc.plays}</div><div class="sm-label">Plays (expected ${sc.expected})</div></div>
          <div class="scenario-metric"><div class="sm-val">${sc.sot}</div><div class="sm-label">Share of Time</div></div>
          <div class="scenario-metric"><div class="sm-val">${sc.panel}</div><div class="sm-label">Panel status</div></div>
        </div>
        <div class="scenario-actions">
          <button class="btn ${s.answer === true ? 'btn-primary' : 'btn-secondary'}" data-scenario-answer="true">🚨 Escalate now</button>
          <button class="btn ${s.answer === false ? 'btn-primary' : 'btn-secondary'}" data-scenario-answer="false">📝 Note it, move on</button>
        </div>
        ${answered ? `<div class="scenario-verdict ${correct ? 'right' : 'wrong'}">${correct ? '✅ Correct.' : '❌ Not quite.'} ${sc.explain}</div>` : ''}
        <div class="scenario-switcher">
          ${DAILY_SCENARIOS.map((_, i) => `<button class="scenario-dot ${i === s.scenario ? 'active' : ''}" data-scenario-index="${i}"></button>`).join('')}
        </div>
      </div>
    </div>
  `;
}

// ---------- 7. Campaign Lifecycle — clickable stepper ----------

const LIFECYCLE_STAGES = [
  { label: 'Intake', detail: 'Arrives via the Monday.com board. Before setup begins: impression goal, start/end dates, and target conditions all need confirming.' },
  { label: 'Setup', detail: 'Target conditions get tiered: Basic (time), Intermediate (creative, panel), Advanced (proximity/POI — dev-only for International). Also: Hivestack always tracks per play, and it\'s always 1 tracking URL per unique creative.' },
  { label: 'Live Monitoring', detail: 'Daily health checks against concrete thresholds: tracked vs. expected <52% unhealthy, invalid impressions >18-20% unhealthy, on-target <80% of pacing unhealthy.' },
  { label: 'Exception Reporting', detail: 'Certain agencies get a recurring report of campaigns with significant off-target delivery, condition mismatches, or unconfirmed panels — gated by an eligibility check so only genuine issues surface.' },
  { label: 'Close-out', detail: 'Once the end date passes, the campaign moves to Finished. Anything flagged unhealthy near the end gets a final note to the account manager.' }
];

function interactiveLifecycle() {
  const s = getInteractiveState('campaign-lifecycle', { stage: 0 });
  return `
    <div class="interactive-panel">
      <p class="interactive-hint">Click through the stages a campaign actually moves through, start to finish.</p>
      <div class="stepper-row">
        ${LIFECYCLE_STAGES.map((st, i) => `
          <div class="stepper-node ${i === s.stage ? 'active' : ''}" data-stage="${i}">
            <div class="stepper-dot">${i + 1}</div>
            <span class="stepper-label">${st.label}</span>
          </div>
        `).join('')}
      </div>
      <div class="card tracer-detail stepper-detail">${LIFECYCLE_STAGES[s.stage].detail}</div>
      ${renderCheckQuestion('campaign-lifecycle', {
        question: 'At what "on-target impressions vs. pacing" level does live monitoring consider a campaign unhealthy?',
        options: ['Below 95%', 'Below 80%', 'Below 50%'],
        correct: 1,
        correctFeedback: 'Correct — below 80% of pacing is the unhealthy threshold for on-target impressions.',
        incorrectFeedback: 'The threshold is below 80% of pacing.'
      })}
    </div>
  `;
}

// ---------- 8. Collaborate: Single vs. Multi-Stakeholder ----------

const STAKEHOLDER_MODES = {
  single: {
    roles: [
      { role: 'Agency (self-tagger)', does: 'Handles everything — uploads creatives, generates tracking URLs, loads them into the DSP.' }
    ],
    burstFlow: 'Creatives required → Generating URLs → URLs generated',
    trackingUrlsPerCreative: false
  },
  multi: {
    roles: [
      { role: 'Campaign manager', does: 'Owns the campaign setup — dates, targeting, overall coordination.' },
      { role: 'Creative Uploader', does: 'Responsible for uploading the creative assets.' },
      { role: 'DSP platform user', does: 'Downloads the generated tracking URLs and loads them into the DSP.' }
    ],
    burstFlow: 'Creatives required → Dispatched → Downloaded',
    trackingUrlsPerCreative: true
  }
};

function interactiveStakeholders() {
  const s = getInteractiveState('collaborate-stakeholders', { mode: 'single' });
  const m = STAKEHOLDER_MODES[s.mode];
  return `
    <div class="interactive-panel">
      <p class="interactive-hint">Toggle between the two Collaborate models to see how the roles and workflow change.</p>
      <div class="toggle-row">
        <span class="toggle-label">Single-stakeholder</span>
        <div class="toggle-switch ${s.mode === 'multi' ? 'on' : ''}" data-toggle="stakeholder-mode"><div class="knob"></div></div>
        <span class="toggle-label">Multi-stakeholder</span>
      </div>
      <div class="card tracer-detail">
        <p><strong>Who's involved:</strong></p>
        <ul style="margin-bottom:12px;">
          ${m.roles.map(r => `<li><strong>${r.role}</strong> — ${r.does}</li>`).join('')}
        </ul>
        <p><strong>Burst status flow:</strong> ${m.burstFlow}</p>
        <p style="margin-bottom:0;"><strong>Tracking URLs visible per creative?</strong> ${m.trackingUrlsPerCreative ? '✅ Yes' : '➖ Not exposed — the agency handles it internally'}</p>
      </div>
      ${renderCheckQuestion('collaborate-stakeholders', {
        question: 'If Multi-stakeholder access is granted to an agency, what does it apply to?',
        options: ['Just one campaign, chosen upfront', 'All of that agency\'s campaigns', 'Only campaigns Veridooh flags as complex'],
        correct: 1,
        correctFeedback: 'Right — once granted, it applies across all of that agency\'s campaigns.',
        incorrectFeedback: 'It applies across all of that agency\'s campaigns, not just one.'
      })}
    </div>
  `;
}

// ---------- 9. Real Case Studies — diagnose it yourself ----------

function interactiveCaseStudies() {
  const s = getInteractiveState('case-studies', { index: 0, guess: null });
  const c = CASE_STUDIES[s.index];
  const guessed = s.guess != null;
  const guessCorrect = s.guess === c.correctGuess;

  return `
    <div class="interactive-panel">
      <p class="interactive-hint">Read the symptom, make your own guess at the cause, then see what the investigation actually found.</p>
      <div class="scenario-switcher" style="justify-content:flex-start;">
        ${CASE_STUDIES.map((cs, i) => `<button class="scenario-dot ${i === s.index ? 'active' : ''}" data-case-index="${i}" title="${cs.title}"></button>`).join('')}
      </div>
      <div class="card scenario-card">
        <span class="chip chip-info">${c.tag}</span>
        <h3 style="margin-top:10px;">${c.title}</h3>
        <p><strong>📋 The symptom:</strong> ${c.symptom}</p>
        ${!guessed ? `
          <p><strong>What do you think caused it?</strong></p>
          <div class="check-options">
            ${c.guessOptions.map((opt, oi) => `<button class="check-option" data-case-guess="${oi}">${opt}</button>`).join('')}
          </div>
        ` : `
          <div class="check-feedback ${guessCorrect ? 'correct' : 'incorrect'}">${guessCorrect ? '✅ That\'s what it was.' : '❌ Not quite.'} ${c.guessNote}</div>
          <div class="tracer-detail" style="margin-top:16px;">
            <p><strong>📋 What happened:</strong> ${c.whatHappened}</p>
            <p><strong>🔍 How we found out:</strong> ${c.howFound}</p>
            <p><strong>🔧 How we fixed it:</strong> ${c.howFixed}</p>
            <p style="margin-bottom:0;"><strong>💡 Lesson:</strong> ${c.lesson}</p>
          </div>
          <div class="classifier-reset"><button class="btn btn-ghost" data-case-guess-reset="1">Try another guess</button></div>
        `}
      </div>
      <div class="tracer-nav">
        <button class="btn btn-ghost" data-case-nav="prev" ${s.index === 0 ? 'disabled' : ''}>← Previous case</button>
        <span class="muted" style="align-self:center;">Case ${s.index + 1} of ${CASE_STUDIES.length}</span>
        ${s.index === CASE_STUDIES.length - 1
          ? `<button class="btn btn-secondary" disabled>Next case study →</button>`
          : `<button class="btn btn-secondary" data-case-nav="next">Next case study →</button>`
        }
      </div>
    </div>
  `;
}

// ---------- SE. Your Daily & Weekly Tasks — interactive checklist ----------

const SE_CHECKLIST = [
  { group: 'Every day', task: 'Slack requests', where: 'Slack (all pdooh channels)' },
  { group: 'Every day', task: 'Ready to Set Up group', where: 'Monday board' },
  { group: 'Every day', task: 'Report to be Built group', where: 'Monday board' },
  { group: 'Every day', task: 'Set Up Complete group', where: 'Monday board' },
  { group: 'Every Monday', task: 'Unconfirmed panels', where: 'Metabase' },
  { group: 'Mon / Tue / Wed', task: 'Untracked Campaigns group', where: 'Monday board' },
  { group: 'Mon / Tue / Wed', task: 'Unhealthy Campaigns group', where: 'Monday board' },
  { group: 'Mon / Tue / Wed', task: 'Unhealthy count cross-check', where: 'Monday board vs. Metabase' },
  { group: 'Mon / Tue / Wed', task: 'Daily Summary / pDOOH notification', where: 'Slack' }
];

function interactiveSeDailyTasks() {
  const s = getInteractiveState('se-daily-tasks', { checked: {} });
  const checkedCount = Object.values(s.checked).filter(Boolean).length;
  const groups = [...new Set(SE_CHECKLIST.map(t => t.group))];
  return `
    <div class="interactive-panel">
      <p class="interactive-hint">Try running through today's checklist — tick items off as you would in a real day. ${checkedCount}/${SE_CHECKLIST.length} checked.</p>
      ${groups.map(g => `
        <div class="card scenario-card" style="text-align:left;">
          <div class="chip chip-info" style="margin-bottom:10px;">${g}</div>
          ${SE_CHECKLIST.filter(t => t.group === g).map((t, gi) => {
            const idx = SE_CHECKLIST.indexOf(t);
            const done = !!s.checked[idx];
            return `
              <label class="quiz-option ${done ? 'selected' : ''}" style="margin-bottom:8px; cursor:pointer;" data-se-check="${idx}">
                <input type="checkbox" ${done ? 'checked' : ''} style="accent-color:#518CC7;" />
                <span style="${done ? 'text-decoration:line-through;color:#918F90;' : ''}">${t.task}</span>
                <span class="muted" style="margin-left:auto;">${t.where}</span>
              </label>
            `;
          }).join('')}
        </div>
      `).join('')}
      ${checkedCount === SE_CHECKLIST.length ? `<div class="callout" style="text-align:center;">✅ That's the full list — nice work.</div>` : ''}
    </div>
  `;
}

// ---------- SE. Daily Campaign Review — off-target cause code lookup ----------

const OFF_TARGET_CODES = [
  { code: '0', title: 'No applicable conditions available', action: 'No clear self-serve fix — raise this to the dev team.' },
  { code: '1', title: 'Creative not in any creative-based condition', action: 'A creative is missing from the targeting conditions — add it.' },
  { code: '2', title: "Doesn't match any time-based condition", action: 'Day-parting/time targeting doesn\'t match what\'s tracked. Check the matching media-owner name and format in the dashboard to find the specific panels.' },
  { code: '3', title: "Doesn't match any location-based condition", action: 'The panel/location doesn\'t match the ingested targeting conditions. Same approach — check MO name and format in the dashboard.' }
];

function interactiveSeCampaignReview() {
  const s = getInteractiveState('se-campaign-review', { code: null });
  const active = s.code != null ? OFF_TARGET_CODES[s.code] : null;
  return `
    <div class="interactive-panel">
      <p class="interactive-hint">A campaign has off-target impressions. Click the cause code the checker gave you.</p>
      <div class="tracer-row">
        ${OFF_TARGET_CODES.map((c, i) => `
          <div class="tracer-node ${s.code === i ? 'active' : ''}" data-offcode="${i}">Code ${c.code}</div>
        `).join('')}
      </div>
      ${active ? `
        <div class="card tracer-detail">
          <p><strong>Code ${active.code}:</strong> ${active.title}</p>
          <p style="margin-bottom:0;"><strong>What to do:</strong> ${active.action}</p>
        </div>
      ` : ''}
      ${renderCheckQuestion('se-campaign-review', {
        question: 'Which off-target code should you escalate straight to the dev team, since there\'s no self-serve fix?',
        options: ['Code 1', 'Code 2', 'Code 0', 'Code 3'],
        correct: 2,
        correctFeedback: 'Right — "no applicable conditions available" has no clear self-serve fix.',
        incorrectFeedback: 'That\'s Code 0 — "no applicable conditions available."'
      })}
    </div>
  `;
}

// ---------- SE. Campaign Setup (V2) — 10-step stepper ----------

const SE_SETUP_STEPS = [
  { label: 'Find Campaign', detail: 'Check for campaigns needing setup. Copy the exact campaign name and search for it first — working on the wrong campaign is an easy mistake.' },
  { label: 'Get Details', detail: 'Run the team\'s query to pull Campaign ID, advertiser, DSP name, booked impressions, and start/end dates.' },
  { label: 'Verify Info', detail: 'Cross-check the Campaign ID in Monday.com against the start date and target impressions.' },
  { label: 'Ingest Impressions', detail: 'Copy the target impressions and use the query to upload them to the database — then verify.' },
  { label: 'Booking Conditions', detail: 'Open Postman and set the Campaign ID, start/end dates, and DSP name + ID (double-check in the DB).' },
  { label: 'Time Targeting', detail: 'If no special audience/location conditions, set time targeting via the JSON template.' },
  { label: 'Upload Data', detail: 'Confirm every detail is correct, send via Postman. If there\'s an error, refresh your auth cookie and retry.' },
  { label: 'Check Data', detail: 'Run a query to confirm booked impressions, DSP, dates, and time conditions all match.' },
  { label: 'Build Reports', detail: 'Run the report for the campaign\'s dates and confirm the numbers line up with the booking.' },
  { label: 'Final Review', detail: 'Double-check the uploaded data and reports one more time before calling it done.' }
];

function interactiveSeCampaignSetup() {
  const s = getInteractiveState('se-campaign-setup', { step: 0 });
  return `
    <div class="interactive-panel">
      <p class="interactive-hint">Click through the 10 steps of setting up a new pDOOH campaign.</p>
      <div class="stepper-row">
        ${SE_SETUP_STEPS.map((st, i) => `
          <div class="stepper-node ${i === s.step ? 'active' : ''}" data-se-setup-step="${i}">
            <div class="stepper-dot">${i + 1}</div>
            <span class="stepper-label">${st.label}</span>
          </div>
        `).join('')}
      </div>
      <div class="card tracer-detail stepper-detail">${SE_SETUP_STEPS[s.step].detail}</div>
      <div class="tracer-nav">
        <button class="btn btn-ghost" data-se-setup-nav="prev" ${s.step === 0 ? 'disabled' : ''}>← Previous step</button>
        <span class="muted" style="align-self:center;">Step ${s.step + 1} of ${SE_SETUP_STEPS.length}</span>
        ${s.step === SE_SETUP_STEPS.length - 1
          ? `<button class="btn btn-secondary" disabled>Next step →</button>`
          : `<button class="btn btn-secondary" data-se-setup-nav="next">Next step →</button>`
        }
      </div>
    </div>
  `;
}

// ---------- SE. Fixes & Reference — which tool do I need? ----------

const SE_FIX_SCENARIOS = [
  { situation: 'An AM flags that the booked impressions or dates are wrong for a live campaign.', tool: 'Campaign Fix SQL', detail: 'Update ProgrammaticBookingImpression / ProgrammaticScalarConditionBooking — always BEGIN TRAN, check the OUTPUT, then COMMIT.' },
  { situation: 'The targeting conditions JSON needs correcting after go-live.', tool: 'Targeting Condition Fix', detail: 'Update ProgrammaticScalarConditionBooking.info_json — sanitise the JSON, validate with ISJSON(), then update inside a transaction.' },
  { situation: 'A client contact in the Netherlands/UK/US should be getting exception reports but isn\'t.', tool: 'Email Exception Report Access', detail: 'Check AgencyUserManagedAdvertisers for access, grant via UserOrganization if missing, then check/add an EmailNotification row of type "under-delivery-pdooh".' },
  { situation: 'You need to confirm whether a campaign is genuinely receiving tracking signals.', tool: 'AWS / Athena Tracked Check', detail: 'Compare total play count vs. booked impressions, or pull the detailed per-signal check (supplier, panel, run ID, timestamp).' },
  { situation: 'A client wants targeting based on their own list of specific sites.', tool: 'Sitelist Ingestion', detail: 'Only supported for Hivestack and Vistar today, via template + CLI script. Anything else needs the dev-pdooh team.' }
];

function interactiveSeFixesReference() {
  const s = getInteractiveState('se-fixes-reference', { index: 0 });
  const sc = SE_FIX_SCENARIOS[s.index];
  return `
    <div class="interactive-panel">
      <p class="interactive-hint">Read the situation, then check which tool actually applies.</p>
      <div class="card scenario-card">
        <p><strong>Situation:</strong> ${sc.situation}</p>
        <div class="callout"><strong>${sc.tool}</strong> — ${sc.detail}</div>
        <div class="scenario-switcher">
          ${SE_FIX_SCENARIOS.map((_, i) => `<button class="scenario-dot ${i === s.index ? 'active' : ''}" data-se-fix-index="${i}"></button>`).join('')}
        </div>
      </div>
    </div>
  `;
}

// ---------- Booking. What Is a Booking? — flip cards for IO / MI / BKF ----------

const BOOKING_DOC_CARDS = [
  { front: 'IO', sub: 'Insertion Order', back: 'The commercial contract — which panels, what dates, what price, what share of time. The "what and where."' },
  { front: 'MI', sub: 'Media Instructions', back: 'The creative brief — which creative file plays on which panel, and when. The "what plays."' },
  { front: 'BKF', sub: 'Booking Form', back: "What we build from the IO + MI — the structured record that tells our system exactly what to book." }
];

function interactiveWhatIsABooking() {
  const s = getInteractiveState('what-is-a-booking', { flipped: {} });
  return `
    <div class="interactive-panel">
      <p class="interactive-hint">Click each card to reveal what it actually means.</p>
      <div class="flip-grid">
        ${BOOKING_DOC_CARDS.map((c, i) => `
          <div class="card flip-card ${s.flipped[i] ? 'flipped' : ''}" data-booking-doc-flip="${i}">
            <div class="fc-front">${c.front}</div>
            <div class="fc-sub">${c.sub}</div>
            <div class="fc-back">${c.back}</div>
          </div>
        `).join('')}
      </div>
      ${renderCheckQuestion('what-is-a-booking', {
        question: 'Which document is exactly what the client agreed to, and must always be followed?',
        options: ['IO', 'MI', 'BKF'],
        correct: 1,
        correctFeedback: "Right — the MI is the client's signed agreement. That's the Golden Rule.",
        incorrectFeedback: "That's the MI — the Media Instruction is exactly what the client agreed to."
      })}
    </div>
  `;
}

// ---------- Booking. The Booking Lifecycle — 5-stage stepper ----------

const BOOKING_LIFECYCLE_STAGES = [
  { label: '1. Receive', detail: 'IO + MI land in Collab — the source of truth for creative availability.' },
  { label: '2. Validate', detail: 'The panel list is run through the Format Checker to confirm what we actually track.' },
  { label: '3. Build', detail: 'The BKF gets filled in — panels, dates, SOV, creative.' },
  { label: '4. Allocate', detail: "Creative gets matched to panels using the MI's MIType pattern." },
  { label: '5. Book', detail: 'The campaign goes live, tracked on Monday.com.' }
];

function interactiveBookingLifecycle() {
  const s = getInteractiveState('the-booking-lifecycle', { stage: 0 });
  return `
    <div class="interactive-panel">
      <p class="interactive-hint">Click through the 5 stages a booking passes through, from IO to live campaign.</p>
      <div class="stepper-row">
        ${BOOKING_LIFECYCLE_STAGES.map((st, i) => `
          <div class="stepper-node ${i === s.stage ? 'active' : ''}" data-lifecycle-stage="${i}">
            <div class="stepper-dot">${i + 1}</div>
            <span class="stepper-label">${st.label}</span>
          </div>
        `).join('')}
      </div>
      <div class="card tracer-detail stepper-detail">${BOOKING_LIFECYCLE_STAGES[s.stage].detail}</div>
      ${renderCheckQuestion('the-booking-lifecycle', {
        question: 'Which tool is the source of truth for creative availability?',
        options: ['Metabase', 'Collab', 'Monday.com'],
        correct: 1,
        correctFeedback: 'Right — Collab is where IOs and MIs live and act as the source of truth.',
        incorrectFeedback: "That's Collab — Metabase is for investigating delivery, not for storing the source files."
      })}
    </div>
  `;
}

// ---------- Booking. Anatomy of a Booking Form — flip cards per field ----------

const BKF_FIELD_CARDS = [
  { front: 'Panel ID', sub: '', back: 'The unique identifier for the physical screen — copied from the IO, cross-checked in Panel ID Search.' },
  { front: 'Location Display', sub: '', back: 'The site address, copied from the IO.' },
  { front: 'Screen Size', sub: '', back: 'Width × height, in that order — from the IO, not the Format Checker.' },
  { front: 'adLength', sub: '', back: 'Duration in seconds that the creative plays for.' },
  { front: 'SOV', sub: 'Share of Time', back: 'The % share of display time this advertiser has bought at that panel. Formatted to 2 decimal places.' },
  { front: 'Creative', sub: '', back: 'Which creative file plays, and any special play instructions.' },
  { front: 'Start / End Date', sub: '', back: "This panel's own booking window — always YYYY-MM-DD." }
];

function interactiveAnatomyOfBkf() {
  const s = getInteractiveState('anatomy-of-a-booking-form', { flipped: {} });
  return `
    <div class="interactive-panel">
      <p class="interactive-hint">Click each BKF field to reveal what it means and where it comes from.</p>
      <div class="flip-grid">
        ${BKF_FIELD_CARDS.map((c, i) => `
          <div class="card flip-card ${s.flipped[i] ? 'flipped' : ''}" data-bkf-field-flip="${i}">
            <div class="fc-front">${c.front}</div>
            <div class="fc-sub">${c.sub}</div>
            <div class="fc-back">${c.back}</div>
          </div>
        `).join('')}
      </div>
      ${renderCheckQuestion('anatomy-of-a-booking-form', {
        question: 'Where should Screen Size be copied from?',
        options: ['The Format Checker', 'The IO', 'Metabase'],
        correct: 1,
        correctFeedback: "Right — always from the IO, never the Format Checker.",
        incorrectFeedback: "It should come from the IO — the Format Checker is only for validating tracked panels."
      })}
    </div>
  `;
}

// ---------- Booking. How Creatives Get Allocated — guess the MIType (teaser) ----------

const MITYPE_TASTE_EXAMPLES = [
  { scenario: 'Panel A, Panel B, and Panel C all play Creative 1 — no rotation.', options: ['SingleCreativeOnEachPanel', 'CreativesByPanels', 'CreativesByBurstDates'], correct: 0, note: 'The simplest pattern — the same creative plays everywhere.' },
  { scenario: '"Panel SYD_001 plays Creative A, Panel MEL_002 plays Creative B" — named explicitly in the IO.', options: ['CreativesByDimensions', 'CreativesByPanels', 'CreativesByStates'], correct: 1, note: 'Specific creatives tied to specific named panels.' },
  { scenario: 'Burst 1 (Week 1) plays Creative A, Burst 2 (Week 3) plays Creative B.', options: ['CreativesByDates', 'CreativesByBurstDates', 'CreativesByFormat'], correct: 1, note: 'Tied to named burst/flight periods, not calendar dates.' },
  { scenario: 'Panels near a Woolworths play a specific creative during a set date range.', options: ['CreativesByAddress', 'CreativesByProximity', 'CreativesByCreativeName'], correct: 1, note: 'Driven by proximity to a location, not panel ID or address.' }
];

function interactiveHowCreativesGetAllocated() {
  const s = getInteractiveState('how-creatives-get-allocated', { index: 0, guess: null });
  const ex = MITYPE_TASTE_EXAMPLES[s.index];
  const guessed = s.guess != null;
  const correct = s.guess === ex.correct;
  return `
    <div class="interactive-panel">
      <p class="interactive-hint">Read the MI snippet, then guess which MIType pattern it is.</p>
      <div class="card scenario-card">
        <p><strong>The MI says:</strong> ${ex.scenario}</p>
        ${!guessed ? `
          <div class="check-options">
            ${ex.options.map((o, oi) => `<button class="check-option" data-mitype-teaser-guess="${oi}">${o}</button>`).join('')}
          </div>
        ` : `
          <div class="check-feedback ${correct ? 'correct' : 'incorrect'}">${correct ? '✅ Exactly right.' : '❌ Not quite.'} ${ex.note}</div>
          <div class="classifier-reset"><button class="btn btn-ghost" data-mitype-teaser-reset="1">Try another guess</button></div>
        `}
        <div class="scenario-switcher">
          ${MITYPE_TASTE_EXAMPLES.map((_, i) => `<button class="scenario-dot ${i === s.index ? 'active' : ''}" data-mitype-teaser-index="${i}"></button>`).join('')}
        </div>
      </div>
    </div>
  `;
}

// ---------- Booking Team. Filling a Booking Form — 8-step stepper ----------

const BKF_FILLING_STEPS = [
  { label: 'Copy Panels', detail: 'Copy panel names from the IO into the BKF. Watch for mixed suppliers on oOh!/OAC IOs — those need separate forms.' },
  { label: 'Format Check', detail: 'Run the panel list through the Format Checker — no result means untracked, or needs a manual cross-check.' },
  { label: 'Dimensions', detail: 'Copy height and width into the dimension formatter. OASIS IOs are usually height-first.' },
  { label: 'Screen Size', detail: "Paste the formatter's width × height output into the BKF's Screen Size column." },
  { label: 'Location', detail: 'Copy the site address into Location Display.' },
  { label: 'adLength & SOV', detail: 'Copy duration into adLength, and SOV as a 2-decimal number (convert JCD 1/2/3 shorthand to 5%/10%/15%).' },
  { label: 'Dates', detail: 'Run booking dates through the formatter to DD/MM/YYYY, then convert to YYYY-MM-DD in the BKF. Never copy the material deadline.' },
  { label: 'Re-check Format', detail: 'Copy panel names from the BKF back into the Format Checker — confirm supplier and format one more time.' }
];

function interactiveFillingBkf() {
  const s = getInteractiveState('filling-a-booking-form', { step: 0 });
  return `
    <div class="interactive-panel">
      <p class="interactive-hint">Click through the 8 steps of turning an IO into a completed Booking Form.</p>
      <div class="stepper-row">
        ${BKF_FILLING_STEPS.map((st, i) => `
          <div class="stepper-node ${i === s.step ? 'active' : ''}" data-bkf-steps-step="${i}">
            <div class="stepper-dot">${i + 1}</div>
            <span class="stepper-label">${st.label}</span>
          </div>
        `).join('')}
      </div>
      <div class="card tracer-detail stepper-detail">${BKF_FILLING_STEPS[s.step].detail}</div>
      <div class="tracer-nav">
        <button class="btn btn-ghost" data-bkf-steps-nav="prev" ${s.step === 0 ? 'disabled' : ''}>← Previous step</button>
        <span class="muted" style="align-self:center;">Step ${s.step + 1} of ${BKF_FILLING_STEPS.length}</span>
        ${s.step === BKF_FILLING_STEPS.length - 1
          ? `<button class="btn btn-secondary" disabled>Next step →</button>`
          : `<button class="btn btn-secondary" data-bkf-steps-nav="next">Next step →</button>`
        }
      </div>
      ${renderCheckQuestion('filling-a-booking-form', {
        question: 'On a JCD IO using 1/2/3 SOV shorthand, what does "3" convert to?',
        options: ['5%', '10%', '15%'],
        correct: 2,
        correctFeedback: 'Right — 1=5%, 2=10%, 3=15%.',
        incorrectFeedback: '3 converts to 15% (1=5%, 2=10%, 3=15%).'
      })}
    </div>
  `;
}

// ---------- Booking Team. MIType Reference — matching drill ----------

const MITYPE_DRILL = [
  { scenario: '"The 1920×1080 creative goes to all 1920×1080 panels" — no panel names given, just size.', options: ['CreativesByDimensions', 'CreativesByFormat', 'CreativesByPanels'], correct: 0, note: 'Use this only when panel names are missing — just dimensions.' },
  { scenario: '"The Full Motion creative plays on all Full Motion panels" — no names or dimensions given, just format type.', options: ['CreativesByFormat', 'CreativesByDimensions', 'CreativesByStates'], correct: 0, note: 'Both names and dimensions are missing — only the format type is referenced.' },
  { scenario: 'All panels rotate between Creative 1 and Creative 2, roughly 70/30.', options: ['SingleCreativeOnEachPanel', 'AllCreativesOnEachPanel', 'CreativesByDates'], correct: 1, note: 'Every panel plays the same rotating mix — not just one creative.' },
  { scenario: '30th May 12am–2pm plays Creative A, 30th May 2pm onward plays Creative B.', options: ['CreativesByDates', 'CreativesByDate&Time', 'CreativesByBurstDates'], correct: 1, note: 'Precise dayparting — a date AND a time window.' },
  { scenario: 'Consec Group 1 (4 panels, Crows Nest NSW) plays Creative 1, Consec Group 2 (3 panels, VIC) plays Creative 2.', options: ['CreativesByConsecPanels', 'CreativesByStates', 'CreativesByAddress'], correct: 0, note: "Grouped consecutive panel sets, each with its own creative, per the MI's groupings." },
  { scenario: 'A file named "..._THURS_AUS.jpg" only plays on Thursdays — the allocation is read off the file name itself.', options: ['CreativesByCreativeName', 'CreativesByDates', 'CreativesByFormat'], correct: 0, note: "Allocation is read directly off the creative's file name." }
];

function interactiveMitypeDrill() {
  const s = getInteractiveState('mitype-full-reference', { index: 0, guess: null });
  const ex = MITYPE_DRILL[s.index];
  const guessed = s.guess != null;
  const correct = s.guess === ex.correct;
  return `
    <div class="interactive-panel">
      <p class="interactive-hint">Read the MI snippet, then tag it with the correct MIType — same call you'd make on a real MI.</p>
      <div class="card scenario-card">
        <p><strong>The MI says:</strong> ${ex.scenario}</p>
        ${!guessed ? `
          <div class="check-options">
            ${ex.options.map((o, oi) => `<button class="check-option" data-mitype-drill-guess="${oi}">${o}</button>`).join('')}
          </div>
        ` : `
          <div class="check-feedback ${correct ? 'correct' : 'incorrect'}">${correct ? '✅ Correctly tagged.' : '❌ Not quite.'} ${ex.note}</div>
          <div class="classifier-reset"><button class="btn btn-ghost" data-mitype-drill-reset="1">Try another guess</button></div>
        `}
        <div class="scenario-switcher">
          ${MITYPE_DRILL.map((_, i) => `<button class="scenario-dot ${i === s.index ? 'active' : ''}" data-mitype-drill-index="${i}"></button>`).join('')}
        </div>
      </div>
    </div>
  `;
}

// ---------- Booking Team. Allocating Creatives: The 3 Cases — tracer-row ----------

const CREATIVE_CASES = [
  { label: 'Case 1: By Dimensions', detail: 'Copy creatives from the Metabase creatives query into Case 1 of the allocation tool. Double-check campaign name and supplier first — a wrong supplier silently returns the wrong creatives.' },
  { label: 'Case 2: By Panels', detail: "Match creatives tagged to panels in the MI. Watch for two errors: repeated panels and wrong creatives. Use the MI's creative name as a subset to search the Metabase query for the full file name." },
  { label: 'Case 3: By Dimensions, Different Advertisers', detail: "Same as Case 1, but panels can share a dimension while belonging to different advertisers — never assume they're interchangeable." }
];

function interactiveCreativeCases() {
  const s = getInteractiveState('allocating-creatives-the-3-cases', { active: 0 });
  return `
    <div class="interactive-panel">
      <p class="interactive-hint">Click each case to see how it's handled.</p>
      <div class="tracer-row">
        ${CREATIVE_CASES.map((c, i) => `
          <div class="tracer-node ${i === s.active ? 'active' : ''}" data-creative-case="${i}">${c.label}</div>
        `).join('')}
      </div>
      <div class="card tracer-detail">${CREATIVE_CASES[s.active].detail}</div>
      ${renderCheckQuestion('allocating-creatives-the-3-cases', {
        question: 'In Case 2, what are the two errors to watch for?',
        options: ['Wrong dates and wrong contract IDs', 'Repeated panels and wrong creatives', 'Missing SOV and missing adLength'],
        correct: 1,
        correctFeedback: 'Right — repeated panels and wrong creatives.',
        incorrectFeedback: "It's repeated panels and wrong creatives — both come from incomplete creative names in the MI."
      })}
    </div>
  `;
}

// ---------- Booking Team. Mistakes to Avoid — interactive checklist ----------

const BOOKING_MISTAKES_CHECKLIST = [
  { task: 'Fill every mandatory field', where: 'Panel + campaign details' },
  { task: 'Confirm date format before converting', where: 'DD/MM vs MM/DD → YYYY-MM-DD' },
  { task: 'Digital panels only', where: 'BKF' },
  { task: 'Skip Bonus – STA / STA – Bonus panels', where: 'Booking type' },
  { task: 'Screen size from the IO, not the Format Checker', where: 'BKF' },
  { task: "Don't include untracked panels", where: 'Format Checker' },
  { task: 'Check the media owner per panel', where: 'Format Checker' },
  { task: 'Double-check dimension-based creative matches', where: 'Creative allocation' },
  { task: 'Escalate bursts repeating panels 2–3+ times', where: 'AM' },
  { task: 'Trim whitespace', where: 'BKF' },
  { task: 'Use the formatter tools', where: 'Dates & dimensions' }
];

function interactiveMistakesChecklist() {
  const s = getInteractiveState('mistakes-to-avoid', { checked: {} });
  const checkedCount = Object.values(s.checked).filter(Boolean).length;
  return `
    <div class="interactive-panel">
      <p class="interactive-hint">Run through this before you submit a real BKF. ${checkedCount}/${BOOKING_MISTAKES_CHECKLIST.length} checked.</p>
      <div class="card scenario-card" style="text-align:left;">
        ${BOOKING_MISTAKES_CHECKLIST.map((t, i) => {
          const done = !!s.checked[i];
          return `
            <label class="quiz-option ${done ? 'selected' : ''}" style="margin-bottom:8px; cursor:pointer;" data-mistake-check="${i}">
              <input type="checkbox" ${done ? 'checked' : ''} style="accent-color:#518CC7;" />
              <span style="${done ? 'text-decoration:line-through;color:#918F90;' : ''}">${t.task}</span>
              <span class="muted" style="margin-left:auto;">${t.where}</span>
            </label>
          `;
        }).join('')}
      </div>
      ${checkedCount === BOOKING_MISTAKES_CHECKLIST.length ? `<div class="callout" style="text-align:center;">✅ That's the full list — nice work.</div>` : ''}
    </div>
  `;
}

// ---------- Booking Team. Metabase Compliance & Escalation — decision scenarios ----------

const COMPLIANCE_SCENARIOS = [
  { situation: "The MI names a creative that isn't available on Collab.", options: ['Follow the MI exactly, book it anyway', 'Check Metabase for what the supplier actually plays'], correct: 1, explain: 'This is a listed exception — check Metabase, but still get CM approval, ask in Slack, and log it in Monday.com.' },
  { situation: "A panel's IO booking dates don't match its MI creative dates.", options: ['Book based on the IO dates', "Don't action it — flag to the AM immediately"], correct: 1, explain: 'Date mismatches are never actioned solo — flag it before anything goes live.' },
  { situation: 'The MI clearly names the creative and panel, and everything lines up with Collab.', options: ['Just follow the MI — no approval needed', 'Still route it through Metabase for approval'], correct: 0, explain: 'The Golden Rule: when the MI is clear, just follow it. Metabase approval is only for the listed exception cases.' },
  { situation: 'An Account Manager has confirmed a booking should be made based on Metabase results.', options: ['Still requires the full 3-step approval (CM approval, Slack, Monday.com)', 'AM confirmation alone is enough — skip the other steps'], correct: 0, explain: 'AM instruction is one of the valid reasons to lean on Metabase — but the 3-step approval rule still applies to every Metabase-based booking.' }
];

function interactiveComplianceScenarios() {
  const s = getInteractiveState('metabase-compliance-and-escalation', { index: 0, answer: null });
  const sc = COMPLIANCE_SCENARIOS[s.index];
  const answered = s.answer != null;
  const correct = answered && s.answer === sc.correct;
  return `
    <div class="interactive-panel">
      <p class="interactive-hint">Read the situation, then pick what you'd actually do.</p>
      <div class="card scenario-card">
        <p><strong>Situation:</strong> ${sc.situation}</p>
        <div class="scenario-actions" style="flex-direction:column; align-items:stretch;">
          ${sc.options.map((opt, oi) => `
            <button class="btn ${s.answer === oi ? 'btn-primary' : 'btn-secondary'}" style="margin-bottom:8px;" data-compliance-answer="${oi}">${opt}</button>
          `).join('')}
        </div>
        ${answered ? `<div class="scenario-verdict ${correct ? 'right' : 'wrong'}">${correct ? '✅ Correct.' : '❌ Not quite.'} ${sc.explain}</div>` : ''}
        <div class="scenario-switcher">
          ${COMPLIANCE_SCENARIOS.map((_, i) => `<button class="scenario-dot ${i === s.index ? 'active' : ''}" data-compliance-index="${i}"></button>`).join('')}
        </div>
      </div>
    </div>
  `;
}

// ---------- Shared event wiring ----------

function attachInteractiveHandlers(root) {
  root.querySelectorAll('[data-check-lesson]').forEach(btn => {
    btn.addEventListener('click', () => {
      const lessonId = btn.getAttribute('data-check-lesson');
      const s = getInteractiveState(lessonId, {});
      s.checkAnswer = parseInt(btn.getAttribute('data-check-option'), 10);
      render();
    });
  });

  root.querySelectorAll('[data-trace-step]').forEach(el => {
    el.addEventListener('click', () => {
      const s = getInteractiveState('what-is-pdooh', { step: 0 });
      s.step = parseInt(el.getAttribute('data-trace-step'), 10);
      render();
    });
  });
  root.querySelectorAll('[data-trace-nav]').forEach(el => {
    el.addEventListener('click', () => {
      const s = getInteractiveState('what-is-pdooh', { step: 0 });
      s.step = Math.max(0, Math.min(TRACE_STEPS.length - 1, s.step + (el.getAttribute('data-trace-nav') === 'next' ? 1 : -1)));
      render();
    });
  });

  root.querySelectorAll('[data-toggle="veridooh-fits"]').forEach(el => {
    el.addEventListener('click', () => {
      const s = getInteractiveState('where-veridooh-fits', { verified: false });
      s.verified = !s.verified;
      render();
    });
  });

  root.querySelectorAll('[data-subsystem]').forEach(el => {
    el.addEventListener('click', () => {
      const s = getInteractiveState('how-veridooh-works', { active: 'setup', mode: 'digital' });
      s.active = el.getAttribute('data-subsystem');
      render();
    });
  });
  root.querySelectorAll('[data-toggle="how-veridooh-mode"]').forEach(el => {
    el.addEventListener('click', () => {
      const s = getInteractiveState('how-veridooh-works', { active: 'setup', mode: 'digital' });
      s.mode = s.mode === 'digital' ? 'programmatic' : 'digital';
      render();
    });
  });

  root.querySelectorAll('[data-flip]').forEach(el => {
    el.addEventListener('click', () => {
      const s = getInteractiveState('dsp-ssp-ecosystem', { flipped: {}, urlMode: 'non-universal' });
      const i = el.getAttribute('data-flip');
      s.flipped[i] = !s.flipped[i];
      render();
    });
  });
  root.querySelectorAll('[data-urlmode]').forEach(el => {
    el.addEventListener('click', () => {
      const s = getInteractiveState('dsp-ssp-ecosystem', { flipped: {}, urlMode: 'non-universal' });
      s.urlMode = el.getAttribute('data-urlmode');
      render();
    });
  });

  root.querySelectorAll('[data-classify]').forEach(el => {
    el.addEventListener('click', () => {
      const s = getInteractiveState('impression-classification', { adt: null, excluded: null, targeted: null });
      const key = el.getAttribute('data-classify');
      const value = el.getAttribute('data-value') === 'true';
      s[key] = value;
      if (key === 'adt') { s.excluded = null; s.targeted = null; }
      if (key === 'excluded') { s.targeted = null; }
      render();
    });
  });
  root.querySelectorAll('[data-classify-reset]').forEach(el => {
    el.addEventListener('click', () => {
      state.interactiveState['impression-classification'] = { adt: null, excluded: null, targeted: null };
      render();
    });
  });

  root.querySelectorAll('[data-scenario-answer]').forEach(el => {
    el.addEventListener('click', () => {
      const s = getInteractiveState('daily-job', { scenario: 0, answer: null });
      s.answer = el.getAttribute('data-scenario-answer') === 'true';
      render();
    });
  });
  root.querySelectorAll('[data-scenario-index]').forEach(el => {
    el.addEventListener('click', () => {
      const s = getInteractiveState('daily-job', { scenario: 0, answer: null });
      s.scenario = parseInt(el.getAttribute('data-scenario-index'), 10);
      s.answer = null;
      render();
    });
  });

  root.querySelectorAll('[data-toggle="stakeholder-mode"]').forEach(el => {
    el.addEventListener('click', () => {
      const s = getInteractiveState('collaborate-stakeholders', { mode: 'single' });
      s.mode = s.mode === 'single' ? 'multi' : 'single';
      render();
    });
  });

  root.querySelectorAll('[data-case-index]').forEach(el => {
    el.addEventListener('click', () => {
      const s = getInteractiveState('case-studies', { index: 0, guess: null });
      s.index = parseInt(el.getAttribute('data-case-index'), 10);
      s.guess = null;
      render();
    });
  });
  root.querySelectorAll('[data-case-nav]').forEach(el => {
    el.addEventListener('click', () => {
      const s = getInteractiveState('case-studies', { index: 0, guess: null });
      const delta = el.getAttribute('data-case-nav') === 'next' ? 1 : -1;
      s.index = Math.max(0, Math.min(CASE_STUDIES.length - 1, s.index + delta));
      s.guess = null;
      window.scrollTo(0, 0);
      render();
    });
  });
  root.querySelectorAll('[data-case-guess]').forEach(el => {
    el.addEventListener('click', () => {
      const s = getInteractiveState('case-studies', { index: 0, guess: null });
      s.guess = parseInt(el.getAttribute('data-case-guess'), 10);
      render();
    });
  });
  root.querySelectorAll('[data-case-guess-reset]').forEach(el => {
    el.addEventListener('click', () => {
      const s = getInteractiveState('case-studies', { index: 0, guess: null });
      s.guess = null;
      render();
    });
  });

  root.querySelectorAll('[data-stage]').forEach(el => {
    el.addEventListener('click', () => {
      const s = getInteractiveState('campaign-lifecycle', { stage: 0 });
      s.stage = parseInt(el.getAttribute('data-stage'), 10);
      render();
    });
  });

  root.querySelectorAll('[data-se-check]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const s = getInteractiveState('se-daily-tasks', { checked: {} });
      const idx = el.getAttribute('data-se-check');
      s.checked[idx] = !s.checked[idx];
      render();
    });
  });

  root.querySelectorAll('[data-offcode]').forEach(el => {
    el.addEventListener('click', () => {
      const s = getInteractiveState('se-campaign-review', { code: null });
      s.code = parseInt(el.getAttribute('data-offcode'), 10);
      render();
    });
  });

  root.querySelectorAll('[data-se-setup-step]').forEach(el => {
    el.addEventListener('click', () => {
      const s = getInteractiveState('se-campaign-setup', { step: 0 });
      s.step = parseInt(el.getAttribute('data-se-setup-step'), 10);
      render();
    });
  });
  root.querySelectorAll('[data-se-setup-nav]').forEach(el => {
    el.addEventListener('click', () => {
      const s = getInteractiveState('se-campaign-setup', { step: 0 });
      const delta = el.getAttribute('data-se-setup-nav') === 'next' ? 1 : -1;
      s.step = Math.max(0, Math.min(SE_SETUP_STEPS.length - 1, s.step + delta));
      window.scrollTo(0, 0);
      render();
    });
  });

  root.querySelectorAll('[data-se-fix-index]').forEach(el => {
    el.addEventListener('click', () => {
      const s = getInteractiveState('se-fixes-reference', { index: 0 });
      s.index = parseInt(el.getAttribute('data-se-fix-index'), 10);
      render();
    });
  });

  // ---- Booking. What Is a Booking? ----
  root.querySelectorAll('[data-booking-doc-flip]').forEach(el => {
    el.addEventListener('click', () => {
      const s = getInteractiveState('what-is-a-booking', { flipped: {} });
      const i = el.getAttribute('data-booking-doc-flip');
      s.flipped[i] = !s.flipped[i];
      render();
    });
  });

  // ---- Booking. The Booking Lifecycle ----
  root.querySelectorAll('[data-lifecycle-stage]').forEach(el => {
    el.addEventListener('click', () => {
      const s = getInteractiveState('the-booking-lifecycle', { stage: 0 });
      s.stage = parseInt(el.getAttribute('data-lifecycle-stage'), 10);
      render();
    });
  });

  // ---- Booking. Anatomy of a Booking Form ----
  root.querySelectorAll('[data-bkf-field-flip]').forEach(el => {
    el.addEventListener('click', () => {
      const s = getInteractiveState('anatomy-of-a-booking-form', { flipped: {} });
      const i = el.getAttribute('data-bkf-field-flip');
      s.flipped[i] = !s.flipped[i];
      render();
    });
  });

  // ---- Booking. How Creatives Get Allocated (teaser) ----
  root.querySelectorAll('[data-mitype-teaser-guess]').forEach(el => {
    el.addEventListener('click', () => {
      const s = getInteractiveState('how-creatives-get-allocated', { index: 0, guess: null });
      s.guess = parseInt(el.getAttribute('data-mitype-teaser-guess'), 10);
      render();
    });
  });
  root.querySelectorAll('[data-mitype-teaser-reset]').forEach(el => {
    el.addEventListener('click', () => {
      const s = getInteractiveState('how-creatives-get-allocated', { index: 0, guess: null });
      s.guess = null;
      render();
    });
  });
  root.querySelectorAll('[data-mitype-teaser-index]').forEach(el => {
    el.addEventListener('click', () => {
      const s = getInteractiveState('how-creatives-get-allocated', { index: 0, guess: null });
      s.index = parseInt(el.getAttribute('data-mitype-teaser-index'), 10);
      s.guess = null;
      render();
    });
  });

  // ---- Booking Team. Filling a Booking Form ----
  root.querySelectorAll('[data-bkf-steps-step]').forEach(el => {
    el.addEventListener('click', () => {
      const s = getInteractiveState('filling-a-booking-form', { step: 0 });
      s.step = parseInt(el.getAttribute('data-bkf-steps-step'), 10);
      render();
    });
  });
  root.querySelectorAll('[data-bkf-steps-nav]').forEach(el => {
    el.addEventListener('click', () => {
      const s = getInteractiveState('filling-a-booking-form', { step: 0 });
      const delta = el.getAttribute('data-bkf-steps-nav') === 'next' ? 1 : -1;
      s.step = Math.max(0, Math.min(BKF_FILLING_STEPS.length - 1, s.step + delta));
      window.scrollTo(0, 0);
      render();
    });
  });

  // ---- Booking Team. MIType Reference (drill) ----
  root.querySelectorAll('[data-mitype-drill-guess]').forEach(el => {
    el.addEventListener('click', () => {
      const s = getInteractiveState('mitype-full-reference', { index: 0, guess: null });
      s.guess = parseInt(el.getAttribute('data-mitype-drill-guess'), 10);
      render();
    });
  });
  root.querySelectorAll('[data-mitype-drill-reset]').forEach(el => {
    el.addEventListener('click', () => {
      const s = getInteractiveState('mitype-full-reference', { index: 0, guess: null });
      s.guess = null;
      render();
    });
  });
  root.querySelectorAll('[data-mitype-drill-index]').forEach(el => {
    el.addEventListener('click', () => {
      const s = getInteractiveState('mitype-full-reference', { index: 0, guess: null });
      s.index = parseInt(el.getAttribute('data-mitype-drill-index'), 10);
      s.guess = null;
      render();
    });
  });

  // ---- Booking Team. Allocating Creatives: The 3 Cases ----
  root.querySelectorAll('[data-creative-case]').forEach(el => {
    el.addEventListener('click', () => {
      const s = getInteractiveState('allocating-creatives-the-3-cases', { active: 0 });
      s.active = parseInt(el.getAttribute('data-creative-case'), 10);
      render();
    });
  });

  // ---- Booking Team. Mistakes to Avoid ----
  root.querySelectorAll('[data-mistake-check]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const s = getInteractiveState('mistakes-to-avoid', { checked: {} });
      const idx = el.getAttribute('data-mistake-check');
      s.checked[idx] = !s.checked[idx];
      render();
    });
  });

  // ---- Booking Team. Metabase Compliance & Escalation ----
  root.querySelectorAll('[data-compliance-answer]').forEach(el => {
    el.addEventListener('click', () => {
      const s = getInteractiveState('metabase-compliance-and-escalation', { index: 0, answer: null });
      s.answer = parseInt(el.getAttribute('data-compliance-answer'), 10);
      render();
    });
  });
  root.querySelectorAll('[data-compliance-index]').forEach(el => {
    el.addEventListener('click', () => {
      const s = getInteractiveState('metabase-compliance-and-escalation', { index: 0, answer: null });
      s.index = parseInt(el.getAttribute('data-compliance-index'), 10);
      s.answer = null;
      render();
    });
  });
}
