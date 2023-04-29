
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
     })
})