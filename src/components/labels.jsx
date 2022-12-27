import calendar from "../imgs/calendar.svg";
const Date = ({ date }) => {
  console.log(date);
  return (
    <div className="date">
      <h2>
        <img src={calendar} alt="" />
        {date.hijri.weekday.ar}
      </h2>

      <table>
        <tr>
          <td>{date.hijri.day}</td>
          <td>{date.hijri.month.ar}</td>
          <td>{date.hijri.year}</td>
        </tr>
        <tr>
          <td>{date.gregorian.day}</td>
          <td>{date.gregorian.month.en}</td>
          <td>{date.gregorian.year}</td>
        </tr>
      </table>
    </div>
  );
};

export default Date;
