import React, { FC } from "react";
import Card from "../../../@shared-components/Card";
import { SocialMediaPlatformModel } from "../../../models/SocialMediaPlatform.model";
import InstagramIcon from "../../../@icons/InstagramIcon";
import ArrowRight from "../../../@icons/ArrowRight";

interface Props {
  totalLifeTimeViewsCount: number;
  likeCount: number;
  followerCount: number;
  username: string;
  socialMediaPlatform: SocialMediaPlatformModel;
}

const ConnectedAccountCard: FC<Props> = ({
  totalLifeTimeViewsCount,
  likeCount,
  followerCount,
  username,
  socialMediaPlatform,
}) => {
  const socialMediaPlatformIcons = {
    instagram: <InstagramIcon />,
    twitter: <InstagramIcon />,
    facebook: <InstagramIcon />,
  } as const;

  const stats = {
    "Total lifetime views": totalLifeTimeViewsCount,
    Likes: likeCount,
    Followers: followerCount,
  };

  return (
    <Card>
      <div className="flex items-center justify-between">
        {socialMediaPlatformIcons[socialMediaPlatform]}

        <p className="text-base font-medium">{username}</p>

        <ArrowRight />
      </div>

      <div>
        {Object.entries(stats).map(([title, count]) => {
          return (
            <div className="flex flex-col gap-4 text-center">
              <p className="text-sm text-[#000000B2]">{title}</p>
              <p className="text-xs text-[#00000066]">{count}</p>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default ConnectedAccountCard;
