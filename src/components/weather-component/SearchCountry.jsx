import { FaSearch } from "react-icons/fa";

const SearchCountry = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full pr-16 input input-primary input-bordered"
          />
          <button
            type="submit"
            className="absolute top-0 right-0 rounded-l-none btn btn-primary"
          >
            <FaSearch />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchCountry;
