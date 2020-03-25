import React from 'react';
import { Grid, GridRow, GridCol } from 'sik';

const columns = [1,2,3,4,5,6,7,8,9,10,11,12];
const columns2 = [1,2,3,4,5,6];

const GridExample = () => (
  <Grid>
    <GridRow gutter cure>
      {columns.map(col => (
        <GridCol
          key={col}
          size={1}
          up
        >Col-{col}</GridCol>)
      )}
    </GridRow>
    <GridRow gutter cure>
      {columns2.map(col => (
        <GridCol
          key={col}
          size={2}
          down
        >Col-{col}</GridCol>)
      )}
    </GridRow>
  </Grid>
);

export default GridExample;