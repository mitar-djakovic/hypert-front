import { StyleSheet } from 'aphrodite';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: '100%',
    height: '100vh',
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  close: {
    color: '#FFFFFF',
    position: 'absolute',
    right: 10,
    top: 10,
    cursor: 'pointer',
  },
  formWrapper: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 8,
  },
});
