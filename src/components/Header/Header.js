import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

import logoMain from '../../images/logo_transparent.png'

import SideNav from './SideNav.js'

const Header = (props) => {

    const navBars = () => (
        <div className = "bars">
            <FontAwesome name = "bars"
                onClick = {props.onOpenNav}
                style = {{
                    color: '#333',
                    padding: '0.9rem',
                    cursor: 'pointer',
                    fontSize: '1.2rem',
                    background: '#fff',
                    borderRadius: '300px',
                    marginTop: '0.5rem',
                    position: 'fixed',
                    zIndex: '1000'
                }}
            />
        </div>
    )

    const logo = () => (
        <Link 
            to = "/" 
            className = {logo}
            style = {{
                zIndex: '1000'
            }}
        >
            <img alt = "Nikola Gospodinov" src = {logoMain}
                style = {{
                    width: '9rem'
                }}
            />
        </Link>
    )

    return (
        <header className = "header container"
            style = {{
                background: 'trasparent',
                height: '10vh'
            }}
        >
            <SideNav {...props}/>
            <div className = "headerOpt"
                style = {{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '1rem'
                }}
            >
                {logo()}
                {navBars()}
            </div>
        </header>
    )
}

export default Header