"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Col, Container } from "@/styles/07-objects/objects";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function SectionHero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const confettiRef = useRef<HTMLDivElement | null>(null);
  const additionalImageRef = useRef<HTMLDivElement | null>(null);
  const buttonContainerRef = useRef<HTMLDivElement | null>(null);

  // Configuración de useGSAP para el efecto parallax
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: false,
      },
    })
    .to(confettiRef.current, { y: -120 }, 0)           // Capa más lenta (fondo)
    .to(additionalImageRef.current, { y: -250 }, 0)    // Capa media
    .to(buttonContainerRef.current, { y: -450 }, 0);   // Capa más rápida (frente)

  }, { scope: containerRef });

  const handleClick = () => {
    const formSection = document.getElementById('inputs-section-smirnoff');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNextSection = () => {
    handleClick();
  };

  return (
    <div ref={containerRef} className="py-20 overflow-hidden">
      <Container className='w-full flex justify-center'>
        <Col cols={{ lg: 12, md: 6, sm: 4 }} className='flex justify-center items-center flex-col text-center'>
          
          {/* Capa de fondo - se mueve más lento */}
          <div ref={confettiRef} className='img-confeti-globos flex justify-center mb-32'>
            <img 
              className='max-w-none object-contain h-[300px]' 
              src="/img/orange1.png" 
              alt="Logo con confeti y globos" 
            />
          </div>

          {/* Capa media - se mueve a velocidad media */}
          <div ref={additionalImageRef} className='hero-additional-image mb-32'>
            <img 
              className='w-full h-40 object-contain' 
              src="/img/orange1.png" 
              alt="Imagen adicional del hero" 
            />
          </div>

          {/* Capa frontal - se mueve más rápido */}
          <div ref={buttonContainerRef} className='mb-24'>
            <button
              onClick={handleClick}
              className=" cursor-pointer bg-yellow-400 rounded-full transform transition-all duration-300 hover:scale-105 hover:bg-yellow-500 hover:shadow-lg px-4 text-lg font-bold"
            >
              REGÍSTRATE AHORA
            </button>
            
            <div className=''>
              <p className="size-text-tyc-terms text-lg font-medium" style={{ color: "#A51890" }}>
                Términos y condiciones aplicables
              </p>
            </div>
          </div>

        </Col>
      </Container>

      <div onClick={scrollToNextSection} className="bottom-8 cursor-pointer">
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2 font-semibold px-3 py-1 rounded-full">
            Desliza para descubrir
          </span>
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="hover:scale-110 transition-transform"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}