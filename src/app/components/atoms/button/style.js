import styled from 'styled-components';
/* eslint-disable consistent-return */

export const Button = styled.button`
  border: none;
  box-shadow: 0px 0px 1px rgba(117, 131, 142, 0.04), 0px 2px 4px rgba(52, 60, 68, 0.16);
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  font-style: normal;
  font-weight: 500;
  font-family: 'Quicksand', sans-serif;
  ${({ color }) => (color ? ({ color }) : ({ color: '#FBFBFB' }))}
  ${({ backgroundColor }) => (backgroundColor ? ({ backgroundColor }) : ({ backgroundColor: '#FF426F' }))}
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
