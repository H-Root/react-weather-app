import Icon from "./Icon";

const Day = ({ day, index }) => {
  const tempDate = new Date();
  const handleDate = () => {
    let temp = {
      month: tempDate.getMonth() + 1,
      day: tempDate.getDate() + index,
      year: tempDate.getFullYear(),
    };
    if (temp.day > new Date(temp.year, temp.month, 0).getDate()) {
      return {
        day: temp.day - new Date(temp.year, temp.month, 0).getDate(),
        month: temp.month + 1,
      };
    } else {
      return temp;
    }
  };
  return (
    <>
      <div className="stat-figure text-secondary flex-1/2">
        <Icon tempData={day.weather[0].icon} />
      </div>
      <div className="stat-title">{day.weather[0].description}</div>
      <div className="stat-value"> {(day.temp.day - 273).toFixed(1)}&#176;</div>
      <div className="stat-desc">{`${handleDate(tempDate).day}/${
        handleDate(tempDate).month
      }`}</div>
    </>
  );
};

export default Day;
