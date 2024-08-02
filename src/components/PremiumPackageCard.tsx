import { NeonGradientCard } from "./magicui/neon-gradient-card";
import "../App.css";
import { IoIosCheckmarkCircle } from "react-icons/io";

const PremiumPackageCard = () => {
  const firstColor = "#e3e3e3";
  const secondColor = "#00FF47";
  return (
    <div
      style={{ fontFamily: "'Shippori Antique B1', sans-serif" }}
      className="flex items-center justify-center w-full sm:w-[475px] h-[800px]"
    >
      <NeonGradientCard
        neonColors={{ firstColor, secondColor }}
        borderSize={2}
        borderRadius={15}
      >
        <h1 className="text-4xl font-bold text-center mb-6">
          Fully Managed Subscription
        </h1>

        <h2 className="text-xl font-semibold mb-2">You Need:</h2>
        <ul className="text-gray-400 space-y-3 ml-7 mb-2">
          {[
            "A partner to build, manage, and continuously optimize your entire digital ecosystem",
            "Brand oriented & User friendly UI/UX",
            "Data-driven strategies to boost your online presence and revenue"
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mb-2">Includes:</h2>
        <ul className="text-gray-400 space-y-3">
          {[
            "End-to-end digital solution development and management",
            "Continuous improvements and proactive business operations based on real-time user data",
            "Digital marketing and customer acquisition services",
            "Dedicated support for product sourcing, distribution, and fulfillment",
            "Regular updates and on-demand changes to your digital assets"
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <IoIosCheckmarkCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </NeonGradientCard>
    </div>
  );
};

export default PremiumPackageCard;
