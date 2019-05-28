import React from 'react'
import { Link } from 'react-router-dom'

import './Interests.css'

const Interests = () => {
    return(
        <div
            style = {{
                background: '#ccc',
                height: 'auto'
            }}
        >
            <div className = "container">
                <h1
                    style = {{
                        textAlign: 'center',
                        marginTop: '3rem',
                        marginBottom: '1.5rem',
                        color: '#333',
                        fontSize: '2.8rem'
                    }}
                >Interests</h1>
                <div
                    className = "interestsGrid"
                >
                    <ul>
                        <li
                            style = {listStyle}
                        >Ecology – supporter of ecosia.org and actively using the search engine for over a year; contributor to Avon Wildlife</li>
                        <li
                            style = {listStyle}
                        >Reading self-improvement books – “Tools of Titans” by Tim Ferriss, “Awaken the Giant Within” by Anthony ‘Tony’ Robbins, “Mastery” by Robert Greene just to name a few </li>
                        <li
                            style = {listStyle}
                        >Listening to podcasts on healthy eating, business, online marketing, self-improvement and productivity – “Bulletproof Radio” by Dave Asprey on “biohacking”, “Empire Podcast Show” by Bedros Keuilian and “The Tony Robbins Podcast” on business, “Social Media Marketing Podcast” by Michael Stelzner, “The Art of Charm” on social skills, “The Model Health Show” by Shawn Stevenson on health, “The School of Greatness” by Lewis Howes and “The Tim Ferriss Show” by Tim Ferris on interviews with influential people </li>
                        <li
                            style = {listStyle}
                        >Football – Liverpool FC supporter </li>
                        <li
                            style = {listStyle}
                        >Formula 1 – Ferrari supporter </li>
                        <li
                            style = {listStyle}
                        >Professional wrestling – World Wrestling Entertainment (WWE) </li>
                        <li
                            style = {listStyle}
                        >Brain games – the popular National Geographic show </li>
                    </ul>
                    <ul>
                        <li
                            style = {listStyle}
                        >Reading books on psychology and human behaviour – a major factor in developing my “social engineering skills” – “Influence: The Psychology of Persuasion” by Robert Cialdini, “The Psychology of Selling” by Brian Tracy, “48 Laws of Power” and “Laws of Human Nature” by Robert Greene to name a few </li>
                        <li
                            style = {listStyle}
                        >Reading business books – “The Lean Startup” by Eric Ries, “Zero to One” by Peter Thiel (co-founder of PayPal and first outside investor in Facebook), “Good to Great” by James Collins, “Losing My Virginity” by Richard Branson to name a few </li>
                        <li
                            style = {listStyle}
                        >Maintaining a healthy lifestyle – going to a gym 2 to 4 times per week, maintaining a healthy diet, having a regular sleep schedule and meditation for 20 minutes every day </li>
                        <li
                            style = {listStyle}
                        >Cooking – a major part of my healthy lifestyle </li>
                        <li
                            style = {listStyle}
                        >Former member of an acting class – a hobby that helped me develop my communication skills further </li>
                        <li
                            style = {listStyle}
                        >Astronomy – former member of an astronomy club and a fan of the book “The Elegant Universe” by Brian Greene </li>
                    </ul>
                </div>
                <h2
                    style = {{
                        textAlign: 'center',
                        marginTop: '1.5rem',
                        marginBottom: '1.5rem',
                        color: '#222',
                        fontSize: '2.1rem'
                    }}
                >Don't care about my interests?</h2>
                <div
                    style = {{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gridGap: '1.5rem'
                    }}
                >
                    <Link
                        to = "/skills"
                        className = "aboutButtons"
                    >Skills</Link>
                    <Link
                        to = "projects"
                        className = "aboutButtons"
                    >Projects</Link>
                </div>
            </div>
        </div>
    )
}

const listStyle = {
    listStylePosition: 'inside',
    fontSize: '1.05rem',
    textAlign: 'justify',
    listStyleType: 'circle',
    listStyle: '1rem',
    color: "#333"
}

export default Interests