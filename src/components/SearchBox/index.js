const SearchBox = ({searchTerm, onSearchTerm}) => {
  return <label>
    Search:
    <input type="text" placeholder="Search by title" value={searchTerm} onChange={onSearchTerm}/>
  </label>
};

export default SearchBox;