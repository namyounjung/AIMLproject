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
      id: "nike",
      searchWord: ["nike", "나이키"],
      imgName: nikeimg,
      rank: 1,
    },
    {
      id: "adidas",
      searchWord: ["아디다스", "adidas"],
      imgName: adiimg,
      rank: 2,
    },
    {
      id: "ikea",
      searchWord: ["ikea", "이케아"],
      imgName: ikeaimg,
      rank: 3,
    },
    {
      id: "uniqlo",
      searchWord: ["uniqlo", "유니클로"],
      imgName: uniimg,
      rank: 4,
    },
    {
      id: "zara",
      searchWord: ["zara", "자라"],
      imgName: zaimg,
      rank: 5,
    },
    {
      id: "newbal",
      searchWord: ["newbalance", "뉴발란스", "nb"],
      imgName: nbimg,
      rank: 6,
    },
    {
      id: "topten",
      searchWord: ["topten", "탑텐", "top10"],
      imgName: ttimg,
      rank: 7,
    },
    {
      id: "polo",
      searchWord: ["polo", "폴로", "폴로랄프로렌"],
      imgName: poloimg,
      rank: 8,
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
      rank: 9,
    },
    {
      id: "kbp",
      searchWord: ["kbp", "키티버니포니", "kittybunnypony"],
      imgName: kbpimg,
      rank: 10,
    },
    {
      id: "Muji",
      searchWord: ["Muji", "muji", "무인양품", "무지"],
      imgName: mjimg,
      rank: 11,
    },
    {
      id: "HnM",
      searchWord: ["hnm", "hnm", "hm"],
      imgName: hmimg,
      rank: 12,
    },
    {
      id: "tomboy",
      searchWord: ["tomboy", "톰보이"],
      imgName: tbimg,
      rank: 13,
    },
    {
      id: "spao",
      searchWord: ["spao", "스파오"],
      imgName: spimg,
      rank: 14,
    },
    {
      id: "xexymix",
      searchWord: ["xexymix", "젝시믹스"],
      imgName: ximg,
      rank: 15,
    },
    {
      id: "Beanpole",
      searchWord: ["빈폴", "beanpole"],
      imgName: bpimg,
      rank: 16,
    },
    {
      id: "Eightsec",
      searchWord: ["에잇", "에잇세컨즈", "8", "eight seconds"],
      imgName: eightimg,
      rank: 17,
    },
    {
      id: "fila",
      searchWord: ["fila", "휠라", "Fila"],
      imgName: filaimg,
      rank: 18,
    },
    {
      id: "yankee",
      searchWord: ["yankeecandle", "양키캔들", "yankee"],
      imgName: ykimg,
      rank: 19,
    },
  ];

  const filterTitle = brandlist.filter((p) => {
    let tf = false;
    for (let i of p.searchWord) {
      if (i.includes(search) === true) {
        tf = true;
      }
    }
    return tf;
  });

  brandlist.sort(function (a, b) {
    return a.rank - b.rank;
  });
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
      </div>
      <div className={SearchCss.container}>
        {filterTitle.map((brandlist, rank) => {
          return (
            <div className={SearchCss.rankimgWrapper}>
              <span className={SearchCss.ranktext}>{rank + 1}.</span>
              <NavLink to={`/Brands/${brandlist.id}`}>
                <img
                  src={brandlist.imgName}
                  className={SearchCss.rankimg}
                />
              </NavLink>
            </div>
          );
        })}
      </div>

      {/* {search === "" && <>검색어가 없습니다.</>} */}
      {/* <div className={SearchCss.container}>
        {brandlist.map((brand, rank) => {
          return (
            <>
              <div className={SearchCss.rankimgWrapper}>
                <span className={SearchCss.ranktext}>{rank + 1}.</span>
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
      </div> */}
    </div>
  );
}
