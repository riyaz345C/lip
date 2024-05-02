// const { useState } = require("react")
// const { dataFields } = require("./datafields")

// const [faq,setFaq] = useState(dataFields.faq)
//     const [amenities,setAmenities] = useState(dataFields.projectsAmmenities)
//     const [points,setPoints] = useState(dataFields.nearbyAttraction.points)
// const addQuestion = (e) => {
//     e.preventDefault()
//     setFaq(prv =>[...prv,{
//         id:prv[prv.length - 1].id+1,
//         question:'question',
//         answer:`answer`
//     }])
//     // window.scrollTo(0,document.body.scrollHeight)
//     // console.log(faq);    
// }
// const removeQuestion = (e) => {
//     e.preventDefault()
//     setFaq(prv => prv.slice(0,-1))
// }
// const addAmenities = (e) => {
//     e.preventDefault()
//     setAmenities(prv =>[...prv,{
//         id:prv[prv.length - 1].id+1,
//         img:'img',content:'content'
//     }])
//     // window.scrollTo(0,document.body.scrollHeight)
//     // console.log(faq);    
// }
// const removeAmenities = (e) => {
//     e.preventDefault()
//     setAmenities(prv => prv.slice(0,-1))
// }
// module.exports = {addQuestion,removeQuestion,addAmenities,removeAmenities}