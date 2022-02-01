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
      setIsLoading(false);
    } else {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${process.env.REACT_APP_OPEN_WEATHER_TOKEN}`
        )
        .then((response) => {
          console.log(response.data);
          setCountry(response.data.name);
          setWeatherData(response.data);
          getAllData(response.data.coord);
          return response;
        })
        .catch((error) => {
          setIsLoading(false);
          if (error.response.status === 404) {
            setAlert("Error 404, Country Not Found !");
          } else {
            setAlert("Connection Error !");
          }
        });
    }
  };
  
  const getAllData = (coordinate) => {
    setIsLoading(true);
    axios
      .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinate.lat.toFixed(2)}&lon=${coordinate.lon.toFixed(2)}&exclude=hourly,minutely&appid=${process.env.REACT_APP_OPEN_WEATHER_TOKEN}`)
      .then((response) => {
        setWeeklyData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setAlert("Error fetching all data, try again or check your connection");
      });
    setIsLoading(false);
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
        setWeeklyData,
        weatherData,
        isValid,
        isLoading,
        country,
        weeklyData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
