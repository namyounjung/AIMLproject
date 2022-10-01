import brandsCss from "../brands.module.css";
import back from "../../../assets/icon/back.svg";
import { NavLink } from "react-router-dom";
import main from "../../../assets/image/uniqlo.svg";
import logoimg from "../../../assets/logo2/uniqlo.svg";
import brandList from "../../detail/object.js";
// import url from 'http://www.mujikorea.net/';
import sun from "../../../assets/weather/sun.svg";
import rain from "../../../assets/weather/rain.svg";
import cloud from "../../../assets/weather/cloud.svg";

export default function Uniqlo() {
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
          href="https://store-kr.uniqlo.com/"
          target="_blank"
        >
          <img
            src={main}
            alt=" "
          />
        </a>
        <div className={brandsCss.imgTextTop}>
          유니클로 페이지 <br />
          「기분 좋은 생활」의 실현
        </div>
        <div className={brandsCss.imgTextBottom}>
          <div className={brandsCss.imgTextBBig}>전품목 10% 할인</div>
          <div className={brandsCss.imgTextBsmall}>
            10/30(금)-11/10(화) <br /> 유니클로 앱 회원 한정
          </div>
        </div>
      </div>
      <div className={brandsCss.tagWrapper}>
        {brandList[17].tag.map((tag, i) => {
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
