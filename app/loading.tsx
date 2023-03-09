import LoadingEllipsis from "@/components/ui/loaders/LoadingEllipsis/LoadingEllipsis";

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
