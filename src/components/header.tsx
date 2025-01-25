"use client";
import { useState, useRef } from "react";

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
></link>;

function MenuItems({ styling }: { styling: string }) {
  return (
    <ul className={styling}>
      <li
        className="py-3 xl:px-6 "
        onClick={() => {
          window.location.href = `/`;
        }}
      >
        Home
      </li>
      <li
        className="py-3 xl:px-6"
        onClick={() => {
          window.location.href = `/about`;
        }}
      >
        About
      </li>
      <li
        className="py-3 xl:px-6"
        onClick={() => {
          window.location.href = `/projects`;
        }}
      >
        My Projects
      </li>
      <li
        className="py-3 xl:px-6"
        onClick={() => {
          window.location.href = `/contact`;
        }}
      >
        Contact
      </li>
      <li
        className="py-3 xl:px-6"
        onClick={() => {
          window.location.href = `/services-`;
        }}
      >
        Services
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
    <header className="pt-4 px-4 pb-1 flex justify-between xl:justify-end xl:w-11/12 2xl:w-5/6">
      {/* burger menu icon, disappear on deskop as entries are shown in main header */}
      <div className="items-start xl:hidden">
        <i
          className="fa-solid fa-bars text-3xl xl:hidden"
          onClick={HandleMenuState}
        ></i>
      </div>
      {/* menu entries on desktop within main header */}
      <div>
        <MenuItems styling=" flex-row text-2xl hidden  xl:flex font-sans cursor-pointer" />
      </div>
      <div className=" items-end text-3xl xl:pl-2 xl:hidden ">
        <a className="fa-solid fa-envelope px-2 xl:px-4"></a>
        <a
          className="fa-brands fa-instagram px-2 xl:px-4"
          href="https://www.instagram.com/_.riccardobarone._/"
        ></a>
        <a
          className="fa-brands fa-linkedin px-2 xl:px-4"
          href="https://www.linkedin.com/in/riccardo-barone/"
        ></a>
        <a
          className="fa-brands fa-github xl:px-4"
          href="https://github.com/Riccardo105"
        ></a>
      </div>
      {/* menu entries on mobile within own window  */}
      {isMenuOpen && (
        <div
          ref={MenuRef}
          className="BurgerMenu fixed top-0 left-0 w-full h-screen bg-black bg-opacity-100 flex p-6 flex-col z-50 motion-translate-y-in-100 motion-duration-1000"
        >
          <div className="flex flex-row justify-between w-full overflow-hidden cursor-pointer">
            <MenuItems styling="mt-14 ml-4 text-3xl" />
            <i
              className="fa-solid fa-arrow-left text-2xl mt-10 "
              onClick={() => {
                HandleExitingAnimation(); // Call the exiting animation function
                HandleMenuState(); // Call the menu state function
              }}
            ></i>
          </div>
          {/* social links within menu window */}
          <div className=" items-start text-3xl ml-4 mt-6 cursor-pointer ">
            <a className="fa-solid fa-envelope pr-2"></a>
            <a
              className="fa-brands fa-instagram px-2"
              href="https://www.instagram.com/_.riccardobarone._/"
            ></a>
            <a
              className="fa-brands fa-linkedin px-2"
              href="https://www.linkedin.com/in/riccardo-barone/"
            ></a>
            <a
              className="fa-brands fa-github"
              href="https://github.com/Riccardo105"
            ></a>
          </div>
        </div>
      )}
    </header>
  );
}
