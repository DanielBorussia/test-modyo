
import '@testing-library/jest-dom/extend-expect';
import { act, renderHook } from '@testing-library/react';
import useGetCards from '../hooks/useGetCards';

let useGetCardsResult;

describe('useGetCards hook', () => {
     beforeEach(()=>{
       
     });
     test("Should hook correctly", () => {
        const { cards, loading, alterOrder, loadData } = renderHook(() => useGetCards());
        console.log(cards);
        act(() => {
            loadData();
        });
        console.log(cards);
        //expect(useGetCardsResult.result.current[0]).toBe(20);
     })
})