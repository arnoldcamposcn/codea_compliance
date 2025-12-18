import { motion } from "motion/react";
import React from "react";
import logoLight from "../assets/logos/codeacompliance_blanco.png";
import logoDark from "../assets/logos/codeacompliance_negro.png";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", variant = "light", size = "md" }: LogoProps) {
  const sizes = {
    sm: { width: 120, mobileWidth: 100 },
    md: { width: 150, mobileWidth: 120 },
    lg: { width: 180, mobileWidth: 140 },
  };

  const dimensions = sizes[size];
  // variant="light" usa logo blanco (para fondos oscuros)
  // variant="dark" usa logo negro (para fondos claros)
  const logoSrc = variant === "light" ? logoLight : logoDark;

  return (
    <motion.img
      src={logoSrc}
      alt="CODEa Compliance"
      width={dimensions.width}
      height="auto"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ 
        maxWidth: "100%", 
        height: "auto", 
        display: "block",
        width: dimensions.width,
      }}
      css={{
        "@media (max-width: 768px)": {
          width: `${dimensions.mobileWidth}px`,
        },
      }}
    />
  );
}
