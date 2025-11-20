"use client";
import { createContext, useState } from "react";

interface GsapContextType {
  // Parallax settings
  parallaxEnabled: boolean;
  setParallaxEnabled: (enabled: boolean) => void;
  parallaxIntensity: number;
  setParallaxIntensity: (intensity: number) => void;
  
  // Global animation settings
  animationsEnabled: boolean;
  setAnimationsEnabled: (enabled: boolean) => void;
  animationSpeed: number;
  setAnimationSpeed: (speed: number) => void;
  
  // Reduced motion preference
  reducedMotion: boolean;
  setReducedMotion: (reduced: boolean) => void;
}

export const GsapContext = createContext<GsapContextType | undefined>(undefined);

export function ParallaxProvider({ children }: { children: React.ReactNode }) {
  const [parallaxEnabled, setParallaxEnabled] = useState(true);
  const [parallaxIntensity, setParallaxIntensity] = useState(0.5);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [reducedMotion, setReducedMotion] = useState(false);

  return (
    <GsapContext.Provider
      value={{
        parallaxEnabled,
        setParallaxEnabled,
        parallaxIntensity,
        setParallaxIntensity,
        animationsEnabled,
        setAnimationsEnabled,
        animationSpeed,
        setAnimationSpeed,
        reducedMotion,
        setReducedMotion
      }}
    >
      {children}
    </GsapContext.Provider>
  );
}
