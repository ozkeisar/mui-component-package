import React from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

interface CustomButtonProps {
  label: string;
  color?: 'primary' | 'secondary';
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, color = 'primary' }) => {
  return <Button variant="contained" color={color}><Typography variant='h1'>T</Typography>{label}</Button>;
};

export default CustomButton;
