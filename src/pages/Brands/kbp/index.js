import brandsCss from "../brands.module.css";
import back from "../../../assets/icon/back.svg";
import { NavLink } from "react-router-dom";
import main from "../../../assets/image/kbp.svg";
import logoimg from "../../../assets/logo2/kbp.svg";
// import url from 'http://www.mujikorea.net/';
import brandList from "../../detail/object.js";
import sun from "../../../assets/weather/sun.svg";
import rain from "../../../assets/weather/rain.svg";
import cloud from "../../../assets/weather/cloud.svg";
import data from "./kbp_data.js";
import Saleweek from "../sale_weeks.js";
import { useEffect, useState } from "react";
import fav_g from "../../../assets/icon/fav_green.svg";
import fav_w from "../../../assets/icon/fav_white.svg";

export default function KBP() {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleToggleFavoriteItem() {
    const user = localStorage.getItem("user");
    const parsedUser = JSON.parse(user);
    if (isFavorite === true) {
      parsedUser.favoriteBrandList = parsedUser.favoriteBrandList.filter(
        (value) => value !== "kbp"
      );
      setIsFavorite(false);
    } else {
      parsedUser.favoriteBrandList.push("kbp");
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
      return item === "kbp";
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
          <img src={logoimg} />
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
          href="http://www.kittybunnypony.com"
          target="_blank"
        >
          <img
            src={main}
            alt=" "
          />
        </a>
        <div className={brandsCss.imgTextTop}>
          kittybunnypony <br />
          Life In Patterns
        </div>
        <div className={brandsCss.imgTextBottom}>
          <div className={brandsCss.imgTextBBig}>Merry Christmas with KBP</div>
          <div className={brandsCss.imgTextBsmall}>
            ????????????????????? ???????????? 15?????? ???????????????
          </div>
        </div>
      </div>
      <div className={brandsCss.tagWrapper}>
        {brandList[8].tag.map((tag, i) => {
          return <b className={brandsCss.tag}>#{tag}</b>;
        })}
      </div>
      <div className={brandsCss.saleTitle}>????????? ?????? ??????</div>
      <Saleweek data={data} />
    </div>
  );
}
