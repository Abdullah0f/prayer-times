import clock from "../imgs/clock.svg";
import { useState, useEffect } from "react";
import { convert } from "../utils/convertTime";
const Time = ({ time }) => {
  const [timeString, setTime] = useState("");
  useEffect(() => {
    updateTime();
    const interval = setInterval(() => {
      time = parseInt(time) + 1;
      updateTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    updateTime();
  }, [time]);
  const updateTime = () => {
    const timedate = new Date(time * 1000);
    const hours = timedate.getHours();
    const minutes = timedate.getMinutes();
    setTime(convert(`${hours}:${minutes}`));
  };

  return (
    <div className="label time" key={time}>
      <h2 dir="rtl">
        الوقت
        <img src={clock} alt="" />
      </h2>
      <h1>{timeString}</h1>
    </div>
  );
};

export default Time;
