import clsx from "clsx";
import Image from "next/image";
import heroImage from '@/assets/images/backgrounds/home-hero-bg.png'
import badge from "@/assets/images/badge.svg"

export default function HeroBg() {

    return (
        <div className={clsx(
            "w-full h-full",
            "md:grid md:grid-cols-2",
            "md:absolute md:inset-0 md:-z-50 md:overflow-hidden",
        )}>
            <div className={clsx(
                "@container",
                "w-full h-full relative px-4",
                "md:flex md:col-start-2 md:p-0",
            )}>
                <img
                    className={clsx(
                        "w-20 h-min shrink-0 absolute",
                        "ml-auto bottom-0 left-0 translate-y-1/2",
                        "md:-mr-20 md:translate-y-1/3",
                        "md:static md:w-30",
                        "@4xl:ml-[15%]"
                    )}
                    src={badge.src} alt="" />
                <Image
                    className={clsx(
                        "w-full h-full",
                        "rounded-2xl object-contain",
                        "md:rounded-none md:object-cover md:w-auto",
                        "justify-self-end",
                    )}
                    loading='eager'
                    src={heroImage} alt='' />
            </div>
        </div>
    )
}