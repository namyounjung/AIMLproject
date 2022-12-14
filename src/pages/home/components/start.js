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
import m_newbalance from "../../../assets/menuimage/mono/nb.png";
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
import newbalance from "../../../assets/menuimage/nb.png";
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
  { value: "01", name: "1???" },
  { value: "02", name: "2???" },
  { value: "03", name: "3???" },
  { value: "04", name: "4???" },

  { value: "05", name: "5???" },
  { value: "06", name: "6???" },
  { value: "07", name: "7???" },
  { value: "08", name: "8???" },
  { value: "09", name: "9???" },
  { value: "10", name: "10???" },
  { value: "11", name: "11???" },
  { value: "12", name: "12???" },
];

const OPTIONS_D = [
  { value: "01", name: "1???" },
  { value: "02", name: "2???" },
  { value: "03", name: "3???" },
  { value: "04", name: "4???" },

  { value: "05", name: "5???" },
  { value: "06", name: "6???" },
  { value: "07", name: "7???" },
  { value: "08", name: "8???" },
  { value: "09", name: "9???" },
  { value: "10", name: "10???" },
  { value: "11", name: "11???" },
  { value: "12", name: "12???" },

  { value: "13", name: "13???" },
  { value: "14", name: "14???" },
  { value: "15", name: "15???" },
  { value: "16", name: "16???" },
  { value: "17", name: "17???" },
  { value: "18", name: "18???" },
  { value: "19", name: "19???" },
  { value: "20", name: "20???" },
  { value: "21", name: "21???" },
  { value: "22", name: "22???" },
  { value: "23", name: "23???" },
  { value: "24", name: "24???" },
  { value: "25", name: "25???" },
  { value: "26", name: "26???" },
  { value: "27", name: "27???" },
  { value: "28", name: "28???" },
  { value: "29", name: "29???" },
  { value: "30", name: "30???" },
  { value: "31", name: "31???" },
];

const SelectBox = (props) => {
  return (
    <select
      // value={props.value}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
    >
      {props.options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          // defaultValue={props.defaultValue === option.value}
          selected={props.value === option.value}
        >
          {option.name}
        </option>
      ))}
    </select>
  );
};

