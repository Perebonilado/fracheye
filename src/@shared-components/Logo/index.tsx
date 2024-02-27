import React, { FC } from "react";
import c from "classnames";
import s from "./styles.module.css";

interface Props {
  size?: "small" | "medium" | "large";
}

const Logo: FC<Props> = ({ size = "small" }) => {
  const rootClassName = c(s.root, {
    [s.small]: size === "small",
    [s.medium]: size === "medium",
    [s.large]: size === "large",
  });

  return (
    <div className={rootClassName}>
      <img
        className="absolute top-0 left-0 w-full h-full"
        style={{
          objectFit: "contain",
          objectPosition: "50% 50%",
        }}
        src="/assets/francheye-logo.png"
        alt="Francheye logo"
      />
    </div>
  );
};

export default Logo;
