"use client";
import { useFadeIn } from "@/app/hooks/use-gsap";

interface FadeInBoxProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function FadeInBox({ 
  children, 
  delay = 0, 
  duration = 1, 
  className = "" 
}: FadeInBoxProps) {
  const ref = useFadeIn(delay, duration);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}