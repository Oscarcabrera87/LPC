import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import RenderGrid from './RenderGrid'
import SearchBar from './SearchBar'
import Header from './Header'
import Footer from './Footer'



const Main = () => {
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
        <div>
            <Header />
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
            <Footer />
        </div>
    )
    
    
}
export default Main