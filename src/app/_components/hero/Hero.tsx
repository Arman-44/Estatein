import Image from "next/image"
import heroImage from '@/assets/images/backgrounds/home-hero-bg.png'
import clsx from "clsx"
import CompanyStats from "@/components/shared/CompanyStats"
import QuickActions from "./quick-actions/QuickActions"

export default function Hero() {

    return (
        <section
            className="w-full h-full flex flex-col items-center gap-4">
            <div className="container">
                <div className={clsx(
                    "w-full h-full",
                    "flex flex-col items-center gap-15",
                    "md:flex-row-reverse",
                )}>
                    <div className={clsx(
                        "w-full h-full rounded-xl overflow-hidden",
                        "md:rounded"
                    )}>
                        <Image
                            className={clsx(
                                "w-ful h-full object-cover",
                            )}
                            src={heroImage} alt="Hero Image Building"
                            loading="eager"/>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1>Discover Your Dream Property with Estatein</h1>
                        <p>
                            Your journey to finding the perfect property begins here. Explore
                            our listings to find the home that matches your dreams.
                        </p>
                        <CompanyStats/>
                    </div>
                </div>
            </div>
                <QuickActions/>
        </section>
    )
}