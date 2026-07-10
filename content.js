// Veridooh Onboarding — content data
// Sourced and adapted from Veridooh's internal Notion workspace (pDOOH Onboarding Hub,
// Engineering & Support Eng teamspaces), July 2026.

const MODULES = [
  {
    id: 'programmatic',
    title: 'Programmatic (pDOOH)',
    icon: 'radio-tower',
    status: 'available',
    tagline: 'Core pDOOH concepts, plus operational playbooks for each team working on programmatic.',
    color: '#880E4F',
    chipBg: '#FCE4EC'
  },
  {
    id: 'overview',
    title: 'Veridooh & Digital Campaigns 101',
    icon: 'building-2',
    status: 'coming-soon',
    tagline: 'General overview of Veridooh, Digital Out-of-Home, and how digital campaigns work.',
    color: '#006064',
    chipBg: '#E0F7FA'
  },
  {
    id: 'booking',
    title: 'Booking',
    icon: 'calendar-check',
    status: 'available',
    tagline: 'Core booking concepts, plus the operational playbook for the bookings team.',
    color: '#4A148C',
    chipBg: '#F3E5F5'
  },
  {
    id: 'reviewing',
    title: 'Reviewing',
    icon: 'search-check',
    status: 'coming-soon',
    tagline: 'Reviewing live campaigns and health checks.',
    color: '#33691E',
    chipBg: '#F1F8E9'
  },
  {
    id: 'support-engineer',
    title: 'Support Engineer',
    icon: 'wrench',
    status: 'coming-soon',
    tagline: 'General SE tooling and escalation paths across all products. (For pDOOH-specific SE tasks, see the Support Engineer playbook inside Programmatic.)',
    color: '#E65100',
    chipBg: '#FFF3E0'
  }
];

