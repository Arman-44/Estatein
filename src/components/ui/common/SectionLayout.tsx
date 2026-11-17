import { ReactNode } from "react";
import clsx from "clsx";

interface SectionLayoutProps {
    children: ReactNode;
    variant?: 'stack' | 'split' | 'asymmetric';
}

export default function SectionLayout({
    children,
    variant = 'stack',
}: SectionLayoutProps) {



    return (
        <section className={clsx(
            "w-full py-xl gap-xl",
            variant === "stack" && [
                "flex justify-center flex-col items-start"
            ],
            variant === "split" && [
                "grid grid-cols-2"
            ],
            variant === "asymmetric" && [
                "grid grid-cols-1",
                "items-center",
                "xl:grid-cols-[3fr_7fr]"
            ]
        )}>
            
            {children}
        </section>
    );
}