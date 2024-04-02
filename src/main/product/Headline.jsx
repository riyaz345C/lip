import React from 'react'

function Headline({span,div}) {
  return (
    <h1 className='head-line'><span>{span}</span> {div}</h1>
  )
}

export default Headline