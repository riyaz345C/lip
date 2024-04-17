import React, { createContext } from 'react'

const Pcontext = createContext(false)

function MainContext({child}) {
  

  const [foot,setFoot] = useState(false)

  function setFooter(x){
    setFoot(x)
  }
//   useEffect(()=>{
//     console.log(window.location.pathname );
//     // setFoot(window.location.pathname)
//   },[window.location.pathname])

  return (    
    <>
    <Pcontext.Provider value={{foot,setFooter}}>
        {child}
    </Pcontext.Provider>
    </>
  )
}

export default MainContext