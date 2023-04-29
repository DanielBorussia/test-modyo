import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import useGetCards from '../hooks/useGetCards';
import Home from '../containers/Home';
import { renderHook } from '@testing-library/react-hooks';

// we will need this mock on our next test
global.fetch = jest.fn();

test("useGetCards", () => {
      const { result } = renderHook(() => useGetCards());
     console.log(result.current);
  });