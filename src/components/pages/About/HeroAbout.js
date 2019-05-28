import React from 'react'

import AboutHero from '../../../images/heroAbout.jpg'

import './HeroAbout.css'

const HeroAbout = () => {
    const getAge = () => {
        let today = new Date()
        let birthday = new Date("Jun 14, 1996 00:00:00")
        let age = today.getFullYear() - birthday.getFullYear()
        let month = today.getMonth() - birthday.getMonth()

        if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
            age--;
        }

        return age;
    }

    return(
        <div
            style = {{
                background: `url(${AboutHero})`,
                height: '50vh',
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
                className = "container"
                style = {{
                    paddingTop: '7.5rem'
                }}
            >
                <h1
                    className = "headingAboutPage"
                >Nikola Gospodinov</h1>
                <h3
                    className = "headingSecondaryAboutPage"
                >Front End Developer</h3>
                <div
                style = {{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '3rem'
                }}
                >
                    <div>
                        <ul
                            style = {{
                                textAlign: 'left',
                                listStyleType: 'none'
                            }}
                        >
                            <li
                                className = "listAbout"
                            >Age: <b>{getAge()}</b></li>
                            <li
                                className = "listAbout"
                            >Place of Birth: <b>Varna, Bulgaria</b></li>
                            <li
                                className = "listAbout"
                            >Martial Status: <b>Single</b></li>
                        </ul>
                    </div>
                    <div
                        className = "contactInfoAbout"
                    >
                        <ul
                            style = {{
                                textAlign: 'right',
                                listStyleType: 'none'
                            }}
                        >
                            <li
                                className = "listAbout"
                            >Location: <b>Bristol, U.K</b></li>
                            <li
                                className = "listAbout"
                            >Mobile number: <b>07763979908</b></li>
                            <li
                                className = "listAbout"
                            >Email: <b>nikola96gospodinov@gmail.com</b></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroAbout
