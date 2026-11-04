import CTABanner from "@/components/shared/CTABanner";
import { Faq } from "./_components/faq/Faq";
import { Feature } from "./_components/feature/Feature";
import Hero from "./_components/hero/Hero";
import Review from "./_components/review/Review";

export default function Home() {
  return (
    <main className="">
        <Hero />
        <div className="container">
          <Feature/>
          <Review/>
          <Faq/>
        </div>
        <CTABanner/>
    </main>
  );
}