const LESSONS = [
  {
    id: 'what-is-pdooh',
    title: 'What is pDOOH?',
    icon: 'radio-tower',
    summary: 'The big picture — what it is and why it exists.',
    body: `
      <p class="lead">No jargon, no prior knowledge needed. Start with what you already know — billboards.</p>

      <h3>🪧 OOH — the real world</h3>
      <p>You've seen big screens on the side of roads, in shopping centres, at airports and train stations.
      Those are <strong>OOH ads</strong> — <strong>Out-Of-Home</strong> advertising. It just means: ads you see
      when you're out of your home, in the real world.</p>

      <h3>📺 DOOH — when billboards go digital</h3>
      <p>Some of those screens are <strong>digital</strong> — they can change what they show, just like a TV.
      Those are <strong>DOOH: Digital Out-Of-Home</strong>. Instead of a static poster stuck for weeks, a DOOH
      screen can show a coffee ad in the morning and a beer ad at night.</p>

      <h3>🤖 Programmatic — when software takes over</h3>
      <div class="compare-row">
        <div class="compare-card">
          <div class="compare-label">🛒 The old way (Digital)</div>
          <p>A brand calls a media company and says "I want my ad on that screen for 4 weeks." They negotiate,
          sign contracts, and the ad runs. Very manual, very slow.</p>
        </div>
        <div class="compare-card">
          <div class="compare-label">🤖 The programmatic way</div>
          <p>A brand uses software to say "show my ad when it's raining, near a coffee shop, between 7–9am,
          on busy streets." The system automatically finds matching screens and buys the space in real time —
          no phone calls, no contracts.</p>
        </div>
      </div>
      <p>That's <strong>Programmatic DOOH (pDOOH)</strong>: software buys and delivers ads on digital screens
      automatically, using rules and live data.</p>

      <h3>🔁 How the ecosystem works</h3>
      <div class="flow-diagram">
        <div class="flow-step">Brand<span>wants to advertise</span></div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">DSP<span>the buyer's software — sets the rules: where, when, who, how much</span></div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">Ad Exchange<span>the marketplace — screens auctioned off in real time, milliseconds</span></div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">SSP<span>the seller's software — screen owners sell their available slots</span></div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">Screen<span>the actual digital panel — the ad plays</span></div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step flow-step--highlight">✅ Veridooh<span>independently captures what actually happened</span></div>
      </div>
      <p class="callout">💡 Think of it like eBay for ad slots — except the auction happens in the time it takes to blink.</p>

      <h3>✅ Three things to remember</h3>
      <ol>
        <li><strong>OOH</strong> = real-world ads (billboards, screens in public)</li>
        <li><strong>DOOH</strong> = digital screens that can change content</li>
        <li><strong>pDOOH</strong> = those screens bought and managed automatically by software, using data</li>
      </ol>
    `
  },
  {
    id: 'where-veridooh-fits',
    title: 'Where Veridooh Fits',
    icon: 'shield-check',
    summary: "What we actually do, and how we independently verify delivery.",
    body: `
      <p class="lead">You now know what pDOOH is. So where does Veridooh come in?</p>

      <h3>❓ The problem Veridooh solves</h3>
      <p>When a brand pays for 1,000,000 impressions on digital screens, how do they actually know their ad ran?
      The screen owner sends a report — but that's the <em>seller</em> marking their own homework. There's no
      independent check.</p>
      <p class="callout">💡 That would be like a restaurant doing their own health inspection and handing you the certificate.</p>

      <h3>🟢 What Veridooh does</h3>
      <p><strong>Veridooh is an independent verification company.</strong> We sit completely outside the buying
      and selling process, and we independently confirm: did the ad actually run, on which screens, for how long,
      and how many times? We don't take the media owner's word for it — we collect the data ourselves.</p>
      <p>This is why clients like Google, Amazon, McDonald's and Unilever use us — they want unbiased proof.</p>

      <h3>🧠 How we do it</h3>
      <div class="compare-row">
        <div class="compare-card">
          <div class="compare-label">For digital DOOH — SmartCreative™</div>
          <p>We add an invisible tracker to the ad creative itself. Every time the ad plays on a digital screen,
          our tracker captures which screen, what time, and how long it played — independently of the media owner.</p>
        </div>
        <div class="compare-card">
          <div class="compare-label">For programmatic DOOH — Programmatic URLs</div>
          <p>For pDOOH campaigns we use programmatic tracking URLs. When the ad is served on a screen, the URL is
          triggered and Veridooh captures that event — same principle as SmartCreative, independent from what the
          DSP or media owner reports.</p>
        </div>
      </div>

      <h3>📊 What we measure</h3>
      <table class="content-table">
        <tr><td><strong>Plays</strong></td><td>How many times the ad actually played</td></tr>
        <tr><td><strong>Impressions</strong></td><td>How many people were estimated to have seen it</td></tr>
        <tr><td><strong>Share of Time</strong></td><td>What % of booked time the ad actually ran</td></tr>
        <tr><td><strong>Exposure Time</strong></td><td>Total time the ad was live</td></tr>
        <tr><td><strong>Panel location</strong></td><td>Exactly which screens ran it</td></tr>
        <tr><td><strong>Environment</strong></td><td>Type of location — roadside, mall, transit, etc.</td></tr>
      </table>

      <p class="callout">🧱 The one-sentence version: Veridooh makes sure brands actually get what they paid for —
      independently, in near real time, for every single screen.</p>
    `
  },
  {
    id: 'how-veridooh-works',
    title: "How Veridooh's Platform Works",
    icon: 'network',
    summary: 'The 3-subsystem model behind every campaign — Digital and Programmatic.',
    body: `
      <p class="lead">Zooming out from pDOOH specifically: this is how the whole Veridooh platform is put together,
      for both Digital and Programmatic campaigns.</p>

      <h3>The core verification problem</h3>
      <p>For every campaign, Veridooh compares two things:</p>
      <ol>
        <li><strong>Expectation</strong> — what was booked (panels, plays, impression goals, targeting conditions)</li>
        <li><strong>Actual delivery</strong> — what actually played on the panels</li>
      </ol>
      <p>The dashboard clients see is just the visualisation of "expectation vs. actual delivery," broken down
      many ways. Everything else in the platform exists to produce the data that comparison needs.</p>

      <h3>Three subsystems, in order</h3>
      <div class="flow-diagram flow-diagram--horizontal">
        <div class="flow-step">① Campaign Setup<span>Produces the inputs everything else needs: creatives, panels, bookings, target conditions</span></div>
        <div class="flow-arrow">→</div>
        <div class="flow-step">② Data Pipeline<span>Turns raw playback signals from panels/SSPs into pre-aggregated daily reports</span></div>
        <div class="flow-arrow">→</div>
        <div class="flow-step">③ API + Dashboard<span>Serves those reports to advertisers/agencies via the Dashboard and exception reports</span></div>
      </div>

      <h3>Digital vs. Programmatic — the deep difference is <em>when planning happens</em></h3>
      <div class="compare-row">
        <div class="compare-card">
          <div class="compare-label">Digital</div>
          <p>Booking is <strong>pre-negotiated</strong> with media owners before the campaign starts. Predictable:
          this campaign will run on these panels, these dates. Deals directly with media owners.</p>
        </div>
        <div class="compare-card">
          <div class="compare-label">Programmatic</div>
          <p>Booking is expressed as <strong>preferences and targeting conditions</strong>. The actual match between
          an ad and a panel happens at <strong>runtime, via bidding</strong>, when a panel announces a free slot.
          Goes through DSPs (demand-side) and SSPs (supply-side, representing media owners).</p>
        </div>
      </div>

      <h3>① Campaign Setup, in brief</h3>
      <p>Both lines run the same three workflows, with different inputs and people involved:</p>
      <ul>
        <li><strong>Tagging</strong> — Digital wraps the raw creative file with a SmartCreative wrapper; Programmatic
        generates a per-creative tracking URL from a DSP-specific template.</li>
        <li><strong>Sitelist ingestion</strong> — populates the panel/device database. Digital sitelists come from
        media owners; programmatic sitelists come from SSPs.</li>
        <li><strong>Booking ingestion</strong> — produces the "expected" side of the comparison. Digital bookings come
        from IO forms + material instructions, consolidated by the ops team. Programmatic bookings come from agency
        targeting specs, interpreted by engineers/SEs and injected via an API into the booking + targeting tables.</li>
      </ul>

      <h3>② Data Pipeline, in brief</h3>
      <p>Both lines share the same shape: <strong>Tracking Listener → Persistence → Device Linking → Report Builder
      → Daily Report</strong>. The Tracking Listener is the single critical-path gateway for every signal — it
      cannot be down, or data is lost forever. Device Linking maps each raw signal to the correct physical panel;
      without it, signals can't be attributed to anything. Report Builder isn't incremental — it rebuilds each
      day's numbers by comparing expectation against linked delivery.</p>

      <h3>③ API + Dashboard, in brief</h3>
      <p>Mostly a presentation layer: filter the daily report rows (by campaign, date, supplier, market, creative...)
      then aggregate them (sum, average, or percentage, depending on the metric). The same underlying data also
      feeds exception reports and post-campaign reports — the dashboard isn't the only output.</p>
    `
  },
  {
    id: 'dsp-ssp-ecosystem',
    title: 'The DSP/SSP Ecosystem',
    icon: 'shuffle',
    summary: 'Who the players are, and how tracking URLs get from a DSP to a screen.',
    body: `
      <p class="lead">Every pDOOH campaign involves the same set of players. Knowing who does what makes everything
      else — troubleshooting, escalation, campaign setup — much easier to follow.</p>

      <h3>Key players</h3>
      <table class="content-table">
        <tr><td><strong>DSP</strong><br><span class="muted">Demand-Side Platform</span></td>
            <td>Buyer side. Media agencies use DSPs (e.g. Vistar, Hivestack, Nexxen, The Trade Desk) to set up
            campaigns, bid for screen time, and fire tracking signals.</td></tr>
        <tr><td><strong>DMP</strong><br><span class="muted">Data Management Platform</span></td>
            <td>Sits alongside the DSP on the buy side — supplies the audience/behavioural data (location, demographic,
            behavioural) that the DSP uses to decide who and where to target.</td></tr>
        <tr><td><strong>SSP</strong><br><span class="muted">Supply-Side Platform / Exchange</span></td>
            <td>Seller side. Lists available ad slots from media owners. Acts as the auctioneer.</td></tr>
        <tr><td><strong>Media Owner</strong></td>
            <td>Owns the physical digital screens. Connects to SSPs. Veridooh works directly with DSPs and SSPs —
            not media owners.</td></tr>
        <tr><td><strong>Veridooh</strong></td>
            <td>Independently verifies every impression, sitting outside the buy/sell relationship.</td></tr>
      </table>

      <h3>Four ways a tracking URL gets fired</h3>
      <table class="content-table">
        <tr><td><strong>DSP Non-Universal</strong></td>
            <td>Veridooh implements a DSP-level URL that's SSP-agnostic — the DSP fires it directly, tracked at
            creative/campaign level. <span class="muted">e.g. Vistar, Hivestack</span></td></tr>
        <tr><td><strong>SSP Non-Universal</strong></td>
            <td>The DSP hands Veridooh's URL to the SSP, which fires it — dependent on the specific DSP×SSP pairing,
            so each new pairing needs its own integration. <span class="muted">e.g. The Trade Desk, Nexxen, Yahoo, Hawk</span></td></tr>
        <tr><td><strong>DSP Universal</strong></td>
            <td>A single URL registered on the DSP's side that tracks <em>every</em> campaign from that DSP — no
            per-campaign setup needed. <span class="muted">e.g. Sage & Archer, Outmoove, Flowcity, Pladway</span></td></tr>
        <tr><td><strong>MyAdBooker</strong></td>
            <td>Not a DSP or SSP at all — Netherlands-specific, the tracking URL fires directly from the
            screen/player itself.</td></tr>
      </table>
      <p class="callout">💡 The exact roster of live DSPs/SSPs and their integration status changes often (Hivestack's
      API integration for agencies just went live) — check with your lead or the current status page rather than
      memorising a list here.</p>

      <h3>Universal vs. Non-Universal, in plain terms</h3>
      <p>The "Non-Universal" types (DSP and SSP) need a <strong>fresh tracking URL every single campaign</strong> —
      Veridooh generates a new one, and it has to be loaded into that specific campaign or creative before it goes
      live. Miss that step, and the campaign runs with no tracking at all.</p>
      <p><strong>Universal is different: the setup happens once per DSP, not once per campaign.</strong> Veridooh
      generates a single tracking URL for that DSP, and once it's registered on the DSP's side, it automatically
      applies to <em>every campaign that DSP runs from then on</em> — Veridooh doesn't have to touch anything for
      each new campaign. That's the entire point of calling it "universal."</p>
      <p>In practice there are two flavours of how that one-time registration actually happens:</p>
      <ul>
        <li><strong>Traditional Universal</strong> (e.g. Sage & Archer, Outmoove, Flowcity) — Veridooh's SE sends a
        one-time template email to the DSP partner, confirming that tracking will now apply to all campaigns going
        forward. The DSP then has to implement it on their side. This is a manual, DSP-dependent step — an
        auto-notification system for this is on the roadmap, but doesn't exist yet.</li>
        <li><strong>Self-service Universal</strong> (e.g. Pladway) — the agency or client enables tracking themselves,
        directly inside the DSP's own interface. No email hand-off needed at all.</li>
      </ul>
      <p class="callout">💡 This distinction matters at go-live too: for a <strong>traditional</strong> Universal DSP,
      the client has to contact the DSP directly to get tracking turned on. For a <strong>self-service</strong> one
      like Pladway, the client just does it themselves in the DSP's UI — nobody needs to email anyone.</p>
      <p>Where does MyAdBooker fit in? Conceptually it's similar to Universal — no per-campaign setup on Veridooh's
      side — but mechanically it's not: the URL fires from the physical screen/player, not from a DSP at all, which
      is why it gets its own row rather than being folded into "Universal."</p>

      <h3>The macro system</h3>
      <p>Every DSP names its URL parameters differently. Veridooh translates between "our" canonical field names
      (impression multiplier, display start time, panel ID, etc.) and each DSP's own naming, per DSP and per
      version. This translation layer is what lets the rest of the pipeline treat every DSP's signals the same way.</p>

      <h3>A real example: Qantas on pDOOH</h3>
      <p>Qantas (the advertiser) briefs OMD (their media agency), who activate the campaign via Vistar or The Trade
      Desk (DSP) — setting bid rules, audience, and targeting. That DSP bids in real time against VIOOH (SSP), which
      connects to media owners like JCD or oOh! — who own the screens and actually serve the ad. Veridooh sits
      alongside the whole chain, with a tracking URL inserted into the DSP, independently capturing what happened.</p>
      <p class="callout">📊 AU pDOOH context (IAB Australia / OMA, 2025): ~44% of AU campaigns now use DSPs
      (+25pp year-on-year), average pDOOH investment is up 28% YoY, 83% of agencies use pDOOH for brand awareness,
      and The Trade Desk + Vistar are the two leading AU DSPs.</p>
    `
  },
  {
    id: 'impression-classification',
    title: 'Impression Classification',
    icon: 'layers',
    summary: 'Plays, impressions, and the valid/on-target hierarchy that decides if a campaign is "healthy".',
    body: `
      <p class="lead">This is the core logic that everything in pDOOH verification is built around.</p>

      <h3>Play vs. impression</h3>
      <p>A <strong>play</strong> = the ad file ran on a screen once. An <strong>impression</strong> is the
      <em>weighted value</em> of that play — an estimate of how many people actually saw it.</p>
      <p class="callout">💡 Programmatic impressions are <strong>not</strong> the same as digital impressions.
      Digital: impressions = number of creative plays. Programmatic: <code>impressions = SUM(impression multiplier × play)</code>.
      The SSP assigns each ad-spot a "black-box" impression multiplier based on estimated foot traffic — a mall
      panel at noon on a weekend scores much higher than the same panel at 8pm on a Tuesday, or a fuel station at 1am.</p>

      <h3>Step 1 — Valid or Invalid</h3>
      <p>Every play is checked against the panel's <strong>Active Display Time (ADT)</strong> — the hours it's
      actually meant to be showing ads.</p>
      <ul>
        <li><strong>Valid</strong> — played during ADT. Goes on to step 2.</li>
        <li><strong>Invalid</strong> — played outside ADT. Treated as effectively fraudulent — a strong signal
        against the SSP or media owner. (If Veridooh has no ADT data for a panel, everything is assumed valid.)</li>
      </ul>
      <p class="callout">💡 Valid/invalid mainly holds the <strong>SSP and media owner</strong> accountable — they
      shouldn't be sending or allowing plays outside a panel's active hours.</p>

      <h3>Step 2 — On-target, Off-target, or Exclusion Violation</h3>
      <p>For every <em>valid</em> impression, Veridooh checks it against the client's <strong>target conditions</strong>
      — rules like "shopping centres in Sydney, Monday to Friday" or "around schools, 3–5pm on weekdays."</p>
      <ul>
        <li><strong>On-target</strong> — satisfies the target conditions.</li>
        <li><strong>Off-target</strong> — valid, but fails one or more target conditions.</li>
        <li><strong>Exclusion violation</strong> — played somewhere explicitly excluded. The most serious
        classification — it takes precedence over the others.</li>
      </ul>
      <p>If a campaign has no target conditions at all, every valid impression is on-target by default.</p>
      <p class="callout">💡 On/off-target and exclusion violation mainly hold the <strong>DSP</strong> accountable
      — they're the ones deciding which bids to place and where the ad actually runs.</p>

      <h3>The main KPI</h3>
      <p class="callout">Campaigns are booked against an impression goal, optionally restricted by target
      conditions. The ideal outcome: <code>On-target Impressions = Total Impressions = Impression Goal</code>.</p>

      <h3>Why a play can look "good" but still miss</h3>
      <p>A play can satisfy the creative and panel conditions perfectly, and still be off-target purely because of
      a time mismatch (or vice versa). When diagnosing a real off-target campaign, the team checks each dimension
      — creative, time, panel — independently before concluding which one is the actual root cause.</p>

      <h3>Not all target conditions are equally easy to set up</h3>
      <p>Veridooh groups target conditions into three tiers, and support differs by market:</p>
      <table class="content-table">
        <tr><td><strong>Basic</strong><br><span class="muted">Time targeting (dayparting)</span></td>
            <td>Fully supported, AU and International — this is the easiest condition type to implement.</td></tr>
        <tr><td><strong>Intermediate</strong><br><span class="muted">Creative targeting + Level 1 location (panel targeting)</span></td>
            <td>Fully supported, AU and International. Panel targeting works off a targeted site list; format
            targeting only works if a master site list with formats exists.</td></tr>
        <tr><td><strong>Advanced</strong><br><span class="muted">Level 2 location (proximity — POI, zip codes, cities)</span></td>
            <td>AU: supported, but only with <strong>Jeremy's approval</strong>. International: only supported by
            the <strong>dev-pdooh team</strong> — this tier needs real engineering work, not a self-serve setup.</td></tr>
      </table>
      <p class="callout">💡 The tier of targeting a client asks for doesn't just change how much setup effort is
      needed — for Advanced conditions, it also changes <em>who has to approve it</em> before the campaign can go live.</p>
    `
  },
  {
    id: 'daily-job',
    title: 'Your Daily Job',
    icon: 'clipboard-check',
    summary: 'What you actually do day to day, and the escalation rule that matters most.',
    body: `
      <p class="lead">Everything before this lesson was context. This is the job.</p>

      <h3>⏰ The daily routine</h3>
      <p>Your core job is to check that active campaigns are delivering as planned.</p>
      <ol>
        <li><strong>Open the dashboard</strong> and navigate to active pDOOH campaigns.</li>
        <li><strong>Check delivery</strong> for each campaign — Plays vs. expected, Impressions vs. target,
        Share of Time (flag anything below ~80%), and panel status (any screens down or not reporting?).</li>
        <li><strong>Flag anything unusual</strong> — see the escalation rule below.</li>
        <li><strong>Log what you checked</strong>, and any flags you raised.</li>
      </ol>

      <h3>📅 Recurring checkpoints</h3>
      <table class="content-table">
        <tr><td><strong>9:00am</strong> — Board check</td><td>Quick daily scan of all active campaigns. Come
        ready with a look at overnight delivery data and anything that looks off.</td></tr>
        <tr><td><strong>3:30pm</strong> — VIP checks</td><td>High-priority campaigns get extra attention. Pull the
        latest delivery data beforehand, note changes from yesterday, and come with at least one observation
        (even "all on track" counts).</td></tr>
      </table>

      <h3>🚨 The escalation rule</h3>
      <p class="callout" style="border-left-color:#B00020;">Simple: <strong>when in doubt, flag it.</strong> There's
      no such thing as a dumb flag — it's always better to raise a false alarm than to miss a real delivery issue
      on a client's campaign.</p>
      <p>Flag immediately (don't wait for the next meeting) if you see:</p>
      <ul>
        <li>Underdelivery of <strong>more than 10%</strong> vs. plan</li>
        <li>Any panel <strong>down or not reporting</strong></li>
        <li>Impressions <strong>significantly below</strong> the daily expected pace</li>
        <li>Share of Time <strong>below 70%</strong></li>
      </ul>

      <h3>❓ FAQ</h3>
      <p><strong>Do I need to know how to buy ads programmatically?</strong> No — your focus is monitoring and
      verification, confirming campaigns that are already live are delivering correctly.</p>
      <p><strong>What's the difference between a play and an impression again?</strong> A play = the ad file ran
      once. An impression = one person saw it. One play on a busy street can be worth many impressions.</p>
      <p><strong>Why does independent verification matter?</strong> Because the media owner who sold the ad space
      also reports on how it delivered. Veridooh's data comes from our own tracker — separate and unbiased.</p>

      <h3>📍 Where the day-to-day actually happens</h3>
      <p>Campaigns get tracked on the <strong>Monday.com board</strong> from intake through to close-out — that
      board is the single place to see where every campaign currently sits. For new campaigns, the <strong>PH
      team</strong> (Philippines ops) helps consolidate incoming booking information before it lands with SE/Eng.</p>
      <p>Daily status updates get posted to two Slack channels, split by region:</p>
      <table class="content-table">
        <tr><td><code>#au-pdooh-campaigns</code></td><td>Daily updates for Australian campaigns.</td></tr>
        <tr><td><code>#intl-pdooh-campaigns</code></td><td>Daily updates for international campaigns — also where
        you'd escalate anything that needs wider visibility.</td></tr>
      </table>
    `
  },
  {
    id: 'campaign-lifecycle',
    title: 'The Campaign Lifecycle',
    icon: 'git-branch',
    summary: 'From intake to close-out — the operational flow behind every campaign.',
    body: `
      <p class="lead">Zooming into the day-to-day operational flow a pDOOH campaign moves through, from the
      moment it's booked to the moment it's closed out.</p>

      <h3>1. Intake</h3>
      <p>New campaigns arrive via the Monday.com board. Before setup can begin, three things need to be confirmed:
      the <strong>impression goal</strong>, the <strong>start/end dates</strong>, and any <strong>target
      conditions</strong> (day-parting, panel rules, creative IDs). Incoming campaigns typically sort into a
      handful of triage buckets — e.g. brand new, missing creatives and info, missing creatives only, or tagged
      but still missing conditions.</p>

      <h3>2. Setup</h3>
      <p>Target conditions get categorised into tiers — Basic (time), Intermediate (creative, panel), and Advanced
      (proximity/POI) — covered in detail in the Impression Classification lesson. Standard conditions are handled
      directly; Advanced ones get escalated, and for International campaigns are dev-team-only. Once conditions are
      applied and confirmed, the campaign moves to Active/Ongoing.</p>
      <p class="callout">💡 Two easy-to-miss setup rules: for <strong>Hivestack</strong>, always select tracking
      <strong>per play, not per impression</strong> — Veridooh advises against per-impression tracking for every
      agency. And as a general rule, <strong>one tracking URL = one unique creative</strong> on the verification
      platform, whether the client wants to track by creative or by ad messaging.</p>

      <h3>3. Live monitoring</h3>
      <p>This is the daily-job lesson in action, with concrete thresholds to watch for:</p>
      <table class="content-table">
        <tr><td>Tracked vs. expected impressions</td><td>Unhealthy below ~52%</td></tr>
        <tr><td>Invalid impressions</td><td>Unhealthy above ~18–20%</td></tr>
        <tr><td>On-target impressions</td><td>Unhealthy below 80% of pacing</td></tr>
      </table>
      <p>Campaigns that trip these thresholds get moved into an "unhealthy" group for closer attention and — if
      they don't recover — get flagged to the account manager.</p>

      <h3>4. Exception reporting</h3>
      <p>Certain agencies receive a recurring exception report (typically weekly) listing campaigns with
      significant off-target delivery, condition mismatches, unconfirmed panels, or generic/incomplete address
      data. There's a defined eligibility check run before a campaign is included, so the report only surfaces
      genuine, actionable issues rather than noise.</p>

      <h3>5. Close-out</h3>
      <p>When a campaign's end date passes, it gets moved to Finished. Any campaign that was flagged unhealthy
      near the end of its run gets a final note to the account manager before the board is closed out.</p>
    `
  },
  {
    id: 'collaborate-stakeholders',
    title: 'Collaborate: Single vs. Multi-Stakeholder',
    icon: 'users',
    summary: 'Not every campaign is managed the same way — it depends on who\'s involved on the agency side.',
    body: `
      <p class="lead">Collaborate is the platform clients and agencies use to manage their campaigns. For pDOOH,
      it supports two different management models — and which one applies changes who does what.</p>

      <h3>The default: Single-stakeholder</h3>
      <p>Every user is Single-stakeholder ("self-tagger") by default. One agency, linked to the advertiser, handles
      everything themselves: uploading creatives, generating tracking URLs, and loading them into their own DSP.
      There's no separate Creative Uploader or DSP platform user role — it's all the same team.</p>

      <h3>The alternative: Multi-stakeholder</h3>
      <p>Some agencies get Multi-stakeholder access — and once granted, it applies across <em>all</em> of that
      agency's campaigns, not just one. This model splits the work across distinct roles:</p>
      <table class="content-table">
        <tr><td><strong>Campaign manager</strong></td><td>Owns the campaign setup — dates, targeting, overall coordination.</td></tr>
        <tr><td><strong>Creative Uploader</strong></td><td>Responsible for uploading the creative assets.</td></tr>
        <tr><td><strong>DSP platform user</strong></td><td>Downloads the generated tracking URLs and loads them into the DSP.</td></tr>
      </table>
      <p>Because the work is split across people, Multi-stakeholder also unlocks features Single-stakeholder doesn't
      need: creative instructions, a burst status flow (<em>Creatives required → Dispatched → Downloaded</em>,
      vs. Single-stakeholder's simpler <em>Creatives required → Generating URLs → URLs generated</em>), and
      visibility into tracking URLs per creative.</p>

      <p class="callout">💡 Why this matters day-to-day: if you're troubleshooting a stuck campaign, checking which
      model it's on tells you who's actually responsible for the step that's stalled — the agency's Creative
      Uploader and its DSP platform user might be two completely different people.</p>
    `
  },
  {
    id: 'case-studies',
    title: 'Real Case Studies',
    icon: 'file-search',
    summary: 'Six real Veridooh incidents — what happened, how we found out, and how we fixed it.',
    body: `
      <p class="lead">Everything so far has been the theory. These are six real things that actually went wrong at
      Veridooh, pulled from real postmortems and Slack investigations — and how the team worked through each one.
      Use the Interactive Summary tab to try diagnosing each one yourself before reading the answer.</p>

      <h3>1. The Vistar impression over-count (2025-07-23 to 2025-10-10)</h3>
      <p><strong>📋 What happened:</strong> Vistar (a DSP/SSP partner) shipped a regression that called Veridooh's
      tracking pixel more times than it should have, inflating impression counts on ~45 campaigns globally. The bug
      ran live for about 2.5 months before anyone caught it.</p>
      <p><strong>🔍 How we found out:</strong> Sales flagged a high-priority campaign that "looked off." Engineers
      checked Veridooh's own tracking and reporting logic first and confirmed it was accurate — so the anomaly had
      to be coming from upstream, from Vistar itself. Support engineers then spotted the same inflated pattern
      across other Vistar campaigns and escalated directly to Vistar.</p>
      <p><strong>🔧 How we fixed it:</strong> Vistar confirmed the regression and shipped a hotfix, so new data was
      correct going forward. The 2.5 months of historical data stayed overstated — Veridooh negotiated with Vistar
      for proof-of-play reports to justify the numbers to agencies rather than issuing refunds.</p>
      <p class="callout">💡 Lesson: there was no systematic anomaly-detection over DSP/SSP-supplied signals — only
      manual health checks. A partner sending too <em>much</em> data is just as real a risk as sending too little.</p>

      <h3>2. The TTD macro-version collision (2026-05-18)</h3>
      <p><strong>📋 What happened:</strong> An unrelated schema change for a new feature accidentally inserted a
      second "active" row into a macro-version table for The Trade Desk × Australia. A hidden assumption deep in
      the tagging service — that there's always exactly one active row — meant every TTD Australia creative dispatch
      started failing outright.</p>
      <p><strong>🔍 How we found out:</strong> A support engineer noticed failed creative dispatches about 6 hours
      after the change landed (no automated monitoring caught it sooner) and posted in the team's Slack channel. An
      engineer traced it down to the SQL level and found the duplicate active row.</p>
      <p><strong>🔧 How we fixed it:</strong> An immediate hotfix landed ~8 minutes after escalation — the extra row
      was deactivated. The permanent fix decoupled the new feature into its own dedicated table, so it no longer
      shares a fragile "only one active row" assumption with anything else.</p>
      <p class="callout">💡 Lesson: function names can lie — one function that sounded like a safe lookup was
      actually a single-row gate with no defense against a second row appearing. New rows in shared tables are never
      automatically safe.</p>

      <h3>3. The AdvertiserId mass overwrite (2026-05-19/20)</h3>
      <p><strong>📋 What happened:</strong> A support engineer ran a manual SQL <code>UPDATE</code> meant to fix
      <em>one</em> campaign's advertiser — but the query had no effective <code>WHERE</code> clause. It overwrote
      the advertiser on every single campaign in the database (over 9,000 rows) to one advertiser's name. For a
      window, four users at that advertiser briefly had visibility into every campaign on the platform.</p>
      <p><strong>🔍 How we found out:</strong> Someone browsing the dashboard the next morning noticed a panel was
      miscategorized and flagged it — about 13 hours after the change. A quick query confirmed only two distinct
      advertiser values existed across the entire table, instantly revealing the true scope.</p>
      <p><strong>🔧 How we fixed it:</strong> A multi-step recovery: most rows were rejoined from a trustworthy
      secondary source, a handful were matched by name, a database snapshot from just before the bug was used to
      patch the rest, and a few ambiguous cases were manually checked against the original booking forms. Cross-tenant
      access was revoked within about 30 minutes of detection.</p>
      <p class="callout">💡 Lesson: this was the <strong>fourth</strong> similar incident in three years caused by an
      unguarded manual <code>UPDATE</code> in production. This is exactly why the <a href="#" data-nav="lesson"
      data-lesson="impression-classification" style="color:inherit;text-decoration:underline;">BEGIN TRAN → check
      OUTPUT → COMMIT</a> discipline exists — it's a structural guardrail, not red tape.</p>

      <h3>4. The Fuji Film sitelist saga (2026-06-17 to 07-03, ~2 weeks)</h3>
      <p><strong>📋 What happened:</strong> A large US trial campaign (~20,000 panels across two separate sitelists)
      showed a high and climbing rate of off-target impressions. The account manager and the client kept pushing
      back on the numbers.</p>
      <p><strong>🔍 How we found out:</strong> It took over two weeks of digging to realize it wasn't one problem —
      it was <em>four</em > stacked together: a memory bug in the report-builder that silently timed out on the
      largest sitelist and forced part of the targeting to be disabled; genuine confusion over which of the two
      sitelists should drive which kind of targeting; two suppliers whose names in the data didn't quite match the
      names in the sitelist; and a failed report-build job that had silently wiped existing reports.</p>
      <p><strong>🔧 How we fixed it:</strong> Engineering fixed the memory bug, targeting was rebuilt end-to-end
      against a single agreed source list, and the off-target rate dropped from very high down to about 2.5%.
      Separately, the team had to explain to the client that Active Display Time (ADT) is only applied when
      Veridooh is highly confident (90%+) — a lower ADT coverage number is by design, not a bug, because a
      <em>wrong</em> ADT is worse than none at all.</p>
      <p class="callout">💡 Lesson: messy client-provided sitelists can cause cascading misconfiguration that looks
      like one bug but is really several. Don't stop investigating after finding the first plausible cause.</p>

      <h3>5. The "100% off-target" dashboard glitch (2026-06-24)</h3>
      <p><strong>📋 What happened:</strong> An account manager reported a campaign dashboard showing 100% of
      impressions as off-target, right before a client meeting — a number severe enough to look like a major
      pipeline failure.</p>
      <p><strong>🔍 How we found out:</strong> An engineer started investigating a possible report-building bug and
      began rebuilding the campaign's reports — then noticed the numbers looked completely correct on his own
      browser the whole time.</p>
      <p><strong>🔧 How we fixed it:</strong> It was a stale session/cache on the account manager's own browser.
      Logging out and back in fixed it instantly — no backend issue existed at all.</p>
      <p class="callout">💡 Lesson: before assuming a scary number means a pipeline bug, rule out the boring
      explanation first — stale cache, stale session, wrong filters. It's faster and it's usually right.</p>

      <h3>6. The IKEA / People's First discrepancy sweep (2026-07-01 to 07-08)</h3>
      <p><strong>📋 What happened:</strong> Three different campaigns were flagged in the same week for the same
      symptom — Veridooh's dashboard numbers not matching what the client or DSP expected.</p>
      <p><strong>🔍 How we found out:</strong> An engineer cross-checked each campaign against the raw signal logs
      individually rather than assuming one shared root cause — and found three <em>different</em> answers.</p>
      <p><strong>🔧 How we fixed it:</strong> For the first campaign, there was no real discrepancy — the DSP simply
      never sent tracking events for two of the four booked creatives, so those impressions never existed on
      Veridooh's side at all. For the second, an internal report-building bug meant Veridooh was actually tracking
      <em>more</em> than the client's own report showed, and that bug got fixed. For the third, there was no issue
      on either side — the client's comparison report had just been generated on an earlier date. That single
      investigation then became a full health-check sweep across ~26 AU campaigns.</p>
      <p class="callout">💡 Lesson: a "discrepancy" can mean three completely different things — a DSP not sending
      signals, a bug on Veridooh's side, or nothing wrong at all and just a stale comparison. Check the raw signals
      before assuming which one it is.</p>
    `
  }
];

