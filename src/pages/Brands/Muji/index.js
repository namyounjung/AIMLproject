import brandsCss from "../brands.module.css";
import back from "../../../assets/icon/back.svg";
import { NavLink } from "react-router-dom";
import main from "../../../assets/image/muji2.svg";
import logoimg from "../../../assets/logo2/muji.svg";
// import url from 'http://www.mujikorea.net/';
import "../../datail/object";
// import '../../../assets/image/tag';
// import { useTable } from 'react-table';
// import styled from 'styled-components';
import table from "../../../assets/weather/table.png";
import sun from "../../../assets/weather/sun.svg";
import rain from "../../../assets/weather/rain.svg";
import cloud from "../../../assets/weather/cloud.svg";

function Muji() {
  return (
    <div className={brandsCss.brandsWrapper}>
      <div className={brandsCss.header}>
        <NavLink to="/menu">
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
          지구에게도 사람에게도 좋은 <br />
          「기분 좋은 생활」의 실현
        </div>
        <div className={brandsCss.imgTextBottom}>
          <div className={brandsCss.imgTextBBig}>전품목 10% 할인</div>
          <div className={brandsCss.imgTextBsmall}>
            10/30(금) - 11/10(화) <br /> MUJI passport 회원 한정
          </div>
        </div>
      </div>

      <div className={brandsCss.tagWrapper}>
        <b className={brandsCss.tag}>#SPA</b>
        <b className={brandsCss.tag}>#Basic</b>
        <b className={brandsCss.tag}>#Simple</b>
      </div>

      {/* 태그로 브랜드 object.js 받아오는 법 구현하기 ㅠㅠ일단 직접 불러옴. */}

      <div className={brandsCss.saleTitle}>브랜드 세일 예보</div>
      <div className={brandsCss.saleWrapper}>
        <div className={brandsCss.saleTable}>
          <img
            src={table}
            alt=""
          />
          <div className={brandsCss.saleMonth}>
            <div className={brandsCss.saleMonth1}>
              9월
              <div className={brandsCss.weather}>
                <img src={sun} />
                50%
              </div>
            </div>

            <div className={brandsCss.saleMonth2}>
              10월
              <div className={brandsCss.weather}>
                <img src={rain} />
                5%
              </div>
            </div>

            <div className={brandsCss.saleMonth3}>
              11월
              <div className={brandsCss.weather}>
                <img src={cloud} />
                25%
              </div>
            </div>

            <div className={brandsCss.saleMonth4}>
              12월
              <div className={brandsCss.weather}>
                <img src={rain} />
                25%
              </div>
            </div>

            <div className={brandsCss.saleMonth5}>
              1월
              <div className={brandsCss.weather}>
                <img src={rain} />
                5%
              </div>
            </div>

            <div className={brandsCss.saleMonth6}>
              2월
              <div className={brandsCss.weather}>
                <img src={sun} />
                60%
              </div>
            </div>
          </div>
        </div>

        <div className={brandsCss.bottomWrapper}>
          해당 브랜드의 지난 할인 데이터를 분석하면 9월 할인율이 가장 높아요
        </div>
      </div>
    </div>
  );
}

export default Muji;
