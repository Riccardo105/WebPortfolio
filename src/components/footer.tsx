import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-row items-start">
      <p className="p-2">All rights reserved {"\u00A9"} 2025 Riccardo Barone</p>

      <div className="flex flex-row p-2 ml-4">
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
    </footer>
  );
}
