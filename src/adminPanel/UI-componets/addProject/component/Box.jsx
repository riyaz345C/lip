import React from 'react'

function Box({boxArray,headRefs,contentRefs,style}) {
  return (
    <>
    {boxArray.map((e,i)=>{
                return(<>
                <div className={`i ${style.box}`} key={i}> {/*css not working */}
                    <h4>box-{e.id}</h4>
                    <label htmlFor="">{e.head}</label>
                    <input type="text" ref={el => headRefs.current[i] = el}/>
                    <label htmlFor="">{e.content}</label>
                    <input type="text" ref={el => contentRefs.current[i] = el} />
                </div>
                </>)
            })}
    </>
  )
}

export default Box