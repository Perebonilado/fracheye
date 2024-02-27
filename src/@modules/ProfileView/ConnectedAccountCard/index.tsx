import React, { FC } from "react";
import Card from "../../../@shared-components/Card";
import { SocialMediaPlatformModel } from "../../../models/SocialMediaPlatform.model";
import InstagramIcon from "../../../@icons/InstagramIcon";

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
  } as const;

  return (
    <Card>
      <div className="flex items-center justify-between"></div>
    </Card>
  );
};

export default ConnectedAccountCard;
