'use client'

import { FormCreateTypes } from "@/app/utils/Types"
import { Box, MenuItem, Select, SelectChangeEvent, Tab, Tabs, TextField, TextareaAutosize } from "@mui/material"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { TransferList } from "../TransferList"
import { getServices } from "@/app/utils/Api"
import { FormEnviroment } from "./FormEnviroment"
import { CustomTabPanel } from "@/app/utils/CustomTabPanel"

const listFacilities = [
    '470-RES',
    '140-MRB',
    '380-FOS',
    '107-TBE',
    '530-BAR',
    '100-IBI',
]

export function FormCreate() {
    const { register, formState: { errors }, setValue, handleSubmit } = useForm<FormCreateTypes>()
    const [facilities, setFacilities] = useState<string[]>([])
    const [services, setServices] = useState(null)
    const [tabValue, setTabValue] = useState<number>(0)
    const [openEnviroment, setOpenEnviroment] = useState<boolean>(false)

    const onSubmit = (data: FormCreateTypes) => console.log(data)

    const handleSelect = (event: SelectChangeEvent<typeof facilities>) => {
        const { target: { value }, } = event;
        setFacilities(typeof value === 'string' ? value.split(',') : value);
    };

    const listServices = async () => {
        try {
            const reqServices = await getServices()

            reqServices && setServices(reqServices)
        } catch (error) {
            console.log(`erro ao buscar serviços`, error)
        }
    }

    useEffect(() => {
        setValue('facilities', facilities)
        listServices()
    }, [facilities])

    function a11yProps(index: number) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => setTabValue(newValue)

    return (
        <>
            {openEnviroment && (<FormEnviroment onClose={setOpenEnviroment} /> )}
            <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-10 mx-auto p-4 flex flex-col">
                <div className="w-full mb-2">
                    <h1 className="font-semibold text-lg">Formulário de criação:</h1>
                </div>

                <Box>
                    <Tabs onChange={handleChangeTab} className="border-b border-slate-200">
                        <Tab label="Descriçoes" {...a11yProps(0)} className="hover:bg-slate-200" />
                        <Tab label="Facilities" {...a11yProps(1)} className="hover:bg-slate-200" />
                        <Tab label="Enviroments" {...a11yProps(2)} className="hover:bg-slate-200" />
                        <Tab label="Request" {...a11yProps(3)} className="hover:bg-slate-200" />
                    </Tabs>
                </Box>

                <CustolmTabPanel value={tabValue} index={0}>
                    <div className="w-full flex flex-col">
                    <div className="w-full py-2 flex flex-col">
                            <label htmlFor="nome" className="font-medium text-sm">Nome</label>
                            <input 
                                type="text"
                                className="border-gray-300 border mt-1 h-40px rounded py-2 px-3 outline-none text-sm font-medium"
                                placeholder="Nome"
                                {...register('nome')}
                            />
                        </div>

                        <div className="w-full py-2 flex flex-col">
                            <label htmlFor="nome" className="font-medium text-base">Business ID</label>
                            <input 
                                type="text"
                                className="border-gray-300 border mt-1 h-40px rounded py-2 px-3 outline-none text-sm font-medium"
                                placeholder="Business ID"
                                {...register('business_id')}
                            />
                        </div>

                        <div className="w-full py-2 flex flex-col">
                            <label htmlFor="nome" className="font-medium text-base">Tipo</label>
                            <input 
                                type="text"
                                className="border-gray-300 border mt-1 h-40px rounded py-2 px-3 outline-none text-sm font-medium"
                                placeholder="Tipo"
                                {...register('tipo')}
                            />
                        </div>

                        <div className="w-full py-2 flex flex-col">
                            <label htmlFor="nome" className="font-medium mb-1 text-sm">Descrição curta</label>
                            <TextareaAutosize 
                                aria-label="empty textarea"
                                minRows={3}
                                className="border border-gray-300 rounded-lg p-3"
                                placeholder="Descrição curta"
                                {...register('descricao_curta')}
                            />
                        </div>

                    </div>
                </CustolmTabPanel>
                
                <CustomTabPanel value={tabValue} index={1}>
                    <div className="w-full py-2 flex mx-auto flex-col">
                        <label htmlFor="facilities" className="font-medium text-base">Facilities</label>
                        <TransferList list={listFacilities} />
                    </div>
                </CustomTabPanel>
                
                <CustomTabPanel value={tabValue} index={2}>
                    <div className="w-full flex flex-col">
                        <div className="w-full py-2 flex flex-col">
                            <label htmlFor="destino_var_name" className="font-medium text-sm">Destino var name</label>
                            <input 
                                type="text"
                                className="border-gray-300 border mt-1 h-40px rounded py-2 px-3 outline-none text-sm font-medium"
                                placeholder="Nome"
                                {...register('enviroments.destino_var_name')}
                            />
                        </div>   

                        <div className="w-full py-2 flex flex-col">
                            <label htmlFor="destino_var_name" className="font-medium text-sm">Destino locator</label>
                            <input 
                                type="text"
                                className="border-gray-300 border mt-1 h-40px rounded py-2 px-3 outline-none text-sm font-medium"
                                placeholder="Nome"
                                {...register('enviroments.destino_locator')}
                            />
                        </div> 

                        <div className="w-full py-2 flex flex-col">
                            <label htmlFor="destino_var_name" className="font-medium text-sm">Procedencia Var Name</label>
                            <input 
                                type="text"
                                className="border-gray-300 border mt-1 h-40px rounded py-2 px-3 outline-none text-sm font-medium"
                                placeholder="Nome"
                                {...register('enviroments.procedencia_var_name')}
                            />
                        </div> 

                        <div className="w-full py-2 flex flex-col">
                            <label htmlFor="destino_var_name" className="font-medium text-sm">Procedencia Locator</label>
                            <input 
                                type="text"
                                className="border-gray-300 border mt-1 h-40px rounded py-2 px-3 outline-none text-sm font-medium"
                                placeholder="Nome"
                                {...register('enviroments.procedencia_locator')}
                            />
                        </div> 
                    </div>
                </CustomTabPanel>

                <CustomTabPanel value={tabValue} index={3}>
                    <div className="w-full flex flex-col">
                        <div className="w-full py-2 flex flex-col">
                            <label htmlFor="destino_var_name" className="font-medium text-sm">Request URL</label>
                            <input 
                                type="text"
                                className="border-gray-300 border mt-1 h-40px rounded py-2 px-3 outline-none text-sm font-medium"
                                placeholder="Nome"
                                {...register('request.url')}
                            />
                        </div>

                        <div className="w-full py-2 flex flex-col">
                            <label htmlFor="destino_var_name" className="font-medium text-sm">Request Headers Accept</label>
                            <input 
                                type="text"
                                className="border-gray-300 border mt-1 h-40px rounded py-2 px-3 outline-none text-sm font-medium"
                                placeholder="Nome"
                                {...register('request.headers.accept')}
                            />
                        </div>


                        <div className="w-full py-2 flex flex-col">
                            <label htmlFor="destino_var_name" className="font-medium text-sm">Request Metodo</label>
                            <input 
                                type="text"
                                className="border-gray-300 border mt-1 h-40px rounded py-2 px-3 outline-none text-sm font-medium"
                                placeholder="Nome"
                                {...register('request.metodo')}
                            />
                        </div>

                        <div className="w-full py-2 flex flex-col">
                            <label htmlFor="destino_var_name" className="font-medium text-sm">Request Body</label>
                            <input 
                                type="text"
                                className="border-gray-300 border mt-1 h-40px rounded py-2 px-3 outline-none text-sm font-medium"
                                placeholder="Nome"
                                {...register('request.body')}
                            />
                        </div>
                    </div>
                </CustomTabPanel>
                
                
                <div className="w-full py-2 flex items-center">

                    <div className="w-6/12 flex flex-col">
                        <label htmlFor="nome" className="font-medium text-sm mb-1">Sequencia</label>
                        <input 
                            type="text"
                            className="border-gray-300 border h-[40px] rounded py-2 px-3 outline-none text-sm font-medium"
                            placeholder="Sequencia"
                            {...register('sequencia')}
                        />
                    </div>

                    <div className="w-6/12 flex flex-col items-end">
                        <label htmlFor="nome" className="font-medium text-sm mb-1">Ativo</label>
                        <input 
                            type="checkbox"
                            className="border-gray-300 border w-5 h-5    h-40px rounded py-2 px-3 outline-none text-sm font-medium"
                            placeholder="Tipo"
                            {...register('ativo')}
                        />
                    </div>
                    
                </div>

                <div className="w-full py-2 flex items-center">
                    <button className="bg-indigo-500 text-white text-sm flex justify-center items-center py-2 px-4 font-medium rounded hover:bg-indigo-900">Cadastrar</button>
                </div>
            </form>
        </>
    )
}