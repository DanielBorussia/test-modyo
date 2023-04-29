
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Card from '../components/Card';

test('render', ()=>{
   
    const component = render(
        <Card  
            code={1} 
            title='Bird'
            image='https://www.shutterstock.com/image-vector/cartoon-happy-little-bird-flying-260nw-1301242141.jpg'
           
            unFlippedCards={[]}
            disabledCards={[]}
        />);
    
});