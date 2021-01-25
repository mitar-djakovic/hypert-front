import { StyleSheet } from 'aphrodite';

export const styles = StyleSheet.create({
  sideNav: {
    width: 240,
    height: '100vh',
    display: 'flex',
    borderRight: '1px solid #F2F2F2',
    boxSizing: 'border-box',
  },
  projectList: {
    width: 60,
    boxSizing: 'border-box',
    paddingTop: 10,
    borderRight: '1px solid #F2F2F2',
  },
  navigation: {
    width: '100%',
    boxSizing: 'border-box',
    paddingTop: 10,
  },
  activeRoute: {
    backgroundColor: '#DEE4FF',
    width: '100%',
    height: 40,
  },
  navItem: {
    zIndex: 1,
    fontSize: 16,
    height: 40,
    marginBottom: 10,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  navAnchor: {
    color: '#1D37AF',
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    backgroundColor: '#1D37AF',
    borderRadius: 6,
    cursor: 'pointer',
    margin: 10,
    marginTop: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeLogo: {
    backgroundColor: '#FF426F',
  },
  icon: {
    marginRight: 4,
    marginLeft: 8,
  },
  projectIcon: {
    color: '#FFFFFF',
  },
});
