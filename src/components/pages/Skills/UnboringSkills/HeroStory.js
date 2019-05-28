import React from 'react'

import Hero from '../../../../images/Story.jpg'

import './HeroStory.css'

const HeroStory = () => {
  return (
    <div
        style = {{
            height: '50vh',
            background: `url(${Hero})`,
            marginTop: '-10vh',
            backgroundSize: 'cover',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundPosition: 'center'
        }}
    >
        <h1 
            className = "unboringHeading"
        >The Story Behind My Skills</h1>
    </div>
  )
}

export default HeroStory