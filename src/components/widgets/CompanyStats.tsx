import clsx from "clsx"

const companyStatItems = [
    { stat: "200+", label: "Happy Customers", },
    { stat: "10K+", label: "Properties For Clients", },
    { stat: "16+", label: "Years of Experience", },
]

export default function CompanyStats() {


    return (
        <div className="@container w-full">
            <div className={clsx(
                "w-full gap-xs",
                "flex flex-col",
                "@xs:grid @xs:grid-cols-2",
                "@xl:grid-cols-3"
            )}>
                {companyStatItems.map(e => (        
    
                    <button
                        className={clsx(
                            "w-full h-full text-nowrap p-xs",
                            "border-2 rounded-sm",
                            "border-gray-15 bg-gray-10",
                            "@xs:nth-[3]:col-span-2",
                            "@xl:nth-[3]:col-span-1",
                        )}
                        key={e.label}>
    
                        <h2 className="text-3xl">{e.stat}</h2>
                        <p>{e.label}</p>
                    </button>
                ))}
            </div>
        </div>
    )
}