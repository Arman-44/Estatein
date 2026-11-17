"use client"
import { Icon } from "../icons";


interface ArrowButtonProps {
    variant?: "left" | "right";
    className?:string;
    onClick?: () => void;
}

export default function ArrowButton({ variant,className,onClick }: ArrowButtonProps) {

    const handleClick = () => {
        if(onClick) onClick()
    }

    return (
        <button
            className={`xs:p-2.5 xs:border-2 border-gray-15 rounded-full ${className}`}
            onClick={handleClick}>
                {variant == "left" ? <Icon name="arrowLeft" /> : <Icon name="arrowRight" /> }
        </button>
    )
}