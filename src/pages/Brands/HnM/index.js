import brandsCss from "../brands.module.css";
import back from "../../../assets/icon/back.svg";
import { NavLink } from "react-router-dom";
import main from "../../../assets/image/h&m.svg";
import logoimg from "../../../assets/logo2/h&m.svg";
// import url from 'http://www.mujikorea.net/';
import brandList from "../../detail/object.js";

export default function HnM() {
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
        <img
          src={main}
          alt=" "
        />
        <div className={brandsCss.imgTextTop}>
          H&M페이지입니다. <br />
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
    </div>
  );
}
