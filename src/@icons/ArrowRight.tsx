import React, { forwardRef } from "react";

const ArrowRight = forwardRef<SVGSVGElement>((_, ref) => {
  return (
    <svg
      ref={ref}
      width="10"
      height="8"
      viewBox="0 0 10 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.59665 4.35355C9.79191 4.15829 9.79191 3.84171 9.59665 3.64645L6.41467 0.464466C6.21941 0.269204 5.90282 0.269204 5.70756 0.464466C5.5123 0.659728 5.5123 0.976311 5.70756 1.17157L8.53599 4L5.70756 6.82843C5.5123 7.02369 5.5123 7.34027 5.70756 7.53553C5.90282 7.7308 6.21941 7.7308 6.41467 7.53553L9.59665 4.35355ZM0.757812 4.5H9.24309V3.5L0.757812 3.5V4.5Z"
        fill="#0014BC"
      />
    </svg>
  );
});

export default ArrowRight;
