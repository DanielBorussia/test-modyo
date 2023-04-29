import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Score from '../components/Score';

test('render content', ()=>{
    const component = render(<Score points={1} fouls={10} username='millos' />);
    component.getByText('errores');
});