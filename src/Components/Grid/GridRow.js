// @flow

import * as React from "react";
import cn from "classnames";

type Props = {
  className?: string,
  children: React.Node,
  down?: boolean,
  fly?: boolean,
  gutter?: boolean,
  up?: boolean,
};

const GridRow =({ className, children, gutter, fly, up, down, }: Props): React.Node => {
  const classes: string = cn('sik',{ gutter, fly, up, down, }, className);
  return (<div className={classes}>{children}</div>);
};

/** @component */
export default GridRow;