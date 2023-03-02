"use client";

// @ts-ignore
const page = ({ params }) => {
  const roomId = params.room_id;
  return <div>{roomId}</div>;
};

export default page;
