// ─────────────────────────────────────────────────────────────
// GREENROOTS — CONTENT SOURCE OF TRUTH
// Every string below is taken verbatim from the scraped data of
// grootstechnologies.com (see /download/groots_scrape/).
// NO invented content. NO fabricated claims.
// ─────────────────────────────────────────────────────────────

export const BRAND = {
  name: "Greenroots",
  fullName: "Green Roots Training & Placements",
  company: "Green Roots Technologies",
  tagline: "Job-Ready Tech Courses in Hyderabad",
  description:
    "Greenroots is a technology training institute in Hyderabad offering job-ready courses in Power BI, Data Analytics, Business Analysis, DevSecOps and Software Testing — with a free career audit and placement support.",
  location: "Kukatpally, Hyderabad",
  footerBlurb:
    "Technology Training Institute in Hyderabad. Career audit · Job-ready tech education · Placement support for freshers and working professionals.",
  copyright: "© 2026 Green Roots Technologies. All rights reserved.",
} as const;

export const CONTACT = {
  phoneDisplay: "+91 95495 43898",
  phoneHref: "tel:+919549543898",
  email: "greenroots.tech@outlook.com",
  emailHref: "mailto:greenroots.tech@outlook.com",
  whatsapp:
    "https://wa.me/919549543898?text=Hi%20Greenroots!%20I%27d%20like%20to%20chat.",
  whatsappPrograms:
    "https://wa.me/919549543898?text=Hi%20Greenroots!%20I%27d%20like%20to%20know%20more%20about%20your%20training%20programs.",
  whatsappTrainer:
    "https://wa.me/919549543898?text=Hi%20Greenroots!%20I%27m%20interested%20in%20becoming%20a%20trainer.",
  address:
    "Unit 206, Manjeera Majestic Commercial, Opposite JNTU, Next to Lulu Mall, Hyderabad 500072",
  hours: "Monday – Saturday · 9:00 AM – 7:00 PM",
} as const;

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/company/grootstechnologies/",
  instagram: "https://www.instagram.com/grootstechnologies/",
  youtube: "https://youtube.com/@greenroots_techtalks",
} as const;

// ── HERO ─────────────────────────────────────────────────────
export const HERO = {
  kicker: "Now enrolling · Hyderabad",
  headlineA: "Build a Career the",
  headlineEm: "Industry Actually",
  headlineB: "Wants.",
  sub: "Greenroots delivers job-ready technology training — from Power BI to DevSecOps — with a career audit, personalised counselling, and placement support.",
  ctaPrimary: "Explore 8 Programs",
  ctaSecondary: "Talk to a Counsellor",
  stats: [
    { num: "8", suffix: "+", label: "Specialised Programs" },
    { num: "2–3", suffix: "", label: "Month Tracks" },
    { num: "₹20K", suffix: "", label: "Starting Price" },
    { num: "100", suffix: "%", label: "Career Audit Included" },
  ],
  audiences: [
    "Fresh Graduates",
    "Working Professionals",
    "Career Switchers",
    "Promotion Seekers",
    "IT Returners",
  ],
  techCycle: [
    "Power BI",
    "Data Analytics",
    "Business Analysis",
    "DevSecOps",
    "Software Testing",
    "AI Product Management",
  ],
} as const;

// ── WHY (Chapter I — The Ledger) ─────────────────────────────
export const WHY = {
  kicker: "Why Greenroots",
  title: "Not just training. Transformation.",
  intro:
    "We match you to the right technology, build your skills from zero, and stand beside you until you land the role.",
  items: [
    {
      n: "01",
      title: "Career Audit First",
      body: "Before you join, we assess your background, strengths, and market fit — then recommend the exact track that maximises your placement odds.",
    },
    {
      n: "02",
      title: "Industry-Mapped Curriculum",
      body: "Every module is benchmarked to what TCS, Infosys, Accenture, Deloitte, and top GCCs are actually hiring for — not textbook theory.",
    },
    {
      n: "03",
      title: "Fast Tracks: 2–3 Months",
      body: "Intensive, outcome-focused programs so you upskill and enter the market quickly. No year-long commitments. Results, not degrees.",
    },
    {
      n: "04",
      title: "Expert Trainers",
      body: "All instructors have 10+ years of active industry experience. They don't just teach — they've done the job you're aiming for.",
    },
    {
      n: "05",
      title: "Resume & LinkedIn Prep",
      body: "ATS-optimised resume writing, LinkedIn profile overhaul, and Naukri setup. Your first impression is built with you, not for you.",
    },
    {
      n: "06",
      title: "Placement Support",
      body: "Mock interviews, referrals, and recruiter connects. Placement service charges apply — because we only charge when we deliver results.",
    },
  ],
  tracksTitle: "High-Demand Tech Tracks Built for 2026",
  tracksBody:
    "Data Analytics, Business Analysis, DevSecOps, Power BI, AI Product Management, Automation Testing, Cloud, and Data Science.",
} as const;

// ── PROGRAMS (Chapter II — The Specimen Index) ───────────────
export type Program = {
  code: string;
  badge: string;
  name: string;
  desc: string;
  meta: string[];
  modules: string[];
  tools: string[];
  roles: string;
  pay: string;
};

