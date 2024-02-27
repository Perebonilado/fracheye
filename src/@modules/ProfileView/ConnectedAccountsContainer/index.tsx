import React, { forwardRef } from "react";
import Button from "../../../@shared-components/Button";
import ChevronDown from "../../../@icons/ChevronDown";
import ConnectedAccountCard from "../ConnectedAccountCard";

interface Props {
  data: {
    totalLifeTimeViewsCount: number;
    likeCount: number;
    followerCount: number;
    username: string;
    socialMediaPlatform: string;
  }[];
}

const ConnectedAccountsContainer = forwardRef<HTMLDivElement, Props>(({data}, ref) => {
  return (
    <div ref={ref} className="mb-14">
      <div className="flex items-center gap-3">
        <h2 className="text-lg font-medium">Connected Accounts: </h2>
        <Button
          title="Instagram"
          size="large"
          variant="text"
          endIcon={<ChevronDown />}
        />
      </div>
      <div className="mt-6 gap-3 grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {data.map((ca, key) => (
          <ConnectedAccountCard {...ca} key={key} />
        ))}
      </div>
    </div>
  );
});

export default ConnectedAccountsContainer;
