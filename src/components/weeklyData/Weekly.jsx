import { useContext } from "react";
import WeatherContext from "../../context/WeatherCotext";
import Spinner from "../shared/Spinner";
import DaysList from "./DaysList";

const Weekly = () => {
  const { isLoading, weeklyData } = useContext(WeatherContext);

  if (!isLoading && (!weeklyData || weeklyData.length === 0)) {
    return "";
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="rounded-md border-1 border-white">
      <DaysList allDays={weeklyData.daily} />
    </div>
  );
};

export default Weekly;
