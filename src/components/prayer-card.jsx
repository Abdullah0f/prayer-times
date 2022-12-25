const PrayerCard = ({ data: item }) => {
  console.log(item.time);
  return (
    <div class={item.next ? "prayer-card expanded" : "prayer-card"}>
      <h4>{item.name}</h4>
      {item.next && (
        <>
          <p className="remaining">00:09:32</p>
        </>
      )}
      <p>{item.time}PM</p>
    </div>
  );
};

export default PrayerCard;
