import styled from 'styled-components';
/* eslint-disable consistent-return */

export const Button = styled.button`
  border: none;
  background: #FF426F;
  box-shadow: 0px 0px 1px rgba(117, 131, 142, 0.04), 0px 2px 4px rgba(52, 60, 68, 0.16);
  outline: none;
  cursor: pointer;
  color: #FBFBFB;
  border-radius: 8px;
  font-style: normal;
  font-weight: 500;
  font-family: 'Quicksand', sans-serif;
  ${({ fullWidth }) => fullWidth && ({ width: '100%' })}
  ${({ disabled }) => (disabled && ({ opacity: '0.9' }))}
  ${({ size }) => {
    if (size === 'big') {
      return ({
        fontSize: 20,
        letterSpacing: '0.15px',
        padding: '10px 48px',
        lineHeight: '24px',
      });
    }
    if (size === 'medium') {
      return ({
        letterSpacing: '0.5px',
        fontSize: 16,
        padding: '8px 26.5px',
        lineHeight: '20px',
      });
    }
    return ({
      fontSize: 14,
      padding: '8px 12px',
      lineHeight: '16px',
    });
  }}
`;
