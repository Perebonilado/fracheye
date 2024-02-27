import React, { FC } from "react";
import VerifiedBadge from "../../../@icons/VerifiedBadge";
import PinDrop from "../../../@icons/PinDrop";
import Rating from "../../../@icons/Rating";

interface Props {
  id: string;
  isVerified: boolean;
  name: string;
  username: string;
  industries?: string[];
  bio: string;
  country?: string;
}

const UserDetails: FC<Props> = ({
  isVerified,
  name,
  username,
  industries,
  bio,
  country,
}) => {
  const formatIndustries = (industries: string[]) => {
    return industries
      .map((ind) => {
        return `#${ind}`;
      })
      .join(", ");
  };
  return (
    <div style={{ flex: 4 }} className="flex flex-col">
      <div className="flex items-center gap-2">
        <h2 className="text-2xl font-bold">{name}</h2>
        {isVerified && <VerifiedBadge />}
      </div>
      <div className="text-[#11111180] flex items-center gap-2">
        <p>@{username}</p> <Rating />{" "}
        <span className="text-[#111111CC] font-medium">5.0</span>
        <span className="text-[#1111114D]">(21st)</span>
      </div>
      {industries?.length ? (
        <p className="text-[#11111180]">{formatIndustries(industries)}</p>
      ) : null}
      {country && (
        <div className="flex items-center gap-2">
          <PinDrop /> <p className="text-[#11111180]">{country}</p>
        </div>
      )}
      <div className="mt-8">
        <h3 className="font-bold">My Bio</h3>
        <p className="text-[13px] leading-relaxed">{bio}</p>
      </div>
    </div>
  );
};

export default UserDetails;
