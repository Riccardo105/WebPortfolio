import React from "react";
import Image, { StaticImageData } from "next/image";
import BaliCarousel from "components/baliCarousel";

import ThinkPacificLogo from "../../../public/images/Bali/think_pacific.png";
import MassVillage from "../../../public/images/Bali/masVillage.webp";

import membumi1 from "../../../public/images/Bali/membumi1.jpg";
import membumi2 from "../../../public/images/Bali/membumi2.jpg";
import membumi3 from "../../../public/images/Bali/membumi3.jpg";
import membumi4 from "../../../public/images/Bali/membumi4.jpg";
import membumi5 from "../../../public/images/Bali/membumi5.jpg";
import membumi6 from "../../../public/images/Bali/membumi6.jpg";
import membumi7 from "../../../public/images/Bali/membumi7.jpg";

import BHG1 from "../../../public/images/Bali/BHG1.jpg";
import BHG2 from "../../../public/images/Bali/BHG2.jpg";
import BHG3 from "../../../public/images/Bali/BHG3.jpg";
import BHG4 from "../../../public/images/Bali/BHG4.jpg";
import BHG5 from "../../../public/images/Bali/BHG5.jpg";

const Membumi: StaticImageData[] = [
  membumi1,
  membumi2,
  membumi3,
  membumi4,
  membumi5,
  membumi6,
  membumi7,
];

const BHG: StaticImageData[] = [BHG1, BHG2, BHG3, BHG4, BHG5];

export default function Page() {
  return (
    <div className=" flex flex-col font-serif">
      <h1 className="text-3xl text-center mt-4 mb-6"> Volounteering in Bali</h1>

      <h1 className=" text-start border-b-2 border-black mx-4 mb-2">
        Global team Internship
      </h1>
      <p className="text-start, mx-4 mb-2">
        In June 2024, I participated in the
        <span className="font-bold ml-1"> Global Team Internship in Bali </span>
        Global Team Internship in Bali, Indonesia, an immersive program centered
        around Ubud Village. During this experience, I lived in Mas Village, a
        small traditional community located 6 kilometers south of Ubud, renowned
        for its intricate woodcarving artistry. The internship aimed to support
        local businesses and charities by developing practical and sustainable
        solutions to their challenges, while also fostering cultural exchange
        and personal growth.
      </p>

      <div className="mx-4 my-6">
        <Image
          className="mb-4"
          src={ThinkPacificLogo}
          alt="Think Pacific Logo"
        ></Image>
        <h1 className=" text-start border-b-2 border-black mb-2 ">
          Think Pacific
        </h1>
        <p className="text-start">
          The Global Team Internship was organized by
          <span className="font-bold ml-1"> Think Pacific </span>Think Pacific,
          a non-profit organization that originally launched international
          projects in Fiji and expanded into Indonesia in 2024. Think Pacific’s
          mission is to connect young people from diverse cultures, enabling
          them to share, grow, and step out of their comfort zones. Participants
          are welcomed into local families, immersing themselves in a new
          culture while sharing their own traditions. This creates an engaging
          environment where everyone can grow individually and collectively,
          fostering mutual understanding and collaboration.
        </p>
      </div>

      <div className="mx-4 my-6">
        <Image
          className="mb-4"
          src={MassVillage}
          alt="Mas village, Ubud"
        ></Image>
        <h1 className=" text-start border-b-2 border-black mb-2 ">
          Think Pacific
        </h1>
        <p className="text-start">
          <span className="font-bold">Mas Village</span>,
          <span className="font-bold mx-1">Ubud</span> is renowned worldwide as
          the heart of Balinese woodcarving. A few of the village's
          long-standing families partnered with Think Pacific to host
          participants, offering them an authentic experience of Balinese
          traditions and lifestyle. Participants were encouraged to use local
          shops, cafes, and services while working on their consultancy
          projects, contributing to the local economy while immersing themselves
          in the village's core.
        </p>
      </div>

      <h1 className="text-2xl text-center mt-4 mb-6">Consulting</h1>

      <div className="mx-4 my-6">
        <BaliCarousel images={BHG} />
      </div>

      <div className="mx-4 my-6">
        <BaliCarousel images={Membumi} />
      </div>
    </div>
  );
}
