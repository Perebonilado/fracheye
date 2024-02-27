import React, { FC } from "react";
import Button from "../../../@shared-components/Button";
import SmileyFace from "../../../@icons/SmileyFace";
import NikeIcon from "../../../@icons/NikeIcon";
import UserDetails from "../UserDetails";
import UserMetaDetails from "../UserMetaDetails";

interface Props {
  id: string;
  isVerified: boolean;
  name: string;
  username: string;
  industries?: string[];
  bio: string;
  languages?: string[];
  contentType?: string;
  country?: string;
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
  country,
}) => {
  return (
    <section className="flex mb-10 max-lg:flex-col gap-4">
      <UserDetails
        isVerified={isVerified}
        name={name}
        username={username}
        industries={industries}
        bio={bio}
        country={country}
        id={id}
      />

      <UserMetaDetails contentType={contentType} languages={languages} />
    </section>
  );
};

export default UserInfoContainer;
