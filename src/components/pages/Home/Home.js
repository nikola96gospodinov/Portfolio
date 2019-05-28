import React, { Component } from 'react'

import Hero from './Parts/Hero'
import Skills from './Parts/Skills'
import Projects from './Parts/Projects'
import AboutMe from './Parts/AboutMe'

class Home extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render(){
        return (
            <div>
                <Hero/>
                <Skills/>
                <Projects/>
                <AboutMe/>
            </div>
        )
    }
    
}

export default Home