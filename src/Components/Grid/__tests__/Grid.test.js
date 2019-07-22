import React from 'react';
import { render } from '@testing-library/react';
import Grid from '../Grid';

const Component = (
  <Grid>
    <div data-testid="child" />
    <div data-testid="child" />
  </Grid>);

describe('Grid', () => {
  it('should render its children', () => {
    const { getAllByTestId } = render(Component);
    expect(getAllByTestId('child').length).toBe(2);
  });
});