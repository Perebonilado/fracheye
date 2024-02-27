import React, { FC, forwardRef } from "react";
import Avatar from "../../../@shared-components/Avatar";

interface Props {
  profilePic: string;
  bannerImage: string;
  username: string;
}

const Banner = forwardRef<HTMLDivElement, Props>(
  ({ profilePic, bannerImage, username }, ref) => {
    return (
      <div
        ref={ref}
        className="relative flex items-center justify-center mb-28 max-sm:mb-10"
      >
        <img
          style={{
            objectFit: "cover",
            objectPosition: "50% 50%",
          }}
          src={bannerImage}
          alt="Banner background"
        />

        <div className="absolute bottom-[0] translate-y-1/2 left-[10%]">
          <Avatar
            alt="user profile picture"
            fallBack={username}
            imageUrl={profilePic}
            size="medium"
            className="max-sm:!hidden"
          />
          <Avatar
            alt="user profile picture"
            fallBack={username}
            imageUrl={profilePic}
            size="small"
            className="!hidden max-sm:!flex"
          />
        </div>
      </div>
    );
  }
);

export default Banner;
