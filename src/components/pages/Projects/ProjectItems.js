import React, { Component } from 'react'
import ShowProjects from './ShowProjects';

class ProjectItems extends Component {

    render(){
        return (
            <div
                style = {{
                    marginBottom: "4rem"
                }}
            >
                <ShowProjects/>
            </div>
        )
    }
}

export default ProjectItems
