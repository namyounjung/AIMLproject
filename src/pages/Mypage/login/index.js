import React, { useState } from "react";
import logo from "../../../assets/logo/g_long.png";
import setting from "../../../assets/icon/setting.svg";
import loginCss from "./login.module.css";
import { NavLink } from "react-router-dom";
import userimg from "../../../assets/icon/user_image.png";
import brandList from "../../detail/object.js";
import tomboy from "../../../assets/rec_logo/tomboy.png";
import kbp from "../../../assets/rec_logo/kitty.png";
import uniqlo from "../../../assets/rec_logo/uniqlo.png";
import eightsec from "../../../assets/rec_logo/8sec.png";
import zara from "../../../assets/rec_logo/zara.png";
import spao from "../../../assets/rec_logo/spao.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function LoginIndex() {
  const [isActive, setIsActive] = useState("");

  return (
    <div className={loginCss.loginWrapper}>
      <div className={loginCss.header}>
        <img src={logo} />
      </div>
      <div className={loginCss.container}>
        <div className={loginCss.profile}>
          <img src={userimg} />
          <p className={loginCss.user}>새얀</p>
        </div>
        <div className={loginCss.tagWrapper}>
          {brandList[0].tag.map((tag, i) => {
            return <b className={loginCss.tag}>#{tag}</b>;
          })}
        </div>
      </div>
      <div className={loginCss.favorite}>
        <div className={loginCss.favtitle}>
          <p className={loginCss.title}>즐겨찾기 브랜드</p>
          <p className={loginCss.btnShowAll}>전체보기</p>
        </div>
        <Swiper
          className={`${loginCss.swiper2} mySwiper`}
          modules={[Autoplay, Pagination]}
          spaceBetween={8}
          slidesPerView={3.4}
        >
          <SwiperSlide className={loginCss.swiperSlide}>
            <img
              src={tomboy}
              alt=""
            />
            <div className={loginCss.swiperTextWrapper}>
              <p className={loginCss.swiperTextTitle}>스튜디오 톰보이</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={loginCss.swiperSlide}>
            <img
              src={kbp}
              alt=""
            />
            <div className={loginCss.swiperTextWrapper}>
              <p className={loginCss.swiperTextTitle}>키티버니포니</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={loginCss.swiperSlide}>
            <img
              src={uniqlo}
              alt=""
            />
            <div className={loginCss.swiperTextWrapper}>
              <p className={loginCss.swiperTextTitle}>유니클로</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={loginCss.calendar}>
        <p className={loginCss.title}>세일 캘린더</p>
        <p>내 캘린더</p>
        <p>10월 셋째주 유니클로 세일(예상)</p>
        <p>10월 넷째주 톰보이 세일(예상)</p>
        <p>12월 첫째주 키티버니포니 세일</p>
      </div>
      <div className={loginCss.calendar}>
        <p className={loginCss.title}>맞춤 브랜드 추천</p>
        <Swiper
          className={`${loginCss.swiper2} mySwiper`}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            type: "fraction",
          }}
          spaceBetween={5}
          slidesPerView={3}
        >
          <SwiperSlide className={loginCss.swiperSlide}>
            <img
              src={eightsec}
              alt=""
            />
            <div className={loginCss.swiperTextWrapper}>
              <p className={loginCss.swiperTextTitle}>에잇세컨즈</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={loginCss.swiperSlide}>
            <img
              src={zara}
              alt=""
            />
            <div className={loginCss.swiperTextWrapper}>
              <p className={loginCss.swiperTextTitle}>ZARA</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={loginCss.swiperSlide}>
            <img
              src={spao}
              alt=""
            />
            <div className={loginCss.swiperTextWrapper}>
              <p className={loginCss.swiperTextTitle}>스파오</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