const CASE_STUDIES = [
  {
    tag: 'Partner data',
    title: 'The Vistar impression over-count',
    symptom: 'A high-priority campaign\'s impression numbers "look off" to Sales — and it turns out the same pattern shows up on dozens of other Vistar campaigns too.',
    guessOptions: [
      'Veridooh\'s own tracking/reporting logic has a bug',
      'Vistar (the DSP/SSP) is calling Veridooh\'s tracking pixel more times than it should',
      'The client is misreading their own report'
    ],
    correctGuess: 1,
    guessNote: 'Engineers checked Veridooh\'s own logic first and confirmed it was correct — which is exactly why they knew to look upstream, at the partner.',
    whatHappened: 'Vistar shipped a regression that called Veridooh\'s tracking pixel more times than it should, inflating impression counts on ~45 campaigns globally, for about 2.5 months before anyone caught it.',
    howFound: 'Sales flagged a high-priority campaign that looked off. Engineers ruled out Veridooh\'s own logic first, then support engineers spotted the same inflated pattern across other Vistar campaigns and escalated directly to Vistar.',
    howFixed: 'Vistar confirmed the regression and shipped a hotfix — new data was correct going forward. The historical over-count stayed, so Veridooh negotiated proof-of-play reports from Vistar to justify the numbers to agencies instead of issuing refunds.',
    lesson: 'There was no systematic anomaly-detection over DSP/SSP-supplied signals — only manual health checks. A partner sending too much data is just as real a risk as sending too little.'
  },
  {
    tag: 'Engineering bug',
    title: 'The TTD macro-version collision',
    symptom: 'Every single TTD × Australia creative dispatch through Collaborate suddenly starts failing outright, right after an unrelated feature shipped.',
    guessOptions: [
      'TTD changed their API without telling anyone',
      'An unrelated schema change created a second "active" row where the code only expects one',
      'The Australia region had a network outage'
    ],
    correctGuess: 1,
    guessNote: 'The failure was 100% internal — a hidden "there\'s always exactly one active row" assumption broke the moment a second row appeared.',
    whatHappened: 'An unrelated schema change for a new feature accidentally inserted a second "active" row into a macro-version table for TTD × Australia. A hidden assumption deep in the tagging service — that there\'s always exactly one active row — meant every TTD Australia creative dispatch started failing.',
    howFound: 'A support engineer noticed failed dispatches about 6 hours after the change landed (no automated monitoring caught it sooner) and posted in Slack. An engineer traced it to the SQL level and found the duplicate active row.',
    howFixed: 'An immediate hotfix landed ~8 minutes after escalation, deactivating the extra row. The permanent fix decoupled the new feature into its own dedicated table so it no longer shares that fragile assumption.',
    lesson: 'Function names can lie — one function that sounded like a safe lookup was actually a single-row gate with no defense against a second row appearing.'
  },
  {
    tag: 'Human error',
    title: 'The AdvertiserId mass overwrite',
    symptom: 'Every campaign on the entire platform suddenly shows the same advertiser name on the dashboard.',
    guessOptions: [
      'A data migration went wrong',
      'A manual SQL UPDATE meant for one campaign had no effective WHERE clause',
      'A caching bug is displaying stale advertiser names'
    ],
    correctGuess: 1,
    guessNote: 'It really was that simple and that serious — one missing WHERE clause touched over 9,000 rows.',
    whatHappened: 'A support engineer ran a manual SQL UPDATE meant to fix one campaign\'s advertiser, but the query had no effective WHERE clause. It overwrote the advertiser on every campaign in the database — over 9,000 rows — and briefly gave four users at that advertiser visibility into every campaign on the platform.',
    howFound: 'Someone browsing the dashboard the next morning noticed a panel was miscategorized and flagged it — about 13 hours later. A quick query confirmed only two distinct advertiser values existed across the whole table, instantly revealing the scope.',
    howFixed: 'A multi-step recovery: most rows were rejoined from a trustworthy secondary source, a handful matched by name, a database snapshot from just before the bug patched the rest, and a few ambiguous cases were checked manually against booking forms. Cross-tenant access was revoked within about 30 minutes of detection.',
    lesson: 'This was the fourth similar incident in three years caused by an unguarded manual UPDATE in production. It\'s exactly why "BEGIN TRAN → check OUTPUT → COMMIT" is a structural guardrail, not red tape.'
  },
  {
    tag: 'Multi-cause',
    title: 'The Fuji Film sitelist saga',
    symptom: 'A large trial campaign shows a high and climbing rate of off-target impressions, and the client keeps pushing back on the numbers over two weeks.',
    guessOptions: [
      'One clear bug is causing all of it',
      'Several unrelated problems are stacked on top of each other',
      'The client\'s targeting brief was wrong from the start'
    ],
    correctGuess: 1,
    guessNote: 'It took over two weeks to realize this wasn\'t one problem — it was four, stacked together.',
    whatHappened: 'A large US trial campaign (~20,000 panels, two sitelists) showed high off-target rates. It turned out to be four issues at once: a memory bug that silently timed out on the largest sitelist and disabled part of the targeting, genuine confusion over which sitelist should drive which targeting, two suppliers whose names didn\'t quite match between systems, and a failed report-build job that had silently wiped existing reports.',
    howFound: 'Continued digging after each partial explanation, rather than stopping at the first plausible cause — eventually mapping all four issues individually.',
    howFixed: 'Engineering fixed the memory bug, targeting was rebuilt end-to-end against one agreed source list, and the off-target rate dropped from very high to about 2.5%. The team also had to explain that Active Display Time (ADT) is only applied at 90%+ confidence by design — a wrong ADT is worse than none.',
    lesson: 'Messy client-provided sitelists can cause cascading misconfiguration that looks like one bug but is really several. Don\'t stop investigating after finding the first plausible cause.'
  },
  {
    tag: 'False alarm',
    title: 'The "100% off-target" dashboard glitch',
    symptom: 'A campaign dashboard shows 100% of impressions as off-target right before a client meeting — looks like a major pipeline failure.',
    guessOptions: [
      'The report-building pipeline is broken',
      'It\'s a stale cache/session on the viewer\'s own browser',
      'The targeting conditions were deleted'
    ],
    correctGuess: 1,
    guessNote: 'The engineer investigating a "pipeline bug" noticed the numbers looked completely correct the whole time — on his own browser.',
    whatHappened: 'An account manager reported a dashboard showing 100% off-target right before a client meeting — severe enough to look like a major failure.',
    howFound: 'An engineer started investigating a possible report-building bug and began rebuilding the campaign\'s reports, then noticed the numbers looked correct on his own browser the entire time.',
    howFixed: 'It was a stale session/cache on the account manager\'s own browser. Logging out and back in fixed it instantly — no backend issue existed at all.',
    lesson: 'Before assuming a scary number means a pipeline bug, rule out the boring explanation first — stale cache, stale session, wrong filters. It\'s faster and it\'s usually right.'
  },
  {
    tag: 'Diagnosis nuance',
    title: 'The IKEA / People\'s First discrepancy sweep',
    symptom: 'Three unrelated campaigns get flagged in the same week for the same complaint: "the numbers don\'t match."',
    guessOptions: [
      'They all share one root cause, so fix one and all three resolve',
      'Each one turns out to have a completely different explanation',
      'It\'s always the DSP under-reporting when a client complains about numbers'
    ],
    correctGuess: 1,
    guessNote: 'Three campaigns, three completely different answers — checking raw signals per-campaign was the only way to tell them apart.',
    whatHappened: 'Three different campaigns were flagged in the same week for dashboard numbers not matching client or DSP expectations.',
    howFound: 'An engineer cross-checked each campaign individually against raw signal logs rather than assuming one shared cause.',
    howFixed: 'Campaign 1: no real discrepancy — the DSP simply never sent tracking events for 2 of 4 booked creatives, so those impressions never existed on Veridooh\'s side. Campaign 2: an internal report-building bug meant Veridooh was actually tracking more than the client\'s own report showed — bug fixed. Campaign 3: no issue on either side — the client\'s comparison report was just generated on an earlier date. The investigation then became a full health-check sweep across ~26 AU campaigns.',
    lesson: 'A "discrepancy" can mean a DSP not sending signals, a bug on Veridooh\'s side, or nothing wrong at all. Check the raw signals before assuming which one it is.'
  }
];

