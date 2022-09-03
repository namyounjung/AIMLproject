import React, { useState } from 'react';
import Footer from '../../components/footer';
import MenuCss from './menu.module.css';
import adidasimg from '../../../src/assets/menuimage/adidas.png';
import nikeimg from '../../../src/assets/menuimage/nike.png';
import nbimg from '../../../src/assets/menuimage/newbalance.png';
import zaraimg from '../../../src/assets/menuimage/zara.png';
import mujiimg from '../../../src/assets/menuimage/muji.png';
import hmimg from '../../../src/assets/menuimage/h&m.png';
import ikeaimg from '../../../src/assets/menuimage/ikea.png';
import kbpimg from '../../../src/assets/menuimage/kbp.png';
import ykimg from '../../../src/assets/menuimage/yankee.png';
import poloimg from '../../../src/assets/menuimage/polo.png';
import tomimg from '../../../src/assets/menuimage/tomboy.png';
import bpimg from '../../../src/assets/menuimage/beanpole.png';


export default function MenuIndex(){
    return (
        <div >
            <div className={MenuCss.header}>Brands</div>
            <div className={MenuCss.container}>
                <p className={MenuCss.title}>Sports</p>
                <div className={MenuCss.imgWrapper}>
                    <img src={adidasimg}></img>
                    <img src={nikeimg} />
                    <img src={nbimg} />
                </div>
            </div>
            <div className={MenuCss.container}>
                <p className={MenuCss.title}>Basic</p>
            <div className={MenuCss.imgWrapper}>
                <img src={mujiimg} />
                <img src={hmimg} />
                <img src={bpimg} />
                </div>
            </div>
            <div className={MenuCss.container}>
                <p className={MenuCss.title}>SPA</p>
                <div className={MenuCss.imgWrapper}>
            <img src={poloimg} />
            <img src={tomimg} />
            <img src={zaraimg} />
            </div>
            </div>
            <div className={MenuCss.container}>
                <p className={MenuCss.title}>Etc</p>
                <div className={MenuCss.imgWrapper}>
            <img src={kbpimg} />
            <img src={ykimg} />
            <img src={ikeaimg} />
            <p className={MenuCss.btm}></p>
            </div>
            </div>
        </div>
    )
}