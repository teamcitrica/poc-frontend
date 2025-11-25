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

  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })
    .to(sectionRef.current, { y: -120 }, 0) 
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
    <section 
      ref={sectionRef} 
      id="inputs-section-smirnoff"
      className="py-16 px-4 relative overflow-hidden min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Columna del Formulario */}
          <div className="flex-1 w-full">
            <div>
              <Card>
                <div className="space-y-6 p-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Formulario de Contacto
                    </h2>
                    <p className="text-gray-600 text-lg">Completa tus datos para participar</p>
                  </div>

                  <div className="space-y-6">
                    <Input
                      label="Nombre completo"
                      placeholder="Ingresa tu nombre"
                      value={formData.name}
                      onChange={handleInputChange('name')}
                      isRequired
                      className="bg-white/80"
                    />

                    <Input
                      label="Correo electrónico"
                      type="email"
                      placeholder="tu-email@ejemplo.com"
                      value={formData.email}
                      onChange={handleInputChange('email')}
                      isRequired
                      className="bg-white/80"
                    />

                    <Input
                      label="Teléfono"
                      type="tel"
                      placeholder="Ingresa tu teléfono"
                      value={formData.phone}
                      onChange={handleInputChange('phone')}
                      isRequired
                      className="bg-white/80"
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      label="Enviar Formulario"
                      onClick={handleSubmit}
                      color="primary"
                    />
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Columna de la Imagen */}
          <div className="flex-1 lg:flex-shrink-0 lg:max-w-lg">
            <div className="relative">
              <img
                src="/img/orange5.jpeg"
                alt="Imagen decorativa"
                className="w-full h-auto object-contain rounded-2xl shadow-2xl transform transition-transform hover:scale-105 duration-300"
              />
              {/* Elemento decorativo adicional */}
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 to-pink-400/20 rounded-2xl -z-10 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Fondo decorativo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default SectionForm;