import React from 'react'

function Points({pointsArray,pointsRefs}) {
  return (
    <>
    {pointsArray.map((e,i) => {  
                    return(<>
                    <div className="point">
                    <label htmlFor="">point : {e}</label>
                    <input type="text" ref={el => pointsRefs.current[i] = el} />
                    </div>
                    </>)
                })}
    </>
  )
}

export default Points