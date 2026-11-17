import { FeatureItemsType } from "@/config/feature.config"
import Image from "next/image"
import { Icon } from "../ui/icons"
import clsx from "clsx"
import ButtonAsLink from "../ui/common/ButtonAsLink"

export default function FeatureCard({
    href,
    title,
    desc,
    image,
    price,
    specifications
}: FeatureItemsType) {

    return (
        <article className={clsx(
            "card-width h-full p-md",
            "xl:max-w-130",
            "flex flex-col items-center gap-xs",
            "rounded-xl border-2 border-gray-15",
        )}>

            <Image
                className="w-full max-h-108 object-contain"
                src={image} alt="#" />

            <div className="flex flex-col gap-xs">
                <h3>{title}</h3>
                <p>{desc}</p>

                <div className="flex flex-wrap gap-xs">

                    {specifications.map((e, index) => (
                        <span
                            className={clsx(
                                "px-3.5 py-1.5",
                                "flex items-center gap-1",
                                "bg-gray-10 rounded-4xl"
                            )}
                            key={index}>
                            <Icon name={e.icon} />
                            <span>{e.content}</span>
                        </span>
                    ))}
                </div>

                <div className="flex gap-xs items-center justify-between">
                    <span>
                        price<br />
                        <span>{price}</span>
                    </span>
                    <ButtonAsLink
                        variant="purple"
                        href={href}>
                        View Property Details
                    </ButtonAsLink>
                </div>
            </div>
        </article>
    )
}