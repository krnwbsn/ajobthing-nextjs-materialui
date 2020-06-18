const drawerWidth = 250;
const appBarHeight = 64;
const contentPadding = 20;

const styles = theme => ({
  appBar: {
    height: `${appBarHeight}px`,
    zIndex: theme.zIndex.drawer + 1
  },
  appBarTitle: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  content: {
    marginLeft: `${drawerWidth}px`,
    padding: `${contentPadding}px`
  },
  drawer: {
    paddingTop: `${appBarHeight}px`,
    width: `${drawerWidth}px`
  },
  listItem: {
    '& a': {
      padding: '12px 24px',
      width: '100%'
    },
    padding: 0
  },
  pullRight: {
    textAlign: 'right'
  }
});

export default styles;
