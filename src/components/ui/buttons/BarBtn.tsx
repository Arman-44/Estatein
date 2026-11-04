'use client'
import { useState } from "react";


interface barProps {
    onClick: () => void,
    className?: string,
}

export default function BarBtn({ onClick, className }: barProps) {
    const [open, setOpen] = useState(false)

    const handleToggle = () => {
        onClick();
        setOpen(!open);
    };

    return (
        <button
            type="button"
            onClick={handleToggle}
            className="group flex flex-col justify-between items-center w-6 h-6"
        >
            <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://w3.org">
                <path
                    d="M3.75 6.75H20.25"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    stroke="white"
                />

                <path
                    d="M3.75 12H20.25"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    stroke="white"
                />

                <path
                    d="M3.75 17.25H20.25"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    stroke="white"
                    className="transition-all duration-300 ease-in-out"
                    strokeDasharray="16.5 16.5"
                    strokeDashoffset={open ? "0" : "-8.25"}
                />
            </svg>
        </button>
    )
}