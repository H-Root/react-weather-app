import SearchCountry from "../components/weather-component/SearchCountry";
import WeatherDisplay from "../components/weather-component/WeatherDisplay";
import Weekly from "../components/weeklyData/Weekly";
import Animation from "../components/layout/Animation";

const WeatherApp = () => {
  return (
    <Animation
      className="my-5 px-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <SearchCountry />
      <div className="flex flex-col gap-4">
        <WeatherDisplay />
        <Weekly />
      </div>
    </Animation>
  );
};

export default WeatherApp;
