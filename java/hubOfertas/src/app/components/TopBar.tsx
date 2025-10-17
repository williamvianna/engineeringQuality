'use client'

import {useMsal} from "@azure/msal-react";
import {clearStorage} from "@/app/utils/msalStorageUtils";
import {useEffect, useState} from "react";
import MenuIcon from '@mui/icons-material/Menu'
import {AppBar, Box, Button, Divider, IconButton, Link, Menu, MenuItem, Toolbar, Typography} from '@mui/material'
import {AccountCircle, ExitToApp, Person, Settings} from "@mui/icons-material";
import NextLink from "next/link";

interface TopBarProps {
    onHideSidebar: (data: boolean) => void
    openSidebar: boolean
}

export function TopBar({ onHideSidebar, openSidebar }: TopBarProps) {
    const { instance } = useMsal();
    const [name, setName] = useState<string | null>(null);
    const [accountSelectorOpen, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<EventTarget & HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);

    const activeAccount = instance.getActiveAccount();
    console.log('dados da conta', activeAccount)


    const handleLogout = () => {
        clearStorage(activeAccount);

        instance.logoutRedirect().catch((error) => console.log(error));
    };

    const handleHideSidebar = () => onHideSidebar(true)

    const getName = () => {
        if (activeAccount) {
            console.log('dados da conta', activeAccount)
            return activeAccount.name && setName(activeAccount.username);
        }
    };

    return (
        <Box>
            <AppBar>
                <Toolbar>
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='menu'
                        sx={{ mr: 2 }}
                        onClick={handleHideSidebar}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography>
                        <Link component={NextLink} href='/home' color="inherit" underline="none">
                            Hub de Ofertas
                        </Link>
                    </Typography>

                    <div className="ml-auto">


                        <div>


                            <Button
                                variant="contained" disableElevation
                                onClick={(event) => setAnchorEl(event.currentTarget)}
                            >

                                <AccountCircle />
                                <Typography variant="subtitle1">&nbsp;{name}</Typography>
                            </Button>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                keepMounted
                                open={open}
                                onClose={() => setAnchorEl(null)}
                            >
                                <MenuItem key="userName"><Person/> | {activeAccount ? activeAccount.name : `Usuário não identificado`}</MenuItem>
                                <MenuItem key="configs">
                                    <Link component={NextLink} underline="none" href="/usuario/configuracoes">
                                        <Settings/> | Configura&ccedil;&otilde;es
                                    </Link>
                                </MenuItem>
                                <Divider/>
                                <MenuItem onClick={() => handleLogout()} key="logoutRedirect"><ExitToApp/> | Sair</MenuItem>
                            </Menu>
                        </div>








                        {/*<Typography >{name}</Typography>*/}
                        {/*<Button color="inherit" className='ml-auto' onClick={handleLogoutRedirect} >Logout</Button>*/}
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
