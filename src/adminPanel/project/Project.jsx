import React from 'react'
import useFetch from './useFetch'
import ProductInfo from './components/ProductInfo';
import Headline from '../../main/product/Headline';
import LocationAdvantage from '../../main/product/LocationAdvantage';
import ProjectHighSliderv2 from './components/ProjectHighSliderv2';
import ProductPlan from '../../main/product/ProductPlan';
import Faq from '../../main/component/FAQ/Faq';
import { api } from '../api';
import Example from '../../main/assets/Loader';
import img from '../../main/assets/main.avif'

let x = ['Overview', 'Location', 'Amenities','Specifications', 'Project', 'Plans' ,'FAQ’s']

function Project() {
  const [load,error,projectData] = useFetch(api.projects)
  console.log(load,error,projectData);
  // if(projectData) {
  //   const {projectName,subTitle,box} = projectData
  // }
  const srt = (x) => {return projectData.x}
  if(load || !projectData) return (<div style={{width:'100%',height:'200px'
  ,display:'flex',alignItems:'center',justifyContent:'center'}}>
    <Example/>
  </div>)
  return (
    <>
    <section className='product-section-1'> 
    <div className="img">
      <img src={img||`https://www.vgn.in/asset/img/banners/project-banner.jpg`} alt="" />
    </div>
    <div className="product-info">
    <ProductInfo projectName={projectData.projectName} 
    subtitle={projectData.subTitle}
    boxArray={projectData.box} />  
    </div>
    <div className="nav">
      {x.map((e,i)=>{
        return(
          <li key={i}>{e}</li>
        )
      })}
    </div>
    </section>
    <section className='product-section-2'>
      <div className="path">
        <span>Home</span> 
        <span>Projects</span> 
        <span>{projectData.projectName}</span>
      </div>
      <h1>{projectData.projectName}</h1>
      <Headline span={'Project'} div={'Overview'}/>
      <p>{projectData.projectOverview}</p>
    </section>
    <section className='product-section-3'>
      <Headline span={'Location'} div={'Advantage'}/>
      <iframe title='siteLocation'
       src={ projectData.location.startsWith('http')?projectData.location: `https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d124419.90613910851!2d80.0711615434066!3d12.964040045692853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a525e37fcf81ea3%3A0xfd16fdb72e898775!2s2nd%20Floor%2C%2059%2C%20Dharga%20Rd%2C%20Zamin%20Pallavaram%2C%20Rajaji%20Nagar%2C%20Pallavaram%2C%20Chennai%2C%20Tamil%20Nadu%20600043!3m2!1d12.964053!2d80.1535634!5e0!3m2!1sen!2sin!4v1714219410750!5m2!1sen!2sin`} 
       style={{border:0,width:'100%',height:'400px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

       <div className="location-cards">
       <LocationAdvantage title={projectData.nearByAttraction.title} data={projectData.nearByAttraction.points.map(e=>e.point)}/>
       {/* <LocationAdvantage title={'title'} data={[`Kings Engineering College - 9.5 kms`,`Rajalakshmi Engineering College - 3.5 kms`,`Maharishi Vidya Mandir School - 900 matchers`,]}/>
       <LocationAdvantage title={'title'} data={[`Kings Engineering College - 9.5 kms`,`Rajalakshmi Engineering College - 3.5 kms`,`Maharishi Vidya Mandir School - 900 matchers`,]}/>
       <LocationAdvantage title={'title'} data={[`Kings Engineering College - 9.5 kms`,`Rajalakshmi Engineering College - 3.5 kms`,`Maharishi Vidya Mandir School - 900 matchers`,]}/>
       <LocationAdvantage title={'title'} data={[`Kings Engineering College - 9.5 kms`,`Rajalakshmi Engineering College - 3.5 kms`,`Maharishi Vidya Mandir School - 900 matchers`,]}/> */}
       </div>
       {/* <p>VGN Brixton apartment project in Chennai is located in Irungattukottai, just opposite the Hyundai Manufacturing plant, and 
        enjoys excellent connectivity to various areas through major roads such as the Chennai-Bangalore Highway, Kundrathur-Sriperumbudur
         Road, Vellore-Chennai Road, and NH 48. The convenience of transport is further enhanced by Tiruvallur railway station, just 15 
         km away, which provides frequent train services. Irungattukottai Sipcot bus station acts as a nearby hub, connecting residents
          to the surrounding regions. With this strategic location and comprehensive transport options, VGN Brixton near Sriperumbudur
           has become an attractive choice, offering a diverse range of apartments to suit the needs of all potential homebuyers</p> */}
    </section>
    <div className="enquire-form">
      <h1 className="form-title">Enquire Form</h1>
      <input type="text" name="" id="" placeholder="Name" style={{background: '#fff',
border: '1px solid #bbb', padding: '12px 9px',width: '80%',margin:'0'}}/>
      <input type="number" name="" id="" placeholder="Number" />
      <input type="email" name="" id="" placeholder="Email" />
      <input type="submit" name="" id="" value={'submit'} className='submit' />
    </div>
    <section className='section project-highlights' >
   <Headline span={`Project`} div={`Highlights`}/>
   <ProjectHighSliderv2 ammArray={projectData.projectsAmmenities}/>
   </section>
   <ProductPlan img={api.get+'/'+projectData.projectPlan}/>
   <section className='section faq'>
      <Headline span={'Frequently Asked'} div={`Question`}/>
      {projectData.faq.map((e,i)=>{
        return(
          <Faq key={i} question={e.question} answer={e.answer}/>
        )
      })}
    </section>
    </>
  )
  
}

export default Project