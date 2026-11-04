import Logo from "@/components/ui/Logo";
import clsx from "clsx";
import icMessage from '@/assets/icons/message.svg'
import icSend from '@/assets/icons/send.svg'


export default function FooterForm() {

    return (
        <div className={clsx(
            "w-full h-full",
            "flex flex-col gap-4",
            "md:w-[50%]",
            "xl:w-81 xl:shrink-0"
        )}>
            <Logo />
            <form
                className="w-full"
                action="">

                <label
                    className="w-full relative"
                    htmlFor="email">

                    <input
                        type="email"
                        name="email"
                        id="email"
                        className={clsx(
                            "w-full h-13 px-15",
                            "flex",
                            "border-2 rounded-lg border-gray-15 bg-gray-10",
                            "focus:outline-none"
                        )}
                    />
                    <span className="block absolute top-3 left-6">
                        <img src={icMessage.src} alt="" />
                    </span>
                    <button className="absolute top-3 right-6">
                        <img src={icSend.src} alt="" />
                    </button>
                </label>
            </form>
        </div>
    )
}