import { FaTimes } from "react-icons/fa";

const Alert = ({ isValid }) => {
  return (
    <p className="text-base flex flex-row gap-2 items-center pb-2">
      <FaTimes size={20} className="text-red-800 p-1 rounded-full bg-red-200" />{" "}
      {isValid.msg}
    </p>
  );
};

export default Alert;
