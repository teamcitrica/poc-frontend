"use client";
import { useRef } from "react";
import { Col, Container } from "@/styles/07-objects/objects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export default function SectionPromo() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animación del título principal
    const title = section.querySelector('h2');
    if (title) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
          markers: false,
        }
      });

      tl.fromTo(title,
        { opacity: 0, scale: 0.8, y: -30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
    }

    // Animación para los pasos (por cada breakpoint)
    const stepContainers = gsap.utils.toArray<HTMLElement>(".steps-container > div");
    
    stepContainers.forEach((container) => {
      const text = container.querySelector('p');
      const image = container.querySelector('img');
      
      if (text && image) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
            markers: false,
          }
        });
        
        // Primero la imagen - escala de pequeña a grande
        tl.fromTo(image,
          { opacity: 0, scale: 0.7, y: 40 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power2.out" }
        )
        // Luego el texto - después de que la imagen esté casi completa
        .fromTo(text,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3" // Empieza 0.3s antes de que termine la animación de la imagen
        );
      }
    });

    // Animación para los premios
    const prizeItems = gsap.utils.toArray<HTMLElement>(".container-img-prize > div");
    
    prizeItems.forEach((item, index) => {
      const title = item.querySelector('h3');
      const images = item.querySelectorAll('img');
      
      if (title && images.length > 0) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "bottom 10%",
            scrub: true,
            markers: false,
          }
        });
        
        // Animación para cada imagen del premio
        images.forEach((img, imgIndex) => {
          tl.fromTo(img,
            { opacity: 0, scale: 0.7, y: 60 },
            { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power2.out" },
            imgIndex === 0 ? 0 : "-=0.8"
          );
        });
        
        // Texto del título después de las imágenes
        tl.fromTo(title,
          { opacity: 0, y: 50, scale: 0.8 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
          "-=0.4"
        );
      }
    });

    // Asegurar que ScrollTrigger se actualice después de que todo esté cargado
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className='bg-section-promo-cartavio-2'>
      <Container>
        <Col cols={{ lg: 12, md: 6, sm: 4 }} className='container-section-promo-cartavio-2'>
          <div className='text-center mb-6'>
            <h2 className='text-3xl font-bold text-black mb-2'>¿CÓMO PARTICIPAR?</h2>
          </div>
          
          <div className='steps-container'>
            <div className='relative only-lg'>
              <p className='text-center text-lg font-semibold text-black mb-3'>PASO 1 - PASO 2 - PASO 3</p>
              <img src="https://sorteos-tambo.s3.us-east-1.amazonaws.com/cartavio-2/steps-premios.png" alt="Pasos para participar" />
            </div>
            <div className='relative only-md'>
              <p className='text-center text-lg font-semibold text-black mb-3'>PASO 1 - PASO 2 - PASO 3</p>
              <img src="https://sorteos-tambo.s3.us-east-1.amazonaws.com/cartavio-2/stesp-premios-md.png" alt="Pasos para participar" />
            </div>
            <div className='relative only-sm'>
              <p className='text-center text-lg font-semibold text-black mb-3'>PASO 1 - PASO 2 - PASO 3</p>
              <img className='w-full object-contain' src="https://sorteos-tambo.s3.us-east-1.amazonaws.com/cartavio-2/stesp-premios-sm-new.png" alt="Pasos para participar" />
            </div>
          </div>
          
          <div className='container-img-prize'>
            <div className='relative'>
              <h3 className='text-center text-xl font-bold text-black mb-8'>PREMIO 1</h3>
              <picture className="mb-4">
                <img className='not-sm' src="https://sorteos-tambo.s3.us-east-1.amazonaws.com/cartavio-2/prize-1.png" alt="Premio 1" />
                <img className='only-sm' src="https://sorteos-tambo.s3.us-east-1.amazonaws.com/cartavio-2/prize-1-sm.png" alt="Premio 1" />
              </picture>
            </div>
            <div className='relative'>
              <h3 className='text-center text-xl font-bold text-black mb-8'>PREMIO 2</h3>
              <picture className="mb-4">
                <img className='not-sm' src="https://sorteos-tambo.s3.us-east-1.amazonaws.com/cartavio-2/prize-2.png" alt="Premio 2" />
                <img className='only-sm' src="https://sorteos-tambo.s3.us-east-1.amazonaws.com/cartavio-2/prize-2-sm.png" alt="Premio 2" />
              </picture>
            </div>
          </div>
        </Col>
      </Container>
    </section>
  );
}