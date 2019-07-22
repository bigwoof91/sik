# sik: "sick interface kit" (wip)

> A component library for everyone.

[![NPM](https://img.shields.io/npm/v/sik.svg)](https://www.npmjs.com/package/sik) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save sik
```

## Usage

```jsx
import React, { Component } from 'react'

import { Grid } from 'sik'

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