export const PROGRAMS: Program[] = [
  {
    code: "GR.PBI-60",
    badge: "High Demand",
    name: "Power BI 60-Day Mastery Track",
    desc: "From SQL foundations to advanced DAX and live dashboards — the complete, project-led path into a Data Analyst role.",
    meta: ["60 days", "Beginner-friendly", "Live + recorded"],
    modules: [
      "Data modelling & star-schema relationships",
      "DAX measures, time-intelligence & calculated columns",
      "Power Query ETL & data cleaning",
      "Dashboards, row-level security & publishing to the Service",
    ],
    tools: ["Power BI Desktop", "DAX", "SQL", "Power Query", "RLS"],
    roles: "Data Analyst · BI Developer · Reporting Analyst",
    pay: "₹4–8 LPA",
  },
  {
    code: "GR.BA-10",
    badge: "Top Earner",
    name: "Senior Business Analyst Program",
    desc: "Requirements engineering, process modelling, Agile delivery and stakeholder management — the full BA toolkit, end to end.",
    meta: ["~10 weeks", "All levels", "Live online"],
    modules: [
      "Requirement elicitation, BRD/FRD & user stories",
      "Process modelling with BPMN & workflow mapping",
      "Agile/Scrum delivery, backlog grooming & Jira",
      "SQL for analysis, wireframing & UAT",
    ],
    tools: ["BPMN", "Agile/Scrum", "Jira", "SQL", "Wireframing", "User Stories"],
    roles: "Business Analyst · Product Analyst · Functional Consultant",
    pay: "₹5–9 LPA",
  },
  {
    code: "GR.QA-90",
    badge: "QA Track",
    name: "Full-Stack Software Testing",
    desc: "Modern QA built for current hiring — Playwright over legacy Selenium, plus API testing and real test strategy.",
    meta: ["90 hours", "Beginner-friendly", "Live + labs"],
    modules: [
      "Manual testing, STLC & the defect lifecycle",
      "UI automation with Playwright (JS/TS)",
      "API testing with Postman & REST validation",
      "Test reporting & CI integration basics",
    ],
    tools: ["Playwright", "Postman", "Jira", "STLC", "API Testing"],
    roles: "QA Engineer · Test Analyst · Junior SDET",
    pay: "₹3.5–6 LPA",
  },
  {
    code: "GR.AIPM-16",
    badge: "AI-Powered",
    name: "AI-Powered Product Management",
    desc: "Product thinking supercharged by AI — from discovery to roadmap, using GPT tools, analytics and Agile delivery.",
    meta: ["16 weeks", "Mid–senior", "Live + mentorship"],
    modules: [
      "Product discovery, problem framing & PRDs",
      "Prioritisation & roadmapping (RICE, MoSCoW)",
      "Using AI tools for research, specs & analysis",
      "Metrics, experimentation & stakeholder comms",
    ],
    tools: ["Product Strategy", "AI Tools", "Roadmapping", "Agile", "Analytics"],
    roles: "Associate PM · Product Manager · Product Owner",
    pay: "₹8–18 LPA",
  },
  {
    code: "GR.TOSCA-07",
    badge: "Automation",
    name: "Tricentis Tosca Automation",
    desc: "Enterprise model-based test automation — CI/CD integration, API automation and real project practice with Tosca.",
    meta: ["7 weeks", "QA background", "Live + labs"],
    modules: [
      "Model-based test design & reusable modules",
      "Test-case design, recovery & maintenance",
      "API & data-driven testing",
      "CI/CD integration & execution reporting",
    ],
    tools: ["Tosca", "CI/CD", "Model-Based Testing", "API Automation"],
    roles: "Automation Engineer · Tosca Specialist · QA Lead",
    pay: "₹6–12 LPA",
  },
  {
    code: "GR.DSO-16",
    badge: "Cloud + Security",
    name: "DevSecOps Mastery Track",
    desc: "16 modules and 25+ tools — Docker to Kubernetes, Terraform to AWS — building a full, secure delivery pipeline.",
    meta: ["3 months", "Some IT exp.", "Cloud labs"],
    modules: [
      "Containers & orchestration (Docker, Kubernetes)",
      "Infrastructure as Code with Terraform",
      "CI/CD pipelines with GitHub Actions",
      "Security scanning, secrets (Vault) & AWS",
    ],
    tools: ["Docker", "Kubernetes", "Terraform", "AWS", "GitHub Actions", "SonarQube"],
    roles: "DevOps Engineer · DevSecOps Engineer · Cloud Engineer",
    pay: "₹7–15 LPA",
  },
  {
    code: "GR.DAF-10",
    badge: "Analytics",
    name: "Data Analytics for Freshers",
    desc: "A complete entry-level analytics stack — Python, SQL, Excel, Power BI and Tableau — with live projects from week one.",
    meta: ["10 weeks", "Freshers welcome", "Live + recorded"],
    modules: [
      "Excel & statistics foundations",
      "SQL querying & data wrangling",
      "Python with Pandas for analysis",
      "Dashboards in Power BI & Tableau",
    ],
    tools: ["Python", "SQL", "Power BI", "Tableau", "Excel"],
    roles: "Data Analyst · MIS Analyst · Reporting Analyst",
    pay: "₹3.5–7 LPA",
  },
  {
    code: "GR.DSP-12",
    badge: "Advanced",
    name: "Data Science & AI (DSP Track)",
    desc: "Machine learning, deep learning and NLP with portfolio-grade capstone projects — for graduates ready to go deep.",
    meta: ["3 months", "Graduates+", "Live + mentorship"],
    modules: [
      "Python, statistics & feature engineering",
      "Supervised & unsupervised ML (scikit-learn)",
      "Deep learning & NLP fundamentals",
      "End-to-end capstone & model deployment",
    ],
    tools: ["Python", "ML", "Deep Learning", "NLP", "scikit-learn"],
    roles: "Data Scientist · ML Engineer (Jr) · AI Analyst",
    pay: "₹6–14 LPA",
  },
];

export const PROGRAMS_INTRO = {
  title: "8 High-Demand Programs",
  sub: "Every track is built around what employers are hiring for right now — from ₹20,000 onwards, in 2–3 months, freshers to experienced.",
  banner: "From ₹20,000 onwards",
  bannerSub: "All programs · 2 to 3 months · EMI available on request",
  unsureTitle: "Not sure which course is right for you?",
  unsureBody:
    "Book a free career audit session. We'll review your background, market demand, and salary potential — then recommend the exact track that gives you the strongest return.",
} as const;

