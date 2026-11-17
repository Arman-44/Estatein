import clsx from "clsx";
import FooterForm from "./FooterForm";
import FooterList from "./FooterList";



export default function Footer() {

    return (
        <footer className="w-full h-full">
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
                        <p>@2023 Estatein. All Rights Reserved. Terms & Conditions</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}