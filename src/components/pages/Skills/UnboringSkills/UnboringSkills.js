import React, { Component } from 'react'

import HeroStory from './HeroStory'
import Story from './Story'

class UnboringSkills extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(){
    return (
      <div>
        <HeroStory/>
        <Story/>
      </div>
    )
  }
}

export default UnboringSkills