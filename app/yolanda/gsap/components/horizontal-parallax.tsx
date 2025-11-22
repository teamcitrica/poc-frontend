"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HorizontalParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);

  const cards = [
    { id: "#card-1", endTranslateX: -2000, rotate: 45 },
    { id: "#card-2", endTranslateX: -1000, rotate: -30 },
    { id: "#card-3", endTranslateX: -2000, rotate: 45 },
    { id: "#card-4", endTranslateX: -1500, rotate: -30 },
  ];

  useGSAP(
    () => {
      if (!wrapperRef.current) return;

      // ScrollTrigger principal para el wrapper
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: "+=900vh",
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          // Animar el wrapper (h1 + cards)
          gsap.set(wrapperRef.current, {
            x: -350 * self.progress * 100,
          });
        },
      });

      // Animar cada tarjeta con parallax
      cards.forEach((card) => {
        const cardElement = containerRef.current?.querySelector(card.id);
        
        if (cardElement) {
          ScrollTrigger.create({
            trigger: wrapperRef.current,
            start: "top top",
            end: "+=1200vh",
            scrub: 1,
            onUpdate: (self) => {
              gsap.to(cardElement, {
                x: `${card.endTranslateX * self.progress}px`,
                rotate: `${card.rotate * self.progress * 2}`,
                duration: 0.5,
                ease: "power3.out",
              });
            },
          });
        }
      });

      // Limpiar ScrollTriggers al desmontar
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="container">
      <nav className="nav">
        <a href="#">Ejemplo Parallax Effect con Scroll Horizontal</a>
      </nav>
      <section ref={wrapperRef} className="wrapper-404">
        <h1 ref={h1Ref}>Citrica Page Not Found</h1>
        <div id="card-1" className="card">
          <img src="/img/orange1.png" alt="orange1" />
        </div>
        <div id="card-2" className="card">
          <img src="/img/orange2.png" alt="orange2" />
        </div>
        <div id="card-3" className="card">
          <img src="/img/orange3.png" alt="orange3" />
        </div>
        <div id="card-4" className="card">
          <img src="/img/orange4.jpeg" alt="orange4" />
        </div>
      </section>
      <section className="outro">
        <h1>
          INNOVACIÓN DIGITAL A TU MEDIDA<br />
          Software, SAAS y Aplicaciones de Vanguardia para un Negocio Imparable
        </h1>
      </section>
    </div>
  );
}