import { useContext, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import Alert from "../shared/Alert";
import WeatherContext from "../../context/WeatherCotext";
import { AnimatePresence, motion } from "framer-motion";

const animationVariants = {
  initial: {
    x: "100vw",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 2,
    },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
  },
};

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
    <div className="relative">
      <AnimatePresence>
        {!isValid.valid && (
          <motion.div
            variants={animationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Alert isValid={isValid} />
          </motion.div>
        )}
      </AnimatePresence>
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
    </div>
  );
};

export default SearchCountry;
