// shared/types/spline-modules.d.ts

declare module '@splinetool/react-spline' {
  import { ComponentType } from 'react'
  
  interface SplineProps {
    scene: string
    onLoad?: (splineApp: any) => void
    onError?: (error: Error) => void
    onSplineMouseDown?: (event: any) => void
    onSplineMouseUp?: (event: any) => void
    onSplineMouseHover?: (event: any) => void
    onSplineKeyDown?: (event: KeyboardEvent) => void
    onSplineKeyUp?: (event: KeyboardEvent) => void
    onSplineStart?: () => void
    onSplineWheel?: (event: WheelEvent) => void
    className?: string
    style?: React.CSSProperties
  }
  
  const Spline: ComponentType<SplineProps>
  export default Spline
}

declare module '@splinetool/runtime' {
  export interface Application {
    load: (url: string) => Promise<any>
    setSize: (width: number, height: number) => void
    dispose: () => void
  }

  export const Application: {
    new (canvas: HTMLCanvasElement): Application
  }
}