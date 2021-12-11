import React from "react";
import Suggestion from "./Suggestion";
import { BiSearchAlt } from "react-icons/bi";
import { RiCloseCircleLine } from "react-icons/ri";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchBar = ({
  placeholder,
  search,
  setResults,
  setSearch,
  defaultData,
  sugg,
  setSugg,
  defaultAuto,
  keyword,
  setKeyword,
  setPlaceholder
  }) => {
    const querySuggestion = (e) => {
      setSearch(e.target.value)
      console.log(search)
      const filteredSuggg = defaultAuto.filter((auto) => 
        auto.keyword.toLowerCase().includes(search.toLowerCase())
        )
        
        setSugg(filteredSuggg)
        console.log(sugg)
    };
// query logic for enter key and suggestion click
    const queryAutoComplete = (arr) => {
      setKeyword(arr.keyword)
      setSearch(keyword)
      const filteredSearch = defaultData.filter((data) => {
        return (
          data.iden.toLowerCase().includes(search.toLowerCase()) ||
          data.eth.toLowerCase().includes(search.toLowerCase()) ||
          data.gen.toLowerCase().includes(search.toLowerCase()) 
          
        )
      })
      console.log(arr.keyword)
      setPlaceholder(arr.keyword)
      setResults(filteredSearch)
      setSugg([])
      setKeyword("")
    };

    const queryJson = (e) => {
      if (e.key === "Enter") {
        const filteredSearch = defaultData.filter((data) => {
          return (
            data.eth.toLowerCase().includes(search.toLowerCase()) ||
            data.gen.toLowerCase().includes(search.toLowerCase()) ||
            data.iden.toLowerCase().includes(search.toLowerCase())
          );
        });
        setResults(filteredSearch);
      }
    };
    
    const clearInput = () => {
      setResults([])
      setSearch("")
      setSugg([])
      setKeyword("")
      setPlaceholder("What do you Identify as?")
    };
    console.log(`keyword: ${keyword}`)
    console.log(search)
    return (
      <div className="wrapper">
        <div className="search-input">
          <input
            type="text"
            placeholder={placeholder}
            value={search}
            onChange={querySuggestion}
            onKeyPress={queryJson}
          />
          <Suggestion 
          search={search} 
          sugg={sugg} 
          setSugg={setSugg} 
          queryAutoComplete={queryAutoComplete} 
          setSearch={setSearch}
          />

          <div className="searchIcon">
            { search.length > -1 ? (
              <RiCloseCircleLine
                icon="fa-solid fa-times-circle"
                className="icon"
                onClick={clearInput}
              />
            ) : (
              <BiSearchAlt icon="fa-solid fa-search" className="icon" />
            )}
          </div>
        </div>
      </div>
    );
};
export default SearchBar;