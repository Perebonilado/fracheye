import React, { FC, useEffect } from "react";
import Avatar from "../Avatar";
import Button from "../Button";
import useClickOutside from "../../hooks/useClickOutside";
import { mobileScreenSizePx } from "../../constants";

interface Props {
  handleClose: () => void;
}

const MobileNav: FC<Props> = ({ handleClose }) => {
  const ref = useClickOutside<HTMLDivElement>(() => handleClose());

  const handleCloseOnResize = () => {
    if (window.innerWidth <= mobileScreenSizePx) {
      handleClose();
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleCloseOnResize);

    return () => window.removeEventListener("resize", handleCloseOnResize);
  }, []);

  return (
    <div
      ref={ref}
      className="shadow-lg rounded-xl bg-white w-full max-w-[300px] p-6 z-[1000] absolute top-[100%] right-1"
    >
      <div className="flex flex-col items-center gap-6">
        <Avatar alt="user avatar" size="small" fallBack="u" />
        <div className="w-full h-[1px] bg-slate-300"></div>
        <Button
          title="Share Profile"
          color="tetiary"
          size="large"
          variant="text"
        />
      </div>
    </div>
  );
};

export default MobileNav;
