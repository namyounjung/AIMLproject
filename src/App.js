import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import DetailIndex from "./pages/detail";
import HomeIndex from "./pages/home";
import SearchIndex from "./pages/Search";
import MenuIndex from "./pages/Menu";
import MypageIndex from "./pages/Mypage";
import LoginIndex from "./pages/Mypage";
import Cal from "./pages/Calendar";
import FavIndex from "./pages/Mypage/favorite";
import "./App.css";
import BasicLayout from "./layouts/BasicLayout";
import MujiIndex from "./pages/Brands/Muji";
import EightIndex from "./pages/Brands/Eightsec";
import KbpIndex from "./pages/Brands/kbp";
import BpIndex from "./pages/Brands/Beanpole";
import NorthIndex from "./pages/Brands/north";
import PoloIndex from "./pages/Brands/polo";
import SpaoIndex from "./pages/Brands/spao";
import HnMIndex from "./pages/Brands/HnM";
import TbIndex from "./pages/Brands/tomboy";
import TtIndex from "./pages/Brands/topten";
import UniIndex from "./pages/Brands/uniqlo";
import XexyIndex from "./pages/Brands/xexymix";
import ZaraIndex from "./pages/Brands/zara";
import NewbalIndex from "./pages/Brands/newbal";
import AdiIndex from "./pages/Brands/adidas";
import IkeaIndex from "./pages/Brands/Ikea";
import YKIndex from "./pages/Brands/Yankee";
import FilaIndex from "./pages/Brands/Fila";
import NikeIndex from "./pages/Brands/nike";
import { useState, useEffect } from "react";
import Start from "./pages/home/components/start";

function App() {
  const [isShowProfile, setIsShowProfile] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (!localStorage.getItem("user"))
      setTimeout(() => {
        setIsShowProfile(true);
        document.body.style.overflow = "hidden";
      }, 1000);
  }, [window.location.pathname]);

  function setIsShowProfileFalse() {
    setIsShowProfile(false);
    document.body.style.overflow = "auto";
  }
  return (
    // <DetailIndex />
    <>
      <Routes>
        <Route
          path="/"
          element={
            <BasicLayout>
              <HomeIndex></HomeIndex>
            </BasicLayout>
          }
        />
        <Route
          path="/home"
          element={
            <BasicLayout>
              <HomeIndex></HomeIndex>
            </BasicLayout>
          }
        />
        <Route
          path="/mypage"
          element={
            <BasicLayout>
              <MypageIndex />
            </BasicLayout>
          }
        />
        <Route
          path="/mypage/favorite"
          element={
            <BasicLayout>
              <FavIndex></FavIndex>
            </BasicLayout>
          }
        />
        <Route
          path="/login"
          element={
            <BasicLayout>
              <LoginIndex />
            </BasicLayout>
          }
        />
        <Route
          path="/search"
          element={
            <BasicLayout>
              <SearchIndex />
            </BasicLayout>
          }
        />
        <Route
          path="/menu"
          element={
            <BasicLayout>
              <MenuIndex />
            </BasicLayout>
          }
        />
        <Route
          path="/detail"
          element={<DetailIndex />}
        />
        <Route
          path="/calendar"
          element={
            <BasicLayout>
              <Cal />
            </BasicLayout>
          }
        />
        <Route
          path="/Brands/Muji"
          element={
            <BasicLayout>
              <MujiIndex />
            </BasicLayout>
          }
        />
        <Route
          path="/Brands/Eightsec"
          element={
            <BasicLayout>
              <EightIndex />
            </BasicLayout>
          }
        />
        <Route
          path="/Brands/zara"
          element={
            <BasicLayout>
              <ZaraIndex />
            </BasicLayout>
          }
        />
        <Route
          path="/Brands/Beanpole"
          element={
            <BasicLayout>
              <BpIndex />
            </BasicLayout>
          }
        />
        <Route
          path="/Brands/kbp"
          element={
            <BasicLayout>
              <KbpIndex />
            </BasicLayout>
          }
        />
        <Route
          path="/Brands/north"
          element={
            <BasicLayout>
              <NorthIndex />
            </BasicLayout>
          }
        />
        <Route
          path="/Brands/polo"
          element={
            <BasicLayout>
              <PoloIndex />
            </BasicLayout>
          }
        />
        <Route
          path="/Brands/HnM"
          element={
            <BasicLayout>
              <HnMIndex />
            </BasicLayout>
          }
        />
        <Route
          path="/Brands/spao"
          element={
            <BasicLayout>
              <SpaoIndex />
            </BasicLayout>
          }
        />
        <Route
          path="/Brands/tomboy"
          element={
            <BasicLayout>
              <TbIndex />
            </BasicLayout>
          }
        />
        <Route
          path="/Brands/topten"
          element={
            <BasicLayout>
              <TtIndex />
            </BasicLayout>
          }
        />
        <Route
          path="/Brands/uniqlo"
          element={
            <BasicLayout>
              <UniIndex />
            </BasicLayout>
          }
        />
        <Route
          path="/Brands/Yankee"
          element={
            <BasicLayout>
              <YKIndex />
            </BasicLayout>
          }
        />
        <Route
          path="/Brands/xexymix"
          element={
            <BasicLayout>
              <XexyIndex />
            </BasicLayout>
          }
        />
        <Route
          path="/Brands/newbal"
          element={
            <BasicLayout>
              <NewbalIndex />
            </BasicLayout>
          }
        />
        <Route
          path="/Brands/adidas"
          element={
            <BasicLayout>
              <AdiIndex />
            </BasicLayout>
          }
        />
        <Route
          path="/Brands/Ikea"
          element={
            <BasicLayout>
              <IkeaIndex />
            </BasicLayout>
          }
        />
        <Route
          path="/Brands/Fila"
          element={
            <BasicLayout>
              <FilaIndex />
            </BasicLayout>
          }
        />
        <Route
          path="/Brands/nike"
          element={
            <BasicLayout>
              <NikeIndex />
            </BasicLayout>
          }
        />
      </Routes>
      <Start
        isShowProfile={isShowProfile}
        setIsShowProfileFalse={setIsShowProfileFalse}
      />
    </>
  );
}

export default App;
