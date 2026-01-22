import { CarouselItem } from "components/projectCarousel";
import { ProjectsProps } from "app/projects/page";

export const ProjectsHomePage: CarouselItem[] = [
  {
    id: 1,
    title: "Java Inventory & ERP System",
    description:
      "A modular stock management system built with Java and Hibernate, featuring DTO/DAO patterns and cloud-hosted MySQL.",
  },
  {
    id: 2,
    title: "Next.js Engineering Portfolio",
    description:
      "A high-performance, responsive web hub built with React and TypeScript to showcase software architecture and live projects.",
  },
  {
    id: 3,
    title: "Full-Stack Training PWA",
    description:
      "A high-performance Progressive Web App featuring offline capabilities, MongoDB persistence, and server-side rendering.",
  },
  {
    id: 4,
    title: "AI Pathfinding & Logic Agent",
    description:
      "Implementation of A* search algorithms and PDDL planning to solve automated logistical sorting challenges in Python.",
  },
  {
    id: 5,
    title: "Secure Distributed Infrastructure",
    description:
      "End-to-end design and hardening of a multi-node network, implementing Site-to-Site VPNs, ACLs, and VLAN security.",
  },
  {
    id: 6,
    title: "Full-Cycle Penetration Test",
    description:
      "A comprehensive security audit of a target system, covering reconnaissance, vulnerability scanning, and successful exploitation.",
  },
  {
    id: 7,
    title: "Data Science & Statistical Insights",
    description:
      "Advanced analytics utilizing the CRISP-DM framework, Association Rule Mining (Apriori), and mediation modeling for behavioral insights.",
  },
];

export const Projects: ProjectsProps[] = [
  {
    id: 1,
    title: "Java Inventory & ERP System",
    overview:
      "A tiered Java application developed to manage complex inventory lifecycles. The system utilizes a modular architecture to ensure separation of concerns between data persistence and business logic. Focused on reliability, the project integrates cloud-hosted databases for high availability.",
    technologies: "Java, Hibernate (ORM), MySQL, Aiven Cloud, IntelliJ IDEA",
    skillsLearnt:
      "Object-Oriented Design, DTO/DAO Patterns, Service Layer Architecture, MVC, Database Persistence, Cloud Hosting",
    isLinkable: true,
    linkType: "github",
    link: "https://github.com/Riccardo105/StockManagmentSystem",
  },
  {
    id: 2,
    title: "Next.js Engineering Portfolio",
    overview:
      "A high-performance personal portfolio engineered with Next.js and TypeScript. Designed as a central professional hub, it features responsive layouts, optimized asset loading, and a clean, minimalist UI to showcase technical projects and professional trajectory.",
    technologies: "React, Next.js 14+, TypeScript, TailwindCSS",
    skillsLearnt:
      "Component Architecture, Static Site Generation (SSG), Responsive UI Design, Performance Optimization, Type-Safe Development",
    isLinkable: true,
    linkType: "github",
    link: "https://github.com/Riccardo105/WebPortfolio",
  },
  {
    id: 3,
    title: "Full-Stack Training PWA",
    overview:
      "A Progressive Web App designed as an interactive training hub. Utilizing Server-Side Rendering (SSR) for SEO and performance, the platform manages user progress and exercise data via a NoSQL backend, offering a native app-like experience on mobile devices.",
    technologies: "Node.js, Express, MongoDB, EJS, TailwindCSS",
    skillsLearnt:
      "PWA Implementation, Full-Stack Integration, NoSQL Database Management, SSR Methodologies, User Authentication Systems",
    isLinkable: true,
    linkType: "github",
    link: "https://github.com/Riccardo105/BasketballLearningPlatform",
  },
  {
    id: 4,
    title: "AI Pathfinding & Logic Agent",
    overview:
      "An exploration into automated problem-solving and predictive modeling. The project features a custom AI agent using the A* search algorithm for spatial logic problems and a machine learning implementation for statistical classification tasks.",
    technologies:
      "Python, PDDL, Scikit-learn, A* Algorithm, Logistic Regression",
    skillsLearnt:
      "Heuristic Search Algorithms, Planning Domain Definition Language, Supervised Learning, Statistical Classification, Logic Modeling",
    isLinkable: true,
    linkType: "github",
    link: "https://github.com/Riccardo105/Artificial_Intelligence",
  },
  {
    id: 5,
    title: "Secure Distributed Infrastructure",
    overview:
      "A full-scale modernization of a legacy infrastructure into a high-availability, secure distributed network. The project involved transitioning a poorly constructed environment into a resilient 3-tier topology. I implemented GLBP at the distribution layer for inter-VLAN routing with failover and load balancing, alongside EIGRP at the core layer for rapid convergence. To ensure hardware redundancy and increased bandwidth, I utilized Switch Stacking at Layer 2 and LACP (EtherChannel) across critical uplinks.",
    technologies:
      "Cisco Packet Tracer, GLBP, EIGRP, LACP, AAA Server, VPN Protocols",
    skillsLearnt:
      "3-Tier & 2-Tier Network Design, Layer 3 Load Balancing (GLBP), Core Routing Optimization (EIGRP), Hardware Redundancy (Switch Stacking), Link Aggregation (LACP), VLAN Segmentation & Broadcast Storm Mitigation, Site-to-Site VPN, AAA Authentication, Port Security, Access Control Lists (ACLs), OSI Model Principles",
    isLinkable: false,
  },
  {
    id: 6,
    title: "Full-Cycle Penetration Test",
    overview:
      "A systematic security assessment of a Windows-based environment, following industry-standard penetration testing phases. The project involved mapping the attack surface, identifying critical remote command execution (RCE) vulnerabilities, and leveraging system misconfigurations to escalate privileges to SYSTEM level.",
    technologies:
      "Metasploit, Nmap, Burp Suite, OpenVAS, Hashcat, PowerUp.ps1, MSFvenom",
    skillsLearnt:
      "Vulnerability Assessment & Scanning, SMB & HTTP Enumeration, Exploit Development (Metasploit), Privilege Escalation (Service Hijacking), Credential Harvesting & Password Cracking, Technical Reporting, CIA triad principles, OSI Model Principles",
    isLinkable: false,
  },
  {
    id: 7,
    title: "Data Science & Statistical Insights",
    overview:
      "A dual-focus analytics project applying the CRISP-DM framework to complex datasets. I utilized Association Rule Mining to optimize retail strategies and conducted advanced inferential statistics—including Mediation Analysis and T-Tests—to investigate the correlation between social media usage and mental health indicators. The project bridges the gap between raw data processing and high-level psychological and commercial insights.",
    technologies:
      "Python (Pandas, Seaborn), Weka (Apriori), Excel, SPSS/Statistical Modeling",
    skillsLearnt:
      "CRISP-DM Methodology, Association Rule Mining (Lift/Leverage/Conviction), Inferential Statistics (T-Tests/Correlation), Mediation & Causal Modeling, Exploratory Data Analysis (EDA), Data Visualization",
    isLinkable: false,
  },
];
