import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ErrorPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render(){
        return(
            <div 
                className = "container"
                style = {{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                }}
            >
                <h2
                    style = {{
                        color: '#ddd',
                        marginTop: '3rem',
                        fontSize: '1.8rem'
                    }}
                >
                    404: Page Not Found
                </h2>
                <h1
                    style = {{
                        color: '#bbb',
                        fontSize: '2.5rem'
                    }}
                >
                    This page could not be found!
                </h1>
                <Link 
                    to = "/"
                    style = {{
                        color: '#eee',
                        textTransform: 'uppercase',
                        padding: '1rem 2rem',
                        border: 'solid 2px #eee',
                        fontSize: '1.4rem',
                        margin: '3rem 0',
                        display: 'inline-block',
                        fontWeight: '500'
                    }}
                >
                    Back to Homepage
                </Link>
            </div>
        )
    }
}

export default ErrorPage