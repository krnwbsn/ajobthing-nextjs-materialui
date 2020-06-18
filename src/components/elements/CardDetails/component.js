import React, { useState, Fragment } from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import PhoneEnabledOutlinedIcon from '@material-ui/icons/PhoneEnabledOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import { Grid } from '@material-ui/core';

export default function CardDetails(props) {
  const {
    classes,
    title,
    location,
    description,
    type,
    contact,
    requirements,
    company,
    responsibilities,
    benefit,
    nationality,
    views,
  } = props;
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="logo" className={classes.avatar}>
            A
          </Avatar>
        }
        action={
          <Fragment>
            <Typography variant="body2" className={classes.display}>
              <QueryBuilderOutlinedIcon className={classes.icon} />
              {type}
            </Typography>
            <Typography variant="body2" className={classes.display}>
              <VisibilityOutlinedIcon className={classes.icon} />
              {views}
            </Typography>
          </Fragment>
        }
        title={
          <Fragment>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="body1">{company}</Typography>
          </Fragment>
        }
        subheader={
          <Typography className={classes.display} variant="body2">
            <LocationOnOutlinedIcon className={classes.icon} />
            {location}
          </Typography>
        }
      />
      <CardContent>
        <Typography variant="body2">{description}</Typography>
        <Typography className={classes.list} variant="body2">
          Language:
          <ul>
            {requirements.language.map((item, id) => {
              return <li key={id}>{item}</li>;
            })}
          </ul>
        </Typography>
        <Typography variant="body2">
          Requirements:
          <ul>
            {requirements.items.map((item, id) => {
              return <li key={id}>{item}</li>;
            })}
          </ul>
        </Typography>
        <Typography variant="body2">Nationality: {nationality}</Typography>
      </CardContent>
      <Grid className={classes.collapse}>
        <CardActions disableSpacing>
          <Typography>
            Open for details
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </Typography>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography className={classes.text} variant="body2">
              Responsibilities
            </Typography>
            <ul>
              {responsibilities.map((item, id) => {
                return <li key={id}>{item}</li>;
              })}
            </ul>
          </CardContent>
          <CardContent>
            <Typography className={classes.text} variant="body2">
              Benefit
            </Typography>
            <ul>
              {benefit.map((item, id) => {
                return <li key={id}>{item}</li>;
              })}
            </ul>
          </CardContent>
        </Collapse>
        <CardContent className={classes.contact}>
          <Typography className={classes.display} variant="body2">
            <PhoneEnabledOutlinedIcon className={classes.icon} />{' '}
            {contact.phone}
          </Typography>
          <Typography className={classes.display} variant="body2">
            <ChatOutlinedIcon className={classes.icon} /> {contact.whatsapp}
          </Typography>
          <Typography className={classes.display} variant="body2">
            <EmailOutlinedIcon className={classes.icon} /> {contact.email}
          </Typography>
        </CardContent>
      </Grid>
    </Card>
  );
}

CardDetails.defaultProps = {
  title: 'Text',
  company: 'Text',
  location: 'Text',
  type: 'Text',
  description: 'Text',
  language: ['Text', 'Text'],
  items: ['Text', 'Text', 'Text', 'Text', 'Text', 'Text'],
  responsibilities: ['Text', 'Text', 'Text', 'Text'],
  benefit: [
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
    'Text',
  ],
  nationality: 'Text',
  views: 0,
  contact: {
    phone: '',
    whatsapp: '',
    email: '',
  },
  requirements: {
    language: ['Text', 'Text'],
    items: ['Text', 'Text'],
  },
};

CardDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  company: PropTypes.string,
  type: PropTypes.string,
  location: PropTypes.string,
  description: PropTypes.string,
  language: PropTypes.arrayOf(PropTypes.string),
  items: PropTypes.arrayOf(PropTypes.string),
  responsibilities: PropTypes.arrayOf(PropTypes.string),
  benefit: PropTypes.arrayOf(PropTypes.string),
  nationality: PropTypes.string,
  views: PropTypes.number,
  contact: PropTypes.shape({
    phone: PropTypes.string,
    whatsapp: PropTypes.string,
    email: PropTypes.string,
  }),
  requirements: PropTypes.shape({
    language: PropTypes.arrayOf(PropTypes.string),
    items: PropTypes.arrayOf(PropTypes.string),
  }),
};
