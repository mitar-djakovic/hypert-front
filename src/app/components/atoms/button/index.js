import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { Button } from './style';

export default ({
  title, loading, onClick, size, fullWidth, type, backgroundColor, color,
}) => (
  <Button
    fullWidth={fullWidth}
    onClick={onClick}
    type={type}
    backgroundColor={backgroundColor}
    disabled={loading}
    size={size}
    color={color}
  >
    {loading ? <ClipLoader loading size={9.5} color="#FFFFFF" /> : title}
  </Button>
);
