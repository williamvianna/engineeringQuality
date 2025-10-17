export interface FormCreateTypes {
    business_id: string
    nome: string
    descricao_curta: string
    enviroments: EnviromentsTypes
    request: RequestProps
    facilities: string[]
    ativo: boolean
    tipo: string
    sequencia: number
    data_validade: string
    pessoa_cliente_id_replace_token: string
    pessoa_cliente_id_token_locator: string
}

export interface EnviromentsTypes {
    procedencia_locator: string
    procedencia_var_name: string
    destino_locator: string
    destino_var_name: string
}

export interface RequestProps {
    url: string
    metodo: string
    timeout_in_secs: number
    headers: {
        accept: string
    }
    body: string
}

interface FacilitiesTypes {
    business_id: string;
    sigla:       string;
    nome:        string;
    ativo:       boolean;
    created_at:  Date;
    updated_at:  Date;
    updated_by:  string;
}

export interface FacilitiesListTypes {
    data: FacilitiesTypes[]
}