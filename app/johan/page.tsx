import PageDraggable from "../fer/draggable/page";
import CircularGallery from "./components/circulargallery";



export default function HomePage() {
  return (
    <>
    <section className="bg-[gray] h-[100vh] w-full flex items-center">
        <main style={{ padding: '20px' }}>
      <h1>Galería circular</h1>
      <div style={{ height: '500px', marginBottom: '40px' }}>
        <CircularGallery 
          bend={3} 
          textColor="#fff" 
          borderRadius={0.05} 
          scrollEase={0.02} 
        />
      </div>
    </main>
    </section>

    </>

  );
}
