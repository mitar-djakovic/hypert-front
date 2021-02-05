import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { css } from 'aphrodite';
import { Button, styles } from './style';

export default ({
  title, loading, onClick, size, fullWidth, type, backgroundColor, color, icon,
}) => {
  const renderWhenLoading = () => (
    <ClipLoader loading size={9.5} color="#FFFFFF" />
  );

  const renderWhenNotLoading = () => (
    <div className={css(styles.buttonContent)}>
      <div className={css(styles.iconWrapper)}>
        {icon}
      </div>
      <div>
        {title}
      </div>
    </div>
  );
  return (
    <Button
      fullWidth={fullWidth}
      onClick={onClick}
      type={type}
      backgroundColor={backgroundColor}
      disabled={loading}
      size={size}
      color={color}
    >
      {loading ? renderWhenLoading() : renderWhenNotLoading()}
    </Button>
  );
};
