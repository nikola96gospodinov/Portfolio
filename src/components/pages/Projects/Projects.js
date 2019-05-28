import React, { Component } from 'react'

import ProjectHero from './ProjectHero'
import ProjectsContent from './ProjectsContent'

class Projects extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(){
    return (
      <div>
          <ProjectHero/>
          <ProjectsContent/>
      </div>
    )
  }
}

export default Projects
