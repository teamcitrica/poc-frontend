// app/juan/spline/page.tsx (o donde quieras usar el componente)
"use client"

import { useState } from 'react'
// Importación correcta usando el path absoluto
import SplineViewer, { useSplineControl } from '@/app/juan/spline/components/SplineViewer'
import type { SplineApp, SplineSceneConfig } from '@/shared/types/spline'

export default function SplinePage() {
  const [splineApp, setSplineApp] = useState<SplineApp | null>(null)
  const { triggerAnimation, setVariable, findObject, isReady } = useSplineControl(splineApp)

  // Configuración de tu escena Spline
  const splineConfig: SplineSceneConfig = {
    url: 'https://prod.spline.design/WsvQnCD20fY187CJ/scene.splinecode', // URL de ejemplo
    fallbackImage: '/images/spline-fallback.jpg', // Imagen de respaldo opcional
    preload: true
  }

  // Manejar cuando Spline esté listo
  const handleSplineReady = (app: SplineApp) => {
    setSplineApp(app)
    console.log('Spline está listo para interactuar')
  }

  // Funciones de interacción
  const handleButtonClick = (action: string) => {
    if (!isReady) {
      console.log('Spline aún no está listo')
      return
    }

    switch (action) {
      case 'animate':
        triggerAnimation('myAnimation')
        console.log('Animación disparada')
        break
      case 'changeColor':
        const randomColor = Math.random()
        setVariable('objectColor', randomColor)
        console.log('Color cambiado:', randomColor)
        break
      case 'findCube':
        const cube = findObject('Cube')
        if (cube) {
          console.log('Cubo encontrado:', cube)
        } else {
          console.log('Cubo no encontrado')
        }
        break
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section con Spline */}
      <section className="relative h-screen">
        <SplineViewer
          config={splineConfig}
          className="w-full h-full"
          onReady={handleSplineReady}
          onError={(error) => console.error('Error en Spline:', error)}
          enableMobileOptimization={true}
        />
        
        {/* Overlay con contenido */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center text-white z-10">
            <h1 className="text-5xl font-bold mb-4">
              Juan Carlos
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Experiencia 3D interactiva
            </p>
          </div>
        </div>

        {/* Controles interactivos */}
        
      </section>

      {/* Estado de carga */}
      {!isReady && (
        <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 z-50">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            <span className="text-sm text-gray-600">Cargando experiencia 3D...</span>
          </div>
        </div>
      )}

      {/* Información de estado */}
      {/* <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Estado de Spline</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className={`p-4 rounded-lg ${isReady ? 'bg-green-100' : 'bg-yellow-100'}`}>
              <h3 className="font-semibold">Estado</h3>
              <p className={isReady ? 'text-green-700' : 'text-yellow-700'}>
                {isReady ? 'Listo' : 'Cargando...'}
              </p>
            </div>
            <div className="p-4 bg-blue-100 rounded-lg">
              <h3 className="font-semibold">App Disponible</h3>
              <p className="text-blue-700">{splineApp ? 'Sí' : 'No'}</p>
            </div>
            <div className="p-4 bg-purple-100 rounded-lg">
              <h3 className="font-semibold">Controles</h3>
              <p className="text-purple-700">{isReady ? 'Activos' : 'Inactivos'}</p>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  )
}