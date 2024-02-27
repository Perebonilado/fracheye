import React, { FC } from "react";
import Button from "../../../@shared-components/Button";
import SmileyFace from "../../../@icons/SmileyFace";
import NikeIcon from "../../../@icons/NikeIcon";

interface Props {
  languages?: string[];
  contentType?: string;
}

const UserMetaDetails: FC<Props> = ({ languages, contentType }) => {
  return (
    <div
      style={{ flex: 2 }}
      className="flex flex-col gap-5 items-end max-lg:items-start"
    >
      <Button title="Follow" size="small" className="w-fit" />

      {languages?.length ? (
        <div>
          <h3 className="font-bold mb-2 text-right max-lg:text-left">
            Languages
          </h3>
          <p className="text-[#11111199]">{languages.join(", ")}</p>
        </div>
      ) : null}

      {contentType && (
        <div>
          <h3 className="font-bold mb-2 text-right max-lg:text-left">
            Content Type
          </h3>
          <p className="text-[#11111199] flex items-center gap-3">
            <SmileyFace /> {contentType}
          </p>
        </div>
      )}

      <div>
        <h3 className="font-bold mb-2 text-right max-lg:text-left">
          Brands I've worked with
        </h3>
        <div className="text-[#11111199] flex items-center justify-end gap-3 max-lg:justify-start">
          <NikeIcon />
          <NikeIcon />
          <NikeIcon />
        </div>
      </div>
    </div>
  );
};

export default UserMetaDetails;
