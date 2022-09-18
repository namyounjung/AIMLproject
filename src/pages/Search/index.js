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
import hmimg from "../../../src/assets/rank/h&m.png";
import searchimg from "../../../src/assets/mainimage/search.png";
import { NavLink, useLocation } from "react-router-dom";

export default function SearchIndex() {
  return (
    <div>
      <div className={SearchCss.header}>Brand Ranking</div>
      <div className={SearchCss.input}>
        <img src={searchimg} />
      </div>
      <div className={SearchCss.container}>
        <div className={SearchCss.rankimg}>
          <NavLink to="/Brands/Eightsec">
            <img src={eightimg} />
          </NavLink>
        </div>
        <div className={SearchCss.ranktext}>
          <p>1.</p>
          {/* 검색 순위를 넣고파 */}
        </div>
        <NavLink to="/Brands/adidas">
          <img src={adiimg} />
        </NavLink>
        <NavLink to="/Brands/nike">
          <img src={nikeimg} />
        </NavLink>
        <NavLink to="/Brands/HnM">
          <img src={hmimg} />
        </NavLink>
        <NavLink to="/Brands/Beanpole">
          <img src={bpimg} />
        </NavLink>
        <NavLink to="/Brands/Muji">
          <img src={mjimg} />
        </NavLink>
        <NavLink to="/Brands/kbp">
          <img src={kbpimg} />
        </NavLink>
        <NavLink to="/Brands/newbal">
          <img src={nbimg} />
        </NavLink>
        <NavLink to="/Brands/north">
          <img src={northimg} />
        </NavLink>
        <NavLink to="/Brands/polo">
          <img src={poloimg} />
        </NavLink>
        <NavLink to="/Brands/spao">
          <img src={spimg} />
        </NavLink>
        <NavLink to="/Brands/tomboy">
          <img src={tbimg} />
        </NavLink>
        <NavLink to="/Brands/topten">
          <img src={ttimg} />
        </NavLink>
        <NavLink to="/Brands/uniqlo">
          <img src={uniimg} />
        </NavLink>
        <NavLink to="/Brands/xexymix">
          <img src={ximg} />
        </NavLink>
        <NavLink to="/Brands/zara">
          <img src={zaimg} />
        </NavLink>
        <NavLink to="/Brands/ikea">
          <img src={ikeaimg} />
        </NavLink>
        <NavLink to="/Brands/yankee">
          <img src={ykimg} />
        </NavLink>
        <NavLink to="/Brands/fila">
          <img src={filaimg} />
        </NavLink>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
