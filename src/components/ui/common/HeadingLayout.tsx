import { ReactNode } from "react";



export default function HeadingLayout({children}:{children:ReactNode}) {

    return (
        <div className="w-full flex flex-col gap-xs">
            {children}
        </div>
    )
}