import React, { FC, HTMLAttributes } from "react";
import cn from "classnames";

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  isActive: boolean;
  handleClick: (title: string) => void;
}

const TabItem: FC<Props> = ({ title, isActive, handleClick, ...props }) => {
  const tabTitleClass = cn(`text-lg text-center font-medium`, {
    ["text-[#0000004D]"]: !isActive,
    ["text-[#000000]"]: isActive,
  });

  const tabActiveIndicatorClass = cn(
    "absolute top-0 left-0 bg-[#0014BC] h-full rounded-full w-[45%]",
    {
      hidden: !isActive,
    }
  );

  return (
    <div
      {...props}
      onClick={() => {
        handleClick(title);
      }}
    >
      <div className="cursor-pointer px-5">
        <p className={tabTitleClass}>{title}</p>
      </div>
      <div className="w-full h-[3px] relative">
        <div className={tabActiveIndicatorClass}></div>
      </div>
    </div>
  );
};

export default TabItem;
