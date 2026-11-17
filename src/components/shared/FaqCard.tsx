import { FaqItemType } from "@/config/faq.config";
import ButtonAsLink from "../ui/common/ButtonAsLink";
import clsx from "clsx";




export default function FaqCard({href,title,desc}:FaqItemType) {

    return (
        <article className={clsx(
            "card-width h-full p-10",
            "flex flex-col justify-between gap-md",
            "border-2 rounded-sm border-gray-15"
            )}>
            <div className="flex flex-col gap-md">
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <ButtonAsLink
            className="md:w-min" 
            href={href}>
                Read More
            </ButtonAsLink>
        </article>
    )
}