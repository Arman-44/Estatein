import { ReactNode } from 'react';

interface TitleBoxProps {
    children: ReactNode;
}

export default function TitleLayout({ children }: TitleBoxProps) {
    return (
        <div className="flex flex-col gap-2 md:gap-3">
            {children}
        </div>
    )
}