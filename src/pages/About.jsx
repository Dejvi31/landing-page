import React from 'react'
import AboutBackground from "../assets/about-background.png"
import AboutBackgroundImage from "../assets/about-background-image.png"
import { BsFillPlayCircleFill } from 'react-icons/bs'

const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt="" />
        </div>
        <div className='about-section-image-container'>
            <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'>
                Food Is An Important Part Of A Balanced Diet
            </h1>
            <p className='primary-text'>
                Lorem huso siko tike nimkos jdklo ahhaks opodn ksdi isnkld alkja ksnjc 
            </p>
            <p className='primary-text'>
                Non koasdn asldj asd sad asd asd as dasds f ds sf ds fdsf dsf fds fsd 
            </p>
            <div className='about-buttons-container'>
                <button className='secondary-button'> Learn More </button>
                <button className='watch-video-button'><BsFillPlayCircleFill /> Watch Video </button>
            </div>
        </div>
    </div>
  )
}

export default About