import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Tobalo Torres-Valderas",
  initials: "TTV",
  location: "Texas",
  locationLink: "https://www.google.com/maps/place/Texas",
  about:
    "Systems Architect, Software Developer, Investor, Entrepreneur, Advisor, Analyst, and most importantly a Life Long Student",
  summary: (
    <>
      Tobalo is a technical business leader with over 9 years of experience in
      IT and Cloud for both Enterprise and Startups. Recent work has been
      developing agentic workflows and embedded AI agents into workflows and
      processes. Strong awareness of state of the art and latest techniques for
      cloud and AI engineering.
    </>
  ),
  avatarUrl: "https://cdn.fwtx.city/headshot.jpeg",
  personalWebsiteUrl: "https://tobalo.me",
  contact: {
    email: "t@jedi-ops.dev",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/tobalo",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tobalo/",
        icon: "linkedin",
      },
      {
        name: "X",
        url: "https://x.com/tobalotv",
        icon: "x",
      },
    ],
  },
  education: [
    {
      school: "Texas State University",
      degree: "Bachelor's Degree in Computer Information Systems",
      start: "2014",
      end: "2018",
    },
  ],
  work: [
    {
      company: "WhitegloveAI",
      link: "https://whitegloveai.com",
      badges: ["Agentics", "Technical Enablement", "Management"],
      title: "VP, AI Lab",
      start: "Aug 2024",
      end: null,
      description: (
        <ul className="list-inside list-disc">
          <li>
            Lead engineering team to design AI-based data engineering workflows
            for complex business documents, improving data serialization,
            structured outputs, and process automation, saving 1000+ hours for
            clients.
          </li>
          <li>
            Designed and engineered state-of-the-art AI-enabled document OCR
            pipelines.
          </li>
          <li>
            Provided strategic advice on AI industry updates for product
            strategy and technical due diligence.
          </li>
          <li>
            Developed multi-model AI agents for regulated industries using Go,
            Python, and TypeScript.
          </li>
          <li>
            Lead Architect on AI engineering design, delivery, and tailored
            solutions consulting.
          </li>
        </ul>
      ),
    },
    {
      company: "Y2",
      link: "https://y2.dev",
      badges: ["Bootstrap", "Product Engineering", "FinOps", "Strategy"],
      title: "Founder",
      start: "Aug 2024",
      end: null,
      description: (
        <ul className="list-inside list-disc">
          <li>
            Architected and shipped multiple re-platform iterations integrating
            OSINT data mining for niche information flow; y2.dev flagship
            product serving global investors, analysts, and researchers.
          </li>
          <li>
            Technical consultant for Cloud & AI engineering, developing
            autonomous agents for real-time intelligence gathering and analysis;
            designed scalable webhook/API infrastructure and cloud-native
            solutions across Cloudflare, Vercel, Docker, and Postgres.
          </li>
          <li>
            Consulted clients on end-to-end systems architecture using
            TypeScript, Python, Golang, Next.js, PostgreSQL; designed pub/sub
            and event-driven architectures integrating multi-modal AI workflows
            with LangGraph, Mastra, Agno, and CrewAI.
          </li>
          <li>
            Established multi-tier content strategy producing executive
            briefings, insider trading analysis, cybersecurity newsletters, and
            reindustrialization intelligence for American manufacturing and
            Industry 4.0 transformation.
          </li>
          <li>
            Bootstrapped profitable platform from concept with zero external
            funding; implemented FinOps best practices and business automation
            systems while managing P&L and scaling technical capabilities.
          </li>
          <li>
            <b>Skills:</b> Business Strategy, Product Development, Strategic
            Planning
          </li>
        </ul>
      ),
    },
    {
      company: "Oracle",
      link: "https://oracle.com",
      badges: [
        "Enterprise",
        "OCI",
        "Security",
        "Databases",
        "Customer Success",
      ],
      title: "Solutions Architect",
      start: "Aug 2018",
      end: "Jul 2024",
      description: (
        <ul className="list-inside list-disc">
          <li>
            Driven ~$25mm OCI ACR. Partnered with sales to build organizational
            relationships for business & technical problems.
          </li>
          <li>
            Designed and deployed OCI landing zones for data center
            consolidation & migrations.
          </li>
          <li>
            Onboarded customer tenancies to expedite time-to-consumption and
            ensure delivery success.
          </li>
          <li>
            Deepened Cloud-Native engineering relationships in the OCI
            ecosystem.
          </li>
          <li>Liaison for pain points from P0 security to CSAT/CX/XDR.</li>
          <li>
            Advised day 2 operational excellence best practices with
            cloud-native methodologies.
          </li>
          <li>
            Augmented XDR resolution times by 2x through cross-functional
            collaboration.
          </li>
          <li>
            Finalist in Accenture OCI 2023 mastermind hackathon (space &
            satellite innovation) and 2024 Mastermind (edgeAI for emergency
            response).
          </li>
          <li>Led program for OCI-C-&gt;OCI upgrades for 150+ clients.</li>
          <li>
            Advised cloud security posture assessments and audits per CIS
            standards.
          </li>
          <li>
            Certified OCI Security Professional & Architect. TPM Tiger Team for
            Oracle@Azure.
          </li>
          <li>
            Field researcher in OCI strategic innovation - AI & Blockchain.
          </li>
          <li>
            <b>Published Blogs:</b>{" "}
            <span className="inline-flex gap-2">
              <a
                href="https://blogs.oracle.com/cloud-infrastructure/post/reimagining-edge-data-analysis-llms-opensource"
                className="font-semibold underline underline-offset-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                📝 Edge Data Analysis with LLMs
              </a>
              <span className="text-gray-400">|</span>
              <a
                href="https://blogs.oracle.com/developers/post/empower-your-analysts-with-natural-language-querying-at-the-edge"
                className="font-semibold underline underline-offset-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                📝 Natural Language Querying at the Edge
              </a>
            </span>
          </li>
          <li>
            <b>Skills:</b> Business Development, Strategic Planning, Data
            Analysis, Solution Architecture
          </li>
        </ul>
      ),
    },
    {
      company: "Freelance",
      link: "",
      badges: ["Wordpress", "HTML/CSS", "Vanilla JS"],
      title: "Web Developer",
      start: "Nov 2016",
      end: "Aug 2018",
      description: "Web development for various clients.",
    },
    {
      company: "Texas State University",
      link: "https://www.txstate.edu/",
      badges: ["SOC", "NOC"],
      title: "Analyst - Network Operations Center",
      start: "Apr 2016",
      end: "May 2018",
      description: (
        <ul className="list-inside list-disc">
          <li>
            Monitored Texas State University System NOC for anomalies in HVAC,
            network outages, and security incidents.
          </li>
          <li>
            Trained new employees on support operations and data center
            monitoring.
          </li>
          <li>
            Responded to critical systems escalations for faculty, staff, and
            students.
          </li>
        </ul>
      ),
    },
    {
      company: "McCoy Corporation",
      link: "https://www.mccoy.com/",
      badges: ["IT Automation"],
      title: "Information Systems Specialist",
      start: "Aug 2015",
      end: "Dec 2017",
      description: (
        <ul className="list-inside list-disc">
          <li>
            Programmed scripts to automate image deployment, software
            installations, and system administration tasks, saving over 100+
            hours per year.
          </li>
          <li>
            Implemented one-click silent software installations to streamline
            processes and increase efficiency.
          </li>
          <li>
            Developed automation solutions for legacy IT shop at McCoy
            Corporation in San Marcos, TX.
          </li>
        </ul>
      ),
    },
    {
      company: "Solid IT Networks, Inc.",
      link: "https://soliditnetworks.com/",
      badges: ["Networking Contractor"],
      title: "Networking Contractor",
      start: "Feb 2017",
      end: "May 2017",
      description: (
        <ul className="list-inside list-disc">
          <li>
            Instructed cabling team during wireless upgrade project for 100+
            academic buildings and 20+ dorms with 5ghz Cisco Meraki APs.
          </li>
          <li>
            Conducted quality assurance for 2,300+ wireless access points,
            advising on necessary changes.
          </li>
          <li>
            Achieved seamless implementation of wireless network infrastructure
            for educational facilities.
          </li>
        </ul>
      ),
    },
    {
      company: "Tilt.com (acquired by Airbnb)",
      link: "https://tilt.com/",
      badges: ["Startups"],
      title: "Team Lead, Growth",
      start: "Jul 2015",
      end: "Feb 2017",
      description:
        "Managed growth of tilt.com at Texas State by hiring ambassadors, issuing promo codes, promoting events, and selling items.",
    },
  ],
  skills: [
    "React/Next.js/Vite.js",
    "TypeScript",
    "Event-Driven Architecture",
    "Cloud-Native Systems Design",
    "Microservices",
    "DB Systems",
    "IAM/IdP",
    "AuthN/AuthZ",
    "LLMs/VLMs",
    "Golang",
    "Python",
    "FastAPI/Flask",
    "Ai Agent",
    "System Architecture",
    "Team Leadership",
    "Web3",
    "DAOs",
    "OSINT",
    "Internet Investigations",
  ],
  projects: [
    {
      title: "Covara",
      techStack: ["TypeScript", "Next.js", "Vercel", "GCP", "PostgreSQL"],
      description:
        "AI document processing engine for Property & Casualty Insurance",
      link: {
        label: "covara.ai",
        href: "https://covara.ai",
      },
    },
    {
      title: "Gogent",
      techStack: ["Golang", "Ollama", "Nats.io", "SQLlite", "EdgeAI"],
      description:
        "Distributed log analysis system that uses embedded NATS messaging and LLM-powered agents to process and analyze system logs in real-time and at the edge.",
      link: {
        label: "Github - Gogent",
        href: "https://github.com/tobalo/gogent",
      },
    },
    {
      title: "Fort Worth DAO",
      techStack: [
        "Web3",
        "Blockchain",
        "IPFS",
        "Community Leadership",
        "Education",
      ],
      description:
        "Founded and building the leading City DAO and Crypto leadership for Fort Worth. Driving civic innovation, digital ownership workshops, and thought leadership.",
      link: {
        label: "FWTX DAO",
        href: "https://fwtx.city",
      },
    },
    {
      title: "The Great Capitulation",
      techStack: [
        "Macroeconomics",
        "Theory",
        "Market Research",
        "Information Capital",
      ],
      description:
        "Thesis on National Financial Security risk to USG + American Retirements.",
      link: {
        label: "The Great Capitulation",
        href: "https://github.com/tobalo/sovereign-capital-data-flow",
      },
    },
    {
      title: "Ilios OCR",
      techStack: ["Bun", "Hono", "Mistral", "Tigris", "Turso"],
      description:
        "Lightweight, high performance document to markdown API & Worker Queue using Mistral OCR with SQLite + Turso for Embedded Cloud Syncs",
      link: {
        label: "Ilios OCR",
        href: "https://ilios.sh",
      },
    },
    {
      title: "Edge Healthcare Research",
      techStack: [
        "Knowledge Graphs",
        "EdgeAI",
        "Market Research",
        "Market Discovery",
        "Analysis",
      ],
      description:
        "Healthcare research platform leveraging knowledge graphs and edge AI for market discovery and analysis",
      link: {
        label: "Health Edge AI Labs",
        href: "https://health.edge.ai.labs.jedi-ops.dev",
      },
    },
    {
      title: "Gloria SDK",
      techStack: ["TypeScript", "Bun", "Web3", "AI", "x402"],
      description:
        "TypeScript SDK for Gloria AI - an AI-powered news protocol utilizing x402 for payments and stablecoin native infrastructure",
      link: {
        label: "GitHub - Gloria SDK",
        href: "https://github.com/tobalo/gloria-sdk",
      },
    },
    {
      title: "Dispatchr",
      techStack: ["Twilio", "Python", "PostgreSQL", "Agentic Workflows"],
      description:
        "Enabling agentic workflows for driver assignment, driver communications, and load management for logistics company",
    },
    {
      title: "Production Grade OCR with dots.ocr",
      techStack: [
        "Hugging Face",
        "Python",
        "Bash",
        "YAML",
        "MLOps",
        "Baseten",
        "Truss",
      ],
      description:
        "Deploying dots.ocr via Truss for multilingual document layout parsing in a single vision-language model configured for Baseten inference",
      link: {
        label: "dots.ocr Truss Deployment",
        href: "https://github.com/tobalo/dots.ocr.truss",
      },
    },
  ],
} as const;
