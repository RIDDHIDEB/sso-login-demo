import React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MyButton from '../Buttons/Button';
  
function AddUserModal  ({ open, handleClose, handleSaveNewUser, handleNewUserChange, newUser }) {
  return(
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm'>
        <DialogTitle variant='h4'>Add New User</DialogTitle>
        <DialogContent style={{ padding: '20px' }}>
          <TextField
            label='Title'
            // value={editRow?.title}
            onChange={(e) => handleNewUserChange('title', e.target.value)}
            style={{ margin: '20px' }}
          />
          <TextField
            label='Price'
            // value={editRow?.price}
            onChange={(e) => handleNewUserChange('price', e.target.value)}
            style={{ margin: '20px' }}
          />
          <TextField
            label='Discount'
            // value={editRow?.discountPercentage}
            onChange={(e) => handleNewUserChange('discountPercentage', e.target.value)}
            style={{ margin: '20px' }}
          />
          <TextField
            label='Rating'
            // value={editRow?.rating}
            onChange={(e) => handleNewUserChange('rating', e.target.value)}
            style={{ margin: '20px' }}
          />
        </DialogContent>
        <DialogActions>
        <MyButton
            onClick={handleClose}
            label='Cancel'
          />
          <MyButton
            variant='contained'
            onClick={handleSaveNewUser}
            label='+Add'
          />
        </DialogActions>
      </Dialog>

  )
};


export default AddUserModal;
