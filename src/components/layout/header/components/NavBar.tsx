'use client'
import BarBtn from "@/components/ui/buttons/BarBtn";
import Logo from "@/components/ui/Logo";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";


export default function NavBar() {

    const [open, setOpen] = useState(false)

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Properties', href: '/properties' },
        { label: 'Services', href: '/services' },
    ]



    return (
        <nav
            className={clsx(
                "w-full py-5 relative",
                "flex justify-between",
            )}>
            <Logo />
            <ul
                className={clsx(
                    "w-screen absolute overflow-hidden -z-1",
                    "flex flex-col gap-10 justify-center items-center",
                    "transition-all duration-300 bg-gray-10",
                    open ? "h-screen" : "h-0"
                )}
            >
                {navItems.map(e => (
                    <li key={e.label}>
                        <Link href={e.href}>
                            {e.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <BarBtn
                onClick={() => setOpen(!open)}
            />
        </nav>
    )
}