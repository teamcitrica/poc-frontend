"use client";
import { useScaleIn } from "@/app/hooks/use-gsap";

interface ScaleInBoxProps {
  children: React.ReactNode;
  scale?: number;
  duration?: number;
  className?: string;
}

export default function ScaleInBox({ 
  children, 
  scale = 0.8, 
  duration = 0.8, 
  className = "" 
}: ScaleInBoxProps) {
  const ref = useScaleIn(scale, duration);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}