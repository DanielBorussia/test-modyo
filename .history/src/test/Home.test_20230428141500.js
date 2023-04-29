import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import useGetCards from '../hooks/useGetCards';
import Home from '../containers/Home';

jest.mock('../hooks/useGetCards');

describe('Cards', () => {
    beforeEach(() => {
      const cards = [
        { title: 'Bear', url:"https://cloud.modyocdn.com/uploads/4a1b66ba-ba4e-438d-be40-d9960818e06a/original/bear.jpg"
    },
        { title: 'Bird', url:"https://cloud.modyocdn.com/uploads/651e2381-dc33-43fc-8762-58079ffb36d1/original/bird.jpg"
    }
      ]
      useGetCards.mockImplementation(() => ((data)=>{}, cards));
    })
   
    it('has same amount of cards as participants are provided', () => {
      render(<Home />)
      expect(screen.getAllByTestId('card-test')).toHaveLength(4)
    })
   })