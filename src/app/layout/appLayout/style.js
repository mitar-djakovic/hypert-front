import { StyleSheet } from 'aphrodite';

export const styles = StyleSheet.create({
  view: {
    marginTop: 50,
    width: '100%',
    height: 'calc(100vh - 50px)',
    boxSizing: 'border-box',
    padding: 20,
  },
  content: {
    border: '1px solid #D6E4EC',
    height: '100%',
    boxShadow: '0px 2px 8px rgba(117, 131, 142, 0.04), 0px 16px 24px rgba(52, 60, 68, 0.12)',
    boxSizing: 'border-box',
    padding: 8,
  },
  addModal: {
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    position: 'absolute',
    top: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
