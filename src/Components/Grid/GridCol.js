// @flow

import * as React from "react";
import cn from "classnames";

type Props = {
  className?: string,
  children: React.Node,
  down?: boolean,
  size?: number,
  up?: boolean,
};

const GridCol =({ className, children, up, down, size = 12 }: Props): React.Node => {
  const classes: string = cn('sik-col',{ up, down, [`ws-${size}`]: size }, className);
  return (<div className={classes}>{children}</div>);
};

/** @component */
export default GridCol;