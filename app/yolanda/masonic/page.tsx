// app/yolanda/masonic/page.tsx
"use client"
import dynamic from 'next/dynamic';
import cats from "./components/cats";
import { MasonryItem } from "./components/masonry";

// Importa el componente de forma dinámica, deshabilitando SSR
const GalleryMasonry = dynamic(
  () => import('./components/masonry').then(mod => ({ default: mod.GalleryMasonry })),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-lg">Cargando galería...</p>
        </div>
      </div>
    ),
  }
);

function randomChoice<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

const items: MasonryItem[] = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  src: randomChoice(cats),
}));

export default function Page() {
  return (
    <GalleryMasonry
      items={items}
      columnGutter={8}
      columnWidth={120}
      overscanBy={5}
      headerTitle="Galería Masonry de Gatos 🐱"
    />
  );
}