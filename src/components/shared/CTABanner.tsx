import Link from "next/link";
import ctaBgAbstract from '@/assets/abstracts/cubes.svg'
import TitleLayout from "../ui/layout/TitleLayout";
import clsx from "clsx";



export default function CTABanner() {

    return (
        <section
            style={{ backgroundImage: `url(${ctaBgAbstract.src})` }}
            className={clsx(
                "w-full py-25",
                "border-y-2 border-gray-15",
                "flex items-center justify-center",
                "bg-no-repeat bg-left bg-cover",
                "xl:bg-center xl:bg-cover"
            )}
        >
            <div className="container">
                <div className={clsx(
                    "w-full",
                    "flex flex-col items-center gap-6",
                    "md:flex-row"
                )}>
                    <TitleLayout>
                        <h1>Start Your Real Estate Journey Today</h1>
                        <p>
                            Your dream property is just a click away.
                            Whether you're looking for a new home, a strategic
                            investment, or expert real estate advice, Estatein
                            is here to assist you every step of the way. Take
                            the first step towards your real estate goals and
                            explore our available properties or get in touch
                            with our team for personalized assistance.
                        </p>
                    </TitleLayout>
                    <Link
                        className={clsx(
                            "w-full h-min px-6 py-4.5 text-nowrap",
                            "flex items-center justify-center",
                            "rounded-lg bg-purple-60",
                            "md:w-min"
                        )}
                        href={''}>
                        Explore Properties
                    </Link>
                </div>
            </div>
        </section>
    )
}