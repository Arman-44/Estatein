import clsx from "clsx"


export default function CompanyStats() {

    const companyStats = [
        { stat: '200+', label: 'Happy Customers' },
        { stat: '10k+', label: 'Properties For Clients' },
        { stat: '16+', label: 'Years of Experience' }
    ]

    return (
        <div className={clsx(
            "w-full",
            "grid grid-cols-2 gap-4",
            "xl:flex"
        )}>
            {companyStats.map((e,index) => (
                <button key={e.label}
                    className={clsx(
                        "w-full h-22.5 p-4",
                        "flex flex-col items-center justify-center",
                        "bg-gray-10 border-2 border-gray-15 rounded-lg",
                        "md:items-start",
                        index === 2 && "col-span-2",
                    )}>
                    <span className="text-2xl md:text-3xl">
                        {e.stat}
                    </span>
                    <span className="text-nowrap">{e.label}</span>
                </button>
            ))}
        </div>
    )
}