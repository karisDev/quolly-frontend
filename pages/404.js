"use client";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const navigateJoin = () => {
      router.push("/join");
    };
    navigateJoin();
  }, []);

  return <></>;
}
