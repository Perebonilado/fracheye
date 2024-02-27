import React, { HTMLAttributes, PropsWithChildren, forwardRef } from "react";
import cn from "classnames";
import s from "./styles.module.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  color?: "white" | "grey";
  size?: "small" | "large";
}

const Card = forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
  ({ children, color = "white", size = "small", ...props }) => {
    const rootClassNames = cn(
      `${s.root}`,
      {
        [s.whiteBg]: color === "white",
        [s.greyBg]: color === "grey",
        [s.small]: size === "small",
        [s.large]: size === "large",
      },
      props.className
    );

    return <div className={rootClassNames}>{children}</div>;
  }
);

export default Card;
