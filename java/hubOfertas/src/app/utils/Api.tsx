import { FacilitiesListTypes } from "./Types"

const getServices = async () => {
    try {
        const req = await fetch(`https://hub-ofertas-servicos.dev.ceabr.io/api/v1?ativo=true`, {
            headers: {
                accept: `application/json`
            }
        })

        const res = await req.json()

        return res
    } catch (error) {
        throw error
    }
}

const getFacilities = async (): Promise<FacilitiesListTypes> => {
    try {
        const req = await fetch(`${process.env.NEXT_PUBLIC_APP_HOST_LOJA}/api/v1`, {
            method: 'GET',
            headers: {
                accept: `application/json`
            }
        })

        if(!req.ok) throw new Error(`Erro ao buscar lojas`)

        const res: FacilitiesListTypes = await req.json()

        return res
    } catch (error) {
        throw error
    }
}

export {getServices, getFacilities}