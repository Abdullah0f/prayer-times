const PrayerCard = ({ prayer }) => {
  return (
    <div className={prayer.isNext ? "prayer-card expanded" : "prayer-card"}>
      <h4>{prayer.name}</h4>
      {prayer.isNext && (
        <>
          <p className="remaining">00:09:32</p>
        </>
      )}
      <p>{prayer.time}</p>
    </div>
  );
};

export default PrayerCard;
