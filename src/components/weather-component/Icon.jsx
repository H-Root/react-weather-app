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
    return <FaSun size={25} />;
  } else if (tempData === "01n") {
    return <FaMoon size={25} />;
  } else if (tempData === "02d") {
    return <FaCloudSun size={25} />;
  } else if (tempData === "02n") {
    return <FaCloudMoon size={25} />;
  } else if (
    tempData === "03d" ||
    tempData === "03n" ||
    tempData === "04d" ||
    tempData === "04n"
  ) {
    return <FaCloud size={25} />;
  } else if (tempData === "09d" || tempData === "09n") {
    return <FaCloudShowersHeavy size={25} />;
  } else if (tempData === "10d") {
    return <FaCloudSunRain size={25} />;
  } else if (tempData === "10n") {
    return <FaCloudMoonRain size={25} />;
  } else if (tempData === "11d" || tempData === "11n") {
    return <FaBolt size={25} />;
  } else if (tempData === "13d" || tempData === "13n") {
    return <FaSnowflake size={25} />;
  } else {
    return "No Icon !";
  }
};

export default Icon;
