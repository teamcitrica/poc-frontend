// app/juan/spline/components/SplineViewer.tsx
'use client'

import Spline from '@splinetool/react-spline'
import { Suspense, useCallback, useEffect, useState, useRef } from 'react'
import type { 
  SplineApp, 
  SplineSceneConfig, 
  SplineInteraction 
} from '@/shared/types/spline' 

interface SplineViewerProps {
  config: SplineSceneConfig
  interactions?: SplineInteraction[]
  className?: string
  fallback?: React.ReactNode
  onReady?: (app: SplineApp) => void
  onError?: (error: Error) => void
  enableMobileOptimization?: boolean
}

export default function SplineViewer({
  config,
  interactions = [],
  className = '',
  fallback,
  onReady,
  onError,
  enableMobileOptimization = true
}: SplineViewerProps) {
  const [splineApp, setSplineApp] = useState<SplineApp | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Detectar dispositivo móvil
  useEffect(() => {
    if (!enableMobileOptimization) return

    const checkMobile = () => {
      const mobile = window.innerWidth < 768 || 
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(mobile)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [enableMobileOptimization])

  // Manejar carga de Spline
  const handleSplineLoad = useCallback((app: SplineApp) => {
    setSplineApp(app)
    setIsLoading(false)
    setError(null)
    
    // Configurar interacciones
    interactions.forEach((interaction) => {
      switch (interaction.type) {
        case 'click':
          // Configurar eventos de click
          break
        case 'hover':
          // Configurar eventos de hover
          break
        default:
          break
      }
    })

    onReady?.(app)
  }, [interactions, onReady])

  // Manejar errores
  const handleSplineError = useCallback((err: Error) => {
    console.error('Spline error:', err)
    setError(err.message)
    setIsLoading(false)
    onError?.(err)
  }, [onError])

  // Obtener URL de escena según dispositivo
  const getSceneUrl = useCallback(() => {
    if (isMobile && config.mobile) {
      return config.mobile
    }
    return config.url
  }, [config, isMobile])

  // Componente de carga personalizado
  const LoadingFallback = () => (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600 text-sm">Cargando experiencia 3D...</p>
      </div>
    </div>
  )

  // Componente de error
  const ErrorFallback = () => (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
      <div className="text-center p-6">
        <div className="text-red-500 mb-2">
          <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <p className="text-gray-600 text-sm mb-4">Error al cargar la escena 3D</p>
        {config.fallbackImage && (
          <img 
            src={config.fallbackImage} 
            alt="Vista previa 3D" 
            className="max-w-full h-auto rounded-lg"
          />
        )}
      </div>
    </div>
  )

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {error ? (
        <ErrorFallback />
      ) : (
        <>
          {isLoading && (fallback || <LoadingFallback />)}
          
          <Suspense fallback={<LoadingFallback />}>
            <Spline
              scene={getSceneUrl()}
              onLoad={handleSplineLoad}
              onError={handleSplineError}
              className="w-full h-full"
            />
          </Suspense>
        </>
      )}
    </div>
  )
}

// Hook personalizado para controlar Spline
export function useSplineControl(splineApp: SplineApp | null) {
  const triggerAnimation = useCallback((animationName: string) => {
    if (!splineApp) return
    splineApp.emitEvent('mouseHover', animationName)
  }, [splineApp])

  const setVariable = useCallback((name: string, value: any) => {
    if (!splineApp) return
    splineApp.setVariable(name, value)
  }, [splineApp])

  const findObject = useCallback((nameOrId: string) => {
    if (!splineApp) return null
    
    // Intentar por ID primero, luego por nombre
    const byId = splineApp.findObjectById(nameOrId)
    if (byId) return byId
    
    return splineApp.findObjectByName(nameOrId)
  }, [splineApp])

  const setCameraPosition = useCallback((x: number, y: number, z: number) => {
    if (!splineApp) return
    splineApp.setCameraPosition(x, y, z)
  }, [splineApp])

  return {
    triggerAnimation,
    setVariable,
    findObject,
    setCameraPosition,
    isReady: !!splineApp
  }
}