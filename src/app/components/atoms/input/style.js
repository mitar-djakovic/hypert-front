import { StyleSheet } from 'aphrodite';
import styled from 'styled-components';

export const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
  },
  statusBar: {
    boxSizing: 'border-box',
    width: 'calc(100% - 4px)',
    marginLeft: 2,
    height: 3,
    position: 'absolute',
    bottom: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    transition: 'all 0.3s ease',
    boxShadow: '0px 10px 20px -13px rgba(32, 56, 117, 0.35)',
    backgroundColor: '#7480FF',
  },
  statusBarError: {
    backgroundColor: 'red',
  },
});

export const Input = styled.input`
  width: 100%;
  heigh: 40px;
  border: none;
  background: #FBFBFB;
  border: 1px solid #D6E4EC;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.25px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #1F3AB2;
  margin-bottom: 24px;
  outline: none;
  
  ${({ errorStatus }) => (errorStatus ? ({
    color: '#E25822',
  }) : null)}
  &::placeholder {
    color: #AABBC6;
  }
  &:hover {
    cursor: pointer;
    // filter: drop-shadow(0px 0px 2px rgba(117, 131, 142, 0.04));
    filter: drop-shadow(0px 4px 4px rgba(52, 60, 68, 0.4));
  }
`;
