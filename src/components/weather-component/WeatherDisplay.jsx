import { FaWind, FaMapMarkerAlt } from "react-icons/fa";
import image from "../assets/sky.jpg";
import { useContext } from "react";
import WeatherContext from "../../context/WeatherCotext";
import Icon from "./Icon";
import Spinner from "../shared/Spinner";

const WeatherDisplay = () => {
  const { weatherData, country, isLoading } = useContext(WeatherContext);

  if (!isLoading && (!weatherData || weatherData.length === 0)) {
    return <p className="mt-1 text-sm">Search for a country</p>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="rounded-2xl overflow-hidden mt-5 w-full">
      <div
        className="hero"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content w-full">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold flex">
              <FaMapMarkerAlt /> {country} , {weatherData.sys.country}
            </h1>
            <div className="flex flex-col gap-4">
              <div className="text-4xl font-semibold flex gap-3 items-center  ">
                <svg
                  className="w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                >
                  <g id="_25-Celsius" data-name="25-Celsius">
                    <path
                      d="M24,40.6a12,12,0,1,1-12,0V7a6,6,0,0,1,6-6,6.009,6.009,0,0,1,6,6Z"
                      style={{ fill: "#ffb145" }}
                    />
                    <path
                      d="M18,63A12.005,12.005,0,0,1,7.2,45.763a2,2,0,0,1,3.6,1.748A7.916,7.916,0,0,0,10,51a8,8,0,1,0,15.335-3.2A2,2,0,1,1,29,46.2,12,12,0,0,1,18,63Z"
                      style={{ fill: "#fc9508" }}
                    />
                    <rect
                      x="12"
                      y="6"
                      width="3"
                      height="33"
                      rx="1.5"
                      style={{ fill: "#fc9508" }}
                    />
                    <rect
                      x="21"
                      y="6"
                      width="3"
                      height="33"
                      rx="1.5"
                      style={{ fill: "#fc9508" }}
                    />
                    <circle cx="55" cy="4" r="3" style={{ fill: "#ffb145" }} />
                    <path
                      d="M52,29v2a8,8,0,0,1-8,8H39a9,9,0,0,1-9-9V16a9,9,0,0,1,9-9h5a8,8,0,0,1,8,8v2H48V15a4,4,0,0,0-4-4H40a6,6,0,0,0-6,6V29a6,6,0,0,0,6,6h4a4,4,0,0,0,4-4V29Z"
                      style={{ fill: "#ffb145" }}
                    />
                    <rect x="11" y="13" width="2" height="2" />
                    <path d="M25,40.038V7a7.008,7.008,0,0,0-7-7,7.008,7.008,0,0,0-7,7v4h2V7a5.006,5.006,0,0,1,5-5,5.009,5.009,0,0,1,5,5v4H18v2h5v4H18v2h5v4H18v2h5v4H18v2h5v4H18v2h5v3.6a1,1,0,0,0,.5.865,11,11,0,1,1-11,0A1,1,0,0,0,13,40.6V17H11V40.038a13,13,0,1,0,14,0Z" />
                    <path d="M22.36,43.125l-.97,1.75A7.007,7.007,0,0,1,25,51h2A9.011,9.011,0,0,0,22.36,43.125Z" />
                    <path d="M24.064,54.5l1.731,1a8.928,8.928,0,0,0,.921-2.251l-1.936-.5A6.965,6.965,0,0,1,24.064,54.5Z" />
                    <path d="M44,6H39A10.011,10.011,0,0,0,29,16h2a8.009,8.009,0,0,1,8-8h5a7.008,7.008,0,0,1,7,7v1H49V15a5.006,5.006,0,0,0-5-5H40a7.008,7.008,0,0,0-7,7V29a7.008,7.008,0,0,0,7,7h4a5.006,5.006,0,0,0,5-5V30h2v1a7.008,7.008,0,0,1-7,7H39a8.009,8.009,0,0,1-8-8V22H29v8A10.011,10.011,0,0,0,39,40h5a9.01,9.01,0,0,0,9-9V29a1,1,0,0,0-1-1H48a1,1,0,0,0-1,1v2a3,3,0,0,1-3,3H40a5.006,5.006,0,0,1-5-5V17a5.006,5.006,0,0,1,5-5h4a3,3,0,0,1,3,3v2a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V15A9.01,9.01,0,0,0,44,6Z" />
                    <rect x="29" y="18" width="2" height="2" />
                    <path d="M55,0a4,4,0,1,0,4,4A4,4,0,0,0,55,0Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,55,6Z" />
                  </g>
                </svg>{" "}
                {(+weatherData.main.temp - 273).toFixed(1)}&#176;
              </div>
              <div className="flex flex-row gap-4 text-xl">
                <div>
                  <Icon tempData={weatherData.weather[0].icon} />
                </div>
                <p>{weatherData.weather[0].main}</p>
              </div>
            </div>
            <div className="flex flex-row justify-between text-2xl mt-4">
              <div className="flex flex-row gap-2 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    className="w-8"
                  >
                    <g id="_23-Humidity" data-name="23-Humidity">
                      <path
                        d="M49.54,37H14.46A18,18,0,1,0,50,41,18.164,18.164,0,0,0,49.54,37Z"
                        style={{ fill: "#5ec8e6" }}
                      />
                      <path
                        d="M54,41a22,22,0,0,1-44,0C10,30.66,23.81,8.03,30.22,1.72a2.56,2.56,0,0,1,3.56,0C40.19,8.03,54,30.66,54,41Zm-4,0a18.164,18.164,0,0,0-.46-4H14.46A18,18,0,1,0,50,41Z"
                        style={{ fill: "#c2f1ff" }}
                      />
                      <path
                        d="M14.835,37H14.46A18,18,0,0,0,47.851,49.531,21.993,21.993,0,0,1,14.835,37Z"
                        style={{ fill: "#26a5c9" }}
                      />
                      <path
                        d="M47.851,49.531A17.99,17.99,0,0,1,14.46,37h.375A22,22,0,0,1,14,31a22.181,22.181,0,0,1,1.034-5.981C12.1,31.083,10,36.974,10,41a22,22,0,0,0,43.8,2.921A22.107,22.107,0,0,1,47.851,49.531Z"
                        style={{ fill: "#a4eaff" }}
                      />
                      <path
                        d="M35,13.072a2,2,0,0,1-1.672-.9c-.234-.356-.469-.7-.7-1.05a2,2,0,1,1,3.31-2.244q.366.537.732,1.1A2,2,0,0,1,35,13.072Z"
                        style={{ fill: "#fff" }}
                      />
                      <path
                        d="M46.326,35a2,2,0,0,1-1.89-1.35,93.18,93.18,0,0,0-7.484-15.643,2,2,0,1,1,3.455-2.016,97.869,97.869,0,0,1,7.81,16.357A2,2,0,0,1,46.326,35Z"
                        style={{ fill: "#fff" }}
                      />
                      <rect x="20" y="36" width="2" height="2" />
                      <path d="M18,38V36H14.462a1,1,0,0,0-.975.778,19,19,0,1,0,37.026,0A1,1,0,0,0,49.538,36H24v2H48.723A16.814,16.814,0,0,1,49,41a17,17,0,0,1-34,0,16.814,16.814,0,0,1,.277-3Z" />
                      <rect
                        x="23.515"
                        y="46"
                        width="16.971"
                        height="2"
                        transform="translate(-23.861 36.393) rotate(-45)"
                      />
                      <path d="M33,52a3,3,0,1,0,3-3A3,3,0,0,0,33,52Zm4,0a1,1,0,1,1-1-1A1,1,0,0,1,37,52Z" />
                      <path d="M28,39a3,3,0,1,0,3,3A3,3,0,0,0,28,39Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,28,43Z" />
                      <path d="M43.816,17.505l1.727-1.01q-.6-1.02-1.2-2.015l-1.709,1.04Q43.228,16.5,43.816,17.505Z" />
                      <path d="M46.7,18.512l-1.746.976C50.066,28.627,53,36.468,53,41a21,21,0,0,1-41.654,3.819l-1.967.362A23,23,0,0,0,55,41C55,34.341,49.8,24.052,46.7,18.512Z" />
                      <path d="M11,41C11,31.017,24.532,8.724,30.922,2.43a1.6,1.6,0,0,1,2.155,0A69.9,69.9,0,0,1,41.4,13.535l1.69-1.07A70.879,70.879,0,0,0,34.48,1a3.653,3.653,0,0,0-4.961,0C22.763,7.659,9,30.373,9,41c0,.7.031,1.4.094,2.09l1.992-.18C11.029,42.28,11,41.638,11,41Z" />
                    </g>
                  </svg>
                </div>
                <div>{weatherData.main.humidity}</div>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div>
                  <FaWind />
                </div>
                <div>{weatherData.wind.speed}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
