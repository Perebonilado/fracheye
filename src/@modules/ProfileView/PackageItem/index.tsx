import React, { FC } from "react";
import VerifiedBadgeAlt from "../../../@icons/VerifiedBadgeAlt";

interface Props {
  title: string;
  price: number;
  currency?: string;
  availablePackages: string[];
}

const PackageItem: FC<Props> = ({
  title,
  price,
  currency = "USD",
  availablePackages,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-base text-[#000000]">{title}</h3>
        <p className="text-sm text-[#000000CC] font-semibold">
          {currency} {price}
        </p>
      </div>
      <div className="flex flex-col gap-3 pl-3">
        {availablePackages.map((pkg, key) => (
          <div key={key} className="flex items-center gap-1">
            <VerifiedBadgeAlt />{" "}
            <p className="text-xs text-[#000000CC]">{pkg}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageItem;
