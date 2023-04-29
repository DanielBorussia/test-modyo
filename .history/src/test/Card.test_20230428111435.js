
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import Card from '../components/Card';

test('render content', ()=>{
    const component = render(
        <Card  
            code={1} 
            title='Bird'
            image='https://www.shutterstock.com/image-vector/cartoon-happy-little-bird-flying-260nw-1301242141.jpg'
            unFlippedCards={[]}
            disabledCards={[]}
        />);
    
});

test('clicking the image call event handler once', ()=>{
    const mockHandler = jest.fn();
    const component = render(
        <Card  
            code={1} 
            title='Bird'
            image='https://www.shutterstock.com/image-vector/cartoon-happy-little-bird-flying-260nw-1301242141.jpg'
            flipCard={mockHandler}
            unFlippedCards={[]}
            disabledCards={[]}
        />);
    const img = component.getByTestId('card-1');
    fireEvent.click(img);
    expect(mockHandler).toHaveBeenCalledTimes(1);
});