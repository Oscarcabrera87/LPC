import React, { useState } from "react"
import "./App.css"
import Data from "./Data";




function App() {

  const [searchTerm, setSearchTerm] = useState('')

  console.log(typeof(searchTerm))
  return (
    <div className="App">

      <input 
      type="text" 
      placeholder="What is your Identity..." 
      onChange={e=>setSearchTerm(e.target.value)
      //This is where I will build an expanded div box that will give suggestions for eth, iden, and gen
      }/>

      {Data.filter((val) => {
            if(searchTerm === "") {
              return val
            } 
            if (val.eth.toLowerCase().includes(searchTerm.toLowerCase())){
              return val
            }
            else if (val.gen.toLowerCase().includes(searchTerm.toLowerCase())){
              return val
            }
            else if (val.iden.toLowerCase().includes(searchTerm.toLowerCase())){
              return val
            }
      }).map((val,key) => {
        //This is where I will build a RenderCard Component. The Search Terms (eth, iden, gen) give me this output. I will need a trruthy statement as a barrior to give the && or terniery. 
          return <div>`{val.author.firstN} {val.author.lastN}`</div>
      })}
    </div>
  )
}

export default App;
