import React from 'react';
import ReactDOM from 'react-dom';
import Tag from './Tag.js';
import { isTSAnyKeyword } from '@babel/types';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tag />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders tag correctly', () => {
    const { getByTestId } = render(<Tag text = 'i am a tag'/>);
    expect(getByTestId('tagtest')).toHaveTextContent("i am a tag");
});

it('renders icon correctly', () => {
    const { getByTestId } = render(<Tag />);
    expect(getByTestId('icon')).toBeTruthy();
});