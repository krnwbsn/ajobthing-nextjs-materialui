import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '../../elements/AppBar';
import Footer from '../../elements/Footer';
import { Grid } from '@material-ui/core';
import CardDetails from '../../elements/CardDetails';
import Router from 'next/router';
import { getDataById } from './actions';

export default function JobDetails(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadDataById();
  }, []);

  const loadDataById = async () => {
    const { id } = Router.query;
    const data = await getDataById(id);

    setData(data);
  };

  const { classes } = props;

  const handleBack = () => {
    Router.push('/');
  };

  // console.log(data.requirements.items);

  return (
    <div className={classes.root}>
      <div className={classes.bar}>
        <div>
          <AppBar handleClickLink={handleBack} />
        </div>
        <Grid container justify="center">
          <CardDetails
            title={data.title}
            company={data.company}
            location={data.location}
            type={data.type}
            description={data.description}
            contact={data.employer_contact}
            requirements={data.requirements}
            responsibilities={data.responsibilites}
            benefit={data.benefit}
            nationality={data.nationality}
            views={data.views}
          />
        </Grid>
        <Footer />
      </div>
    </div>
  );
}

JobDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};
