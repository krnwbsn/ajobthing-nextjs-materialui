export default {
  '@media screen and (max-width: 768px)': {
    root: {
      maxWidth: '320px !important',
      margin: 5,
    },
  },
  root: {
    width: 560,
    margin: 15,
    backgroundColor: '#303030',
    color: 'white',
    textAlign: 'left',
  },
  title: {
    fontSize: 14,
    color: '#f48fb1',
  },
  icon: {
    color: '#f48fb1',
    marginLeft: -5,
  },
  pos: {
    display: 'flex',
    marginBottom: 12,
    color: 'white',
  },
  button: {
    color: 'white',
    padding: 10,
    margin: 10,
    backgroundColor: '#303030',
    borderRadius: 5,
    border: '1px solid #f48fb1',
    fontWeight: 600,
  },
  buttonDelete: {
    color: 'white',
    padding: 4,
    margin: 10,
    marginLeft: 0,
    backgroundColor: '#303030',
    borderRadius: 5,
    border: '1px solid #f48fb1',
    fontWeight: 600,
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  description: {
    textTransform: 'ellipsis',
  },
};
