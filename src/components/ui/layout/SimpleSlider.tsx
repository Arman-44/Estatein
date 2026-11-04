'use client'
import { useKeenSlider } from "keen-slider/react"
import { useState, ReactNode } from "react"
import "keen-slider/keen-slider.min.css"
import clsx from "clsx"
import SimpleGrayBtn from "../buttons/SimpleGrayBtn"
import { Icon } from "../icons"

interface SliderProps {
    children: ReactNode,
}


export default function SimpleSlider({ children }: SliderProps) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)

    const [sliderRef, instanceRef] = useKeenSlider<HTMLUListElement>(
        {
            initial: 0,
            slideChanged(s) {
                setCurrentSlide(s.track.details.rel)
            },
            created(s) {
                setLoaded(true)
            },
            breakpoints: {
                "(min-width: 760px)": {
                    slides: { perView: 2, spacing: 20 },
                },
                "(min-width: 1280px)": {
                    slides: { perView: 3, spacing: 20 },
                }
            }
        },
    )
    const totalPages = instanceRef.current
        ? instanceRef.current.track.details.maxIdx + 1
        : 1

    const currentPage = instanceRef.current
        ? instanceRef.current.track.details.rel + 1
        : 1
    return (
        <>
            <div className={clsx(
                "navigation-wrapper",
                "flex flex-col justify-center gap-10"
                )}>

                <ul ref={sliderRef} className="keen-slider">
                    {children}
                </ul>

                <hr className="border border-gray-15" />
                
                {loaded && instanceRef.current && (
                    <div className={clsx(
                        "w-full px-5 py-3.5",
                        "flex items-center justify-between gap-2.5")}>
                        <div>
                            {currentPage} of {totalPages}
                        </div>
                        <div className="flex items-center gap-4">
                            <Arrow
                                left
                                onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
                                disabled={currentSlide === 0}
                            />
                            <Arrow onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
                                disabled={
                                    currentSlide ===
                                    instanceRef.current.track.details.slides.length - 1
                                }
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
}) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
        <div
            onClick={props.onClick}
            className={clsx(
                `arrow ${props.left ? "arrow--left" : "arrow--right"} ${disabled}`,
                "w-14.5 h-14.5",
                "flex items-center justify-center",
                "text-gray-50 hover:text-white"
            )
            }>
            {props.left && (
                <Icon name="arrowLeft" />
            )}
            {!props.left && (
                <Icon name="arrowRight" />
            )}
        </div>
    )
}
