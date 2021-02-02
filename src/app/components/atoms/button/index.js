import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { Button } from './style';

export default ({
  title, loading, onClick, size, fullWidth,
}) => (
  <Button fullWidth={fullWidth} onClick={onClick} disabled={loading} size={size}>
    {loading ? <ClipLoader loading size={9.5} color="#FFFFFF" /> : title}
  </Button>
);
