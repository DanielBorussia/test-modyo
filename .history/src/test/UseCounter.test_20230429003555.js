import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import useGetCards from '../hooks/useGetCards';
import Home from '../containers/Home';
import { renderHook } from '@testing-library/react';


test("useGetCards", () => {
     const { result } =  renderHook(useGetCards);
     expect(result.current.cards).toBe(0);
});