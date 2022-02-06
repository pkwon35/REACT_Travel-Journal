import React from "react"
import Navbar from "./components/Navbar"
import Journals from "./components/Journals"
import data from "./data"
function App() {
  const journals = data.map(journal=>{return (<Journals key={journal.id} journal={journal}/>)})
  return (
    <div className="App">
      <Navbar/>
      <div className="journals">
        {journals.reverse()}
      </div>
    </div>
  )
}

export default App
