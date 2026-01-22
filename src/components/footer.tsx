import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 py-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-lg text-slate-400 space-y-4 md:space-y-0">
        <div>
          &copy; {new Date().getFullYear()} Riccardo. Built with precision.
        </div>
        <div className="flex space-x-6">
          <a
            href="https://github.com/Riccardo105"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/riccardo-barone/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
