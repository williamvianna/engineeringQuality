'use client'

import React from "react";
import {Button, Divider} from "@mui/material";
import {useRouter} from "next/navigation";
import Grid from "@mui/material/Grid";
import {saira} from "@/app/utils/fonts";

export default function NotFound() {

    const router = useRouter();

    const handleBack = () => {
        router.back()
    }

    return (
        <div className={`text-center ${saira.className} max-w-[1000px] w-full mx-auto text-3xl`}>
            <div className="flex justify-center">
                <span className="font-bold">404</span>
                <Divider orientation="vertical" flexItem sx={{'height': '30px', 'm': '0 10px', 'fontWeight': '600'}} />
                <span>P&aacute;gina n&atilde;o encontrada</span>
            </div>
            <Grid sx={{mt: '50px'}}>
                <Button className="" onClick={handleBack} variant="contained">Voltar</Button>
            </Grid>

        </div>
    )
}
