import { 
  Code2, 
  Database, 
  Layout, 
  Terminal, 
  Globe, 
  Cpu, 
  Server, 
  Wrench,
  Smartphone,
  Layers,
  Zap,
  Github
} from "lucide-react";

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const skills = {
  frontend: [
    { name: "React 18", level: 90, icon: Layout },
    { name: "Next.js", level: 85, icon: Globe },
    { name: "TypeScript", level: 88, icon: Code2 },
    { name: "Tailwind CSS", level: 92, icon: Layers },
    { name: "React Native", level: 75, icon: Smartphone },
  ],
  backend: [
    { name: "Node.js", level: 85, icon: Server },
    { name: "FastAPI", level: 80, icon: Zap },
    { name: "Express.js", level: 82, icon: Terminal },
    { name: "REST & GraphQL", level: 87, icon: Cpu },
  ],
  databases: [
    { name: "MongoDB", level: 85, icon: Database },
    { name: "PostgreSQL", level: 80, icon: Database },
    { name: "Redis", level: 60, icon: Database },
  ],
  tools: [
    { name: "Git & GitHub", level: 90, icon: Github },
    { name: "Docker", level: 65, icon: Server },
    { name: "Agile/Scrum", level: 85, icon: Wrench },
    { name: "Zustand/XState", level: 82, icon: Zap },
  ]
};

export const projects = [
  {
    title: "RMCRC – Rocky Mountain Construction Resource Center",
    description: "Developed a responsive digital platform for showcasing affordable housing financing services to developers, banks, and partners. Focused on deep SEO optimization and responsive design.",
    tech: ["JavaScript", "Bootstrap", "Styled Components", "SEO"],
    github: "#",
    live: "https://rmcrc.org",
    image: "https://i.ibb.co/7tXgvWtJ/Screenshot-2026-04-24-172008.png"
  },
  {
    title: "SSI Platform (COJ v3 & Indus v3)",
    description: "Production-grade decentralized identity platforms serving verifiers and issuers with secure credential workflows. Built with React 18 and high-concurrency backend logic.",
    tech: ["React 18", "TypeScript", "Vite", "GraphQL"],
    github: "#",
    live: "https://staging-indus-v3-portal.klefki.io",
    image: "https://i.ibb.co/LDZKLrtB/Screenshot-2026-04-24-181041.png"
  },
  {
    title: "Anti-Counterfeit QR Authentication",
    description: "System with scan intelligence to generate actionable insights — location, frequency, and device analytics — for issuers to prevent counterfeiting.",
    tech: ["Node.js", "Express", "QR Engine", "Analytics"],
    github: "#",
    live: "https://vlinder.io/product/trag/",
    image: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=800&auto=format&fit=crop"
  }
];

export const experience = [
  {
    role: "Associate Software Engineer",
    company: "Vlinder Labs Private Limited",
    location: "Bengaluru, India",
    period: "Jan 2025 – Present",
    description: [
      "Engineered production decentralized identity (SSI) platforms — COJ v3 & Indus v3.",
      "Reduced document retrieval latency by ~45% via a custom bulk download system with concurrency controls.",
      "Optimized data onboarding by 60% through an architected bulk import pipeline handling 10,000+ rows.",
      "Integrated XGBoost ML models for real-time risk analysis during authentication."
    ]
  },
  {
    role: "Software Trainee",
    company: "Velozion Technology Private Limited",
    location: "Bengaluru, India",
    period: "Aug 2024 – Dec 2024",
    description: [
      "Built and maintained responsive web UI for an organizational finance platform serving 200+ stakeholders.",
      "Reduced average page load time by 33% through image compression and DOM optimization.",
      "Implemented SEO best practices, improving organic page indexing by 25%."
    ]
  },
  {
    role: "ML Engineer Intern",
    company: "Shiash Info Solutions",
    location: "Chennai, India",
    period: "May 2024 - July 2024 (Approx)",
    description: [
      "Worked on Machine Learning model integration and data preprocessing pipelines.",
      "Assisted in development of internal AI tools and automation scripts."
    ]
  }
];

export const education = {
  degree: "Bachelor of Engineering in Computer Science",
  school: "Annamalai University",
  period: "2020 – 2024",
  grade: "CGPA: 8.3 / 10",
  achievements: ["Specialized in Full Stack Development", "Participated in university hackathons"]
};

export const contactInfo = {
  email: "kabilans646@gmail.com",
  phone: "+91 9080286985",
  linkedin: "https://linkedin.com/in/kabilan-s",
  github: "https://github.com/KABILAN-S3",
};
