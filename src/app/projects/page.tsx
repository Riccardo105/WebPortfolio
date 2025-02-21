"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { useEffect } from "react";

import Basketball from "../../../public/images/Basketball.jpg";
import GiftWrapping from "../../../public/images/GiftWrapping.jpeg";
import CraneAI from "../../../public/images/CraneAI.jpg";
import NetworkSecurity from "../../../public/images/NewtworkSecurity.webp";
import Portfolio from "../../../public/images/Portofolio.webp";

// data for projects page
interface ProjectsProps {
  id: number;
  title: string;
  image: StaticImageData;
  overview: string;
  technologies: string;
  skillsLearnt: string;
  linkType: string;
  link: string;
  isDownloadable: boolean;
  fileName?: string;
}

const Projects: ProjectsProps[] = [
  {
    id: 1,
    title: "BasketBallLearningPlatform",
    image: Basketball,
    overview:
      "The Basketball Learning Platform is a Progressive Web App (PWA) developed as part of my web development module. Designed as a training hub for basketball enthusiasts, it provides a variety of exercises to help users enhance their skills. Users can create personalized accounts to track completed exercises and monitor their progress over time. The app leverages server-side rendering (SSR) for improved performance and is integrated with a MongoDB database to ensure a seamless and dynamic user experience. As a PWA, it offers the added convenience of being installable on mobile devices, making it easily accessible for on-the-go training.",
    technologies: "JavaScript, nodeJS, EJS, html, mongoDB, TailwindCSS",
    skillsLearnt:
      "Full-stack development, Progressive Web Apps, Database Management, API Development,",
    linkType: "github",
    link: "bla",
    isDownloadable: false,
  },
  {
    id: 2,
    title: "Web Portfolio",
    image: Portfolio,
    overview:
      "This project is my personal web portfolio, a platform designed to introduce myself, showcase my skills, and present my projects in a professional and engaging manner. Visitors can explore my background, browse through my work, and download my resume directly from the site. Additionally, a dedicated contact section allows potential collaborators or employers to easily reach out to me. Building on the experience gained from previous projects, I focused on creating a modern, responsive, and user-friendly interface that reflects my growth as a developer. This portfolio serves as a central hub for my professional identity and accomplishments.",
    technologies: "React, Next.js, TypeScript, tailwind CSS, ",
    skillsLearnt:
      "Advanced front-end development, responsive design, TypeScript integration, performance optimization, modern web development practices",
    linkType: "github",
    link: "bla",
    isDownloadable: false,
  },

  {
    id: 3,
    title: "Crane AI",
    image: CraneAI,
    overview:
      "This project was part of my AI and Machine Learning module, where I explored core concepts of artificial intelligence, including agents, environments, and search algorithms. I learned about designing AI systems using logical relations and transition models, particularly using PDDL (Planning Domain Definition Language). Additionally, the module introduced machine learning concepts. The project consisted of two parts: the first involved programming an AI agent to solve a crate-sorting problem, for which I implemented the A* algorithm. The second part focused on training a machine learning model using logistic regression on a provided dataset. This project deepened my understanding of AI problem-solving and machine learning techniques.",
    technologies:
      "Python,PDDL, A* algorithm, logistic regression, scikit-learn, and AI problem-solving frameworks",
    skillsLearnt:
      "AI problem-solving, search algorithms, logic-based AI design, machine learning model training, and data analysis using logistic regression",
    linkType: "github",
    link: "bla",
    isDownloadable: false,
  },
  {
    id: 4,
    title: "Network Security",
    image: NetworkSecurity,
    overview:
      "This project was part of my Network Security module, where we were given a specific network topology and tasked with applying the knowledge gained throughout the course to secure it. The focus of the project was on implementing a range of security measures, including basic device security, configuring access controls, and setting up secure communication through VPNs. I also explored several network security techniques, such as monitoring traffic and preventing unauthorized access, to ensure the integrity and safety of the network. Using Packet Tracer, I simulated and tested each configuration to ensure the network was both secure and functional, ensuring that all devices and communication links were protected according to industry-standard practices. This hands-on approach allowed me to gain practical experience in securing real-world network environments.",
    technologies: "Packet tracer",
    skillsLearnt:
      "Network Security, AAA, site-to-site VPN, ACL, port security, Packet Tracer, local span and sniffer, L2 VLAN security",
    linkType: "download",
    link: "/files/CV.pdf",
    isDownloadable: true,
    fileName: "Network_Security_project",
  },
  {
    id: 5,
    title: "GiftWrappingService",
    image: GiftWrapping,
    overview:
      "This was my first-ever project for my software design and development module. While relatively simple, it played a crucial role in helping me get accustomed to coding. The project is a service where users can customize the wrapping of a gift by selecting options such as dimensions, wrapping paper color, and additional extras like cards or bows. The program calculates a quote based on the required amount of paper and any additional features. To further my understanding of SQL databases, I also integrated a small SQLite database into the project. Although the project remains unfinished, it was an invaluable experience as my first step into programming.",
    technologies: "Python, TKinter, UML, SQLite,",
    skillsLearnt:
      " problem-solving, user interface creation, basic database management, principles of Software design and development",
    linkType: "github",
    link: "bla",
    isDownloadable: false,
  },
];
// set icon to buttons
function getIconForProject(linkType: string) {
  switch (linkType) {
    case "github":
      return "fa-brands fa-github";
    case "download":
      return "fa-solid fa-download";
  }
}

export default function Page() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      console.log(id);
      const element = document.getElementById(id);
      console.log(element);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, []);
  return (
    <div className="flex flex-col font-serif w-full xl:justify-center xl:w-11/12 ">
      {Projects.map((project) => (
        <div
          key={project.id}
          id={project.id.toString()}
          className="flex flex-col items-start justify-center w-11/12 p-4 my-6 mx-auto xl:flex-row xl:items-center"
        >
          <h2 className=" font-bold xl:hidden m-4 w-11/12 text-center text-xl ">
            {project.title}
          </h2>
          <div className="flex xl:flex-1 justify-center items-center lg:mx-auto">
            <Image
              src={project.image}
              alt={project.title}
              className="lg:max-w-xl "
            />
          </div>

          <div className="flex xl:ml-10  xl:flex-1 flex-col">
            <h2 className="text-2xl mb-4 font-bold justify-center  hidden xl:flex">
              {project.title}
            </h2>
            <h1 className="font-bold my-2 border-black border-b-2 ">
              Overview
            </h1>
            <p>{project.overview}</p>

            <h1 className=" font-bold my-2 border-black border-b-2 w-1/2">
              Technologies
            </h1>
            <p>{project.technologies}</p>
            <h1 className=" font-bold my-2 border-black border-b-2 w-1/2">
              Skills Learnt
            </h1>
            <p>{project.skillsLearnt}</p>
            <div className="flex justify-center">
              <a
                href={project.link}
                {...(project.isDownloadable && { download: project.fileName })}
                className="rounded-md border-2 border-black bg-white p-2 my-8 flex-row flex  w-fit items-center"
              >
                <i
                  className={`mx-2 ${getIconForProject(project.linkType)}`}
                ></i>
                View Project
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
