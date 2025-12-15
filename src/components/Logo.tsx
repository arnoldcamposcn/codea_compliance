import { motion } from "motion/react";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", variant = "light", size = "md" }: LogoProps) {
  const sizes = {
    sm: { width: 140, height: 40 },
    md: { width: 180, height: 50 },
    lg: { width: 220, height: 60 },
  };

  const colors = {
    light: {
      primary: "#FFFFFF",
      secondary: "#60A5FA",
      accent: "#3B82F6",
    },
    dark: {
      primary: "#0F172A",
      secondary: "#3B82F6",
      accent: "#2563EB",
    },
  };

  const color = colors[variant];
  const dimensions = sizes[size];

  return (
    <motion.svg
      width={dimensions.width}
      height={dimensions.height}
      viewBox="0 0 220 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Icon - Abstract geometric shape representing mining layers and legal structure */}
      <g>
        {/* Outer hexagon (mining reference) */}
        <motion.path
          d="M20 8 L32 2 L44 8 L44 22 L32 28 L20 22 Z"
          stroke={color.secondary}
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        
        {/* Inner scales (legal reference) */}
        <motion.path
          d="M32 10 L32 24"
          stroke={color.accent}
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        
        {/* Scale left */}
        <motion.path
          d="M24 16 L28 13 L32 16"
          stroke={color.accent}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        
        {/* Scale right */}
        <motion.path
          d="M32 16 L36 13 L40 16"
          stroke={color.accent}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        
        {/* Geometric layers (mining strata) */}
        <motion.line
          x1="24"
          y1="20"
          x2="40"
          y2="20"
          stroke={color.secondary}
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        />
      </g>

      {/* Text - CODEa */}
      <g>
        <text
          x="52"
          y="25"
          fill={color.primary}
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="22"
          fontWeight="700"
          letterSpacing="-0.5"
        >
          CODEa
        </text>
        
        {/* Compliance - smaller text */}
        <text
          x="52"
          y="42"
          fill={color.primary}
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="12"
          fontWeight="500"
          letterSpacing="1.5"
          opacity="0.9"
        >
          COMPLIANCE
        </text>
        
        {/* Subtitle line */}
        <line
          x1="52"
          y1="45"
          x2="150"
          y2="45"
          stroke={color.secondary}
          strokeWidth="1"
          opacity="0.5"
        />
        
        {/* Tagline */}
        <text
          x="52"
          y="54"
          fill={color.primary}
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="8"
          fontWeight="400"
          letterSpacing="0.5"
          opacity="0.7"
        >
          Legal & Mining Compliance
        </text>
      </g>
    </motion.svg>
  );
}
