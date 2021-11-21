import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import RenderGrid from './RenderGrid'
import SearchBar from './SearchBar'
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Container, Row } from "react-bootstrap"




     


const Main = () => {
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])
    const [defaultData, setDefaultData] = useState()
    const data = useSelector(state => state.data)
    
    
    useEffect(() => {
        const createData = () => {
            setDefaultData(data)
        }
        return createData()
    }, [data])  
   

    

    return (
        <div className="Main">
        <Header />
        <SearchBar placeholder="What do you identify as?" search={search} setSearch={setSearch}  setResults={setResults} defaultData={defaultData} />
            
                    {results.map(card => (
                        <RenderGrid key={card.id} {...card}/>
                    ))}
              
        <Footer />
        </div>
    )
    
    
}
export default Main