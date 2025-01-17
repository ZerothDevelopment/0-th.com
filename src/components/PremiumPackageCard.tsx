import React from "react";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "../fonts.css";
import { IoIosCheckmarkCircle, IoMdArrowRoundForward } from "react-icons/io";
import ShimmerButton from "../components/magicui/shimmer-button";
import AnimatedGradientText from "../components/magicui/animated-gradient-text";
import { cn } from "../@/lib/utils";

interface PremiumPackageCardProps {
  isMobile?: boolean;
}

const PremiumPackageCard: React.FC<PremiumPackageCardProps> = ({ isMobile = false }) => {
  const navigate = useNavigate();
  const firstColor = "#e3e3e3";
  const secondColor = "#00FF47";

  const handleContactClick = () => navigate("/contact");
  
  return (
    <div className={`flex items-center justify-center relative`}>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="z-10 flex items-center justify-center">
          <AnimatedGradientText
            fromColor={firstColor}
            viaColor={secondColor}
            toColor={firstColor}
          >
            <span
              className={cn(`inline animate-gradient bg-[#FFFFFF] bg-gradient-to-r from-[${firstColor}] via-[${secondColor}] to-[${firstColor}] bg-[length:var(--bg-size)_100%] bg-clip-text`,)}
            >
              Premium
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
          Fully Managed Subscription
        </div>

        <div
        style={{ fontWeight: "500", textAlign: "left" }} 
        className={`${isMobile ? "text-xl" : "text-2xl"} mb-2`}
        >
          You Need:
        </div>
        <ul className={`text-gray-400 space-y-3 ml-7 mb-2 ${isMobile ? "text-base" : "text-base"}`}>
          {[
            "Ensure all of your digital platforms are always being optimally managed",
            "A partner to help design, build, and continuously optimize all of your digital operations",
            "Consistent & On-Demand changes, updates, insights and optimizations for your digital assets",
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
            "3 Developers + Designer + Technical Project Manager Dedicated to your Project",
            "Full stack product development",
            "Continuous improvements and proactive business operations based on real-time user data",
            "Customer acquisition & data management",
            "Setup & Management of product distribution & fulfillment",
            "Regular updates and on-demand changes to your digital assets"
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <IoIosCheckmarkCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

  <div className="flex flex-col items-center justify-center space-y-3 mt-4">
    <div className="text-center">
      <div style={{ borderRadius: '20px', background: '#ffffff', border: '#00FF47', color:"black", borderWidth: '2px', padding: '2px 8px', marginTop: '4px'}}>
        Monthly
      </div>
    </div>
        <ShimmerButton
          shimmerSize="3px"
          shimmerColor="#00FF47"
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

export default PremiumPackageCard;