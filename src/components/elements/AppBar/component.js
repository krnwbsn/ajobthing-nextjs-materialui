import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import Search from '../../elements/Search';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import Link from '@material-ui/core/Link';

export default function AppBar(props) {
  const { classes, handleClickAdd, handleChange } = props;
  return (
    <div className={classes.display}>
      <Grid>
        <Typography className={classes.title} variant="h4">
          <Link className={classes.link} href={'/'}>
            A Job Thing
          </Link>
        </Typography>
      </Grid>
      <Grid className={classes.rightObject}>
        <Search handleChange={handleChange} />
        <button className={classes.button} onClick={() => handleClickAdd()}>
          <AddOutlinedIcon className={classes.icon} />
        </button>
      </Grid>
    </div>
  );
}

AppBar.defaultProps = {
  handleClickAdd: () => {},
  handleChange: () => {},
};

AppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleClickAdd: PropTypes.func,
  handleChange: PropTypes.func,
};
