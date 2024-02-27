import React, { forwardRef, useState, useEffect } from "react";
import Tab from "../../../@shared-components/Tab";
import PackageItem from "../PackageItem";

interface Props {
  packages: {
    title: string;
    price: number;
    currency?: string;
    availablePackages: string[];
    packageType: string;
    contentType: string;
  }[];
}

const PackageContainer = forwardRef<HTMLElement, Props>(({ packages }, ref) => {
  const [activeMainTab, setActiveMainTab] = useState("ugc");
  const [activeSubTab, setActiveSubTab] = useState("video");
  const [packagesData, setPackagesData] = useState([...packages]);

  const mainPackageTabs = [
    { title: "UGC", isActive: true, key: "ugc" },
    { title: "Affiliates", isActive: false, key: "affiliate" },
  ];

  const subPackageTabs = [
    { title: "Videos", isActive: true, key: "video" },
    { title: "Photos", isActive: false, key: "photo" },
  ];

  const handleFilterDataOnTabChange = () => {
    const filteredPackages = [...packages].filter((pkg) => {
      if (
        pkg.contentType.toLowerCase() === activeSubTab.toLowerCase() &&
        pkg.packageType === activeMainTab.toLowerCase()
      ) {
        return pkg;
      }
    });

    setPackagesData(filteredPackages);
  };

  useEffect(() => {
    handleFilterDataOnTabChange();
  }, [activeMainTab, activeSubTab]);

  return (
    <section ref={ref}>
      <div className="flex flex-col gap-5">
        <Tab
          headers={mainPackageTabs}
          variant="button"
          fullWidth
          handleGetActiveTabTitle={(tab) => {
            setActiveMainTab(tab);
          }}
        />
        <Tab
          headers={subPackageTabs}
          handleGetActiveTabTitle={(tab) => {
            setActiveSubTab(tab);
          }}
        />
      </div>
      <div className="flex flex-col gap-8 py-6">
        {packagesData.length ? (
          packagesData.map((pkg, key) => <PackageItem {...pkg} key={key} />)
        ) : (
          <p className="text-center">No Packages Available</p>
        )}
      </div>
    </section>
  );
});

export default PackageContainer;
