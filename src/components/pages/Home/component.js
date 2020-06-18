import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CardProduct from '../../elements/CardProduct';
import { Grid, Typography } from '@material-ui/core';
import AppBar from '../../elements/AppBar';
import images from '../../../configs/images';
import Footer from '../../elements/Footer';
import { getData, deleteData } from './actions';
import Router from 'next/router';

export default function Home(props) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  console.log(getData());

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await getData();

    const newData = Array.from(new Set(data.map((i) => i.id)))
      .filter((i) => i)
      .map((i) => data.find((item) => item.id === i));

    setData(newData);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const dataFiltered = data.filter((item) => {
    const title = `${item.title}`;
    if (title.toLowerCase().includes(search.toLowerCase())) {
      return item;
    }
  });

  const handleLink = (id) => {
    Router.push('/jobdetails/[id]', `/jobdetails/${id}`);
  };

  const handleClickAdd = () => {
    Router.push('/add');
  };

  const handleDelete = async (id) => {
    await deleteData(id);
  };

  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.bar}>
        <div>
          <AppBar
            handleClickAdd={handleClickAdd}
            setData={setData}
            data={data}
            handleChange={handleSearch}
          />
        </div>
        <div>
          <img className={classes.banner} src={images.banner} />
        </div>
        <Typography className={classes.jobListBox} variant="h5" component="h5">
          All Jobs
        </Typography>
        <Grid container justify="center">
          {dataFiltered.map((item) => {
            return (
              <CardProduct
                key={item.id}
                title={item.title}
                description={item.description}
                location={item.location}
                company={item.company}
                handleClick={() => handleLink(item.id)}
                handleDelete={() => handleDelete(item.id)}
              />
            );
          })}
        </Grid>
        <Footer />
      </div>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};
