import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

export default function Search(props) {
  const { classes, label, handleChange } = props;
  return (
    <div>
      <TextField
        className={classes.search}
        id="outlined-basic"
        label={label}
        margin="dense"
        onChange={handleChange}
        placeholder="Search"
        variant="outlined"
      />
    </div>
  );
}

Search.defaultProps = {
  label: '',
  handleChange: () => {},
};

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string,
  handleChange: PropTypes.func,
};
