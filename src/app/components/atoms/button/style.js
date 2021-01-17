import styled from 'styled-components';
// Treba dodati metropolis font

export const Button = styled.button`
  border: none;
  background: #FF426F;
  box-shadow: 0px 0px 1px rgba(117, 131, 142, 0.04), 0px 2px 4px rgba(52, 60, 68, 0.16);
  border-radius: 20px;
  box-sizing: border-box;
  padding: 12px 48px;
  font-size: 14px;
  font-weight: 500;
  color: #FBFBFB;
  letter-spacing: 0.15px;
  outline: none;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(52, 60, 68, 0.4));
  }
`;
