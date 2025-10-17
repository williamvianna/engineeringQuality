'use client'

import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary, Divider,
    FormControlLabel,
    IconButton,
    TextareaAutosize,
    TextField,
    Typography
} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import {TransferList} from "@/app/components/TransferList";
import {useForm} from "react-hook-form";
import {FormCreateTypes} from "@/app/utils/Types";
import Checkbox from "@mui/material/Checkbox";
import {PlusIcon, SaveIcon} from "lucide-react";

import styles from '../../../page.module.css'
import {UnsavedIcon} from "@/app/components/UnsavedIcon";

// TODO - mover as interfaces para um lugar melhor
export interface Request {
    url: string,
    metodo: string,
    timeout_in_secs: number,
    headers: Map<string, string>
    body: string
}
export interface Autenticacao {
    ativo?: boolean,
    token_variable_name?: string,
    response_variable_name?: string,
    request: Request
}

export interface Acao {
    id?: string,
    facilities?: [],
    nome?: string,
    descricao_curta?: string,
    ativo: boolean,
    sequencia: number,
    mensagem_operador?: string,
    data?: [],
    request?: Request
    autenticacao?: Autenticacao
    lista_de_environments?: []
}

const listFacilities = [
    '470-RES',
    '140-MRB',
    '380-FOS',
    '107-TBE',
    '530-BAR',
    '100-IBI',
]

