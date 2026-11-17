"use client"
import clsx from "clsx";
import bgAbstract from '@/assets/abstracts/notification-banner.svg'
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/ui/icons";

export default function HeaderBanner() {
    const [open, setOpen] = useState(true)

    return (
        <div
            style={{ backgroundImage: `url(${bgAbstract.src})` }}
            className={clsx(
                "w-full flex px-2 overflow-hidden",
                "items-center justify-between",
                "bg-left bg-cover md:bg-center",
                "transition-all duration-300",
                open ? "h-12.5" : "h-0"
            )}>
            <div className="place-content-center text-center mx-auto">
                <span >✨Discover Your Dream Property with Estatein&nbsp;&nbsp;</span>
                <Link
                    className="text-fluid-sm text-nowrap underline"
                    href={'#'}>
                    Learn More
                </Link>
            </div>
            <button
                onClick={() => setOpen(!open)}
                className="bg-white/10 rounded-full p-1">
                <Icon className="w-6 h-6" name="xMark" />
            </button>
        </div>
    )
}