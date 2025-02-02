"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../app/globals.css";
import Image, { StaticImageData } from "next/image";

interface CarouselProps {
  images: StaticImageData[];
  outerClassName?: string;
  className?: string;
}

export default function Carousel({
  images,
  outerClassName,
  className,
}: CarouselProps) {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
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
    <div className={`max-w-full mx-auto mt-4   ${outerClassName}`}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="flex justify-center items-center  ">
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              className={` rounded-lg  ${className}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
