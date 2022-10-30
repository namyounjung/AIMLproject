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
import totalBrandSaleData from "./data";

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
                d == date.getDate()
              ) {
                setActiveBrand((draft) => {
                  draft.brand = item.brand;
                });
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
        {activeBrand.isActive && (
          <h1>{activeBrand.brand}가 세일중이ㄹ옵시다</h1>
        )}
      </div>
    </div>
  );
}

export default Cal;
