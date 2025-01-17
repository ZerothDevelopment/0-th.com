import React, { useState } from "react";

import laptopIcon from "../assets/icons/laptop.png";
import cardIcon from "../assets/icons/creditcard.png";
import clickIcon from "../assets/icons/click.png";
import magnifyingGlassIcon from "../assets/icons/magnifyingglass.png";
import networkIcon from "../assets/icons/network.png";
import peopleIcon from "../assets/icons/3person.png";
import boxIcon from "../assets/icons/shippingbox.png";
import trayIcon from "../assets/icons/tray.png";
import scaleIcon from "../assets/icons/scale.3d.png";
import wandIcon from "../assets/icons/wand.and.stars.png"

const services = [
  { title: "Software, Website, and App Development", icon: laptopIcon },
  { title: "Collaborative Brand-Oriented Design", icon: scaleIcon },
  { title: "E-Commerce Solutions and Managment", icon: cardIcon },
  { title: "Daily Business Operations", icon: magnifyingGlassIcon },
  { title: "App and Extension Integration", icon: networkIcon },
  { title: "Customer Acquisition and Data Management", icon: peopleIcon },
  { title: "Digital Marketing and Advertising", icon: clickIcon },
  { title: "Product Sourcing, Distribution and Fulfilment", icon: boxIcon },
  { title: "AI Finetuning and Implementation", icon: wandIcon },
  { title: "CMS for Updates and Deployments", icon: trayIcon }
];

interface ServicesProps {
  isMobile: boolean;
}

const Services = ({ isMobile }: ServicesProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(5, 1fr)",
        gridTemplateRows: "auto",
        gap: "30px",
        marginBottom: "40px",
        padding: "30px"
      }}
    >
      {services.map((service, index) => (
        <button
          key={index}
          style={{
            backgroundColor: "#111111",
            color: "#FFFFFF",
            padding: "10px",
            borderRadius: "24px",
            maxWidth: "220px",
            border: "none",
            cursor: "pointer",
            textAlign: "center",
            fontSize: isMobile ? "12px" : "14px",
            height: "150px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Shippori Antique B1', sans-serif",
            transition: "filter 0.2s ease"
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            src={service.icon}
            alt={service.title}
            style={{
              maxHeight: "50px",
              marginTop: "10px",
              marginBottom: "15px",
              filter: hoveredIndex === index ? "brightness(0) invert(1) drop-shadow(0 0 4px #ffffff)" : "none",
              transition: "filter 0.5s ease"
            }}
          />
          {service.title}
        </button>
      ))}
    </div>
  );
};

export default Services;