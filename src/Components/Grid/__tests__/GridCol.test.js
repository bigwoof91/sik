import React from 'react';
import { render } from '@testing-library/react';
import GridCol from '../GridCol';

const Component = (props) => (<GridCol {...props}><div data-testid="child" /></GridCol>);

describe('GridCol', () => {
  it('should render', () => {
    const { getByTestId } = render(<Component />);

    expect(getByTestId('grid-col')).toBeTruthy();
  });

  it('should render children', () => {
    const { getByTestId } = render(<Component />);

    expect(getByTestId('child')).toBeTruthy();
  });

  describe('given up', () => {
    it('should align the column to the top', () => {
      const { container } = render(<Component up />);
      expect(container.firstChild.classList.contains('up')).toBe(true)
    });
  });

  describe('given down', () => {
    it('should align the column to the bottom', () => {
      const { container } = render(<Component down />);
      expect(container.firstChild.classList.contains('down')).toBe(true)
    });
  });

});