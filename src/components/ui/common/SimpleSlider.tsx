"use client"

import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react"
import { ReactNode, useCallback, useEffect, useState } from "react"
import { Icon } from "../icons";


interface SliderProps {
    children: ReactNode;
    autoSize?: boolean;
    buttons?: boolean;
    variant?: "carousel" | "slider";
}

export default function SimpleSlider({
    children,
    autoSize,
    buttons,
    variant = "slider",
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
        <div className="w-full h-full">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className={clsx(
                    "gap-10",
                    !autoSize && "*:flex-center",
                    variant === "slider" && [
                        "flex",
                        "*:min-w-0",
                        "*:flex-[0_0_100%]",
                        "*:md:basis-1/2",
                        "*:xl:basis-1/3",
                    ],
                    variant === "carousel" && [
                        "w-full grid",
                        "grid-rows-3 grid-flow-col auto-cols-[100%]",
                        "lg:grid-flow-row lg:grid-rows-none lg:grid-cols-2",
                    ]
                )}>
                    {children}
                </div>
            </div>
            {totalSlides > 1 && buttons && (
                <div className={clsx(
                    "w-full flex flex-col",
                    "items-center justify-between gap-4",
                    "xs:flex-row",
                    )}>
                    <div>
                        {slideIndex} of {totalSlides}
                    </div>
                    <div className="flex gap-4 text-l">
                        <button className="arrow-frame" onClick={goToPrev}>
                            <Icon name="arrowLeft" />
                        </button>
                        <button className="arrow-frame" onClick={goToNext}>
                            <Icon name="arrowRight" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}