import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Card from '../components/Card';

test('render content', ()=>{
    const note = {
        content: 'This is a test',
        important : true
    }

    const component = render(<Card code={1} title='prueba' image="https://assets.stickpng.com/images/5a4613ddd099a2ad03f9c994.png" />);

    console.log(component);
});