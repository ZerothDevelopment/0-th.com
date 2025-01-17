import React from "react";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { IoIosCheckmarkCircle, IoMdArrowRoundForward } from "react-icons/io";
import ShimmerButton from "../components/magicui/shimmer-button";
import AnimatedGradientText from "../components/magicui/animated-gradient-text";
import { cn } from "../@/lib/utils";

interface StandardPackageCardProps {
  isMobile?: boolean;
}

const StandardPackageCard: React.FC<StandardPackageCardProps> = ({ isMobile = false }) => {
    const navigate = useNavigate();  
  
    const firstColor = "#e3e3e3";
    const secondColor = "#ffffff";

    const handleContactClick = () => navigate("/contact");

    
  return (
    <div
      className={` items-center justify-center relative`}
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="z-10 flex items-center justify-center">
          <AnimatedGradientText
            fromColor={firstColor}
            viaColor={secondColor}
            toColor={firstColor}
          >
            <div
              className={cn(`inline animate-gradient bg-[#FFFFFF] bg-gradient-to-r from-[${firstColor}] via-[${secondColor}] to-[${firstColor}] bg-[length:var(--bg-size)_100%] bg-clip-text`,)}
            >
              Standard
            </div>
          </AnimatedGradientText>
        </div>
      </div>
      <NeonGradientCard
        neonColors={{ firstColor, secondColor }}
        borderSize={2}
        borderRadius={15}
        fontFamily="SF Pro Display, sans-serif"
        className="relative z-10 sm:w-[475px] sm:h-[850px]"
      >
        <div 
        style={{ fontWeight: "500", textAlign: "center" }}
        className={`${isMobile ? "text-3xl" : "text-4xl"} text-center mb- mt-1`}
        >Individual Project</div>
        <h2 className={`${isMobile ? "text-xl" : "text-2xl"} font-semibold mb-2`}>You Need:</h2>
        <ul className={`text-gray-400 space-y-3 ml-7 mb-2 ${isMobile ? "text-base" : "text-base"}`}>
          {[
            "Bring an idea to life that is so insanely amazing that it could not possibly fit within the standard offerings",
            "Build out of a new (or rebuild) website, app or software solution",
            "Integrations with essential apps & extensions"
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className={`${isMobile ? "mb-0" : "mb-44"}`}>
        <h2 className={`${isMobile ? "text-xl" : "text-2xl"} font-semibold mb-1`}>Includes:</h2>
        <ul className={`text-gray-400 space-y-3 ${isMobile ? "text-base" : "text-base"}`}>
          {[
            "Development of your digital product",
            "Collaborative design process",
            "Full E-commerce platform integration",
            "Customer data management system",
            "One-time delivery with thorough documentation & content management system for future updates"
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <IoIosCheckmarkCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul> 
        </div>
    <div className={`${isMobile ? "mt-4" : "m-4"} flex flex-col items-center justify-center space-y-3`}>
      <div className="text-center items-center">
      <div style={{ borderRadius: '20px', background: '#ffffff', border: '#00FF47', color:"black", borderWidth: '2px', padding: '2px 8px', marginTop: '4px'}}>
        One-Time
      </div>
    </div>
        <ShimmerButton
          shimmerSize="3px"
          shimmerColor="#e3e3e3"
          className={`bg-black text-white ${isMobile ? "text-lg" : "text-lg"} cursor-pointer px-6 py-2 w-48 rounded-full border-2 border-white inline-flex items-center justify-center no-underline transition-all duration-300 ease-in-out mt-2`}
          onClick={handleContactClick}
        >
          Get Started <IoMdArrowRoundForward className="ml-2" />
        </ShimmerButton>
    </div> 
      </NeonGradientCard>
    </div>
  );
};

export default StandardPackageCard;