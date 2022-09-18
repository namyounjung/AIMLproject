import { useState } from "react";
import b_calendar from "../assets/icon/b_calendar.png";
import b_home from "../assets/icon/b_home.png";
import b_menu from "../assets/icon/b_menu.png";
import b_my from "../assets/icon/b_my.png";
import b_search from "../assets/icon/b_search.png";
import g_calendar from "../assets/icon/g_calendar.png";
import g_home from "../assets/icon/g_home.png";
import g_menu from "../assets/icon/g_menu.png";
import g_my from "../assets/icon/g_my.png";
import g_search from "../assets/icon/g_search.png";
import FooterCss from "./footer.module.css";
import { NavLink, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className={FooterCss.footerWrapper}>
      <NavLink
        to="/menu"
        className={FooterCss.navItem}
      >
        {pathname === "/menu" ? (
          <img
            src={g_menu}
            alt=""
          />
        ) : (
          <img
            src={b_menu}
            alt=""
          />
        )}
      </NavLink>
      <NavLink
        to="/search"
        className={FooterCss.navItem}
      >
        {pathname === "/search" ? (
          <img
            src={g_search}
            alt=""
          />
        ) : (
          <img
            src={b_search}
            alt=""
          />
        )}
      </NavLink>
      <NavLink
        to="/home"
        className={FooterCss.navItem}
      >
        {pathname === "/home" ? (
          <img
            src={g_home}
            alt=""
          />
        ) : (
          <img
            src={b_home}
            alt=""
          />
        )}
      </NavLink>
      <NavLink
        to="/calendar"
        className={FooterCss.navItem}
      >
        {pathname === "/calendar" ? (
          <img
            src={g_calendar}
            alt=""
          />
        ) : (
          <img
            src={b_calendar}
            alt=""
          />
        )}
      </NavLink>
      <NavLink
        to="/mypage"
        className={FooterCss.navItem}
      >
        {pathname === "/mypage" ? (
          <img
            src={g_my}
            alt=""
          />
        ) : (
          <img
            src={b_my}
            alt=""
          />
        )}
      </NavLink>
    </div>
  );
}
