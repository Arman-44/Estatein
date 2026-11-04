import Link from "next/link";
import logo from '@/assets/icons/Logo.svg'

export default function Logo() {

    return (
        <Link href={'/'} className="w-min flex items-center justify-center gap-2">
            <img src={logo.src} alt="logo" className="w-7 h-7 shrink-0" />
            Eastetin
        </Link>
    )
}