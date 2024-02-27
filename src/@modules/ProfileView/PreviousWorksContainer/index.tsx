import React, { FC } from "react";
import { useGetPreviousWorksPhotosQuery } from "../../../api-services/previous-work-api";
import Avatar from "../../../@shared-components/Avatar";
import Button from "../../../@shared-components/Button";

const PreviousWorksContainer: FC = () => {
  const { data, isError, isLoading } = useGetPreviousWorksPhotosQuery("");

  return (
    <>
      <h2 className="text-xl font-bold mb-10 max-[1240px]:text-center">Previous Works</h2>
      <div className="grid grid-cols-3 gap-5 max-[1240px]:grid-cols-2 max-lg:grid-cols-1 justify-items-center">
        {data &&
          data.map((pw) => {
            return (
              <Avatar
                imageUrl={pw.imageSrc}
                shape="square"
                size="large"
                alt={pw.description}
                fallBack="W"
              />
            );
          })}

        {isError && !data && !isLoading && (
          <Button title="Refetch Previous Works" />
        )}
      </div>
    </>
  );
};

export default PreviousWorksContainer;
