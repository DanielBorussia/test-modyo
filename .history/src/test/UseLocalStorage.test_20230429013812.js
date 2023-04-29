import '@testing-library/jest-dom/extend-expect';
import useLocalStorage from '../hooks/useLocalStorage';
import { renderHook } from '@testing-library/react';

let useLocalStorageResult;
describe('useLocalStorage hook', () => {
     beforeEach(()=>{
          useLocalStorageResult = renderHook(() => useLocalStorage("test","test"));
     });
     test("render correctly", () => {
          console.log(useLocalStorageResult.result.current);
     });

});