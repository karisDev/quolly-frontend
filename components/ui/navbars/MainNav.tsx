"use client";
import { usePathname } from "next/navigation";
import cl from "./MainNav.module.scss";
import QuollySvg from "@/app/assets/vectors/quolly.svg";
import Link from "next/link";

const routesWithNavbar = ["/dashboard", "/new_quiz"];

const MainNav = () => {
  const pathname = usePathname();

  const showNavbar = routesWithNavbar.includes(pathname ? pathname : "");
  return showNavbar ? (
    <>
      <div className={cl.mainNavWrapper}>
        <nav className={cl.mainNav}>
          <Link href={"/join"} aria-label="Присоединиться к игре">
            <QuollySvg className={cl.logo} />
          </Link>
          <ul className={cl.mainNavList}>
            <li className={cl.mainNavListItem}>
              <Link
                className={`${cl.mainNavLink} ${
                  pathname == "/dashboard" ? cl.active : ""
                }`}
                href="/dashboard"
              >
                Мои квизы
              </Link>
            </li>
            <li className={cl.mainNavListItem}>
              <Link className={cl.mainNavLink} href="/join">
                Присоединиться
              </Link>
            </li>
          </ul>
          <div className={cl.mainNavRight}>
            <Link className={cl.mainNavButton} href="/new_quiz">
              Создать квиз
            </Link>
            <div className={cl.mainNavUser}>
              <div className={cl.mainNavUserBody}>
                <h3 className={cl.mainNavUserName}>John Doe</h3>
                <p className={cl.mainNavUserStatus}>премиум доступ</p>
              </div>
              <img
                className={cl.mainNavUserAvatarImg}
                src="https://picsum.photos/40/40"
                alt="avatar"
              />
            </div>
          </div>
        </nav>
      </div>
      <div className={cl.mainNavMeasurer}></div>
    </>
  ) : (
    <></>
  );
};

export default MainNav;
