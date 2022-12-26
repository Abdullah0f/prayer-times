import CradsRow from "./cards-row";
import Select from "react-select";
import { cities, city as c } from "../services/cities";
import { useEffect, useState } from "react";
import { request } from "../services/api";
import Labels from "./labels";
const Main = ({ prayers }) => {
  const [city, setCity] = useState(null);
  const [selectedCity, setSelectedCity] = useState(c);
  useEffect(() => {
    async function fetchData() {
      const x = await request(c.value, c.country);
      setCity(x.data.data);
    }
    fetchData();
  }, []);

  const handleChange = async (selected) => {
    const x = await request(selected.value, selected.country);
    setCity(x.data.data);
    setSelectedCity(selected);
  };
  if (!city) return <div>Loading...</div>;
  return (
    <>
      <div className="main">
        <Select
          options={cities}
          isSearchable={true}
          onChange={handleChange}
          value={selectedCity}
        />
        <Labels date={city.date} />
        <div className="main-body">
          <img src={require("../imgs/mosque23png.png")} alt="" />
        </div>
        <CradsRow prayers={prayers} city={city} />
      </div>
    </>
  );
};

export default Main;