const GLOSSARY = [
  { term: 'OOH', def: 'Out-Of-Home. Any ad in the real world — billboards, bus shelters, airport screens, etc.' },
  { term: 'DOOH', def: 'Digital Out-Of-Home. OOH on digital screens that can change content dynamically.' },
  { term: 'pDOOH', def: 'Programmatic DOOH. DOOH bought and delivered automatically by software.' },
  { term: 'Creative', def: 'The actual ad — the video or image file that plays on screen.' },
  { term: 'Panel', def: 'One individual screen or board. A campaign usually runs across many panels.' },
  { term: 'Environment', def: 'The type of location a screen is in — roadside, shopping centre, transit, gym, etc.' },
  { term: 'Inventory', def: 'The available ad slots on screens that screen owners have to sell.' },
  { term: 'Play', def: 'One time the ad file actually played on a screen. One play can be worth many impressions depending on foot traffic.' },
  { term: 'Impression', def: 'The weighted value of a play — an estimate of how many people saw it. 500 people walk past a screen ≈ 500 impressions.' },
  { term: 'Impression multiplier', def: "A black-box value the SSP assigns to an ad-spot based on estimated audience size at that panel/time. Total impressions = SUM(multiplier × play)." },
  { term: 'CPM', def: 'Cost Per Mille — price per 1,000 impressions. $15 CPM = $15 for every 1,000 people who see the ad.' },
  { term: 'Flight', def: 'The period a campaign is live. A "2-week flight" runs for 2 weeks.' },
  { term: 'Line Item', def: 'One set of targeting rules within a campaign. A campaign can have many line items.' },
  { term: 'Target conditions', def: 'The rules for when/where/who sees the ad — time of day, location, weather, venue type, creative, etc.' },
  { term: 'Pacing', def: 'How evenly impressions are spread over the campaign duration.' },
  { term: 'KPI', def: 'Key Performance Indicator — the main metric a campaign is measured against, usually impressions or plays.' },
  { term: 'VIP Campaign', def: 'At Veridooh: a high-priority campaign that gets extra daily attention and monitoring.' },
  { term: 'DSP', def: "Demand-Side Platform. Software media agencies use to buy ad space and set targeting rules (e.g. Vistar, Hivestack)." },
  { term: 'DMP', def: 'Data Management Platform. Sits alongside the DSP on the buy side, supplying the audience/behavioural data used to decide who and where to target.' },
  { term: 'SSP', def: 'Supply-Side Platform. Software screen owners use to sell their available slots. Acts as the auctioneer.' },
  { term: 'Ad Exchange', def: 'The real-time marketplace where DSPs and SSPs connect and bid on ad slots.' },
  { term: 'RTB', def: 'Real-Time Bidding — a millisecond auction where multiple advertisers bid on an ad slot; highest bid wins.' },
  { term: 'PMP', def: 'Private Marketplace — a closed, invite-only auction, more exclusive than open RTB.' },
  { term: 'Programmatic Guaranteed', def: 'Pre-agreed impression volume delivered automatically — reserved inventory, no bidding.' },
  { term: 'Active Display Time (ADT)', def: "A panel's active operating hours. Plays outside ADT are classified invalid." },
  { term: 'Valid impression', def: "A play that occurred within a panel's Active Display Time." },
  { term: 'Invalid impression', def: 'A play that occurred outside Active Display Time — treated as effectively fraudulent, and holds the SSP/media owner accountable.' },
  { term: 'On-target impression', def: 'A valid impression that satisfies all of the target conditions.' },
  { term: 'Off-target impression', def: 'A valid impression that fails one or more target conditions.' },
  { term: 'Exclusion violation', def: 'A valid impression that played somewhere explicitly excluded by the client — the most serious classification.' },
  { term: 'SmartCreative™', def: "Veridooh's tracker for digital DOOH campaigns — wraps the ad creative to independently capture every play." },
  { term: 'Programmatic URLs', def: "Veridooh's tracking method for pDOOH — a URL fires each time the ad is served on a screen, independently capturing delivery data." },
  { term: 'Verification', def: "Independently confirming a campaign ran as planned, rather than relying on the seller's own reporting." },
  { term: 'Share of Time', def: 'The % of booked time the ad actually played. 80% = ran for 80% of its scheduled slot.' },
  { term: 'Exposure Time', def: 'Total time the ad was live on screen.' },
  { term: 'Underdelivery', def: 'When a campaign delivers fewer impressions/plays than planned — a red flag worth escalating.' },
  { term: 'Proof of Play', def: 'Evidence that an ad played — timestamp, screen ID, duration.' },
  { term: 'Media Owner', def: 'The company that owns the physical digital screens. Connects to SSPs; Veridooh does not interface with them directly.' },
  { term: 'Single-stakeholder (self-tagger)', def: 'The default Collaborate campaign management model — one agency handles creative upload, tracking URL generation, and DSP loading itself.' },
  { term: 'Multi-stakeholder', def: 'A Collaborate campaign management model where the work is split across distinct roles — Campaign manager, Creative Uploader, DSP platform user — granted per agency across all their campaigns.' },
  { term: 'Universal Tracking URL', def: 'A single tracking URL registered once per DSP (not per campaign). Once set up, it auto-applies to every future campaign that DSP runs — no repeat setup needed.' },
  { term: 'Non-Universal Tracking URL', def: 'A tracking URL that must be freshly generated and loaded in for every single campaign or creative — the default for most DSP/SSP integrations.' },
  { term: 'Pladway', def: 'A self-service Universal DSP — the agency/client enables tracking themselves inside Pladway\'s own interface, with no email hand-off to Veridooh required.' },
  { term: 'Geopath', def: 'An industry-standard audience measurement system for OOH advertising, used to calculate audience impression multipliers.' }
];

const QUIZ = [
  {
    q: 'What does the "p" in pDOOH stand for?',
    options: ['Physical', 'Programmatic', 'Panel', 'Public'],
    correct: 1,
    lesson: 'what-is-pdooh'
  },
  {
    q: 'Why does Veridooh exist, in one sentence?',
    options: [
      'To sell digital screens to media owners',
      'To help brands design better ad creatives',
      'To independently verify that a campaign actually delivered as planned',
      'To negotiate contracts between DSPs and SSPs'
    ],
    correct: 2,
    lesson: 'where-veridooh-fits'
  },
  {
    q: 'What is the difference between a play and an impression?',
    options: [
      'They mean exactly the same thing',
      'A play is the ad file running once; an impression is the estimated number of people who saw it',
      'An impression is a play that failed verification',
      'A play only applies to digital, an impression only applies to programmatic'
    ],
    correct: 1,
    lesson: 'impression-classification'
  },
  {
    q: 'In the DSP/SSP ecosystem, who does Veridooh work directly with?',
    options: [
      'Only media owners',
      'Only advertisers',
      'DSPs and SSPs — not media owners directly',
      'Ad Exchanges only'
    ],
    correct: 2,
    lesson: 'dsp-ssp-ecosystem'
  },
  {
    q: "A play happens outside a panel's Active Display Time (ADT). How is it classified?",
    options: ['On-target', 'Off-target', 'Exclusion violation', 'Invalid'],
    correct: 3,
    lesson: 'impression-classification'
  },
  {
    q: 'Which classification takes the highest precedence when a play qualifies for more than one?',
    options: ['On-target', 'Off-target', 'Exclusion violation', 'Invalid'],
    correct: 2,
    lesson: 'impression-classification'
  },
  {
    q: 'Valid/invalid classification is mainly about holding which party accountable?',
    options: ['The DSP', 'The SSP / media owner', 'The advertiser', 'The creative agency'],
    correct: 1,
    lesson: 'impression-classification'
  },
  {
    q: 'On-target/off-target classification is mainly about holding which party accountable?',
    options: ['The DSP', 'The SSP / media owner', 'The advertiser', 'The creative agency'],
    correct: 0,
    lesson: 'impression-classification'
  },
  {
    q: 'What is the "impression multiplier"?',
    options: [
      'A discount applied to underdelivering campaigns',
      "A black-box value from the SSP estimating how many people will see an ad-spot at a given panel/time",
      'The number of DSPs bidding on a slot',
      'A fixed conversion rate set by Veridooh'
    ],
    correct: 1,
    lesson: 'impression-classification'
  },
  {
    q: "Ideally, what should a campaign's on-target impressions equal?",
    options: [
      'Zero',
      'Total impressions and the impression goal',
      'The number of panels used',
      'The CPM'
    ],
    correct: 1,
    lesson: 'impression-classification'
  },
  {
    q: 'During daily monitoring, at what underdelivery threshold should you flag a campaign immediately?',
    options: ['Any underdelivery at all', 'More than 10% vs. plan', 'More than 50% vs. plan', 'Only if a client complains'],
    correct: 1,
    lesson: 'daily-job'
  },
  {
    q: 'Below what Share of Time should you flag a campaign immediately?',
    options: ['95%', '90%', '80%', '70%'],
    correct: 3,
    lesson: 'daily-job'
  },
  {
    q: "What's the right move when you're not sure if something is worth flagging?",
    options: [
      'Wait until the next scheduled meeting',
      'Flag it anyway — a false alarm is better than a missed delivery issue',
      'Ask the client directly',
      'Ignore it unless it happens twice'
    ],
    correct: 1,
    lesson: 'daily-job'
  },
  {
    q: 'What are the three subsystems of the Veridooh platform, in order?',
    options: [
      'Dashboard → API → Reports',
      'Campaign Setup → Data Pipeline → API + Dashboard',
      'Booking → Billing → Reporting',
      'Tagging → Bidding → Verification'
    ],
    correct: 1,
    lesson: 'how-veridooh-works'
  },
  {
    q: 'What is the key difference in when planning happens between Digital and Programmatic?',
    options: [
      'Digital has no planning at all',
      'Digital booking is pre-negotiated before the campaign starts; Programmatic matching happens at runtime via bidding',
      'Programmatic is always planned months in advance',
      'There is no difference'
    ],
    correct: 1,
    lesson: 'how-veridooh-works'
  },
  {
    q: 'A client wants proximity targeting around specific schools for an international campaign. Who has to support that setup?',
    options: ['Any SE, no escalation needed', 'The dev-pdooh team — this tier is dev-only for International', 'The client sets it up themselves in Collaborate', 'It isn\'t possible for any market'],
    correct: 1,
    lesson: 'impression-classification'
  },
  {
    q: 'Which targeting condition tier is the easiest to set up, and supported everywhere?',
    options: ['Advanced (proximity/POI)', 'Basic (time/dayparting)', 'Intermediate (panel targeting)', 'None are supported by default'],
    correct: 1,
    lesson: 'impression-classification'
  },
  {
    q: 'What role does a DMP (Data Management Platform) play in the ecosystem?',
    options: [
      'It owns the physical screens',
      'It supplies the audience/behavioural data the DSP uses for targeting decisions',
      'It fires the tracking URL on every play',
      'It is another name for an SSP'
    ],
    correct: 1,
    lesson: 'dsp-ssp-ecosystem'
  },
  {
    q: 'A DSP fires Veridooh\'s tracking URL directly, SSP-agnostic, tracked at the creative/campaign level. Which tracking URL type is this?',
    options: ['SSP Non-Universal', 'DSP Universal', 'DSP Non-Universal', 'MyAdBooker'],
    correct: 2,
    lesson: 'dsp-ssp-ecosystem'
  },
  {
    q: 'In a Multi-stakeholder Collaborate campaign, who is responsible for loading tracking URLs into the DSP?',
    options: ['The Campaign manager', 'The Creative Uploader', 'The DSP platform user', 'Veridooh'],
    correct: 2,
    lesson: 'collaborate-stakeholders'
  },
  {
    q: 'For a Hivestack campaign, what tracking setting should you always select?',
    options: ['Per impression', 'Per play', 'Whichever the agency prefers, no guidance', 'Per creative only'],
    correct: 1,
    lesson: 'campaign-lifecycle'
  },
  {
    q: 'Which Slack channel would you check for daily updates on an international pDOOH campaign?',
    options: ['#au-pdooh-campaigns', '#intl-pdooh-campaigns', '#programmatic-campaign-signals-notifications', '#general'],
    correct: 1,
    lesson: 'daily-job'
  },
  {
    q: 'For a "traditional" Universal DSP (like Sage & Archer), how does tracking actually get switched on?',
    options: [
      'The client enables it themselves in the DSP\'s interface',
      'Veridooh\'s SE sends a one-time email telling the DSP to apply tracking to all campaigns going forward',
      'It\'s automatic the moment the DSP is added to Collaborate',
      'A new URL is generated for every campaign, same as Non-Universal'
    ],
    correct: 1,
    lesson: 'dsp-ssp-ecosystem'
  },
  {
    q: 'Which DSP is a self-service Universal integration, where the client enables tracking themselves?',
    options: ['Pladway', 'Vistar', 'The Trade Desk', 'Hivestack'],
    correct: 0,
    lesson: 'dsp-ssp-ecosystem'
  },
  {
    q: 'In the Vistar over-count incident, why did engineers look upstream to the DSP instead of Veridooh\'s own code?',
    options: [
      'They didn\'t — they assumed it was Vistar from the start',
      'They first checked Veridooh\'s own tracking/reporting logic and confirmed it was correct',
      'Vistar reported the bug themselves immediately',
      'A client explicitly said it was Vistar\'s fault'
    ],
    correct: 1,
    lesson: 'case-studies'
  },
  {
    q: 'What was the real root cause of the AdvertiserId mass overwrite incident?',
    options: [
      'A failed database migration',
      'A manual SQL UPDATE with no effective WHERE clause',
      'A caching bug in the dashboard',
      'A DSP sending corrupted data'
    ],
    correct: 1,
    lesson: 'case-studies'
  },
  {
    q: 'In the "100% off-target" dashboard glitch, what actually fixed it?',
    options: [
      'A backend hotfix to the report builder',
      'Logging out and back in — it was a stale browser session/cache',
      'Rebuilding the campaign\'s targeting conditions',
      'Escalating to the DSP'
    ],
    correct: 1,
    lesson: 'case-studies'
  },
  {
    q: 'In the IKEA / People\'s First discrepancy sweep, what was the actual explanation for the IKEA campaign\'s "missing" impressions?',
    options: [
      'A bug in Veridooh\'s report builder',
      'The DSP never sent tracking events for 2 of the 4 booked creatives',
      'The client\'s report was outdated',
      'Panels were physically offline'
    ],
    correct: 1,
    lesson: 'case-studies'
  }
];

