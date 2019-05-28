import React, { Component } from 'react'

import HeroAbout from './HeroAbout'
import Interests from './Interests'

class AboutPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render(){
        return (
            <div>
                <HeroAbout/>
                <Interests/>
            </div>
        )
    }
}

export default AboutPage