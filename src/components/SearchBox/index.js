import "./search-box.css";

//Icons
import { BsSearch } from "react-icons/bs";

const SearchBox = ({ searchTerm, onSearchTerm }) => {
  return (
      <label className="search-box">
        <BsSearch title="search by title" className="search-box__icon"/>
        <input
          className="search-box__input"
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={onSearchTerm}
        />
      </label>
  );
};

export default SearchBox;