// ---------------------------------------------------------------------------
// Programmatic — Team Playbooks (operational, role-specific)
// Sourced from: "programmatic check list.xlsx", Notion "PDOOH Campaign Reviews",
// and Notion "Pdooh v2 set up". July 2026.
// ---------------------------------------------------------------------------

const SE_LESSONS = [
  {
    id: 'se-daily-tasks',
    title: 'Your Daily & Weekly Tasks',
    icon: 'list-checks',
    summary: 'The recurring checklist every pDOOH Support Engineer works through.',
    body: `
      <p class="lead">This is the actual task list SEs work from — pulled directly from the team's own checklist.
      Everything else in this playbook explains <em>how</em> to do these; this lesson is just <em>what</em> and
      <em>when</em>.</p>

      <h3>Every day</h3>
      <table class="content-table">
        <tr><td><strong>Slack requests</strong><br><span class="muted">All pDOOH Slack channels</span></td>
            <td>Fix urgent requests as they come in, and prioritise campaign fixes/updates based on what's asked.</td></tr>
        <tr><td><strong>Ready to Set Up group</strong><br><span class="muted">Monday board</span></td>
            <td>Make sure every item has complete details before you start setting it up.</td></tr>
        <tr><td><strong>Report to be Built group</strong><br><span class="muted">Monday board</span></td>
            <td>Build reports for campaigns that have already started or are overdue.</td></tr>
        <tr><td><strong>Set Up Complete group</strong><br><span class="muted">Monday board</span></td>
            <td>Finish setup and run a health check. If it's genuinely not tracking yet the same day, leave the item
            in this group rather than moving it.</td></tr>
      </table>

      <h3>Every Monday</h3>
      <table class="content-table">
        <tr><td><strong>Unconfirmed panels</strong><br><span class="muted">Metabase</span></td>
            <td>Flag campaigns with untracked/unconfirmed panels to the dev team in the relevant regional channel —
            <code>#au-pdooh-campaigns</code> for AU campaigns, <code>#intl-pdooh-campaigns</code> for international ones.</td></tr>
      </table>

      <h3>Every Monday, Tuesday and Wednesday</h3>
      <table class="content-table">
        <tr><td><strong>Untracked Campaigns group</strong><br><span class="muted">Monday board</span></td>
            <td>Check via AWS whether the campaign is genuinely untracked. If it genuinely isn't tracking, set the
            dashboard live and leave the item in the same group.</td></tr>
        <tr><td><strong>Unhealthy Campaigns group</strong><br><span class="muted">Monday board</span></td>
            <td>Check the off-target reasons using ProgramMatrix.</td></tr>
        <tr><td><strong>Unhealthy count cross-check</strong><br><span class="muted">Monday board vs. Metabase</span></td>
            <td>Compare the number of unhealthy campaigns in Monday against Metabase, and update Monday to match.</td></tr>
        <tr><td><strong>Daily Summary / pDOOH notification</strong><br><span class="muted">Slack</span></td>
            <td>Post the board summary update to <code>#au-pdooh-campaigns</code> and <code>#intl-pdooh-campaigns</code>.</td></tr>
      </table>

      <p class="callout">💡 Notice the pattern: nothing here is done in isolation. Every task either updates the
      Monday board to match reality, or updates Slack to make sure the right people know what's happening.</p>
    `
  },
  {
    id: 'se-campaign-review',
    title: 'The Daily Campaign Review Process',
    icon: 'clipboard-check',
    summary: 'The step-by-step SOP behind the "Unhealthy" and "Untracked" checklist items.',
    body: `
      <p class="lead">This is the detailed version of the daily review work — what you're actually looking at, and
      in what order, when you check the pDOOH Campaign Board.</p>

      <h3>The tools you'll use</h3>
      <table class="content-table">
        <tr><td><strong>ProgramMatrix</strong> (Metabase dashboard)</td><td>Campaign info and ingested target
        conditions — is everything set up correctly?</td></tr>
        <tr><td><strong>PDOOH Campaign Health Check</strong> (Metabase)</td><td>Is the campaign healthy right now?</td></tr>
        <tr><td><strong>Hivestack API Campaigns Overview</strong> (Metabase)</td><td>All current Hivestack API campaigns.</td></tr>
        <tr><td><strong>Campaign Off Target Conditions Checker</strong> (Metabase)</td><td>What's actually causing
        the off-targeting on a specific campaign.</td></tr>
      </table>
      <p class="callout">📸 The Notion source for this lesson includes screenshots of each Metabase view (the
      ProgramMatrix campaign-review section, the condition checker, and the health-check dashboard) that couldn't be
      pulled in automatically — ask your team lead for these if you want the visual reference alongside this text.</p>

      <h3>Board process flow</h3>
      <ol>
        <li>Check the <strong>3 Ready to Set Up</strong> group for any new campaigns.</li>
        <li>Run reports for campaigns in <strong>3.2 Report to be Built</strong> that have already started.</li>
        <li>Run the Daily pDOOH Campaigns Review process below.</li>
      </ol>

      <h3>The Daily Review, step by step</h3>
      <p><strong>1. Review campaigns in this order:</strong> <strong>4 Set up Complete + Ready to Review</strong> →
      <strong>4.1 Untracked Overdue Campaigns</strong> → <strong>5.1 Unhealthy Campaigns</strong>.</p>
      <p><strong>2. Check ingestion.</strong> Pick a campaign, copy its Campaign ID, and check the
      ProgrammaticCampaignReview section of ProgramMatrix. Compare against the Monday item: the <strong>DSP mismatch
      check</strong> column should read "OK" (flag the SE team if not), and the booked start/end dates and booked
      impressions should match.</p>
      <p><strong>3. Check targeting conditions.</strong> In ProgramMatrix's PDOOH Condition Checker section, compare
      the ingested target conditions against what's actually in the Monday item.</p>
      <p><strong>4. Check campaign health</strong> in PDOOH Campaign Health Check:</p>
      <table class="content-table">
        <tr><td>Tracked vs. expected impressions</td><td>Unhealthy below <strong>52%</strong> of pacing</td></tr>
        <tr><td>Invalid impressions</td><td>Unhealthy above <strong>18%</strong></td></tr>
        <tr><td>Campaign impressions targeting performance</td><td>UNHEALTHY if on-target impressions are below
        <strong>80%</strong> of pacing</td></tr>
      </table>

      <h3>Off-target cause codes</h3>
      <p>If a campaign has off-target impressions, the Campaign Off Target Conditions Checker gives you a numbered
      cause code:</p>
      <table class="content-table">
        <tr><td><strong>0</strong> — No applicable conditions available</td><td>No clear self-serve fix — raise this
        to the dev team.</td></tr>
        <tr><td><strong>1</strong> — Creative not in any creative-based condition</td><td>A creative is missing from
        the targeting conditions.</td></tr>
        <tr><td><strong>2</strong> — Doesn't match any time-based condition</td><td>Day-parting/time targeting
        doesn't match what's tracked. Check the matching media-owner name and format in the dashboard to find the
        specific panels with invalid impressions.</td></tr>
        <tr><td><strong>3</strong> — Doesn't match any location-based condition</td><td>The panel/location doesn't
        match the ingested targeting conditions. Same approach — check MO name and format in the dashboard.</td></tr>
      </table>

      <h3>5. Update the Monday item</h3>
      <ul>
        <li>At least one unhealthy parameter → move to <strong>5.1 Unhealthy Campaigns</strong>.</li>
        <li>All healthy → move to <strong>5 Ongoing Campaigns</strong>.</li>
        <li><strong>Untracked overdue:</strong> if a campaign started more than a day ago and still isn't tracked,
        set Target Imp Health / Impression Health / Pacing Health to "Not Tracked" and move to
        <strong>4.1 Untracked Overdue Campaigns</strong>.</li>
        <li><strong>New campaigns:</strong> if newly set up and already tracking, update the Monday item, set the
        dashboard live, and move it to the correct group per the rules above.</li>
      </ul>
      <p>After reviewing everything in Groups 4, 4.1 and 5.1, run the Health Check with no filters and compare the
      total unhealthy count in Metabase against Monday — if they don't match, find the missing campaign and move it.</p>

      <h3>Sending the daily Slack update</h3>
      <p>Before sending: make sure the Group 5.1 health check is done, and that every item in Groups 4 and 4.1 has
      had its report run through Postman (for untracked items, normally run for the previous week).</p>
      <p class="callout">💡 On <strong>Thursday and Friday</strong>, skip the Slack notification — but still run the
      reports and set dashboards live for Group 4, and still check Group 4.1 for tracking status.</p>
      <p>Monday–Wednesday, send the board summary: AU/NZ campaigns to <code>#au-pdooh-campaigns</code>,
      international campaigns to <code>#intl-pdooh-campaigns</code>.</p>
    `
  },
  {
    id: 'se-campaign-setup',
    title: 'Setting Up a New Campaign (V2)',
    icon: 'settings-2',
    summary: 'The 10-step process for taking a new campaign from brief to live.',
    body: `
      <p class="lead">A simplified walk-through of the pDOOH V2 campaign setup process.</p>
      <ol>
        <li><strong>Find campaigns to set up.</strong> Check for anything that needs setting up. Copy the exact
        campaign name and search for it first — working on the wrong campaign is an easy mistake to make.</li>
        <li><strong>Get campaign details.</strong> Run the team's query to pull the Campaign ID, advertiser, DSP
        name, booked impressions, and start/end dates from the database.</li>
        <li><strong>Verify campaign info.</strong> Cross-check the Campaign ID in Monday.com against the start date
        and target impressions.</li>
        <li><strong>Ingest target impressions.</strong> Copy the target impressions and use the query to upload
        them to the database — then double check the data landed correctly.</li>
        <li><strong>Set up booking conditions.</strong> Open Postman and set the Campaign ID, start/end dates, and
        DSP name + ID (double-check these in the database — a wrong DSP ID here causes classification errors later).</li>
        <li><strong>Add time targeting.</strong> If there are no special audience/location conditions, focus on time
        targeting — use the JSON template (e.g. 6am–12am every day as a simple default).</li>
        <li><strong>Upload the targeting data.</strong> Confirm every detail (Campaign ID, DSP ID, dates, time) is
        correct, then send it through Postman. If you get an error, refresh your auth cookie from the platform and
        retry.</li>
        <li><strong>Check the data.</strong> Run a query to confirm the booked impressions, DSP, dates, and time
        conditions all match what you intended.</li>
        <li><strong>Build reports.</strong> Run the report for the campaign's dates and confirm the numbers line
        up with the booking.</li>
        <li><strong>Final review.</strong> Double-check the uploaded data and the reports one more time before
        calling the setup done.</li>
      </ol>
      <p class="callout">💡 There's a "V2.1" refinement of this process for certain campaign types — if something
      about the campaign you're setting up doesn't fit this flow cleanly, check with your lead before improvising.</p>
    `
  },
  {
    id: 'se-fixes-reference',
    title: 'Common Fixes & Reference Queries',
    icon: 'wrench',
    summary: 'What to reach for when a campaign needs a correction after it\'s already set up.',
    body: `
      <p class="lead">Once a campaign is live, most "fix" requests fall into a handful of categories. This lesson
      covers what each one is for — not a full copy-paste script library, since exact queries evolve. Ask your lead
      for the current version before running anything against production.</p>

      <h3>Fixing booked impressions, dates, or targeting conditions</h3>
      <p>The most common AM-flagged fix: updating start/end dates, booked impressions, or targeting conditions for
      a campaign that was set up with the wrong values.</p>
      <pre class="code-block">BEGIN TRAN
UPDATE Programmaticbookingimpression SET booked_impressions = '575502'
  OUTPUT inserted.booked_impressions AS new, deleted.booked_impressions AS old
WHERE programmatic_booking_id IN (
  SELECT id FROM ProgrammaticBooking WHERE campaign_id = 17979
)
ROLLBACK
-- COMMIT</pre>
      <p class="callout">💡 Same safety rule as everywhere else in this platform: <strong>BEGIN TRAN → check the
      OUTPUT → only then COMMIT.</strong> Never skip straight to COMMIT.</p>
      <p>Targeting-condition fixes follow the same pattern, but update the JSON on
      <code>ProgrammaticScalarConditionBooking.info_json</code> — sanitised (strip line breaks and non-breaking
      spaces) and validated with <code>ISJSON()</code> before the update runs, exactly like the SQL Handbook process
      covered in the Impression Classification lesson.</p>

      <h3>Email exception report access</h3>
      <p>Mostly for international campaigns (NL, UK, US) flagged by the PH team or AMs. Two things usually need
      checking:</p>
      <ul>
        <li><strong>Does the user have advertiser access at all?</strong> Check against
        <code>AgencyUserManagedAdvertisers</code> — if missing, grant it via an insert into
        <code>UserOrganization</code>.</li>
        <li><strong>Are they actually opted into the exception report?</strong> Check <code>EmailNotification</code>
        for that user/advertiser and <code>type = 'under-delivery-pdooh'</code> — if missing, insert a new row.</li>
      </ul>
      <p>Both are simple inserts, but follow the same BEGIN TRAN / check-before-COMMIT discipline.</p>

      <h3>Checking if a campaign is genuinely tracking</h3>
      <p>Needs AWS access. Two useful checks: total play count vs. booked impressions (are signals arriving at
      roughly the expected volume?), and a detailed per-signal check (supplier, panel, run ID, DSP/SSP name,
      timestamp) to see exactly what's coming through the pipeline for that campaign. This is the same raw-signal
      instinct from the Real Case Studies lesson — check the actual signals before concluding anything about a
      "discrepancy."</p>

      <h3>Setting up sitelist-based targeting</h3>
      <p>Sitelist ingestion (matching panels to a client's site list for targeting) currently only works for
      <strong>Hivestack and Vistar</strong>, via a template spreadsheet and a command-line script. Anything beyond
      those two DSPs needs help from the dev-pdooh team — don't try to force it.</p>
    `
  }
];

