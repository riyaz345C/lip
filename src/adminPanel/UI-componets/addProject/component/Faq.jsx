import React from 'react'
import sty from '../addform.module.css'

function Faq({faqArray,questionRefs,answerRefs,data,set,update}) {
  const handlefaq = (event,index,field) =>{
  if(update){
      set(prv=> prv.map((e,i)=>{
        if(i === index){
          return {...e, [field]:event.target.value}
        }
        return e
      }))
      console.log(faqArray,set,event.target.value,index,field);
    }
    console.log(faqArray,set,event.target.value,index,field);
  }
  return (
    <>
    {faqArray.length ? faqArray.map((e,i) => {
                return(<>
                <div className="faq" name= {`question-${e.id}`}  key={i}>
                    <h3>Question No:{e.id}</h3>
                <div className="question">
                <label htmlFor="">question {/*e.question */} </label>
                <input className={`${sty.input}`} type="text" ref={el=> questionRefs.current[i] = el} 
                value={(update?e.question:null)||null} onChange={(e)=>{handlefaq(e,i,'question')}} />
                </div>
                <div className="answer">
                <label htmlFor=""> answer {/*e.answer */} </label>
                <textarea className={`${sty.input}`} style={
                {maxWidth:'100%',minWidth:'100%',
                maxHeight:'134px',
                fontFamily:'poppins',
                border:'1px dashed #aaa',
                outline:'none',padding:'10px 10px 0',}
              }
                 type="text" ref={el=> answerRefs.current[i] = el} 
                value={(update?e.answer:null)||null} onChange={(e)=>{handlefaq(e,i,'answer')}}/>
                </div>
                </div>
                </>)
            }): 'loading...'}
    </>
  )
}

export default Faq