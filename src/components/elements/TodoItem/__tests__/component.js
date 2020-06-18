import React from 'react';
import { shallow } from 'enzyme';
import TodoItem from '../component';
import styles from '../styles';

//generate classes properties
const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });
const classes = Object.keys(styles).reduce(reduceClasses, {});

describe('<AppBar/>', () => {
  test('render correctly', () => {
    const tree = shallow(<TodoItem classes={classes} onRemove={()=>{}} todo={{}} />);
    expect(tree.exists()).toBe(true);
  });
});