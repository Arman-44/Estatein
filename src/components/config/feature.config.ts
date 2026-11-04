import icBedroom from '@/assets/icons/bedroom.svg'
import icBathroom from '@/assets/icons/bathroom.svg'
import icVilla from '@/assets/icons/villa.svg'
import seasideImg from '@/assets/images/property/seaside.png'
import rusticImg from '@/assets/images/property/rustic.png'
import metropolitanImg from '@/assets/images/property/metropolitan.png'
import { StaticImageData } from 'next/image'

export interface FeatureCardType {
    title:string,
    image:StaticImageData,
    subtitle:string,
    price:string,
    href:string,
    specifications:{
        content:string,icon:string
    }[]
    
}


export const featureCardItems:FeatureCardType[] = [
    {   
        title: 'Seaside Serenity Villa',
        image: seasideImg,
        subtitle: 'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More',
        price: '$550,000',
        href: '#',
        specifications:[
            {content:'4-Bedroom',icon:icBedroom.src},
            {content: '2-BathRoom',icon:icBathroom.src},
            {content: 'Villa',icon:icVilla.src}
        ]   
    },
    {   
        title: 'Metropolitan Haven',
        image: metropolitanImg,
        subtitle: 'A chic and fully-furnished 2-bedroom apartment with panoramic city views... Read More',
        price: '$550,000',
        href: '#',
        specifications:[
            {content:'4-Bedroom',icon:icBedroom.src},
            {content: '2-BathRoom',icon:icBathroom.src},
            {content: 'Villa',icon:icVilla.src}
        ]   
    },
    {   
        title: 'Rustic Retreat Cottage',
        image: rusticImg,
        subtitle: 'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... Read More',
        price: '$550,000',
        href: '#',
        specifications:[
            {content:'4-Bedroom',icon:icBedroom.src},
            {content: '2-BathRoom',icon:icBathroom.src},
            {content: 'Villa',icon:icVilla.src}
        ]   
    },
]