const SE_QUIZ = [
  {
    q: 'Which task on the SE checklist happens every Monday specifically?',
    options: ['Slack requests', 'Flagging unconfirmed panels to devs', 'Building reports', 'Sending the daily Slack update'],
    correct: 1,
    lesson: 'se-daily-tasks'
  },
  {
    q: 'If a "Set Up Complete" campaign isn\'t tracking yet on the same day it was set up, what should you do?',
    options: [
      'Move it to Untracked Overdue immediately',
      'Leave it in the Set Up Complete group',
      'Delete the Monday item',
      'Escalate to the dev team immediately'
    ],
    correct: 1,
    lesson: 'se-daily-tasks'
  },
  {
    q: 'On the Monday board, what is the correct order to review campaign groups during the daily review?',
    options: [
      '5.1 Unhealthy → 4.1 Untracked → 4 Set up Complete',
      '4 Set up Complete + Ready to Review → 4.1 Untracked Overdue → 5.1 Unhealthy',
      'Alphabetical order',
      'Whichever the AM asks about first'
    ],
    correct: 1,
    lesson: 'se-campaign-review'
  },
  {
    q: 'In ProgramMatrix, what should the "DSP mismatch check" column show for a healthy campaign?',
    options: ['MISMATCH', 'OK', 'PENDING', 'N/A'],
    correct: 1,
    lesson: 'se-campaign-review'
  },
  {
    q: 'A campaign has invalid impressions at 22%. Is this healthy or unhealthy?',
    options: ['Healthy — under 25% is fine', 'Unhealthy — the threshold is 18%', 'Depends on the client', 'Invalid impressions are never unhealthy'],
    correct: 1,
    lesson: 'se-campaign-review'
  },
  {
    q: 'Off-target cause code 2 means what?',
    options: [
      'No applicable conditions available',
      'A creative is missing from the targeting conditions',
      'The tracked slot doesn\'t match any time-based condition',
      'The tracked slot doesn\'t match any location-based condition'
    ],
    correct: 2,
    lesson: 'se-campaign-review'
  },
  {
    q: 'On Thursdays and Fridays, what happens to the daily Slack notification?',
    options: [
      'It\'s sent as normal',
      'It\'s skipped, but reports still get run and dashboards still get set live',
      'It\'s sent twice to make up for Monday',
      'Nothing at all happens on those days'
    ],
    correct: 1,
    lesson: 'se-campaign-review'
  },
  {
    q: 'In the V2 campaign setup process, what should you do before uploading time targeting via Postman if you get an error?',
    options: [
      'Delete the campaign and start over',
      'Refresh your auth cookie from the platform and retry',
      'Wait 24 hours',
      'Ignore the error, it usually resolves itself'
    ],
    correct: 1,
    lesson: 'se-campaign-setup'
  },
  {
    q: 'Why do you copy the exact campaign name and search for it first, before starting setup?',
    options: [
      'It\'s required by Postman',
      'To avoid accidentally working on the wrong campaign',
      'To generate the Campaign ID',
      'It isn\'t necessary, it\'s just a habit'
    ],
    correct: 1,
    lesson: 'se-campaign-setup'
  },
  {
    q: 'Sitelist-based targeting is currently only supported for which DSPs?',
    options: ['All DSPs', 'Hivestack and Vistar', 'The Trade Desk only', 'MyAdBooker only'],
    correct: 1,
    lesson: 'se-fixes-reference'
  },
  {
    q: 'What is the safety rule for any manual fix that updates booked impressions or targeting conditions?',
    options: [
      'Just run the UPDATE directly, speed matters most',
      'BEGIN TRAN, check the OUTPUT, only then COMMIT',
      'Always ask the client for written permission first',
      'Only run fixes on weekends'
    ],
    correct: 1,
    lesson: 'se-fixes-reference'
  }
];

const PROGRAMMATIC_TRACKS = [
  {
    id: 'core-concepts',
    title: 'Core Concepts',
    icon: 'book-open',
    status: 'available',
    tagline: "What pDOOH is, how Veridooh verifies it, and the concepts everyone on the team should know.",
    lessons: LESSONS,
    quiz: QUIZ,
    legacyProgress: true
  },
  {
    id: 'support-engineer',
    title: 'Support Engineer',
    icon: 'wrench',
    status: 'available',
    tagline: 'Daily/weekly operational tasks, campaign reviews, and setup checklists for SEs working on pDOOH.',
    lessons: SE_LESSONS,
    quiz: SE_QUIZ,
    legacyProgress: false
  },
  {
    id: 'ph-team',
    title: 'PH Team',
    icon: 'users',
    status: 'coming-soon',
    tagline: 'Daily tasks for the Philippines ops team.',
    lessons: [],
    quiz: [],
    legacyProgress: false
  }
];

// ---------------------------------------------------------------------------
// Booking — Core Concepts
// Sourced from: "Booking Form Guide.docx" and "📘 PH Rules Handbook.docx", July 2026.
// ---------------------------------------------------------------------------

const BOOKING_LESSONS = [
  {
    id: 'what-is-a-booking',
    title: 'What Is a Booking?',
    icon: 'calendar-check',
    summary: 'The three documents behind every campaign, and how they fit together.',
    body: `
      <p class="lead">Every OOH campaign that runs on our screens starts as paperwork before it becomes pixels.
      This lesson is about that paperwork — and why it matters.</p>

      <h3>📄 Where a campaign begins</h3>
      <p>A client wants to advertise. Their media agency negotiates with an OOH supplier (a media owner like
      oOh!Media, JCD, QMS, or Cartology) for a set of panels, for a set number of weeks. Once that deal is signed,
      the agency sends the supplier — and us — two documents:</p>

      <div class="compare-row">
        <div class="compare-card">
          <div class="compare-label">📋 IO — Insertion Order</div>
          <p>The commercial contract. Which panels, what dates, what price, what share of time. This is the
          <strong>"what and where."</strong></p>
        </div>
        <div class="compare-card">
          <div class="compare-label">🎨 MI — Media Instructions</div>
          <p>The creative brief. Which creative file plays on which panel, and when. This is the
          <strong>"what plays."</strong></p>
        </div>
      </div>

      <p>Our job is to take those two documents and turn them into a <strong>Booking Form (BKF)</strong> — the
      structured record that tells our system exactly what to book: which panels, what creative, for how long.</p>

      <div class="flow-diagram">
        <div class="flow-step">Agency<span>sends IO + MI</span></div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">Bookings Team<span>fills the BKF from the IO + MI</span></div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">System<span>books the panels and schedules the creative</span></div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step flow-step--highlight">📺 Screens<span>the campaign goes live</span></div>
      </div>

      <p class="callout">💡 The Golden Rule of bookings: <strong>the MI is exactly what the client agreed to.</strong>
      We always schedule based on the MI — not on whatever the media owner decides to play. The exceptions to this
      rule are covered in the Bookings Team playbook.</p>

      <h3>✅ Three things to remember</h3>
      <ol>
        <li><strong>IO</strong> = the contract (panels, dates, price)</li>
        <li><strong>MI</strong> = the creative brief (what plays, when)</li>
        <li><strong>BKF</strong> = what we build from the IO + MI to actually book the campaign</li>
      </ol>
    `
  },
  {
    id: 'the-booking-lifecycle',
    title: 'The Booking Lifecycle',
    icon: 'route',
    summary: 'The tools and checkpoints a booking passes through, from IO to live campaign.',
    body: `
      <p class="lead">Knowing what an IO and MI are is step one. This lesson is about how a booking actually moves
      through our systems.</p>

      <h3>🧰 The tools you'll hear about constantly</h3>
      <table class="content-table">
        <tr><td><strong>Collab</strong><br><span class="muted">Collaborate</span></td>
            <td>Where IOs and MIs live. The source of truth for creative availability — if a file isn't in Collab,
            we treat it as if it doesn't exist yet.</td></tr>
        <tr><td><strong>Metabase</strong></td>
            <td>For investigating panel delivery and creative specs when the MI is missing something or unclear.</td></tr>
        <tr><td><strong>Monday.com</strong></td>
            <td>The board that tracks every booking's status, and where we log our audit trail — comments on what
            we did and why.</td></tr>
        <tr><td><strong>Slack</strong></td>
            <td>Where approvals happen. Any booking decision that leans on Metabase instead of the MI needs a
            Campaign Manager's sign-off here first.</td></tr>
        <tr><td><strong>Format Checker</strong></td>
            <td>A lookup tool that tells you which panels we actually track, and their correct format/supplier —
            used to validate the panel list before it goes in the BKF.</td></tr>
      </table>

      <h3>🔁 From IO to live campaign</h3>
      <div class="flow-diagram">
        <div class="flow-step">1. Receive<span>IO + MI land in Collab</span></div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">2. Validate<span>panel list run through the Format Checker</span></div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">3. Build<span>BKF filled in: panels, dates, SOV, creative</span></div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step">4. Allocate<span>creative matched to panels using the MI's pattern</span></div>
        <div class="flow-arrow">↓</div>
        <div class="flow-step flow-step--highlight">5. Book<span>campaign goes live, tracked on Monday.com</span></div>
      </div>

      <p>Most bookings move through this cleanly. The exceptions — an unclear MI, a missing creative, a date
      mismatch between the IO and MI — are exactly what the Bookings Team playbook's escalation rules exist for.</p>

      <p class="callout">💡 Every one of these tools does one job: keep the booking honest and traceable. If you
      ever fill in a BKF field from memory instead of from the IO, MI, or Format Checker, you've broken the chain.</p>
    `
  },
  {
    id: 'anatomy-of-a-booking-form',
    title: 'Anatomy of a Booking Form',
    icon: 'table-2',
    summary: 'The fields every Booking Form needs, and what each one actually means.',
    body: `
      <p class="lead">The Booking Form (BKF) is a spreadsheet, but every column has a precise meaning. Get one
      wrong and the wrong creative plays on the wrong screen.</p>

      <h3>🧾 Campaign details (filled once per campaign)</h3>
      <table class="content-table">
        <tr><td><strong>Campaign name, media agency, client, brand</strong></td>
            <td>Identifies who the campaign is for.</td></tr>
        <tr><td><strong>OOH supplier, contract ID</strong></td>
            <td>Which media owner, and their reference for this deal.</td></tr>
        <tr><td><strong>Campaign start / end date</strong></td>
            <td>The overall campaign window — not the same as a single panel's booking dates.</td></tr>
      </table>

      <h3>📺 Per-panel fields (filled once per panel)</h3>
      <table class="content-table">
        <tr><td><strong>Panel ID</strong></td>
            <td>The unique identifier for the physical screen — copied from the IO, cross-checked in Panel ID Search.</td></tr>
        <tr><td><strong>Location Display</strong></td>
            <td>The site address, copied from the IO.</td></tr>
        <tr><td><strong>Screen Size</strong></td>
            <td>Width × height, in that order — taken from the IO, <em>not</em> the Format Checker.</td></tr>
        <tr><td><strong>adLength</strong></td>
            <td>Duration in seconds that the creative plays for.</td></tr>
        <tr><td><strong>SOV</strong><br><span class="muted">Share of Time</span></td>
            <td>The % share of display time this advertiser has bought at that panel, out of all content playing
            there. Formatted as a number with 2 decimal places.</td></tr>
        <tr><td><strong>Creative, play instructions</strong></td>
            <td>Which creative file plays, and any special rules for when.</td></tr>
        <tr><td><strong>Creative start / end date</strong></td>
            <td>This panel's own booking window — always in <code>YYYY-MM-DD</code>, converted from whatever format
            the IO used.</td></tr>
      </table>

      <figure>
        <img src="assets/booking/io-field-reference-key.png" alt="Reference table mapping IO fields such as Campaign ID, Panel #, and Share of Time to their accepted values" />
        <figcaption>A field reference like this maps every IO column to what it means and what format it should end up in.</figcaption>
      </figure>

      <p class="callout">💡 <strong>SOV</strong>, precisely: unless the IO says otherwise, booked SOV is evenly
      distributed by hour, day, and week at each panel — and it's one of the few numbers a third party (the client,
      or an auditor) can and will independently verify. Getting it wrong isn't just an internal mistake.</p>
    `
  },
  {
    id: 'how-creatives-get-allocated',
    title: 'How Creatives Get Allocated to Panels',
    icon: 'shuffle',
    summary: 'Why the same MI can be structured a dozen different ways — and what problem that solves.',
    body: `
      <p class="lead">Two MIs can describe the exact same campaign completely differently. One lists creatives by
      panel ID. Another just says "the 1920×1080 creative goes on all 1920×1080 panels." Both are valid — you just
      need to recognise which pattern you're looking at.</p>

      <h3>❓ The problem this solves</h3>
      <p>A creative allocation instruction can be structured in a dozen different ways depending on the client's
      needs — by panel, by dimension, by date, by burst, by location. We give each pattern an exact name — a
      <strong>MIType</strong> — so that whoever books the campaign, and whoever reviews it later, can tell at a
      glance which allocation logic was used.</p>

      <h3>🟢 A couple of examples</h3>
      <div class="compare-row">
        <div class="compare-card">
          <div class="compare-label">SingleCreativeOnEachPanel</div>
          <p>The simplest pattern — one creative plays on every panel, no rotation. Example: Panel A, B, and C all
          play Creative 1.</p>
        </div>
        <div class="compare-card">
          <div class="compare-label">CreativesByPanels</div>
          <p>The MI names specific creatives against specific named panels. Example: "Panel SYD_001 plays Creative
          A, Panel MEL_002 plays Creative B."</p>
        </div>
      </div>
      <figure>
        <img src="assets/booking/mitype-single-creative-on-each-panel.png" alt="Example MI showing a single creative allocated at 100% share across a panel" />
        <figcaption>A real MI tagged SingleCreativeOnEachPanel — one file, one share: 100%.</figcaption>
      </figure>

      <p>Others key off time instead of the panel itself — <strong>CreativesByBurstDates</strong> swaps creatives at
      defined burst periods, <strong>CreativesByDate&amp;Time</strong> swaps them down to the hour. Others key off
      geography — <strong>CreativesByStates</strong>, or <strong>CreativesByProximity</strong> (e.g. "creatives near
      this Woolworths").</p>

      <figure>
        <img src="assets/booking/mitype-by-proximity.png" alt="Example of a CreativesByProximity instruction tying creative allocation to nearby locations over a date range" />
        <figcaption>CreativesByProximity — allocation driven by how close a panel is to a location, not by panel ID
        or dimension.</figcaption>
      </figure>

      <p class="callout">💡 There are 13 of these patterns in total. You don't need to memorise all 13 right now —
      the full reference table, with a real example screenshot for each one, lives in the Bookings Team playbook,
      since that's where you'll actually be tagging MIs day to day.</p>
    `
  }
];

