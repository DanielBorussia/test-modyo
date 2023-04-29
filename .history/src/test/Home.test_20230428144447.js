import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import useGetCards from '../hooks/useGetCards';
import Home from '../containers/Home';

jest.mock('../hooks/useGetCards');

describe('Cards', () => {
    beforeEach(() => {
      const cards = [{
        alt_text: null,
        content_type: "image/jpeg",
        description: null,
        tags: [],
        title: "Frog",
        url: "https://cloud.modyocdn.com/uploads/a5268065-1c30-4585-bf78-8e2bde7d84fb/original/frog.jpg",
        uuid: "a5268065-1c30-4585-bf78-8e2bde7d84fb",
    },{
        alt_text: 1,
        content_type: "image/jpeg",
        description: null,
        tags: [],
        title: "Frog",
        url: "https://cloud.modyocdn.com/uploads/a5268065-1c30-4585-bf78-8e2bde7d84fb/original/frog.jpg",
        uuid: "a5268065-1c30-4585-bf78-8e2bde7d84fb",
    }];
    console.log("---------");
    console.log(cards);
      useGetCards.mockImplementation(() => [()=>{}, [cards]]);
    })
   
    it('has same amount of cards as participants are provided', () => {
      render(<Home />)
      expect(screen.getAllByTestId('card-test')).toHaveLength(1)
    })
   })