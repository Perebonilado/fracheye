import React, { FC } from "react";
import Container from "../../../@shared-components/Container";
import PackageContainer from "../PackageContainer";
import Button from "../../../@shared-components/Button";

const ProfileView: FC = () => {
  return (
    <Container>
      <section className="border-2 min-h-screen    flex gap-8 my-32 max-md:flex-col">
        <main className="md:w-[60%] border border-blue-600 min-h-full px-4"></main>
        <aside className="md:w-[40%] border border-rose-600 min-h-full px-4">
          <PackageContainer />
          <Button title="Contact Emmanuel" fullWidth className="my-6" />
        </aside>
      </section>
    </Container>
  );
};

export default ProfileView;
