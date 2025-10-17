import { AlertTriangle, Ban, Check } from "lucide-react"

interface AlertProps {
    type: "success" | "warning" | "error"
    text: string
}

export function Alert({ text, type }: AlertProps) {
    return (
        <div 
            data-type={type}
            className="
            data-[type=success]:border-green-400 data-[type=success]:bg-green-100
            data-[type=warning]:border-yellow-500 data-[type=warning]:bg-yellow-100
            w-full fixed left-[50%] rounded-lg p-2 bottom-2 translate-x-[-50%] max-w-[500px] border
             border-red-500 bg-red-100 flex z-50"
        >
            <div 
                data-type={type}
                className="w-1/12
                data-[type=success]:text-green-400
                data-[type=warning]:text-yellow-400
                text-red-500
                "
            >
                {type == "success" && (<Check size={20} />)}
                {type == "warning" && (<AlertTriangle size={20} />)}
                {type == "error" && (<Ban size={20} />)}
            </div>
            <div className="w-11/12 text-sm">
                <b 
                    data-type={type}
                    className="text-start
                        text-sm font-medium 
                        data-[type=success]:text-green-500
                        text-red-600
                    "
                >Alerta !</b>

                <div 
                    data-type={type}
                    className="mt-1 data-[type=success]:text-green-500 text-sm font-normal"
                >
                    {text}
                </div>
            </div>
            
        </div>
    )
}