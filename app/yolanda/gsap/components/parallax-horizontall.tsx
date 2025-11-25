"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ParallaxHorizontalDemo() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const cardData = [
    { id: "card-1", translatex: 150, rotate: 10 },
    { id: "card-2", translatex: 250, rotate: -15 },
    { id: "card-3", translatex: 400, rotate: 20 },
    { id: "card-4", translatex: 550, rotate: -25 },
    { id: "card-5", translatex: 750, rotate: 30 },
  ];

  useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;

    const track = container.querySelector(".track") as HTMLElement;
    if (!track) return;

    const trackWidth = track.scrollWidth;
    const viewportWidth = container.offsetWidth;
    const scrollDistance = trackWidth - viewportWidth;

    // PARALLAX HORIZONTAL
    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${trackWidth}`,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
        pinSpacing: true,
      }
    });

    // Animación del track horizontal
    mainTl.to(track, {
      x: -scrollDistance,
      ease: "none"
    });

    // ANIMACIÓN DE LAS CARDS
    cardData.forEach((c, index) => {
      const cardElement = container.querySelector(`#${c.id}`) as HTMLElement;
      if (cardElement) {
        mainTl.to(cardElement, {
          x: c.translatex,
          rotation: c.rotate,
          ease: "none", 
        }, 0);
      }
    });

  });

  return (
    <>
      <div
        ref={containerRef}
        className="h-screen w-screen overflow-hidden bg-black text-white flex items-center relative"
      >
        <div className="track whitespace-nowrap flex items-center px-20 relative">
          <div className="absolute inset-0 pointer-events-none">
            <div id="card-1" className="card absolute top-[20%] left-[5%] w-12 md:w-40 lg:w-48">
              <img src="/img/orange1.png" alt="orange1" className="w-full h-auto" />
            </div>
            <div id="card-2" className="card absolute top-[50%] left-[25%] w-12 md:w-40 lg:w-48">
              <img src="/img/orange2.png" alt="orange2" className="w-full h-auto" />
            </div>
            <div id="card-3" className="card absolute top-[30%] left-[40%] w-12 md:w-40 lg:w-48">
              <img src="/img/orange3.png" alt="orange3" className="w-full h-auto" />
            </div>
            <div id="card-4" className="card absolute top-[60%] left-[55%] w-12 md:w-40 lg:w-48">
              <img src="/img/orange4.jpeg" alt="orange4" className="w-full h-auto" />
            </div>
            <div id="card-5" className="card absolute top-[40%] left-[70%] w-12 md:w-40 lg:w-48">
              <img src="/img/orange5.jpeg" alt="orange5" className="w-full h-auto" />
            </div>
          </div>

          <h1 className="text-[20vw] font-bold leading-none opacity-90">
            GSAP Horizontal Parallax Effect
          </h1>
        </div>
      </div>
    </>
  );
}