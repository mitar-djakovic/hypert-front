import { StyleSheet } from 'aphrodite';

export const styles = StyleSheet.create({
  sideNav: {
    width: 200,
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    borderRight: '1px solid #F2F2F2',
  },
  sideNavOpen: {
    width: 120,
  },
  navigation: {
    width: '100%',
    boxSizing: 'border-box',
    paddingLeft: 20,
    paddingTop: 60,
  },
  navItem: {
    marginBottom: 20,
  },
  navAnchor: {
    display: 'flex',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    height: 40,
    boxSizing: 'border-box',
    paddingLeft: 20,
    cursor: 'pointer',
    filter: 'drop-shadow(0px 4px 4px rgba(52, 60, 68, 0.4))',
    backgroundColor: '#1D37AF',
    color: '#FFFFFF',
  },
  subMenuLinks: {
    marginTop: 20,
    boxSizing: 'border-box',
    paddingLeft: 20,
  },
  subMenuLink: {
    margin: '5px 0px',
  },
  subMenuAnchor: {
    color: '#1D37AF',
  },
  icon: {
    marginRight: 10,
  },
});
