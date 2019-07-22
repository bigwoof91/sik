# sik "sick interface kit" (work in progress)

> A component library for everyone.

[![npm version](https://badge.fury.io/js/%40donkers%2Fsik.svg)](https://badge.fury.io/js/%40donkers%2Fsik)

## Install

```bash
npm install --save sik
```

## Usage

```jsx
import React, { Component } from 'react'
import { Grid, GridRow, GridCol } from 'sik'

class Example extends Component {
  render () {
    return (
      <Grid>
        <GridRow gutters>
          <GridCol size={12}>Full Width</GridCol>
        </GridRow>
      </Grid>
    )
  }
}
```

## License

MIT © [bigwoof91](https://github.com/bigwoof91)