const BOOKING_QUIZ = [
  {
    q: 'What does the IO (Insertion Order) define?',
    options: ['Which creative file plays on which panel', 'Which panels, what dates, and what price', 'The Slack approval trail', 'The Format Checker results'],
    correct: 1,
    lesson: 'what-is-a-booking'
  },
  {
    q: 'What does the MI (Media Instructions) define?',
    options: ['The commercial contract terms', 'The contract ID and supplier', 'Which creative plays on which panel, and when', 'The campaign\'s Monday.com board'],
    correct: 2,
    lesson: 'what-is-a-booking'
  },
  {
    q: 'What is the "Golden Rule" of bookings?',
    options: [
      'Always schedule based on the MI, not whatever the media owner decides to play',
      'Always trust the Format Checker over the IO',
      'Always book digital and non-digital panels equally',
      'Always ask the client directly before booking'
    ],
    correct: 0,
    lesson: 'what-is-a-booking'
  },
  {
    q: 'What is a BKF?',
    options: [
      'A type of media owner',
      'The Booking Form we build from the IO + MI to actually book the campaign',
      'A Metabase dashboard',
      'The client\'s signed contract'
    ],
    correct: 1,
    lesson: 'what-is-a-booking'
  },
  {
    q: 'Which tool validates the panel list — which panels we track, their format and supplier — before it goes into the BKF?',
    options: ['Metabase', 'Monday.com', 'Format Checker', 'Slack'],
    correct: 2,
    lesson: 'the-booking-lifecycle'
  },
  {
    q: 'Where do IOs and MIs live, acting as the source of truth for creative availability?',
    options: ['Collab', 'Metabase', 'The BKF itself', 'A Slack channel'],
    correct: 0,
    lesson: 'the-booking-lifecycle'
  },
  {
    q: 'Where should the BKF\'s Screen Size value be copied from?',
    options: ['The Format Checker', 'The IO', 'The creative file name', 'Metabase'],
    correct: 1,
    lesson: 'anatomy-of-a-booking-form'
  },
  {
    q: 'What does SOV represent on a Booking Form?',
    options: [
      'The number of panels booked',
      'The contract ID',
      'The % share of display time this advertiser has bought at that panel',
      'The creative\'s file size'
    ],
    correct: 2,
    lesson: 'anatomy-of-a-booking-form'
  },
  {
    q: 'What date format should a panel\'s creative start/end date end up in on the BKF?',
    options: ['DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY-MM-DD', 'Whatever format the IO used'],
    correct: 2,
    lesson: 'anatomy-of-a-booking-form'
  },
  {
    q: 'What is a "MIType"?',
    options: [
      'The file extension of a Media Instruction',
      'A label describing which creative-allocation pattern an MI uses',
      'The Slack channel used for approvals',
      'A type of panel format'
    ],
    correct: 1,
    lesson: 'how-creatives-get-allocated'
  }
];

// ---------------------------------------------------------------------------
// Booking — Team Playbook (operational, bookings team)
// Sourced from: "Booking Form Guide.docx" and "📘 PH Rules Handbook.docx", July 2026.
// ---------------------------------------------------------------------------

