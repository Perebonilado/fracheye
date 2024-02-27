import React, { HTMLAttributes, forwardRef } from "react";
import s from "./styles.module.css";
import cn from "classnames";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "text";
  size?: "large" | "medium" | "small";
  color?: "primary" | "secondary" | "tetiary";
  title: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      variant = "contained",
      size = "medium",
      color = "primary",
      title,
      startIcon = null,
      endIcon = null,
      ...props
    },
    ref
  ) => {
    const rootClassName = cn(
      `${s.root}`,
      {
        [s.contained]: variant === "contained",
        [s.text]: variant === "text",
        [s.primary]: color === "primary",
        [s.secondary]: color === "secondary",
        [s.tetiary]: color === "tetiary",
        [s.large]: size === "large",
        [s.medium]: size === "medium",
        [s.small]: size === "small",
      },
      `${props.className}`
    );

    return (
      <button ref={ref} {...props} className={rootClassName}>
        {startIcon}
        {title}
        {endIcon}
      </button>
    );
  }
);

export default Button;
