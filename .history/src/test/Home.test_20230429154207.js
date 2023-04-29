import { render, screen } from '@testing-library/react';
import Home  from '../containers/Home';
import useGetCards  from '../hooks/useGetCards';
import { act, renderHook } from '@testing-library/react';

jest.mock('../hooks/useGetCards');

describe('List of cards', () => {
 beforeEach(() => {
   const animals = [
     { url: "https://cloud.modyocdn.com/uploads/4a1b66ba-ba4e-438d-be40-d9960818e06a/original/bear.jpg"
     , title: 'Bear' },
     { url: "https://cloud.modyocdn.com/uploads/651e2381-dc33-43fc-8762-58079ffb36d1/original/bird.jpg"
     , title: 'Bird' },
     { url: "https://cloud.modyocdn.com/uploads/4a1b66ba-ba4e-438d-be40-d9960818e06a/original/bear.jpg"
     , title: 'Bear' },
     { url: "https://cloud.modyocdn.com/uploads/651e2381-dc33-43fc-8762-58079ffb36d1/original/bird.jpg"
     , title: 'Bird' },
   ];
   
   
 })

 test('has same amount of cards as animals are provided',  () => {
    useGetCards.mockReturnValueOnce({
        json: () => Promise.resolve({
            url: "https://cloud.modyocdn.com/uploads/651e2381-dc33-43fc-8762-58079ffb36d1/original/bird.jpg",
            title: 'Bird'
        })
    });
    const {result } = renderHook(() => useGetCards());
    console.log(result.current.cards);
   render(<Home />);
   //expect(screen.getAllByTestId('card-test')).toHaveLength(4)
 })
})