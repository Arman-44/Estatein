import FeatureCard from "@/components/shared/FeatureCard";
import ShowCaseSection, { ShowcaseSectionType } from "@/components/ui/common/ShowCaseSection";
import { featureItems } from "@/config/feature.config";

const items: ShowcaseSectionType = {
        actionHref: "#",
        actionLabel: "View All Properties",
        title: "Featured Properties",
        desc: "Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click 'View Details' for more information",
    }


export default function Feature() {

    return (
        <ShowCaseSection {...items}>
            {featureItems.map(e => (
                <div key={e.title}>
                    <FeatureCard {...e} />
                </div>
            ))}
        </ShowCaseSection>
    )
}


