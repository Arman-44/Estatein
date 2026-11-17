import { reviewItemsType } from "@/config/review.config";
import StarsRating from "./StarsRating";
import clsx from "clsx";




export default function ReviewCard({title,desc,stars,user}: reviewItemsType) {

    return (
        <article className={clsx(
            "card-width h-full flex flex-col gap-md p-10",
            "border-2 rounded-sm border-gray-15",
            )}>
            <div className="review">
                <StarsRating/>
            </div>

            <figure className="flex flex-col gap-md">
                <blockquote>
                    <h3>{title}</h3>
                    <p className="text-white mt-xs">{desc}</p>
                </blockquote>
                <figcaption className="flex items-center gap-xs">
                    <img src={user.avatar} alt="" />
                    <span className="flex flex-col gap-xs"> 
                        <cite className="not-italic">{user.name}</cite>
                        <span>{user.city}, {user.country}</span>
                    </span>
                </figcaption>
            </figure >
        </article >
    )
}