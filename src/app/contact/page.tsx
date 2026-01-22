import React from "react";
import Link from "next/link";
import ContactMeForm from "components/contactMeForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Riccardo Barone",
  description:
    "Get in touch for professional inquiries and technical collaborations.",
};

export default function Contact() {
  return (
    <div className="bg-white min-h-screen text-slate-900">
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4">
            Contact
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Let’s discuss your{" "}
            <span className="text-slate-500">next project.</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Contact Details */}
          <div className="space-y-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-6 border-b border-slate-100 pb-2">
                Contact Details
              </p>
              <ul className="space-y-4">
                <li className="flex flex-col">
                  <span className="text-xs text-slate-400 uppercase font-medium">
                    Email
                  </span>
                  <Link
                    href="mailto:riccardo.work.uk@gmail.com?subject=Contact%20from%20Portfolio"
                    className="text-lg text-slate-600 hover:text-slate-800 transition-colors"
                  >
                    riccardo.work.uk@gmail.com
                  </Link>
                </li>
                <li className="flex flex-col">
                  <span className="text-xs text-slate-400 uppercase font-medium">
                    Phone
                  </span>
                  <span className="text-lg text-slate-600">+44 7796416717</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-xs text-slate-400 uppercase font-medium">
                    Location
                  </span>
                  <span className="text-lg text-slate-600">Winchester, UK</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-6 border-b border-slate-100 pb-2">
                Social Profiles
              </p>
              <div className="flex gap-6">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/riccardo-barone/"
                  className="text-slate-600 hover:text-slate-800 font-medium transition-colors"
                >
                  LinkedIn
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Riccardo105"
                  className="text-slate-600 hover:text-slate-800 font-medium transition-colors"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-100">
            <p className="text-xl font-bold text-slate-900 mb-6">
              Send an enquiry
            </p>
            <ContactMeForm />
          </div>
        </div>
      </div>
    </div>
  );
}
