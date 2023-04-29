import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { useCounter }from '../hooks/useCounter';
import { renderHook } from '@testing-library/react';

describe('useCounter', () => {
     test("should rendeter the initial count", () => {
          const { result } =  renderHook(useCounter(0));
          expect(result.current.count).toBe(0);
     });
});