import brandsCss from "../brands.module.css";
import back from "../../../assets/icon/back.svg";
import { NavLink } from "react-router-dom";
import main from "../../../assets/image/nike2.svg";
import logoimg from "../../../assets/logo2/nike.svg";
// import url from 'http://www.mujikorea.net/';
import brandList from "../../detail/object.js";
import sun from "../../../assets/weather/sun.svg";
import rain from "../../../assets/weather/rain.svg";
import cloud from "../../../assets/weather/cloud.svg";
import data from "./nike_data.js";
import Saleweek from "../sale_weeks.js";

export default function Adidas() {
  return (
    <div className={brandsCss.brandsWrapper}>
      <div className={brandsCss.header}>
        <NavLink to={-1}>
          <img src={back} alt=" " />
        </NavLink>
        <div className={brandsCss.logo}>
          <img src={logoimg} />
        </div>
        {/* <input className={brandsCss.favorite} type="checkbox" checked={}/> */}
      </div>

      <div className={brandsCss.imageWrapper}>
        <a href="www.adidas.co.kr" target="_blank">
          <img src={main} alt=" " />
        </a>
        <div className={brandsCss.imgTextTop}>
          나이키 브랜드 페이지 <br />
          Just Do it!
        </div>
        <div className={brandsCss.imgTextBottom}>
          <div className={brandsCss.imgTextBBig}>전품목 10% 할인</div>
          <div className={brandsCss.imgTextBsmall}>
            10/30(금)-11/10(화) <br /> 나이키 멤버십 한정
          </div>
        </div>
      </div>
      <div className={brandsCss.tagWrapper}>
        {brandList[4].tag.map((tag, i) => {
          return <b className={brandsCss.tag}>#{tag}</b>;
        })}
      </div>
      <div className={brandsCss.saleTitle}>브랜드 세일 예보</div>
      <Saleweek data={data} />
    </div>
  );
}
