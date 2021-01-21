import { StyleSheet } from 'aphrodite';

export const styles = StyleSheet.create({
  sideNav: {
    width: 50,
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    borderRight: '1px solid #F2F2F2',
  },
  sideNavOpen: {
    width: 120,
  },
  navigation: {
    marginTop: 60,
  },
  navItem: {
    marginBottom: 10,
  },
  navAnchor: {
    color: '#343C44',
    ':hover': {
      color: '#1D37AF',
    },
  },
});
