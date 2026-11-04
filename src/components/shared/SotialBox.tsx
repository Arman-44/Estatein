import Link from "next/link"
import { Icon } from "../ui/icons"
import clsx from "clsx"


export default function SotialBox({className}:{className:string}) {
    const sotials = [
        { icon: "icFacebook", label: 'Facebook', href: '#' },
        { icon: "icLinkedIn", label: 'LinkedIn', href: '#' },
        { icon: "icTwitter", label: 'Twitter', href: '#' },
        { icon: "icYouTube", label: 'YouTube', href: '#' },
    ] as const

    return (
        <div className={className}>
            {sotials.map(e => (
                <Link
                    className={clsx(
                        "w-10 h-10 group",
                        "flex items-center justify-center",
                        "rounded-full bg-gray-08"
                    )}
                    key={e.label}
                    href={e.href}>
                    <Icon name={e.icon} className="group-hover:text-purple-75"/>
                </Link>
            ))}
        </div>
    )
}