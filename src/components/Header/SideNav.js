import React from 'react'
import FontAwesome from 'react-fontawesome'
import Radium from 'radium'

import SideNavItems from './sideNav_items'
import Social from './Social'

import logoMain from '../../images/logo_transparent.png'

const SideNavigation = (props) => {

        return (
            <React.Fragment>
            {
                props.navigationState ? 
                <div
                    onClick = {props.hideNav}
                    style = {{
                        width: '100%',
                        height: '100%',
                        position: 'fixed',
                        background: 'rgba(0, 0, 0, .75)',
                        zIndex: '1001',
                        display: 'flex'
                    }}
                >
                    <div
                        style = {{
                            width: '17.5%',
                            position: 'fixed',
                            background: '#333',
                            height: '100%',
                            zIndex: '1002',
                            '@media (max-width: 600px)': {
                                width: '60%'
                            }
                        }}
                    >
                        <div
                            style = {{
                                background: '#222',
                                height: '10vh',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-end'
                            }}
                        >
                            <img
                                src = {logoMain}
                                style = {{
                                    marginLeft: '1rem',
                                    height: '3rem',
                                    marginBottom: '.5rem',
                                    '@media (max-width: 600px)': {
                                        marginBottom: '0'
                                    }
                                }}
                            />
                        </div>
                        <SideNavItems/>
                        <Social/>
                    </div>
                    <div
                        onClick = {props.hideNav}
                        style = {{
                            height: '10vh',
                            background: 'linear-gradient(to right, #222, #444)',
                            width: '3.5%',
                            zIndex: '1003',
                            marginLeft: '17.5%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            '@media (max-width: 600px)': {
                                marginLeft: '60%',
                                width: '10%',
                                background: '#222'
                            }
                        }}
                    >
                    <a>
                        <FontAwesome 
                            name = 'angle-left'
                            style = {{
                                color: '#eee',
                                fontSize: '1.8rem'
                            }}    
                        />
                    </a>
                    </div>
                </div> : null
            }
            </React.Fragment>
        )
}

export default Radium(SideNavigation)