import brandsCss from "../brands.module.css";
import back from "../../../assets/icon/back.svg";
import { NavLink } from "react-router-dom";
import main from "../../../assets/image/tomboy.svg";
import logoimg from "../../../assets/logo2/tomboy.svg";
// import url from 'http://www.mujikorea.net/';
import brandList from "../../detail/object.js";

export default function Tomboy() {
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
          톰보이 페이지 <br />
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
        {brandList[7].tag.map((tag, i) => {
          return <b className={brandsCss.tag}>#{tag}</b>;
        })}
      </div>
    </div>
  );
}
