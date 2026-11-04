import HeroTitleLayout from "@/components/ui/layout/HomeTitleLayout";
import SimpleSlider from "@/components/ui/layout/SimpleSlider";
import clsx from "clsx";
import { faqItems } from "@/components/config/faq.config";
import FaqItemCard from "@/components/shared/FaqCard";


export function Faq() {

    return (
        <section className="flex flex-col items-center justify-center gap-20 py-20">
            <HeroTitleLayout btnHref="#" btnContent="View All FAQ’s">
                <h2>Frequently Asked Questions</h2>
                <p>
                    Find answers to common questions about Estatein's 
                    services, property listings, and the real estate process.
                    We're here to provide clarity and assist you every step of the way.
                </p>
            </HeroTitleLayout>
            <div className="w-full">
                <SimpleSlider>
                    {faqItems.map((e, index) => {
                        const slide = index + 1
                        return (
                            <li key={slide}
                                className={clsx(
                                    `keen-slider__slide number-slide${slide}`,
                                    "flex items-center justify-center"
                                )}>
                                    <FaqItemCard {...e}/>
                            </li>
                        )
                    })}
                </SimpleSlider>
            </div>
        </section>
    )
}