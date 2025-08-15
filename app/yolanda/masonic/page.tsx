import cats from "./components/cats";
import { GalleryMasonry, MasonryItem } from "./components/masonry";

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
