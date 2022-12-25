import axios from "axios";

export const request = (city, country) => {
  return axios.get(
    `http://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=8`
  );
};
