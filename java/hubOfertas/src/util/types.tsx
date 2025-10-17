export interface RequestServicePayload {
    url: string
    metodo: string
    timeout_in_secs: number
    headers: {
        accept: string
    }
    body: string
}

export interface enviromentListPayload {
    procedencia_locator: string
    procedencia_var_name: string
    destino_locator: string
    destino_var_name: string
}


export interface ActionsPayload {
    id: string
    nome: string
    descricao_curta: string
    ativo: boolean
    sequencia: number
    mensagem_operador: string
    data: string
    facilities: string[]
    request: RequestServicePayload[]
    lista_de_enviroments: enviromentListPayload[]
}

export interface AuthenticationsPayload {
    request: RequestServicePayload[]
    ativo: boolean
    token_variable_name: string
    response_variable_name: string
    lista_de_enviroments: enviromentListPayload[]
}

export interface ServiceOrderPayload {
    id: string
    business_id: string
    nome: string
    descricao_curta: string
    ativo: boolean
    tipo: string
    sequencia: number
    data_validade: string
    request: RequestServicePayload[]
    lista_de_enviroments: enviromentListPayload[]
    acoes: ActionsPayload[]
    facilities: string[]
    created_at: string
    updated_at: string
    updated_by: string
}