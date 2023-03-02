"use client";
import { usePathname } from "next/navigation";
import cl from "./MainNav.module.scss";

const routesWithoutNavbar = ["/join", "/login", "/"];

const MainNav = () => {
  const pathname = usePathname();

  const showNavbar = !routesWithoutNavbar.includes(pathname);
  return showNavbar ? (
    <div className={cl.mainNav}>
      <h1>"yeah bro"</h1>
    </div>
  ) : (
    <></>
  );
};

export default MainNav;
