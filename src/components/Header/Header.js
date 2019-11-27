import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import Radium from 'radium'

import logoMain from '../../images/logo_transparent.png'

import SideNav from './SideNav.js'

class Header extends Component {

    state = {
        showNav: false
    }
    
    showNav = () => {
        this.setState({
            showNav: true
        })
    }

    hideNav = () => {
        this.setState({
            showNav: false
        })
    }

    render() {
        return (
            <React.Fragment>
                <SideNav 
                    navigationState = {this.state.showNav}
                    hideNav = {this.hideNav}
                />
                <header className = "header container"
                    style = {{
                        background: 'trasparent',
                        height: '10vh'
                    }}
                >
                    <div className = "headerOpt"
                        style = {{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '1rem'
                        }}
                    >
                        <Link 
                            to = "/" 
                            style = {{
                                zIndex: '1000'
                            }}
                        >
                            <img alt = "Nikola Gospodinov" src = {logoMain}
                                style = {{
                                    width: '9rem',
                                    '@media (max-width: 400px)': {
                                        width: '8rem'
                                    }
                                }}
                            />
                        </Link>
                        <div 
                            className = "bars"
                            style = {{
                                '@media (max-width: 400px)': {
                                    marginTop: '-.5rem',
                                    marginRight: '1rem'
                                }
                            }}
                        >
                            <FontAwesome 
                                name = "bars"
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
                                onClick = {this.showNav}
                            />
                        </div>
                    </div>
                </header>
            </React.Fragment>
        )
    }
}

export default Radium(Header)