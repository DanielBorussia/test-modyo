import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import useGetCards from '../hooks/useGetCards';
import Home from '../containers/Home';
import { renderHook } from '@testing-library/react';

// we will need this mock on our next test
global.fetch = jest.fn();

describe("useGetCards", () => {
    it("should return the initial values for data, error and loading", async () => {
      const { result } = renderHook(() => useGetCards());
      const { cards } = result.current;
  
      expect(cards).toBe(null);
    });
  });