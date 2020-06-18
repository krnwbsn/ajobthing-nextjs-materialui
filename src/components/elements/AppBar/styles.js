const styles = {
  '@media screen and (max-width: 768px)': {
    display: {
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: 20,
      paddingRight: 20,
      textAlign: 'center',
    },
    rightObject: {
      width: '100%',
    },
  },
  display: {
    display: 'flex',
  },
  title: {
    color: 'white',
    marginLeft: 20,
    marginTop: 7,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  icon: {
    color: '#f48fb1',
  },
  button: {
    border: '1px solid rgb(24, 51, 88)',
    borderRadius: 5,
    backgroundColor: '#303030',
    height: 38,
    textTransform: 'none',
    textAlign: 'right',
    color: 'white',
    margin: 8,
  },
  rightObject: {
    display: 'flex',
    justifyContent: 'center',
    marginRight: '10px',
    marginLeft: 'auto',
  },
};

export default styles;
