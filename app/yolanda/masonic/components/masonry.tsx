"use client"
import * as React from "react";
import { Masonry } from "masonic";
import useWindowScroll from "@react-hook/window-scroll";

export type MasonryItem = {
  id: number | string;
  src: string;
};

export interface MasonryProps {
  items: MasonryItem[];
  columnGutter?: number;
  columnWidth?: number;
  overscanBy?: number;
  headerTitle?: string;
}

const Header = ({ title }: { title: string }) => {
  const rawScrollY = useWindowScroll(5);
  const scrollY = typeof window === "undefined" ? 0 : rawScrollY;
  
  return (
    <h1 className={style("header", scrollY > 64 ? "minify" : undefined)}>
      {title}
    </h1>
  );
};

const GalleryCard = ({ data }: { data: MasonryItem }) => {
  const { id, src } = data;
  return (
    <div className={style("card")}>
      <img className={style("img")} alt="Gatos" src={src} />
    </div>
  );
};

export function GalleryMasonry({
  items,
  columnGutter,
  columnWidth,
  overscanBy,
  headerTitle="",
}: MasonryProps) {
  return (
    <main className={style("container")}>
      <div className={style("masonic")}>
        <Masonry
          columnGutter={columnGutter}
          columnWidth={columnWidth}
          items={items}
          overscanBy={overscanBy}
          render={GalleryCard}
        />
      </div>
      <Header title={headerTitle} />
    </main>
  );
}

const style = (...names: (string | undefined)[]) => {
  const stylesMap: Record<string, string> = {
    container: "min-h-screen w-full",
    masonic: "p-2 max-w-5xl mx-auto mt-40 box-border",
    header: "fixed top-0 w-full text-center font-bold text-2xl p-8 bg-white",
    minify: "p-4 bg-black text-black transition-all",
    card: "flex flex-col bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform",
    img: "w-full object-cover",
  };
  return names
    .map((name) => (name ? stylesMap[name] : ""))
    .filter(Boolean)
    .join(" ");
};

