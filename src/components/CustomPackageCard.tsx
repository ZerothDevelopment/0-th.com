import React from "react";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
import "../App.css";
import ShimmerButton from "../components/magicui/shimmer-button";
import { IoIosCheckmarkCircle, IoMdArrowRoundForward } from "react-icons/io";
import AnimatedGradientText from "../components/magicui/animated-gradient-text";
import { cn } from "../@/lib/utils";

interface CustomPackageCardProps {
  isMobile?: boolean;
}

const CustomPackageCard: React.FC<CustomPackageCardProps> = ({ isMobile = false }) => {
  const firstColor = "#e3e3e3";
  const secondColor = "#5403FF";
  return (
    <div className={`flex items-center justify-center relative`}>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="z-10 flex items-center justify-center">
          <AnimatedGradientText>
            <span
              className={cn(`inline animate-gradient bg-gradient-to-r from-[${firstColor}] via-[${secondColor}] to-[${firstColor}] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,)}
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
        className="relative h-180 z-10 sm:w-[475px]"
      >
        <div
        style={{ fontWeight: "500", textAlign: "center" }} 
        className={`${isMobile ? "text-3xl" : "text-4xl"} mb-1 mt-1`}
        >
          Custom Development
        </div>

        <div
        style={{ fontWeight: "500", textAlign: "left" }} 
        className={`${isMobile ? "text-xl" : "text-2xl"} mb-2`}
        >
          You Need:
        </div>
        <ul className={`text-gray-400 space-y-3 ml-7 mb-2 ${isMobile ? "text-base" : "text-base"}`}>
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

        <div
        style={{ fontWeight: "500", textAlign: "left" }} 
        className={`${isMobile ? "text-xl" : "text-2xl"} mb-2`}
        >
          Includes:
        </div>
        <ul className={`text-gray-400 space-y-3 ${isMobile ? "text-base" : "text-base"}`}>
          {[
            "Development of your digital product",
            "Personalized consultation to define your unique requirements",
            "Scalable solutions adaptable to your evolving needs",
            "Flexible engagement models (time & materials, milestone-based, etc.)",
            "Ongoing support and maintenance options"
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <IoIosCheckmarkCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center justify-center space-y-3 mt-4">
          <div className="text-center">
            <div className={`${isMobile ? "text-lg" : "text-lg"} text-gray-400 mb-1`}>
              Starting At
            </div>
            <div className={`${isMobile ? "text-3xl" : "text-3xl"} text-white`}>
              ∞
            </div>
          </div>
          <ShimmerButton
            shimmerSize="3px"
            shimmerColor="#5403FF"
            className={`bg-black text-white ${isMobile ? "text-lg" : "text-lg"} cursor-pointer px-6 py-2 w-48 rounded-full border-2 border-white inline-flex items-center justify-center no-underline transition-all duration-300 ease-in-out mt-2`}
          >
            Get Started <IoMdArrowRoundForward className="ml-2" />
          </ShimmerButton>
        </div> 
      </NeonGradientCard>
    </div>
  );
};

export default CustomPackageCard;