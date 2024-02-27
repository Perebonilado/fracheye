import React, { FC, forwardRef } from "react";
import Card from "../../../@shared-components/Card";

const GuaranteeCard: FC = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Card color="grey" ref={ref} size="large">
      <h2 className="font-semibold text-lg text-[#000A5C] mb-4">Our Guarantee</h2>
      <p className="text-[#11111180] text-sm">
        Your Satisfaction is our top priority. Payments only get released to the
        creator once the order is completed
      </p>
    </Card>
  );
});

export default GuaranteeCard;
