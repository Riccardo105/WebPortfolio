"use client";
import React, { useState, useEffect, Suspense } from "react";
import { Projects } from "lib/assets";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, ArrowRight, Github, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// data for projects page
export interface ProjectsProps {
  id: number;
  title: string;
  overview: string;
  technologies: string;
  skillsLearnt: string;
  isLinkable: boolean; // determines the appearance of the button
  linkType?: string; // determines if projects leads to gitHub repo or file download
  link?: string; // points to either the gitHub repo or the file to download
  fileName?: string; // name with which the file will be downloaded
}

function ProjectShowcaseContent() {
  const searchParams = useSearchParams();
  const idFromUrl = searchParams.get("id"); // This gets "5" from ?id=5

  const [currentIndex, setCurrentIndex] = useState(0);

  // This effect runs whenever the URL ID changes
  useEffect(() => {
    if (idFromUrl) {
      const parsedId = parseInt(idFromUrl);
      const index = Projects.findIndex((p) => p.id === parsedId);

      if (index !== -1) {
        setCurrentIndex(index);
      }
    }
  }, [idFromUrl]); // Dependency array ensures it updates when the link is clicked

  const nextProject = () =>
    setCurrentIndex((prev) => (prev + 1) % Projects.length);
  const prevProject = () =>
    setCurrentIndex((prev) => (prev - 1 + Projects.length) % Projects.length);

  const project = Projects[currentIndex];

  // If data hasn't loaded or project is missing
  if (!project) return null;

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.main
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="max-w-5xl mx-auto px-6 pt-32 pb-12 flex-grow"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Project Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-2">
                  Project {project.id.toString().padStart(2, "0")}
                </h2>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                  {project.title}
                </h1>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-slate-600 leading-relaxed">
                  {project.overview}
                </p>
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs font-bold uppercase text-slate-400 mb-2 tracking-widest">
                    Technologies
                  </p>
                  <p className="text-sm text-slate-700 font-medium">
                    {project.technologies}
                  </p>
                </div>
              </div>

              {project.isLinkable && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-700 transition-all text-sm font-medium"
                >
                  {project.linkType === "github" ? (
                    <Github size={18} />
                  ) : (
                    <ExternalLink size={18} />
                  )}
                  View Project
                </a>
              )}
            </div>

            {/* Skills Learnt Box */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6">
                Technical Competencies
              </h3>
              <ul className="space-y-3">
                {project.skillsLearnt.split(",").map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-start text-sm text-slate-600"
                  >
                    <span className="text-slate-400 mr-2">•</span>
                    {skill.trim()}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.main>
      </AnimatePresence>

      <footer className="pb-12 pt-6 border-t border-slate-50">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-center gap-8">
          <button
            onClick={prevProject}
            className="p-2 text-slate-400 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft size={24} />
          </button>

          <div className="flex gap-3">
            {Projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-8 bg-slate-900"
                    : "w-1.5 bg-slate-200"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextProject}
            className="p-2 text-slate-400 hover:text-slate-900 transition-colors"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </footer>
    </div>
  );
}
export default function ProjectShowcase() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <ProjectShowcaseContent />
    </Suspense>
  );
}
