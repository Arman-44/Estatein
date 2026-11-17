import ButtonAsLink from "@/components/ui/common/ButtonAsLink";
import clsx from "clsx";


interface BurgerProps {
    openBurger: boolean;
    onClose: () => void;
}


export default function BurgerMenu({
    openBurger,
    onClose
}: BurgerProps) {

    const navItems = [
        { label: 'Home', href: "/" },
        { label: 'About us', href: "/about" },
        { label: 'Properties', href: "/Properties" },
        { label: 'Services', href: "/services" },
    ]

    return (
        <nav className="w-full h-full flex">
            <div className={clsx(
                "w-full h-0 overflow-y-hidden bg-gray-10",
                "flex flex-col items-center gap-xs",
                "absolute top-full left-0",
                "transition-all duration-300",
                "md:h-full md:static md:flex-row",
                openBurger && "h-screen",
            )}>
                <div className={clsx(
                    "w-min flex flex-col items-center gap-xs mx-auto",
                    "md:flex-row",
                )}>
                    {navItems.map((e) => (
                        <ButtonAsLink
                            key={e.label}
                            variant="transparent"
                            className="w-min"
                            onClick={onClose}
                            href={e.href}>
                            {e.label}
                        </ButtonAsLink>
                    ))}
                </div>
                <ButtonAsLink
                    variant="transparent"
                    className="w-min flex md:hidden"
                    onClick={onClose}
                    href={""}>
                    Contact Us
                </ButtonAsLink>
            </div>

        </nav>
    )
}