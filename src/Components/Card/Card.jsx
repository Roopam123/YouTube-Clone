import React from 'react'
import './Card.css'
import one from '../../assets/one.png'

function Card(props) {
    return (
        <div className='card'>
            <div className='top'>
                <img src={one} alt="" />
            </div>
            <div className='buttom'>
                <span><span>Class:</span> {props.class}</span>
                <span><span>School:</span> {props.school}</span>
                <span><span>Percentage:</span> {props.percentage}</span>
                <span><span>Subject:</span> {props.subject}</span>
            </div>
        </div>
    )
}

export default Card
