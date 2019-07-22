// @flow

import * as React from "react";
import cn from "classnames";

type Props = {
  className?: string,
  children: React.Node,
  cure?: boolean,
  gutter?: boolean,
};

const GridRow =({ className, children, gutter, cure }: Props): React.Node => {
  const classes: string = cn('sik',{ gutter, cure }, className);
  return (<div data-testid="grid-row" className={classes}>{children}</div>);
};

/** @component */
export default GridRow;