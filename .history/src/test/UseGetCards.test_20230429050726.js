
import '@testing-library/jest-dom/extend-expect';
import { act, renderHook } from '@testing-library/react';
import useGetCards from '../hooks/useGetCards';

let useGetCardsResult;

describe('useGetCards hook', () => {
     beforeEach(()=>{
        useGetCardsResult = renderHook(() => useGetCards());
     });
     test("Should hook correctly", () => {
       
        expect(useGetCardsResult.result.current).toBeDefined();
        const loadData = useGetCardsResult.result.current[2];
        act(() => {
            loadData();
        });
        console.log(useGetCardsResult.result.current[0]);
        //expect(useGetCardsResult.result.current[0]).toBe(20);
     })
})