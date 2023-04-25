"use client";
import RoomView from "./room.view";

const Page = ({ params }: { params: any }) => {
  return <RoomView roomId={params.room_id} />;
};

export default Page;
