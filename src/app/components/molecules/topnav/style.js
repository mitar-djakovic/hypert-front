import { StyleSheet } from 'aphrodite';

export const styles = StyleSheet.create({
  topNav: {
    width: 'calc(100% - 199px)',
    height: 50,
    position: 'absolute',
    right: 0,
    borderBottom: '1px solid #F2F2F2',
    boxSizing: 'border-box',
    paddingLeft: 20,
    paddingRight: 20,
    display: 'flex',
  },
  navItemsWrapper: {
    width: '100%',
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
    marginLeft: 10,
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
  menuContainer: {
    position: 'absolute',
    backgroundColor: '#FBFBFB',
    width: 200,
    right: 20,
    top: 50,
    boxShadow: '0px 2px 8px rgba(117, 131, 142, 0.04), 0px 16px 24px rgba(52, 60, 68, 0.12)',
    borderRadius: 8,
  },
  menuItem: {
    boxSizing: 'border-box',
    height: 50,
    fontSize: 14,
    display: 'flex',
    alignItems: 'center',
    lineHeight: 20,
    letterSpacing: 0.25,
    color: '#343C44',
    padding: '20px 16px',
    ':hover': {
      backgroundColor: '#FFFFFF',
      cursor: 'pointer',
    },
  },
  firstMenuItem: {
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderBottom: '1px solid #D6E4EC',
  },
  lastMenuItem: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  anchor: {
    height: '100%',
  },
  rightBlockContainer: {
    display: 'flex',
  },
});
