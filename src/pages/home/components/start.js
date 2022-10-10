import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import startCss from "./start.module.css";
import styled from "styled-components";
import m_muji from "../../../assets/menuimage/mono/muji.png";
import m_uniqlo from "../../../assets/menuimage/mono/uniqlo.png";
import m_beanpole from "../../../assets/menuimage/mono/beanpole.png";
import m_yankee from "../../../assets/menuimage/mono/yankee.png";
import m_adidas from "../../../assets/menuimage/mono/adidas.png";
import m_eight from "../../../assets/menuimage/mono/eight.png";
import m_fila from "../../../assets/menuimage/mono/fila.png";
import m_ikea from "../../../assets/menuimage/mono/ikea.png";
import m_kbp from "../../../assets/menuimage/mono/kbp.png";
import m_newbalance from "../../../assets/menuimage/mono/newbalance.png";
import m_nike from "../../../assets/menuimage/mono/nike.png";
import m_north from "../../../assets/menuimage/mono/north.png";
import m_polo from "../../../assets/menuimage/mono/polo.png";
import m_spao from "../../../assets/menuimage/mono/spao.png";
import m_tomboy from "../../../assets/menuimage/mono/tomboy.png";
import m_topten from "../../../assets/menuimage/mono/topten.png";
import m_xexymix from "../../../assets/menuimage/mono/xexymix.png";
import m_zara from "../../../assets/menuimage/mono/zara.png";
import adidas from "../../../assets/menuimage/adidas.png";
import eight from "../../../assets/menuimage/eight.png";
import fila from "../../../assets/menuimage/fila.png";
import ikea from "../../../assets/menuimage/ikea.png";
import kbp from "../../../assets/menuimage/kbp.png";
import newbalance from "../../../assets/menuimage/newbalance.png";
import nike from "../../../assets/menuimage/nike.png";
import north from "../../../assets/menuimage/north.png";
import polo from "../../../assets/menuimage/polo.png";
import spao from "../../../assets/menuimage/spao.png";
import tomboy from "../../../assets/menuimage/tomboy.png";
import topten from "../../../assets/menuimage/topten.png";
import xexymix from "../../../assets/menuimage/xexymix.png";
import zara from "../../../assets/menuimage/zara.png";
import beanpole from "../../../assets/menuimage/beanpole.png";
import yankee from "../../../assets/menuimage/yankee.png";
import muji from "../../../assets/menuimage/muji.png";
import uniqlo from "../../../assets/menuimage/uniqlo.png";
import { useImmer } from "use-immer";
import { immerable } from "immer";

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
    props.onChange(e.target.value);
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

