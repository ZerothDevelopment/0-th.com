import React, { useEffect, useState } from "react";
import Marquee from "../@/components/magicui/marquee";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import clothesapp from "../assets/clothesapp.png";
import mixapp from "../assets/mix.png";
import TeslaHorns from "../assets/TeslaHorns.png";

interface CarouselProps {
  duration?: string;
  pauseOnHover?: boolean;
}

const Carousel = ({ duration = "25s", pauseOnHover = false }: CarouselProps) => {
  const carouselItems = [
    { src: one, alt: "Image One" },
    { src: two, alt: "Image Two" },
    { src: three, alt: "Image Three" },
    { src: clothesapp, alt: "Image Four" },
    { src: mixapp, alt: "Image Five" },
    { src: TeslaHorns, alt: "Image Six" }
  ];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isMobile = windowWidth <= 768;

  return (
    <div
      style={{ width: isMobile ? "48vh" : "100%" }}
      className="w-full relative overflow-hidden bg-black"
    >
      <div className="absolute top-0 left-0 w-1/6 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-1/6 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
      <Marquee
        className="py-4"
        pauseOnHover={pauseOnHover}
        style={{ "--duration": duration } as React.CSSProperties}
      >
        {carouselItems.map((item, index) => (
          <div key={index} className="mx-4 inline-block">
            <img
              src={item.src}
              alt={item.alt}
              className="h-80 w-auto object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Carousel;
