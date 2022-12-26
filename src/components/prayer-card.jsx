import { useEffect, useState } from "react";
const PrayerCard = ({ prayer }) => {
  const [remaining, setRemaining] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      if (!prayer.isNext) return;
      calcRemaining();
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const calcRemaining = () => {
    if (!prayer.isNext) return;
    const prayerTime = new Date();
    const hours = parseInt(prayer.time.substring(0, 2));
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
  };
  return (
    <div className={prayer.isNext ? "prayer-card expanded" : "prayer-card"}>
      {prayer.isNext && <p id="nextLabel">الصلاة التالية</p>}
      <h4>{prayer.name}</h4>
      {prayer.isNext && (
        <>
          <p className="remaining">{remaining}</p>
        </>
      )}
      <p>{prayer.time}</p>
    </div>
  );
};

export default PrayerCard;
