import LoadingEllipsis from "@/components/ui/loaders/LoadingEllipsis/LoadingEllipsis";
import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <LoadingEllipsis />
    </div>
  );
};

export default Loading;
