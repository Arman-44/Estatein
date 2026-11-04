'use client';

import clsx from "clsx";
import { useState, useEffect } from "react";

interface RatingProps {
    totalStars?: number;
    initialRating?: number;
    readOnly?: boolean;
    onChange?: (rating: number) => void;
}

export default function StarsBox({ totalStars = 5, initialRating = 0, readOnly = false, onChange }: RatingProps) {
    const [mouseIndex, setMouseIndex] = useState(initialRating);

    const handleLeave = () => {
        !readOnly && setMouseIndex(initialRating)
    }
    const handleEnter = (value: number) => {
        !readOnly && setMouseIndex(value)
    }
    useEffect(() => {
        setMouseIndex(initialRating);
    }, [initialRating]);

    return (
        <div className="w-full h-11 flex items-center gap-1">
            {[...Array(totalStars)].map((_, index) => {
                const starValue = index + 1;
                const paintOver = starValue <= mouseIndex;

                return (
                    <button
                        key={index}
                        type="button"
                        className={clsx(
                            "w-11 h-11 transition-colors duration-100",
                            "rounded-full border border-gray-15 bg-gray-10",
                            "flex items-center justify-center leading-none",
                            paintOver ? "text-amber-300" : "text-gray-300",
                            readOnly ? "cursor-default pointer-events-none" : "cursor-pointer"
                        )}
                        onMouseEnter={() => handleEnter(starValue)}
                        onMouseLeave={() => handleLeave()}
                        onTouchEnd={() => handleLeave()}
                        onClick={() => {
                            if (!readOnly && onChange) {
                                onChange(starValue);
                            }
                        }}
                    >
                        <svg className="-translate-y-px"  width="24" height="24" viewBox="0 0 18 18" fill="currentColor" xmlns="http://w3.org">
                            <path d="M7.91008 1.159553C8.30366 0.546791 9.19928 0.546792 9.59286 1.159555L11.9501 4.82947C12.0855 5.0403 12.2951 5.19261 12.5375 5.25625L16.7562 6.36402C17.4606 6.54898 17.7373 7.40077 17.2762 7.96444L14.5143 11.3403C14.3556 11.5343 14.2756 11.7807 14.2899 12.0309L14.54 16.3854C14.5818 17.1125 13.8572 17.6389 13.1786 17.3745L9.11451 15.791C8.88103 15.7001 8.6219 15.7001 8.38842 15.791L4.32428 17.3745C3.6457 17.6389 2.92113 17.1125 2.96289 16.3854L3.213 12.0309C3.22736 11.7807 3.14729 11.5343 2.98862 11.3403L0.226739 7.96443C-0.234411 7.40076 0.0423532 6.54898 0.746748 6.36402L4.96546 5.25625C5.20782 5.19261 5.41746 5.0403 5.55288 4.82947L7.91008 1.159553Z" fill="currentColor" />
                        </svg>
                    </button>
                );
            })}
        </div>
    );
}