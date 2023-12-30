import React from 'react'
import myImage from '../../assets/1703797884963-removebg-preview.png'
import './Introduction.css'

const Introduction = () => {
  return (
    <>
    <div className='intro' id='introduction'>
        <div className="into-left">
            <span>Welcome to Nidhi's <p className='educational'>Educational Story</p></span>
            <span>Greetings! I am Nidhi Bhagat, a dedicated and passionate educator with a strong foundation in science and education. Holding a Bachelor's degree in B.Sc. and B.Ed., I am committed to fostering a positive and engaging learning environment for students. With a keen interest in teaching and a belief in the transformative power of education, I am eager to contribute to the academic growth and development of young minds.</span>
        </div>
        <div className="intro-right">
            <img src={myImage} alt="" />
        </div>
    </div>
    <div className='blur'>
    </div>
  </>
  )
}

export default Introduction
