import React, { useState } from "react";
import Footer from "../../components/footer";
import MenuCss from "./menu.module.css";
import adidasimg from "../../../src/assets/menuimage/adidas.png";
import nikeimg from "../../../src/assets/menuimage/nike.png";
import nbimg from "../../../src/assets/menuimage/newbalance.png";
import zaraimg from "../../../src/assets/menuimage/zara.png";
import mujiimg from "../../../src/assets/menuimage/muji.png";
import eightimg from "../../../src/assets/menuimage/eight.png";
import ikeaimg from "../../../src/assets/menuimage/ikea.png";
import kbpimg from "../../../src/assets/menuimage/kbp.png";
import ykimg from "../../../src/assets/menuimage/yankee.png";
import poloimg from "../../../src/assets/menuimage/polo.png";
import tomimg from "../../../src/assets/menuimage/tomboy.png";
import bpimg from "../../../src/assets/menuimage/beanpole.png";
import ttimg from "../../../src/assets/menuimage/topten.png";
import uniimg from "../../../src/assets/menuimage/uniqlo.png";
import spimg from "../../../src/assets/menuimage/spao.png";
import northimg from "../../../src/assets/menuimage/north.png";
import filaimg from "../../../src/assets/menuimage/fila.png";
import xexyimg from "../../../src/assets/menuimage/xexymix.png";
import { NavLink, useLocation } from "react-router-dom";

export default function MenuIndex() {
  return (
    <div>
      <div className={MenuCss.header}>Category</div>
      <div className={MenuCss.container}>
        <p className={MenuCss.title}>Sports</p>
        <div className={MenuCss.listCategoryWrapper}>
          <div
            className={MenuCss.itemWrapper}
            onClick={() => {}}
          >
            <NavLink to="/Brands/adidas">
              <img src={adidasimg} />
            </NavLink>
            <p className={MenuCss.itemTitle}>Adidas</p>
          </div>
          <div
            className={MenuCss.itemWrapper}
            onClick={() => {}}
          >
            <NavLink to="/Brands/nike">
              <img src={nikeimg} />
            </NavLink>
            <p className={MenuCss.itemTitle}>NIKE</p>
          </div>
          <div
            className={MenuCss.itemWrapper}
            onClick={() => {}}
          >
            <NavLink to="/Brands/newbal">
              <img src={nbimg} />
            </NavLink>
            <p className={MenuCss.itemTitle}>NewBalance</p>
          </div>
          <div
            className={MenuCss.itemWrapper}
            onClick={() => {}}
          >
            <NavLink to="/Brands/xexymix">
              <img src={xexyimg} />
            </NavLink>
            <p className={MenuCss.itemTitle}>XEXYMIX</p>
          </div>
          <div
            className={MenuCss.itemWrapper}
            onClick={() => {}}
          >
            <NavLink to="/Brands/Fila">
              <img src={filaimg} />
            </NavLink>
            <p className={MenuCss.itemTitle}>FILA</p>
          </div>
          <div
            className={MenuCss.itemWrapper}
            onClick={() => {}}
          >
            <NavLink to="/Brands/north">
              <img src={northimg} />
            </NavLink>
            <p className={MenuCss.itemTitle}>THENORTHFACE</p>
          </div>
        </div>
      </div>
      <div className={MenuCss.container}>
        <p className={MenuCss.title}>SPA</p>
        <div className={MenuCss.listCategoryWrapper}>
          <div
            className={MenuCss.itemWrapper}
            onClick={() => {}}
          >
            <NavLink to="/Brands/muji">
              <img src={mujiimg} />
            </NavLink>
            <p className={MenuCss.itemTitle}>無印良品</p>
          </div>
          <div
            className={MenuCss.itemWrapper}
            onClick={() => {}}
          >
            <NavLink to="/Brands/Eightsec">
              <img src={eightimg} />
            </NavLink>
            <p className={MenuCss.itemTitle}>8Seconds</p>
          </div>
          <div
            className={MenuCss.itemWrapper}
            onClick={() => {}}
          >
            <NavLink to="/Brands/zara">
              <img src={zaraimg} />
            </NavLink>
            <p className={MenuCss.itemTitle}>ZARA</p>
          </div>
          <div
            className={MenuCss.itemWrapper}
            onClick={() => {}}
          >
            <NavLink to="/Brands/uniqlo">
              <img src={uniimg} />
            </NavLink>
            <p className={MenuCss.itemTitle}>UNIQLO</p>
          </div>
          <div
            className={MenuCss.itemWrapper}
            onClick={() => {}}
          >
            <NavLink to="/Brands/topten">
              <img src={ttimg} />
            </NavLink>
            <p className={MenuCss.itemTitle}>Topten</p>
          </div>
          <div
            className={MenuCss.itemWrapper}
            onClick={() => {}}
          >
            <NavLink to="/Brands/spao">
              <img src={spimg} />
            </NavLink>
            <p className={MenuCss.itemTitle}>SPAO</p>
          </div>
        </div>
      </div>
      <div className={MenuCss.container}>
        <p className={MenuCss.title}>Classic</p>
        <div className={MenuCss.listCategoryWrapper}>
          <div
            className={MenuCss.itemWrapper}
            onClick={() => {}}
          >
            <NavLink to="/Brands/polo">
              <img src={poloimg} />
            </NavLink>
            <p className={MenuCss.itemTitle}>Polo</p>
          </div>
          <div
            className={MenuCss.itemWrapper}
            onClick={() => {}}
          >
            <NavLink to="/Brands/tomboy">
              <img src={tomimg} />
            </NavLink>
            <p className={MenuCss.itemTitle}>TOMBOY</p>
          </div>
          <div
            className={MenuCss.itemWrapper}
            onClick={() => {}}
          >
            <NavLink to="/Brands/Beanpole">
              <img src={bpimg} />
            </NavLink>
            <p className={MenuCss.itemTitle}>BEANPOLE</p>
          </div>
        </div>
      </div>
      <div className={MenuCss.container}>
        <p className={MenuCss.title}>Etc</p>
        <div className={MenuCss.listCategoryWrapper}>
          <div
            className={MenuCss.itemWrapper}
            onClick={() => {}}
          >
            <NavLink to="/Brands/kbp">
              <img src={kbpimg} />
            </NavLink>
            <p className={MenuCss.itemTitle}>KBP</p>
          </div>
          <div
            className={MenuCss.itemWrapper}
            onClick={() => {}}
          >
            <NavLink to="/Brands/Yankee">
              <img src={ykimg} />
            </NavLink>
            <p className={MenuCss.itemTitle}>Yankee Candle</p>
          </div>
          <div
            className={MenuCss.itemWrapper}
            onClick={() => {}}
          >
            <NavLink to="/Brands/Ikea">
              <img src={ikeaimg} />
            </NavLink>
            <p className={MenuCss.itemTitle}>IKEA</p>
          </div>
          <p className={MenuCss.btm}></p>
        </div>
      </div>
    </div>
  );
}
