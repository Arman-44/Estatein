"use client"
import clsx from "clsx";
import bgAbstract from '@/assets/abstracts/notification-banner.svg'
import Link from "next/link";
import xMark from '@/assets/icons/x-mark.svg'
import { useState } from "react";

export default function NotificationBanner() {
    const [open, setOpen] = useState(true)

    return (
        <div
            style={{ backgroundImage: `url(${bgAbstract.src})` }}
            className={clsx(
                "w-full overflow-hidden px-2",
                "bg-left bg-cover md:bg-center",
                "grid grid-cols-[min-content_1fr_min-content] gap-1",
                "transition-all duration-300",
                open ? "h-12.5" : "h-0"
            )}>
            <div className={clsx(
                "flex flex-wrap items-center justify-center text-center gap-1",
                "col-span-2 place-content-center text-fluid-sm "
                )}>
                <span >✨Discover Your Dream Property with Estatein</span>
                <Link
                    className="text-fluid-sm text-nowrap underline"
                    href={'#'}>
                    Learn More
                </Link>
            </div>
            <button
                onClick={() => setOpen(!open)}
                className={clsx(
                    "w-8 h-8 bg-white/10 rounded-full self-center",
                    "flex items-center justify-center"
                )}>
                <img className="w-6 h-6" src={xMark.src} alt="closed" />
            </button>
        </div>
    )
}