"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoArrowBack } from "react-icons/io5";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
></link>;

function MenuItems({ styling }: { styling: string }) {
  return (
    <ul className={styling}>
      <li className="py-2 xl:px-6 2xl:px-8">
        <Link href="/" className="block w-full h-full hover:scale-110">
          Home
        </Link>
      </li>
      <li className="py-3 xl:px-6 2xl:px-8">
        <Link href="/about" className="block w-full h-full hover:scale-110">
          About
        </Link>
      </li>
      <li className="py-3 xl:px-6 2xl:px-8">
        <Link href="/projects" className="block w-full h-full hover:scale-110">
          My Projects
        </Link>
      </li>
      <li className="py-3 xl:px-6 2xl:px-8">
        <Link href="/contact" className="block w-full h-full hover:scale-110">
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default function Header() {
  const [isMenuOpen, SetMenuState] = useState(false);
  const MenuRef = useRef<HTMLDivElement | null>(null);

  function HandleMenuState() {
    if (isMenuOpen) {
      // If the menu is open, apply the timeout to close it
      setTimeout(() => {
        SetMenuState(false); // Close the menu after the timeout
      }, 1000); // Adjust the timeout duration according to the animation duration
    } else {
      // If the menu is closed, immediately open it
      SetMenuState(true);
    }
  }

  function HandleExitingAnimation() {
    if (MenuRef.current) {
      // Apply slide-out animation on back arrow click
      MenuRef.current.classList.add("motion-translate-y-out-100");
    }
  }

  return (
    <header className="pt-4 px-4 pb-1 xl:mt-6 flex justify-between xl:justify-center  multi-cyan-gradient font-sans text-white">
      {/* burger menu icon, disappear on deskop as entries are shown in main header */}
      <div className="items-start xl:hidden">
        <i className=" text-3xl xl:hidden" onClick={HandleMenuState}>
          <GiHamburgerMenu />
        </i>
      </div>
      {/* the menu entries are within main header on destop. this hides on mobile */}
      <div>
        <MenuItems styling=" flex-row text-3xl hidden  xl:flex cursor-pointer" />
      </div>
      {/* on mobile social media links replace menu entries*/}
      <div className="flex  items-center flex-row text-3xl xl:pl-2 xl:hidden ">
        <a
          className="px-2"
          href="mailto:riccardo@riccardobarone.dev?subject=Contact%20from%20Portfolio&body=Hi%20Riccardo%2C%0A"
        >
          <FaEnvelope />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="px-2"
          href="https://www.instagram.com/_.riccardobarone._/"
        >
          <SiInstagram />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="px-2"
          href="https://www.linkedin.com/in/riccardo-barone/"
        >
          <FaLinkedin />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="px-2"
          href="https://github.com/Riccardo105"
        >
          <FaGithub />
        </a>
      </div>
      {/* menu entries on mobile within own window  */}
      {isMenuOpen && (
        <div
          ref={MenuRef}
          className="BurgerMenu fixed top-0 left-0 w-full h-screen bg-opacity-100 multi-cyan-gradient flex p-6 flex-col z-50 motion-translate-y-in-100 motion-duration-1000"
        >
          <div className="flex flex-row justify-between w-full overflow-hidden cursor-pointer">
            <MenuItems styling="mt-14 ml-4 text-3xl" />
            <i
              className="text-2xl mt-16 w-fit"
              onClick={() => {
                HandleExitingAnimation(); // Call the exiting animation function
                HandleMenuState(); // Call the menu state function
              }}
            >
              <IoArrowBack className="w-8 h-8 " />
            </i>
          </div>
          {/* social links within menu window */}
          <div className=" flex flex-row items-start text-3xl ml-4 mt-6 cursor-pointer ">
            <a
              className="px-2"
              href="mailto:riccardo@riccardobarone.dev?subject=Contact%20from%20Portfolio&body=Hi%20Riccardo%2C%0A"
            >
              <FaEnvelope />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="px-2"
              href="https://www.instagram.com/_.riccardobarone._/"
            >
              <SiInstagram />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="px-2"
              href="https://www.linkedin.com/in/riccardo-barone/"
            >
              <FaLinkedin />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="px-2"
              href="https://github.com/Riccardo105"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
