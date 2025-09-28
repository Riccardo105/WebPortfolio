import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-row items-start font-serif mt-16">
      <p className="p-2">All rights reserved {"\u00A9"} 2025 Riccardo Barone</p>

      <div className="flex flex-row p-2 ml-4">
        <Link
          className="relative group fa-solid fa-envelope px-2 xl:px-4"
          href="mailto:riccardo@riccardobarone.dev?subject=Contact%20from%20Portfolio&body=Hi%20Riccardo%2C%0A"
        >
          <span className=" absolute left-full top-1/2 -translate-y-1/2 ml-2 hidden group-hover:inline-block bg-white text-black text-xs font-serif px-2 py-1 rounded shadow-md z-10  whitespace-nowrap">
            default email app must be set up to use this link
          </span>
        </Link>
        <Link
          className="fa-brands fa-instagram px-2 xl:px-4"
          href="https://www.instagram.com/_.riccardobarone._/"
          target="_blank"
          rel="noopener noreferrer"
        ></Link>
        <Link
          className="fa-brands fa-linkedin px-2 xl:px-4"
          href="https://www.linkedin.com/in/riccardo-barone/"
          target="_blank"
          rel="noopener noreferrer"
        ></Link>
        <Link
          className="fa-brands fa-github xl:px-4"
          href="https://github.com/Riccardo105"
          target="_blank"
          rel="noopener noreferrer"
        ></Link>
      </div>
    </footer>
  );
}
