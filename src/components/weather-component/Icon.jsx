import {
  FaMoon,
  FaSun,
  FaCloudMoon,
  FaCloudSun,
  FaCloud,
  FaCloudShowersHeavy,
  FaCloudSunRain,
  FaCloudMoonRain,
  FaBolt,
  FaSnowflake,
} from "react-icons/fa";

const Icon = ({ tempData }) => {
  if (tempData === "01d") {
    return <FaSun />;
  } else if (tempData === "01n") {
    return <FaMoon />;
  } else if (tempData === "02d") {
    return <FaCloudSun />;
  } else if (tempData === "02n") {
    return <FaCloudMoon />;
  } else if (
    tempData === "03d" ||
    tempData === "03n" ||
    tempData === "04d" ||
    tempData === "04n"
  ) {
    return <FaCloud />;
  } else if (tempData === "09d" || tempData === "09n") {
    return <FaCloudShowersHeavy />;
  } else if (tempData === "10d") {
    return <FaCloudSunRain />;
  } else if (tempData === "10n") {
    return <FaCloudMoonRain />;
  } else if (tempData === "11d" || tempData === "11n") {
    return <FaBolt />;
  } else if (tempData === "13d" || tempData === "13n") {
    return <FaSnowflake />;
  }
};

export default Icon;
