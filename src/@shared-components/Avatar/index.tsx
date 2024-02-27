import React, { HTMLAttributes, forwardRef } from "react";
import c from "classnames";
import s from "./styles.module.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  size?: "small" | "medium" | "large";
  imageUrl?: string;
  fallBack: string;
  alt: string;
  shape?: "round" | "square";
  allowEnlarge?: boolean;
}

const Avatar = forwardRef<HTMLDivElement, Props>(
  (
    {
      size = "small",
      imageUrl,
      fallBack,
      shape = "round",
      alt,
      allowEnlarge = true,
      ...props
    },
    ref
  ) => {
    const rootClassName = c(s.root, {
      [s.small]: size === "small",
      [s.medium]: size === "medium",
      [s.large]: size === "large",
      [s.round]: shape === "round",
      [s.square]: shape === "square",
    }, props.className);
    return (
      <div {...props} ref={ref} role="img" className={rootClassName} >
        {imageUrl ? (
          <img
            className="absolute top-0 left-0 w-full h-full"
            style={{
              objectFit: "cover",
              objectPosition: "50% 50%",
              cursor: allowEnlarge ? "pointer" : "auto",
            }}
            src={imageUrl}
            alt={alt}
          />
        ) : (
          <p
            className={`font-bold ${size === "large" ? "text-4xl" : "text-lg"}`}
          >
            {fallBack[0][0].toUpperCase()}
          </p>
        )}
      </div>
    );
  }
);

export default Avatar;
