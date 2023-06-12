import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Suggestion = ({ search, sugg, queryAutoComplete, setKeyword }) => {

  
 
  const suggestionArray = sugg.map((arr) => (
      <div key={arr.id} onClick={() => queryAutoComplete(arr)}>
        <div className="col-12">{arr.keyword}</div>
      </div>
    ))

  
  return (
    <div className="container">
      {suggestionArray}
    </div>
  )
}
export default Suggestion