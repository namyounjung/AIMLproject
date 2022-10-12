import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import brandList from "../../detail/object.js";
import favCss from "./favorite.module.css";
import { useImmer } from "use-immer";

export default function FavIndex() {
  const user = localStorage.getItem("user");
  const parsedUser = JSON.parse(user);
  const [profile, setProfile] = useImmer({
    tag: [],
    favorite: [],
    recommend: [],
  });
  return (
    <div>
      <div className={favCss.header}>Favorite Brands</div>
      <p className={favCss.edit}>편집</p>
    </div>
  );
}
