/* =============================================================
   SINGLE SOURCE OF TRUTH — edit this file only.
   Drives both the web resume (index.html) and the LinkedIn text
   (the "Copy LinkedIn text" button generates it from here).
   ============================================================= */

const RESUME = {
  name: "Simon Liu",
  role: "Tech Lead · DevOps / SRE",
  tagline: "building & securing cloud infrastructure at scale",
  location: "Taipei City, Taiwan",

  // Contact.
  linkedin: "linkedin.com/in/tysliu",
  linkedinUrl: "https://www.linkedin.com/in/tysliu",
  github: "github.com/tysliu",
  githubUrl: "https://github.com/tysliu",

  // LinkedIn headline (used only by the LinkedIn text export).
  headline: "Tech Lead · DevOps/SRE | Building & Securing Cloud Infrastructure at Scale | Kubernetes, Terraform, Security",

  // Three skills to pin under LinkedIn > Skills.
  topSkills: ["Kubernetes", "Terraform", "Site Reliability Engineering (SRE)"],

  summary: [
    "I build and secure cloud infrastructure that stays reliable at scale — standing up platforms from 0 to 1 and hardening them as they grow. Over 13+ years I've grown from backend engineer to DevOps/SRE tech lead, leading the teams and platforms behind products serving 1M+ daily users and 2M+ requests per minute.",
    "What I care about: reliability, security, cost efficiency, and leveling up the people around me. Outside of work I'm a triathlete — the same appetite for endurance and marginal gains shows up in how I approach systems."
  ],

  skills: [
    { cat: "cloud/platforms",  items: ["AWS", "GCP", "Azure"] },
    { cat: "containers/iac",   items: ["Kubernetes", "Docker", "Terraform", "Packer", "Ansible", "Helm"] },
    { cat: "ci-cd/automation", items: ["CI/CD pipelines", "GitHub Actions", "GitLab CI", "Azure DevOps", "Argo CD", "GitOps"] },
    { cat: "observability",    items: ["Grafana LGTM", "ELK", "Datadog", "New Relic", "Sentry"] },
    { cat: "data",             items: ["MySQL", "PostgreSQL", "Redis", "Kafka", "BigQuery"] },
    { cat: "security",         items: ["Intel SGX", "Secret management", "Privileged access control", "Vulnerability remediation"] },
    { cat: "languages",        items: ["Python", "Rust", "Ruby on Rails", "Solidity"] }
  ],

  // Featured products/projects — rendered as its own section, above Experience.
  projects: [
    {
      name: "CDC Vault",
      org: "Crypto.com",
      role: "Sr. Blockchain Security DevOps",
      date: "2025 – 2026",
      blurb: "Secure blockchain custody platform for a top global crypto exchange.",
      bullets: [
        "Architected and operated secure multi-cloud (AWS & Azure) custody infrastructure using K8s and Terraform.",
        "Led an Intel SGX chip upgrade and rollout for hardware-backed cryptographic protection and trusted execution.",
        "Operated 40+ blockchain nodes across protocols, owning monitoring, version upgrades, and data pruning."
      ]
    },
    {
      name: "exchange.xrex.io",
      org: "XREX Inc.",
      role: "Lead DevOps / SRE",
      date: "2021 – 2025",
      url: "https://exchange.xrex.io",
      blurb: "Cross-border fintech exchange for emerging markets.",
      bullets: [
        "Led a team of 4 owning DevOps/SRE for the exchange across all environments.",
        "Planned and led a complex production region migration (Tokyo → Singapore) for compliance — 30 microservices and all dependencies, completed within the targeted 10-hour window.",
        "Introduced Infrastructure as Code (AWS + Terraform) as the standard for every environment."
      ]
    },
    {
      name: "Dragon Ball Z Dokkan Battle",
      org: "Akatsuki Taiwan Inc.",
      role: "Sr. Server Engineer",
      date: "2016 – 2018",
      blurb: "One of the world's long-running top-ranked mobile games (2M+ RPM, 1M+ DAU).",
      bullets: [
        "Owned the server side, driving solutions across system bottlenecks and product features.",
        "Scaled the platform from 40k to 2M+ requests per minute as the audience grew.",
        "Led a team of 4 and built the customer support system and operation tooling from scratch.",
        "Ran regular stress tests to keep the game stable at massive concurrent load."
      ]
    }
  ],

  experience: [
    {
      company: "Crypto.com",
      handle: "crypto.com",
      role: "Sr. Blockchain Security DevOps",
      date: "May 2025 – Jul 2026",
      location: "Taiwan",
      blurb: "Secured and automated blockchain custodian infrastructure for a top global crypto platform.",
      bullets: [
        "Architected and operated secure multi-cloud environments (AWS & Azure) using K8s and Terraform, enforcing a strict security posture across mission-critical custody.",
        "Led an Intel SGX chip upgrade and rollout for hardware-backed cryptographic protection and trusted execution.",
        "Planned and implemented disaster recovery to keep custody operational should the primary network fail."
      ]
    },
    {
      company: "XREX Inc.",
      handle: "xrex.io",
      role: "Lead DevOps / SRE",
      date: "Aug 2021 – Mar 2025",
      location: "Taipei, Taiwan",
      blurb: "Led DevOps/SRE for a cross-border fintech, improving velocity, stability, and observability through strong cross-team execution.",
      bullets: [
        "Led and grew a DevOps/SRE team of 4, setting technical direction across all environments.",
        "Planned and led a complex production region migration (Tokyo → Singapore) for compliance — 30 microservices and all dependencies, completed within the targeted 10-hour window.",
        "Introduced and championed Infrastructure as Code (AWS + Terraform) across all environments, and trained peers to adopt it.",
        "Rolled out source-controlled schema migrations across applications and environments, replacing ad-hoc manual changes.",
        "Consolidated Jenkins pipelines to cut manual effort in onboarding and debugging services; automated deployments and Jira ticket routing.",
        "Audited infrastructure for SPOFs and security weaknesses; advised backend teams on stack choices and feature reviews."
      ],
      note: "Also a Blockchain Engineer: shipped Solidity smart contracts for the DeFi roadmap; presented internal research on Diamond Proxy, rentable NFTs, and relay contracts."
    },
    {
      company: "Akatsuki Taiwan Inc.",
      handle: "akatsuki.tw",
      role: "Sr. Developer",
      date: "Jan 2016 – Jan 2021",
      location: "Taipei, Taiwan",
      blurb: "Senior server-side engineer on two of the studio's largest mobile-game titles.",
      projects: [
        {
          title: "One Piece BonBon! Journey (2018–2021)",
          bullets: [
            "Key decision-maker from concept through launch of the company's largest, most heavily invested project.",
            "Led the server side and kept communication tight across a 100+ person multinational team.",
            "Designed scalable core features to reignite the audience's passion for a globally known IP.",
            "Owned CI/CD, infrastructure-as-code, BigQuery logging, BI reporting, and internal operation tools.",
            "Ran regular stress tests to keep the product stable well above 1M RPM."
          ]
        },
        {
          title: "Dragon Ball Z Dokkan Battle (2016–2018)",
          bullets: [
            "Drove solutions across system bottlenecks and product features for one of the world's long-running top-ranked mobile games (2M+ RPM, 1M+ DAU).",
            "Led a team of 4 and partnered with cross-functional teams to build a customer support system and operation tooling from scratch."
          ]
        }
      ],
      tools: "Ruby on Rails, RSpec, Docker, AWS (Aurora, Lambda, SQS, CloudFormation), Redis, Memcache, BigQuery, New Relic, jQuery, CoffeeScript."
    },
    {
      company: "Faria Systems",
      handle: "faria.systems",
      role: "Sr. Developer",
      date: "Oct 2014 – Oct 2015",
      location: "Taipei, Taiwan",
      blurb: "Built multi-tenant applications serving thousands of schools.",
      bullets: [
        "Message Queue (cross-system data sync): implemented a diagnosis/auto-correction system, added system-specific sync rules, and expanded unit/integration tests.",
        "LaunchPad (single sign-on across all products): built and improved the session-handling API, managed a team of two, and reviewed code for quality."
      ],
      tools: "Ruby on Rails, RSpec, CircleCI, PostgreSQL, MySQL, RabbitMQ, Elasticsearch, Airbrake, New Relic, jQuery, CoffeeScript."
    },
    {
      company: "BBINTECH Digital Entertainment",
      handle: "bbintech",
      role: "Software Engineer",
      date: "Nov 2012 – Oct 2014",
      location: "New Taipei, Taiwan",
      bullets: [
        "Initiated database architecture and implemented replication across MySQL and NoSQL stores.",
        "Led a team of 3 to build operational tooling and BI reports for game operations."
      ],
      tools: "Ruby on Rails, MySQL, NoSQL, Node.js, jQuery, Git."
    },
    {
      company: "Code Green IT",
      handle: "code-green-it",
      role: "Web Application Developer",
      date: "May 2012 – Oct 2012",
      location: "Taipei, Taiwan",
      bullets: [
        "Built features for golf membership and score-tracking applications."
      ],
      tools: "Ruby on Rails, MySQL, HTML, CSS, Git, RVM, TDD."
    }
  ],

  education: [
    {
      school: "University of Waterloo",
      degree: "Bachelor of Science",
      year: "2011",
      detail: "Coursework: computer science, bioinformatics, biotechnology, chemistry, biology."
    }
  ],

  languages: [
    { name: "English", level: "native / bilingual" },
    { name: "Chinese", level: "native / bilingual" }
  ]
};
