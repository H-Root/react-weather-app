import { FaHome, FaSkullCrossbones } from "react-icons/fa";
import { Link } from "react-router-dom";
import Animation from "../components/layout/Animation";
import { motion } from "framer-motion";

const Error404 = () => {
  return (
    <Animation>
      <div className="flex items-center justify-center mt-3">
        <div className="flex flex-col gap-3 items-center flex-1 justify-center">
          <FaSkullCrossbones size={60} className="p-2 border-2 rounded-full" />
          <h1 className="text-7xl font-semibold">Error 404...</h1>
          <p>Page Not Found</p>
          <motion.button
            className="btn btn-error"
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                delay: 1,
              },
            }}
          >
            <Link
              to="/"
              className="text-2xl text-center flex flex-row gap-2 items-center "
            >
              <FaHome />
              Back Home
            </Link>
          </motion.button>
        </div>
      </div>
    </Animation>
  );
};

export default Error404;
