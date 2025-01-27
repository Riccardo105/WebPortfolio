import Image, { StaticImageData } from "next/image";
import React from "react";
import { Suspense } from "react";

import ProfilePicture from "../../public/images/profile1cropped.png";
import Basketball from "../../public/images/Basketball.jpg";
import GiftWrapping from "../../public/images/GiftWrapping.jpeg";
import CraneAI from "../../public/images/CraneAI.jpg";
import NetworkSecurity from "../../public/images/NewtworkSecurity.webp";

import ProjectCarousel from "components/carousel";
import { CarouselItem } from "components/carousel";
import ContactMeForm from "components/contactMeForm";

// data for projects carousel

const Projects: CarouselItem[] = [
  { id: 1, title: "BasketballLearningPlatform", image: Basketball },
  { id: 2, title: "Gift Wrapping Service", image: GiftWrapping },
  { id: 3, title: "Crane AI", image: CraneAI },
  { id: 4, title: "Network Security", image: NetworkSecurity },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-grow ">
      <div className=" flex flex-col  xl:flex-row justify-between  ">
        <div className="w-auto flex flex-1 flex-col font-serif text-start mt-10 xl:mt-0  ">
          {/*welcome message*/}
          <div className="xl:w-2/3 xl:m-auto  ">
            <p className="text-xl ml-4 text-start xl:ml-6 xl:text-lg mb-4 text-red-700 font-bold">
              - I am
            </p>
            <p className="text-5xl xl:text-6xl  m-4 font-serif">
              Riccardo Barone
            </p>
            <p className="text-lg m-4 font-serif">
              Computer Science student with a passion for software engineering
              and cybersecurity, dedicated to building innovative and secure
              solutions
            </p>

            {/*dowload resume button on desktop*/}
            <button
              type="button"
              className="flex flew-row hidden mt-6 mx-4 text-xl  p-2 rounded-xl font-serif xl:flex bg-white border-2 border-black"
            >
              <i className=" fa-solid fa-download mx-2"></i> Download Resume
            </button>
          </div>
        </div>

        {/*profile picture*/}
        <div className=" flex-1 xl:mr-20 2xl:mr-40">
          <Image
            src={ProfilePicture}
            alt="Profile Picture"
            className="  mx-auto 2xl:w-[600px] 2xl:h-[800px] "
          />
          {/*dowload resume button on mobile*/}
          <button
            type="button"
            className="flex flew-row justify-center w-56 mt-6 mx-auto text-xl p-2 rounded-xl font-serif xl:hidden  bg-white border-2 border-black"
          >
            <i className=" fa-solid fa-download mx-2"></i> Download Resume
          </button>
        </div>

        {/*links on desktop (on mobile are within header*/}
        <div className="  flex flex-col justify-center items-center text-3xl hidden xl:flex flex-grow-0 w-auto ">
          <a className="fa-solid fa-envelope my-4 mr-6 2xl:my-8 2xl:mr-12"></a>
          <a
            className="fa-brands fa-instagram my-4 mr-6 2xl:my-8 2xl:mr-12"
            href="https://www.instagram.com/_.riccardobarone._/"
          ></a>
          <a
            className="fa-brands fa-linkedin my-4 mr-6 2xl:my-8 2xl:mr-12"
            href="https://www.linkedin.com/in/riccardo-barone/"
          ></a>
          <a
            className="fa-brands fa-github my-4 mr-6 2xl:my-8 2xl:mr-12"
            href="https://github.com/Riccardo105"
          ></a>
        </div>
      </div>

      <div className="flex flex-col mx-auto w-5/6 2xl:flex-row 2xl:mt-4   ">
        {/*About me preview*/}
        <div className="flex flex-col  p-auto 2xl:w-5/6 2xl:flex-1 2xl:mr-3  ">
          <h1 className="text-start  text-4xl mt-10  border-b-2 border-black">
            About me
          </h1>
          <p className="mt-4 mx-auto text-center font-serif 2xl:text-start">
            Hi, I’m Riccardo Barone, a 23-year-old Italian currently living in
            Winchester, UK. I began my career as a chef in Italy before moving
            to the UK to gain hands-on experience in hospitality. After several
            years in the industry, I decided to pursue my passion for technology
            and am now in my second year of a Computer Science degree.
          </p>
          <p className="mt-4 mx-auto text-center font-serif 2xl:text-start">
            Professionally, I’m driven by the desire to create impactful
            solutions and explore how technology can innovate and transform
            industries. Outside of work and studies, I enjoy reading, playing
            video games, basketball, and building custom PCs—activities that
            challenge me creatively and physically.
          </p>
          <a
            className="justify-center text-center mt-6 w-56 mx-auto text-xl bg-white border-black border-2 p-2 rounded-xl font-serif"
            href="/about"
          >
            Find out more
          </a>
        </div>
        <div className=" flex flex-col 2xl:ml-3 2xl:flex-1 2xl:w-5/6">
          <h1 className="text-start  text-4xl mt-10  border-b-2 border-black">
            Contact me
          </h1>
          <ContactMeForm />
        </div>
      </div>

      {/*projects carousel*/}
      <div className=" slider-wrapper w-5/6 justify-center mx-auto ">
        <p className="text-start pl-2 text-4xl mt-10 border-b-2 border-black">
          My Projects
        </p>
        <Suspense fallback={<div>Loading...</div>}>
          <ProjectCarousel data={Projects} />
        </Suspense>
      </div>
    </div>
  );
}
