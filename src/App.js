import React from 'react'
import { Switch, Route } from "react-router-dom";
import Homepage from './containers/Home'
import Cursor from './components/cursor/Cursor'

function App() {
  return (
    
      <div className="App">
        <Cursor />
        <Switch>
          <Route exact path='/' component={Homepage} />
        </Switch>
      </div>
  )
}

export default App;
