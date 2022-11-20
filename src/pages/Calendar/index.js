import React, { useEffect, useState } from "react";
import { useImmer } from "use-immer";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import Footer from "../../components/footer";
import calendarCss from "./calendar.module.css";
import d1 from "../../assets/calendar/1.png";
import d2 from "../../assets/calendar/2.png";
import d3 from "../../assets/calendar/3.png";
import brandList from "../detail/object.js";
import totalBrandSaleData from "./calendar_data_20.js";
import user from "../../utils/globalThis";

function Cal() {
  const [value, onChange] = useState(new Date());
  const [activeBrand, setActiveBrand] = useImmer({
    brand: "",
    isActive: false,
  });

  const today = new Date();
  // let filterdate = totalBrandSaleData.ds.filter(
  //   (filterdate) => filterdate >= today
  // );

  function aaa(item) {
    // favoriteList 안에 item이 있는지 이쓰면 trure 없으면 false
    const favoriteList = user.getUser().favoriteBrandList;
    const one = favoriteList.find((value) => {
      console.log(value);
      return null;
    });
    return true;
  }

  return (
    <div>
      <div className={calendarCss.header}>Calendar</div>
      <div
        className={calendarCss.calendarWrapper}
        onClick={() => {
          setActiveBrand((draft) => {
            draft.isActive = false;
          });
        }}
      >
        <Calendar
          onChange={onChange}
          formatDay={(locale, date) => moment(date).format("DD")}
          value={value}
          navigationLabel={null}
          showNeighboringMonth={false}
          tileContent={({ activeStartDate, date, view }) => {
            // console.log(date.getMonth() + 1);
            for (const [index, item] of totalBrandSaleData.entries()) {
              let y = moment(item.ds, "yyyy-mm-dd").format("yyyy");
              let m = moment(item.ds, "yyyy-mm-dd").format("mm");
              let d = item.ds.slice(-2);
              if (
                y == date.getFullYear() &&
                m == date.getMonth() + 1 &&
                d == date.getDate() &&
                aaa(item) === true
              ) {
                return (
                  <div key={index}>
                    <div className="flex justify-center items-center absoluteDiv">
                      {/* <div className="dot">check</div> */}
                      <img
                        src={d1}
                        alt=""
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveBrand((draft) => {
                            draft.brand = item.brand;
                            draft.isActive = true;
                          });
                        }}
                      />
                    </div>
                  </div>
                );
              }
            }
          }}
        />
        {activeBrand.isActive === true && (
          <h3>{activeBrand.brand} 세일 확률이 20% 이상입니다.</h3>
        )}
      </div>
    </div>
  );
}

export default Cal;
