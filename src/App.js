import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Radium, { StyleRoot } from 'radium'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'


import Routes from './Routes'

import './App.css';

library.add(fab)

class App extends Component {

  render() {
    return(
      <StyleRoot>
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
      </StyleRoot>
    );
  }
}

export default App;