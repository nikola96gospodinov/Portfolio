import React from 'react'

import Hero from '../../../images/projectHero.jpg'

const ProjectHero = () => {
  return (
    <div
        style = {{
            height: '50vh',
            background: `url(${Hero})`,
            marginTop: '-10vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}
    >
      <h1
        style = {{
            fontSize: '3.2rem',
            marginTop: '8rem',
            color: '#ccc'
        }}
      >Projects</h1>
    </div>
  )
}

export default ProjectHero
