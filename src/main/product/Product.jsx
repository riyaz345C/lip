import React from 'react'
import ProductInfo from './ProductInfo'
import './product.css'
import Headline from './Headline'
import LocationAdvantage from './LocationAdvantage'
// import { BiSolidCheckbox } from "react-icons/bi";
import SliderOwn from '../component/SliderOwn'
import ProductPlan from './ProductPlan'
import { faqData } from '../data/faq'
import Faq from '../component/FAQ/Faq'
// import SliderCard from '../component/Projecthighlight/SliderCard'
import ProjectHighSlider from '../component/Projecthighlight/ProjectHighSlider'
// import {} from '../component/Faq'


let x = ['Overview', 'Location', 'Amenities','Specifications', 'Project', 'Plans' ,'FAQ’s']
function Product() {
  return (
    <>
    <section className='product-section-1'> 
    <div className="img">
      <img src={`https://www.vgn.in/asset/img/banners/project-banner.jpg`} alt="" />
    </div>
    <div className="product-info">
      <ProductInfo/>
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
        <span>VGN Brixton</span>
      </div>
      <h1>VGN Brixton- 2BHK Flats in Irungattukottai</h1>
      <Headline span={'Project'} div={'Overview'}/>
      <p>With alluring features and facilities, VGN Brixton is an affordable abode for home buyers looking for 
        apartments for sale in Chennai - Sriperumbudur. Spread across 23 acres and a layout of 1872 housing units 
        with a total built-up area of over 1.6 million sq. ft., the project is set to fulfill the residential
         housing needs in Sriperumbudur and surrounding areas. With better commuting facilities and a six-lane 
         highway nearby, the project offers 2 BHK flats and 3 BHK flats sizes ranging from 738 sq. ft. to 1976 
         sq. ft., is the best living experience in this rapidly developed area</p>
    </section>
    <section className='product-section-3'>
      <Headline span={'Location'} div={'Advantage'}/>
      <iframe title='siteLocation'
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.202949887366!2d80.12521917505123!3d12.958861515157503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f726135a1bd%3A0x8af8c672136b7198!2sSai%20Sports%20Badminton%20Academy!5e0!3m2!1sen!2sin!4v1711795166601!5m2!1sen!2sin" 
       style={{border:0,width:'100%',height:'400px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

       <div className="location-cards">
       <LocationAdvantage title={'title'} data={[`Kings Engineering College - 9.5 kms`,`Rajalakshmi Engineering College - 3.5 kms`,`Maharishi Vidya Mandir School - 900 matchers`,]}/>
       <LocationAdvantage title={'title'} data={[`Kings Engineering College - 9.5 kms`,`Rajalakshmi Engineering College - 3.5 kms`,`Maharishi Vidya Mandir School - 900 matchers`,]}/>
       <LocationAdvantage title={'title'} data={[`Kings Engineering College - 9.5 kms`,`Rajalakshmi Engineering College - 3.5 kms`,`Maharishi Vidya Mandir School - 900 matchers`,]}/>
       <LocationAdvantage title={'title'} data={[`Kings Engineering College - 9.5 kms`,`Rajalakshmi Engineering College - 3.5 kms`,`Maharishi Vidya Mandir School - 900 matchers`,]}/>
       <LocationAdvantage title={'title'} data={[`Kings Engineering College - 9.5 kms`,`Rajalakshmi Engineering College - 3.5 kms`,`Maharishi Vidya Mandir School - 900 matchers`,]}/>
       </div>
       <p>VGN Brixton apartment project in Chennai is located in Irungattukottai, just opposite the Hyundai Manufacturing plant, and 
        enjoys excellent connectivity to various areas through major roads such as the Chennai-Bangalore Highway, Kundrathur-Sriperumbudur
         Road, Vellore-Chennai Road, and NH 48. The convenience of transport is further enhanced by Tiruvallur railway station, just 15 
         km away, which provides frequent train services. Irungattukottai Sipcot bus station acts as a nearby hub, connecting residents
          to the surrounding regions. With this strategic location and comprehensive transport options, VGN Brixton near Sriperumbudur
           has become an attractive choice, offering a diverse range of apartments to suit the needs of all potential homebuyers</p>
    </section>
    <div className="enquire-form">
      <h1 className="form-title">Enquire Form</h1>
      <input type="text" name="" id="" placeholder="Name" />
      <input type="number" name="" id="" placeholder="Number" />
      <input type="email" name="" id="" placeholder="Email" />
      <input type="submit" name="" id="" value={'submit'} className='submit' />
    </div>
   <section className='section project-highlights' >
   <Headline span={`Project`} div={`Highlights`}/>
   <ProjectHighSlider/>
   </section>
   <section className='section section-spec'>
    <div className="product-spec1">sqqsq</div>
    <div className="product-spec2"> sqsq</div>
   </section>
    <ProductPlan/>
    {/* <BiSolidCheckbox style={{color:'#f00'}}/> */}
    {/* <section className='section'>
      <Headline span={'Construction'} div={`Progress Images`}/>
      <div className="construction-slider">
       <SliderOwn/>
      </div>
    </section> */}
    <section className='section faq'>
      <Headline span={'Frequently Asked'} div={`Question`}/>
      {faqData.map((e,i)=>{
        return(
          <Faq key={i} question={e.question} answer={e.answer}/>
        )
      })}
    </section>
    <section className='section'>
      <SliderOwn/>
    </section>
    </>
  )
}

export default Product
