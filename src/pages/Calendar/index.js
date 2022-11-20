import React, { useState } from "react";
import { useImmer } from "use-immer";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import calendarCss from "./calendar.module.css";
import d1 from "../../assets/calendar/1.png";
import totalBrandSaleData from "./calendar_data_20.js";
import user from "../../utils/globalThis";

function Cal() {
  const [value, onChange] = useState(new Date());
  const [activeBrand, setActiveBrand] = useImmer({
    brand: "",
    isActive: false,
    percent: "",
  });

  function isFavorite(item) {
    // favoriteList 안에 item이 있으면 true 없으면 false
    const favoriteList = user.getUser().favoriteBrandList;
    return favoriteList.find((favoriteItem) => {
      return favoriteItem === item.brand;
    })
      ? true
      : false;
  }

  return (
    <div>
      <div className={calendarCss.header}>Calendar</div>
      <div className={calendarCss.calendarWrapper}>
        <Calendar
          onChange={onChange}
          formatDay={(locale, date) => moment(date).format("DD")}
          value={value}
          navigationLabel={null}
          showNeighboringMonth={false}
          tileContent={({ date }) => {
            for (const [index, item] of totalBrandSaleData.entries()) {
              const day = new Date(item.ds);
              let y = day.getFullYear();
              let m = day.getMonth();
              let d = day.getDate();
              if (
                y === date.getFullYear() &&
                m === date.getMonth() &&
                d === date.getDate() &&
                isFavorite(item) === true
              ) {
                return (
                  <button
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      top: "0",
                      left: "0",
                      background: "transparent",
                    }}
                    key={index}
                    onBlur={() => {
                      console.log("onblur");
                      setActiveBrand((draft) => {
                        draft.isActive = false;
                      });
                    }}
                    onClick={() => {
                      setActiveBrand((draft) => {
                        draft.brand = item.brand;
                        draft.percent = item.percent;
                        draft.isActive = true;
                      });
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "12px",
                        right: "13px",
                      }}
                    >
                      <img
                        src={d1}
                        alt=""
                      />
                    </div>
                  </button>
                );
              }
            }
          }}
        />
        {activeBrand.isActive === true && (
          <h3
            style={{
              fontSize: "21px",
              textAlign: "center",
              fontWeight: "400",
              background: "#F9F9F9",
              padding: "26px",
              lineHeight: "150%",
            }}
          >
            <strong>{activeBrand.brand}</strong>의 세일 확률은
            <br />
            <strong>{activeBrand.percent}%</strong> 입니다! 🤑
          </h3>
        )}
      </div>
    </div>
  );
}

export default Cal;
