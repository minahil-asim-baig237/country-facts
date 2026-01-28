// Example of getCountryData
import axios from "axios";
export const getCountryData = () => {
  return axios.get(
    "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags"
  );
};