import { StyleSheet } from 'aphrodite';

export const styles = StyleSheet.create({
  topNav: {
    width: 'calc(100% - 48px)',
    height: 50,
    position: 'absolute',
    right: 0,
    borderBottom: '1px solid #F2F2F2',
    boxSizing: 'border-box',
    paddingLeft: 20,
    paddingRight: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatarContainer: {
    height: 35,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    cursor: 'pointer',
  },
  avatar: {
    height: '100%',
    width: 'auto',
    borderRadius: '50%',
    border: '2px solid #FF426F',
  },
  arrow: {
    marginLeft: 6,
  },
});
