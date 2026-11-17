import { SVGProps } from 'react';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import IcBathroom from './IcBathroom';
import IcBedroom from './IcBedroom';
import IcClients from './IcClients';
import IcFacebook from './IcFacebook';
import IcGraduationCap from './IcGraduationCap';
import IcLinkedIn from './IcLinkedIn';
import IcSend from './IcSend';
import IcStar from './IcStar';
import IcTwitter from './IcTwitter';
import IcVilla from './IcVilla';
import IcYouTube from './IcYouTube';
import XMark from './XMark';

export const iconMap = {
    'arrowLeft': ArrowLeft,
    'arrowRight': ArrowRight,
    'icBathroom': IcBathroom,
    'icBedroom': IcBedroom,
    'icClients': IcClients,
    'icFacebook': IcFacebook,
    'icGraduationCap': IcGraduationCap,
    'icLinkedIn': IcLinkedIn,
    'icSend': IcSend,
    'icStar': IcStar,
    'icTwitter': IcTwitter,
    'icVilla': IcVilla,
    'icYouTube': IcYouTube,
    'xMark': XMark,
} as const;

export type IconName = keyof typeof iconMap;

interface IconProps extends SVGProps<SVGSVGElement> {
    name: IconName;
}

export function Icon({ name, ...props }: IconProps) {
    const Component = iconMap[name];
    if (!Component) return null;
    return <Component {...props} />;
}
