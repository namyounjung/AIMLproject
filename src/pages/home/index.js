import Footer from "../../components/footer";
import BrandList from "../detail/object";
import Cal from "../Calendar";
import Login from "../detail/login";
import { Calendar } from "react-calendar";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./header";
import MainBanner from "./components/mainbanner";
import PopularBanner from "./components/popular";
import HomeCss from "./home.module.css";

export default function HomeIndex() {
  return (
    <div className={HomeCss.homeWrapper}>
      <Header />
      <div className={HomeCss.homeContentsWrapper}>
        <MainBanner />
        <PopularBanner />
      </div>
    </div>
  );
}
