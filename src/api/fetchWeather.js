import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "fa3f719ca8206676624b9d5b2b4ec4f6";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
        q: query,
        units: "metric",
        APPID: API_KEY
    }
  });

  return data;
};