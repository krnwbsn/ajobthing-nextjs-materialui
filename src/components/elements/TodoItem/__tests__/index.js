import React from 'react';
import themeMount from '../../../../utils/themeMount';
import TodoItem from '../index';

describe('<TodoItem/>', () => {
  test('render correctly', () => {
    const [styleSheets, component] = themeMount(<TodoItem onRemove={()=>{}} todo={{}} />);
    expect(styleSheets.toString()).toMatchSnapshot();
    expect(component).toMatchSnapshot();
  });
});
