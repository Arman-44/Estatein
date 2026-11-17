import FaqCard from "@/components/shared/FaqCard";
import ShowCaseSection, { ShowcaseSectionType } from "@/components/ui/common/ShowCaseSection";
import { faqItems } from "@/config/faq.config";

const items: ShowcaseSectionType = {
    actionHref: "#",
    actionLabel: "View All Properties",
    title: "Featured Properties",
    desc: "Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click 'View Details' for more information",
}

export default function Faq() {

    return (
        <ShowCaseSection {...items}>

            {faqItems.map((e,index) => (
                <div key={index}>
                    <FaqCard {...e}/>
                </div>
            ))}
        </ShowCaseSection>
    )
}