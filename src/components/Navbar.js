import React from "react"
import globe from "../images/globe.png"
// import addicon from "../images/addicon.png"
const Navbar = () => {
  return (
    <div className="navbar">
        {/* <img src={addicon} className="add-icon"/> */}
        <img src={globe} alt="globe-icon" className="globe-icon"/>
        <h1 className="navbar--title">Peter's Travel Journal</h1>
    </div>
    )
}

export default Navbar
