import { ParallaxProvider } from "@/shared/context/gsap-context";
import TextReveal from "./components/text-reveal";
import FadeInBox from "./components/fade-in-box";
import ScaleInBox from "./components/scale-in-box";
import StaggerContainer from "./components/stagger-container";
import AnimatedBox from "./components/animated-box";
import Text from "@/shared/components/citrica-ui/atoms/text";


export default function GSAPEffectsDemo() {
  return (
    <ParallaxProvider>        
        {/* Header */}
        <section className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600 text-white">
          <div className="text-center">
            <TextReveal className="text-6xl font-bold mb-4">
              GSAP PoC
            </TextReveal>
            <FadeInBox delay={1}>
              <p>
                <Text variant="title">
                  Scroll para ver todos los efectos
                </Text>
              </p>
            </FadeInBox>
          </div>
        </section>

        {/* Fade In Effect */}
        <section className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="max-w-4xl mx-auto p-8 text-center">
            <FadeInBox className="mb-6">
              <Text variant="display">
                Fade In Effect
              </Text>
            </FadeInBox>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeInBox delay={0.2} className="p-6 bg-white rounded-lg shadow-lg">
                <Text variant="subtitle" className="mb-4">Card 1</Text>
                <p>
                  <Text variant="body">Este card aparece con un fade-in suave</Text>
                </p>
              </FadeInBox>
              <FadeInBox delay={0.4} className="p-6 bg-white rounded-lg shadow-lg">
                <Text variant="subtitle" className="mb-4">Card 2</Text>
                <p>
                  <Text variant="body">Con un pequeño delay para crear secuencia</Text>
                </p>
              </FadeInBox>
              <FadeInBox delay={0.6} className="p-6 bg-white rounded-lg shadow-lg">
                <Text variant="subtitle" className="mb-4">Card 3</Text>
                <p>
                  <Text variant="body">Creando un efecto de cascada</Text>
                </p>
              </FadeInBox>
            </div>
          </div>
        </section>

        {/* Scale In Effect */}
        <section className="min-h-screen flex items-center justify-center bg-green-50">
          <div className="max-w-4xl mx-auto p-8 text-center">
            <ScaleInBox className="mb-8">
              <Text variant="display" className="mb-8 text-green-800">Scale In Effect</Text>
            </ScaleInBox>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <ScaleInBox scale={0.5} className="p-4 aspect-square bg-green-200 rounded-full flex items-center justify-center">
                <Text variant="body" className="font-bold">50%</Text>
              </ScaleInBox>
              <ScaleInBox scale={0.6} className="p-4 aspect-square bg-green-300 rounded-full flex items-center justify-center">
                <Text variant="body" className="font-bold">60%</Text>
              </ScaleInBox>
              <ScaleInBox scale={0.7} className="p-4 aspect-square bg-green-400 rounded-full flex items-center justify-center">
                <Text variant="body" className="font-bold">70%</Text>
              </ScaleInBox>
              <ScaleInBox scale={0.8} className="p-4 aspect-square bg-green-500 rounded-full flex items-center justify-center">
                <Text variant="body" className="font-bold">80%</Text>
              </ScaleInBox>
            </div>
          </div>
        </section>

        {/* Stagger Effect */}
        <section className="min-h-screen flex items-center justify-center bg-orange-50">
          <div className="max-w-4xl mx-auto p-8 text-center">
            <FadeInBox className="mb-6">
              <Text variant="display" className="text-orange-800">Stagger Effect</Text>
            </FadeInBox>
            <StaggerContainer staggerDelay={0.15} className="space-y-4">
              <div className="p-4 bg-orange-200 rounded-lg"><Text variant="body">Elemento 1</Text></div>
              <div className="p-4 bg-orange-300 rounded-lg"><Text variant="body">Elemento 2</Text></div>
              <div className="p-4 bg-orange-400 rounded-lg"><Text variant="body">Elemento 3</Text></div>
              <div className="p-4 bg-orange-500 rounded-lg"><Text variant="body">Elemento 4</Text></div>
              <div className="p-4 bg-orange-600 rounded-lg"><Text variant="body" className="text-white">Elemento 5</Text></div>
            </StaggerContainer>
          </div>
        </section>

        {/* Text Reveal Effect */}
        <section className="min-h-screen flex items-center justify-center bg-purple-50">
          <div className="max-w-4xl mx-auto p-8 text-center">
            <TextReveal className="text-4xl font-bold mb-8 text-purple-800">
              Text Reveal Effect
            </TextReveal>
            <TextReveal className="text-lg text-purple-600 mb-6">
              Cada palabra aparece una por una creando un efecto muy elegante
            </TextReveal>
            <TextReveal  className="text-xl text-purple-700">
              Prueba de animación en texto
            </TextReveal>
          </div>
        </section>

        {/* Parallax Effect */}
        <AnimatedBox
          image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070"
          ratio={0.8}
        >
          <div className="text-center">
            <Text variant="display" textColor="white">Parallax Effect</Text>
            <p className="mt-4">
              <Text variant="title" textColor="white">El fondo se mueve a diferente velocidad que el scroll</Text>
            </p>
          </div>
        </AnimatedBox>

        {/* Combined Effects */}
        <section className="min-h-screen flex items-center justify-center bg-indigo-50">
          <div className="max-w-4xl mx-auto p-8 text-center">
            <TextReveal className="text-4xl font-bold mb-8 text-indigo-800">
              Combined Effects
            </TextReveal>
            <StaggerContainer staggerDelay={0.2}>
              <ScaleInBox className="mb-6">
                <div className="p-6 bg-indigo-200 rounded-lg">
                  <Text variant="subtitle" className="mb-2">Scale + Stagger</Text>
                </div>
              </ScaleInBox>
              <FadeInBox delay={0.4} className="mb-8">
                <div className="p-6 bg-indigo-300 rounded-lg">
                  <Text variant="subtitle" className="mb-2">Fade + Stagger</Text>
                </div>
              </FadeInBox>
              <ScaleInBox scale={0.5}>
                <div className="p-6 bg-indigo-400 rounded-lg">
                  <Text variant="subtitle" className="mb-2 text-white">Mix & Match</Text>
                </div>
              </ScaleInBox>
            </StaggerContainer>
          </div>
        </section>

        {/* Footer */}
        <section className="h-96 flex items-center justify-center  text-white">
          <FadeInBox>
            <div className="text-center">
              <h2>
                <Text variant="headline" className="mb-4">Finaliza el PoC</Text>
              </h2>
              <p>
                <Text variant="body">Animaciones Gsap</Text>
              </p>
            </div>
          </FadeInBox>
        </section>
    </ParallaxProvider>
  );
}