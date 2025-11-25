'use client'
import React, { useState, useRef } from 'react';
import Card from '@/shared/components/citrica-ui/atoms/card';
import Input from '@/shared/components/citrica-ui/atoms/input';
import Button from '@/shared/components/citrica-ui/molecules/button';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SectionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const imageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const image = imageRef.current;
    if (!image) return;

    // Parallax effect
    gsap.to(image, {
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    // Scale effect on scroll
    gsap.fromTo(image,
      {
        scale: 0.8,
        opacity: 0.5
      },
      {
        scale: 1,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: image,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true
        }
      }
    );

  }, { scope: sectionRef });

  const handleInputChange = (field: string) => (value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <section ref={sectionRef} className="py-16 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-1">
            <Card>
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-2">Formulario de Contacto</h2>
                  <p className="text-gray-600">Completa tus datos para participar</p>
                </div>

                <div className="space-y-4">
                  <Input
                    label="Nombre completo"
                    placeholder="Ingresa tu nombre"
                    value={formData.name}
                    onChange={handleInputChange('name')}
                    isRequired
                  />

                  <Input
                    label="Correo electrónico"
                    type="email"
                    placeholder="tu-email@ejemplo.com"
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    isRequired
                  />

                  <Input
                    label="Teléfono"
                    type="tel"
                    placeholder="Ingresa tu teléfono"
                    value={formData.phone}
                    onChange={handleInputChange('phone')}
                    isRequired
                  />
                </div>

                <Button
                  label="Enviar Formulario"
                  onClick={handleSubmit}
                  color="primary"
                />
              </div>
            </Card>
          </div>
          
          <div className="flex-1 md:flex-shrink-0 md:max-w-md">
            <div ref={imageRef} className="relative">
              <img
                src="/img/orange5.jpeg"
                alt="Imagen decorativa"
                className="w-full h-auto object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionForm;