import Image from "next/image"
import { FeatureCardType } from "../config/feature.config"
import Link from "next/link"
import clsx from "clsx"


export default function FeatureCard({ image, href, price, specifications, subtitle, title }: FeatureCardType) {

    return (
        <div className={clsx(
            "card-sizes",
            "flex flex-col items-center justify-between gap-10",
            "border-2 rounded-xl border-gray-15 p-6"
        )}>
            <div>
                <Image src={image} alt="#" />
            </div>

            <div>
                <h3>{title}</h3>
                <p className="text-gray-60 text-[14px] md:text-[16px] xl:text-[18px]">
                    {subtitle}
                </p>
            </div>

            <ul className="flex flex-wrap gap-4">
                {specifications.map((e, index) => (
                    <li key={index}
                        className="flex flex-nowrap px-5 py-1.5 rounded-[28px] bg-gray-10">
                        <img className="w-6 h-6" src={e.icon} alt="#" />
                        {e.content}
                    </li>
                ))}
            </ul>

            <div className="flex gap-7.5 items-center">
                <div className="flex flex-col">
                    <span className="text-gray-60">
                        Price
                    </span>
                    {price}
                </div>
                <Link href={href}
                className={clsx(
                    "text-nowrap px-8.75 py-3.5",
                    "rounded-lg bg-purple-60"
                    )}>
                    View Property Details
                </Link>
            </div>
            
        </div>
    )
}