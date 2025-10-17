"use client"

import { ReactNode, createContext, useContext, useEffect, useState } from "react"
import { FacilitiesListTypes } from "../utils/Types"
import { getFacilities } from "../utils/Api"

interface ServiceProvideProps {
    children: ReactNode
}

interface ServiceContextProps {
    facilities: FacilitiesListTypes | null
}

const ServiceContext = createContext<ServiceContextProps | undefined>(undefined)
const ServicesProvider: React.FC<ServiceProvideProps> = ({ children }) => {
    const [facilities, setFacilities] = useState<FacilitiesListTypes | null>(null)

    const getAllFacilities = async () => {
        try {
            const listFacilities = await getFacilities()

            setFacilities(listFacilities)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllFacilities() 
    }, [])

    return (
        <ServiceContext.Provider value={{facilities}}>
            {children}
        </ServiceContext.Provider>
    )
}

const useServiceContext = () => {
    const context = useContext(ServiceContext)

    if(!context) {
        throw new Error('useServiceContext deve ser usado dentro de um ServiceProvider');
    }
    return context;
}

export { ServicesProvider, ServiceContext, useServiceContext };