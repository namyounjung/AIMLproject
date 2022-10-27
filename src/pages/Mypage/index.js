import React, { useEffect, useState } from "react";
import logo from "../../assets/logo/g_long.png";
import setting from "../../assets/icon/setting.svg";
import loginCss from "./login.module.css";
import { NavLink } from "react-router-dom";
import userimg from "../../assets/icon/user_image.png";
import brandList from "../detail/object.js";
import tomboy from "../../assets/rec_logo/tomboy.png";
import kbp from "../../assets/rec_logo/kbp.png";
import uniqlo from "../../assets/rec_logo/uniqlo.png";
import eightsec from "../../assets/rec_logo/8sec.png";
import zara from "../../assets/rec_logo/zara.png";
import spao from "../../assets/rec_logo/spao.png";
import adidas from "../../assets/rec_logo/adidas.png";
import bar from "../../assets/icon/bar.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import BrandList from "../detail/object.js";
import { useImmer } from "use-immer";
import { useNavigate } from "react-router-dom";

export default function LoginIndex() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("");
  const [profile, setProfile] = useImmer({
    tag: [],
    favorite: [],
    recommend: [],
  });

  const user = localStorage.getItem("user");
  const parsedUser = JSON.parse(user);

  function getTopThreeTag(tagList) {
    // get count
    const result = tagList.reduce((accu, curr) => {
      accu[curr] = (accu[curr] || 0) + 1;
      return accu;
    }, {});
    // 내림차순 정렬
    let sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);
    let topthree = [];
    for (let element of sorted) {
      topthree.push(element[0]);
    }

    return [topthree[0], topthree[1], topthree[2]];
  }

  function ClickLogout() {
    localStorage.removeItem("user");
    navigate("/home");
  }

  useEffect(() => {
    let favoriteList = [];
    let tagList = [];
    let recommnedList = [];
    parsedUser.favoriteBrandList.forEach((item) => {
      for (const obj of BrandList) {
        if (item === obj.brandname) {
          // favoriteList
          favoriteList.push(obj.brandname);

          // tagList
          tagList = tagList.concat(obj.tag);

          // recommnedList
          const mergedRecommnedList = recommnedList.concat(obj.relatedBrands);
          recommnedList = mergedRecommnedList.filter(
            (item, pos) => mergedRecommnedList.indexOf(item) === pos
          );
        }
      }
    });
    setProfile((draft) => {
      draft.favorite = favoriteList;
      draft.tag = getTopThreeTag(tagList);
      draft.recommend = recommnedList;
    });
  }, []);

  return (
    <div className={loginCss.loginWrapper}>
      <div className={loginCss.header}>
        <img src={logo} />
      </div>
      <div className={loginCss.container}>
        <div className={loginCss.profile}>
          <img src={userimg} />
          <p className={loginCss.user}>{parsedUser.name}</p>
        </div>
        <div className={loginCss.tagWrapper}>
          {profile.tag.map((tag, i) => {
            return (
              <b
                key={i}
                className={loginCss.tag}
              >
                #{tag}
              </b>
            );
          })}
        </div>
      </div>
      <div className={loginCss.favorite}>
        <div className={loginCss.favtitle}>
          <p className={loginCss.title}>즐겨찾기 브랜드</p>

          <NavLink to={"/mypage/favorite"}>
            <p className={loginCss.btnShowAll}>전체보기</p>
          </NavLink>
        </div>
        <Swiper
          className={`${loginCss.swiper2} mySwiper`}
          spaceBetween={8}
          slidesPerView={3.4}
        >
          {profile.favorite.map((item, i) => {
            return (
              <SwiperSlide
                key={i}
                className={loginCss.swiperSlide}
              >
                <img
                  src={require(`../../assets/rec_logo/${item}.png`)}
                  alt=""
                />
                <div className={loginCss.swiperTextWrapper}>
                  <p className={loginCss.swiperTextTitle}>{item}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <hr className={loginCss.bar} />
      <div className={loginCss.calendar}>
        <div className={loginCss.caltitle}>
          <p className={loginCss.title}>세일 캘린더</p>
          <NavLink to={"/calendar"}>
            <p className={loginCss.mycalendar}>내 캘린더</p>
          </NavLink>
        </div>
        <p>10월 셋째주 유니클로 세일(예상)</p>
        <p>10월 넷째주 톰보이 세일(예상)</p>
        <p>12월 첫째주 키티버니포니 세일</p>
      </div>
      <hr className={loginCss.bar} />
      <div className={loginCss.recommend}>
        <p className={loginCss.title}>맞춤 브랜드 추천</p>
        <Swiper
          className={`${loginCss.swiper2} mySwiper`}
          spaceBetween={8}
          slidesPerView={3.4}
        >
          {profile.recommend.map((item, i) => {
            return (
              <>
                <SwiperSlide
                  key={i}
                  className={loginCss.swiperSlide}
                >
                  <img
                    src={require(`../../assets/rec_logo/${item}.png`)}
                    alt=""
                  />
                  <div className={loginCss.swiperTextWrapper}>
                    <p className={loginCss.swiperTextTitle}>{item}</p>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
      <p
        className={loginCss.logout}
        onClick={ClickLogout}
      >
        로그아웃
      </p>
    </div>
  );
}
