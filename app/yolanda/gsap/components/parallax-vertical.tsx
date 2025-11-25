"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Col, Container } from "@/styles/07-objects/objects";

  gsap.registerPlugin(useGSAP, ScrollTrigger);


export default function ParallaxVerticalDemo() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const section2Ref = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const hero = heroRef.current;
    const section2 = section2Ref.current;

    if (!hero || !section2) return;

    // Animación para hero con textos
    const heroItems = gsap.utils.toArray<HTMLElement>(".hero .anim-item");

    heroItems.forEach((item, index) => {
      const img = item.querySelector('img');
      const text = item.querySelector('.img-text');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
          markers: false, // Cambia a true para debug
        }
      });

      // Primero animar la imagen
      tl.fromTo(img,
        { opacity: 0, scale: 0.7, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )
        // Luego animar el texto (aparece después de la imagen)
        .fromTo(text,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.1" // Empieza 0.3s antes de que termine la animación de la imagen
        );
    });

    // Animación para section2 con textos
    const section2Items = gsap.utils.toArray<HTMLElement>(".only-lg-md .anim-item");

    section2Items.forEach((item, index) => {
      const img = item.querySelector('img');
      const text = item.querySelector('.img-text');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          end: "bottom 10%",
          scrub: true,
          markers: false,
        }
      });

      tl.fromTo(img,
        { opacity: 0, scale: 0.7, y: 60 },
        { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power2.out" }
      )
        .fromTo(text,
          { opacity: 0, y: 50, scale: 0.8 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
          "-=0.3"
        );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  });

  return (
    <>
      {/* Hero Section */}
      <div ref={heroRef} className="hero w-[100vw] h-[60vh] only-sm">
        <Container noPadding noLimit className="h-full">
          {/* Primer item con imagen y texto */}
          <div className="anim-item relative">
            <img className="absolute top-20" src="/img/orange1.png" alt="Naranja fresca" />
            <div className="img-text absolute top-32 left-10 text-white bg-black bg-opacity-50 p-4 rounded-lg">
              <h3 className="text-xl font-bold">Naranjas Frescas</h3>
              <p className="text-sm">Directo del campo a tu mesa</p>
            </div>
          </div>

          {/* Segundo item con imagen y texto */}
          <div className="anim-item mt-[101px] center relative">
            <img src="/img/orange2.png" alt="Zumo natural" />
            <div className="img-text absolute bottom-10 right-10 text-white bg-black bg-opacity-50 p-4 rounded-lg">
              <h3 className="text-xl font-bold">Zumo Natural</h3>
              <p className="text-sm">100% exprimido al momento</p>
            </div>
          </div>
        </Container>
      </div>

      {/* Section 2 */}
      <div ref={section2Ref} className='only-lg-md bg-white relative min-h-[600px] flex items-center'>
        {/* Primer item absoluto */}
        <div className="anim-item absolute">
          <img src="/img/orange3.png" alt="Cítricos variados" />
          <div className="img-text absolute top-20 left-10 text-white bg-black bg-opacity-60 p-4 rounded-lg max-w-[200px]">
            <h3 className="text-lg font-bold">Variedad Cítrica</h3>
            <p className="text-sm">Diferentes tipos para todos los gustos</p>
          </div>
        </div>

        <Container className="w-[100vw]">
          <Col cols={{ lg: 6, md: 6, sm: 4 }}>
            <div className="anim-item relative">
              <img src="/img/orange4.jpeg" alt="Cosecha ecológica" />
              <div className="img-text absolute bottom-5 left-5 text-white bg-black bg-opacity-50 p-3 rounded-lg">
                <h4 className="font-bold">Cosecha Ecológica</h4>
                <p className="text-xs">Respetamos el medio ambiente</p>
              </div>
            </div>
          </Col>

          <Col noPadding cols={{ lg: 6, md: 6, sm: 4 }} className='relative'>
            <div className="anim-item object-contain absolute">
              <img className='w-full' src="/img/orange5.jpeg" alt="Vitamina C" />
              <div className="img-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center bg-black bg-opacity-70 p-4 rounded-lg">
                <h4 className="font-bold">Ricas en Vitamina C</h4>
                <p className="text-xs">Refuerza tu sistema inmunológico</p>
              </div>
            </div>
          </Col>
        </Container>
      </div>
    </>
  );
}