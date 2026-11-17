import CtaBanner from "@/components/widgets/CtaBanner";
import Faq from "./_components/Faq";
import Feature from "./_components/Feature";
import Hero from "./_components/hero/Hero";
import Review from "./_components/Review";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="container">
        <Feature />
        <Review />
        <Faq />
      </div>
      <CtaBanner/>
    </main>
  );
}
