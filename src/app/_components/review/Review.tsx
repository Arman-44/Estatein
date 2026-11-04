import HomeTitleLayout from "@/components/ui/layout/HomeTitleLayout";
import SimpleSlider from "@/components/ui/layout/SimpleSlider";
import { revievItems } from "@/components/config/review.config";
import ReviewCard from "@/components/shared/ReviewCard";
import clsx from "clsx";



export default function Review() {

    return (
        <section className="flex flex-col items-center justify-center gap-20 py-20">
            <HomeTitleLayout btnContent="View All Testimonials" btnHref="#">
                <h1>What Our Clients Say</h1>
                <p>
                    Read the success stories and heartfelt testimonials
                    from our valued clients. Discover why they chose 
                    Estatein for their real estate needs.
                </p>
            </HomeTitleLayout>
            <div className="w-full">
                <SimpleSlider>
                    {revievItems.map((e,index) => {
                        const slide = index + 1
                        return (
                            <li key={slide} className={clsx(
                                `keen-slider__slide number-slide${slide}`,
                                "flex items-center justify-center"
                            )}>
                                <ReviewCard {...e}/>
                            </li>
                        )
                    })}
                </SimpleSlider>
            </div>
        </section>
    )
}