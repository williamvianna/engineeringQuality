'use client'

import { AlignJustify, Plus, Wrench } from "lucide-react"
import { useState } from "react"

interface SidebarProps {
    onHide: boolean
}

export function Sidebar({ onHide }: SidebarProps) {
    const [showServiceMenu, setShowServiceMenu] = useState<boolean>(false)

    const handleShowMenu = () => showServiceMenu ? setShowServiceMenu(false) : setShowServiceMenu(true)

    return (
        <div 
            data-hide={onHide}
            className="md:w-[200px] data-[hide=true]:w-[80px] 2xl:w-[300px] transition-all flex flex-col fixed h-full bg-blue-500 left-0 top-0 z-10 pt-20 pb-4"
        >
           <div 
                data-hide={onHide}
                className="flex rounded relative flex-col data-[hide=true]:p-1 data-[hide=true]:m-1 p-3 text-white bg-indigo-600 m-4"
            >
                <header 
                    onClick={handleShowMenu}
                    className="px-2 flex hover:bg-white hover:text-indigo-600 rounded cursor-pointer items-center text-sm font-semibold"
                >
                    <Wrench 
                        className="mr-1 data-[hide=true]:mx-auto data-[hide=true]:my-2" 
                        data-hide={onHide}
                        size={onHide ? 20 : 16} 
                    />
                    <span
                        data-hide={onHide}
                        className="data-[hide=true]:hidden"
                    >
                        Serviços
                    </span>
                </header>
                <div 
                    data-hide={onHide}
                    data-show={showServiceMenu}
                    className="flex data-[hide=false]:relative data-[show=true]:absolute top-0 data-[show=false]:hidden data-[hide=true]:ml-20 rounded data-[hide=true]:text-indigo-600 data-[hide=true]:bg-white data-[hide=true]:w-[250px] data-[hide=true]:shadow data-[hide=true]:px-1 data-[hide=true]:items-center flex-col items-start px-4 py-1"
                >
                    <a href="#" className="py-2 text-sm font-medium hover:underline flex items-center mr-auto pl-4">
                        <AlignJustify className="mr-1" size={16} />
                        <span>Listar</span>
                    </a>
                    <a href="#" className="py-2 text-sm font-medium hover:underline flex items-center mr-auto pl-4">
                        <Plus className="mr-1" size={16} />

                        <span>Cadastrar</span>
                    </a>
                </div>
           </div>
        </div>
    )
}