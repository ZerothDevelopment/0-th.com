import React from "react";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
import { useNavigate } from "react-router-dom";
import "../App.css";
import ShimmerButton from "../components/magicui/shimmer-button";
import { IoIosCheckmarkCircle, IoMdArrowRoundForward } from "react-icons/io";
import AnimatedGradientText from "../components/magicui/animated-gradient-text";
import { cn } from "../@/lib/utils";

interface CustomPackageCardProps {
  isMobile?: boolean;
}

const CustomPackageCard: React.FC<CustomPackageCardProps> = ({ isMobile = false }) => {
  const navigate = useNavigate();
  const firstColor = "#e3e3e3";
  const secondColor = "#5403FF";

  const handleContactClick = () => navigate("/contact");

  return (
    <div className="flex items-center justify-center">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="z-10 flex items-center justify-center">
          <AnimatedGradientText>
            <span
              className={cn(`inline animate-gradient bg-[#FFFFFF] bg-gradient-to-r from-[${firstColor}] via-[${secondColor}] to-[${firstColor}] bg-[length:var(--bg-size)_100%] bg-clip-text`,)}
            >
              Custom
            </span>
          </AnimatedGradientText>
        </div>
      </div>
      <NeonGradientCard
        neonColors={{ firstColor, secondColor }}
        borderSize={2}
        borderRadius={15}
        fontFamily="SF Pro Display, sans-serif"
        className="relative z-10 w-full sm:w-[475px] h-auto sm:h-[850px] flex flex-col"
      >
        <div className="flex-grow">
          <div
            style={{ fontWeight: "500", textAlign: "center" }} 
            className="text-3xl sm:text-4xl mb-2 mt-1"
          >
            Custom Development
          </div>

          <div
            style={{ fontWeight: "500", textAlign: "left" }} 
            className="text-xl sm:text-2xl mb-2"
          >
            You Need:
          </div>
          <ul className="text-gray-400 space-y-3 ml-7 mb-2 text-sm sm:text-base">
            {[
              "A bespoke solution that doesn't fit standard offerings",
              "Flexibility in project scope, timeline, and deliverables",
              "Expert guidance to bring your innovative ideas to life"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className={`${isMobile ? "mb-0" : "mb-28"}`}>
          <div
            style={{ fontWeight: "500", textAlign: "left" }} 
            className="text-xl sm:text-2xl mb-2"
          >
            Includes:
          </div>
          <ul className="text-gray-400 space-y-3 text-sm sm:text-base">
            {[
              "Development of your digital product",
              "Personalized consultation to define your unique requirements",
              "Scalable solutions adaptable to your evolving needs",
              "Flexible engagement models (time & materials, milestone-based, etc.)",
              "Ongoing support and maintenance options",
              "Regular progress updates and collaborative development process"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <IoIosCheckmarkCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          </div>
        </div>

        <div className="mt-auto flex flex-col items-center justify-center space-y-3 pb-4">
          <div className="text-center">
            
            <div className="text-6xl sm:text-6xl text-white">
              
            </div>
            <div style={{ minWidth: '80px', borderRadius: '20px', background: '#ffffff', border: '#00FF47', color:"black", borderWidth: '2px', padding: '2px 8px', marginTop: '4px'}}>
            ∞
            </div>
          </div>
          <ShimmerButton
            shimmerSize="3px"
            shimmerColor="#5403FF"
            className="bg-black text-white text-base sm:text-lg cursor-pointer px-6 py-2 w-48 rounded-full border-2 border-white inline-flex items-center justify-center no-underline transition-all duration-300 ease-in-out mt-2"
            onClick={handleContactClick}
          >
            Get Started <IoMdArrowRoundForward className="ml-2" />
          </ShimmerButton>
        </div> 
      </NeonGradientCard>
    </div>
  );
};

export default CustomPackageCard;