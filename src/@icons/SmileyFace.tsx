import React, { forwardRef } from "react";

const SmileyFace = forwardRef<SVGSVGElement>((_, ref) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
    >
      <path
        d="M7 10.85C8.631 10.85 10.01 9.828 10.577 8.4H3.423C3.983 9.828 5.369 10.85 7 10.85ZM4.55 6.3C4.82848 6.3 5.09555 6.18938 5.29246 5.99246C5.48938 5.79555 5.6 5.52848 5.6 5.25C5.6 4.97152 5.48938 4.70445 5.29246 4.50754C5.09555 4.31062 4.82848 4.2 4.55 4.2C4.27152 4.2 4.00445 4.31062 3.80754 4.50754C3.61062 4.70445 3.5 4.97152 3.5 5.25C3.5 5.52848 3.61062 5.79555 3.80754 5.99246C4.00445 6.18938 4.27152 6.3 4.55 6.3ZM9.45 6.3C9.72848 6.3 9.99555 6.18938 10.1925 5.99246C10.3894 5.79555 10.5 5.52848 10.5 5.25C10.5 4.97152 10.3894 4.70445 10.1925 4.50754C9.99555 4.31062 9.72848 4.2 9.45 4.2C9.17152 4.2 8.90445 4.31062 8.70754 4.50754C8.51062 4.70445 8.4 4.97152 8.4 5.25C8.4 5.52848 8.51062 5.79555 8.70754 5.99246C8.90445 6.18938 9.17152 6.3 9.45 6.3ZM7 12.6C5.51479 12.6 4.09041 12.01 3.0402 10.9598C1.99 9.90959 1.4 8.48521 1.4 7C1.4 5.51479 1.99 4.09041 3.0402 3.0402C4.09041 1.99 5.51479 1.4 7 1.4C8.48521 1.4 9.90959 1.99 10.9598 3.0402C12.01 4.09041 12.6 5.51479 12.6 7C12.6 8.48521 12.01 9.90959 10.9598 10.9598C9.90959 12.01 8.48521 12.6 7 12.6ZM7 0C3.129 0 0 3.15 0 7C0 8.85651 0.737498 10.637 2.05025 11.9497C2.70026 12.5998 3.47194 13.1154 4.32122 13.4672C5.17049 13.8189 6.08075 14 7 14C8.85651 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85651 14 7C14 6.08075 13.8189 5.17049 13.4672 4.32122C13.1154 3.47194 12.5998 2.70026 11.9497 2.05025C11.2997 1.40024 10.5281 0.884626 9.67878 0.532843C8.8295 0.18106 7.91925 0 7 0Z"
        fill="#111111"
        fill-opacity="0.6"
      />
    </svg>
  );
});

export default SmileyFace;
