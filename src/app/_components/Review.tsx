import ReviewCard from "@/components/shared/ReviwCard"
import ShowCaseSection, { ShowcaseSectionType } from "@/components/ui/common/ShowCaseSection"
import { reviewItems } from "@/config/review.config"



const items: ShowcaseSectionType = {
    actionHref: "#",
    actionLabel: "View All Properties",
    title: "Featured Properties",
    desc: "Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click 'View Details' for more information",
}

export default function Review() {

    return (
        <ShowCaseSection {...items}>

            {reviewItems.map((e,index) => (
                <div key={index}>
                    <ReviewCard {...e}/>
                </div>
            ))}
        </ShowCaseSection>
    )
}