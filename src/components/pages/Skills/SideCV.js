import React from 'react'
import FontAwesome from 'react-fontawesome'

import './SideCV.css'

const SideCV = () => {
  return (
    <div
        style = {{
            margin: '2rem 0'
        }}
    >
        <h2
            style = {{
                fontSize: '2rem',
                color: '#222',
                marginBottom: '1rem'
            }}
            >Need a copy of my CV?</h2>
        <a 
            href = "https://www.dropbox.com/s/3vkphgfrrae6n48/CV%20-%20Nikola%20Gospodinov.pdf?dl=0"
            className = "cvButton"
        ><FontAwesome
            name = 'file-download'
            style = {{
                marginRight: '.5rem'
            }}
        />Download it here!</a>
    </div>
  )
}

export default SideCV