import { StyleSheet } from 'aphrodite';

export const styles = StyleSheet.create({
  delete: {
    backgroundColor: '#FFFFFF',
    width: 30,
    height: 30,
    borderTopRightRadius: 8,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: '50%',
    marginLeft: 1.5,
    marginRight: 1.5,
    backgroundColor: '#000000',
  },
  popUpMenu: {
    position: 'relative',
  },
  menu: {
    backgroundColor: '#FFF',
    position: 'absolute',
    right: 0,
    padding: '20px 40px',
    zIndex: 1,
    borderRadius: 4,
    textAlign: 'left',
    boxShadow: '0px 1px 7px 0px rgba(32, 56, 117, 0.35)',
    cursor: 'pointer',
  },
});
