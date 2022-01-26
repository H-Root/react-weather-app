import { useContext, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import Alert from "../shared/Alert";
import WeatherContext from "../../context/WeatherCotext";

const SearchCountry = () => {
  const inputRef = useRef();
  const { getWeather, isValid, setWeatherData, isLoading, setWeeklyData } =
    useContext(WeatherContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchedCountry = inputRef.current.value;
    setWeatherData("");
    setWeeklyData("");
    await getWeather(searchedCountry);
  };

  return (
    <>
      {!isValid.valid && <Alert isValid={isValid} />}
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full pr-16 input input-primary input-bordered"
              ref={inputRef}
            />
            <button
              type="submit"
              className={`absolute top-0 right-0 rounded-l-none btn btn-primary ${
                isLoading ? "loading" : ""
              }`}
            >
              {isLoading ? "" : <FaSearch />}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchCountry;
