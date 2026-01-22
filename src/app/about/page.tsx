import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Riccardo Barone",
  description:
    "Final-year Computer Science student with a background in leadership and a passion for secure, scalable technology.",
};

const skillCategories = [
  {
    title: "Software Engineering",
    skills: [
      "Java (OOP)",
      "Python",
      "Unified Modelling Language",
      "Design Patterns (MVC, DAO/DTO)",
      "AI Logic Agents (A*)",
    ],
    description: "Modular development and architectural design patterns.",
  },
  {
    title: "Web & Full-Stack",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "PWA", "TailwindCSS"],
    description: "Responsive front-end and performant server-side rendering.",
  },
  {
    title: "Networking",
    skills: [
      "Network Design",
      "Layer 3 routing",
      "VPNs (Site-to-Site)",
      "VLAN Security",
    ],
    description: "Architecting and securing distributed network topologies.",
  },
  {
    title: "Cyber Security",
    skills: [
      "Penetration Testing",
      "Cyber Security Principles",
      "OSI Model",
      "Risk Management",
    ],
    description: "Security auditing and the penetration testing lifecycle.",
  },
  {
    title: "Data Systems",
    skills: [
      "SQL & NoSQL",
      "Relational Design (Normalization)",
      "Hibernate (ORM)",
      "MongoDB & Mongoose",
      "MySQL",
    ],
    description: "Schema architecture and efficient data persistence.",
  },
  {
    title: "Data Science & Insights",
    skills: [
      "Inferential Statistics (T-Tests)",
      "Association Rule Mining",
      "Mediation Analysis",
      "Data Visualization",
      "Correlation Analysis",
    ],
    description: "Extracting actionable insights through statistical modeling.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* --- NARRATIVE SECTION --- */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4">
          My Journey
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
          From High-Pressure Kitchens to{" "}
          <span className="text-slate-500">Computer Science.</span>
        </h1>

        <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
          <p>
            Hi, I’m{" "}
            <span className="text-slate-900 font-semibold">
              Riccardo Barone
            </span>
            . My path to Computer Science wasn’t conventional. I spent years in
            the hospitality industry, rising to the level of Junior Sous Chef.
            That environment taught me the foundations of
            <span className="text-slate-900">
              {" "}
              extreme discipline, leadership under pressure, and rapid
              problem-solving
            </span>
            .
          </p>
          <p>
            Now a final-year student, I’ve translated that work ethic into
            technology. I view code and infrastructure through the same lens as
            a high-end kitchen: every component must be precise, the workflow
            must be optimized, and the final output must be reliable.
          </p>
          <p>
            Whether it's volunteering in Bali with{" "}
            <span className="italic font-medium text-slate-700">
              Think Pacific
            </span>{" "}
            or designing secure networks, I thrive on challenges that force me
            out of my comfort zone and require a strategic, analytical mindset.
          </p>
        </div>
      </section>

      {/* --- SKILLS GRID --- */}
      <section className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-2">
              Expertise
            </h2>
            <p className="text-3xl font-medium text-slate-900">
              Technical Competencies
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="p-8 bg-white border border-slate-200 rounded-xl hover:border-slate-600 transition-all duration-300 w-full md:w-80 flex-grow max-w-sm lg:max-w-none lg:flex-initial"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {category.title}
                </h3>
                <p className="text-[10px] text-slate-800  font-semibold uppercase tracking-widest mb-4 h-8 flex items-center">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="flex items-start text-sm text-slate-600"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 shrink-0"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CALL TO ACTION --- */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Let's build something secure.
        </h3>
        <p className="text-slate-600 mb-8">
          I am looking to collaborate on projects that require a disciplined
          approach to engineering and a security-first mindset.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-all"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
}
