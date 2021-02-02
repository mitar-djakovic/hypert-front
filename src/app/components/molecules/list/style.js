import { StyleSheet } from 'aphrodite';

export const styles = StyleSheet.create({
  list: {
    display: 'flex',
    flex: '0 0 320px',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    maxHeight: 'calc(100vh - 100px)',
    borderRadius: '3px',
    marginRight: '22px',
    boxSizing: 'border-box',
    padding: '30px 15px',
    boxShadow: '0px 10px 20px -13px rgba(32, 56, 117, 0.35)',
  },
  name: {
    fontSize: 20,
    lineHeight: 2,
    fontWeight: 500,
    letterSpacing: 1,
  },
  task: {
    boxSizing: 'border-box',
    padding: 15,
    border: '1px solid #C5C5C5',
    borderRadius: 2,
    boxShadow: '0px 10px 20px -15px rgba(32, 56, 117, 0.35)',
  },
  tasks: {
    margin: '10px 0px',
  },
  addTask: {
    fontSize: 14,
    textAlign: 'center',
    cursor: 'pointer',
    color: '#b6babd',
    fontWeight: '500',
    marginTop: 14,
  },
});
