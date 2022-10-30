import brandsCss from "../brands.module.css";
import back from "../../../assets/icon/back.svg";
import { NavLink } from "react-router-dom";
import main from "../../../assets/image/adidas.svg";
import logoimg from "../../../assets/logo2/adidas.svg";
// import url from '';
import brandList from "../../detail/object.js";
import sun from "../../../assets/weather/sun.svg";
import rain from "../../../assets/weather/rain.svg";
import cloud from "../../../assets/weather/cloud.svg";
import File from "../../../assets/csvfile/adidas_weekly.xlsx";
import data from "./data.js";
import Saleweek from "../sale_weeks.js";
import { useEffect, useState } from "react";
import fav_g from "../../../assets/icon/fav_green.svg";
import fav_w from "../../../assets/icon/fav_white.svg";
import readXlsxFile from "read-excel-file";

const map = {
  Num: "Num",
  Date: "Date",
  Probability: "Probability",
  Month: "Month1",
  Day: "Day1",
};

export default function Adidas() {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleToggleFavoriteItem() {
    const user = localStorage.getItem("user");
    const parsedUser = JSON.parse(user);
    if (isFavorite === true) {
      parsedUser.favoriteBrandList = parsedUser.favoriteBrandList.filter(
        (value) => value !== "adidas"
      );
      setIsFavorite(false);
    } else {
      parsedUser.favoriteBrandList.push("adidas");
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
      return item === "adidas";
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
          href="https://www.adidas.co.kr/"
          target="_blank"
        >
          <img
            src={main}
            alt=" "
          />
        </a>
        <div className={brandsCss.imgTextTop}>
          아디다스 브랜드 페이지 <br />
          「기분 좋은 생활」의 실현
        </div>
        <div className={brandsCss.imgTextBottom}>
          <div className={brandsCss.imgTextBBig}>전품목 10% 할인</div>
          <div className={brandsCss.imgTextBsmall}>
            10/30(금)-11/10(화) <br /> MUJI passport 회원 한정
          </div>
        </div>
      </div>
      <div className={brandsCss.tagWrapper}>
        {brandList[3].tag.map((tag, i) => {
          return <b className={brandsCss.tag}>#{tag}</b>;
        })}
      </div>

      {/* <input
        type="file"
        onChange={(e) => {
          console.log(e);
          readXlsxFile(e.target.files[0]).then((rows) => {
            // `rows` is an array of rows
            // each row being an array of cells.
            console.log(rows);
          });
        }}
      /> */}

      <div className={brandsCss.saleTitle}>브랜드 세일 예보</div>
      <Saleweek data={data} />
    </div>
  );
}
