import { useEffect, useState } from "react";
import PrayerCard from "./prayer-card";

const CradsRow = ({ prayers, city }) => {
  const [refresher, setRefresher] = useState(0);
  useEffect(() => {
    setIsNext(city);
  }, [city, refresher]);
  const refresh = () => {
    setRefresher(refresher + 1);
  };
  const setIsNext = (city) => {
    let nearest = prayers[0];
    const nearestTimes = city.timings[prayers[0].value];
    let nearestHours = 25;
    let nearestMinuts = 61;
    const currentHours = new Date().getHours();
    const currentMinuts = new Date().getMinutes();
    prayers.forEach((prayer) => {
      prayer.time = city.timings[prayer.value];
      const hours = parseInt(prayer.time.substring(0, 2));
      const minuts = prayer.time.substring(3);
      prayer.time =
        hours > 12
          ? "0" + (hours - 12) + ":" + minuts + " PM"
          : prayer.time + " AM";
      if (hours >= currentHours && hours <= nearestHours) {
        if (hours == nearestHours && parseInt(minuts) > nearestMinuts) return;
        if (hours == currentHours && parseInt(minuts) <= currentMinuts) return;
        nearest = prayer;
        nearestHours = hours;
        nearestMinuts = parseInt(minuts);
      }
    });
    prayers.forEach((prayer) => {
      prayer.isNext = false;
    });
    nearest.isNext = true;
  };

  return (
    <div className="cards-row d-flex gap-5 justify-content-between">
      {prayers.map((prayer) => {
        return (
          <PrayerCard key={prayer.value} prayer={prayer} refresh={refresh} />
        );
      })}
    </div>
  );
};

export default CradsRow;
