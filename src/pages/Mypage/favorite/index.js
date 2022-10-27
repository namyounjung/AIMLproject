import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import favCss from "./favorite.module.css";
import { useImmer } from "use-immer";
import minus1 from "../../../assets/icon/minus1.png";
import minus2 from "../../../assets/icon/minus2.png";

import BrandList from "../../detail/object.js";

export default function FavIndex() {
  const user = localStorage.getItem("user");
  const parsedUser = JSON.parse(user);
  const [profile, setProfile] = useImmer({
    favorite: [],
  });
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    let favoriteList = [];
    parsedUser.favoriteBrandList.forEach((item) => {
      for (const obj of BrandList) {
        if (item === obj.brandname) {
          // favoriteList
          favoriteList.push(obj.brandname);
        }
      }
    });
    setProfile((draft) => {
      draft.favorite = favoriteList;
    });
  }, []);

  function onDeleteClick(item) {
    window.confirm(`${item}을 삭제하시겠습니까?`);
    setProfile((draft) => {
      draft.favorite = profile.favorite.filter((value) => value !== item);
    });
  }

  function onCompleteClick() {
    setIsEdit(false);
    const user = JSON.parse(localStorage.getItem("user"));
    user.favoriteBrandList = profile.favorite;
    localStorage.setItem("user", JSON.stringify(user));
  }

  return (
    <div>
      <div className={favCss.header}>Favorite Brands</div>
      <div className={favCss.subject}>
        <p className={favCss.title}>즐겨찾기 목록</p>
        {isEdit === true ? (
          <p
            className={favCss.edit}
            onClick={onCompleteClick}
          >
            완료
          </p>
        ) : (
          <p
            className={favCss.edit}
            onClick={() => setIsEdit(true)}
          >
            편집
          </p>
        )}
      </div>
      <div className={favCss.wholeBrand}>
        {profile.favorite.map((item, i) => {
          return (
            <div
              className={favCss.brand}
              key={i}
            >
              <img
                src={require(`../../../assets/menuimage/${item}.png`)}
                alt=""
                className={favCss.brandimg}
              />
              <p className={favCss.TextTitle}>{item}</p>
              {isEdit === true ? (
                <img
                  src={minus1}
                  onClick={() => onDeleteClick(item)}
                />
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
