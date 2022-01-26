import Day from "./Day";

const DaysList = ({ allDays }) => {
  return (
    <div className="w-full shadow stats">
      {allDays.map((day, index) => {
        return (
          <div key={day.dt} className="stat gap-x-4">
            <Day day={day} index={index} />
          </div>
        );
      })}
    </div>
  );
};

export default DaysList;
