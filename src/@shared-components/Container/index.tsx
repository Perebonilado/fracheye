import React, {
  FC,
  PropsWithChildren,
  HTMLAttributes,
  forwardRef,
} from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Container = forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
  ({ children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`w-full max-w-screen-xl mx-auto px-4 ${props.className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

export default Container;
