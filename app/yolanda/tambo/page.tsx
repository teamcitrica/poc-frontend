import SectionHero from "./components/section-hero";
import SectionPromo from "./components/section-promo";
import SectionForm from "./components/section-form";
import SectionFooter from "./components/section-footer";

export default function Home() {

  return (
    <div>
      <div className='w-full max-w-[1920px] relative overflow-hidden mx-auto bg-black'>
        <section>
          <SectionFooter />
        </section>
        <section>
          <SectionHero />
        </section>
        <section>
          <SectionPromo />
        </section>
        <section>
          <SectionForm />
        </section>
        <section>
          <SectionFooter />
        </section>
      </div>
    </div>
  );
}