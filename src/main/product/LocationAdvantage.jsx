import React from 'react'
import './locadv.css'
function LocationAdvantage({title,data}) {
  return (
   <>
   <div className="locadv">
    <h3>{title}</h3>
    <div className="location-points">
    {data.map((e,i)=>{
        return(
            <li key={i}>{e}</li>
        )
    })}
    </div>
   </div>
   </>
  )
}

export default LocationAdvantage