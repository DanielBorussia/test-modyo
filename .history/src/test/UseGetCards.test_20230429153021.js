
import '@testing-library/jest-dom/extend-expect';
import { act, renderHook } from '@testing-library/react';
import useGetCards from '../hooks/useGetCards';
import useName from '../hooks/useName';


describe('useGetCards hook', () => {
     beforeEach(()=>{
       
     });
     test("Should hook correctly", () => {
        useName.mockReturnValueOnce({
            json: () => Promise.resolve({
                url: "https://cloud.modyocdn.com/uploads/651e2381-dc33-43fc-8762-58079ffb36d1/original/bird.jpg",
                title: 'Bird'
            })
        });
        const { result } = renderHook(() => useName());
        console.log(result.current);
        const { name, data, decirHola } = result.current;
       
        act(() => {
           decirHola();
        });
       
        console.log(result.current.data);
        expect(result.current.name).toBe('Oscar');
     })
})