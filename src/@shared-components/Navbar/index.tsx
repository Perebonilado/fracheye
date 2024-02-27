import React, { forwardRef, useState } from "react";
import Container from "../Container";
import Logo from "../Logo";
import Button from "../Button";
import Avatar from "../Avatar";
import Hamburger from "../Hamburger";
import MobileNav from "../MobileNav";

const Navbar = forwardRef<HTMLElement>((_, ref) => {
  const [isMobileNav, setIsMobileNav] = useState(false);

  return (
    <nav
      ref={ref}
      className="py-4 border-b border-b-[#00000033] bg-transparent"
    >
      <Container>
        <div className="flex items-center justify-between relative">
          <Logo size="medium" />

          <div className="flex items-center gap-6 max-sm:hidden">
            <Button title="Share Profile" color="tetiary" size="small" />
            <Avatar alt="logged in user image" fallBack="U" size="small" imageUrl="/assets/nav-profile.png"/>
          </div>

          <Hamburger onClick={() => setIsMobileNav(!isMobileNav)} />
          {isMobileNav && (
            <MobileNav handleClose={() => setIsMobileNav(false)} />
          )}
        </div>
      </Container>
    </nav>
  );
});

export default Navbar;
