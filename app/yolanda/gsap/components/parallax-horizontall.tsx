"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ParallaxHorizontalDemo() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Datos individuales para animar cada card
  const cardData = [
    { id: "card-1", translatex: 150, rotate: 10 },
    { id: "card-2", translatex: 250, rotate: -15 },
    { id: "card-3", translatex: 180, rotate: 20 },
    { id: "card-4", translatex: 300, rotate: -25 },
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
    gsap.to(track, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: () => "+=" + trackWidth,
      },
    });

    // ANIMACIÓN DE LAS CARDS
    cardData.forEach((c) => {
      const cardElement = container.querySelector(`#${c.id}`) as HTMLElement;

      if (!cardElement) return;

      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "+=" + trackWidth,
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(cardElement, {
            x: c.translatex * self.progress,
            rotate: c.rotate * self.progress * 2,
            duration: 0.2,
            ease: "power3.out",
          });
        },
      });
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
            <div id="card-1" className="card absolute top-[20%] left-[10%] w-40">
              <img src="/img/orange1.png" alt="orange1" />
            </div>
            <div id="card-2" className="card absolute top-[50%] left-[30%] w-44">
              <img src="/img/orange2.png" alt="orange2" />
            </div>
            <div id="card-3" className="card absolute top-[30%] left-[60%] w-36">
              <img src="/img/orange3.png" alt="orange3" />
            </div>
            <div id="card-4" className="card absolute top-[60%] left-[75%] w-48">
              <img src="/img/orange4.jpeg" alt="orange4" />
            </div>
          </div>

          <h1 className="text-[20vw] font-bold leading-none opacity-90">
            GSAP Horizontal Parallax Effect
          </h1>
        </div>
      </div>

      <section className="w-full h-screen bg-white text-black flex items-center justify-center text-4xl font-bold">
        siguiente sección
      </section>
    </>
  );
}
