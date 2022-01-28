import { FaCloudMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className="px-2 py-3 shadow-md bg-base-200"
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: "",
        delay: 0.2,
        type: "spring",
        stiffness: 50,
      }}
    >
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
    </motion.header>
  );
};

export default Header;
