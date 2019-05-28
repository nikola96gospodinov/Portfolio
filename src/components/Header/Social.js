import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Social = () => {

    const items = [
        {
            icon: ['fab', 'linkedin'],
            text: '<LinkedIn/>',
            link: 'https://www.linkedin.com/in/nikola-gospodinov-55154a125/'
        },
        {
            icon: ['fab', 'github'],
            text: '<GitHub/>',
            link: 'https://github.com/nikola96gospodinov'
        }
    ]

    const showItems = () => {
        return items.map( (item, i) => {
            return(
                <div 
                    key = {i} 
                    style = {{
                        marginBottom: '.5rem',
                        paddingBottom: '.5rem',
                        borderBottom: '1px solid #eee',
                    }}
                >
                    <a
                        target="_blank"
                        href = {item.link}
                        style = {{
                            color: '#eee',
                            fontSize: '1.2rem'
                        }}
                    >
                        <FontAwesomeIcon 
                            icon = {item.icon}
                            style = {{
                                margin: '0 .8rem'
                            }}
                        />
                        <span className = "navLinks">{item.text}</span>
                    </a>
                </div>
            )
        })
    }

    return (
        <div>
            {showItems()}
        </div>
    )
}

export default Social