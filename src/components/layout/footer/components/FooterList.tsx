import { footerConfig } from "@/components/config/footer.config";
import clsx from "clsx";
import Link from "next/link";


export default function FooterList() {

    return (
        <div className={clsx(
            "w-full h-full",
            "grid grid-cols-[1fr_1fr] gap-4",
            "xl:flex"
        )}>

            {footerConfig.map((e, index) => {
                const noBorder = index !== 3 && index !== 1
                const rowSpan2 = index === 3
                return (
                    <div
                        className={clsx(
                            "w-full",
                            "flex flex-col gap-4",
                            noBorder ? "border-r-2 border-gray-15" : '',
                            rowSpan2 ? "row-span-2" : '',
                            "xl:border-none"
                        )}
                        key={e.title}>

                        <h3 className="text-gray-60">{e.title}</h3>

                        <ul className="flex flex-col gap-2 text-nowrap">

                            {e.links.map((item, index) => (
                                <li key={item.label}>
                                    <Link href={item.href}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <hr className="w-[97%] border-t-2 border-gray-15 xl:hidden" />
                    </div>
                )
            })}
        </div>
    )
}