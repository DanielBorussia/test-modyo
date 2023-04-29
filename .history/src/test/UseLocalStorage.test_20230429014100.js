import '@testing-library/jest-dom/extend-expect';
import useLocalStorage from '../hooks/useLocalStorage';
import { renderHook } from '@testing-library/react';

let useLocalStorageResult;
describe('useLocalStorage hook', () => {
     beforeEach(()=>{
          useLocalStorageResult = renderHook(() => useLocalStorage("test","user"));
     });
     test("render correctly", () => {
          expect(useLocalStorageResult.result.current).toBeDefined();
          expect(useLocalStorageResult.result.current[0]).toEqual("test");
          expect(useLocalStorageResult.result.current[1]).toBeInstanceOf(Function);
     });

});