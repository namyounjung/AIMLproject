import React, { useState } from "react";
import SearchCss from "./search.module.css";
import eightimg from "../../../src/assets/rank/8sec.png";
import adiimg from "../../../src/assets/rank/adidas.png";
import bpimg from "../../../src/assets/rank/beanpole.png";
import mjimg from "../../../src/assets/rank/muji.png";
import kbpimg from "../../../src/assets/rank/kbp.png";
import nbimg from "../../../src/assets/rank/newbal.png";
import northimg from "../../../src/assets/rank/north.png";
import poloimg from "../../../src/assets/rank/polo.png";
import spimg from "../../../src/assets/rank/spao.png";
import tbimg from "../../../src/assets/rank/tomboy.png";
import ttimg from "../../../src/assets/rank/topten.png";
import uniimg from "../../../src/assets/rank/uniqlo.png";
import ximg from "../../../src/assets/rank/xexymix.png";
import zaimg from "../../../src/assets/rank/zara.png";
import filaimg from "../../../src/assets/rank/fila.png";
import nikeimg from "../../../src/assets/rank/nike.png";
import ykimg from "../../../src/assets/rank/yankee.png";
import ikeaimg from "../../../src/assets/rank/ikea.png";
import hmimg from "../../../src/assets/rank/hnm.png";
import magnify from "../../../src/assets/icon/magnify.png";
import { NavLink, useLocation } from "react-router-dom";

export default function SearchIndex() {
  const [search, setSearch] = useState("");
  const brandlist = [
    {
      id: "Eightsec",
      searchWord: ["에잇", "에잇세컨즈", "8", "eight seconds"],
      imgName: eightimg,
    },
    {
      id: "adidas",
      searchWord: ["아디다스", "adidas"],
      imgName: adiimg,
    },
    {
      id: "Beanpole",
      searchWord: ["빈폴", "beanpole"],
      imgName: bpimg,
    },
    {
      id: "HnM",
      searchWord: ["hnm", "hnm", "hm"],
      imgName: hmimg,
    },
    {
      id: "nike",
      searchWord: ["nike", "나이키"],
      imgName: nikeimg,
    },
    {
      id: "Muji",
      searchWord: ["Muji", "muji", "무인양품", "무지"],
      imgName: mjimg,
    },
    {
      id: "kbp",
      searchWord: ["kbp", "키티버니포니", "kittybunnypony"],
      imgName: kbpimg,
    },
    {
      id: "newbal",
      searchWord: ["newbalance", "뉴발란스", "nb"],
      imgName: nbimg,
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
      imgName: northimg,
    },
    {
      id: "polo",
      searchWord: ["polo", "폴로", "폴로랄프로렌"],
      imgName: poloimg,
    },
    {
      id: "spao",
      searchWord: ["spao", "스파오"],
      imgName: spimg,
    },
    {
      id: "tomboy",
      searchWord: ["tomboy", "톰보이"],
      imgName: tbimg,
    },
    {
      id: "topten",
      searchWord: ["topten", "탑텐", "top10"],
      imgName: ttimg,
    },
    {
      id: "uniqlo",
      searchWord: ["uniqlo", "유니클로"],
      imgName: uniimg,
    },
    {
      id: "xexymix",
      searchWord: ["xexymix", "젝시믹스"],
      imgName: ximg,
    },
    {
      id: "zara",
      searchWord: ["zara", "자라"],
      imgName: zaimg,
    },
    {
      id: "ikea",
      searchWord: ["ikea", "이케아"],
      imgName: ikeaimg,
    },
    {
      id: "yankee",
      searchWord: ["yankee candle", "양키캔들", "yankee"],
      imgName: ykimg,
    },
    {
      id: "fila",
      searchWord: ["fila", "휠라", "Fila"],
      imgName: filaimg,
    },
  ];
  return (
    <div className={SearchCss.margin}>
      <div className={SearchCss.header}>Brand Ranking</div>

      <div className={SearchCss.searchInputWrapper}>
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <NavLink to={"/Search/searching"}>
          <img
            src={magnify}
            className={SearchCss.searchInputIcon}
          />
        </NavLink>
      </div>
      {/* {search === "" && <>검색어가 없습니다.</>} */}
      <div className={SearchCss.container}>
        {brandlist.slice(9).map((brand, i) => {
          return (
            <>
              <div className={SearchCss.rankimgWrapper}>
                <span className={SearchCss.ranktext}>
                  {i + 1}.{/* 검색 순위를 넣고파 */}
                </span>
                <NavLink to={`/Brands/${brand.id}`}>
                  <img
                    src={brand.imgName}
                    className={SearchCss.rankimg}
                  />
                </NavLink>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
