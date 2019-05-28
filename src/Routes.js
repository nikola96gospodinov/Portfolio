import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from './hoc/Layout'
import Home from './components/pages/Home/Home'
import ErrorPage from './components/pages/ErrorPage'
import AboutPage from './components/pages/About/AboutPage'
import Skills from './components/pages/Skills/Skills'
import BoringSkills from './components/pages/Skills/BoringSkills/BoringSkills'
import UnboringSkills from './components/pages/Skills/UnboringSkills/UnboringSkills'
import Projects from './components/pages/Projects/Projects'

class Routes extends Component {
    render(){
        return(
            <Layout>
                <Switch>
                    <Route path = "/skills/unboring" component = {UnboringSkills}/>
                    <Route path = "/skills/boring" component = {BoringSkills}/>
                    <Route path = "/projects" component = {Projects}/>
                    <Route path = "/skills" component = {Skills}/>
                    <Route path = "/about" component = {AboutPage}/>
                    <Route path = "/portfolio" component = {Home}/>
                    <Route path = "/portfolio/" component = {Home}/>
                    <Route path = "/" exact component = {Home}/>
                    <Route render = {() => <ErrorPage/>}/>
                </Switch>
            </Layout>
        )
    }
}

export default Routes