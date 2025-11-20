"use client";
import { useRef, useContext } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GsapContext } from "../../shared/context/gsap-context";

gsap.registerPlugin(ScrollTrigger);

// Hook para animaciones de parallax
export function useParallax(ratio = 1) {
  const container = useRef<HTMLDivElement | null>(null);
  const context = useContext(GsapContext);
  
  if (!context) {
    throw new Error('useParallax must be used within a ParallaxProvider');
  }
  
  const { parallaxEnabled, parallaxIntensity } = context;

  useGSAP(() => {
      if (!container.current || !parallaxEnabled) return;

      const finalRatio = ratio * parallaxIntensity;
      
      gsap.to(container.current, {
        y: () => -(window.innerHeight * finalRatio),
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    },
    [parallaxEnabled, parallaxIntensity, ratio]
  );

  return container;
}

// Hook para animaciones de fade-in
export function useFadeIn(delay = 0, duration = 1) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current) return;

    gsap.fromTo(container.current, 
      { 
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, [delay, duration]);

  return container;
}

// Hook para animaciones de scale
export function useScaleIn(scale = 0.8, duration = 0.8) {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!container.current) return;

    gsap.fromTo(container.current,
      {
        scale,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, [scale, duration]);

  return container;
}

// Hook para animaciones stagger (elementos múltiples)
export function useStagger(staggerDelay = 0.1) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const children = containerRef.current.children;
    
    gsap.fromTo(children,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: staggerDelay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, [staggerDelay]);

  return containerRef;
}

// Hook para revelado de texto
export function useTextReveal(duration = 1) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current) return;

    // Envolver cada palabra en un span
    const text = container.current.textContent;
    if (!text) return;
    
    const words = text.split(' ');
    container.current.innerHTML = words
      .map(word => `<span class="word">${word}</span>`)
      .join(' ');

    const wordElements = container.current.querySelectorAll('.word');
    
    gsap.fromTo(wordElements,
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, [duration]);

  return container;
}
