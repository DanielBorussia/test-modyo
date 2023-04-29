
import '@testing-library/jest-dom/extend-expect';
import { act, renderHook } from '@testing-library/react';
import useGetCards from '../hooks/useGetCards';

let useGetCardsResult;

describe('useGetCards hook', () => {
     beforeEach(()=>{
        useGetCardsResult = renderHook(() => useGetCards());
     });
     test("Should hook correctly", () => {
        console.log(useGetCardsResult.result.current);
        expect(useGetCardsResult.result.current).toBeDefined();
        //expect(useGetCardsResult.result.current[0]).toBe(20);
     })
})