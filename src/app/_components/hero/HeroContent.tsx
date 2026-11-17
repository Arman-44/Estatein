import ButtonAsLink from "@/components/ui/common/ButtonAsLink";
import HeadingLayout from "@/components/ui/common/HeadingLayout";
import CompanyStats from "@/components/widgets/CompanyStats";
import clsx from "clsx";

export default function HeroContent() {


    return (
        <div className={clsx(
            "@container",
            "w-full h-full",
            "flex flex-col gap-md",
            "md:w-[50%]"
        )}>
            <HeadingLayout>
                <h1>Discover Your Dream Property with Estatein</h1>
                <p>
                    Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
                </p>
            </HeadingLayout>

            <div className='flex flex-col gap-xs @md:flex-row'>
                <ButtonAsLink href='#'>
                    Learn More
                </ButtonAsLink>
                <ButtonAsLink
                    variant='purple'
                    href='#'>
                    Browse Properties
                </ButtonAsLink>
            </div>
            <CompanyStats />
        </div>
    )
}