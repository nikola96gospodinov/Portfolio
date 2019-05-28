import React from 'react'
import { Link } from 'react-router-dom'

import './Projects.css'

const Projects = () => {
    return (
        <div
            className = "projectsHome"
        >
            <div
                style = {{
                    background: '#333'
                }}
            >
                <div
                    style = {{
                        width: '75%',
                        marginLeft: 'auto',
                        marginRight: '0',
                        textAlign: 'right'
                    }}
                >
                    <h1
                        className = "pro"
                    >Pro</h1>
                    <Link
                        className = "buttonLeft"
                        to = "/projects"
                    >Discover</Link>
                </div>
            </div>
            <div
                style = {{
                    background: '#ccc'
                }}
            >
                <div
                    style = {{
                        width: '75%',
                        marginLeft: '0',
                        marginRight: 'auto'
                    }}
                >
                    <h1
                        className = "ject"
                    >jects</h1>
                    <Link
                        className = "buttonRight"
                        to = "/projects"
                    >Projects</Link>
                </div>
            </div>
        </div>
    )
}

export default Projects