export const COURSE_OPTIONS = [
  "Power BI 60-Day Mastery",
  "Senior Business Analyst Program",
  "Full-Stack Software Testing",
  "AI-Powered Product Management",
  "Tricentis Tosca Automation",
  "DevSecOps Mastery Track",
  "Data Analytics for Freshers",
  "Data Science & AI (DSP Track)",
  "Not sure — Need career guidance",
] as const;

export const STATUS_OPTIONS = [
  "Fresh Graduate",
  "Working (0–2 years)",
  "Working (2–5 years)",
  "Working (5+ years)",
  "Career Break / Returner",
] as const;

// ── PLACEMENTS (Chapter III — The Record) ────────────────────
export const PLACEMENTS = {
  kicker: "Placements",
  title: "Our Placement Track Record",
  sub: "Real students. Real companies. Real salaries. Here's what Greenroots has delivered.",
  stats: [
    { num: "85", suffix: "%", label: "Placement Rate" },
    { num: "₹4.5", suffix: " L", label: "Avg. Fresher Package" },
    { num: "60", suffix: "+", label: "Alumni Placed" },
    { num: "3", suffix: " mo", label: "Avg. Time to Offer" },
  ],
  journeyTitle: "From Enrolment to Offer Letter",
  journey: [
    {
      n: "1",
      title: "Career Audit",
      body: "We map your background to the right program and market segment.",
    },
    {
      n: "2",
      title: "Intensive Training",
      body: "2–3 month track with live labs, projects, and mentor access.",
    },
    {
      n: "3",
      title: "Resume & Profile",
      body: "ATS resume, LinkedIn, and Naukri profile — built by our team.",
    },
    {
      n: "4",
      title: "Mock Interviews",
      body: "Daily mock rounds with feedback until you're interview-ready.",
    },
    {
      n: "5",
      title: "Placement Drive",
      body: "Referrals, recruiter connects, and active job drive support.",
    },
  ],
  partnersTitle: "Hiring Our Alumni",
  partners: [
    "TCS",
    "Infosys",
    "Accenture",
    "Wipro",
    "Cognizant",
    "Capgemini",
    "Deloitte",
    "HCL Technologies",
    "Tech Mahindra",
    "LTIMindtree",
    "Mphasis",
    "Hexaware",
  ],
  reviewsTitle: "What Our Graduates Say",
  reviews: [
    {
      quote:
        "The Power BI track was exactly what I needed. Rushi's training style is very practical — we worked on real dashboards from week one. Got placed at Deloitte within 2 months of completing the program.",
      initials: "PK",
      name: "Priya K.",
      role: "Power BI Track Graduate",
      placed: "Placed at Deloitte",
      stars: 5,
    },
    {
      quote:
        "I came in as a fresher with zero IT knowledge. The career audit helped me find the BA path and the training was incredibly structured. Cleared my first interview at Infosys in the third month.",
      initials: "AR",
      name: "Arun R.",
      role: "Business Analyst Track Graduate",
      placed: "Placed at Infosys",
      stars: 5,
    },
    {
      quote:
        "DevSecOps is a niche skill and Greenroots covers it in incredible depth. Docker, Kubernetes, Terraform — all covered with live cloud labs. The content is premium and the support doesn't stop after training.",
      initials: "SM",
      name: "Santhosh M.",
      role: "DevSecOps Track Graduate",
      placed: "Placed at Capgemini",
      stars: 4,
    },
    {
      quote:
        "After 2 years of a gap, I was nervous to re-enter IT. Greenroots made it stress-free — the resume rebuild and LinkedIn profile update alone got me 4 interview calls in the first week after posting.",
      initials: "NK",
      name: "Nandini K.",
      role: "Data Analytics Graduate",
      placed: "Placed at Wipro",
      stars: 5,
    },
    {
      quote:
        "Tosca training here is unlike anything on YouTube. They use actual enterprise project structures, not toy examples. The mock interviews were harder than the real ones — which is exactly what you need.",
      initials: "VR",
      name: "Venkat R.",
      role: "Tosca Automation Graduate",
      placed: "Placed at TCS",
      stars: 5,
    },
    {
      quote:
        "The AI Product Management track is genuinely ahead of the market. I got an offer as an Associate PM within 3 weeks of finishing — and the interviewers were impressed by the AI tool fluency they hadn't seen before.",
      initials: "ZF",
      name: "Zaid F.",
      role: "AI Product Management Graduate",
      placed: "Associate PM Offer",
      stars: 5,
    },
  ],
} as const;

// ── MENTOR ───────────────────────────────────────────────────
export const MENTOR = {
  kicker: "Meet Your Mentor",
  title: "Rushi — Head Trainer at Greenroots.",
  intro:
    "A decade of hands-on enterprise DevOps and Cloud experience, leading classroom and live-project training at Greenroots. Has guided 500+ students into roles at top tech companies across India and abroad.",
  facts: [
    {
      title: "Experience",
      body: "10+ years of hands-on enterprise DevOps on AWS, GCP, and hybrid stacks. Architect-grade depth on the systems he teaches — not borrowed slides, not theory.",
    },
    {
      title: "Teaching Style",
      body: "Every concept lands inside a real production scenario. Students debug, deploy, and break things on day one — interview-ready, deploy-ready by the time they leave.",
    },
  ],
  identity: "Rushi · Senior DevOps Architect · AWS & GCP Expert · Educator · Mentor",
  headline: "500+ engineers trained & placed",
  skills: [
    "DevOps",
    "AWS",
    "GCP",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Jenkins",
    "CI/CD",
    "Linux",
    "Ansible",
  ],
} as const;

