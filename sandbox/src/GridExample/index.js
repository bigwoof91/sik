import React from 'react';
import { Grid, GridRow, GridCol } from 'sik';

const columns = [1,2,3,4,5,6,7,8,9,10,11,12];

const GridExample = () => (
  <Grid>
    <GridRow gutter fly>
      {columns.map(col => (
        <GridCol
          key={col}
          size={1}
        >{col}</GridCol>)
      )}
    </GridRow>
  </Grid>
);

export default GridExample;