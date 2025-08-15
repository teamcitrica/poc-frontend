// CircularGallery.d.ts
import { FC } from "react";

interface CircularGalleryProps {
  items?: { image: string; text: string }[];
  bend?: number;
  textColor?: string;
  borderRadius?: number;
  font?: string;
  scrollSpeed?: number;
  scrollEase?: number;
}

declare const CircularGallery: FC<CircularGalleryProps>;
export default CircularGallery;