const BOOKING_TEAM_LESSONS = [
  {
    id: 'filling-a-booking-form',
    title: 'Filling a Booking Form, Step by Step',
    icon: 'list-checks',
    summary: 'The step-by-step process for turning an IO into a completed Booking Form.',
    body: `
      <p class="lead">This is the literal step-by-step process the Bookings Team follows to fill in a BKF from an
      IO. Screenshot examples of what these source files actually look like are below — you'll see plenty of
      variety between media owners.</p>

      <h3>IO part</h3>
      <ol>
        <li><strong>Copy the panel names from the IO into the BKF.</strong> For oOh!Media and OAC IOs, check first
        whether Bishopp, EI Media, Paradise, GOA, CIVIC, Big Outdoor, or Stream panels are mixed in — those need to
        be booked on <em>separate</em> forms, or the booking will error out.</li>
        <li><strong>Run the panel list through the Format Checker.</strong> Anything with no result either isn't
        tracked, or needs a manual cross-check against other Booking Forms.</li>
        <li><strong>Copy height and width into the dimension formatter.</strong> IOs almost always list height
        first — but not always, so check. (OASIS IOs are the most reliable height-first source.)</li>
        <li><strong>Paste the formatter's output (width × height) into the BKF's Screen Size column.</strong></li>
        <li><strong>Copy the site address into Location Display.</strong></li>
        <li><strong>Copy duration/adLength into the adLength column.</strong></li>
        <li><strong>Copy SOV, formatted as a number with 2 decimal places.</strong> Some IOs use 1/2/3 as shorthand
        for SOV — convert 1→5%, 2→10%, 3→15% (mostly seen in JCD IOs).</li>
        <li><strong>Run booking start/end dates through the formatter</strong> to get <code>DD/MM/YYYY</code>, then
        paste into the BKF and convert to <code>YYYY-MM-DD</code>. Never copy the material deadline instead of the
        booking date.</li>
      </ol>
      <p class="callout">⚠️ Double-check date formats panel by panel — it's common for the first batch of panels in
      an IO to use <code>DD/MM/YYYY</code> and a later batch to switch to <code>MM/DD/YY</code> within the
      <em>same file</em>. After steps 1–7, also re-check every panel's spec in Panel ID Search, especially LF
      panels — IOs sometimes list the wrong dimensions.</p>

      <h3>Format Checker part</h3>
      <ol start="8">
        <li><strong>Copy the panel names from the BKF into the Format Checker</strong> one more time. Double-check
        the supplier matches for every panel and that we track all of them, then copy the confirmed format back
        into the BKF.</li>
      </ol>

      <h3>What these source files actually look like</h3>
      <p>IO formats vary a lot by media owner — there's no single template. Here are a few real examples:</p>
      <figure>
        <img src="assets/booking/io-template-example-cartology.png" alt="Example IO from Cartology listing media owner, campaign ID, agency, client, and panel numbers" />
        <figcaption>A Cartology-style IO — one row per panel.</figcaption>
      </figure>
      <figure>
        <img src="assets/booking/io-template-example-wavemaker.png" alt="Example IO showing a weekly date grid per media owner and product" />
        <figcaption>A date-grid style IO, showing which weeks each panel is active.</figcaption>
      </figure>
      <figure>
        <img src="assets/booking/io-template-example-qms.png" alt="Example IO listing QMS panels with campaign and agency IDs" />
        <figcaption>A QMS-style IO.</figcaption>
      </figure>
      <figure>
        <img src="assets/booking/bkf-template-example.png" alt="Example completed Booking Form showing campaign details plus Panel ID, Location Display, and address columns" />
        <figcaption>...and the other end of the process — a completed BKF.</figcaption>
      </figure>

      <h3>📛 Naming your working file by IO source</h3>
      <p>Once you can clearly tell which source or category an IO belongs to, name your working file
      <code>{Category}_ContractID_IO Filename.xlsx</code> — that one prefix tells whoever opens it next what to
      expect before they even open it:</p>
      <table class="content-table">
        <tr><td><strong>OasisIO</strong></td>
            <td>Sourced from Oasis — this is the one that typically lists height before width (see step 2 above).</td></tr>
        <tr><td><strong>bkfIO</strong></td>
            <td>An IO that already arrives close to BKF structure, needing minimal reshaping.</td></tr>
        <tr><td><strong>BlueIO / GreenIO</strong></td>
            <td>Two more recognizable IO sources/categories the team tags the same way.</td></tr>
        <tr><td><strong>OasisIOwithMultipleCIDs</strong></td>
            <td>An Oasis-sourced IO that bundles more than one Contract ID in the same file — name it
            <code>OasisIOwithMultipleCIDs_ContractID1_ContractID2_IO Filename.xlsx</code> so those assets don't get
            mixed into the wrong BKF.</td></tr>
      </table>
      <p class="callout">💡 This only applies when the source is clear-cut. If you can't confidently tell which
      category an IO belongs to, don't force a label onto it — cross-check against the Format Checker and Panel ID
      Search as usual instead.</p>
    `
  },
  {
    id: 'mitype-full-reference',
    title: 'MIType: The Complete Reference',
    icon: 'layers',
    summary: 'The full list of creative-allocation patterns, with a real example for each one.',
    body: `
      <p class="lead">When you name your MI file, replace <code>MIType</code> with the exact tag below that matches
      the pattern the instructions use. These 13 cover the vast majority of MIs you'll see.</p>

      <h3>1. SingleCreativeOnEachPanel</h3>
      <p>Every panel plays the exact same creative — no rotation, no variation. Example: Panel A, B, and C all play
      Creative 1.</p>
      <figure><img src="assets/booking/mitype-single-creative-on-each-panel.png" alt="MI example with one creative at 100% share across a panel" /></figure>

      <h3>2. AllCreativesOnEachPanel</h3>
      <p>Every panel plays the same mix of 2–3 creatives, rotating. Example: all panels rotate between Creative 1
      and Creative 2, 70/30.</p>
      <figure><img src="assets/booking/mitype-all-creatives-on-each-panel.png" alt="MI example with two creatives sharing rotation across a panel" /></figure>

      <h3>3. CreativesByPanels</h3>
      <p>Specific creatives are tied to specific named Panel IDs, listed explicitly in the IO. Example: "Panel
      SYD_001 plays Creative A, Panel MEL_002 plays Creative B."</p>
      <figure><img src="assets/booking/mitype-by-panels.png" alt="MI example tying named panel IDs to specific creatives" /></figure>

      <h3>4. CreativesByDimensions</h3>
      <p>Use only when panel names aren't given — just dimensions (e.g. 1920×1080). Example: "The 1920×1080
      creative goes to all 1920×1080 panels."</p>
      <figure><img src="assets/booking/mitype-by-dimensions.png" alt="MI example allocating creatives by panel dimensions only" /></figure>

      <h3>5. CreativesByFormat</h3>
      <p>Use when both panel names AND dimensions are missing — only format type (Full Motion, Static, Roadside)
      is referenced. Example: "The Full Motion creative plays on all Full Motion panels."</p>
      <figure><img src="assets/booking/mitype-by-format.png" alt="MI example allocating creatives by panel format type" /></figure>

      <h3>6. CreativesByBurstDates</h3>
      <p>Different creatives run during different bursts — short defined periods within the campaign. Example:
      Burst 1 (Week 1) plays Creative A, Burst 2 (Week 3) plays Creative B.</p>
      <figure><img src="assets/booking/mitype-by-burst-dates.png" alt="MI example allocating creatives by campaign burst period" /></figure>

      <h3>7. CreativesByDates</h3>
      <p>Like bursts, but tied to calendar dates instead of named burst periods. Example: 1st Apr plays Creative A,
      2nd Apr plays Creative B.</p>
      <figure><img src="assets/booking/mitype-by-dates.png" alt="MI example allocating creatives by specific calendar dates" /></figure>

      <h3>8. CreativesByDate&amp;Time</h3>
      <p>Precise dayparting — a specific date <em>and</em> time window gets its own creative. Example: 30th May
      12am–2pm plays Creative A, 30th May 2pm onward plays Creative B.</p>
      <figure><img src="assets/booking/mitype-by-date-and-time.png" alt="MI example allocating creatives by date and time window" /></figure>

      <h3>9. CreativesByConsecPanels</h3>
      <p>Panels are grouped into consecutive sets (e.g. Metro Consec panels), and each group gets its own creative,
      per the MI's groupings. Example: Consec Group 1 (4 panels, Crows Nest NSW) plays Creative 1, Consec Group 2
      (3 panels, VIC) plays Creative 2.</p>
      <figure><img src="assets/booking/mitype-by-consec-panels.png" alt="MI example allocating creatives by consecutive panel groupings" /></figure>

      <h3>10. CreativesByAddress</h3>
      <p>Creatives tied to a specific street address or site, not just a panel ID. Example: panel at 123 George St
      plays Creative A, panel at 456 Collins St plays Creative B.</p>
      <figure><img src="assets/booking/mitype-by-address.png" alt="MI example allocating creatives by street address" /></figure>

      <h3>11. CreativesByStates</h3>
      <p>Split by geographical state. Example: NSW panels get Creative A, VIC panels get Creative B.</p>
      <figure><img src="assets/booking/mitype-by-states.png" alt="MI example allocating creatives by state" /></figure>

      <h3>12. CreativesByProximity</h3>
      <p>Allocation is based on proximity to a location, not panel ID or dimension. Example: panels near a
      Woolworths play a specific creative during a set date range.</p>
      <figure><img src="assets/booking/mitype-by-proximity.png" alt="MI example allocating creatives by proximity to a location" /></figure>

      <h3>13. CreativesByCreativeName</h3>
      <p>Allocation is read directly off the creative's file name. Example: a file named
      <code>..._THURS_AUS.jpg</code> plays only on the days that name implies.</p>
      <figure><img src="assets/booking/mitype-by-creative-name.png" alt="MI example allocating creatives by creative file name" /></figure>

      <p class="callout">💡 If an MI doesn't cleanly match any of these 13, don't guess — that's exactly the kind of
      "unclear instructions" case the Metabase Compliance lesson covers.</p>
    `
  },
  {
    id: 'allocating-creatives-the-3-cases',
    title: 'Allocating Creatives: The 3 Cases',
    icon: 'shuffle',
    summary: 'The three common patterns for matching creatives to panels, and the errors to watch for.',
    body: `
      <p class="lead">Once you know the MIType, you still need to physically match each creative file to its panel.
      In practice, that almost always comes down to one of three cases.</p>

      <h3>Case 1 — Filling creatives through dimensions</h3>
      <p>When the MI instructs allocation by dimensions, copy the creatives from the Metabase creatives query into
      Case 1 of the creative allocation tool to get the final allocated list. Make sure the campaign name and
      supplier are correct before you run the query — a wrong supplier here silently returns the wrong creatives.</p>

      <h3>Case 2 — Filling creatives through panels</h3>
      <p>Check the MI for panels and their tagged creatives. Panels are usually unique, but the creative names in
      the MI are often incomplete — missing the <code>.mp4</code>/<code>.jpg</code> extension.</p>
      <p class="callout">⚠️ Two errors to watch for here: <strong>repeated panels</strong> and
      <strong>wrong creatives</strong>. Use the creative name from the MI as a subset to search the Metabase query
      results — if a match is found, populate the panel with the full creative name found there.</p>
      <p>Duplicate ("double-spotted") panels in the MI are fine — but check that both entries are tagged with the
      <em>same</em> creative. If they're not, treat them as genuinely different bookings, and use the dates to tell
      them apart.</p>

      <h3>Case 3 — Filling creatives through dimensions, with different advertisers</h3>
      <p>Same as Case 1, except panels can share a dimension while belonging to different advertisers. Don't assume
      same-dimension panels are interchangeable — always confirm the advertiser before allocating.</p>

      <p class="callout">💡 These three cases cover most bookings, but not all of them. When a booking doesn't fit
      any of the three, that's an escalation case — see the Metabase Compliance lesson.</p>
    `
  },
  {
    id: 'mistakes-to-avoid',
    title: 'Mistakes to Avoid',
    icon: 'alert-triangle',
    summary: 'The recurring mistakes that show up in Booking Form reviews — check this before you submit.',
    body: `
      <p class="lead">Every one of these has caused a real booking error at some point. Run through this list
      before you consider a BKF done.</p>
      <table class="content-table">
        <tr><td><strong>Fill every mandatory field</strong></td>
            <td>Panel ID, location display, format, screen size, creative, adLength, SOV, play instructions,
            start/end date on the panel row; campaign name, media agency, client, brand, OOH supplier, contract ID,
            campaign start/end date in the campaign details.</td></tr>
        <tr><td><strong>Watch the date format</strong></td>
            <td>IOs mix <code>DD/MM/YYYY</code> and <code>MM/DD/YYYY</code> — always confirm which one you're
            looking at, then convert to <code>YYYY-MM-DD</code> in the BKF.</td></tr>
        <tr><td><strong>Digital panels only</strong></td>
            <td>Never book a non-digital panel.</td></tr>
        <tr><td><strong>Skip Bonus – STA / STA – Bonus panels</strong></td>
            <td>Standard and every other booking type is fine — these two specifically are not booked.</td></tr>
        <tr><td><strong>Screen size comes from the IO</strong></td>
            <td>Not from the Format Checker — the Format Checker is only for validating tracked panels, format,
            and supplier.</td></tr>
        <tr><td><strong>Don't include untracked panels</strong></td>
            <td>If the Format Checker doesn't return a result, don't add that panel to the BKF.</td></tr>
        <tr><td><strong>Check the media owner per panel</strong></td>
            <td>A single IO can mix panels from multiple media owners.</td></tr>
        <tr><td><strong>Double-check dimension-based creative matches</strong></td>
            <td>Same-dimension panels can carry different advertisement creative.</td></tr>
        <tr><td><strong>Escalate repeated bursts</strong></td>
            <td>If a burst reuses the same panels more than 2–3 times, flag it to the AM before booking.</td></tr>
        <tr><td><strong>Trim whitespace</strong></td>
            <td>Before booking — stray spaces break matching.</td></tr>
        <tr><td><strong>Use the formatter tools</strong></td>
            <td>They exist specifically to make this data manipulation less error-prone — don't hand-format when a
            tool already does it.</td></tr>
      </table>
    `
  },
  {
    id: 'metabase-compliance-and-escalation',
    title: 'Metabase Compliance & Escalation Rules',
    icon: 'shield-check',
    summary: 'When you can deviate from the MI, how to get sign-off, and what to do when something looks wrong.',
    body: `
      <p class="lead">The MI is the client's signed agreement — but real campaigns have gaps, conflicts, and late
      creatives. This is the rulebook for handling those cases without guessing.</p>

      <h3>🥇 Rule 1: Always Follow the MI — the Golden Rule</h3>
      <p>The Media Instruction is exactly what the client agreed to. We schedule based on the MI, not on whatever
      the media owner happens to be playing — otherwise we lose our core value as an independent check. The
      exceptions below are the <em>only</em> cases where you lean on Metabase instead.</p>

      <h3>🔍 When Metabase overrides the MI</h3>
      <table class="content-table">
        <tr><td><strong>Missing or unclear instructions</strong></td>
            <td>No specific creative allocation given but multiple creatives fit the dimensions; overdue items with
            no clear MI; IO and MI show different first-burst start dates; IO/MI don't give the complete panel ID
            (e.g. Civic Outdoor <code>6216</code> — check Metabase for whether it's <code>6216-O-D</code> or
            <code>6216-i-D</code>); creatives dispatched late (book based on when tracking actually started).</td></tr>
        <tr><td><strong>Creative variations & logistics</strong></td>
            <td>Creatives share the exact same ad messaging; panels mix 4K and HD creatives; JPG and MP4 versions
            exist at the same spec; creative proximity affects usage; a creative swap involves timetracks/timestamps;
            the MI names a creative that isn't on Collab (check Metabase for what the supplier actually plays).</td></tr>
        <tr><td><strong>AM instruction</strong></td>
            <td>An Account Manager has confirmed and explicitly instructed a booking based on Metabase results.</td></tr>
      </table>

      <h3>✅ Rule 2: The 3-Step Approval Rule</h3>
      <p>Any booking that leans on Metabase instead of the MI needs all three of these, in order:</p>
      <ol>
        <li><strong>Get approval.</strong> A Campaign Manager must approve the Metabase-based booking before you
        action it.</li>
        <li><strong>Ask in Slack.</strong> Request that approval explicitly in your team's booking channel.</li>
        <li><strong>Log it in Monday.com.</strong> Leave a comment on the campaign's card once the booking is
        done — that's your audit trail.</li>
      </ol>
      <p class="callout">💡 The exact Slack channel differs by team — some teams use <code>#booking</code>, the PH
      team uses <code>#party-parrots</code>. Check which one applies to you before asking for approval.</p>

      <h3>🚩 Booking date mismatch — flag to the AM</h3>
      <p>If a panel's booking dates in the IO don't match that panel's creative booking dates in the MI,
      <strong>don't action it.</strong> Flag it to the AM immediately so it's clarified before anything goes live —
      a mismatch like this can put the wrong creative on a panel at the wrong time.</p>

      <h3>📁 Formatting, naming, and uploading files</h3>
      <p>Strict, consistent MI/IO file naming keeps our documentation searchable for everyone on the team — always
      name your MI file with the correct <code>MIType</code> tag (see the MIType reference lesson). If an updated
      IO or MI arrives by email or any channel outside Collab, upload it into Collab before continuing — Collab is
      our single source of truth for booking information.</p>

      <p class="callout">📚 Come across something unusual — a quirk, an exception, anything that doesn't follow the
      standard process? Log it in the <strong>Bookings Knowledge Base</strong> so the next person doesn't have to
      rediscover it.</p>
    `
  }
];

const BOOKING_TEAM_QUIZ = [
  {
    q: 'When an oOh!Media or OAC IO contains Bishopp, EI Media, Paradise, GOA, CIVIC, Big Outdoor, or Stream panels, what should you do?',
    options: [
      'Book them on a separate form',
      'Skip them entirely',
      'Book them together with the rest — it works fine',
      'Convert them to a different media owner first'
    ],
    correct: 0,
    lesson: 'filling-a-booking-form'
  },
  {
    q: 'For JCD IOs that use 1, 2, 3 as SOV shorthand, what does "2" convert to?',
    options: ['5%', '10%', '15%', '20%'],
    correct: 1,
    lesson: 'filling-a-booking-form'
  },
  {
    q: 'What should you double-check after completing steps 1–7 of the IO part, especially for LF panels?',
    options: [
      'The client\'s billing address',
      'The panel\'s spec in Panel ID Search, since IOs sometimes list the wrong dimensions',
      'The Slack approval thread',
      'The Monday.com card color'
    ],
    correct: 1,
    lesson: 'filling-a-booking-form'
  },
  {
    q: 'Which MIType fits: "The 1920×1080 creative goes to all 1920×1080 panels," with no panel names or IDs given?',
    options: ['CreativesByPanels', 'CreativesByDimensions', 'CreativesByFormat', 'CreativesByStates'],
    correct: 1,
    lesson: 'mitype-full-reference'
  },
  {
    q: 'Which MIType allocates creatives down to a specific date AND time window (e.g. 30th May, 12am–2pm)?',
    options: ['CreativesByDates', 'CreativesByBurstDates', 'CreativesByDate&Time', 'CreativesByConsecPanels'],
    correct: 2,
    lesson: 'mitype-full-reference'
  },
  {
    q: 'Which MIType is read directly off the creative file\'s name (e.g. "..._THURS_AUS.jpg")?',
    options: ['CreativesByCreativeName', 'CreativesByAddress', 'CreativesByProximity', 'CreativesByPanels'],
    correct: 0,
    lesson: 'mitype-full-reference'
  },
  {
    q: 'In Case 2 (allocating creatives through panels), what are the two errors to watch for?',
    options: [
      'Wrong dates and wrong contract IDs',
      'Repeated panels and wrong creatives',
      'Missing SOV and missing adLength',
      'Wrong media owner and wrong currency'
    ],
    correct: 1,
    lesson: 'allocating-creatives-the-3-cases'
  },
  {
    q: 'In Case 3, why can\'t you assume same-dimension panels are interchangeable?',
    options: [
      'They might belong to different advertisers',
      'They always have different SOV',
      'They\'re never digital',
      'They come from different Booking Forms'
    ],
    correct: 0,
    lesson: 'allocating-creatives-the-3-cases'
  },
  {
    q: 'Which two booking types should never be booked?',
    options: ['Standard and Guaranteed', 'Bonus – STA and STA – Bonus', 'Digital and Classic', 'Burst and Consec'],
    correct: 1,
    lesson: 'mistakes-to-avoid'
  },
  {
    q: 'When should a burst be escalated to the AM before booking?',
    options: [
      'Whenever it includes more than 5 panels',
      'If it reuses the same panels more than 2–3 times',
      'Whenever it spans more than one state',
      'Never — bursts don\'t need escalation'
    ],
    correct: 1,
    lesson: 'mistakes-to-avoid'
  },
  {
    q: 'What are the 3 steps of the Approval Rule, in order?',
    options: [
      'Log Monday.com → ask Slack → get CM approval',
      'Get CM approval → ask in Slack → log it in Monday.com',
      'Ask in Slack → book it → get CM approval',
      'Get AM approval → get CM approval → book it'
    ],
    correct: 1,
    lesson: 'metabase-compliance-and-escalation'
  },
  {
    q: 'If a panel\'s IO booking dates don\'t match its MI creative dates, what should you do?',
    options: [
      'Book based on the IO dates',
      'Book based on the MI dates',
      'Don\'t action it — flag it to the AM immediately',
      'Split the difference between the two dates'
    ],
    correct: 2,
    lesson: 'metabase-compliance-and-escalation'
  }
];

const BOOKING_TRACKS = [
  {
    id: 'booking-core-concepts',
    title: 'Core Concepts',
    icon: 'book-open',
    status: 'available',
    tagline: 'What a booking is, how campaigns get set up, and the concepts everyone on the team should know.',
    lessons: BOOKING_LESSONS,
    quiz: BOOKING_QUIZ,
    legacyProgress: false
  },
  {
    id: 'booking-team',
    title: 'Bookings Team',
    icon: 'calendar-check',
    status: 'available',
    tagline: 'Daily/weekly operational tasks and setup checklists for the bookings team.',
    lessons: BOOKING_TEAM_LESSONS,
    quiz: BOOKING_TEAM_QUIZ,
    legacyProgress: false
  }
];

// ---------------------------------------------------------------------------
// Module → Tracks map
// ---------------------------------------------------------------------------

const MODULE_TRACKS = {
  programmatic: PROGRAMMATIC_TRACKS,
  booking: BOOKING_TRACKS
};
