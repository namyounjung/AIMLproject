import brandsCss from "../brands.module.css";
import back from "../../../assets/icon/back.svg";
import { NavLink } from "react-router-dom";
import main from "../../../assets/image/xexymix.svg";
import logoimg from "../../../assets/logo2/xexymix.svg";
import brandList from "../../detail/object.js";
// import url from 'http://www.mujikorea.net/';

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
        <img
          src={main}
          alt=" "
        />
        <div className={brandsCss.imgTextTop}>
          젝시믹스 페이지 <br />
          「기분 좋은 생활」의 실현
        </div>
        <div className={brandsCss.imgTextBottom}>
          <div className={brandsCss.imgTextBBig}>전품목 10% 할인</div>
          <div className={brandsCss.imgTextBsmall}>
            10/30(금)-11/10(화) <br /> 젝시믹스 회원 한정
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
