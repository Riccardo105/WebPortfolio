"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../app/globals.css";

import Image from "next/image";

// carousel item interface
export interface CarouselItem {
  id: number;
  title: string;
  description: string;
}
// define that carousel props must be an array of carousel items
interface CarouselProps {
  projectsPreview: CarouselItem[];
}
// carousel data is given by call in homepage
export default function Carousel({ projectsPreview }: CarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <div className="project-slider-container">
      <Slider {...settings}>
        {projectsPreview.map((project, idx) => (
          <div key={idx} className="px-2 outline-none">
            {/* 1. Wrapped the card in an anchor tag */}
            <a
              href={`/projects?id=${project.id}`}
              className="group p-6 h-52 flex flex-col justify-between rounded-lg border border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-200 hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div>
                {/* 2. Title color changes on group hover (the whole card) */}
                <h3 className="text-lg font-semibold mb-2 group-hover:text-slate-800  transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center text-xs font-semibold text-slate-400 group-hover:text-slate-800 uppercase tracking-widest transition-colors">
                View Project
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}
