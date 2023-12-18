import React from 'react'
import { Button } from '@mui/material';

function MyButton({ onClick, variant, color, label }) {
  return (
    <Button variant={variant} color={color} onClick={onClick}>
      {label}
    </Button>
  );
}

export default MyButton;