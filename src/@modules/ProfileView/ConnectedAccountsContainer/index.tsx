import React, { forwardRef } from "react";
import Button from "../../../@shared-components/Button";
import ChevronDown from "../../../@icons/ChevronDown";

const ConnectedAccountsContainer = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="mb-14">
      <div className="flex items-center gap-3">
        <h2 className="text-lg font-medium">Connected Accounts: </h2>
        <Button title="Instagram" size="large" variant="text" endIcon={<ChevronDown />} />
      </div>
      <div className="mt-6 flex flex-wrap gap-4"></div>
    </div>
  );
});

export default ConnectedAccountsContainer;
