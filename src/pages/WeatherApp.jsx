import SearchCountry from "../components/weather-component/SearchCountry";
import WeatherDisplay from "../components/weather-component/WeatherDisplay";
import Weekly from "../components/weeklyData/Weekly";

const WeatherApp = () => {
  return (
    <div className="my-5 px-2">
      <SearchCountry />
      <div className="flex flex-col gap-4">
        <WeatherDisplay />
        <Weekly />
      </div>
    </div>
  );
};

export default WeatherApp;
