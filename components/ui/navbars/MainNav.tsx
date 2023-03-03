"use client";
import { usePathname } from "next/navigation";
import cl from "./MainNav.module.scss";

const routesWithNavbar = [] as string[];

const MainNav = () => {
  const pathname = usePathname();

  const showNavbar = routesWithNavbar.includes(pathname ? pathname : "");
  return showNavbar ? (
    <div className={cl.mainNav}>
      <h1>yeah bro</h1>
    </div>
  ) : (
    <></>
  );
};

export default MainNav;
