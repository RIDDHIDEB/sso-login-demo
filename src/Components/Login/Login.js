import React from 'react'
// import MyButton from '../Components/Buttons/Button';
import './Login.css';
import { Button } from '@mui/material';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../../msalConfig';

function Login() {
    const { instance } = useMsal();
      
        const handleLogin = async () => {
          try {
            const loginResponse = await instance.loginPopup(loginRequest);

            console.log(loginResponse);
          } catch (error) {
            console.error(error);
          }
        };

  return (
    <>
      <div className='container3'>
      <div className="auth-form-container">
      <form className="login-form" >
        <label htmlFor="email">Email:</label>

        <input
        //   onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="your@.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password:</label>

        <input
        //   onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
       <div style={{marginBottom:'20px'}}>
        <Button variant='contained' onClick={handleLogin}>Login</Button>
       </div>

      </form>
      <p>Don't have an account?</p>
      {/* <Link to='/signup'>
         Register Here
      </Link> */}
    </div>
    </div>
    </>
  )
}

export default Login;
