import React, { FC } from "react";
import Card from "../../../@shared-components/Card";
import { SocialMediaPlatformModel } from "../../../models/SocialMediaPlatform.model";
import InstagramIcon from "../../../@icons/InstagramIcon";
import ArrowRight from "../../../@icons/ArrowRight";
import { formatNumberToShortForm } from "../../../utils";

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
      <div className="flex items-center justify-between mb-4">
        {socialMediaPlatformIcons[socialMediaPlatform]}

        <p className="text-base font-medium">{username}</p>

        <ArrowRight />
      </div>

      <div className="flex gap-2 justify-between">
        {Object.entries(stats).map(([title, count], key) => {
          return (
            <div className="flex flex-col gap-2 text-center" key={key}>
              <p className="text-sm text-[#00000066]">{formatNumberToShortForm(count)}</p>
              <p className="text-[10px] text-[#000000B2]">{title}</p>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default ConnectedAccountCard;
