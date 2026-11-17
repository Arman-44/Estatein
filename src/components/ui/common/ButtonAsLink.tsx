"use client"
import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
    href: string;
    className?: string;
    variant?: "gray" | "purple" | "transparent"
    children: ReactNode;
    onClick?:() => void
}

export default function ButtonAsLink({ href, className, children, onClick,variant = "gray" }: ButtonProps) {

    const handleClick = () => {
        if(onClick)
        onClick()
    }

    return (
        <Link
            onClick={handleClick}
            className={clsx(
                "py-3.5 px-5",
                "rounded-sm text-nowrap",
                "flex items-center justify-center",
                "transition-all duration-300",
                variant == "gray" && [
                    "border-2 bg-gray-10 border-gray-15",
                ],
                variant == "purple" && [
                    "bg-purple-60"
                ],
                variant == "transparent" && [
                    "border-2 bg-transparent border-transparent",
                    "hover:border-gray-15 hover:bg-gray-08"
                ],
                className
            )}
            href={href}>
            {children}
        </Link>
    )
}