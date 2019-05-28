import React, { Component } from 'react'

import HeroBoring from './Hero';
import SkillsList from './SkillsList';

class BoringSkills extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render(){
        return (
            <div>
                <HeroBoring/>
                <SkillsList/>
            </div>
        )
    }
}

export default BoringSkills