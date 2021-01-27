import { StyleSheet } from 'aphrodite';

export const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
  },
  errorMessage: {
    color: '#E2164B',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: '28px',
    letterSpacing: '0.25px',
    fontWeight: 500,
    position: 'absolute',
    bottom: -25,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 45,
  },
});
