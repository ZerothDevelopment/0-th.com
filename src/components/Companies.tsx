import React, { useState } from "react";
import Marquee from "../@/components/magicui/marquee";
import companyImage1 from "../assets/companies/1.png";
import companyImage2 from "../assets/companies/2.png";
import companyImage3 from "../assets/companies/3.png";
import companyImage4 from "../assets/companies/4.png";
import companyImage5 from "../assets/companies/5.png";

interface CompaniesProps {
  duration?: string;
  pauseOnHover?: boolean;
  reverse?: boolean;
}

const Companies = ({
  duration = "15s",
  pauseOnHover = true,
  reverse = false
}: CompaniesProps) => {
  const companiesItems = [
    { src: companyImage1, alt: "Image One" },
    { src: companyImage2, alt: "Image Two" },
    { src: companyImage3, alt: "Image Three" },
    { src: companyImage4, alt: "Image Three" },
    { src: companyImage5, alt: "Image Three" }
  ];

  const [windowWidth] = useState(window.innerWidth);

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
        reverse={reverse}
        style={{ "--duration": duration } as React.CSSProperties}
      >
        {companiesItems.map((item, index) => (
          <div key={index} className="mx-4 inline-block">
            <img
              src={item.src}
              alt={item.alt}
              className="h-20 w-auto object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Companies;
