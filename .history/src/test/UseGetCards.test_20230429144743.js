
import '@testing-library/jest-dom/extend-expect';
import { act, renderHook } from '@testing-library/react';
import useGetCards from '../hooks/useGetCards';

let useGetCardsResult;

describe('useGetCards hook', () => {
     beforeEach(()=>{
       
     });
     test("Should hook correctly", () => {
        const { result } = renderHook(() => useGetCards());
        console.log(result);
        act(() => {
           //loadData();
        });
        
        //expect(useGetCardsResult.result.current[0]).toBe(20);
     })
})