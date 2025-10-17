'use client'

import styles from './page.module.css'
import {Login} from './components/Login/Login'
import {AuthenticatedTemplate, MsalProvider, UnauthenticatedTemplate} from "@azure/msal-react";
import {AuthenticationResult, EventMessage, EventType, PublicClientApplication} from '@azure/msal-browser'
import {msalConfig} from './utils/msalConfig';
import {TopBar} from "@/app/components/TopBar";
import {Sidebar} from "@/app/components/Sidebar";
import React from "react";
import {styled, ThemeProvider} from "@mui/material";
import HeaderPage from "@/app/components/HeaderPage";
import {createTheme} from "@mui/material/styles";
import {blue} from "@mui/material/colors";

function AuthTemplate({children,}: {children: React.ReactNode}) {

    
    const [open, setOpen] = React.useState(true);
    const drawerWidth = 240;


    const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
        open?: boolean;
    }>(({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(0),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: 0,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: drawerWidth,
        }),
    }));
    return (
        <main>
            <AuthenticatedTemplate>
                <TopBar openSidebar={open} onHideSidebar={setOpen} />
                <Sidebar onHide={open} />
                <HeaderPage/>
                <Main className={`max-w-[1000px] w-full mx-auto`} open={open} >
                    {children}
                </Main>
            </AuthenticatedTemplate>

            <UnauthenticatedTemplate>
                <Login/>
            </UnauthenticatedTemplate>
        </main>

    );
}

const msalInstance = new PublicClientApplication(msalConfig);

export default class App extends React.Component<{
    children: React.ReactNode
}> {
    render() {
        let {
            children,
        } = this.props;


        const accounts = msalInstance.getAllAccounts();
        if (accounts.length > 0) {
            msalInstance.setActiveAccount(accounts[0]);
        }

        msalInstance.addEventCallback((event: EventMessage) => {
            if (event.eventType === EventType.LOGIN_SUCCESS && (event.payload as AuthenticationResult).account) {
                const account = (event.payload as AuthenticationResult).account;
                msalInstance.setActiveAccount(account);
            }
        });


        const themeSelected = typeof window !== "undefined" ? localStorage.getItem('themeSelected') : undefined;
        let theme = {};
        if (themeSelected) {
            theme = createTheme(JSON.parse(themeSelected));
        }else {
            theme = createTheme({
                palette: {
                    primary: blue,
                    secondary: blue,
                },
            });

            if (typeof window !== "undefined") {
                localStorage.setItem('themeSelected', JSON.stringify({palette: {primary: blue,secondary: blue,}}))
            }
        }


        return (
            <MsalProvider instance={msalInstance}>
                <ThemeProvider theme={theme}>
                    <AuthTemplate>{children}</AuthTemplate>
                </ThemeProvider>
            </MsalProvider>
        )
    }
}
