"use client";
import { useStagger } from "@/app/hooks/use-gsap";

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}

export default function StaggerContainer({ 
  children, 
  staggerDelay = 0.1, 
  className = "" 
}: StaggerContainerProps) {
  const ref = useStagger(staggerDelay);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}