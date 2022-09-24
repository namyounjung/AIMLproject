import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Footer from "../../components/footer";
import calendarCss from "./calendar.module.css";

function Cal() {
  const [value, onChange] = useState(new Date());

  const [saleList, setSaleList] = useState([]);

  useEffect(() => {
    setSaleList([20, 21, 22]);
  }, []);

  return (
    <div>
      <div className={calendarCss.header}>Calendar</div>
      <div className={calendarCss.calendarWrapper}>
        <Calendar
          onChange={onChange}
          value={value}
          tileContent={({ activeStartDate, date, view }) => {
            if (saleList.find((x) => x === date.getDate())) {
              return (
                <>
                  <div className="flex justify-center items-center absoluteDiv">
                    <div className="dot">check</div>
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
