import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

export default function CardProduct(props) {
  const {
    classes,
    company,
    title,
    location,
    description,
    key,
    handleClick,
    handleDelete,
  } = props;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent key={key}>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {company}
        </Typography>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <LocationOnOutlinedIcon className={classes.icon} /> {location}
        </Typography>
        <Typography
          className={classes.description}
          variant="body2"
          component="p"
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardFooter}>
        <button
          className={classes.button}
          onClick={(e, id) => handleClick(e, id)}
        >
          See Details
        </button>
        <button
          className={classes.buttonDelete}
          onClick={(id) => handleDelete(id)}
        >
          <DeleteForeverOutlinedIcon />
        </button>
      </CardActions>
    </Card>
  );
}

CardProduct.defaultProps = {
  key: 1,
  company: 'Majestic Express Holiday',
  title: 'Pembantu Jualan Kedai Runcit',
  location: 'Selangor',
  description:
    'Hardworking willing to work at Public Holiday & Weekend. Can communicate with Mandarin due to our customer majority from China.',
  handleClick: () => {},
  handleDelete: () => {},
};
CardProduct.propTypes = {
  handleClick: PropTypes.func,
  key: PropTypes.number,
  classes: PropTypes.object.isRequired,
  company: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string,
  description: PropTypes.string,
  handleDelete: PropTypes.func,
};
