import React from 'react'

import THC from '../../../images/THC.jpg'
import Portfolio from '../../../images/Portfolio.jpg'
import Notes from '../../../images/noteapp.jpg'
import Weather from '../../../images/weather-app.jpg'
import Photography from '../../../images/p-ch-photography.jpg'

import './ShowProjects.css'

const ShowProjects = () => {
    
    const items = [
        {
            pic: THC,
            title: "THC Dreams",
            description: "A website created for a local band using some advanced CSS and a bit of JavaScript.",
            languages: [
                "HTML",
                "CSS",
                "SASS",
                "JavaScript"
            ],
            gitHub: true,
            gitHubLink: "https://github.com/nikola96gospodinov/thcdreams",
            webpage: true,
            webPageLink: "https://nikola96gospodinov.github.io/thcdreams/"
        },
        {
            pic: Portfolio,
            title: "Portfolio Website",
            description: "This is the website that you are currently on. Most of the website is done with React including some styling.",
            languages: [
                "JavaScript",
                "React",
                "CSS"
            ],
            gitHub: true,
            gitHubLink: "https://github.com/nikola96gospodinov/PortfolioWebsite",
            webpage: false,
            webPageLink: ""
        },
        {
            pic: Notes,
            title: "Notes App",
            description: "A simple note taking app created with ES6 JavaScript. Please download from GitHub for full functionality.",
            languages: [
                "HTML",
                "CSS",
                "JavaScript"
            ],
            gitHub: true,
            gitHubLink: "https://github.com/nikola96gospodinov/NotesApp",
            webpage: true,
            webPageLink: "https://nikola96gospodinov.github.io/NotesApp/"
        },
        {
            pic: Weather,
            title: "Weather App",
            description: "An easy to use web app that gets accurate weather for a location of your choice using DarkSky API and Mapbox API.",
            languages: [
                "HBS",
                "CSS",
                "Node.js"
            ],
            gitHub: true,
            gitHubLink: 'https://github.com/nikola96gospodinov/WeatherApp',
            webpage: true,
            webPageLink: 'https://gospodinov-weather-app.herokuapp.com/'
        },
        {
            pic: Photography,
            title: "P.CH Photography",
            description: "Photography website inspired by Squarespace's theme Wells built entirely with React.",
            languages: [
                'React',
                'CSS'
            ],
            gitHub: true,
            gitHubLink: 'https://github.com/nikola96gospodinov/pChPhotography',
            webpage: true,
            webPageLink: 'https://pch-photography.herokuapp.com/'
        }
    ]

    const showProjects = () => {
        return items.map( (item, i) => {
            return(
                <div
                    key = {i}
                    style = {{
                        margin: '4rem 0 0 0',
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                        background: '#ddd',
                        width: '100%'
                    }}
                >
                    <div
                        style = {{
                            background: `url(${item.pic})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '25vh'
                        }}
                    ></div>
                    <h1
                        style = {{
                            color: '#ddd',
                            background: '#333',
                            width: '100%',
                            padding: '.75rem',
                        }}
                    >{item.title}</h1>
                    <p
                        className = "description"
                    >{item.description}</p>
                    <ul
                        style = {{
                            margin: '.75rem .75rem 1.5rem .75rem'
                        }}
                    >
                        {
                            item.languages.map( (item2, i) => {
                                return(
                                    <li className = "languages">{item2}</li>
                                )
                            })
                        }
                    </ul>
                    <div
                        style = {{
                            display: 'flex',
                            alignItems: 'flex-end',
                            height: '12vh',
                            borderTop: 'solid 1px #bbb',
                            justifyContent: 'space-between'
                        }}
                    >
                        {
                            item.gitHub ? 
                            <a
                                target="_blank"
                                href = {item.gitHubLink}
                                className = "ProjectsButtons"
                            >View on GitHub</a>
                            : null
                        }
                        {
                            item.webpage ?
                            <a
                                target="_blank"
                                href = {item.webPageLink}
                                className = "ProjectsButtons"
                            >View Online</a>
                            : null
                        }
                    </div>
                </div>
            )
        })
    }

    return (
    <div
        className = "projectsGrid"
    >
        {showProjects()}
    </div>
  )
}

export default ShowProjects