// ── CRT (Chapter IV — The Campus Programme) ──────────────────
export const CRT = {
  kicker: "College Partnership Program",
  title: "Campus Recruitment Training — CRT",
  intro:
    "Greenroots partners with colleges to bridge the gap between academia and industry — transforming students into placement-ready, interview-confident professionals.",
  tags: [
    "Kukatpally, Hyderabad",
    "For Engineering & Degree Colleges",
    "40–120 Hour Programs",
    "Semester to Full-Year Tracks",
  ],
  ctas: ["Partner With Us", "View CRT Curriculum"],
  mission:
    "Our Mission: Every student deserves the skills, confidence, and opportunities required to build a successful career.",
  crtStats: [
    { num: "4", label: "Structured Phases" },
    { num: "5", label: "Tech Programs Offered" },
    { num: "40–120", label: "Hours of Training" },
    { num: "10 +", label: "Yrs Trainer Experience" },
  ],
  aboutTitle: "Empowering Students. Enabling Careers.",
  aboutBody:
    "Greenroots is a career transformation and employability training organisation dedicated to bridging the gap between academia and industry. We partner with colleges to prepare students for placements, corporate readiness, and real-world careers through structured training, mentorship, and hands-on learning.",
  visionTitle: "Our Vision",
  visionBody:
    "To become one of India's most trusted career readiness partners for colleges by building industry-ready graduates.",
  academyTitle: "Our Academy — Kukatpally, Hyderabad",
  academySub: "Current Tech Programs Running",
  academyPrograms: [
    "Cloud Computing",
    "DevSecOps",
    "Business Analytics (BA)",
    "Data Analytics (DA)",
    "Power BI",
  ],
  academyNote:
    "Students get hands-on training, live mentorship, and real project exposure — a mini corporate ecosystem.",
  challengesTitle: "3 Challenges Every College Student Faces",
  challengesSub: "Greenroots solves all three — end to end.",
  challenges: [
    {
      n: "01",
      title: "Communication & Interview Confidence",
      body: "Most students are technically capable but fail interviews because they can't articulate their thoughts clearly or confidently in English.",
    },
    {
      n: "02",
      title: "Aptitude & Reasoning Gaps",
      body: "Campus hiring tests from TCS, Infosys, Accenture require strong quantitative and logical reasoning — skills rarely built in classrooms.",
    },
    {
      n: "03",
      title: "No Industry Exposure",
      body: "Students graduate without ever experiencing corporate workflows, real tools, or professional workplace expectations — leaving them unprepared.",
    },
  ],
  phasesTitle: "A Complete Transformation Journey",
  phasesSub: "Not a short workshop. A structured 4-phase program that rebuilds the student from inside out.",
  phases: [
    {
      n: "1",
      phase: "Phase 1 — Foundation",
      title: "Foundation Building",
      body: "Students begin by strengthening their communication basics — the bedrock that determines if a student gets shortlisted or rejected at first contact.",
      items: [
        "Communication Fundamentals",
        "Grammar & Vocabulary",
        "Confidence Building",
        "Personality Development",
        "Professional Grooming",
      ],
      outcome: "Students become comfortable speaking and expressing ideas clearly.",
    },
    {
      n: "2",
      phase: "Phase 2 — Aptitude",
      title: "Aptitude & Reasoning Mastery",
      body: "We train students to crack placement tests from TCS, Infosys, Wipro, Capgemini and more — covering both quantitative and logical reasoning at speed.",
      groups: [
        {
          title: "Quantitative Aptitude",
          items: [
            "Number System",
            "Percentages · P&L",
            "Time & Work",
            "Speed & Distance",
            "Ratios · Averages",
            "Probability & Permutations",
          ],
        },
        {
          title: "Logical Reasoning",
          items: [
            "Puzzles & Arrangements",
            "Blood Relations",
            "Coding-Decoding",
            "Syllogisms",
            "Data Interpretation",
          ],
        },
      ],
      outcome: "Students become confident solving aptitude questions under time pressure.",
    },
    {
      n: "3",
      phase: "Phase 3 — Verbal Ability",
      title: "Verbal Ability & English for Placements",
      body: "Our core strength and biggest USP. Companies reject technically strong students for poor communication — we fix that completely.",
      items: [
        "Reading Comprehension",
        "Para Jumbles",
        "Sentence Correction",
        "Error Detection",
        "Vocabulary Building",
        "Email Writing",
        "Corporate Communication",
      ],
      outcome: "Students gain fluency, clarity, and corporate communication skills.",
    },
    {
      n: "4",
      phase: "Phase 4 — Placement Prep",
      title: "Placement Preparation",
      body: "The final mile — resume building, interview coaching, mock panel simulations, and group discussion practice to make students truly offer-ready.",
      groups: [
        {
          title: "Resume Building",
          items: ["ATS-Friendly Resumes", "Personalised Reviews", "LinkedIn Optimisation"],
        },
        {
          title: "Interview Training",
          items: ["HR Interview Coaching", "Technical Readiness", "Mock Panels", "Group Discussions"],
        },
      ],
      outcome: "Students become interview-ready and confident.",
    },
  ],
  methodTitle: "Training Methodology That Actually Works",
  method: [
    {
      title: "Interactive Training",
      body: "No boring lectures. We use activities, role plays, group discussions, and real interview simulations — so learning sticks and confidence builds naturally.",
    },
    {
      title: "Continuous Assessment",
      body: "Weekly tests, mock interviews, assignments, and performance tracking. Every student's progress is measurable — not assumed.",
    },
    {
      title: "Personalised Mentorship",
      body: "1-on-1 guidance to improve weak areas, boost confidence, and track individual progress. No student is left behind.",
    },
    {
      title: "Corporate Simulation Environment",
      body: "We create a mini corporate atmosphere so students experience real workplace expectations before they walk into a placement interview.",
    },
  ],
  advantageTitle: "The Greenroots Advantage",
  advantage: [
    {
      n: "01",
      title: "We Train for Real Placements, Not Theory",
      body: "Most CRT vendors deliver short workshops, focus only on aptitude, and don't track outcomes. Greenroots delivers end-to-end transformation with measurable placement results.",
    },
    {
      n: "02",
      title: "Strong Verbal & Communication Focus",
      body: "Companies reject technically strong candidates for poor communication. Our strength is Verbal Ability mastery, corporate communication, and confidence development.",
    },
    {
      n: "03",
      title: "Real Industry Exposure",
      body: "Students at our academy learn Cloud, DevSecOps, and Analytics tools alongside corporate workflows. This makes them industry-ready, not just placement-ready.",
    },
    {
      n: "04",
      title: "Long-Term Partnership Approach",
      body: "We don't do one-time workshops. We partner for semester-wise training, year-long CRT programs, and continuous progress tracking — a real institutional partnership.",
    },
    {
      n: "05",
      title: "Customised for Each College",
      body: "Every institution is different. We design training based on student level, placement goals, target companies, and academic background — nothing is copy-pasted.",
    },
  ],
  beforeAfterTitle: "Before & After Greenroots CRT",
  before: [
    "Fear of interviews and group discussions",
    "Poor communication and English confidence",
    "Low aptitude and reasoning test confidence",
    "No resume, no LinkedIn presence",
    "No clarity on career path or industry expectations",
  ],
  after: [
    "Confident speakers who own every interview room",
    "Placement-ready professionals with strong verbal skills",
    "Strong aptitude and reasoning under pressure",
    "Impressive ATS resumes and polished LinkedIn profiles",
    "Interview-ready mindset and career clarity",
  ],
  formatsTitle: "Flexible Training Formats for Colleges",
  formats: [
    {
      title: "40–60 Hour CRT",
      body: "Focused sprint for final-year students ahead of placement season",
    },
    {
      title: "80–120 Hour Intensive",
      body: "Deep dive across all four phases — our most comprehensive placement track",
    },
    {
      title: "Semester-Long CRT",
      body: "Spread across a full semester for sustainable learning without disrupting academics",
    },
    {
      title: "Final Year Bootcamp",
      body: "High-intensity final-year placement bootcamp with daily mock interviews",
    },
    {
      title: "Faculty Development",
      body: "Upskilling college faculty on industry expectations and placement coaching methods",
    },
  ],
  voicesTitle: "What Students Say",
  voices: [
    {
      quote:
        "I was scared to speak in English. After Greenroots training, I cleared 3 interviews and got placed.",
      initials: "S",
      role: "CRT Graduate — Hyderabad",
    },
    {
      quote:
        "Mock interviews helped me overcome my fear and face real panels confidently. I felt prepared like never before.",
      initials: "R",
      role: "Final Year Student",
    },
    {
      quote:
        "The resume and LinkedIn sessions changed my career completely. I started getting calls within a week of updating my profile.",
      initials: "A",
      role: "CRT Graduate — Engineering College",
    },
  ],
  collabTitle: "Let's Build Careers Together.",
  collabBody:
    "We are committed to long-term impact, not short-term training. Greenroots believes in becoming your college's official, trusted CRT partner.",
  collabLinks: [
    "Placement Cell Partnerships",
    "Department Tie-ups",
    "Final Year Training Programs",
    "Pre-Final Year Skill Development",
  ],
  benefitsTitle: "Colleges Benefit From:",
  benefits: [
    "Improved placement percentage year-on-year",
    "Increased average salary packages for graduates",
    "Better corporate reputation and industry credibility",
    "Stronger industry connections via our recruiter network",
    "Confident, polished graduates who reflect well on your institution",
  ],
} as const;

