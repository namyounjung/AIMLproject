import React from "react";
import HomeCss from "./home.module.css";
import my from "../../../src/assets/icon/person.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  const now = new Date();
  const y = now.getFullYear();
  let m = now.getMonth();
  const d = now.getDate();

  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  m = month[m];
  const dayOfWeek = week[now.getDay()];

  return (
    <div className={HomeCss.header}>
      {m} {d} {dayOfWeek}
      <NavLink to="/mypage">
        <img src={my} />
      </NavLink>
    </div>
  );
}
