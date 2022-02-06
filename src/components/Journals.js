import React from "react"
import pinpoint from "../images/pinpoint.png"
const Journals = ({journal}) => {
  return (
    <div>
        <div className="journal">
            <div className="imgContainer">
                <img src={journal.imageUrl} className="journal--image"/>
            </div>
            <div className="info">
                <div className="journal--line1">
                    <img src={pinpoint} className="journal--line1--pinpoint"/>
                    <h1 className="journal--line1--location">{journal.location}</h1>
                    <a href={journal.googleMapsUrl} className="journal--line1--maps" target="_blank">View on Google Maps</a>
                </div>

                <h1 className="journal--title">{journal.title}</h1>
                <h3 className="startDateEndDate">{journal.startDate} - {journal.endDate}</h3>
                <p className="description">{journal.description}</p>
            </div>

        </div>
        <div className="horizontal-line"></div>
    </div>
  )
}

export default Journals
