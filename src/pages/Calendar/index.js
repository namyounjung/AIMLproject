import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import Footer from "../../components/footer";
import calendarCss from "./calendar.module.css";
import d1 from "../../assets/calendar/1.png";
import d2 from "../../assets/calendar/2.png";
import d3 from "../../assets/calendar/3.png";
import brandList from "../detail/object.js";

function Cal() {
  const [value, onChange] = useState(new Date());

  const [saleList, setSaleList] = useState([]);

  useEffect(() => {
    setSaleList([10, 11, 12]);
  }, []);

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
          tileContent={({ activeStartDate, date, view }) => {
            if (saleList.find((x) => x === date.getDate())) {
              return (
                <>
                  <div className="flex justify-center items-center absoluteDiv">
                    {/* <div className="dot">check</div> */}
                    <img src={d1} />
                    <img src={d2} />
                    <img src={d3} />
                  </div>
                </>
              );
            }
          }}
        />
      </div>
    </div>
  );
}

export default Cal;
