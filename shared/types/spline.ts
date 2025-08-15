// shared/types/spline.ts 

import { ComponentType } from 'react'

// Tipos para los eventos de Spline
export interface SplineEvent {
  target: {
    name: string
    id: string
  }
}

// Interfaz principal de la aplicación Spline
export interface SplineApp {
  // Métodos principales
  setVariable: (name: string, value: any) => void
  emitEvent: (eventType: string, nameOrId: string) => void
  emitEventReverse: (eventType: string, nameOrId: string) => void
  
  // Búsqueda de objetos
  findObjectById: (id: string) => SplineObject | null
  findObjectByName: (name: string) => SplineObject | null
  getAllObjects: () => SplineObject[]
  
  // Control de cámara
  setCameraPosition: (x: number, y: number, z: number) => void
  setCameraTarget: (x: number, y: number, z: number) => void
  setCameraZoom: (zoom: number) => void
  
  // Control de escena
  play: () => void
  pause: () => void
  stop: () => void
  
  // Estados
  isPlaying: () => boolean
  isPaused: () => boolean
}

// Objeto 3D en Spline
export interface SplineObject {
  name: string
  id: string
  position: { x: number; y: number; z: number }
  rotation: { x: number; y: number; z: number }
  scale: { x: number; y: number; z: number }
  visible: boolean
  
  // Métodos del objeto
  setPosition: (x: number, y: number, z: number) => void
  setRotation: (x: number, y: number, z: number) => void
  setScale: (x: number, y: number, z: number) => void
  setVisible: (visible: boolean) => void
}

// Props del componente Spline
export interface SplineProps {
  scene: string
  onLoad?: (splineApp: SplineApp) => void
  onError?: (error: Error) => void
  onSplineMouseDown?: (event: SplineEvent) => void
  onSplineMouseUp?: (event: SplineEvent) => void
  onSplineMouseHover?: (event: SplineEvent) => void
  onSplineKeyDown?: (event: KeyboardEvent) => void
  onSplineKeyUp?: (event: KeyboardEvent) => void
  onSplineStart?: () => void
  onSplineWheel?: (event: WheelEvent) => void
  className?: string
  style?: React.CSSProperties
}

// Configuración de escena
export interface SplineSceneConfig {
  url: string
  mobile?: string
  fallbackImage?: string
  preload?: boolean
}

// Interacciones
export interface SplineInteraction {
  type: 'click' | 'hover' | 'scroll' | 'keyboard'
  target: string
  action: string
  value?: any
}

// Animaciones
export interface SplineAnimation {
  name: string
  duration?: number
  loop?: boolean
  autoPlay?: boolean
}

// Tipos para el runtime de Spline
export interface SplineRuntime {
  load: (scene: string) => Promise<SplineApp>
}

export interface SplineApplication {
  load: (url: string) => Promise<SplineApp>
  setSize: (width: number, height: number) => void
  dispose: () => void
}