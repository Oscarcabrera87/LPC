import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { RiCloseCircleLine } from "react-icons/ri";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchBar = ({placeholder,search,setResults,setSearch,defaultData,}) => {

  const queryJson = (e) => {
      if (e.key === "Enter"){
        const filteredSearch = defaultData.filter((data) => {
        return (
            data.eth.toLowerCase().includes(search) ||
            data.gen.toLowerCase().includes(search) ||
            data.iden.toLowerCase().includes(search)
        )
      }
    )
    setResults(filteredSearch);
  }}

  const clearInput = () => {
    setResults([]);
    setSearch("");
  }

  return (
    // <div className="search">
    //     <div className="searchInputs">
    <div className="container">
      <div className="row">
        <div className="search col-lg-6 mx-auto input-group mt-5 mb-5">
          <input
            type="text"
            placeholder={placeholder}
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            onKeyPress={queryJson}
          />
          <div className="searchIcon">
            {search.length > 0 ? (
              <RiCloseCircleLine
                icon="fa-solid fa-times-circle"
                onClick={clearInput}
              />
            ) : (
              <BiSearchAlt icon="fa-solid fa-search" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
