import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import CradsRow from "./components/cards-row";
import Main from "./components/main";
function App() {
  const x = [
    {
      name: "الفجر",
      time: "12:00",
      value: "Fajr",
      next: true,
    },
    {
      name: "الشروق",
      time: "12:00",
      value: "Sunrise",
    },
    {
      name: "الظهر",
      time: "12:00",
      value: "Dhuhr",
    },
    {
      name: "العصر",
      time: "12:00",
      value: "Asr",
    },
    {
      name: "المغرب",
      time: "12:00",
      value: "Maghrib",
    },
    {
      name: "العشاء",
      time: "12:00",
      value: "Isha",
    },
  ];
  return <Main data={x} />;
}

export default App;
