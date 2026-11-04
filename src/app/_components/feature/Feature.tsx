import HeroTitleLayout from "@/components/ui/layout/HomeTitleLayout";
import SimpleSlider from "@/components/ui/layout/SimpleSlider";
import { featureCardItems } from "@/components/config/feature.config";
import FeatureCard from "@/components/shared/FeatureCard";
import clsx from "clsx";


export function Feature() {

    return (
        <section className="flex flex-col items-center justify-center gap-20 py-20">
            <HeroTitleLayout btnHref="#" btnContent="View All Properties">
                <h2>Featured Properties</h2>
                <p>
                    Explore our handpicked selection of featured properties.
                    Each listing offers a glimpse into exceptional homes
                    and investments available through Estatein.
                    Click "View Details" for more information.
                </p>
            </HeroTitleLayout>
            <div className="w-full">
                <SimpleSlider>
                    {featureCardItems.map((e, index) => {
                        const slide = index + 1
                        return (
                            <li key={e.title}
                                className={clsx(
                                    `keen-slider__slide number-slide${slide}`,
                                    "flex items-center justify-center"
                                )}>
                                <FeatureCard {...e} />
                            </li>
                        )
                    })}
                </SimpleSlider>
            </div>
        </section>
    )
}