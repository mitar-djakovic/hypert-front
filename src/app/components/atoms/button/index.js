import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { Button } from './style';

export default ({ title, loading, onClick }) => (
  <Button onClick={onClick} disabled={loading}>
    {loading ? <ClipLoader loading size={9.5} color="#FFFFFF" /> : title}
  </Button>
);
