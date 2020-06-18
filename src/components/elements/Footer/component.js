import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';

export default function Footer(props) {
  const { year, classes } = props;

  return (
    <div className={classes.footer}>
      Made by{' '}
      <Link className={classes.link} href="https://github.com/krnwbsn">
        Krina Wibisana
      </Link>{' '}
      {year}
    </div>
  );
}

Footer.defaultProps = {
  year: 2020,
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  year: PropTypes.number,
};
