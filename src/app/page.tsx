"use client";
import React from "react";
import Carousel from "components/projectCarousel";
import { ProjectsHomePage } from "lib/assets";
import ContactMeForm from "components/contactMeForm";

export default function Home() {
  const myResume = "/files/CV.pdf";

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section id="home" className="max-w-5xl mx-auto px-6 pt-24 pb-20">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
          Hey, I’m Riccardo.
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 max-w-2xl leading-relaxed">
          I am a final-year Computer Science student aspiring to a career in the
          technology sector, with a focus on building and securing the reliable
          systems of tomorrow
        </p>

        <a
          href="/files/CV.pdf"
          download="Riccardo_Barone_Resume.pdf"
          className="mt-10 inline-flex items-center px-8 py-3 bg-slate-900 text-white font-medium rounded-2xl hover:bg-slate-800 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          Download Resume
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </a>
      </section>

      {/* About Preview */}
      <section
        id="about"
        className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-100"
      >
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400">
              About
            </h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              I am a final-year Computer Science student at the University of
              Wincehster with a mature, strategic approach to software
              engineering and a professional background in managing
              high-pressure environments. I am driven by a commitment to
              building secure, reliable, and inclusive systems that address
              complex technical challenges with ethical integrity.
            </p>
            <a
              href="/about"
              className="inline-flex items-center text-sm font-semibold text-slate-900 group"
            >
              Learn more about my journey
              <svg
                className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section
        id="projects"
        className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-100"
      >
        <div className="mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-2">
            Selected Work
          </h2>
          <p className="text-slate-600">A few project I've worked on</p>
        </div>

        <Carousel projectsPreview={ProjectsHomePage} />
      </section>

      {/* Contact Preview */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-6 py-24 border-t border-slate-100"
      >
        {/* Header: Full Width of the 5xl container */}
        <div className="mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-6">
            Get In Touch
          </h2>
          <p className="text-3xl md:text-4xl font-medium text-slate-900 leading-tight">
            Available for new opportunities and technical collaborations.
          </p>
        </div>

        {/* Content Grid: Side-by-Side on Desktop, Stacked on Mobile */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="text-slate-600 space-y-6">
            <p className="text-lg leading-relaxed">
              I am currently seeking to apply my skills within a professional
              engineering or security environment. If you have a specific
              project in mind or a role that aligns with my profile, please
              reach out.
            </p>
          </div>

          <div className="w-full">
            <ContactMeForm />
          </div>
        </div>
      </section>
    </main>
  );
}
