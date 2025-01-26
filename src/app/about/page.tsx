import React from "react";
import Image, { StaticImageData } from "next/image";
import AboutMe from "../../../public/images/aboutMe.jpg";

export default function Page() {
  return (
    <div className="flex flex-col  w-full items-center ">
      <div className="flex flex-col mx-auto text-white p-auto 2xl:w-5/6 2xl:flex-1 2xl:mr-3 xl:mx-0 ">
        <div className="flex flex-col items-center justify-center mx-4 xl:flex-row xl:w-11/12 xl:justify-between xl:mt-20 ">
          <Image
            src={AboutMe}
            alt="AboutMe Picture"
            className=" max-w-full overflow-hidden  md:w-auto md:h-[800px] xl:hidden flex-1"
          ></Image>
          <div className="flex flex-col items-center justify-center mx-4 flex-1 md:mx-12 flex-1">
            <h1 className="text-start w-full mx-auto mt-10 text-4xl  text-white border-b-2 border-white ">
              Who am I?
            </h1>
            <p className="mt-4 mx-auto text-center font-serif 2xl:text-start">
              Hi, I’m
              <span className="text-red-700 font-bold text-2xl ml-1">
                Riccardo Barone
              </span>
              , and if you’ve made it here, you already know the basics—I’m a
              23-year-old Italian living in Winchester, UK, with a background in
              hospitality and a growing passion for technology. But let me take
              you a little deeper into my story.
            </p>
            <p className="mt-4 mx-auto text-center font-serif 2xl:text-start">
              My journey from chef to computer science student has been anything
              but conventional. Working in hospitality taught me discipline,
              creativity, and the importance of adaptability—skills that have
              proven invaluable as I navigate the world of tech. Now in my
              second year of a Computer Science degree, I’m fully immersed in
              exploring how technology can solve real-world problems and push
              boundaries in innovation.
            </p>
            <p className="mt-4 mx-auto text-center font-serif 2xl:text-start">
              Beyond my professional aspirations, I’m a firm believer in the
              power of personal growth and stepping outside my comfort zone. I
              thrive on activities that challenge me mentally and physically,
              from diving into thought-provoking books to strategizing in video
              games or hitting the basketball court. I’m also passionate about
              finance and investing, as I see them as tools for achieving
              long-term freedom and flexibility. Building custom PCs is another
              passion of mine—it’s where my love for technology meets hands-on
              creativity, and it’s a hobby that keeps me inspired and curious.
            </p>
            <p className="mt-4 mx-auto text-center font-serif 2xl:text-start">
              One of the most transformative experiences of my life was
              traveling to Bali with Think Pacific (as seen in the photo).
              Volunteering there allowed me to immerse myself in a new culture,
              contribute to meaningful projects, and grow as an individual. It
              reinforced my belief in the importance of adaptability, cultural
              understanding, and embracing new perspectives—values I carry with
              me every day.
            </p>
            <p className="mt-4 mx-auto text-center font-serif 2xl:text-start">
              Looking ahead, I’m excited to continue growing as a technologist,
              exploring areas like artificial intelligence, cybersecurity, and
              full-stack development. I’m eager to collaborate with like-minded
              individuals, take on new challenges, and contribute to projects
              that push the boundaries of what’s possible.
            </p>
          </div>
          <Image
            src={AboutMe}
            alt="AboutMe Picture"
            className=" hidden max-w-full overflow-hidden  md:w-auto md:h-[800px] xl:block"
          ></Image>
        </div>

        <div className="flex flex-col justify-center mx-4  lg:justify-start xl:w-11/12  ">
          <h1 className="text-start w-full text-4xl mt-10 text-white border-b-2 border-white xl:ml-10">
            Skills & Expertise
          </h1>
          <h2 className="mt-4 my-2 text-lg mx-auto text-center lg:text-start font-serif lg:ml-10">
            Through my academic journey, I’ve developed a diverse skill set
            across various technical domains:
          </h2>
          <ul className="mx-auto lg:mx-10 font-serif my-2">
            <li className="my-2">
              -
              <span className="font-bold text-red-700 text-lg ml-1">
                Software Design & Development
              </span>
              : Proficient in Python, with experience in software development
              lifecycles, UML diagrams, and user-centered design.
            </li>
            <li className="my-2">
              -
              <span className="font-bold text-red-700 text-lg ml-1">
                Web Development
              </span>
              : Skilled in full-stack development and progressive web apps
              (PWA). Built projects using Node.js with JavaScript and Next.js
              with React + TypeScript.
            </li>
            <li className="my-2">
              -
              <span className="font-bold text-red-700 text-lg ml-1">
                Database Management
              </span>
              : Experience with relational databases, SQL, normalization, and
              data integrity. Worked with MongoDB (NoSQL) for web development
              projects.
            </li>
            <li className="my-2">
              -
              <span className="font-bold text-red-700 text-lg ml-1">
                Cybersecurity
              </span>
              : Understanding of CIA triad, cryptographic tools, risk
              assessment, and security policies.
            </li>
            <li className="my-2">
              -
              <span className="font-bold text-red-700 text-lg ml-1">
                Network Security
              </span>
              : Applied knowledge in Packet Tracer to secure various network
              topologies. Configured device security, server-based AAA, and
              failover to local authentication. Implemented Access Control
              Lists, port security, L2 VLAN security, and site-to-site VPNs. Set
              up local SPAN and sniffer for network monitoring.
            </li>
            <li className="my-2">
              -
              <span className="font-bold text-red-700 text-lg ml-1">
                Data Structures & Operating Systems
              </span>
              : Strong grasp of data structures, algorithms, and binary algebra.
              Knowledge of operating systems, including processes, threads, and
              memory management.
            </li>
            <li className="my-2">
              -
              <span className="font-bold text-red-700 text-lg ml-1">
                AI & Machine Learning
              </span>
              : Coded a simple AI agent in Python using the A* algorithm.
              Trained a machine learning model using logistic regression.
              Familiar with intelligent agents, search algorithms, and
              supervised learning.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
