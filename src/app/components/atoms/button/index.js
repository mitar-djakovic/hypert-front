import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { Button } from './style';

export default ({ title, loading }) => (
  <Button>
    {loading ? <ClipLoader loading size={14} color="#FFFFFF" /> : title}
  </Button>
);
