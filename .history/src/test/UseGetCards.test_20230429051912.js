
import '@testing-library/jest-dom/extend-expect';
import { act, renderHook } from '@testing-library/react';
import useGetCards from '../hooks/useGetCards';

let useGetCardsResult;

describe('useGetCards hook', () => {
     beforeEach(()=>{
       
     });
     test("Should hook correctly", () => {
        [ cards, alterOrder, loadData ] = renderHook(() => useGetCards());
      
        act(() => {
            loadData();
        });
        console.log(cards);
        //expect(useGetCardsResult.result.current[0]).toBe(20);
     })
})