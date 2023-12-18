import React from "react";
import { Button } from "@mui/material";
import { useMsal } from "@azure/msal-react";

export const Logout = () =>{
    const {instance} = useMsal();

    const handleLogout = () =>{
        instance.logoutRedirect();
    }

    return(
        <Button variant='contained' onClick={handleLogout}>LogOut</Button>
    )
}