import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { useCounter }from '../hooks/useCounter';
import { renderHook } from '@testing-library/react';

describe('useCounter', () => {
     test("should rendeter the initial count", () => {
          const { result } =  renderHook(()=> useCounter());
          expect(result.current.count).toBe(0);
     });

     test("should accept and render the same initial count", () => {
          const { result } =  renderHook(useCounter, {
               initialProps: {
                    initialCount : 20,
               },
          });
          expect(result.current.count).toBe(20);
     });
});