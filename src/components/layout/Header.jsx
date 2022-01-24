import { FaCloudMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-2 py-3 shadow-md">
      <div className="container mx-auto flex flex-row justify-between">
        <h1 className="flex gap-1 items-center text-2xl ">
          <FaCloudMoon className="text-3xl" />
          Weather App
        </h1>
        <div className="flex flex-row gap-2 items-center">
          <Link className="btn btn-ghost" to="/">
            Home
          </Link>
          <Link className="btn btn-ghost" to="/about">
            About
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
