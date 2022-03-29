import React from "react";
import ViewerInfoItem from "./ViewerInfoItem";

const ViewerInfoList = ({ viewerInfoList }) => {
  return (
    <div>
      {viewerInfoList?.map((viewerInfo) => (
        <ViewerInfoItem {...viewerInfo} />
      ))}
    </div>
  );
};

export default ViewerInfoList;
