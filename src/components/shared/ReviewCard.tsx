import StarsBox from "./StarsBox"
import { reviewItemsType } from "../config/review.config"
import clsx from "clsx"

export default function ReviewCard({ title, label, user }: reviewItemsType) {

    return (
        <div className={clsx(
            "card-sizes p-12.5",
            "flex flex-col gap-10",
            "border-2 rounded-xl border-gray-15"
        )}>
            <div><StarsBox/></div>
            <div>
                <h3>{title}</h3>
                <p className="text-gray-60">{label}</p>
            </div>
            <div className="flex items-center gap-4">
                <img src={user.avatar} alt=""
                className="w-12.5 h-12.5 rounded-full" />
                <span>
                    <h3>{user.name}</h3>
                    <span className="text-gray-60">{user.country} {user.city}</span>
                </span>
            </div>
        </div>
    )
}