// ── STUDY ABROAD (Chapter V — The Atlas) ─────────────────────
export const ABROAD = {
  kicker: "Greenroots × SIG Global Edu — Official Partner",
  title: "Your Career. Your Country. Your Future.",
  intro:
    "From IELTS to landing in Toronto — the Greenroots career audit + SIG's 20+ years of overseas education expertise, all under one roof in Hyderabad.",
  heroStats: [
    { num: "20yr+", label: "Experience" },
    { num: "40K+", label: "Students" },
    { num: "500+", label: "Universities" },
    { num: "35+", label: "Branches" },
    { num: "6", label: "Countries" },
  ],
  ribbon:
    "Free Counselling · Visa Guidance · 500+ Universities · IELTS / GRE / GMAT / PTE · End-to-End Support",
  partnerTitle: "SIG Global Edu — India's most trusted overseas education partner",
  partnerBody:
    "A group founded by Australian and American graduates & citizens, with 35+ branches across India and a track record of 40,000+ student placements at 500+ authorised universities globally.",
  partnerStats: [
    { num: "20yr+", label: "In Operation" },
    { num: "40K+", label: "Students Placed" },
    { num: "500+", label: "Authorised Universities" },
    { num: "35", label: "India Branches" },
  ],
  roofTitle: "Two specialists. One roof in Hyderabad.",
  roofSub:
    "Greenroots brings the career audit and tech upskilling. SIG brings two decades of overseas placement experience. We've combined them so students don't have to chase two consultants.",
  roof: [
    {
      title: "Same building, neighbours",
      body: "Greenroots at Unit 206 and SIG at Unit 204 — both in Manjeera Majestic Commercial, JNTU Road. Walk-in counselling for both within seconds.",
    },
    {
      title: "One journey, two specialists",
      body: "Career audit at Greenroots → IELTS / GRE / GMAT prep, university shortlisting and visa with SIG. No handoffs between unrelated agencies.",
    },
    {
      title: "Vetted, accountable, transparent",
      body: "SIG is authorised by the 500+ universities they place to. Greenroots vouches for the partnership. Every step has a name and a phone number.",
    },
  ],
  destTitle: "Where do you want to land?",
  destSub:
    "Eight popular destinations our students choose. Tell us which and we'll map your fit, budget, and timeline in the free counselling session.",
  destinations: [
    { flag: "US", name: "USA", tag: "Top STEM Hub", body: "Ivy League, Big Tech recruiting, OPT/STEM extension. Most graduate scholarships available." },
    { flag: "AU", name: "Australia", tag: "Top World Rankings", body: "Multiple universities in the world's Top 100, 2–4 year post-study work visa, strong STEM industry pipeline." },
    { flag: "CA", name: "Canada", tag: "PR-Friendly", body: "PGWP up to 3 years, transparent immigration, strong tech ecosystem in Toronto & Vancouver." },
    { flag: "UK", name: "UK", tag: "2-Yr Grad Visa", body: "1-year masters, 2-year graduate visa, Russell Group prestige with controlled cost." },
    { flag: "DE", name: "Germany", tag: "Low / No Tuition", body: "Public universities mostly tuition-free, Europe's engineering capital, 18-month job-search visa." },
    { flag: "IE", name: "Ireland", tag: "Tech Gateway", body: "European HQ for Google, Meta, Apple. 2-year stay-back after masters, English-speaking." },
    { flag: "NZ", name: "New Zealand", tag: "Quality of Life", body: "Small intake, excellent placement ratios, 3-year post-study work visa." },
    { flag: "SG", name: "Singapore", tag: "Asia's Hub", body: "NUS & NTU world-top-20, close to India, strong fintech / data science roles." },
  ],
  stepsTitle: "From your first question to your boarding pass.",
  stepsSub:
    "Six structured stages. Each has clear deliverables, named owners, and a timeline you can hold us to.",
  steps: [
    { n: "01 / 06", title: "Free Counselling", body: "One-hour deep-dive at our Manjeera Majestic office. We map your goals, budget, qualification fit, and shortlist 5-8 realistic targets." },
    { n: "02 / 06", title: "University Shortlisting", body: "Ambitious / target / safe picks across countries and intakes, factoring in your test scores, GPA, work experience, and budget." },
    { n: "03 / 06", title: "Application & Documents", body: "SOPs, LORs, resume polish, transcripts, financial docs. We draft, you approve. No template-y SOP that any AI could write." },
    { n: "04 / 06", title: "Visa Guidance", body: "F-1, Student route, Subclass 500 — country-specific paperwork prep, mock interviews, financial documentation. 96% visa success rate." },
    { n: "05 / 06", title: "Test Prep", body: "IELTS, PTE, GRE, GMAT, TOEFL, SAT, Duolingo. Live classes, mock tests, diagnostic-led custom plans. Free starting diagnostic." },
    { n: "06 / 06", title: "Pre-Departure", body: "Forex, accommodation, flight bookings, sim cards, packing list, cultural orientation. The week before you fly, we handle the chaos." },
  ],
  testsTitle: "All the exams that open all the doors.",
  testsSub:
    "Pick a test or two — we'll diagnose where you are and what your fastest path to your target score looks like — free.",
  tests: [
    { name: "IELTS", type: "English Proficiency" },
    { name: "PTE", type: "English Proficiency" },
    { name: "TOEFL", type: "English Proficiency" },
    { name: "Duolingo", type: "English Proficiency" },
    { name: "GRE", type: "Graduate Entry" },
    { name: "GMAT", type: "MBA Entry" },
    { name: "SAT", type: "Undergrad Entry" },
  ],
  formTitle: "Start with a free counselling call.",
  formSub:
    "Tell us where you want to land. We reply within 4 hours with a personalised counselling slot, recommended tests, and a rough budget map.",
  destinationOptions: ["USA", "Australia", "Canada", "UK", "Germany", "Ireland", "New Zealand", "Singapore", "Multiple / Not Sure", "Other"],
  qualificationOptions: ["Class 12 (Inter / +2)", "Bachelor's (BTech, BSc, BCom, etc.)", "Master's", "Working Professional", "Other"],
  intakeOptions: ["Fall 2026 (Aug-Sep)", "Spring 2027 (Jan-Feb)", "Fall 2027", "Spring 2028", "Later / Not Sure"],
} as const;

