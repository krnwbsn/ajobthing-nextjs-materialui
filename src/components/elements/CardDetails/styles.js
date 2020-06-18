const styles = {
  '@media screen and (max-width: 768px)': {
    root: {
      maxWidth: '320px !important',
      margin: 5,
    },
    contact: {
      flexWrap: 'wrap',
    },
  },
  root: {
    width: 960,
    backgroundColor: '#303030',
    color: 'white',
    textAlign: 'left',
    padding: 10,
    marginTop: 20,
  },
  collapse: {
    padding: 10,
    paddingBottom: 0,
  },
  list: {
    marginTop: 10,
  },
  text: {
    marginTop: -10,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  header: {
    color: 'white',
  },
  expand: {
    transform: 'rotate(0deg)',
    color: 'white',
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#f48fb1',
  },
  display: {
    display: 'flex',
  },
  icon: {
    color: '#f48fb1',
    marginLeft: -5,
    marginRight: 5,
  },
  contact: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

export default styles;
