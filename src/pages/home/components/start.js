import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import startCss from "./start.module.css";
import styled from "styled-components";
import m_muji from "../../../assets/menuimage/mono/muji.png";
import m_uniqlo from "../../../assets/menuimage/mono/uniqlo.png";
import m_beanpole from "../../../assets/menuimage/mono/beanpole.png";
import m_yankee from "../../../assets/menuimage/mono/yankee.png";
import beanpole from "../../../assets/menuimage/beanpole.png";
import yankee from "../../../assets/menuimage/yankee.png";
import muji from "../../../assets/menuimage/muji.png";
import uniqlo from "../../../assets/menuimage/uniqlo.png";

const OPTIONS_M = [
  { value: "01", name: "1월" },
  { value: "02", name: "2월" },
  { value: "03", name: "3월" },
  { value: "04", name: "4월" },

  { value: "05", name: "5월" },
  { value: "06", name: "6월" },
  { value: "07", name: "7월" },
  { value: "08", name: "8월" },
  { value: "09", name: "9월" },
  { value: "10", name: "10월" },
  { value: "11", name: "11월" },
  { value: "12", name: "12월" },
];

const OPTIONS_D = [
  { value: "01", name: "1일" },
  { value: "02", name: "2일" },
  { value: "03", name: "3일" },
  { value: "04", name: "4일" },

  { value: "05", name: "5일" },
  { value: "06", name: "6일" },
  { value: "07", name: "7일" },
  { value: "08", name: "8일" },
  { value: "09", name: "9일" },
  { value: "10", name: "10일" },
  { value: "11", name: "11일" },
  { value: "12", name: "12일" },

  { value: "13", name: "13일" },
  { value: "14", name: "14일" },
  { value: "15", name: "15일" },
  { value: "16", name: "16일" },
  { value: "17", name: "17일" },
  { value: "18", name: "18일" },
  { value: "19", name: "19일" },
  { value: "20", name: "20일" },
  { value: "21", name: "21일" },
  { value: "22", name: "22일" },
  { value: "23", name: "23일" },
  { value: "24", name: "24일" },
  { value: "25", name: "25일" },
  { value: "26", name: "26일" },
  { value: "27", name: "27일" },
  { value: "28", name: "28일" },
  { value: "29", name: "29일" },
  { value: "30", name: "30일" },
  { value: "31", name: "31일" },
];

const SelectBox = (props) => {
  const handleChange = (e) => {
    // event handler
    console.log(e.target.value);
  };

  return (
    <select onChange={handleChange}>
      {props.options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          defaultValue={props.defaultValue === option.value}
        >
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default function Start({ isShowProfile, setProfile }) {
  const [step, setStep] = useState(1);
  const [keyword, setKeyword] = useState([
    {
      id: "무인양품",
      isActive: false,
      m_image: m_muji,
      image: muji,
    },
    {
      id: "유니클로",
      isActive: false,
      m_image: m_uniqlo,
      image: uniqlo,
    },
    {
      id: "빈폴",
      isActive: false,
      m_image: m_beanpole,
      image: beanpole,
    },
    {
      id: "양키캔들",
      isActive: false,
      m_image: m_yankee,
      image: yankee,
    },
  ]);

  function onKeywordClick(index) {
    const newList = [...keyword];
    newList[index].isActive = !newList[index].isActive;
    setKeyword(newList);
  }

  return (
    <div
      className={startCss.main}
      style={{
        bottom: isShowProfile === true ? "0" : "-100%",
      }}
    >
      <div className={startCss.slideWrapper}>
        <div
          className={startCss.firstStep}
          style={{
            marginLeft: step === 1 ? "0" : "-100vw",
          }}
        >
          <p className={startCss.text}>당신에 대해 알려주세요!</p>
          <div className={startCss.container}>
            <div className={startCss.inputWrapper}>
              <p className={startCss.inputTitle}>이름</p>
              <input />
            </div>

            <div className={startCss.birthWrapper}>
              <p className={startCss.inputTitle}>생년월일</p>
              <div className={startCss.birth}>
                <input />
                <SelectBox options={OPTIONS_M}></SelectBox>
                <SelectBox options={OPTIONS_D}></SelectBox>
              </div>
            </div>

            <div className={startCss.inputWrapper}></div>
          </div>
          <footer className={startCss.footer}>
            <button
              className={startCss.btn}
              onClick={() => {
                setStep(2);
              }}
            >
              다음으로
            </button>
          </footer>
        </div>

        <div className={startCss.secondStep}>
          <p className={startCss.text}>
            좋아하는 브랜드를
            <br />
            <strong>3개 이상</strong> 골라주세요!
          </p>
          <div className={startCss.container}>
            <div className={startCss.keywordSelectedWrapper}>
              {keyword.map((item, i) => {
                if (item.isActive === true) {
                  return (
                    <div
                      key={i}
                      style={{
                        fontWeight: "500",
                        textAlign: "center",
                        gridTemplatesColumn: "auto auto",
                      }}
                      className={startCss.keywordSelected}
                      onClick={() => onKeywordClick(i)}
                    >
                      <img src={item.image} />
                      <p>{item.id}</p>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={i}
                      style={{
                        color: "#dddddd",
                        textAlign: "center",
                        gridTemplatesColumn: "auto auto",
                      }}
                      className={startCss.keywordSelected}
                      onClick={() => onKeywordClick(i)}
                    >
                      <img src={item.m_image} />
                      <p>{item.id}</p>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <footer className={startCss.footer}>
            <button
              className={startCss.btn}
              onClick={() => {
                setProfile();
              }}
            >
              시작하기
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
