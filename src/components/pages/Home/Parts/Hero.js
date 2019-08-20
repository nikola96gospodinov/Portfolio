import React from 'react'
import FontAwesome from 'react-fontawesome'

import heroImage from '../../../../images/hero.jpg'

import './Hero.css'

const Hero = () => {
    return (
        <div
            style = {{
                background: `url(${heroImage})`,
                width: '100%',
                height: '100vh',
                marginTop: '-10vh',
                backgroundPosition: 'bottom',
                backgroundSize: 'cover',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
            }}
        >
            <div
                style = {{
                    margin: 'auto'
                }}
            >
                <h1
                    className = "heroHomeMain"
                >Nikola Gospodinov</h1>
                <h3
                    className = "heroHomeSecondary"
                >Front-End Developer</h3>
            </div>
            <a
                className = "heroHomeButton"
                href = "#Skills"
            >
                <p
                    style = {{
                        color: '#fff'
                    }}
                >Learn More</p>
                <FontAwesome 
                    name = "arrow-down"
                    className = "arrowDownHero"
                />
            </a>
        </div>
    )
}

export default Hero