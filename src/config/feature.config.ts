import icBedroom from '@/assets/icons/bedroom.svg'
import icBathroom from '@/assets/icons/bathroom.svg'
import icVilla from '@/assets/icons/villa.svg'
import seasideImg from '@/assets/images/property/seaside.png'
import rusticImg from '@/assets/images/property/rustic.png'
import metropolitanImg from '@/assets/images/property/metropolitan.png'
import { StaticImageData } from 'next/image'
import { IconName } from '@/components/ui/icons'

export interface FeatureItemsType {
    title:string,
    image:StaticImageData,
    desc:string,
    price:string,
    href:string,
    specifications:{
        content:string,
        icon:IconName
    }[]
    
}


export const featureItems:FeatureItemsType[] = [
    {   
        title: 'Seaside Serenity Villa',
        image: seasideImg,
        desc: 'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More',
        price: '$550,000',
        href: '#',
        specifications:[
            {content:'4-Bedroom',icon:"icBedroom"},
            {content: '2-BathRoom',icon:"icBathroom"},
            {content: 'Villa',icon:"icVilla"}
        ]   
    },
    {   
        title: 'Metropolitan Haven',
        image: metropolitanImg,
        desc: 'A chic and fully-furnished 2-bedroom apartment with panoramic city views... Read More',
        price: '$550,000',
        href: '#',
        specifications:[
            {content:'4-Bedroom',icon:"icBedroom"},
            {content: '2-BathRoom',icon:"icBathroom"},
            {content: 'Villa',icon:"icVilla"}
        ]   
    },
    {   
        title: 'Rustic Retreat Cottage',
        image: rusticImg,
        desc: 'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... Read More',
        price: '$550,000',
        href: '#',
        specifications:[
            {content:'4-Bedroom',icon:"icBedroom"},
            {content: '2-BathRoom',icon:"icBathroom"},
            {content: 'Villa',icon:"icVilla"}
        ]   
    },
]