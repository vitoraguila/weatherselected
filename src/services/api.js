import axios from "axios";

// URL BASE
const url = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5/"
});

const APPID = "bd8326266ffeb1b662cf75fadf5dee2a";

const api = {
  weatherCity: city => url.get(""),
  forecastCity: city => url.get("")
};

export default api;
