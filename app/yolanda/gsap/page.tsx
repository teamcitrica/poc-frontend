import ParallaxHorizontalDemo from "./components/parallax-horizontall";
import ParallaxVerticalDemo from "./components/parallax-vertical";

export default function GSAPEffectsDemo() {
  return (
    <>
      <main className="min-h-screen bg-black">
        <ParallaxHorizontalDemo />
      </main>
      <section className="min-h-screen bg-black">
        <ParallaxVerticalDemo />
      </section>
    </>
  );
}