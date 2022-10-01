import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import startCss from "./start.module.css";

export default function Start({ isShowProfile }) {
  return (
    <div
      className={startCss.main}
      style={{
        bottom: isShowProfile === true ? "0" : "-100%",
      }}
    >
      <p className={startCss.text}>당신에 대해 알려주세요!</p>
      <footer className={startCss.footer}>
        <button className={startCss.btn}>다음으로</button>
      </footer>
    </div>
  );
}
