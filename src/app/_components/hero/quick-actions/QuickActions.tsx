import icHome from '@/assets/icons/home-purple.svg'
import icsun from '@/assets/icons/sun-purple.svg'
import icCamera from '@/assets/icons/camera-purple.svg'
import icManagement from '@/assets/icons/management-purple.svg'
import icArrowRTop from '@/assets/icons/ic-Arrow-Top-Rigth.svg'
import Link from 'next/link'
import clsx from 'clsx'



export default function QuickActions() {

    const actions = [
        {label:'Find Your Dream Home',href:'#',icon:icHome.src},
        {label:'Unlock Property Value',href:'#',icon:icCamera.src},
        {label:'Effortless Property Management',href:'#',icon:icManagement.src},
        {label:'Smart Investments, Informed Decisions',href:'#',icon:icsun.src}
    ]

    return (
        <div className={clsx(
            "w-full grid grid-cols-2 gap-4 p-4",
            "border-2 border-gray-15",
            "md:grid-cols-4",
        )}>
            {actions.map(e => (
                <Link 
                key={e.icon}
                href={e.href}
                className={clsx(
                    "w-full h-40",
                    "text-center relative",
                    "flex flex-col items-center justify-center gap-4",
                    "border-2 border-gray-15 rounded-[10px] bg-gray-10"
                )}>
                    <img src={icArrowRTop.src} alt="" 
                    className='w-6 h-6 absolute top-4 right-4'/>
                    <img src={e.icon} alt=""
                    className={clsx(
                        "w-12 h-12"
                    )} />
                    {e.label}
                </Link>
            ))}
        </div>
    )
}