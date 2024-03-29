import React from 'react'
import './tCard.css'
function TestimonialCard({style,name}) {
  return (
    <>
    <div className="test-card" style={style}>
        <img src={require('../assets/hero.avif')} alt="" />
        <div className="customer-info">
            <h2>name {name}</h2>
            <p>something down</p>
        </div>
        <div className="customer-message">some mesg over here 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique temporibus tempora, quam, quasi iusto quisquam illo quia et incidunt error, inventore voluptates repellat. Temporibus quo velit minus aperiam porro. Quasi.
        </div>
    </div>
    </>
    )
}

export default TestimonialCard