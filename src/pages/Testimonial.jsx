import React from 'react'
import ProfilePic from "../assets/john-doe-image.png"
import {AiFillStar} from "react-icons/ai"

const Testimonial = () => {
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Testimonials</p>
            <h1 className='primary-heading'>What They Are Saying</h1>
            <p className='primary - text'>
                Lorem ashdsa asiodjh asidoh usadhushd asd asd asdklasjhdlkjsakld sakdaskdhs dsjis hd sidhi uhssidh isd 
            </p>
        </div>
        <div className='testimonial-section-bottom'>
            <img src={ProfilePic} alt="" />
            <p>Lorem sad sa asd asd saiodjiosaj djsaio jdiojsad iojsadio jiosajd iojisaj diojas aisd</p>
        <div className='testimonials-stars-container'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
        </div>

    </div>
  )
}

export default Testimonial