export default function Acoes() {
    const {business_id} = useParams()
    const { register, formState: { errors }, setValue } = useForm<FormCreateTypes>()
    const [acoes, setAcoes] = useState<Acao[]>([])
    // const [isLoading, setLoading] = useState(true)


    const [facilities, setFacilities] = useState<string[]>([])




    // TODO - Jogar para o service
    const uri = process.env.NEXT_PUBLIC_APP_SERVICOS_V1_URI as string;

    useEffect(() => {
        fetch(uri+'/?business_id='+business_id)
            .then((res) => res.json())
            .then((data) => {
                let acoes : Acao[] = data && data[0].acoes ? data[0].acoes : [];
                acoes = acoes.sort((a, b) => a.sequencia - b.sequencia);
                setAcoes(acoes);

                // setLoading(false)
            }).catch(e => {
            console.log(e)
        })
    }, [])


    function handleNewAction() {

        const sequencia = Math.max(...acoes.map(o => o.sequencia), 0)
        const acao : Acao = {sequencia: sequencia+1, ativo: true};
        setAcoes( (acoes) => [...acoes, acao]);

    }

    function handleInput(e, index) {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        const acao = {...acoes[index], [fieldName]: fieldValue};

        const acoesNew = acoes.map((a, i) => {
            if (i === index) {
                return acao;
            }
            return a
        })
        setAcoes([...acoesNew]);

    }

    function handleCheckbox(e, index) {
        const fieldName = e.target.name;
        const fieldValue = e.target.checked;

        const acao = {...acoes[index], [fieldName]: fieldValue};

        const acoesNew = acoes.map((a, i) => {
            if (i === index) {
                return acao;
            }
            return a
        })
        setAcoes([...acoesNew]);

    }


    return (
        <main className="w-full md:max-w-[900px] 2xl:max-w-[1200px] mx-auto">
            <div className="w-full flex mt-28">

                <div className="w-full">

                    {
                        acoes.map((a, i) => {
                            return (
                                <Accordion key={i}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMore />}
                                        aria-controls="panel-content"
                                        id="panel-header"
                                    >
                                        <Grid container>
                                            <Grid item xs={11} >
                                                <Typography>{a.nome}</Typography>
                                            </Grid>
                                            <Grid item xs={1} >
                                                {!a.id ? <UnsavedIcon rgba="ff0000aa"/>: ''}
                                            </Grid>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <Typography>
                                                    {a.descricao_curta}
                                                </Typography>
                                            </Grid>
                                            <Grid container>
                                                <form className="w-full mx-auto p-4 flex flex-col">
                                                    <div className="w-full py-2 flex flex-col">
                                                        <label htmlFor="facilities" className="font-medium text-base">Facilities</label>
                                                        <TransferList list={listFacilities} />
                                                    </div>

                                                    <div className="w-full py-2 flex flex-col">
                                                        <label htmlFor="nome" className="font-medium text-base">Nome</label>
                                                        <TextField
                                                            className="!border-gray-300 border !rounded-2xl"
                                                            placeholder="Nome"
                                                            {...register('nome')}
                                                            value={a.nome}
                                                            onChange={e => handleInput(e, i)}
                                                        />
                                                    </div>
                                                    <div className="w-full py-2 flex flex-col">
                                                        <label htmlFor="nome" className="font-medium text-base">Descrição curta</label>
                                                        <TextareaAutosize
                                                            aria-label="empty textarea"
                                                            minRows={3}
                                                            className="border border-gray-300 rounded-lg p-3"
                                                            placeholder="Descrição curta"
                                                            {...register('descricao_curta')}
                                                            value={a.descricao_curta}
                                                        />
                                                    </div>
                                                    <div className="w-full py-2 flex flex-row">
                                                        <div className="w-4/6 py-2 pr-2 flex flex-col">
                                                            <label htmlFor="mensagemOperador" className="font-medium text-base">Mensagem Operador</label>
                                                            <TextField
                                                                placeholder="Mensagem Operador"
                                                                name="mensagem_operador"
                                                                value={a.mensagem_operador}
                                                                onChange={e => handleInput(e, i)}
                                                            />
                                                        </div>
                                                        <div className="w-1/6 py-2 flex flex-col">
                                                            <label htmlFor="sequencia" className="font-medium text-base">Sequencia</label>
                                                            <TextField
                                                                placeholder="Sequencia"
                                                                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min: 0 }}
                                                                onKeyDown={(event) => {
                                                                    if (event?.key === '-' || event?.key === '+' || (event?.key.match('\\D') && event?.key !=='Backspace' ) ) {
                                                                        event.preventDefault();
                                                                    }
                                                                }}
                                                                {...register('sequencia')}
                                                                value={a.sequencia}
                                                                onChange={e => handleInput(e, i)}
                                                            />


                                                        </div>
                                                        <div className="w-1/6 py-3 flex justify-center">
                                                            <label htmlFor="ativo" className="font-medium text-base"></label>
                                                            <FormControlLabel
                                                                control={<Checkbox />}
                                                                label="Ativo"
                                                                labelPlacement="start"
                                                                {...register('ativo')}
                                                                value={true}
                                                                checked={a.ativo}
                                                                onChange={e => handleCheckbox(e, i)}
                                                            />
                                                        </div>
                                                    </div>


                                                    <br/>
                                                    <Divider textAlign="left" variant="fullWidth">
                                                        <Typography variant="h5">Request</Typography>
                                                    </Divider>
                                                    <br/>
                                                    <div className="w-full py-2 flex flex-col">
                                                        <label htmlFor="request.url" className="font-medium text-base">Url</label>
                                                        <TextField
                                                            placeholder="Url"
                                                            name="request.url"
                                                            value={a.request?.url}
                                                            onChange={e => handleInput(e, i)}
                                                        />
                                                    </div>
                                                    <div className="w-full flex flex-row">
                                                        <div className="w-2/4 pr-1 flex flex-col">
                                                            <label htmlFor="request.metodo" className="font-medium text-base">M&eacute;todo</label>
                                                            <TextField
                                                                placeholder="M&eacute;todo"
                                                                name="request.metodo"
                                                                value={a.request?.metodo}
                                                                onChange={e => handleInput(e, i)}
                                                            />
                                                        </div>
                                                        <div className="w-2/4 pl-1 flex flex-col">
                                                            <label htmlFor="request.timeout_in_secs" className="font-medium text-base">Timeout (segundos)</label>
                                                            <TextField
                                                                placeholder="Timeout (segundos)"
                                                                name="request.timeout_in_secs"
                                                                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min: 0 }}
                                                                onKeyDown={(event) => {
                                                                    if (event?.key === '-' || event?.key === '+' || (event?.key.match('\\D') && event?.key !=='Backspace' ) ) {
                                                                        event.preventDefault();
                                                                    }
                                                                }}
                                                                value={a.request?.timeout_in_secs}
                                                                onChange={e => handleInput(e, i)}
                                                            />
                                                        </div>
                                                    </div>



                                                    <br/>
                                                    <Divider textAlign="left" variant="fullWidth">
                                                        <Typography variant="h5">Autentica&ccedil;&atilde;o</Typography>
                                                    </Divider>
                                                    <br/>
                                                    <div className="w-full flex flex-row">
                                                        <div className="w-2/4 pr-1 flex flex-col">
                                                            <label htmlFor="autenticacao.token_variable_name" className="font-medium text-base">Nome do token</label>
                                                            <TextField
                                                                placeholder="Nome do token"
                                                                name="request.token_variable_name"
                                                                value={a.autenticacao?.token_variable_name}
                                                                onChange={e => handleInput(e, i)}
                                                            />
                                                        </div>
                                                        <div className="w-2/4 pr-1 flex flex-col">
                                                            <label htmlFor="autenticacao.response_variable_name" className="font-medium text-base">Nome token no retorno</label>
                                                            <TextField
                                                                placeholder="Nome token no retorno"
                                                                name="request.response_variable_name"
                                                                value={a.autenticacao?.response_variable_name}
                                                                onChange={e => handleInput(e, i)}
                                                            />
                                                        </div>
                                                    </div>

                                                    <br/>
                                                    <Divider textAlign="left" variant="fullWidth">
                                                        Request
                                                    </Divider>
                                                    <div className="w-full py-2 flex flex-col">
                                                        <label htmlFor="autenticacao.request.url" className="font-medium text-base">Url</label>
                                                        <TextField
                                                            placeholder="Url"
                                                            name="request.url"
                                                            value={a.autenticacao?.request?.url}
                                                            onChange={e => handleInput(e, i)}
                                                        />
                                                    </div>
                                                    <div className="w-full flex flex-row">
                                                        <div className="w-2/4 pr-1 flex flex-col">
                                                            <label htmlFor="autenticacao.request.metodo" className="font-medium text-base">M&eacute;todo</label>
                                                            <TextField
                                                                placeholder="M&eacute;todo"
                                                                name="autenticacao.request.metodo"
                                                                value={a.autenticacao?.request?.metodo}
                                                                onChange={e => handleInput(e, i)}
                                                            />
                                                        </div>
                                                        <div className="w-2/4 pl-1 flex flex-col">
                                                            <label htmlFor="autenticacao.request.timeout_in_secs" className="font-medium text-base">Timeout (segundos)</label>
                                                            <TextField
                                                                placeholder="Timeout (segundos)"
                                                                name="autenticacao.request.timeout_in_secs"
                                                                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min: 0 }}
                                                                onKeyDown={(event) => {
                                                                    if (event?.key === '-' || event?.key === '+' || (event?.key.match('\\D') && event?.key !=='Backspace' ) ) {
                                                                        event.preventDefault();
                                                                    }
                                                                }}
                                                                value={a.autenticacao?.request?.timeout_in_secs}
                                                                onChange={e => handleInput(e, i)}
                                                            />
                                                        </div>
                                                    </div>

                                                </form>
                                            </Grid>
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })
                    }

                    <div className="w-full">
                        <div className="float-right">
                            <IconButton aria-label="plusicon" color="primary" onClick={handleNewAction}>
                                <PlusIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
