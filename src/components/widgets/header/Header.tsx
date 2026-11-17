"use client"
import { useEffect, useState } from "react";
import BurgerBtn from "./BurgerBtn";
import BurgerMenu from "./BurgerMenu";
import HeaderBanner from "./HeaderBanner";
import Logo from "@/components/shared/Logo";
import ButtonAsLink from "@/components/ui/common/ButtonAsLink";



export default function Header() {

    const [open, setOpen] = useState(false)

    useEffect(() => {
        document.body.classList.toggle("overflow-y-hidden", open);
        return () => document.body.classList.remove("overflow-y-hidden");
    }, [open]);

    return (
        <header className="w-full h-min bg-gray-10 sticky top-0 z-50">
            <HeaderBanner />

            <div className="container">
                <div className="w-full h-full flex justify-between items-center py-4">
                    <Logo />

                    <BurgerMenu
                        openBurger={open}
                        onClose={() => setOpen(false)} />

                    <BurgerBtn
                        open={open}
                        onClick={() => setOpen(!open)} />

                    <ButtonAsLink
                        variant="transparent"
                        className="hidden md:flex"
                        href={""}>
                        Contact Us
                    </ButtonAsLink>
                </div>
            </div>
        </header>
    )
}