export default function Start({ isShowProfile, setIsShowProfile }) {
  const [step, setStep] = useState(1);
  const [keyword, setKeyword] = useState([
    {
      id: "muji",
      name: "무인양품",
      isActive: false,
      m_image: m_muji,
      image: muji,
      relatedBrands: ["topten", "hnm", "spao", "eight", "uniqlo", "zara"],
      category: "spa",
      tag: ["SPA", "Basic", "Simple"],
    },
    {
      id: "uniqlo",
      name: "유니클로",
      isActive: false,
      m_image: m_uniqlo,
      image: uniqlo,
      relatedBrands: ["topten", "hnm", "spao", "muji", "eight", "zara"],
      category: "spa",
      tag: ["SPA", "Basic", "Simple"],
    },
    {
      id: "spao",
      name: "스파오",
      isActive: false,
      m_image: m_spao,
      image: spao,
      relatedBrands: ["topten", "hnm", "muji", "eight", "uniqlo", "zara"],
      category: "spa",
      tag: ["SPA", "Basic", "Simple"],
    },
    {
      id: "topten",
      name: "탑텐",
      isActive: false,
      m_image: m_topten,
      image: topten,
      relatedBrands: ["hnm", "spao", "muji", "eight", "uniqlo", "zara"],
      category: "spa",
      tag: ["SPA", "Basic", "Simple"],
    },
    {
      id: "beanpole",
      name: "빈폴",
      isActive: false,
      m_image: m_beanpole,
      image: beanpole,
      relatedBrands: ["polo", "tomboy"],
      category: "basic",
      tag: ["Normal", "Classic", "Modern"],
    },
    {
      id: "polo",
      name: "폴로",
      isActive: false,
      m_image: m_polo,
      image: polo,
      relatedBrands: ["beanpole", "tomboy"],
      category: "basic",
      tag: ["Normal", "Classic", "Modern"],
    },
    {
      id: "tomboy",
      name: "톰보이",
      isActive: false,
      m_image: m_tomboy,
      image: tomboy,
      relatedBrands: ["polo", "beanpole"],
      category: "basic",
      tag: ["Normal", "Classic", "Modern"],
    },
    {
      id: "yankee",
      name: "양키캔들",
      isActive: false,
      m_image: m_yankee,
      image: yankee,
      relatedBrands: ["yankee", "kbp"],
      category: "etc",
      tag: ["Unique", "Sensible ", "Fragrant"],
    },
    {
      id: "adidas",
      name: "아디다스",
      isActive: false,
      m_image: m_adidas,
      image: adidas,
      relatedBrands: ["nike", "xexymix", "nb", "fila", "north"],
      category: "sports",
      tag: ["Sports", "Casual", "Outdoor"],
    },
    {
      id: "nike",
      name: "나이키",
      isActive: false,
      m_image: m_nike,
      image: nike,
      relatedBrands: ["adidas", "xexymix", "nb", "fila", "north"],
      category: "sports",
      tag: ["Sports", "Casual", "Outdoor"],
    },
    {
      id: "nb",
      name: "뉴발란스",
      isActive: false,
      m_image: m_newbalance,
      image: newbalance,
      relatedBrands: ["adidas", "nike", "xexymix", "fila", "north"],
      category: "sports",
      tag: ["Sports", "Casual", "Outdoor"],
    },
    {
      id: "north",
      name: "노스페이스",
      isActive: false,
      m_image: m_north,
      image: north,
      relatedBrands: ["adidas", "nike", "xexymix", "nb", "fila"],
      category: "sports",
      tag: ["Sports", "Casual", "Outdoor"],
    },
    {
      id: "fila",
      name: "휠라",
      isActive: false,
      m_image: m_fila,
      image: fila,
      relatedBrands: ["adidas", "nike", "xexymix", "nb", "north"],
      category: "sports",
      tag: ["Sports", "Casual", "Outdoor"],
    },
    {
      id: "xexymix",
      name: "젝시믹스",
      isActive: false,
      m_image: m_xexymix,
      image: xexymix,
      relatedBrands: ["adidas", "nike", "nb", "fila", "north"],
      category: "sports",
      tag: ["Sports", "Casual", "Outdoor"],
    },
    {
      id: "ikea",
      name: "이케아",
      isActive: false,
      m_image: m_ikea,
      image: ikea,
      relatedBrands: ["kbp", "ikea"],
      category: "etc",
      tag: ["Reasonable", "Modern", "Indoor"],
    },
    {
      id: "kbp",
      name: "키티버니포니",
      isActive: false,
      m_image: m_kbp,
      image: kbp,
      relatedBrands: ["yankee", "ikea"],
      category: "etc",
      tag: ["Unique", "Sensitive", "Fabric"],
    },
  ]);

  function onKeywordClick(index) {
    const newList = [...keyword];
    newList[index].isActive = !newList[index].isActive;
    setKeyword(newList);
  }

  const [user, setUser] = useImmer({
    name: "",
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    favoriteBrandList: [],
  });

  function onSubmitClick() {
    localStorage.setItem("user", JSON.stringify(user));
    setIsShowProfile();
  }

  useEffect(() => {
    setUser((draft) => {
      draft.favoriteBrandList = keyword
        .filter((item) => item.isActive === true)
        .map((item) => item.id);
    });
  }, [keyword]);

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
              <input
                onChange={(e) => {
                  setUser((draft) => {
                    draft.name = e.target.value;
                  });
                }}
              />
            </div>

            <div className={startCss.birthWrapper}>
              <p className={startCss.inputTitle}>생년월일</p>
              <div className={startCss.birth}>
                <input
                  type="text"
                  value={user.birthYear}
                  onChange={(e) => {
                    setUser((draft) => {
                      draft.birthYear = e.target.value
                        .replace(/[^0-9]/g, "")
                        .slice(0, 4);
                    });
                  }}
                />
                <SelectBox
                  options={OPTIONS_M}
                  onChange={(value) => {
                    setUser((draft) => {
                      draft.birthMonth = value;
                    });
                  }}
                ></SelectBox>
                <SelectBox
                  options={OPTIONS_D}
                  onChange={(value) => {
                    setUser((draft) => {
                      draft.birthDay = value;
                    });
                  }}
                ></SelectBox>
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
              onClick={onSubmitClick}
            >
              시작하기
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
