import { SVGProps } from 'react';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import IcFacebook from './IcFacebook';
import IcLinkedIn from './IcLinkedIn';
import IcSend from './IcSend';
import IcTwitter from './IcTwitter';
import IcYouTube from './IcYouTube';

export const iconMap = {
    'arrowLeft': ArrowLeft,
    'arrowRight': ArrowRight,
    'icFacebook': IcFacebook,
    'icLinkedIn': IcLinkedIn,
    'icSend': IcSend,
    'icTwitter': IcTwitter,
    'icYouTube': IcYouTube,
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
