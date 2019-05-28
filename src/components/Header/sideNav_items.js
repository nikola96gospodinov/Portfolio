import React from 'react'
import { Link } from 'react-router-dom'

import FontAwesome from 'react-fontawesome'

import '../../App.css'


const SideNavItems = () => {

    const items = [
        {
            type: "option",
            icon: 'home',
            text: '<Home/>',
            link: '/'
        },
        {
            type: "option",
            icon: 'file',
            text: '<Skills/>',
            link: '/skills'
        },
        {
            type: "option",
            icon: 'project-diagram',
            text: '<Projects/>',
            link: '/projects'
        },
        {
            type: "option",
            icon: 'address-card',
            text: '<About/>',
            link: '/about'
        }
    ]

    const showItems = () => {
        return items.map( (item, i) => {
            return(
                <div 
                    key = {i} 
                    className = {item.type}
                    style = {{
                        marginBottom: '.5rem',
                        paddingBottom: '.5rem',
                        borderBottom: '1px solid #eee',
                    }}
                >
                    <Link 
                        to = {item.link}
                        style = {{
                            color: '#eee',
                            fontSize: '1.2rem'
                        }}
                    >
                        <FontAwesome 
                            name = {item.icon}
                            style = {{
                                margin: '0 .8rem'
                            }}
                        />
                        <span className = "navLinks">{item.text}</span>
                    </Link>
                </div>
            )
        })
    }

    return(
        <div>
            {showItems()}
        </div>
    )
}

export default SideNavItems