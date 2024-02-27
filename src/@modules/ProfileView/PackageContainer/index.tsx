import React, { forwardRef } from "react";
import Tab from "../../../@shared-components/Tab";
import PackageItem from "../PackageItem";

const PackageContainer = forwardRef<HTMLElement>((_, ref) => {
  const mainPackageTabs = [
    { title: "UCG", isActive: true },
    { title: "Affiliates", isActive: false },
  ];

  const subPackageTabs = [
    { title: "Videos", isActive: true },
    { title: "Photos", isActive: false },
  ];

  const packages = [
    {
      title: "Package 1",
      price: "200",
      currency: "USD",
      availablePackages: ["UCG Video", "7 days delivery", "Editing"],
    },
    {
      title: "Package 1",
      price: "200",
      currency: "USD",
      availablePackages: ["UCG Video", "7 days delivery", "Editing"],
    },
    {
      title: "Package 1",
      price: "200",
      currency: "USD",
      availablePackages: ["UCG Video", "7 days delivery", "Editing"],
    },
  ];

  return (
    <section ref={ref}>
      <div className="flex flex-col gap-5">
        <Tab headers={mainPackageTabs} variant="button" fullWidth />
        <Tab headers={subPackageTabs} />
      </div>
      <div className="flex flex-col gap-8 py-6">
        {packages.map((pkg, key) => (
          <PackageItem {...pkg} key={key} />
        ))}
      </div>
    </section>
  );
});

export default PackageContainer;
