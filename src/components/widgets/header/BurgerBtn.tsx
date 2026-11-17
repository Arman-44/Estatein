'use client'
import clsx from "clsx";


interface BurgerProps {
    onClick?: () => void;
    className?: string;
    open: boolean;
}

export default function BurgerBtn({
    onClick,
    className,
    open
}: BurgerProps) {

    const handleToggle = () => {
        if (onClick) onClick();
    };

    return (
        <button
            type="button"
            onClick={handleToggle}
            className={clsx(
                "w-6 h-6",
                "flex flex-col items-end gap-1",
                "md:hidden",
                className
            )}>
            <span className="w-full border-2 rounded-lg bg-gray-15"></span>
            <span className="w-full border-2 rounded-lg bg-gray-15"></span>
            <span className={clsx(
                "w-[50%]",
                "border-2 rounded-lg bg-gray-15",
                "transition-all duration-300 ",
                open && "w-full",
            )}></span>
        </button>
    )
}