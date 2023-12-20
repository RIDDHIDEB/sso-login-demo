import React,{useState} from "react";
import './Home.css';
import { Typography, Button } from "@mui/material";
import { loginRequest } from '../../msalConfig';
import { useMsal } from '@azure/msal-react';

function Home() {
   
    const { instance } = useMsal();
      
    const handleLogin = () =>{
      instance.loginRedirect();
    }

    return(
    <>
        <div className='home-nav'>
        <div className='home-heading'><Typography variant='h3'  gutterBottom>Home</Typography></div>
        <div className='login-button1'>
            <Button variant="contained" onClick={handleLogin}>Login</Button>
        </div>
        </div>

        <div className="home-scroll">
        <Typography variant="h6">Welcome user</Typography>
        </div>
    </>
    )
}

export default Home;