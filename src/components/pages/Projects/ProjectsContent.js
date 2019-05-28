import React from 'react'

import ProjectItems from './ProjectItems'

const ProjectsContent = () => {
  return (
    <div
        style = {{
            background: '#ccc'
        }}
    >
        <div
            className = "container"
        >
            <ProjectItems/>
        </div>
    </div>
  )
}

export default ProjectsContent
