import React from 'react'
import Card from '../Card/Card'
import './Education.css'

function Education() {
  let education = [
    {
      class: "10th",
      school: "Dr. Ambedkar Model High School Barghat (MP)",
      percentage: "78%",
      subject: "All Subjects"
    },
    {
      class: "12th",
      school: "Mission English Higher Secondary School Seoni (MP)",
      percentage: "84%",
      subject: "PCM"
    },
    {
      class: "BSC B.ed(Integrated Course)",
      school: "IES Collage of Education Bhopal (M.P.)",
      percentage: "77%",
      subject: "PCM"
    },
  ]
  return (
    <div className='education-main' id='myeducation'>
      <div className='education-left'>
        <span>Nidhi Bhagat's <p className='learning'>Learning Story</p> </span>
        <span>I studied at Dr. Ambedkar Model High School, scoring 78% in 10th. Later, at Mission English Higher Secondary School, I focused on PCM and earned 84% in 12th. Then, at IES College of Education, Bhopal, I completed a B.Sc B.Ed integrated course with 77%. My academic journey reflects my love for subjects like Physics, Chemistry, and Math, shaping a pathway filled with curiosity and dedication.</span>
      </div>
      <div className='eduction'>
        {education.map((ele, i) => {
          return <div className='CardGrup' key={i}><Card key={i} class={ele.class} school={ele.school} percentage={ele.percentage} subject={ele.subject} /> </div>
        })}
      </div>
      </div>
  )
}

export default Education