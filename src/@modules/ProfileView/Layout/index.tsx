import React, { FC } from "react";
import Container from "../../../@shared-components/Container";
import PackageContainer from "../PackageContainer";
import Button from "../../../@shared-components/Button";
import GuaranteeCard from "../GuaranteeCard";
import PreviousWorksContainer from "../PreviousWorksContainer";
import ConnectedAccountsContainer from "../ConnectedAccountsContainer";
import UserInfoContainer from "../UserInfoContainer";
import data from "../../../json-data/user2.json";
import Banner from "../Banner";

const ProfileView: FC = () => {
  return (
    <Container>
      <section className="flex gap-8 my-32 max-md:flex-col">
        <main className="md:w-[60%]">
          <Banner
            bannerImage="/assets/banner-bg.png"
            username={data.username}
            profilePic="/assets/user-profile-pic.png"
          />
          <UserInfoContainer {...data} />
          <ConnectedAccountsContainer />
          <PreviousWorksContainer />
        </main>
        <aside className="md:w-[40%] px-4">
          <PackageContainer
            packages={data.packages.map((pkg) => {
              return {
                availablePackages: pkg.services,
                price: pkg.price,
                title: pkg.title,
                packageType: pkg.packageType,
                contentType: pkg.contentType,
              };
            })}
          />
          <Button
            title="Contact Emmanuel"
            fullWidth
            className="my-6 font-semibold"
          />
          <GuaranteeCard />
        </aside>
      </section>
    </Container>
  );
};

export default ProfileView;
