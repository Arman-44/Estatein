"use client"
import Link from "next/link"

interface BtnProps {
    href:string
    content:string,
    className?:string,
}

export default function SimpleGrayBtn ({href,content,className}:BtnProps) {


    return (
        <Link
        href={href}
        className={`${className} bg-gray-10 border-2 border-gray-15 rounded-lg px-5 py-4 text-nowrap`}>
            {content}
        </Link>
    )
}