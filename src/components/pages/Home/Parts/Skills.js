import React from 'react'
import { Link } from 'react-router-dom'

import './Skills.css'

const Skills = () => {
    return(
        <div
            className = "mainContainer"
            id = "Skills"
        >
            <div
                style = {{
                    background: '#ccc'
                }}
            >
                <div
                    className = "boring"
                >
                    <h1><i>Skills</i> - a boring list</h1>
                    <h2>If you want just a simple list of the skills that I have that you can easily download and show to your boss or keep as a reference then this is the right section for you! </h2>
                    <Link
                        className = "boringSkillsHome"
                        to = "/skills/boring"
                    >Get the List</Link>
                </div>
            </div>
            <div
                style = {{
                    background: '#333'
                }}
            >
                <div
                    className = "unboring"
                >
                    <h1><i>Skills</i> - the unboring story</h1>
                    <h2>If you don't want just a boring list of the skills that I have but want to read the story of my journey towards acquiring my skills then this is the right section for you!</h2>
                    <Link
                        className = "unboringSkillsHome"
                        to = "/skills/unboring"
                    >Discover the Story</Link>
                </div>
            </div>
        </div>
    )
}

export default Skills 