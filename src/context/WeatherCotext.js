import { createContext, useState } from "react";
const axios = require("axios");

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [country, setCountry] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const [isValid, setIsValid] = useState({ valid: true });
  const [isLoading, setIsLoading] = useState(false);

  const getWeather = (countryName) => {
    setIsLoading(true);
    countryName = countryName.toLowerCase();
    if (countryName.length === 0) {
      setAlert("no data");
    } else {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=6cde831adfb4ca6b822f4368547e862a`
        )
        .then((response) => {
          console.log(response.data);
          setCountry(response.data.name);
          setWeatherData(response.data);
          return response;
        })
        .catch((error) => {
          if (error.response.status === 404) {
            setAlert(404);
          } else {
            setAlert();
          }
        });
    }
    setIsLoading(false);
  };

  const setAlert = (code) => {
    if (code === "no data") {
      setIsValid({
        valid: false,
        msg: "Please Enter Something",
      });
    } else if (+code === 404) {
      setIsValid({
        valid: false,
        msg: "country Not Found",
      });
    } else {
      setIsValid({
        valid: false,
        msg: "Connection Error",
      });
    }
    clearTimeout();
    setTimeout(() => setIsValid({ valid: true }), 3000);
  };

  return (
    <WeatherContext.Provider
      value={{
        getWeather,
        weatherData,
        isValid,
        isLoading,
        country,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
