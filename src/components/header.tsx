"use client";
import { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function MenuItems({ styling }: { styling: string }) {
  return (
    <nav className={styling}>
      <a href="/" className="hover:text-slate-900 transition-colors">
        Home
      </a>
      <a href="/about" className="hover:text-slate-900 transition-colors">
        About
      </a>
      <a href="/projects" className="hover:text-slate-900 transition-colors">
        Projects
      </a>
      <a href="/contact" className="hover:text-slate-900 transition-colors">
        Contact
      </a>
    </nav>
  );
}

function SocialLinks({ styling }: { styling: string }) {
  return (
    <div className={styling}>
      <a
        href="https://github.com/Riccardo105"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-600 hover:text-slate-900 transition-colors"
      >
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/riccardo-barone/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-600 hover:text-slate-900 transition-colors"
      >
        LinkedIn
      </a>
    </div>
  );
}

export default function Header() {
  const [isMenuOpen, setMenuState] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    if (isMenuOpen) {
      // Start exit animation
      if (menuRef.current) {
        menuRef.current.classList.add("motion-translate-y-out-100");
      }
      setTimeout(() => setMenuState(false), 500); // Matches animation duration
    } else {
      setMenuState(true);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Burger menu icon */}
        <div className="md:hidden">
          <GiHamburgerMenu
            className="text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        <div className="font-semibold text-lg tracking-tight">Riccardo</div>

        {/* Desktop menu - Hidden on mobile */}
        <MenuItems styling="hidden md:flex items-center space-x-8 text-xl font-medium text-slate-600" />

        {/* Desktop Socials */}
        <SocialLinks styling="sm:flex items-center space-x-4  text-md md:text-lg font-medium" />
      </div>

      {/* Mobile fullscreen menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 w-full h-screen bg-white z-[60] flex flex-col p-8 motion-translate-y-in-100 motion-duration-500"
        >
          <div className="flex justify-end">
            {/* Back/Close Arrow */}
            <button onClick={toggleMenu} className="text-xl p-2">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
          </div>

          <div className="flex flex-col h-full text-center items-center justify-between">
            <MenuItems styling="flex flex-col gap-8 text-lg  mt-10 text-slate-600" />

            <div className="pb-12 border-t border-slate-100 pt-8">
              <SocialLinks styling="flex space-x-8 text-xl text-slate-600" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
