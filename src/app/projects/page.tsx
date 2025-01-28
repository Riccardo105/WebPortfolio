import React from "react";
import Image, { StaticImageData } from "next/image";

import Basketball from "../../public/images/Basketball.jpg";
import GiftWrapping from "../../public/images/GiftWrapping.jpeg";
import CraneAI from "../../public/images/CraneAI.jpg";
import NetworkSecurity from "../../public/images/NewtworkSecurity.webp";

// data for projects page
interface ProjectsProps {
    id: number;
    title: string;
    image: StaticImageData;
    overview: string;
    technologies: string;
}


const Projects: ProjectsProps[] = [
]; 
export default function Page() {
  return (
    <div className="flex flex-col w-4 xl:flex-row xl:justify-center xl:w-11/12">
        
    </div>
  );
}