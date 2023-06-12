import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import RenderGrid from './components/RenderGrid'
import SearchBar from './components/SearchBar'

/* To-do:
    1. Rendergrid will be a component that feeds a <Link to...> to every card after the map(...) => (). 
    2. Clean up the state.
    3. Verify props going into RenderGrid.*/

export default function Main() {
    const [defaultAuto, setDefaultAuto] = useState()
    const [defaultData, setDefaultData] = useState()

    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])
    const [sugg, setSugg] = useState([])
    const [keyword, setKeyword] = useState("")
    const [placeholder, setPlaceholder] = useState("What do you Identify as?")
    
    const data = useSelector(state => state.data)
    const suggestion = useSelector(state => state.suggestion)
    
    
    useEffect(() => {
        const createData = () => {
            setDefaultData(data)
            setDefaultAuto(suggestion)
        }
        return createData()
    }, [data, suggestion])  
   
    return (
        <div className='main'>
            <SearchBar 
            placeholder= {placeholder} 
            defaultData={defaultData} //JSON data for Grid
            defaultAuto={defaultAuto} // JSON data for auto-complete box
            search={search} 
            setSearch={setSearch} 
            setResults={setResults} 
            sugg={sugg} 
            setSugg={setSugg} 
            keyword={keyword}
            setKeyword={setKeyword}
            setPlaceholder={setPlaceholder}
            />
            <RenderGrid results={results} />           
        </div>
    )
    
    
}