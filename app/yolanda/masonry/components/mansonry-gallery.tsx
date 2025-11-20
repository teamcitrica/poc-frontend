"use client";
import React, { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Text from "@/shared/components/citrica-ui/atoms/text";

const Masonry = dynamic(
  () => import("masonic").then((m) => m.Masonry),
  { ssr: false }
);

export type MasonryItem = {
  id: string;
  title: string;
  imageUrl: string;
};

interface CardProps {
  index: number;
  data: MasonryItem;
  width: number;
}

const Card = React.memo<CardProps>(({ data, width, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  return (
    <div className="masonry-card" style={{ width }}>
      <div style={{ position: 'relative', width: '100%' }}>
        {!imageLoaded && !imageError && (
          <div 
            className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"
            style={{ height: '200px' }}
          >
            <div className="text-gray-400">Cargando...</div>
          </div>
        )}
        {imageError ? (
          <div 
            className="bg-gray-100 flex items-center justify-center text-gray-500"
            style={{ height: '200px' }}
          >
            Error al cargar imagen
          </div>
        ) : (
          <img
            src={data.imageUrl}
            alt={data.title}
            className={`masonry-img transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
          />
        )}
      </div>
      <div className="card-text w-full">
        <h3 className="m-0 overflow-hidden text-ellipsis whitespace-nowrap">
          <Text variant="body" textColor="white">
            {data.title}
          </Text>
        </h3>
        <p className="mt-1 mb-0">
          <Text variant="label" textColor="white">
            #{index + 1}
          </Text>
        </p>
      </div>
    </div>
  );
});

Card.displayName = 'MasonryCard';

interface MasonryGalleryProps {
  items: MasonryItem[];
  columnWidth?: number;
  columnGutter?: number;
  rowGutter?: number;
  overscanBy?: number;
  height?: number;
}

export const MasonryGallery = ({ 
  items, 
  columnWidth = 240,
  columnGutter = 16,
  rowGutter = 16,
  overscanBy = 2,
  height = 600
}: MasonryGalleryProps) => {
  // Render function que sigue la API de Masonic
  const MasonryCard = useCallback(
    (props: any) => {
      const { index, data, width } = props;
      return <Card data={data as MasonryItem} width={width} index={index} />;
    },
    []
  );

  if (!items.length) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500">
        No hay imágenes para mostrar
      </div>
    );
  }

  return (
    <div className="masonry-container" style={{ height }}>
      <Masonry
        items={items}
        columnGutter={columnGutter}
        columnWidth={columnWidth}
        rowGutter={rowGutter}
        overscanBy={overscanBy}
        render={MasonryCard}
      />
    </div>
  );
};
