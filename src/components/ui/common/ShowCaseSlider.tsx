"use client"

import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react"
import { ReactNode, useCallback, useEffect, useState } from "react"
import ArrowButton from "./ArrowButton";
import ButtonAsLink from "./ButtonAsLink";



interface SliderProps {
    actionHref: string,
    actionLabel: string,
    children: ReactNode,
}

export default function ShowCaseSlider({
    actionHref,
    actionLabel,
    children,
}: SliderProps) {


    const [slideIndex, setSlideIndex] = useState(0)
    const [totalSlides, setTotalSlides] = useState(0)

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: false,
            align: 'start',
            duration: 20,
            slidesToScroll: 'auto',
            containScroll: 'trimSnaps',
            watchDrag: (api) => api.scrollSnapList().length > 1,
        }
    )

    const goToPrev = () => emblaApi?.scrollPrev()
    const goToNext = () => emblaApi?.scrollNext()

    const getIndex = useCallback(() => {
        if (!emblaApi) return;

        setSlideIndex(emblaApi.selectedScrollSnap() + 1)
        setTotalSlides(emblaApi.scrollSnapList().length)
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return;
        getIndex()

        emblaApi.on('select', getIndex)
        emblaApi.on('reInit', getIndex)

        return () => {
            emblaApi.off('select', getIndex)
            emblaApi.off('reInit', getIndex)
        }
    }, [emblaApi, getIndex])

    return (
        <div className="w-full h-full flex flex-col gap-md">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className={clsx(
                    "flex -ml-10",
                    "*:min-w-0 *:shrink-0 *:grow-0 *:basis-full",
                    "*:flex *:items-center *:justify-center *:pl-10",
                    "*:md:basis-1/2",
                    "*:xl:basis-1/3",
                )}>
                    {children}
                </div>
            </div>
            {totalSlides > 1 && (
                <div className={clsx(
                    "w-full flex pt-xs",
                    "items-center justify-between gap-xs",
                    "border-t-2 border-gray-15",
                    "xs:flex-row",
                )}>
                    <ButtonAsLink
                        className="md:hidden"
                        href={actionHref}>
                        {actionLabel}
                    </ButtonAsLink>

                    <span className="hidden md:inline">
                        {slideIndex} of {totalSlides}
                    </span>

                    <div className="flex items-center gap-xs">
                        <ArrowButton variant="left" onClick={goToPrev} />
                        <span className="md:hidden">{slideIndex} of {totalSlides}</span>
                        <ArrowButton onClick={goToNext} />
                    </div>
                </div>
            )}
        </div>
    )
}