import { FaHome, FaSkullCrossbones } from "react-icons/fa";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="flex items-center justify-center mt-3">
      <div className="flex flex-col gap-3 items-center flex-1 justify-center">
        <FaSkullCrossbones size={60} className="p-2 border-2 rounded-full" />
        <h1 className="text-7xl font-semibold">Error 404...</h1>
        <p>Page Not Found</p>
        <button className="btn btn-error">
          <Link
            to="/"
            className="text-2xl text-center flex flex-row gap-2 items-center "
          >
            <FaHome />
            Back Home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Error404;
