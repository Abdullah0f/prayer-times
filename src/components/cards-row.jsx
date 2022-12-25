import PrayerCard from "./prayer-card";

const CradsRow = ({ prayers, city }) => {
  prayers.forEach((prayer) => {
    prayer.time = city.timings[prayer.value];
  });

  return (
    <div className="cards-row d-flex gap-5 justify-content-between">
      {prayers.map((prayer) => {
        return <PrayerCard key={prayer.value} prayer={prayer} />;
      })}
    </div>
  );
};

export default CradsRow;
