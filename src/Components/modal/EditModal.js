import React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MyButton from '../Buttons/Button';

function EditModal ({ open, handleClose, handleSave, editRow , handleEdit, settingEditedValue}) {
//  const handleEditTitle = (data) =>{
//     console.log(data);
//     settingEditedValue(data)
//  }
    return (
      <>
       <Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm'>
          <DialogTitle variant='h4'>Edit User</DialogTitle>
          <DialogContent style={{ padding: '20px' }}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              label='Title'
              value={editRow?.title}
              onChange={(e) => handleEdit(e.target.value)}
              style={{ margin: '20px' }}
            />
            <TextField
              variant="outlined"
              label='Price'
              value={editRow?.price}
              onChange={(e) => handleEdit('price', e.target.value)}
              style={{ margin: '20px' }}
            />
            <TextField
              label='Discount'
              value={editRow?.discountPercentage}
              onChange={(e) => handleEdit('discountPercentage', e.target.value)}
              style={{ margin: '20px' }}
            />
            <TextField
              label='Rating'
              value={editRow?.rating}
              onChange={(e) => handleEdit('rating', e.target.value)}
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
                onClick={handleSave}
                label='Save'
            />
          </DialogActions>
        </Dialog>

      </>
    )
  }
  export default EditModal;