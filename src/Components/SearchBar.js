import React from "react"
import { BiSearchAlt } from 'react-icons/bi'
import { RiCloseCircleLine} from 'react-icons/ri'

    

const SearchBar = ({placeholder, search, setResults, setSearch, defaultData}) => {


    const queryJson = () => {
        const filteredSearch = defaultData.filter((data) => {
            return (
                data.eth.toLowerCase().includes(search) ||
                data.gen.toLowerCase().includes(search) ||
                data.iden.toLowerCase().includes(search)
            )
        })
        setResults(filteredSearch)
    }
    
    const clearInput = () => {
        setResults([])
        setSearch("")
    }
    
    return(
        <div className="search">
            <div className="searchInputs">
                <div className="searchIcon">
                    {search.length > 0 ? (
                        <RiCloseCircleLine icon="fa-solid fa-times-circle" onClick = {clearInput} />
                    ) : (
                        <BiSearchAlt icon="fa-solid fa-search" />
                    )}

                </div>
                <input
                    type="text"
                    placeholder={placeholder}
                    value={search}
                    onChange={ e => setSearch(e.target.value.toLowerCase())}
                />
                <button className="btn bg-primary" onClick={queryJson}>
                    Search
                </button>
            </div>
        </div>
    )
}
export default SearchBar