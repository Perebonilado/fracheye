import React, { FC } from "react";
import Container from "../../../@shared-components/Container";
import PackageContainer from "../PackageContainer";
import Button from "../../../@shared-components/Button";
import GuaranteeCard from "../GuaranteeCard";
import PreviousWorksContainer from "../PreviousWorksContainer";
import ConnectedAccountsContainer from "../ConnectedAccountsContainer";

const ProfileView: FC = () => {
  return (
    <Container>
      <section className="flex gap-8 my-32 max-md:flex-col">
        <main className="md:w-[60%] border border-blue-600 min-h-full">
          <ConnectedAccountsContainer />
          <PreviousWorksContainer />
        </main>
        <aside className="md:w-[40%] px-4">
          <PackageContainer />
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
