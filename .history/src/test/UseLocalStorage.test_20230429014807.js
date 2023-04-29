import '@testing-library/jest-dom/extend-expect';
import useLocalStorage from '../hooks/useLocalStorage';
import { act, renderHook } from '@testing-library/react';

let useLocalStorageResult;
Object.defineProperty(window, 'localStorage', {
     value:{
          getItem : jest.fn(),
          setItem : jest.fn(),
          clear: jest.fn()
     }
})
describe('useLocalStorage hook', () => {
     beforeEach(()=>{
          useLocalStorageResult = renderHook(() => useLocalStorage("test","user"));
     });
     test("render correctly", () => {
          expect(useLocalStorageResult.result.current).toBeDefined();
          expect(useLocalStorageResult.result.current[0]).toEqual("user");
          expect(useLocalStorageResult.result.current[1]).toBeInstanceOf(Function);
     });

     test("Should call localStorage", () => {
          const setItemValue = useLocalStorageResult.result.current[1];
          act(() => {
               setItemValue("anotherTest");
          })
     })
});