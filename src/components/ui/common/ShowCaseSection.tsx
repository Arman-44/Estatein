import ButtonAsLink from "@/components/ui/common/ButtonAsLink";
import SectionLayout from "@/components/ui/common/SectionLayout";
import ShowCaseSlider from "@/components/ui/common/ShowCaseSlider";
import { ReactNode } from "react";


export interface ShowcaseSectionType {
    children?: ReactNode;
    actionHref: string;
    actionLabel: string;
    title:string;
    desc:string;
}


export default function ShowCaseSection({ children, actionHref, actionLabel,title,desc }: ShowcaseSectionType) {

    return (
        <SectionLayout >
            <div className="flex items-end justify-between">
                <div className="w-full flex flex-col gap-xs md:w-[65%] ">
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
                <ButtonAsLink
                    className="hidden md:flex"
                    variant="gray"
                    href={actionHref}>
                    {actionLabel}
                </ButtonAsLink>
            </div>

            <ShowCaseSlider
                actionHref={actionHref}
                actionLabel={actionLabel}
            >
                {children}
            </ShowCaseSlider>

        </SectionLayout>
    )
}