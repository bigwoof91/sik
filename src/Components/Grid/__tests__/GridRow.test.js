import React from 'react';
import { render } from '@testing-library/react';
import GridRow from '../GridRow';

const Component = (props) => (<GridRow {...props}><div data-testid="child" /></GridRow>);

describe('GridRow', () => {
  it('should render', () => {
    const { getByTestId } = render(<Component />);

    expect(getByTestId('grid-row')).toBeTruthy();
  });

  it('should render children', () => {
    const { getByTestId } = render(<Component />);

    expect(getByTestId('child')).toBeTruthy();
  });

  describe('given gutter', () => {
    it('should render spaced columns', () => {
      const { container } = render(<Component gutter />);
      expect(container.firstChild.classList.contains('gutter')).toBe(true)
    });
  });

  describe('given cure', () => {
    it('should render auto-sized columns', () => {
      const { container } = render(<Component cure />);
      expect(container.firstChild.classList.contains('cure')).toBe(true)
    });
  });

});