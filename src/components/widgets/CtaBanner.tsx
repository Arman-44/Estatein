import HeadingLayout from '../ui/common/HeadingLayout';
import ButtonAsLink from '../ui/common/ButtonAsLink';
import ctaAbstract from '@/assets/abstracts/CTA-abstract.svg'
import clsx from 'clsx';



export default function CtaBanner() {
    return (
        <section style={{backgroundImage:`url(${ctaAbstract.src})`}}
        className={clsx(
            "border-y-2 border-gray-15 py-xl",
            "bg-cover bg-no-repeat bg-position-[10%_10%]",
        )}>
            <div className="container">
                <div className={clsx(
                    "grid grid-cols-1 items-center",
                    "md:grid-cols-[6.5fr_3.5fr] gap-md"
                )}>
                    <HeadingLayout>
                        <h1>Start Your Real Estate Journey Today</h1>
                        <p>
                            Your dream property is just a click away.
                            Whether you're looking for a new home, a
                            strategic investment, or expert real estate
                            advice, Estatein is here to assist you every
                            step of the way. Take the first step towards
                            your real estate goals and explore our available
                            properties or get in touch with our team for
                            personalized assistance.
                        </p>
                    </HeadingLayout>
                    <ButtonAsLink
                        className='w-full md:w-min justify-self-end'
                        variant="purple"
                        href="#">
                        Explore Properties
                    </ButtonAsLink>
                </div>
            </div>
        </section>
    );
}