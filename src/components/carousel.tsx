"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../app/globals.css";
import Basketball from "../../public/images/Basketball.jpg";
import GiftWrapping from "../../public/images/GiftWrapping.jpeg";
import CraneAI from "../../public/images/CraneAI.jpg";
import NetworkSecurity from "../../public/images/NewtworkSecurity.webp";

const projects = [
  { id: "01", title: "BasketballLearningPlatform", image: Basketball },
  { id: "02", title: "Gift Wrapping Service", image: GiftWrapping },
  { id: "03", title: "Crane AI", image: CraneAI },
  { id: "04", title: "Network Security", image: NetworkSecurity },
];

export default function ProjectCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
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
    <div className=" slider-container my-10 ">
      <Slider {...settings}>
        {projects.map((project) => (
          <button
            key={project.id}
            className="!flex !justify-center !items-center !h-64 "
            onClick={() => {
              window.location.href = `/projects/${project.title}`;
            }}
          >
            <div className="!w-full !max-w-sm !p-4 !bg-white !rounded-lg !shadow-md">
              <img
                src={project.image.src}
                alt={project.title}
                className="!w-full !h-48 !object-cover !rounded-t-lg"
              />
              <h3 className="!mt-2 !text-center !text-lg !font-semibold text-black">
                {project.title}
              </h3>
            </div>
          </button>
        ))}
      </Slider>
    </div>
  );
}
