import { useEffect, useState } from "react";
const PrayerCard = ({ prayer, refresh }) => {
  const [remaining, setRemaining] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      // if (!prayer.isNext) return;
      calcRemaining();
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const calcRemaining = () => {
    // if (!prayer.isNext) return;
    const prayerTime = new Date();
    let hours = parseInt(prayer.time.substring(0, 2));
    hours = prayer.time.includes("PM") ? hours + 12 : hours;
    const minutes = parseInt(prayer.time.substring(3, 5));
    prayerTime.setHours(hours - new Date().getHours());
    prayerTime.setMinutes(minutes - new Date().getMinutes());
    prayerTime.setSeconds(60 - new Date().getSeconds());
    setRemaining(`${prayerTime
      .getHours()
      .toString()
      .padStart(2, "0")}:${prayerTime
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${prayerTime.getSeconds().toString().padStart(2, "0")}
    `);
    if (
      (prayerTime.getMinutes() == 0 && prayerTime.getSeconds() == 0) ||
      (prayerTime.getMinutes() == 59 && prayerTime.getSeconds() == 59)
    )
      refresh();
  };

  return (
    <div
      className={prayer.isNext ? "prayer-card expanded" : "prayer-card"}
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
    >
      {prayer.isNext && <p id="nextLabel">الصلاة التالية</p>}
      <h4>{prayer.name}</h4>
      {
        <>
          <p
            className={
              prayer.isNext
                ? "remaining"
                : show
                ? "remaining r-2"
                : "remaining d-none"
            }
          >
            {remaining}
          </p>
        </>
      }
      <p>{prayer.time}</p>
    </div>
  );
};

export default PrayerCard;
