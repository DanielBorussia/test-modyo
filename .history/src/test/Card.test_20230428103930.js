import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Score from '../components/Score';

test('render content', ()=>{
    const component = render(<Score points={1} fouls={10} username='millos' />);
    const element = screen.getByText('Aciertos :');
    expect(element).toBeInTheDocument()
});