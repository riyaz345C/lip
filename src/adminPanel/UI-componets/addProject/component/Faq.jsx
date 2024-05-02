import React from 'react'

function Faq({faqArray,questionRefs,answerRefs}) {
  return (
    <>
    {faqArray.length ? faqArray.map((e,i) => {
                return(<>
                <div className="faq" name={`question-${e.id}`}  key={i}>
                    <h3>Question No:{e.id}</h3>
                <div className="question">
                <label htmlFor="">{e.question}</label>
                <input type="text" ref={el=> questionRefs.current[i] = el}/>
                </div>
                <div className="answer">
                <label htmlFor="">{e.answer}</label>
                <input type="text" ref={el=> answerRefs.current[i] = el} />
                </div>
                </div>
                </>)
            }): 'loading...'}
    </>
  )
}

export default Faq