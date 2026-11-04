import clsx from "clsx";
import FooterForm from "./components/FooterForm";
import FooterList from "./components/FooterList";
import SotialBox from "@/components/shared/SotialBox";



export default function Footer() {

    return (
        <footer>
            <div className="container">

                <div className={clsx(
                    "w-full h-full py-20",
                    "flex flex-col gap-12.5",
                    "xl:flex-row xl:gap-20"
                )}>

                    <FooterForm />
                    <FooterList />
                </div>
            </div>
            
            <div className="w-full bg-gray-10 py-4">
                <div className="container">   
                    <div className={clsx(
                        "w-full flex flex-col gap-4",
                        "md:flex-row-reverse md:justify-between md:items-center"
                    )}>
                        <SotialBox className="flex items-center gap-2" />
                        <p>@2023 Estatein. All Rights Reserved. Terms & Conditions</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}