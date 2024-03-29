import React, { forwardRef, useState, useEffect } from "react";
import TabItem from "../TabItem";

interface Props {
  headers: { isActive: boolean; title: string, key: string }[];
  handleGetActiveTabTitle?: (title: string) => void;
  currentActiveTabOnMount?: string;
  variant?: "text" | "button";
  fullWidth?: boolean;
}

const Tab = forwardRef<HTMLDivElement, Props>(
  (
    {
      headers,
      handleGetActiveTabTitle,
      currentActiveTabOnMount,
      variant = "text",
      fullWidth = false,
    },
    ref
  ) => {
    const [headersCopy, setHeadersCopy] = useState([...headers]);

    const handleChangeActiveHeader = (key: string) => {
      setHeadersCopy(() =>
        headersCopy.map((header) => {
          if (header.key === key) {
            if (handleGetActiveTabTitle) handleGetActiveTabTitle(key);
            return { ...header, isActive: true };
          }
          return { ...header, isActive: false };
        })
      );
    };

    useEffect(() => {
      if (currentActiveTabOnMount) {
        handleChangeActiveHeader(currentActiveTabOnMount);
      }
    }, []);

    return (
      <div ref={ref} className="flex items-center">
        {headersCopy.map((header, key) => {
          return (
            <TabItem
              {...header}
              headerKey={header.key}
              key={key}
              handleClick={handleChangeActiveHeader}
              variant={variant}
              style={{ flex: fullWidth ? 1 : "" }}
            />
          );
        })}
      </div>
    );
  }
);

export default Tab;
