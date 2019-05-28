import React from 'react'
import { Link } from 'react-router-dom'

import './AboutMe.css'

const AboutMe = () => {
    return (
        <div
            className = "containerMainAbout"
        >
            <div
                className = "headingAboutDiv"
            >
                <h2
                    className = "aboutHeading"
                >
                    <span
                        style = {{
                            color: '#376EB6',
                            borderLeft: '3px solid #333',
                            padding: '1.5rem 0 1.5rem 1.5rem'
                        }}
                    >{h1TextOpen}</span>
                    <span
                        style = {{
                            color: '#ccc'
                        }}
                    >About me</span>
                    <span
                        style = {{
                            color: '#376EB6'
                        }}
                    >{h1TextClose}</span>
                </h2>
            </div>
            <div
                className = 'container aboutTextPicture'
            >
                <div
                    className = "left"
                >
                    <p 
                    >
                        As you can see from the website I am a fan of minimalism
                        which I apply not only to my projects but also to my life
                        in general with a  hint of complexity here and there
                        and attention to details. 
                        <br/>
                        Probably the biggest thing that separates me from the 
                        people my age is that I am Straight Edge (no drinking,
                        no smoking, and no drugs) for over 2.5 years now. I am
                        really passionate when it comes to my health as I try 
                        to maintain a healthy lifestyle through proper diet, 
                        exercise, and a regular sleeping schedule.
                    </p>
                    <Link
                        to = "/about"
                        className = "buttonAboutHome"
                    >Discover More!</Link>
                </div>
                <div 
                    className = "right"
                >
                </div>
            </div>
        </div>
    )
}

const h1TextOpen = "<h1>"
const h1TextClose = "</h1>"

export default AboutMe