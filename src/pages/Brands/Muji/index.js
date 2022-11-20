import brandsCss from "../brands.module.css";
import back from "../../../assets/icon/back.svg";
import { NavLink } from "react-router-dom";
import main from "../../../assets/image/muji.svg";
import logoimg from "../../../assets/logo2/muji.svg";
import fav_g from "../../../assets/icon/fav_green.svg";
import fav_w from "../../../assets/icon/fav_white.svg";
// import url from '';
import "../../detail/object";
// import '../../../assets/image/tag';
// import { useTable } from 'react-table';
// import styled from 'styled-components';
import table from "../../../assets/weather/table.png";
import sun from "../../../assets/weather/sun.svg";
import rain from "../../../assets/weather/rain.svg";
import cloud from "../../../assets/weather/cloud.svg";
import brandList from "../../detail/object.js";
import data from "./muji_data.js";
import Saleweek from "../sale_weeks.js";
import { useEffect, useState } from "react";

function Muji() {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleToggleFavoriteItem() {
    const user = localStorage.getItem("user");
    const parsedUser = JSON.parse(user);
    if (isFavorite === true) {
      parsedUser.favoriteBrandList = parsedUser.favoriteBrandList.filter(
        (value) => value !== "muji"
      );
      setIsFavorite(false);
    } else {
      parsedUser.favoriteBrandList.push("muji");
      setIsFavorite(true);
    }
    localStorage.setItem("user", JSON.stringify(parsedUser));
  }

  useEffect(() => {
    const user = localStorage.getItem("user");
    const parsedUser = JSON.parse(user);
    let favoriteList = [];
    parsedUser.favoriteBrandList.forEach((item) => {
      for (const obj of brandList) {
        if (item === obj.brandname) {
          // favoriteList
          favoriteList.push(obj.brandname);
        }
      }
    });
    favoriteList.length > 0 &&
    favoriteList.find((item) => {
      return item === "muji";
    })
      ? setIsFavorite(true)
      : setIsFavorite(false);
  }, []);

  return (
    <div className={brandsCss.brandsWrapper}>
      <div className={brandsCss.header}>
        <NavLink to={-1}>
          <img
            src={back}
            alt=" "
          />
        </NavLink>
        <div className={brandsCss.logo}>
          <img
            src={logoimg}
            alt=""
          />
        </div>
        {isFavorite ? (
          <img
            src={fav_g}
            className={brandsCss.favorite}
            onClick={handleToggleFavoriteItem}
            alt=""
          />
        ) : (
          <img
            src={fav_w}
            className={brandsCss.favorite}
            onClick={handleToggleFavoriteItem}
            alt=""
          />
        )}
      </div>

      <div className={brandsCss.imageWrapper}>
        <a
          href="http://www.mujikorea.net/"
          target="_blank"
        >
          <img
            src={main}
            alt=" "
          />
        </a>
        <div className={brandsCss.imgTextTop}>
          편안한 숙면 <br />
          나에게 맞는 침구 고르기
        </div>
        <div className={brandsCss.imgTextBottom}>
          <div className={brandsCss.imgTextBsmall}>편안한 휴식을 위한</div>
          <div className={brandsCss.imgTextBBig}>
            나만의 홈웨어&파자마 <br />
          </div>
        </div>
      </div>

      <div className={brandsCss.tagWrapper}>
        {brandList[0].tag.map((tag, i) => {
          return <b className={brandsCss.tag}>#{tag}</b>;
        })}
      </div>
      <div className={brandsCss.saleTitle}>브랜드 세일 예보</div>
      <Saleweek data={data} />
    </div>
  );
}

export default Muji;