// ── TRAINER (Chapter VI — The Invitation) ────────────────────
export const TRAINER = {
  kicker: "Now Inviting Trainers & Creators",
  title: "Teach. Grow. Earn More.",
  intro:
    "You have the expertise. We have the students, the platform, and the placement outcomes. Join Greenroots as a trainer or content partner — and double or triple your income without leaving what you already do.",
  heroStats: [
    { num: "5 yr+", label: "Minimum Experience" },
    { num: "2–3 ×", label: "Income Potential" },
    { num: "IT & Non-IT", label: "Both Welcome" },
    { num: "Flexible", label: "Teach Live or Record" },
  ],
  profilesTitle: "3 Profiles We Want on Our Team",
  profilesSub:
    "Whether you're a seasoned professional, a YouTube educator, or an Instagram voice — there's a place for you at Greenroots.",
  profiles: [
    {
      title: "IT & Non-IT Professionals",
      body: "Domain experts with real-world experience ready to pass on what they've learned in the field.",
      listTitle: "You Qualify If You Have",
    },
    {
      title: "YouTubers — Educational & Career",
      body: "Content creators who teach, inspire, and build audiences around technology, careers, or education.",
      listTitle: "Perfect Fit If You",
    },
    {
      title: "Instagram Influencers — EdTech & Career",
      body: "Voices shaping how students think about careers, skills, and the future of work.",
      listTitle: "Ideal If You Post About",
    },
  ],
  whyTitle: "Why Teach With Us?",
  whySub:
    "We're not just another platform. We're a placement-focused institute with real students, real outcomes, and a community that actually grows your brand.",
  why: [
    { title: "Double or Triple Your Income", body: "Earn a significant supplementary income from live batch fees, recorded content, and revenue sharing — without leaving your current role." },
    { title: "Completely Flexible Hours", body: "Teach weekends, evenings, or record async content at your own pace. We work around your schedule, not the other way around." },
    { title: "Real Student Impact", body: "Your teaching directly leads to placement offers. Students who get jobs because of you — that's the most rewarding ROI there is." },
    { title: "Build Your Personal Brand", body: "We promote our trainers. Your name, your expertise, your audience — amplified through Greenroots' student network, social media, and placement stories." },
    { title: "Join a Growing Community", body: "Be part of the Education to Employment movement. Collaborate with other top trainers, co-create content, and expand your professional network." },
    { title: "We Handle Everything Else", body: "Student acquisition, batch management, marketing, and placement support — all handled by Greenroots. You just show up and teach." },
  ],
  rolesTitle: "What You'll Do With Greenroots",
  rolesSub:
    "Choose one engagement model or combine them — we're flexible with how you contribute.",
  roles: [
    { n: "01", title: "Teach Live Batches", body: "Conduct live training sessions for enrolled students — online or at our Hyderabad academy. Weekend and evening batches available to fit your schedule." },
    { n: "02", title: "Record Course Modules", body: "Create structured video content for our learning platform. Earn per module recorded, and continue earning as students enrol — passive income from your expertise." },
    { n: "03", title: "Co-Create Curriculum", body: "Work with our team to design course content, assessments, and projects that align with real industry hiring needs. Your experience shapes what the next generation learns." },
    { n: "04", title: "Mentor Students 1-on-1", body: "Provide personalised guidance sessions to high-potential students — mock interviews, career counselling, technical deep dives, and more." },
    { n: "05", title: "Content Collaboration (Creators)", body: "For YouTubers and Instagrammers — host reels, masterclasses, collaborative sessions, and cross-promote to each other's audiences for mutual growth." },
    { n: "06", title: "Campus & Community Drives", body: "Represent Greenroots at college workshops, hackathons, and career fairs as a guest expert — building your reputation while growing our reach together." },
  ],
  incomeTitle: "Double. Triple. Your Income.",
  incomeSub:
    "Here's what realistic earning looks like when your expertise meets Greenroots' student base. These are illustrative scenarios — your actual income depends on engagement level and batch size.",
  incomeScenarios: [
    {
      profile: "IT Professional",
      current: "Current salary ₹60,000/mo",
      add: "Greenroots earnings ₹30,000–50,000/mo",
      total: "₹ 1L +",
      note: "↑ 1.5× to 2× income · Part-time teaching",
    },
    {
      profile: "Senior Expert · 10yr+",
      current: "Current CTC ₹1.2L/mo",
      add: "Greenroots earnings ₹60,000–1L/mo",
      total: "₹ 2L +",
      note: "↑ 2× to 3× income · Weekend batches only",
    },
    {
      profile: "YouTuber / Influencer",
      current: "Current creator income ₹20,000/mo",
      add: "Greenroots + content revenue ₹40,000–80,000/mo",
      total: "₹ 1L +",
      note: "↑ 3× to 5× income · Leverage your audience",
    },
  ],
  incomeNote:
    "* Figures are illustrative. Actual earnings vary based on batch size, subject demand, and engagement model.",
  faqTitle: "Before You Apply",
  faqs: [
    {
      q: "Do I need to quit my current job?",
      a: "Not at all. Most of our trainers teach evening or weekend batches, or record modules at their own pace, while staying in their full-time roles. The whole model is built around fitting in alongside what you already do.",
    },
    {
      q: "Do I need prior teaching experience?",
      a: "No. What matters is genuine, hands-on expertise and a willingness to mentor. Our team helps you structure your knowledge into a clear curriculum, so you can focus on teaching what you know best.",
    },
    {
      q: "How much time does it actually take?",
      a: "It's flexible. A live batch might be a few hours a week for the length of a cohort. Alternatively, you can record a set of modules once and keep earning as new students enrol — closer to passive income.",
    },
    {
      q: "How and when do I get paid?",
      a: "Depending on your engagement model — per live batch, per recorded module, or a revenue share — payouts are made on a regular cycle. The exact terms are agreed transparently during onboarding, before you start.",
    },
    {
      q: "I'm a YouTuber or Instagram creator, not a corporate trainer. Can I still join?",
      a: "Yes — we have a dedicated track for educational and career creators. You can co-create courses, host live masterclasses, and grow your audience through our student community, turning your following into a real revenue stream.",
    },
    {
      q: "What support do I get from Greenroots?",
      a: "Everything outside the teaching itself — student acquisition, batch scheduling, marketing, the learning platform, and placement support — is handled by us. You show up and teach; we run the operation around you.",
    },
  ],
  applyTitle: "Ready to Teach, Grow & Earn More?",
  afterTitle: "What Happens After You Apply",
  afterSub:
    "Our team reviews every application personally. If there's a fit, we reach out within 48 hours to schedule a 20-minute discovery call — no commitments, just a conversation.",
  process: [
    { n: "1", title: "Submit Your Application", body: "Fill in the form — takes less than 3 minutes." },
    { n: "2", title: "Discovery Call", body: "We understand your expertise, goals, and preferred engagement model." },
    { n: "3", title: "Demo Session", body: "A short 15-minute mock teaching session to understand your style and strengths." },
    { n: "4", title: "Onboarding & First Batch", body: "Get onboarded, matched to the right course, and start earning within weeks." },
  ],
  formNote: "All fields marked * are required. We respond within 48 hours.",
  profileOptions: ["IT Professional", "Non-IT Professional", "YouTuber / Content Creator", "Instagram Influencer", "Freelance Trainer", "Other"],
  expOptions: ["5–7 years", "8–10 years", "10–15 years", "15+ years"],
} as const;

