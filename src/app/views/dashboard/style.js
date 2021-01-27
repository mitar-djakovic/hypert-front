import { StyleSheet } from 'aphrodite';

export const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    padding: 10,
  },
  content: {
  },
  listContainer: {
    display: 'flex',
  },
  addList: {
    backgroundColor: '#1D37AF',
    width: 140,
    height: 30,
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    cursor: 'pointer',
    marginRight: 6,
  },
  addListModal: {
    position: 'absolute',
    width: '100%',
    left: 0,
    top: 0,
  },
});