function getInitKeywordList() {
  return [
    {
      id: "muji",
      name: "????????????",
      isActive: false,
      m_image: m_muji,
      image: muji,
      relatedBrands: ["topten", "hnm", "spao", "eight", "uniqlo", "zara"],
      category: "spa",
      tag: ["SPA", "Basic", "Simple"],
    },
    {
      id: "uniqlo",
      name: "????????????",
      isActive: false,
      m_image: m_uniqlo,
      image: uniqlo,
      relatedBrands: ["topten", "hnm", "spao", "muji", "eight", "zara"],
      category: "spa",
      tag: ["SPA", "Basic", "Simple"],
    },
    {
      id: "spao",
      name: "?????????",
      isActive: false,
      m_image: m_spao,
      image: spao,
      relatedBrands: ["topten", "hnm", "muji", "eight", "uniqlo", "zara"],
      category: "spa",
      tag: ["SPA", "Basic", "Simple"],
    },
    {
      id: "topten",
      name: "??????",
      isActive: false,
      m_image: m_topten,
      image: topten,
      relatedBrands: ["hnm", "spao", "muji", "eight", "uniqlo", "zara"],
      category: "spa",
      tag: ["SPA", "Basic", "Simple"],
    },
    {
      id: "beanpole",
      name: "??????",
      isActive: false,
      m_image: m_beanpole,
      image: beanpole,
      relatedBrands: ["polo", "tomboy"],
      category: "basic",
      tag: ["Normal", "Classic", "Modern"],
    },
    {
      id: "polo",
      name: "??????",
      isActive: false,
      m_image: m_polo,
      image: polo,
      relatedBrands: ["beanpole", "tomboy"],
      category: "basic",
      tag: ["Normal", "Classic", "Modern"],
    },
    {
      id: "tomboy",
      name: "?????????",
      isActive: false,
      m_image: m_tomboy,
      image: tomboy,
      relatedBrands: ["polo", "beanpole"],
      category: "basic",
      tag: ["Normal", "Classic", "Modern"],
    },
    {
      id: "yankee",
      name: "????????????",
      isActive: false,
      m_image: m_yankee,
      image: yankee,
      relatedBrands: ["yankee", "kbp"],
      category: "etc",
      tag: ["Unique", "Sensible ", "Fragrant"],
    },
    {
      id: "adidas",
      name: "????????????",
      isActive: false,
      m_image: m_adidas,
      image: adidas,
      relatedBrands: ["nike", "xexymix", "nb", "fila", "north"],
      category: "sports",
      tag: ["Sports", "Casual", "Outdoor"],
    },
    {
      id: "nike",
      name: "?????????",
      isActive: false,
      m_image: m_nike,
      image: nike,
      relatedBrands: ["adidas", "xexymix", "nb", "fila", "north"],
      category: "sports",
      tag: ["Sports", "Casual", "Outdoor"],
    },
    {
      id: "nb",
      name: "????????????",
      isActive: false,
      m_image: m_newbalance,
      image: newbalance,
      relatedBrands: ["adidas", "nike", "xexymix", "fila", "north"],
      category: "sports",
      tag: ["Sports", "Casual", "Outdoor"],
    },
    {
      id: "north",
      name: "???????????????",
      isActive: false,
      m_image: m_north,
      image: north,
      relatedBrands: ["adidas", "nike", "xexymix", "nb", "fila"],
      category: "sports",
      tag: ["Sports", "Casual", "Outdoor"],
    },
    {
      id: "fila",
      name: "??????",
      isActive: false,
      m_image: m_fila,
      image: fila,
      relatedBrands: ["adidas", "nike", "xexymix", "nb", "north"],
      category: "sports",
      tag: ["Sports", "Casual", "Outdoor"],
    },
    {
      id: "xexymix",
      name: "????????????",
      isActive: false,
      m_image: m_xexymix,
      image: xexymix,
      relatedBrands: ["adidas", "nike", "nb", "fila", "north"],
      category: "sports",
      tag: ["Sports", "Casual", "Outdoor"],
    },
    {
      id: "ikea",
      name: "?????????",
      isActive: false,
      m_image: m_ikea,
      image: ikea,
      relatedBrands: ["kbp", "ikea"],
      category: "etc",
      tag: ["Reasonable", "Modern", "Indoor"],
    },
    {
      id: "kbp",
      name: "??????????????????",
      isActive: false,
      m_image: m_kbp,
      image: kbp,
      relatedBrands: ["yankee", "ikea"],
      category: "etc",
      tag: ["Unique", "Sensitive", "Fabric"],
    },
  ];
}
function getInitUser() {
  return {
    name: "",
    birthYear: "",
    birthMonth: "01",
    birthDay: "01",
    favoriteBrandList: [],
  };
}
export default function Start({ isShowProfile, setIsShowProfileFalse }) {
  const [step, setStep] = useState(1);
  const [keyword, setKeyword] = useState(getInitKeywordList());
  const [user, setUser] = useImmer(getInitUser());

  function onKeywordClick(index) {
    const newList = [...keyword];
    newList[index].isActive = !newList[index].isActive;
    setKeyword(newList);
  }

  function onSubmitClick() {
    if (user.favoriteBrandList.length >= 3) {
      localStorage.setItem("user", JSON.stringify(user));
      setIsShowProfileFalse();
      setTimeout(() => {
        setStep(1);
        setKeyword(getInitKeywordList());
        setUser(getInitUser());
      }, [1000]);
    }
  }

  function onNextClick() {
    if (
      user.name !== "" &&
      user.birthDay !== "" &&
      user.birthMonth !== "" &&
      user.birthYear !== ""
    ) {
      setStep(2);
    }
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
          <p className={startCss.text}>????????? ?????? ???????????????!</p>
          <div className={startCss.container}>
            <div className={startCss.inputWrapper}>
              <p className={startCss.inputTitle}>??????</p>
              <input
                value={user.name}
                onChange={(e) => {
                  setUser((draft) => {
                    draft.name = e.target.value;
                  });
                }}
              />
            </div>

            <div className={startCss.birthWrapper}>
              <p className={startCss.inputTitle}>????????????</p>
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
                  value={user.birthMonth}
                  options={OPTIONS_M}
                  onChange={(value) => {
                    setUser((draft) => {
                      draft.birthMonth = value;
                    });
                  }}
                />
                <SelectBox
                  value={user.birthDay}
                  options={OPTIONS_D}
                  onChange={(value) => {
                    setUser((draft) => {
                      draft.birthDay = value;
                    });
                  }}
                />
              </div>
            </div>

            <div className={startCss.inputWrapper}></div>
          </div>
          <footer className={startCss.footer}>
            <button
              className={startCss.btn}
              onClick={onNextClick}
            >
              ????????????
            </button>
          </footer>
        </div>

        <div className={startCss.secondStep}>
          <p className={startCss.text}>
            ???????????? ????????????
            <br />
            <strong>3??? ??????</strong> ???????????????!
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
                      <p>{item.name}</p>
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
                      <p>{item.name}</p>
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
              ????????????
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
