"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Col, Container } from "@/styles/07-objects/objects";

// Registrar plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export default function SectionHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const confettiRef = useRef<HTMLDivElement>(null);
  const additionalImageRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const termsRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animación para las imágenes de confeti y globos
    const confettiImages = gsap.utils.toArray<HTMLImageElement>(".img-confeti-globos img");
    
    confettiImages.forEach((img, index) => {
      gsap.fromTo(img,
        {
          opacity: 0,
          scale: 0.3,
          rotation: -10,
          y: 50
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          y: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: img,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
            markers: false,
          }
        }
      );
    });

    // Animación para la imagen adicional
    const additionalImage = additionalImageRef.current?.querySelector('img');
    if (additionalImage) {
      gsap.fromTo(additionalImage,
        {
          opacity: 0,
          scale: 0.4,
          x: -100
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: additionalImage,
            start: "top 75%",
            end: "bottom 25%",
            scrub: true
          }
        }
      );
    }

    // Animación para el botón
    if (buttonRef.current) {
      gsap.fromTo(buttonRef.current,
        {
          opacity: 0,
          scale: 0.5,
          y: 30
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 85%",
            end: "bottom 15%",
            scrub: true
          }
        }
      );
    }

    // Animación para los términos y condiciones
    if (termsRef.current) {
      gsap.fromTo(termsRef.current,
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: termsRef.current,
            start: "top 90%",
            end: "bottom 10%",
            scrub: true
          }
        }
      );
    }

    // Animación para la flecha (flotación continua)
    if (arrowRef.current) {
      // Flotación continua
      gsap.to(arrowRef.current, {
        y: 20,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Aparecer con fade in
      gsap.fromTo(arrowRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          delay: 0.5,
          ease: "power2.out"
        }
      );
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };

  }, { scope: sectionRef });

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
    <section ref={sectionRef} className='bg-hero-aniversary relative min-h-screen'>
      <Container className='container-general'>
        <Col cols={{ lg: 12, md: 6, sm: 4 }} className='container-section-imgs-premios'>
          {/* Contenedor de confeti y globos */}
          <div ref={confettiRef} className='img-confeti-globos'>
            <img 
              className='max-w-none relative z-20 object-contain h-full only-lg' 
              src="https://sorteos-tambo.s3.us-east-1.amazonaws.com/aniversario-agos-2025/Logo-confeti-globos-lg.png" 
              alt="Logo con confeti y globos" 
            />

            <img 
              className='max-w-none relative z-20 object-contain h-400 only-md' 
              src="https://sorteos-tambo.s3.us-east-1.amazonaws.com/aniversario-agos-2025/Logo-confeti-globos-lg.png" 
              alt="Logo con confeti y globos" 
            />

            <img 
              className='max-w-none relative z-20 object-contain h-[293px] only-sm' 
              src="https://sorteos-tambo.s3.us-east-1.amazonaws.com/aniversario-agos-2025/Logo-confeti-globos-lg.png" 
              alt="Logo con confeti y globos" 
            />
          </div>

          {/* Imagen adicional */}
          <div ref={additionalImageRef} className='hero-additional-image'>
            <img 
              className='w-full h-40 object-contain' 
              src="/img/orange1.png" 
              alt="Imagen adicional del hero" 
            />
          </div>

          {/* Botón y términos */}
          <div className='container-section-tyc-and-botton-aniversary'>
            <button
              ref={buttonRef}
              onClick={handleClick}
              className="botton-container-aniversary cursor-pointer bg-yellow-400 rounded-full transform transition-transform hover:scale-105"
            >
              REGÍSTRATE AHORA
            </button>
            
            <div ref={termsRef} className='container-tyc'>
              <p className="size-text-tyc-terms" style={{ color: "#A51890" }}>
                Términos y condiciones aplicables
              </p>
            </div>
          </div>
        </Col>
      </Container>

      {/* Flecha indicadora */}
      <div 
        ref={arrowRef}
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-30 animate-bounce"
        style={{ animationDuration: '2s' }}
      >
        <div className="flex flex-col items-center">
          <span className="text-black text-sm mb-2 font-semibold">Ver más</span>
          <svg 
            width="40" 
            height="80" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="black" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="hover:scale-110 transition-transform"
          >
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </div>
    </section>
  );
}