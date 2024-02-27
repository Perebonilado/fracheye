import React, { FC } from "react";
import Button from "../../../@shared-components/Button";
import SmileyFace from "../../../@icons/SmileyFace";
import NikeIcon from "../../../@icons/NikeIcon";
import VerifiedBadge from "../../../@icons/VerifiedBadge";
import Rating from "../../../@icons/Rating";

interface Props {
  id: string;
  isVerified: boolean;
  name: string;
  username: string;
  industries?: string[];
  bio: string;
  languages?: string[];
  contentType?: string;
}

const UserInfoContainer: FC<Props> = ({
  id,
  isVerified,
  name,
  username,
  industries,
  bio,
  languages,
  contentType,
}) => {
  const formatIndustries = (industries: string[]) => {
    return industries
      .map((ind) => {
        return `#${ind}`;
      })
      .join(", ");
  };

  return (
    <section className="flex mb-10 max-md:flex-col">
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

        <div className="mt-8">
          <h3 className="font-bold">My Bio</h3>
          <p className="text-[13px] leading-relaxed">{bio}</p>
        </div>
      </div>
      <div style={{ flex: 2 }} className="flex flex-col gap-5 items-end max-md:items-start">
        <Button title="Follow" size="small" className="w-fit" />

        {languages?.length ? (
          <div>
            <h3 className="font-bold mb-2 text-right max-md:text-left">Languages</h3>
            <p className="text-[#11111199]">{languages.join(", ")}</p>
          </div>
        ) : null}

        {contentType && (
          <div>
            <h3 className="font-bold mb-2 text-right max-md:text-left">Content Type</h3>
            <p className="text-[#11111199] flex items-center gap-3">
              <SmileyFace /> {contentType}
            </p>
          </div>
        )}

        <div>
          <h3 className="font-bold mb-2 text-right max-md:text-left">Brands I've worked with</h3>
          <div className="text-[#11111199] flex items-center justify-end gap-3 max-md:justify-start">
            <NikeIcon />
            <NikeIcon />
            <NikeIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInfoContainer;
