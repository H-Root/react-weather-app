import { createContext, useState } from "react";
const axios = require("axios");

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [country, setCountry] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const [isValid, setIsValid] = useState({ valid: true });
  const [isLoading, setIsLoading] = useState(false);
  const [weeklyData, setWeeklyData] = useState("");

  const getWeather = (searchedCountry) => {
    setIsLoading(true);
    getData(searchedCountry);
  };

  const getData = (countryName) => {
    countryName = countryName.toLowerCase();
    if (countryName.length === 0) {
      setAlert("Please Enter Something");
    } else {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=6cde831adfb4ca6b822f4368547e862a`
        )
        .then((response) => {
          console.log(response.data);
          setCountry(response.data.name);
          setWeatherData(response.data);
          getAllData(response.data.coord);
          return response;
        })
        .catch((error) => {
          if (error.response.status === 404) {
            setAlert("Error 404, Country Not Found !");
          } else {
            setAlert("Connection Error !");
          }
        });
    }
    setIsLoading(false);
  };

  const getAllData = (coordinate) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinate.lat.toFixed(
          0
        )}&lon=${coordinate.lon.toFixed(
          0
        )}.04&exclude=hourly,minutely&appid=6cde831adfb4ca6b822f4368547e862a`
      )
      .then((response) => {
        setWeeklyData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setAlert("Error fetching all data, try again or check your connection");
      });
  };

  const setAlert = (code) => {
    setIsValid({
      valid: false,
      msg: code,
    });
    clearTimeout();
    setTimeout(() => setIsValid({ valid: true }), 3000);
  };

  return (
    <WeatherContext.Provider
      value={{
        getWeather,
        setIsLoading,
        setWeatherData,
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
