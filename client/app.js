import React from 'react'

import {Navbar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <div id="Toolbar">
        <a href="/">Homepage</a>
      </div>
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
