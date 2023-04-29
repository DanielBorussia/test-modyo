
import '@testing-library/jest-dom/extend-expect';
import { act, renderHook } from '@testing-library/react';
import useGetCards from '../hooks/useGetCards';
import useName from '../hooks/useName';


describe('useGetCards hook', () => {
     beforeEach(()=>{
       
     });
     test("Should hook correctly", () => {
        const { result } = renderHook(() => useName());
        console.log(result.current);
        const { name, data, decirHola } = result.current;
       
        act(() => {
           decirHola();
           console.log("-----> ", result.current.name);
        });
       
        
        expect(result.current.name).toBe('Oscar');
     })
})