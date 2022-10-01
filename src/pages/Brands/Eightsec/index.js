import brandsCss from "../brands.module.css";
import back from "../../../assets/icon/back.svg";
import { NavLink } from "react-router-dom";
import main from "../../../assets/image/eight.svg";
import logoimg from "../../../assets/logo2/eight.svg";
// import url from 'http://www.mujikorea.net/';
import brandList from "../../detail/object.js";
import sun from "../../../assets/weather/sun.svg";
import rain from "../../../assets/weather/rain.svg";
import cloud from "../../../assets/weather/cloud.svg";

export default function Eight() {
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
      </div>

      <div className={brandsCss.imageWrapper}>
        <a
          href="https://www.ssfshop.com/8Seconds"
          target="_blank"
        >
          <img
            src={main}
            alt=" "
          />
        </a>
        <div className={brandsCss.imgTextTop}>
          에잇세컨즈 페이지 <br />
          「기분 좋은 생활」의 실현
        </div>
        <div className={brandsCss.imgTextBottom}>
          <div className={brandsCss.imgTextBBig}>전품목 10% 할인</div>
          <div className={brandsCss.imgTextBsmall}>
            10/30(금)-11/10(화) <br /> SSFSHOP 회원 한정
          </div>
        </div>
      </div>
      <div className={brandsCss.tagWrapper}>
        {brandList[16].tag.map((tag, i) => {
          return <b className={brandsCss.tag}>#{tag}</b>;
        })}
      </div>
      <div className={brandsCss.saleTitle}>브랜드 세일 예보</div>
      <div className={brandsCss.saleWrapper}>
        <dl>
          <dt>9월</dt>
          <dd>
            <img src={sun} />
            50%
          </dd>
        </dl>
        <dl>
          <dt>10월</dt>
          <dd>
            <img src={sun} />
            50%
          </dd>
        </dl>
        <dl>
          <dt>11월</dt>
          <dd>
            <img src={sun} />
            50%
          </dd>
        </dl>
        <dl>
          <dt>12월</dt>
          <dd>
            <img src={sun} />
            50%
          </dd>
        </dl>
        <dl>
          <dt>1월</dt>
          <dd>
            <img src={sun} />
            50%
          </dd>
        </dl>
      </div>
    </div>
  );
}
