import React, { FC, HTMLAttributes } from "react";
import cn from "classnames";
import Button from "../Button";

interface Props extends HTMLAttributes<HTMLDivElement | HTMLButtonElement> {
  title: string;
  isActive: boolean;
  headerKey: string;
  handleClick: (title: string) => void;
  variant?: "button" | "text";
}

const TabItem: FC<Props> = ({
  title,
  isActive,
  handleClick,
  headerKey,
  variant = "text",
  ...props
}) => {
  const textTabTitleClass = cn(`text-base text-center font-medium`, {
    ["text-[#0000004D]"]: !isActive,
    ["text-[#000000]"]: isActive,
  });

  const textTabActiveIndicatorClass = cn(
    "absolute top-0 left-0 bg-[#0014BC] h-full rounded-full w-[45%]",
    {
      hidden: !isActive,
    }
  );

  return (
    <>
      {variant === "text" && (
        <div
          {...props}
          onClick={() => {
            handleClick(headerKey);
          }}
        >
          <div className="cursor-pointer px-5">
            <Button
              title={title}
              variant="text"
              className={textTabTitleClass}
            />
          </div>
          <div className="w-full h-[3px] relative">
            <div className={textTabActiveIndicatorClass}></div>
          </div>
        </div>
      )}
      {variant === "button" && (
        <Button
          {...props}
          size="large"
          title={title}
          color={isActive ? "primary" : "secondary"}
          className="!rounded-none first:!rounded-tl-lg first:!rounded-bl-lg last:!rounded-tr-lg last:!rounded-br-lg font-medium"
          onClick={() => {
            handleClick(headerKey);
          }}
        />
      )}
    </>
  );
};

export default TabItem;
