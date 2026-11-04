import Link from "next/link"
import { faqItemType } from "../config/faq.config"
import clsx from "clsx"


export default function FaqItemCard({ href, title, subtitle }: faqItemType) {

    return (
        <div className={clsx(
            "card-sizes h-full",
            "flex flex-col justify-between gap-7.5",
            "border-2 rounded-xl border-gray-15 p-6"
            )}>
            <h3 className="title-lg">{title}</h3>
            <p className="text-gray-60">{subtitle}</p>
            <Link href={href}
                className={clsx(
                    "w-full h-11.5 rounded-lg text-nowrap",
                    "border-2  border-gray-15  bg-gray-10",
                    "flex items-center justify-center",
                    "md:w-min md:px-5 md:py-3.5"
                    )}>
                Read More
            </Link>
        </div>
    )
}