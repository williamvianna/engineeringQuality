"use client"

import { useMsal } from "@azure/msal-react";
import { TopBar } from "./TopBar";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Alert } from "../utils/Alert";

export function Header() {
    const { accounts } = useMsal()
    const [hideSidebar, setHideSidebar] = useState<boolean>(false)

    const handleToogleSidebar = () => hideSidebar == true ? setHideSidebar(false) : setHideSidebar(true)

    return (
        <>
            <TopBar openSidebar={hideSidebar} onHideSidebar={handleToogleSidebar} />
            <Sidebar onHide={hideSidebar} />
        </>
    )
}