// ── CONTACT (Chapter VII — The Desk) ─────────────────────────
export const CONTACT_SECTION = {
  kicker: "Contact",
  title: "Let's Talk About Your Career.",
  sub: "Fill out the form or reach us directly. Our team will get back to you within a few hours with program details and next steps.",
  formTitle: "Send an Enquiry",
  formSub: "We'll reply with a personalised program recommendation within 4 hours.",
  whatsappCta: "WhatsApp Us Now",
  consent: "By submitting, I agree to be contacted by Greenroots and to the Privacy Policy.",
  infoLabels: { phone: "Phone", website: "Website", address: "Address", hours: "Office Hours" },
} as const;

// ── PRIVACY POLICY (verbatim from scraped privacy.html) ──────
export const PRIVACY = {
  title: "Privacy Policy",
  updated: "Last updated: 22 May 2026",
  intro:
    "This policy explains what personal information Greenroots Technology Training Institute (operating grootstechnologies.com) collects through its website forms, how we use it, and your rights under the Digital Personal Data Protection Act, 2023 (DPDP) of India.",
  sections: [
    {
      heading: "1. What we collect",
      intro: null,
      bullets: [
        "Contact details you provide in a form: name, phone, email, free-text message.",
        "Course or trainer-application details: course of interest, career stage, professional profile, years of experience, domain of expertise.",
        "Technical context automatically collected at submission: IP address, approximate city and country (derived from IP), device type, browser, operating system, browser language, the page you submitted from, the page you arrived from (HTTP referrer), and the URL of your first visit.",
        "Marketing attribution: any utm_source, utm_medium, utm_campaign, utm_content, utm_term, gclid, or fbclid parameters present in the URL when you first visited.",
        "Aggregate analytics from Google Analytics 4 (page views, session length, scroll depth) — governed by Google's Privacy Policy.",
      ],
      outro: null,
    },
    {
      heading: "2. How we use it",
      intro: null,
      bullets: [
        "To contact you about your enquiry by phone, WhatsApp, or email.",
        "To answer your specific questions and recommend programs that match your goals.",
        "To improve our marketing — knowing which channel brought you helps us focus.",
        "To detect spam / bot submissions (we use Cloudflare Turnstile).",
      ],
      outro: null,
    },
    {
      heading: "3. Who we share it with",
      intro:
        "Your data is processed by these third parties acting as data processors; Greenroots remains the data fiduciary:",
      bullets: [
        "ClickUp — our case-management system. All submitted data is stored here as a task.",
        "Cloudflare — operates our form intake and CAPTCHA. Cloudflare may see your IP and approximate location.",
        "Resend — sends our internal email notification to staff; sees only the lead summary.",
        "Google Analytics 4 — aggregate web analytics; does not receive your form submissions.",
      ],
      outro:
        "We do not sell your data. We do not share it with marketing or ad-tech networks.",
    },
    {
      heading: "4. How long we keep it",
      intro: null,
      bullets: [
        "Lead records for non-enrolled enquiries: 24 months from last activity, then deleted.",
        "Enrolled customer records: kept as part of your training history (subject to your deletion request).",
        "IP addresses associated with leads: redacted after 90 days.",
        "Analytics aggregates (GA4): governed by Google's default retention.",
      ],
      outro: null,
    },
    {
      heading: "5. Your rights",
      intro: "You can:",
      bullets: [
        "Ask what we have on file about you.",
        "Ask us to correct it.",
        "Ask us to delete it (we will delete or anonymise within 30 days unless legally required to retain it).",
        "Withdraw your consent at any time. (Withdrawal does not affect the lawfulness of processing already done.)",
      ],
      outro: "Contact us at greenroots.tech@outlook.com for any of the above.",
    },
    {
      heading: "6. Cookies & local storage",
      intro: "We use only:",
      bullets: [
        "A localStorage entry called gr_attribution_v1 to remember which campaign brought you, so we can attribute the lead.",
        "Google Analytics 4 first-party cookies (_ga, _ga_*) for aggregate analytics.",
        "Cloudflare Turnstile — uses no tracking cookies; purely a bot challenge.",
      ],
      outro: null,
    },
    {
      heading: "7. Children",
      intro: null,
      bullets: [],
      outro:
        "Greenroots's services are intended for adults seeking professional training. We do not knowingly collect personal information from individuals under 18 without verified parental consent.",
    },
    {
      heading: "8. Changes to this policy",
      intro: null,
      bullets: [],
      outro:
        'If we change this policy materially we will update the "Last updated" date above. For substantial changes that affect what we collect or how we use it, we will announce the change on our home page for at least 14 days before it takes effect.',
    },
  ],
  reachUs: {
    line: "Reach the desk directly for any data request:",
    phone: "+91 95495 43898",
    email: "greenroots.tech@outlook.com",
    address:
      "Greenroots Technology Training Institute, Unit 206, Manjeera Majestic Commercial, Opposite JNTU, Next to Lulu Mall, Hyderabad 500072",
  },
} as const;

// ── FOOTER (Colophon) ────────────────────────────────────────
export const FOOTER = {
  programs: [
    "Power BI Mastery",
    "Business Analyst",
    "DevSecOps",
    "AI Product Mgmt",
    "Data Analytics",
    "Tosca Automation",
    "Software Testing",
    "Data Science",
  ],
  services: [
    "Career Audit",
    "Course Counselling",
    "Resume Building",
    "Mock Interviews",
    "Placement Support",
    "Naukri / LinkedIn Setup",
  ],
  connectTitle: "Connect",
  followTitle: "Follow Us",
  cta: "Talk to a Counsellor →",
} as const;
