import CradsRow from "./cards-row";
import Select from "react-select";
import { cities, city as c } from "../services/cities";
import axios from "axios";
import { useState } from "react";

const Main = ({ data }) => {
  const [city, setCity] = useState(c);
  const handleChange = async (selected) => {
    const x = await axios.get(
      `http://api.aladhan.com/v1/timingsByCity?city=${selected.value}&country=${selected.country}&method=4`
    );
    setCity(x.data.data);
  };
  return (
    <>
      <div className="main">
        <Select options={cities} isSearchable={true} onChange={handleChange} />

        <div className="main-body">
          <img src={require("../imgs/mosque23png.png")} alt="" />
        </div>
        <CradsRow data={data} city={city} />
      </div>
    </>
  );
};

export default Main;
