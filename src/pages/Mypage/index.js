import React, { useState } from "react";
import logo from "../../assets/logo/logo.svg";
import loginCss from "./login.module.css";
import { NavLink } from "react-router-dom";

function Login() {
  const [isActive, setIsActive] = useState("");

  return (
    <div className={loginCss.container}>
      <div className={loginCss.logo}>
        <img
          src={logo}
          name="logo"
        />
      </div>
      <div className={loginCss.inputWrapper}>
        <p className={loginCss.inputTitle}>ID</p>
        <input />
      </div>
      <div className={loginCss.inputWrapper}>
        <p className={loginCss.inputTitle}>Password</p>
        <input type="password" />
      </div>

      {/* 로그인 조건문 추가하자 */}
      <NavLink to="/login">
        <div className={loginCss.inputWrapper}>
          <button className={loginCss.button}>로그인</button>
        </div>
      </NavLink>

      <div className={loginCss.joinWrapper}>
        <NavLink to="/signup">
          {isActive === "signup" ? (
            <>
              <a className={loginCss.items}>회원가입</a>
            </>
          ) : (
            <>
              <a className={loginCss.items}>회원가입</a>
            </>
          )}
        </NavLink>

        <a className={loginCss.items}>아이디 찾기</a>
        <a className={loginCss.items}>비밀번호 찾기</a>
      </div>
    </div>
  );
}

export default Login;
