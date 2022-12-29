import calendar from "../imgs/calendar.svg";
const Date = ({ date }) => {
  return (
    <div className="label date">
      <h2>
        <img src={calendar} alt="" />
        {date.hijri.weekday.ar}
      </h2>

      <table>
        <tbody>
          <tr>
            <td>{date.hijri.day}</td>
            <td dir="rtl">{date.hijri.month.ar}</td>
            <td>{date.hijri.year}</td>
          </tr>
          <tr>
            <td>{date.gregorian.day}</td>
            <td>{date.gregorian.month.en}</td>
            <td>{date.gregorian.year}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Date;
