import React, { forwardRef } from "react";

const ChevronDown = forwardRef<SVGSVGElement>((_, ref) => {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
    >
      <path
        d="M1 1L7 7L13 1"
        stroke="black"
        stroke-opacity="0.5"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
});

export default ChevronDown;
