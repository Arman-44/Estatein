import { ReactNode } from 'react';
import TitleLayout from './TitleLayout';
import SimpleGrayBtn from '../buttons/SimpleGrayBtn';

interface TitleBoxProps {
    btnHref: string;
    btnContent: string;
    children: ReactNode;
}

export default function HomeTitleLayout({ btnContent, btnHref, children }: TitleBoxProps) {

    return (
        <div className='w-full flex items-end justify-between gap-10'>
            <TitleLayout>
                {children}
            </TitleLayout>
            <SimpleGrayBtn
                href={btnHref}
                content={btnContent}
                className='hidden md:block' />
        </div>
    )
}