import React from "react";
import Link from "next/link";
import ContactMeForm from "components/contactMeForm";

export default function Contact() {
  return (
    <div className="flex flex-col mt-4 mx-4 font-serif xl:w-5/6 xl:mx-auto xl:mt-20">
      <p className="border-b-2 border-black mb-2 w-1/2 text-lg font-bold">
        Contact Info
      </p>
      <ul>
        <li>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/riccardo-barone/"
          >
            Linkedin
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/_.riccardobarone._/"
          >
            Instagram
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Riccardo105"
          >
            GitHub
          </Link>
        </li>
        <li>
          <Link
            href="mailto:riccardo.work.uk@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Riccardo%2C%0A"
            className="relative group"
          >
            riccardo.work.uk@gmail.com
            <span className=" absolute left-full top-1/2 -translate-y-1/2 ml-2 hidden xl:group-hover:inline-block bg-white text-black text-xs font-serif px-2 py-1 rounded shadow-md z-10  whitespace-nowrap">
              default email app must be set up to use this link
            </span>
          </Link>
        </li>

        <li> +44 7796416717</li>
      </ul>

      <div className="mt-4">
        <p className="border-b-2 border-black mb-2 text-lg font-bold">
          Send me a messagge
        </p>
        <ContactMeForm />
      </div>
    </div>
  );
}
