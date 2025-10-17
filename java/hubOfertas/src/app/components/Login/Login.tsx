'use client'

import { useMsal } from "@azure/msal-react";
import {Button, Typography} from "@mui/material";
import { loginRequest } from '../../utils/msalConfig';
import {clearStorage, clearStorageDefault} from "@/app/utils/msalStorageUtils";
import {inter} from "@/app/utils/fonts";

export function Login() {
    const { instance } = useMsal()

    const handleLogin = async () => {
        try {
            clearStorageDefault();
            await instance.loginRedirect(loginRequest)
        } catch (error) {
            console.log(`Erro ao fazer login com msal`, error)
        }
    }

    return (
        <div>
            <div className="wrapper text-center">
                <Typography variant="h6" textTransform="uppercase" fontFamily={inter.style.fontFamily}>Você não está autenticado!</Typography>
                <Typography variant="subtitle1" fontFamily={inter.style.fontFamily}>Clique no botão abaixo para realizar o login</Typography>
                <Button className="" onClick={handleLogin} variant="contained">Entrar</Button>
            </div>
        </div>
    )
}
