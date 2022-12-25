import PrayerCard from "./prayer-card";

const CradsRow = ({ data, city }) => {
  data.forEach((item) => {
    item.time = city.timings[item.value];
  });

  return (
    <div className="cards-row d-flex gap-5 justify-content-between">
      {data.map((item) => {
        return <PrayerCard data={item} />;
      })}
    </div>
  );
};

export default CradsRow;
