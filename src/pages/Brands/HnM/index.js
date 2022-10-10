import brandsCss from "../brands.module.css";
import back from "../../../assets/icon/back.svg";
import { NavLink } from "react-router-dom";
import main from "../../../assets/image/hnm.svg";
import logoimg from "../../../assets/logo2/hnm.svg";
// import url from 'http://www.mujikorea.net/';
import brandList from "../../detail/object.js";
import sun from "../../../assets/weather/sun.svg";
import rain from "../../../assets/weather/rain.svg";
import cloud from "../../../assets/weather/cloud.svg";

export default function HnM() {
  return (
    <div className={brandsCss.brandsWrapper}>
      <div className={brandsCss.header}>
        <NavLink to={-1}>
          <a
            href="https://www2.hm.com/ko_kr/index.html"
            target="_blank"
          >
            <img
              src={main}
              alt=" "
            />
          </a>
        </NavLink>
        <div className={brandsCss.logo}>
          <img src={logoimg} />
        </div>
      </div>

      <div className={brandsCss.imageWrapper}>
        <img
          src={main}
          alt=" "
        />
        <div className={brandsCss.imgTextTop}>
          hnm페이지입니다. <br />
          안녕하세요
        </div>
        <div className={brandsCss.imgTextBottom}>
          <div className={brandsCss.imgTextBBig}>전품목 최대 50% 할인</div>
          <div className={brandsCss.imgTextBsmall}>
            10/30(금)-11/10(화) <br /> 3만원 이상 구매시 무료배송
          </div>
        </div>
      </div>
      <div className={brandsCss.tagWrapper}>
        {brandList[11].tag.map((tag, i) => {
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
