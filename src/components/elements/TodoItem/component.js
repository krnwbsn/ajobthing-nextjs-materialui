import React from 'react';
import PropTypes from 'prop-types';

export default class Component extends React.Component {
  render() {
    const { classes, todo, onRemove } = this.props;
    
    return (
      <li className={classes.item}>
        <button
          className={classes.button}
          onClick={() => onRemove(todo)}
        >
          x
        </button>{' '}
        {todo.text}
      </li>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
};
