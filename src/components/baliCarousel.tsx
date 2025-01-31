"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../app/globals.css";
import Image, { StaticImageData } from "next/image";

interface CarouselProps {
  images: StaticImageData[];
}

export default function Carousel({ images }: CarouselProps) {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <div className="max-w-full mx-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
