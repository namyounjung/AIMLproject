import React, { useState } from "react";
import searchingCss from "./searching.module.css";
import back from "../../../assets/icon/back.svg";
import eight from "../../../../src/assets/searchimg/eight.png";
import adidas from "../../../../src/assets/searchimg/adidas.png";
import beanpole from "../../../../src/assets/searchimg/beanpole.png";
import muji from "../../../../src/assets/searchimg/muji.png";
import kbp from "../../../../src/assets/searchimg/kbp.png";
import nb from "../../../../src/assets/searchimg/nb.png";
import north from "../../../../src/assets/searchimg/north.png";
import polo from "../../../../src/assets/searchimg/polo.png";
import spao from "../../../../src/assets/searchimg/spao.png";
import tomboy from "../../../../src/assets/searchimg/tomboy.png";
import topten from "../../../../src/assets/searchimg/topten.png";
import uniqlo from "../../../../src/assets/searchimg/uniqlo.png";
import xexymix from "../../../../src/assets/searchimg/xexymix.png";
import zara from "../../../../src/assets/searchimg/zara.png";
import fila from "../../../../src/assets/searchimg/fila.png";
import nike from "../../../../src/assets/searchimg/nike.png";
import yankee from "../../../../src/assets/searchimg/yankee.png";
import ikea from "../../../../src/assets/searchimg/ikea.png";
import hnm from "../../../../src/assets/searchimg/hnm.png";
import magnify from "../../../../src/assets/icon/magnify.png";
import fav_green from "../../../../src/assets/icon/fav_green.svg";
import fav_white from "../../../../src/assets/icon/fav_white.svg";
import { NavLink, useLocation } from "react-router-dom";

export default function Searching() {
  const [search, setSearch] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  const brandlist = [
    {
      id: "Eightsec",
      searchWord: ["에잇", "에잇세컨즈", "8", "eight seconds"],
      imgName: eight,
    },
    {
      id: "adidas",
      searchWord: ["아디다스", "adidas"],
      imgName: adidas,
    },
    {
      id: "Beanpole",
      searchWord: ["빈폴", "beanpole"],
      imgName: beanpole,
    },
    {
      id: "HnM",
      searchWord: ["hnm", "hnm", "hm"],
      imgName: hnm,
    },
    {
      id: "nike",
      searchWord: ["nike", "나이키"],
      imgName: nike,
    },
    {
      id: "Muji",
      searchWord: ["Muji", "muji", "무인양품", "무지"],
      imgName: muji,
    },
    {
      id: "kbp",
      searchWord: ["kbp", "키티버니포니", "kittybunnypony"],
      imgName: kbp,
    },
    {
      id: "newbal",
      searchWord: ["newbalance", "뉴발란스", "nb"],
      imgName: nb,
    },
    {
      id: "north",
      searchWord: [
        "thenorthface",
        "노스페이스",
        "더노스페이스",
        "노스",
        "노페",
      ],
      imgName: north,
    },
    {
      id: "polo",
      searchWord: ["polo", "폴로", "폴로랄프로렌"],
      imgName: polo,
    },
    {
      id: "spao",
      searchWord: ["spao", "스파오"],
      imgName: spao,
    },
    {
      id: "tomboy",
      searchWord: ["tomboy", "톰보이"],
      imgName: tomboy,
    },
    {
      id: "topten",
      searchWord: ["topten", "탑텐", "top10"],
      imgName: topten,
    },
    {
      id: "uniqlo",
      searchWord: ["uniqlo", "유니클로"],
      imgName: uniqlo,
    },
    {
      id: "xexymix",
      searchWord: ["xexymix", "젝시믹스"],
      imgName: xexymix,
    },
    {
      id: "zara",
      searchWord: ["zara", "자라"],
      imgName: zara,
    },
    {
      id: "ikea",
      searchWord: ["ikea", "이케아"],
      imgName: ikea,
    },
    {
      id: "yankee",
      searchWord: ["yankee candle", "양키캔들", "yankee"],
      imgName: yankee,
    },
    {
      id: "fila",
      searchWord: ["fila", "휠라", "Fila"],
      imgName: fila,
    },
  ];
  return (
    <>
      <div className={searchingCss.back}>
        <NavLink to={-1}>
          <img
            src={back}
            alt=" "
          />
        </NavLink>
      </div>
      <div className={searchingCss.searchInputWrapper}>
        <input
          value={Searching}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <NavLink to={"Search/searching"}>
          <img
            src={magnify}
            className={searchingCss.searchInputIcon}
          />
        </NavLink>
      </div>
      <div className={searchingCss.brand}>
        <div
          className={searchingCss.itemWrapper}
          onClick={() => {}}
        >
          <NavLink to="/Brands/kbp">
            <img src={kbp} />
          </NavLink>
          {isFavorite === true ? (
            <img src={fav_white} />
          ) : (
            <img src={fav_green} />
          )}
        </div>
      </div>
    </>
  );
}
