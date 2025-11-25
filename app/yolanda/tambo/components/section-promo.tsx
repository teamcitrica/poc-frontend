"use client";
import { useRef } from "react";
import { Col, Container } from "@/styles/07-objects/objects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function SectionPromo() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animación del título principal
    const title = section.querySelector("h2");
    if (title) {
      gsap.fromTo(
        title,
        { opacity: 0, scale: 0.8, y: -30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          scrollTrigger: {
            trigger: title,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );
    }

    // Animación para los pasos
    const stepContainers = gsap.utils.toArray<HTMLElement>(".steps-container > div");

    stepContainers.forEach((container) => {
      const text = container.querySelector("p");
      const image = container.querySelector("img");

      if (text && image) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true
          }
        });

        tl.fromTo(image, { opacity: 0, y: 20 }, { opacity: 1, y: 0 })
          .fromTo(
            text,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0 },
            "-=0.3"
          );
      }
    });
  }, { scope: sectionRef });



  return (
    <section ref={sectionRef} className='bg-section-promo-cartavio-2'>
      <Container>
        <Col cols={{ lg: 12, md: 6, sm: 4 }} className='container-section-promo-cartavio-2'>
          <div className='text-center mb-6'>
            <h2 className='text-3xl font-bold text-white mb-2'>¿CÓMO PARTICIPAR?</h2>
          </div>

          <div className='steps-container'>
            <div className='relative only-lg'>
              <p className='text-center text-lg font-semibold text-white mb-3'>PASO 1 - PASO 2 - PASO 3</p>
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
        </Col>
      </Container>
    </section>
  );
}