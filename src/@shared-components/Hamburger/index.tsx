import React, { HTMLAttributes, forwardRef } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Hamburger = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <div ref={ref} className="w-[36px] h-[20px] flex-col justify-between cursor-pointer items-center hidden max-sm:!flex" {...props}>
      <div className="w-full h-[2px] bg-[#000]"></div>
      <div className="w-full h-[2px] bg-[#000]"></div>
      <div className="w-full h-[2px] bg-[#000]"></div>
    </div>
  );
});

export default Hamburger;