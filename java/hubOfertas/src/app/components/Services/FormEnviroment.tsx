import { EnviromentsTypes } from "@/app/utils/Types"
import { X } from "lucide-react"
import { useForm } from "react-hook-form"

interface FormEnviromentProps {
    onClose: (data: boolean) => void
}

export function FormEnviroment({ onClose }: FormEnviromentProps) {
    const { register } = useForm<EnviromentsTypes>()
    return (
        <div className="w-full fixed max-w-[400px] bg-white top-20 left-[50%] translate-x-[-50%] rounded shadow p-3 bg-white flex flex-col">
            <h2 className="text-sm font-medium text-slate-800 flex justify-between">
                Cadastrar Enviroment
                <span 
                    onClick={() => onClose(false)}
                    className="flex w-7 h-7 border cursor-pointer hover:border-red-600 border-slate-200 hover:bg-rose-200 hover:text-red-600 items-center justify-center rounded"
                ><X size={18} /></span>
            </h2>

            <div className="w-full mt-5 flex flex-col">
                <div className="flex flex-col my-2">
                    <label htmlFor="destino_var_name" className="text-sm font-medium text-slate-800">Destino Var Name</label>
                    <input 
                        type="text" 
                        className="border-gray-300 border mt-1 h-40px rounded py-2 px-3 outline-none text-sm font-medium"
                        id="destino_var_name"
                        {...register("destino_var_name")}
                    />
                </div>

                <div className="flex flex-col my-2">
                    <label htmlFor="destino_locator" className="text-sm font-medium text-slate-800">Destino Locator</label>
                    <input 
                        type="text" 
                        className="border-gray-300 border mt-1 h-40px rounded py-2 px-3 outline-none text-sm font-medium"
                        id="destino_locator"
                        {...register("destino_locator")}
                    />
                </div>

                <div className="flex flex-col my-2">
                    <label htmlFor="destino_locator" className="text-sm font-medium text-slate-800">Procedencia Locator</label>
                    <input 
                        type="text" 
                        className="border-gray-300 border mt-1 h-40px rounded py-2 px-3 outline-none text-sm font-medium"
                        id="procedencia_locator"
                        {...register("procedencia_locator")}
                    />
                </div>

                <div className="">
                    <button 
                        className="bg-indigo-500 text-white text-sm font-medium flex justify-center items-center py-2 px-4 mx-auto rounded hover:bg-indigo-800"
                    >Inserir</button>
                </div>
            </div>
        </div>
    )
}