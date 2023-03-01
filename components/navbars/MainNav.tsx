"use client";
import { usePathname } from "next/navigation";
import cl from "./MainNav.module.scss";

const MainNav = () => {
  const router = usePathname();

  const showNavbar = router !== "/join";
  return showNavbar ? (
    <div className={cl.mainNav}>
      <h1>"yeah bro"</h1>
    </div>
  ) : (
    <></>
  );
};

export default MainNav;
