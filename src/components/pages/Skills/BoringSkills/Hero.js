import React from 'react'

import Hero from '../../../../images/SkillsHero.jpg'

import './Hero.css'

const HeroBoring = () => {
    return (
        <div
            style = {{
                background: `url(${Hero})`,
                height: '50vh',
                marginTop: '-10vh',
                backgroundPosition: '50% 60%',
                backgroundSize: 'cover',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <h1
                className = "boringHeading"
            >List of Skills</h1>
        </div>
    )
}

export default HeroBoring