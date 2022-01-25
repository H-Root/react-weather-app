import SearchCountry from "../components/weather-component/SearchCountry";
import WeatherDisplay from "../components/weather-component/WeatherDisplay";
import { useEffect, useContext, useState } from "react";
import WeatherContext from "../context/WeatherCotext";

const WeatherApp = () => {
  const { isLoading } = useContext(WeatherContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  return (
    <div>
      <SearchCountry />
      {loading ? <div>Loading...</div> : <WeatherDisplay />}
    </div>
  );
};

export default WeatherApp;
