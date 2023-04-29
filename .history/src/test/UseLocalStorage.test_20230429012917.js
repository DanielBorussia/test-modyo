import '@testing-library/jest-dom/extend-expect';
import { useLocalStorage }from '../hooks/useLocalStorage';
import { renderHook } from '@testing-library/react-hooks';

let useLocalStorageResult;
describe('useLocalStorage hook', () => {
     beforeEach(()=>{
          useLocalStorageResult = renderHook(() => useLocalStorage());
     });
     test("render correctly", () => {
          console.log(useLocalStorageResult);
     });

});