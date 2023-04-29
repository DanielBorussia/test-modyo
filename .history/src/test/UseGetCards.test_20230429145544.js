
import '@testing-library/jest-dom/extend-expect';
import { act, renderHook } from '@testing-library/react';
import useGetCards from '../hooks/useGetCards';
import useName from '../hooks/useName';


describe('useGetCards hook', () => {
     beforeEach(()=>{
       
     });
     test("Should hook correctly", () => {
        const { result } = renderHook(() => useName());
        console.log(result);
        const decirHola = result.result.current[2];
        act(() => {
           decirHola();
        });
        
        //expect(useGetCardsResult.result.current[0]).toBe(20);
     })
})