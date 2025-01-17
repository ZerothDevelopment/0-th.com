"use client";

import {
  CSSProperties,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState
} from "react";

import { cn } from "../../@/lib/utils";
import "./neon-gradient-card.css";

interface NeonColorsProps {
  firstColor: string;
  secondColor: string;
}

interface NeonGradientCardProps {
  as?: ReactElement;
  className?: string;
  children?: ReactNode;
  borderSize?: number;
  borderRadius?: number;
  neonColors?: NeonColorsProps;
  fontFamily?: string;
  [key: string]: any;
}

const NeonGradientCard = ({
  className,
  children,
  borderSize = 2,
  borderRadius = 20,
  neonColors = {
    firstColor: "#ffffff",
    secondColor: "#00FFF1"
  },
  fontFamily = "inherit",
  ...props
}: NeonGradientCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const { offsetWidth, offsetHeight } = containerRef.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    }
  }, [children]);

  return (
    <div
      ref={containerRef}
      style={
        {
          "--border-size": `${borderSize}px`,
          "--border-radius": `${borderRadius}px`,
          "--neon-first-color": neonColors.firstColor,
          "--neon-second-color": neonColors.secondColor,
          "--card-width": `${dimensions.width}px`,
          "--card-height": `${dimensions.height}px`,
          "--card-content-radius": `${borderRadius - borderSize}px`,
          "--after-blur": `${dimensions.width / 3}px`,
          fontFamily: fontFamily
        } as CSSProperties
      }
      className={cn(
        "relative z-10 h-full w-full rounded-[var(--border-radius)]",
        "neon-gradient-card",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "relative h-full min-h-[inherit] w-full rounded-[var(--card-content-radius)] bg-[#121212] p-6",
          "dark:bg-[#111111]"
        )}
        style={{ fontFamily: fontFamily }}
      >
        {children}
      </div>
    </div>
  );
};

export { NeonGradientCard };
