import React from 'react'
import { Switch, Route } from "react-router-dom";
import { version } from '../package.json';
import Homepage from './containers/Home'
import CacheBuster from 'react-cache-buster';
import Cursor from './components/cursor/Cursor'

function App() {
  return (
    // const isProduction = process.env.NODE_ENV === 'production';
    <CacheBuster
      currentVersion={version}
      isEnabled={true} //If false, the library is disabled.
      isVerboseMode={false} //If true, the library writes verbose logs to console.
      loadingComponent={<></>} //If not pass, nothing appears at the time of new version check.
    >
      <div className="App">
        <Cursor />
        <Switch>
          <Route exact path='/' component={Homepage} />
        </Switch>
      </div>

    </CacheBuster>
  )
}

export default App;
