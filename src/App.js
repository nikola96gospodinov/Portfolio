import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'


import Routes from './Routes'

import './App.css';

library.add(fab)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    );
  }
}

export default App;