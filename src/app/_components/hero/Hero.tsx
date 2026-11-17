import HeroContent from './HeroContent'
import clsx from 'clsx'
import HeroBg from './HeroBg'


export default function Hero() {

    return (
        <section className={clsx(
            "w-full h-full relative gap-2xl py-sm",
            "flex flex-col-reverse justify-center",
        )}>
            <div className="container">
                <HeroContent />
            </div>
            <HeroBg />
        </section>
    )
}


