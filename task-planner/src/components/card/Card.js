import React from 'react'
import './Card.css'

export default function Card({title, content}){
    return(
        <div className='card'>
            <div className='card-header'>
                <p>{title}</p>
            </div>
            <div className='card-body'>
                <p>{content}</p>
            </div>
        </div>
    )
}