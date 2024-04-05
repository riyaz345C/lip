import React from 'react'


function Smallcard({icon1,title,content}) {
  return (
  <>

<div className="bel1">

<div className="sub1">
<div class="circles">
{icon1}
</div>
</div>


<div className='sub2'>
{title}

{content}
</div>
   
</div>





  </>
  )
}

export default Smallcard;