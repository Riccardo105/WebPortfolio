"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../app/globals.css";
import { StaticImageData } from "next/image";

// carousel item interface
export interface CarouselItem {
  id: number;
  title: string;
  image: StaticImageData;
}
// define that carousel props must be an array of carousel items
interface CarouselProps {
  data: CarouselItem[];
}
// carousel data is given by call in homepage 
export default function Carousel({ data }: CarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2500,
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
    <div className=" slider-container my-10 ">
      <Slider {...settings}>
        {data.map((data) => (
          <button
            key={data.id}
            className="!flex !justify-center !items-center !h-64 "
            onClick={() => {
              window.location.href = `/projects/${data.title}`;
            }}
          >
            <div className="!w-full !max-w-sm !p-4 !bg-white !rounded-lg !shadow-md">
              <img
                src={data.image.src}
                alt={data.title}
                className="!w-full !h-48 !object-cover !rounded-t-lg"
              />
              <h3 className="!mt-2 !text-center !text-lg !font-semibold text-black">
                {data.title}
              </h3>
            </div>
          </button>
        ))}
      </Slider>
    </div>
  );
}
