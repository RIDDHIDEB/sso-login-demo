import React from 'react'
// import MyButton from '../Components/Buttons/Button';
import './Login.css';
import { Button } from '@mui/material';
import { useMsal } from '@azure/msal-react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { loginRequest } from '../../msalConfig';

function LoginModal(open, handleClose) {
    const { instance } = useMsal();
      
    const handleLogin = () =>{
      instance.loginRedirect();
  }

  return (
    <>
    <Dialog open={open} onClose={handleClose} maxWidth='sm'>
      <DialogTitle variant='h4'>Login</DialogTitle>
      <DialogContent style={{ padding: '20px' }}>
        <TextField label='Email' variant='outlined'/>
        <TextField label='Password' variant='outlined'/>
      </DialogContent>
      <DialogActions>
        <Button variant='contained' onClick={handleLogin}>Login</Button>
      </DialogActions>
    </Dialog>






      {/* <div className='container3'>
      <div className="auth-form-container">
      <form className="login-form" >
          <TextField
            id="outlined-basic"
            label='Email'
            variant='outlined'
            value={editRow?.title}
            onChange={(e) => handleNewUserChange('title', e.target.value)}
            style={{ margin: '20px' }}
          />
          <TextField
            id="outlined-basic"
            label='Password'
            variant='outlined'
            value={editRow?.price}
            onChange={(e) => handleNewUserChange('price', e.target.value)}
            style={{ margin: '20px' }}
          />
       <div className='login-button'>
        <Button variant='contained' onClick={handleLogin}>Login</Button>
       </div>
      </form>
      <p>Don't have an account?</p>
      <Link to='/signup'>
         Register Here
      </Link>
    </div>
    </div> */}
    </>
  )
}

export default LoginModal;
