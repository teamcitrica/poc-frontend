"use client";
import { useParallax } from "@/app/hooks/use-gsap";
import React from "react";


interface ParallaxSectionProps {
  image: string;
  ratio?: number;
  children: React.ReactNode;
}

export default function ParallaxSection({ image, ratio = 0.5, children }: ParallaxSectionProps) {
  const ref = useParallax(ratio);

  return (
    <section className="parallax-section">
      <div
        ref={ref}
        className="parallax-bg"
        style={{ backgroundImage: `url(${image})` }} 
      />
      <div className="parallax-content">{children}</div>
    </section>
  );
}
