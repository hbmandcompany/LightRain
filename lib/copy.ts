const heroDescription =
  "LightRain is the read-only iOS observability application for the LightRain execution stack on Base. It renders every position, every reconciliation, every oracle attestation, in real time. It does not sign transactions. It does not move funds. It is the eyes of the stack, never the hands.";

export const gateway = {
  returnLink: { label: "← Retour à LightRain", href: "/" },
  headerSuffix: "Institutional app",
  heroEyebrow: "iOS · read-only · application gateway",
  heroSecondaryCta: "Continue to TestFlight →",
  heroSubline:
    "Sign in to your institutional LightRain instance, or request a TestFlight invitation.",
} as const;

export const copy = {
  meta: {
    description: heroDescription,
  },

  header: {
    wordmark: "LightRain",
    nav: [
      { label: "Protocol", href: "#protocol" },
      { label: "App", href: "#app" },
      { label: "Architecture", href: "#architecture" },
      { label: "Trust", href: "#trust" },
      { label: "Hated By Many", href: "#company" },
    ],
    requestAccess: "Request access",
  },

  footer: {
    wordmark: "LightRain",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Overview", href: "#overview" },
          { label: "App", href: "#application" },
          { label: "Roadmap", href: "#access" },
        ],
      },
      {
        title: "Protocol",
        links: [
          { label: "Architecture", href: "#architecture" },
          { label: "Security", href: "#trust" },
          { label: "PIOL oracle", href: "#protocol" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "Hated By Many LLC", href: "#company" },
          { label: "Legal", href: "#company" },
          { label: "Privacy", href: "#company" },
        ],
      },
      {
        title: "Contact",
        links: [
          { label: "press", href: "mailto:press@lightra.in" },
          { label: "partnerships", href: "mailto:partnerships@lightra.in" },
          { label: "institutional access", href: "#access" },
        ],
      },
    ],
    copyright:
      "Operated by Hated By Many LLC. LightRain is a registered trademark of Hated By Many LLC.",
    buildLabel: "Build",
  },

  hero: {
    eyebrow: "iOS · read-only · institutional",
    headline: "The trust layer of LightRain execution, on a phone.",
    body: heroDescription,
    primaryCta: "See the architecture",
    secondaryCta: "Request institutional access",
    metrics: [
      { label: "Notional reconciled", value: "$1.84B" },
      { label: "Avg push latency", value: "214 ms" },
      { label: "Active institutions", value: "47" },
      { label: "Chains observed", value: "Base" },
    ],
  },

  constraint: {
    eyebrow: "Section 01 · the constraint",
    headline: "It cannot move funds. That is the entire product.",
    leftColumn:
      "Most fintech mobile applications must defend a perimeter that includes the ability to move money. LightRain has no such perimeter, by construction. The application is signed, but it does not sign. The application reads, but it cannot write. The Read API it consumes physically does not implement write endpoints; the execution backend that holds the keys lives on a separate VPC with no peering, no shared identity, no path through which a compromised phone could reach it.",
    cannotItems: [
      "cannot execute trades",
      "cannot trigger smart contracts",
      "cannot initiate flash loans",
      "cannot sign transactions",
      "cannot custody funds",
      "cannot connect a wallet for execution",
      "cannot modify on-chain state",
    ],
    pullQuote:
      "The worst case for a stolen device is data exfiltration of positions the attacker is supposed to see.",
  },

  fourLayers: {
    eyebrow: "Section 02 · the stack",
    headline: "Four systems. One pane of glass.",
    caption:
      "Each layer does exactly one thing. The boundaries are architectural, not procedural.",
    cards: [
      {
        layerLine: "Execution layer · Base",
        eyebrow: "01 · execution",
        title: "Base",
        body: "Coinbase's Layer 2, where every flash loan, credit position, and strategy router call originates. Outside the application entirely.",
        detail: "USDC native · 2s blocks · sequencer-protected",
      },
      {
        layerLine: "Truth layer · PIOL",
        eyebrow: "02 · truth",
        title: "PIOL",
        body: "The Proof of Integrity and Off-chain Linkage oracle. Reconciles on-chain reality against modeled expectation. Signed by an attester quorum, three of five required.",
        detail: "Hybrid · multi-sig · on-chain attested",
      },
      {
        layerLine: "State layer · MongoDB",
        eyebrow: "03 · state",
        title: "MongoDB",
        body: "The application's working memory. Positions, executions, reconciliations, alerts, watchlists, session state. Hydrated by indexers, by the Snowflake materializer, and by PIOL.",
        detail: "Document-shaped · change streams · sub-second",
      },
      {
        layerLine: "Risk warehouse · Snowflake",
        eyebrow: "04 · risk",
        title: "Snowflake",
        body: "Where the heavy lifting of risk modeling happens. Backtests, attribution, counterparty exposure, compliance extracts. Materialized into Mongo on a schedule the user never sees.",
        detail: "Marts updated 15-minute · jobs queued",
      },
    ],
  },

  dataFlow: {
    eyebrow: "Section 03 · data flow",
    headline: "One direction. No exceptions.",
    body: "An on-chain event becomes a row in Mongo within a second. PIOL reconciles it against Snowflake's model output and emits an attested integrity score. The application reads what is already settled. Nothing the user does inside LightRain produces a write to any system that holds capital.",
  },

  modules: {
    eyebrow: "Section 04 · what you see",
    headline: "Four surfaces. One language.",
    body: "LightRain ships with four feature surfaces, one tab each. The visual language across all four is the same: black ink on white surface, hairline rules, dense typographic hierarchy, no decorative chrome. Color is reserved for state, never for decoration.",
    items: [
      {
        tabEyebrow: "Tab 01",
        title: "Portfolio Visibility",
        description:
          "Where the money stands, right now. Open credit positions with health factors and distance to liquidation. Liquidity exposure by strategy, sortable by deployed notional or by oracle-derived risk score. Historical execution logs paginated and filterable. A net-exposure summary that walks the strategy specs and tells you how much of each underlying asset you are actually long.",
        features: [
          "Open positions table",
          "Strategy exposure with risk bars",
          "Execution log with on-chain hash linking",
          "Net exposure rollup",
          "BaseScan deep links",
        ],
      },
      {
        tabEyebrow: "Tab 02",
        title: "Strategy Analytics",
        description:
          "Where Snowflake earns its keep. Backtests of strategy specifications against historical Base state. Simulated flash loan outcomes scrubbed minute by minute through the last 24 hours. Routing efficiency metrics — slippage versus quote, gas versus simulation, pool distribution. Oracle-derived risk score broken into its five subscores. Comparative performance across up to three strategies on one chart.",
        features: [
          "Backtest viewer",
          "Simulated flash loan outcomes",
          "Routing efficiency",
          "Oracle risk score components",
          "Comparative overlay",
        ],
      },
      {
        tabEyebrow: "Tab 03",
        title: "Oracle Transparency",
        description:
          "The trust layer made visible. A composite system trust score updated continuously. The reconciliation feed with every event tagged by integrity score. The on-chain-versus-modeled scatter plot where clusters off the diagonal tell a regulator a different story than alignment does. The audit trail viewer that walks any single financial action through its entire lifecycle from indexer to phone.",
        features: [
          "System trust score",
          "Reconciliation feed",
          "Alignment scatter",
          "Audit trail viewer",
          "Mismatch subscriptions",
        ],
      },
      {
        tabEyebrow: "Tab 04",
        title: "Alerts",
        description:
          "The inbox. Push notifications delivered through APNs persist as a searchable record regardless of whether the lock-screen push was dismissed. Liquidation risk, strategy failure, collateral health velocity, oracle mismatch, unusual exposure. Every alert deep-links to its detail surface. No alert offers an action button beyond view, because there are no actions to offer.",
        features: [
          "Liquidation risk thresholds",
          "Strategy divergence alerts",
          "Health factor velocity",
          "Oracle integrity floors",
          "APNs persistent inbox",
        ],
      },
    ],
  },

  phoneMock: {
    eyebrow: "Section 05 · the application",
    headline: "Built native. Rendered black on white.",
    body: "LightRain is a native SwiftUI application. Charts are Swift Charts, not embedded web views. Data flows over GraphQL with WebSocket deltas. The interface respects the system at every level — Face ID gates launch, sensitive views require re-authentication, Dynamic Type and accessibility settings apply throughout.",
    screenTitle: "Portfolio",
    stats: [
      { label: "Total notional", value: "$4.2M" },
      { label: "Health factor", value: "2.31" },
      { label: "24h P&L", value: "+$8,420" },
    ],
    positions: [
      { pair: "USDC / ETH", notion: "$1.10M", risk: 0.72 },
      { pair: "cbBTC / USDC", notion: "$842k", risk: 0.54 },
      { pair: "WETH / USDbC", notion: "$620k", risk: 0.61 },
      { pair: "AERO / USDC", notion: "$410k", risk: 0.38 },
    ],
    tabs: ["Portfolio", "Analytics", "Oracle", "Alerts"],
    annotations: [
      {
        eyebrow: "01 · live deltas / WebSocket",
        label: "GraphQL subscription channel",
        mono: "graphql-ws · gzip",
      },
      {
        eyebrow: "02 · Face ID gated / on-device",
        label: "Biometric session boundary",
        mono: "LAContext · secure enclave",
      },
      {
        eyebrow: "03 · oracle integrity / per-event",
        label: "PIOL score on every delta",
        mono: "attested · quorum 3/5",
      },
      {
        eyebrow: "04 · no execution / read-only",
        label: "No signing affordances",
        mono: "GET-only · signed JWT",
      },
    ],
  },

  trust: {
    eyebrow: "Section 06 · trust",
    headline: "The perimeter is read. Nothing more.",
    cards: [
      {
        eyebrow: "Stolen device",
        title: "No path to keys",
        body: "The application has no signing capability and no transport to any system that signs. A stolen, unlocked device exposes read access to data the legitimate user could already see.",
      },
      {
        eyebrow: "Compromised credential",
        title: "No write to promote",
        body: "A phished session yields read access. There is no write authority at the API layer to escalate into. The Read API runs on hosts with no network path to the execution backend.",
      },
      {
        eyebrow: "Mongo corruption",
        title: "Truth lives upstream",
        body: "Mongo is working memory, not source of truth. Source of truth on-chain is Base, source of truth analytical is Snowflake. Corruption surfaces as a PIOL divergence within the next reconciliation window.",
      },
      {
        eyebrow: "PIOL attester",
        title: "Three of five required",
        body: "Single attester compromise cannot produce valid signatures. Attesters are economically bonded; sustained malicious behavior loses staked capital, not protocol funds.",
      },
      {
        eyebrow: "Side-loaded build",
        title: "Read API refuses",
        body: "A malicious binary talking to the legitimate API still cannot move funds because the API does not implement writes. A binary talking to a malicious API is a phishing attack on read data.",
      },
      {
        eyebrow: "Network boundary",
        title: "VPCs do not peer",
        body: "Read API and execution backend live in separate VPCs with no peering. The execution backend's outbound policy explicitly denies the Read API's IP range. Architecture, not policy.",
      },
    ],
  },

  institutional: {
    eyebrow: "Section 07 · who this is for",
    headline: "Built for the people who watch, audit, and verify.",
    columns: [
      {
        title: "Funds",
        body: "Allocators and PMs at crypto-native funds who need real-time visibility into protocol exposure without trading authority on the same surface. LightRain installs on every analyst's phone without touching the firm's signing infrastructure.",
      },
      {
        title: "Auditors",
        body: "External and internal auditors who need an attested, exportable, time-stamped record of every reconciliation event. The audit trail viewer is the artifact auditors will demand and that LightRain delivers without configuration.",
      },
      {
        title: "Compliance",
        body: "Regulators and compliance officers who need to see the protocol's posture without privileged access. Read-only is not a limitation here. It is the premise of the institutional relationship.",
      },
    ],
  },

  access: {
    eyebrow: "Section 08 · access",
    headline: "Institutional access by request.",
    body: "LightRain is in private TestFlight. Access is granted to institutional counterparties, allocators, and audit firms working with the LightRain stack. Submit your firm and we will be in touch within five business days.",
    form: {
      name: "Name",
      firm: "Firm",
      email: "Work email",
      role: "Role",
      why: "Why LightRain",
      submit: "Request access",
      success:
        "Received. We respond within five business days where there is a fit.",
    },
    aside: {
      lines: [
        "press@lightra.in",
        "partnerships@lightra.in",
        "Hated By Many LLC · Texas",
      ],
    },
  },
} as const;
