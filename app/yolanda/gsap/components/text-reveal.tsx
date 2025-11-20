"use client";
import { useTextReveal } from "@/app/hooks/use-gsap";
import Text from "@/shared/components/citrica-ui/atoms/text";

interface TextRevealProps {
  children: React.ReactNode;
  duration?: number;
  className?: string;
}

export default function TextReveal({ 
  children, 
  duration = 1, 
  className = "",
}: TextRevealProps) {
  const ref = useTextReveal(duration);

  return (
    <div ref={ref} className={className}>
        {children}
    </div>
  );
}